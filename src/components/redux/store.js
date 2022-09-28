import { configureStore } from "@reduxjs/toolkit"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import ReduxThunk from "redux-thunk"

import ProductAddCart from "./Slice/ProductAddCart"
import SortPrice from "./Slice/SortPrice"
import State from "./Slice/State"

const persistConfig = {
	key: "dataConfig",
	storage,
	whitelist: ["cart"],
}

const rootReducer = combineReducers({
	cart: ProductAddCart,
	sort: SortPrice,
	state: State,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))

export const persistor = persistStore(store)
