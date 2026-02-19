const axios = require('axios');

class KickItCaService {
  constructor() {
    const apiUrl = process.env.KICKITCA_API_URL;
    const apiKey = process.env.KICKITCA_API_KEY;

    if (!apiUrl || !apiKey) {
      throw new Error('KICKITCA_API_URL and KICKITCA_API_KEY environment variables must be set');
    }

    this.apiUrl = apiUrl;
    this.client = axios.create({
      baseURL: apiUrl,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getContacts() {
    try {
      const response = await this.client.get('/contacts');
      return response.data;
    } catch (error) {
      console.error('Error fetching Kick It Ca contacts:', error);
      throw error;
    }
  }

  async getContactById(contactId) {
    try {
      const response = await this.client.get(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Kick It Ca contact:', error);
      throw error;
    }
  }

  async createContact(contactData) {
    try {
      const response = await this.client.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      console.error('Error creating Kick It Ca contact:', error);
      throw error;
    }
  }
}

module.exports = KickItCaService;
