import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/api.fixture';
import { APIResponse } from '@playwright/test';
import { CreateBookingResponseSchema } from '../../pages/api/booking.schema'; 

// ✅ On stocke l'état du test ici
let bookingId: number;
let token: string;
let updateResponse: APIResponse;

const { Given, When, Then } = createBdd(test);

Given('je crée une nouvelle réservation', async ({ bookingApi }) => {
  const response = await bookingApi.createBooking({
    firstname: "Jean",
    lastname: "Dupont",
    totalprice: 100,
    depositpaid: true,
    bookingdates: { checkin: "2026-11-01", checkout: "2026-11-05" },
  });
  
  expect(response.status()).toBe(200);
  const body = await response.json();
  
  // ✅ LA MAGIE DU CONTRACT TESTING : Zod valide la structure et les types
  // et TypeScript sait maintenant que parsedData contient bien un bookingid de type number
  const parsedData = CreateBookingResponseSchema.parse(body);
  
  // ✅ On sauvegarde l'ID validé par Zod
  bookingId = parsedData.bookingid; 
});

Given('je récupère un token d\'authentification', async ({ bookingApi }) => {
  const response = await bookingApi.getAuthToken();
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  token = body.token; // On sauvegarde le token
});

When('je modifie la réservation avec le prénom {string}', async ({ bookingApi }, newName: string) => {
  // On utilise l'ID et le Token stockés précédemment
  updateResponse = await bookingApi.updateBooking(bookingId, token, {
    firstname: newName,
    lastname: "Dupont",
    totalprice: 100,
    depositpaid: true,
    bookingdates: { checkin: "2026-11-01", checkout: "2026-11-05" },
  });
});

Then('le code de statut doit être {int}', async ({}, expectedStatus: number) => {
  expect(updateResponse.status()).toBe(expectedStatus);
});

Then('la réservation doit avoir été mise à jour', async ({}) => {
  const body = await updateResponse.json();
  // ✅ On vérifie que le serveur a bien pris en compte notre modification
  expect(body.firstname).toBe("NouveauPrenom");
});