// src/store/blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type for blog interactions
interface BlogState {
  photography: {
    likes: number;
    dislikes: number;
  };
  videography: {
    likes: number;
    dislikes: number;
  };
}

// Initial state
const initialState: BlogState = {
  photography: {
    likes: 0,
    dislikes: 0
  },
  videography: {
    likes: 0,
    dislikes: 0
  }
};

// Create the blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    likeBlog: (state, action: PayloadAction<'photography' | 'videography'>) => {
      const blog = state[action.payload];
      blog.likes += 1;
    },
    dislikeBlog: (state, action: PayloadAction<'photography' | 'videography'>) => {
      const blog = state[action.payload];
      blog.dislikes += 1;
    },
    unlikeBlog: (state, action: PayloadAction<'photography' | 'videography'>) => {
      const blog = state[action.payload];
      if (blog.likes > 0) {
        blog.likes -= 1;
      }
    },
    undislikeBlog: (state, action: PayloadAction<'photography' | 'videography'>) => {
      const blog = state[action.payload];
      if (blog.dislikes > 0) {
        blog.dislikes -= 1;
      }
    }
  }
});

export const { 
  likeBlog, 
  dislikeBlog, 
  unlikeBlog, 
  undislikeBlog 
} = blogSlice.actions;

export default blogSlice.reducer;