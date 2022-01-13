import {configureStore, ThunkAction, Action, applyMiddleware, createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import {useDispatch} from 'react-redux';

import rootReducer from './app.reducer';
import {createWrapper} from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['admin'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
        // thunk: {
        //   extraArgument: myCustomApiService,
        // },
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};



export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});
export const persistor = persistStore(store);



const makeStore = ({ isServer }) => {
    if (isServer) {
        //If it's on server side, create a store
        return createStore(rootReducer, bindMiddleware(middleware));
    } else {
        return store;
    }

};


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//@ts-ignore
export const wrapper = createWrapper(makeStore);