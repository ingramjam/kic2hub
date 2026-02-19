// Quiz Configuration and Utilities
// This file contains shared quiz logic and integrations with Kick It Ca

class KicQuizManager {
  constructor() {
    this.quizInstances = new Map();
    this.apiEndpoint = process.env.KICKITCA_API_URL || 'http://localhost:3000';
  }

  /**
   * Register a quiz instance for tracking
   * @param {string} instanceId - Unique quiz instance ID
   * @param {Object} config - Quiz configuration
   */
  registerInstance(instanceId, config = {}) {
    this.quizInstances.set(instanceId, {
      instanceId,
      results: null,
      config,
      timestamp: null,
    });
  }

  /**
   * Submit quiz results to Kick It Ca integration
   * @param {string} instanceId - Quiz instance ID
   * @param {number} score - Quiz score
   * @param {string} riskLevel - Risk level (low, moderate, high)
   */
  async submitQuizResults(instanceId, score, riskLevel) {
    try {
      const instance = this.quizInstances.get(instanceId);
      if (!instance) {
        console.warn(`Quiz instance ${instanceId} not found`);
        return;
      }

      const payload = {
        instanceId,
        score,
        riskLevel,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
      };

      // Send to your integration backend
      const response = await fetch(`${this.apiEndpoint}/api/quiz-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        instance.results = data;
        instance.timestamp = new Date();
        console.log('Quiz results submitted successfully', data);
        return data;
      } else {
        console.error('Failed to submit quiz results:', response.status);
      }
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    }
  }

  /**
   * Get stored results for an instance
   * @param {string} instanceId - Quiz instance ID
   */
  getResults(instanceId) {
    return this.quizInstances.get(instanceId)?.results || null;
  }
}

// Global instance
window.KicQuizManager = new KicQuizManager();
