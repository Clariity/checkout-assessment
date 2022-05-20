import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Index from "../../pages";
import { DataProvider } from "../../context/data-context";
import { SettingsProvider } from "../../context/settings-context";

describe("Index", () => {
  test("adds new review successfully", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SettingsProvider>
          <Index />
        </SettingsProvider>
      </DataProvider>
    );

    const reviewList = screen.getByLabelText("review list");
    expect(reviewList.childElementCount).toBe(5);

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    await user.click(screen.getByLabelText("close modal"));

    expect(reviewList.childElementCount).toBe(6);
  });
});
