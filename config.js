const CONFIG = {
    GROQ_API_KEY: '' // Will be populated from GitHub secrets
};

// Make CONFIG available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

if (typeof module !== 'undefined') {
    module.exports = CONFIG;
}
