const CONFIG = {
    // This will be set from environment variables or GitHub secrets
    GROQ_API_KEY: ''
};

// If running locally, try to get the API key from environment variables
if (typeof process !== 'undefined' && process.env.GROQ_API_KEY) {
    CONFIG.GROQ_API_KEY = process.env.GROQ_API_KEY;
}
