import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk(
  "users/fetchToken",
  async (_, { rejectWithValue }) => {
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
      return rejectWithValue(error.response.data);
    }
  }
);

const tokenSlice = createSlice({
  name: "users",
  initialState: {
    token: "",
    status: "",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.token = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    });
    builder.addCase(fetchToken.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default tokenSlice.reducer;
