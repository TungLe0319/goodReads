export const dev = window.location.origin.includes("localhost");
export const baseURL = dev ? "https://localhost:7045" : "";
export const useSockets = false;
export const useSocket = true;
export const domain = "bobocat.us.auth0.com";
export const audience = "https://bcw-demos.com";
export const clientId = "Acd91zZtHgbEyChg4MW53440xBdm6cqE";
export const googleKey =  import.meta.env.GOOGLE_KEY

