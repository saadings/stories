import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StoryType } from "../../types/redux/storySlice";
import axiosInstance from "../../utils/services/axios";
import { RootState } from "../store";

interface StoryState {
  stories: StoryType[];
  loading: boolean;
  error: string | undefined;
}

const initialState: StoryState = {
  stories: [],
  loading: false,
  error: undefined,
};

export const fetchStories = createAsyncThunk(
  "stories/fetchStories",
  async () => {
    const {
      data: { results },
    }: { data: { results: StoryType[] } } =
      await axiosInstance.get("/stories");

    return results;
  },
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<StoryType[]>) => {
      state.stories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.loading = false;
      state.stories = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const storiesReducer = (state: RootState) => state.storiesReducer;

export const selectStories = createSelector(
  [storiesReducer],
  (story) => story.stories,
);

export const selectStoriesLoading = createSelector(
  [storiesReducer],
  (story) => story.loading,
);

export const selectStoriesError = createSelector(
  [storiesReducer],
  (story) => story.error,
);

export const { setStories } = storiesSlice.actions;

export default storiesSlice.reducer;
