import Login from "../Login";
import { render } from "services/testUtils/react";

describe("AppBar", () => {
  it("should render correctly AppBar", () => {
    // Render the component
    render(<Login />);
  });
});
