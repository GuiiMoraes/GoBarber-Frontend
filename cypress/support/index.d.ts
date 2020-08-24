/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    stopOnFail(): void;
  }
}
