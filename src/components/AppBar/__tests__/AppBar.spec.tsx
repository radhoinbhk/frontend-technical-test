import ResponsiveAppBar from "../AppBar";
import { render } from "services/testUtils/react";

describe("AppBar", () => {
  it("should render correctly AppBar", () => {
    // Render the component
    render(<ResponsiveAppBar />);
  });
});
