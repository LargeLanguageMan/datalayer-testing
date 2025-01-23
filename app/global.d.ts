// global.d.ts

export { }

declare global {
  interface appEventDataEntry {
    interaction: {
      clickType: string;
      clickText: string;
      clickSection: string;
      clickURL: string;
      search: string;
    };
    page: {
      pageInfo: {
        pageName: string;
        pageType: string;
        pageUrl: string;
        mcode: string;
        language: string;
        primaryCategory: string;
        subCategory1: string;
        subCategory2: string;
        subCategory3: string;
        brand: string;
        environment: string;
        domain: string;
        formName: string;
        formStep: string;
        formSubStep: string;
        formSection: string;
        quoteId: string;
        applicationId: string;
      }
    };
    user: {
      profileInfo: {
        phoneNumber: string;
        membershipType: string;
        membershipTypeId: string;
        loginstatus: string;
      }
    };
    event: string;
  }

  interface Window {
    appEventData: appEventDataEntry[];
  }
}
