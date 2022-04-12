import { render, screen, waitFor } from "@testing-library/react";
import { createRouter } from "next/dist/client/router";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import ResponsiveAppBar from "../AppBar";

describe("AppBar", () => {
  it("should render correctly AppBar", () => {
    // Render the component
    render(
      <Provider store={store}>
        <ResponsiveAppBar />
      </Provider>
    );
  });
});
