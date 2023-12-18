import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getChannels } from "@/entities/channel/api/channelApi";
import { GChannel } from "@/entities/channel/model/types";

const channelSlice = createSlice({
  name: "channelSlice",
  initialState: {
    channels: {
      data: [] as GChannel[],
      loading: false,
      error: false,
      next: true
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder

      // get channels

      .addCase(getChannels.pending, (state) => {
        state.channels.loading = true;
      })
      .addCase(
        getChannels.fulfilled,
        (state, action: PayloadAction<{ next: string, results: GChannel[] }>) => {
          state.channels.data = action.payload.results;
          state.channels.loading = false;
          state.channels.next = action.payload.next ? true : false
        }
      )
      .addCase(getChannels.rejected, (state) => {
        state.channels.error = true;
      });
  },
});

export default channelSlice.reducer;
