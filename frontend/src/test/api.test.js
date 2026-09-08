import { describe, test, expect, beforeEach, vi } from "vitest";
import { apiRequest } from "../services/api";

describe("API Service", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("should return data for a successful API request", async () => {
    const mockData = {
      message: "Success",
      crops: [],
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await apiRequest("/crops");

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:5000/api/crops",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    expect(result).toEqual(mockData);
  });

  test("should throw error when API request fails", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({
        message: "Unauthorized",
      }),
    });

    await expect(apiRequest("/auth/profile")).rejects.toThrow(
      "Unauthorized"
    );
  });
});