
// global.d.ts

export {}

declare global {
  interface DigitalDataEntry {
    interaction: {
      eventType: string;
      clickText: string;
      clickURL: string;
      search: {
        autoSuggestSearchTerm: string;
        searchTerm: string;
        searchFilters: string;
        searchResults: string;
      };
      cardDescription: string;
      accordionAction: string;
      interactionSection: string;
      userRole: string;
    };
    pageInfo: {
      pageName: string;
      pageTitle: string;
      pageType: string;
      pageUrl: string;
      talid: string;
      mcode: string;
      referrer: string;
      language: string;
      primaryCategory: string;
      subCategory1: string;
      subCategory2: string;
      subCategory3: string;
      site: {
        brand: string;
        environment: string;
        domain: string;
      };
    };
    form: {
      formName: string;
      formStep: string;
      formSubStep: string;
      quoteId: string;
      referenceNumber: string;
      formAction: string;
      tpdCover: string;
      traumaCover: string;
      smoker: string;
      state: string;
      postcode: string;
      occupation: string;
      age: string;
      gender: string;
      amount: string;
      income: string;
      lifeCover: string;
      product: string;
      vertical: string;
    };
    user: {
      email: string;
      phoneNumber: string;
      membershipType: string;
      membershipId: string;
      loginstatus: string;
      loginId: string;
      role: string;
    };
    event: string;
  }

  interface Window {
    digitalData: DigitalDataEntry[]; // Use the new type definition here
  }
}
