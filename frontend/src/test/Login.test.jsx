import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Login from "../pages/Login";
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

describe("Login Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  test("should show validation error when fields are empty", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(
      screen.getByText("Please enter your email and password.")
    ).toBeInTheDocument();

    expect(apiRequest).not.toHaveBeenCalled();
  });

  test("should login successfully and navigate to dashboard", async () => {
    apiRequest.mockResolvedValue({
      token: "test-token",
      user: {
        name: "Test User",
        email: "test@example.com",
      },
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(apiRequest).toHaveBeenCalledWith("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: "test@example.com",
          password: "123456",
        }),
      });
    });

    expect(localStorage.getItem("agrimitraToken")).toBe("test-token");
    expect(localStorage.getItem("agrimitraUser")).toContain("Test User");

    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });

  test("should display API error when login fails", async () => {
    apiRequest.mockRejectedValue(
      new Error("Invalid email or password.")
    );

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "wrong@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "wrong123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(
        screen.getByText("Invalid email or password.")
      ).toBeInTheDocument();
    });
  });
});