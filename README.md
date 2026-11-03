# 🌐 Restful Booker API Automation

[![Playwright API Tests](https://github.com/seifeddinejemai/restful-booker/actions/workflows/playwright.yml/badge.svg)](https://github.com/seifeddinejemai/restful-booker/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![BDD](https://img.shields.io/badge/BDD-Gherkin-23D96C)](https://cucumber.io/docs/gherkin/)

Framework de test automatisé **API (Back-End)** pour [Restful Booker](https://restful-booker.herokuapp.com/), construit avec **Playwright**, **TypeScript** et l'approche **BDD (Gherkin)**.

## 🎯 Objectif du projet

Démontrer la maîtrise des tests d'API sans passer par une interface graphique :
- Validation du contrat de données (JSON).
- Gestion de l'authentification par Token.
- Opérations CRUD complètes (Create, Read, Update).
- Architecture propre (Client API + Fixtures).

## 🏗️ Architecture

| Couche | Rôle | Dossier / Fichier |
| :--- | :--- | :--- |
| **Features** | Spécifications BDD en français | `features/*.feature` |
| **Steps** | Liaison Gherkin ↔ code | `features/steps/*.ts` |
| **API Clients** | Centralisation des appels HTTP | `pages/api/*.ts` |
| **Fixtures** | Injection du client API | `fixtures/api.fixture.ts` |

## ✨ Fonctionnalités clés

- **Zéro navigateur** : Les tests s'exécutent en quelques millisecondes.
- **Authentification** : Récupération dynamique du token (`POST /auth`) et injection dans le header (`Cookie: token=...`).
- **BDD** : Scénarios compréhensibles par les développeurs Back-End et le Product Owner.

## 🚀 Installation & Exécution

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer les tests
npm test