import ConversationList from "../ConversationList";
import { render } from "services/testUtils/react";

describe("AppBar", () => {
  it("should render correctly AppBar", () => {
    // Render the component
    render(<ConversationList />);
  });
});
