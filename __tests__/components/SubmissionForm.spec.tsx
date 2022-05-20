import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SubmissionForm } from "../../components/submission";
import { DataProvider } from "../../context/data-context";

describe("SubmissionForm", () => {
  test("completes form successfully", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(screen.getByText("Review Submitted")).toBeTruthy();
    await user.click(screen.getByText("Close"));
  });

  test("shows error for empty name", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText(
        "name: A full name must be provided. The name must not contain any profanity."
      )
    ).toBeTruthy();
  });

  test("shows error for profane name", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "damn");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText(
        "name: A full name must be provided. The name must not contain any profanity."
      )
    ).toBeTruthy();
  });

  test("shows error for empty email", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText("email: A valid email must be provided.")
    ).toBeTruthy();
  });

  test("shows error for invalid email", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(screen.getByLabelText("Email Address"), "invalid email");
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText("email: A valid email must be provided.")
    ).toBeTruthy();
  });

  test("shows error for empty rating", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.type(screen.getByLabelText("Comment"), "test comment");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText("rating: A rating of AT LEAST 1 star must be provided.")
    ).toBeTruthy();
  });

  test("shows error for empty comment", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText(
        "comment: A comment must be provided. The comment must not contain any profanity."
      )
    ).toBeTruthy();
  });

  test("shows error for profane comment", async () => {
    const user = userEvent.setup();
    render(
      <DataProvider>
        <SubmissionForm />
      </DataProvider>
    );

    await user.type(screen.getByLabelText("Full Name"), "test name");
    await user.type(
      screen.getByLabelText("Email Address"),
      "test.email@test.com"
    );
    await user.click(screen.getByLabelText("star 4 form"));
    await user.type(screen.getByLabelText("Comment"), "damn");
    await user.click(screen.getByText("Submit"));
    expect(
      screen.getByText(
        "comment: A comment must be provided. The comment must not contain any profanity."
      )
    ).toBeTruthy();
  });
});
