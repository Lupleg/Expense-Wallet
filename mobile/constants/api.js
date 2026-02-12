const DEFAULT_API_URL = "https://wallet-api-cxqp.onrender.com/api";
const ENV_API_URL = process.env.EXPO_PUBLIC_API_URL;

const normalizeApiUrl = (rawUrl) => {
  if (!rawUrl) return DEFAULT_API_URL;

  let normalized = rawUrl.replace(/\/$/, "");
  try {
    const url = new URL(normalized);
    if (!url.pathname || url.pathname === "/") {
      normalized = `${normalized}/api`;
    }
  } catch {
    // If the URL is malformed, fall back to the raw value.
  }

  return normalized;
};

export const API_URL = normalizeApiUrl(ENV_API_URL);
// export const API_URL = "http://localhost:5001/api";
