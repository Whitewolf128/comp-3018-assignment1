import { Request, Response } from "express";

export function calculatePortfolioPerformance(req: Request, res: Response): void {
    /*current implementation is hardcoded,
    will research to figure out how to allow the user/tester
    to make up numbers and pass them through.
    */
    let initialInvestment = 10000;
    let currentValue = 13000;
   /*Calculates the total profit or loss with the current value minus the initial investment.*/
    const profitOrLoss = currentValue - initialInvestment;
    // calculates the percentageChange of the profitOrLoss/initialInvestment * 100.
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    /*
    current implementation is in violation of the instructions,
    need to read the notes or research online to remove the if statement
    */
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