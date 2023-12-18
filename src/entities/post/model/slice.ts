import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GPost } from "@/entities/post/model/types";
import { getPosts, getPost, getUserPosts } from "@/entities/post/api/postApi";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: {
      data: [] as GPost[],
      loading: false,
      error: false,
    },
    post: {
      data: {} as GPost,
      loading: false,
      error: false,
    },
    userPosts: {
      data: [] as GPost[],
      loading: false,
      error: false,
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder

      // get posts

      .addCase(getPosts.pending, (state) => {
        state.posts.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<GPost[]>) => {
        state.posts.data = action.payload;
        state.posts.loading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.posts.error = true;
      })

      // get post

      .addCase(getPost.pending, (state) => {
        state.post.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action: PayloadAction<GPost>) => {
        state.post.data = action.payload;
        state.post.loading = false;
      })
      .addCase(getPost.rejected, (state) => {
        state.post.error = true;
      })

      // get user posts

      .addCase(getUserPosts.pending, (state) => {
        state.userPosts.loading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action: PayloadAction<GPost[]>) => {
        state.userPosts.data = action.payload;
        state.userPosts.loading = false;
      })
      .addCase(getUserPosts.rejected, (state) => {
        state.userPosts.error = true;
      })

  },
});

export default postSlice.reducer;
