// import the express application and type definition
import express, { Express } from "express";
// initialize the express application
const app: Express = express();

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Health check endpoint to check if it works
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});
// import the calculatePortfolioPerformance function from portfolioPerformance.ts so that it can be used to test later.
export const calculatePortfolioPerformance = (req: any, res: any) => {
  const initialInvestment = Number(req.query.initialInvestment ?? 0);
  const currentValue = Number(req.query.currentValue ?? 0);

  const performance =
    initialInvestment === 0
      ? 0
      : ((currentValue - initialInvestment) / initialInvestment) * 100;

  return res.json({
    initialInvestment,
    currentValue,
    performance,
  });
};
// the api endpoint for the portfolio performance.
app.get("/api/v1/portfolio/performance", calculatePortfolioPerformance);
// export app and server for testing
export default app;
