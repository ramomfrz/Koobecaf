import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";
import { store } from "./store/store";

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
