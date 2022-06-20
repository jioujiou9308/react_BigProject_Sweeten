import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: [
    { side: "official", msg: ["親愛的用戶您好，請描述您遇到的問題。"] },
  ],
  reducers: {
    sendMsg: (state, action) => {
      const { side, content } = action.payload;
      const lastRow = state.at(-1);
      if (lastRow.side === side) lastRow.msg.push(content);
      if (lastRow.side !== side) state.push({ side, msg: [content] });
    },
  },
});

export const { sendMsg } = chatSlice.actions;
export default chatSlice.reducer;
