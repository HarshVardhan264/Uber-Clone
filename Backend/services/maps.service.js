const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            throw new Error('Google Maps API key is not set in the environment variables.');
        }
        const encodedAddress = encodeURIComponent(address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;
        const response = await axios.get(url);

        if (response.data.status !== 'OK' || response.data.results.length === 0) {
            throw new Error(`Unable to find address: ${address}`);
        }

        const location = response.data.results[0].geometry.location;

        // Returning coordinates with keys 'ltd' and 'langitude'
        return {
            ltd: location.lat,
            langitude: location.lng
        };
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
}