import { Request, Response } from "express";

export function calculatePortfolioPerformance(req: Request, res: Response): void {
    /*Extract values from URL query parameters*/
    let initialInvestment = parseFloat(req.query.initialInvestment as string) || 0; // default initial investment if not provided
    let currentValue = parseFloat(req.query.currentValue as string) || 0; // default current value if not provided
   /*Calculates the total profit or loss with the current value minus the initial investment.*/
    const profitOrLoss = currentValue - initialInvestment;
    // calculates the percentageChange of the profitOrLoss/initialInvestment * 100.
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    //A switch case statement to determine the message.
    switch (true) {
        case percentageChange >= 30 :
            performanceSummary = "Excellent Performance! Your investments are doing great";
            break;
        case percentageChange >=10 && percentageChange < 30:
            performanceSummary = "Solid gain. Keep monitoring your investments.";
            break;
        case percentageChange > 0 && percentageChange < 10:
            performanceSummary = "Modest gain. Your portfolio is growing slowly.";
            break;
        case percentageChange == 0:
            performanceSummary = "No change. Your protfolio is holding steady.";
            break;
        case percentageChange <= 0 && percentageChange >= -10:
            performanceSummary = "Minor loss. Stay calm and review your options.";
            break
        case percentageChange < -10:
            performanceSummary = "Significant loss. Review your portfolio strategy.";
            break;
        }   

    res.json({
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    });
}