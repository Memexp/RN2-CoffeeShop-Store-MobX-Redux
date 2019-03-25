import { createStore, applyMiddleware } from "redux"; // no need for it (compose,)
import thunk from "redux-thunk";

import rootReducer from "./reducers"; // no need to type the index, it will go to it by default

/*
i didn't use it because i do not use react dev tools here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
*/

// i remove combose too, because they're relevent.
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
