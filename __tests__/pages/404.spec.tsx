import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NotFound from "../../pages/404";
import { DataProvider } from "../../context/data-context";
import { SettingsProvider } from "../../context/settings-context";
import { ReactNode } from "react";

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: ReactNode }) =>
      children
);

describe("404", () => {
  test("Shows 404 Page", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SettingsProvider>
          <NotFound />
        </SettingsProvider>
      </DataProvider>
    );

    expect(
      screen.getByText(
        "Looks like the page you tried to access doesn't exist. Try your luck with the Home page."
      )
    ).toBeTruthy();
    await user.click(screen.getByText("Home Page"));
  });
});
