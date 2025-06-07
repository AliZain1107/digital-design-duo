// Google Sheets Integration Service for Styly Pro Applications

export interface ApplicationData {
  fullName: string;
  email: string;
  portfolioLink: string;
  specialization: string;
  submissionDate?: string;
  timestamp?: string;
}

export class GoogleSheetsService {
  private static readonly SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || '';

  /**
   * Submit application data to Google Sheets
   * @param data Application form data
   * @returns Promise<boolean> Success status
   */
  static async submitApplication(data: ApplicationData): Promise<boolean> {
    try {
      if (!this.SCRIPT_URL) {
        console.error('Google Script URL not configured');
        throw new Error('Google Sheets integration not configured');
      }

      // Add timestamp and submission date
      const submissionData = {
        ...data,
        submissionDate: new Date().toLocaleDateString('en-US'),
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(this.SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        console.log('Application submitted successfully to Google Sheets');
        return true;
      } else {
        console.error('Google Sheets submission failed:', result.error);
        return false;
      }
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Validate environment configuration
   * @returns boolean Whether the service is properly configured
   */
  static isConfigured(): boolean {
    return !!this.SCRIPT_URL;
  }
}
