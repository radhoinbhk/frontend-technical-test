import {
  RenderResult,
  render as rtlRender
} from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import {
  getMockRouter,
  MockRouterProvider,
} from "components/MockRouterProvider";



const render = (ui): RenderResult => {
  const Wrapper: React.ComponentType = ({ children }) => (
    <Provider store={store}>
      <MockRouterProvider mockRouter={getMockRouter()}>
        {children}
      </MockRouterProvider>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper});
};

export * from "@testing-library/react";
export { render };
