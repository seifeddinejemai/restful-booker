import { test as base } from 'playwright-bdd';
import { BookingApi } from '../pages/api/BookingApi';

type MyFixtures = {
  bookingApi: BookingApi;
};

export const test = base.extend<MyFixtures>({
  bookingApi: async ({ request }, use) => {
    await use(new BookingApi(request));
  },
});

export { expect } from '@playwright/test';