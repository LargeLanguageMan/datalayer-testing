
// global.d.ts
export {}

declare global {
  interface Window {
    digitalData: any[];  // or a more specific type if you know the structure
  }
}
