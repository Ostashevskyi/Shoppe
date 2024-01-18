import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (productName, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select()
        .eq("product", productName);

      if (error) {
        throw Error(error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putReviews = createAsyncThunk(
  "reviews/putReviews",
  async ({ productReview }, { rejectWithValue, dispatch }) => {
    const { productName, review, username, email, userID, rating } =
      productReview;

    try {
      const { error } = await supabase.from("reviews").insert({
        product: productName,
        review,
        username,
        email,
        user_id: userID,
        rating,
      });

      if (error) {
        throw Error(error);
      }

      return await (
        await dispatch(getReviews(productName))
      ).payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    status: "",
    error: "",
    reviews: [],
  },
  extraReducers: (builder) => {
    /// get
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getReviews.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getReviews.pending, (state) => {
      state.status = "pending";
    });

    /// put
    builder.addCase(putReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(putReviews.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(putReviews.pending, (state) => {
      state.status = "pending";
    });
  },
});

export default reviewsSlice.reducer;
