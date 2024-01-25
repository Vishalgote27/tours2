import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice"
import userSlice from "./user/userSlice"
import publicSlice from "./public/publicSlice";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        user: userSlice,
        public:publicSlice
    }
})

export default reduxStore