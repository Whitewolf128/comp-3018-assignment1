import request from "supertest";
// import supertest request object

import { Response } from "supertest";
// import supertest Response type

import app from "../src/app";

// import testing
import { it, expect, describe } from '@jest/globals';

describe("GET /api/v1/portfolio/performance", () => {
    it("should return portfolio performance summary for a high performing portfolio", async () => {
        // create GET request to portfolio performance endpoint with query parameters
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance")
            .query({ initialInvestment: 1000, currentValue: 1500 });

        // assert response status OK and performance object to have specified properties
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("initialInvestment");
        expect(response.body).toHaveProperty("currentValue");
        expect(response.body).toHaveProperty("performance");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return portfolio performance summary for a no change portfolio", async () => {
        // create GET request to portfolio performance endpoint with query parameters
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance")
            .query({ initialInvestment: 1000, currentValue: 1000 });

        // assert response status OK and performance object to have specified properties
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("initialInvestment");
        expect(response.body).toHaveProperty("currentValue");
        expect(response.body).toHaveProperty("performance");
    });
});