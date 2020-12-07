import { initReact } from "./react/react";
import { createStoreAndReducer } from "./store/store";

const store = createStoreAndReducer();
store.subscribe(() => console.log("Store:", store.getState()));
initReact(store);
