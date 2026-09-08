const request = require("supertest");
const app = require("../app");

describe("Authentication API", () => {
  test("GET / should return API running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain(
      "AgriMitra Backend API is running"
    );
  });

  test("POST /api/auth/register should reject missing fields", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Please provide name, email and password."
    );
  });

  test("POST /api/auth/register should reject short password", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "123"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Password must be at least 6 characters."
    );
  });

  test("GET /api/auth/profile should reject request without token", async () => {
    const response = await request(app)
      .get("/api/auth/profile");

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Not authorized. Token required."
    );
  });
});