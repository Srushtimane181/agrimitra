import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home Page", () => {
  test("should display the main heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Smart Farming, Better Future 🌱")
    ).toBeInTheDocument();
  });

  test("should display the Get Started link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", {
      name: "Get Started",
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/register");
  });

  test("should display all four services", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("🌾 Crop Information")).toBeInTheDocument();
    expect(screen.getByText("🦠 Crop Diseases")).toBeInTheDocument();
    expect(screen.getByText("📋 Government Schemes")).toBeInTheDocument();
    expect(screen.getByText("💡 Farming Tips")).toBeInTheDocument();
  });
});