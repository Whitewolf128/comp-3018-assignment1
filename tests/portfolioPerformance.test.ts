// install packages for testing
import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "@jest/globals";

describe("GET /api/v1/portfolio/performance", () => {
    // Test case for a high-performing portfolio
  it("should return a working high performing portfolio summary", async () => {
    const response = await request(app).get(
      "/api/v1/portfolio/performance?initialInvestment=1000&currentValue=1300"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        initialInvestment: 1000,
        currentValue: 1300,
        performance: expect.anything(),
      })
    );
  });
    // Test case for a flat portfolio
  it("should return a working flat portfolio summary", async () => {
    const response = await request(app).get(
      "/api/v1/portfolio/performance?initialInvestment=1000&currentValue=1000"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        initialInvestment: 1000,
        currentValue: 1000,
        performance: expect.anything(),
      })
    );
  });
    // Test case for a low-performing portfolio
  it("should return a working low-performing portfolio summary", async () => {
    const response = await request(app).get(
      "/api/v1/portfolio/performance?initialInvestment=1000&currentValue=500"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        initialInvestment: 1000,
        currentValue: 500,
        performance: expect.anything(),
      })
    );
  });
});