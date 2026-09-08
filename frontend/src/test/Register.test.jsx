import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Register from "../pages/Register";
import { apiRequest } from "../services/api";

vi.mock("../services/api", () => ({
  apiRequest: vi.fn(),
}));

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Register Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should show error when fields are empty", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    expect(
      screen.getByText("Please fill in all fields.")
    ).toBeInTheDocument();

    expect(apiRequest).not.toHaveBeenCalled();
  });

  test("should show error when passwords do not match", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your full name"),
      { target: { value: "Test User" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your email"),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Create a password"),
      { target: { value: "123456" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Confirm your password"),
      { target: { value: "654321" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    expect(
      screen.getByText("Passwords do not match.")
    ).toBeInTheDocument();

    expect(apiRequest).not.toHaveBeenCalled();
  });

  test("should show error when password is less than 6 characters", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your full name"),
      { target: { value: "Test User" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your email"),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Create a password"),
      { target: { value: "123" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Confirm your password"),
      { target: { value: "123" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    expect(
      screen.getByText("Password must be at least 6 characters.")
    ).toBeInTheDocument();

    expect(apiRequest).not.toHaveBeenCalled();
  });

  test("should register successfully and navigate to login", async () => {
    apiRequest.mockResolvedValue({
      message: "Registration successful",
    });

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your full name"),
      { target: { value: "Test User" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter your email"),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Create a password"),
      { target: { value: "123456" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Confirm your password"),
      { target: { value: "123456" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    await waitFor(() => {
      expect(apiRequest).toHaveBeenCalledWith("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          password: "123456",
        }),
      });
    });

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});