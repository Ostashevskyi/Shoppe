export const useToken = async () => {
  try {
    const response = await fetch(
      "https://dev-t4aozot5tlzqd757.us.auth0.com/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "ECJsT1s8mC1wweTnZjwG7CZXWj8c9rSQ",
          client_secret:
            "aFwSRF4pjdzgK1BSwUNxMUS5RpPoWWJlOikSdSwI9FFpQTFNwxSHSAyTynDyrtoj",
          audience: "https://dev-t4aozot5tlzqd757.us.auth0.com/api/v2/",
          grant_type: "client_credentials",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to obtain access token");
    }

    const data = await response.json();

    return data.access_token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
