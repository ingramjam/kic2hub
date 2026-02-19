# Kick It Ca Quiz Integration Guide

This guide shows how to integrate your existing Hubspot quiz with Kick It Ca to capture and track assessment results.

## Overview

Your Hubspot build includes a sophisticated CUDIT quiz (Cannabis Use Disorders Identification Test) that:
- Scores user responses (Low Risk, Hazardous Use, Possible Use Disorder)
- Displays results with personalized messaging
- Allows quiz retakes

This integration enables you to:
1. **Capture quiz results** from your Hubspot pages
2. **Send to Kick It Ca** for lead generation and follow-up
3. **Track user journeys** across both platforms
4. **Personalize outreach** based on risk assessment

## How It Works

### 1. Quiz Submission Flow

When a user completes your Hubspot quiz:

```
Hubspot Quiz (About-Us-Page.html)
    ↓
KicQuizManager.submitQuizResults()
    ↓
POST /api/quiz-results (Your Node.js backend)
    ↓
Kick It Ca API / Database
    ↓
Hubspot Contact Sync
```

### 2. Updating Your Hubspot Template

Add this to your quiz template's **Footer HTML** to enable tracking:

```html
<!-- Kick It Ca Quiz Integration -->
<script src="/quiz-integration.js"></script>
<script>
// Initialize quiz manager
window.KicQuizManager.registerInstance('quiz-instance-1', {
  pageType: 'about-us',
  pageUrl: window.location.href
});

// When quiz is submitted, hook into your existing submit handler:
// After calculating score and risk level, add:
/*
const score = /* your calculated score */;
const riskLevel = /* 'low' | 'moderate' | 'high' */;
window.KicQuizManager.submitQuizResults('quiz-instance-1', score, riskLevel);
*/
</script>
```

### 3. Modify Your Quiz Submit Handler

In your existing quiz script, after displaying results, add this call:

```javascript
// After the result is displayed
window.KicQuizManager.submitQuizResults(instanceId, score, riskLevel)
  .then(response => {
    console.log('Results sent to Kick It Ca:', response);
    // Optional: Show confirmation to user
  })
  .catch(error => {
    console.error('Failed to send results:', error);
    // Results still show locally even if API fails
  });
```

### 4. Backend Processing

The `/api/quiz-results` endpoint receives results and can:

```javascript
// In src/routes/quizRoutes.js
router.post('/quiz-results', async (req, res) => {
  const { instanceId, score, riskLevel } = req.body;
  
  // 1. Store in database
  await saveQuizResult(req.body);
  
  // 2. Sync with Kick It Ca
  await kickItCaService.syncQuizResult(req.body);
  
  // 3. Create/update Hubspot contact
  await hubspotService.syncContactFromQuiz(req.body);
  
  // 4. Trigger workflows
  await triggerFollowUpWorkflow(req.body);
  
  res.json({ success: true });
});
```

## Environment Configuration

Update your `.env` file:

```env
# Existing settings
HUBSPOT_API_KEY=your_key
KICKITCA_API_URL=https://api.kickitca.example.com
KICKITCA_API_KEY=your_key

# New settings for integration
QUIZ_API_ENDPOINT=http://localhost:3000
QUIZ_TRACKING_ENABLED=true
SYNC_TO_KICKITCA=true
SYNC_TO_HUBSPOT=true
```

## Data Structures

### Quiz Result Payload

```json
{
  "instanceId": "quiz-instance-1",
  "score": 15,
  "riskLevel": "moderate",
  "timestamp": "2026-02-18T12:34:56Z",
  "pageUrl": "https://kicform.org/kick-it-2",
  "userEmail": "user@example.com",
  "userPhone": "555-1234",
  "metadata": {
    "templateName": "About-Us-Page",
    "quizType": "CUDIT",
    "pageLanguage": "en"
  }
}
```

### Risk Level Categories

- **Low Risk** (0-7): Current use suggests low level of risk
- **Moderate/Hazardous** (8-11): May put user at health risk, benefits to explore strategies
- **High Risk** (12+): Possible Cannabis Use Disorder, needs professional assessment

## Testing the Integration

### 1. Start Your Backend

```bash
npm run dev
```

Your API will run on `http://localhost:3000`

### 2. Test the Quiz Results Endpoint

```bash
curl -X POST http://localhost:3000/api/quiz-results \
  -H "Content-Type: application/json" \
  -d '{
    "instanceId": "test-1",
    "score": 10,
    "riskLevel": "moderate",
    "timestamp": "2026-02-18T12:34:56Z",
    "pageUrl": "http://localhost:3000/test"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Quiz results received and processed",
  "data": {
    "instanceId": "test-1",
    "score": 10,
    "riskLevel": "moderate",
    "receivedAt": "2026-02-18T12:34:56Z"
  }
}
```

## Next Steps

1. **Fetch your Hubspot code locally**:
   ```bash
   npm run hs:fetch
   ```

2. **Integrate quiz tracking** into About-Us-Page.html template

3. **Implement Kick It Ca sync** in the backend:
   - Add Kick It Ca API calls to `/api/quiz-results`
   - Store quiz results in database
   - Create lead records in Kick It Ca

4. **Test end-to-end** from Hubspot quiz → backend → Kick It Ca

5. **Deploy and monitor** quiz submissions in both systems

## Troubleshooting

### Quiz results not being captured?
- Check browser console for JavaScript errors
- Verify `KicQuizManager` is loaded
- Check network tab for POST requests to `/api/quiz-results`

### Results not syncing to Kick It Ca?
- Verify `KICKITCA_API_KEY` in `.env`
- Check server logs for errors
- Test Kick It Ca API connection directly

### Need to debug?
Add logging to your quiz script:
```javascript
window.KicQuizManager.submitQuizResults(instanceId, score, riskLevel)
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
```

## Resources

- [Your Hubspot Build](./hubspot/README.md)
- [Kick It Ca Integration Services](./src/services/kickItCa.js)
- [Hubspot Services](./src/services/hubspot.js)
