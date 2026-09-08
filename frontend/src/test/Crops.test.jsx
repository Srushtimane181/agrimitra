import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Crops from "../pages/Crops";
import { apiRequest } from "../services/api";

vi.mock("../services/api", () => ({
  apiRequest: vi.fn(),
}));

describe("Crops Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should display crop information returned by API", async () => {
    apiRequest.mockResolvedValue({
      crops: [
        {
          _id: "rice123",
          name: "Rice",
          description: "Suitable for wet and irrigated fields.",
        },
        {
          _id: "wheat123",
          name: "Wheat",
          description: "A major winter season crop.",
        },
      ],
    });

    render(
      <MemoryRouter>
        <Crops />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Loading crop information... 🌱")
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Rice")).toBeInTheDocument();
      expect(screen.getByText("Wheat")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Suitable for wet and irrigated fields.")
    ).toBeInTheDocument();

    expect(apiRequest).toHaveBeenCalledWith("/crops");
  });

  test("should display error when crop API fails", async () => {
    apiRequest.mockRejectedValue(
      new Error("Unable to load crop information.")
    );

    render(
      <MemoryRouter>
        <Crops />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Unable to load crop information.")
      ).toBeInTheDocument();
    });

    expect(apiRequest).toHaveBeenCalledWith("/crops");
  });

  test("should display message when no crops are available", async () => {
    apiRequest.mockResolvedValue({
      crops: [],
    });

    render(
      <MemoryRouter>
        <Crops />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("No crop information available.")
      ).toBeInTheDocument();
    });
  });
});