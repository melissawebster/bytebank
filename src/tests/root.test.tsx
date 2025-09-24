import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Root imports
import { metadata } from "../app/(root)/layout";
import Header, { openAccountBtnText, signInBtnText } from "@/src/components/header";
import Home from "../app/(root)/page";


// SEO tests

describe("Landing page metadata", () => {
  const expectedMetadata = {
    metadataBase: new URL("https://bytebank-pied.vercel.app/"),
    title: "ByteBank - Experience Greater Financial Freedom",
    description:
      "ByteBank is more than a bank — it’s your partner in financial freedom. Open an account today and enjoy tools that fit your lifestyle.",
    keywords: [
      "banking",
      "finance",
      "checking account",
      "credit card",
      "financial freedom",
    ],
    openGraph: {
      title: "ByteBank - Experience Greater Financial Freedom",
      description:
        "ByteBank is more than a bank — it’s your partner in financial freedom.",
      url: "https://bytebank-pied.vercel.app/",
      siteName: "ByteBank",
      images: [
        {
          url: "/assets/bytebank-og.png",
          width: 1200,
          height: 630,
          alt: "ByteBank promotional card",
        },
      ],
      type: "website",
    },
  };

  it("matches the entire metadata object", () => {
    expect(metadata).toMatchObject(expectedMetadata);
  });

  it("has no missing keys", () => {
    const actualKeys = Object.keys(metadata).sort();
    const expectedKeys = Object.keys(expectedMetadata).sort();
    expect(actualKeys).toEqual(expectedKeys);
  });
});

// Critical images tests

describe("if logo renders properly on Header", () => {
  it("renders the ByteBank logo with correct attributes", () => {
    render(<Header />);
    const logo = screen.getByAltText("bytebank logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/assets/logo-bytebank.svg");
  });
});

test("if the main image from hero section properly renders", () => {
  render(<Home />);
  const creditCards = screen.getByAltText("credit cards");
  expect(creditCards).toBeInTheDocument();
})

// User interaction tests

test("if Open Account button opens proper modal", async () => {
  render(<Header />);
  const user = userEvent.setup();
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const openAccountButton = screen.getByRole("button", { name: openAccountBtnText });
  await user.click(openAccountButton);
  expect(await screen.findByTestId("signup-modal")).toBeInTheDocument();
});

test("if Sign In button opens proper modal", async () => {
  render(<Header />);
  const user = userEvent.setup();
  const signInButton = screen.getByRole("button", { name: signInBtnText });
  await user.click(signInButton);
  expect(await screen.findByTestId("login-modal")).toBeInTheDocument();
});
