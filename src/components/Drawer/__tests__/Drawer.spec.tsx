import Drawer from "../Drawer";
import { render } from "services/testUtils/react";

describe("AppBar", () => {
  it("should render correctly AppBar", () => {
    // Render the component
    let openDrawer = true;
    render(
      <Drawer
        openDrawer={openDrawer}
        setOpenDrawer={(value) => (openDrawer = value)}
      />
    );
  });
});
