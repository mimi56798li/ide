"use strict";
// Function to fetch autocomplete suggestions from an external API (e.g., OpenAI or custom code service)
export async function getSuggestionsFromAPI(query) {
    try {
        // Make a request to the API for suggestions (this example uses a mock endpoint)
        const response = await fetch("https://api.example.com/get-suggestions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY",
            },
            body: JSON.stringify({ query: query }),
        });

        const data = await response.json();
        return data.suggestions || []; // Return the list of suggestions from the response
    } catch (error) {
        console.error("Error fetching suggestions:", error);
        return []; // Return an empty array in case of error
    }
}

const query = {
    get(key) {
        const query = window.location.search.substring(1);
        const vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split("=");
            if (decodeURIComponent(pair[0]) == key) {
                return decodeURIComponent(pair[1]);
            }
        }
    },
    keys() {
        const query = window.location.search.substring(1);
        const vars = query.split("&");
        const keys = [];
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split("=");
            keys.push(decodeURIComponent(pair[0]));
        }
        return keys;
    }
};

export default query;
