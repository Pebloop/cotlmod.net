import {configureStore} from "@reduxjs/toolkit";
import PageStore from "~/store/pageStore";

export default configureStore({
    reducer: {
        PageStore
    },
})