import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from './reducers/UserSlice'
import { contactAPI } from "../services/contactService";
import userReducer from './userSlice';

const rootReducer = combineReducers({
    userReducer,
    [contactAPI.reducerPath]: contactAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(contactAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']