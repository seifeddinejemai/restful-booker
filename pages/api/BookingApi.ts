import { APIRequestContext, APIResponse } from '@playwright/test';

export class BookingApi {
  constructor(private request: APIRequestContext) {}

  // 1. Lecture
  async getBookings(): Promise<APIResponse> {
    return this.request.get('/booking');
  }

  // 2. Création
  async createBooking(data: any): Promise<APIResponse> {
    return this.request.post('/booking', { data });
  }

  // 3. Authentification
  async getAuthToken(): Promise<APIResponse> {
    return this.request.post('/auth', {
      data: { username: 'admin', password: 'password123' },
    });
  }

  // 4. Modification (nécessite le token !)
  async updateBooking(id: number, token: string, data: any): Promise<APIResponse> {
    return this.request.put(`/booking/${id}`, {
      data,
      headers: {
        // ⚠️ Spécifique à Restful Booker : le token passe par un Cookie
        Cookie: `token=${token}`,
      },
    });
  }
}