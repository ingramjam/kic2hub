const express = require('express');
const router = express.Router();

/**
 * POST /api/quiz-results
 * Receives quiz results from Hubspot pages and syncs with Kick It Ca
 */
router.post('/quiz-results', async (req, res) => {
  try {
    const { instanceId, score, riskLevel, timestamp, pageUrl } = req.body;

    // Validate input
    if (!instanceId || score === undefined || !riskLevel) {
      return res.status(400).json({
        error: 'Missing required fields: instanceId, score, riskLevel',
      });
    }

    // Log quiz result (replace with actual Kick It Ca sync logic)
    console.log('Quiz result received:', {
      instanceId,
      score,
      riskLevel,
      timestamp,
      pageUrl,
    });

    // TODO: Add Kick It Ca integration here
    // - Send to Kick It Ca API
    // - Store in database
    // - Trigger workflows

    res.json({
      success: true,
      message: 'Quiz results received and processed',
      data: {
        instanceId,
        score,
        riskLevel,
        receivedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error processing quiz results:', error);
    res.status(500).json({
      error: 'Failed to process quiz results',
      message: error.message,
    });
  }
});

module.exports = router;
