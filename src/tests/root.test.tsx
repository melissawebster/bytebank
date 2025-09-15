import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/src/components/header";
import "@testing-library/jest-dom";

test("if Open Account button opens modal", async () => {
  render(<Header />);
  await userEvent.click(screen.getByRole("button", { name: /open account/i }));
  expect(screen.getByText(/Fill in the fields below to create your account!/i)).toBeInTheDocument();
});
