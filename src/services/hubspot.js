const Client = require('@hubspot/api-client').default;

class HubspotService {
  constructor() {
    const apiKey = process.env.HUBSPOT_API_KEY;
    if (!apiKey) {
      throw new Error('HUBSPOT_API_KEY environment variable is not set');
    }
    this.client = new Client({ accessToken: apiKey });
  }

  async createContact(contactData) {
    try {
      const response = await this.client.crm.contacts.basicApi.create({
        properties: contactData,
      });
      return response.body;
    } catch (error) {
      console.error('Error creating Hubspot contact:', error);
      throw error;
    }
  }

  async updateContact(contactId, contactData) {
    try {
      const response = await this.client.crm.contacts.basicApi.update(contactId, {
        properties: contactData,
      });
      return response.body;
    } catch (error) {
      console.error('Error updating Hubspot contact:', error);
      throw error;
    }
  }

  async getContact(contactId) {
    try {
      const response = await this.client.crm.contacts.basicApi.getById(contactId);
      return response.body;
    } catch (error) {
      console.error('Error fetching Hubspot contact:', error);
      throw error;
    }
  }
}

module.exports = HubspotService;
