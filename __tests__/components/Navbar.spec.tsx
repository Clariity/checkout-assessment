import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "../../components/navbar";
import { SettingsProvider } from "../../context/settings-context";

describe("Navbar", () => {
  test("changes theme", async () => {
    const user = userEvent.setup();
    render(
      <SettingsProvider>
        <Navbar />
      </SettingsProvider>
    );

    // if we can swap between the two then we know the theme value has changed
    await user.click(screen.getByLabelText("change to dark theme"));
    await user.click(screen.getByLabelText("change to light theme"));
  });
});
