const request = require("supertest");
const app = require("../app");

describe("Crop API", () => {
  test("GET /api/crops should return crop list", async () => {
    const response = await request(app).get("/api/crops");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("count");
    expect(response.body).toHaveProperty("crops");
    expect(Array.isArray(response.body.crops)).toBe(true);
  });

  test("GET /api/crops/:id should reject invalid crop ID", async () => {
    const response = await request(app)
      .get("/api/crops/invalid-id");

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Invalid crop ID.");
  });

  test("GET /api/crops/:id should return 404 for non-existing valid ID", async () => {
    const response = await request(app)
      .get("/api/crops/507f1f77bcf86cd799439011");

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Crop not found.");
  });

  test("POST /api/crops should reject request without token", async () => {
    const response = await request(app)
      .post("/api/crops")
      .send({
        name: "Test Crop",
        season: "Test Season",
        description: "Test description",
        suitableSoil: "Test soil",
        waterRequirement: "Medium"
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Not authorized. Token required."
    );
  });
    test("PUT /api/crops/:id should reject request without token", async () => {
    const response = await request(app)
      .put("/api/crops/507f1f77bcf86cd799439011")
      .send({
        description: "Updated description"
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Not authorized. Token required."
    );
  });

  test("DELETE /api/crops/:id should reject request without token", async () => {
    const response = await request(app)
      .delete("/api/crops/507f1f77bcf86cd799439011");

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Not authorized. Token required."
    );
  });
});