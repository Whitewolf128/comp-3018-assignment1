export function calculatePortfolioPerformance(): any {
    /*current implementation is hardcoded,
    will research to figure out how to allow the user/tester
    to make up numbers and pass them through.
    */
    let initialInvestment = 10000;
    let currentValue = 12000;
   /*calculate the profit or loss
    to be the current value minus the intial investment.*/
    const profitOrLoss = currentValue - initialInvestment;
    /* 
    the current implementation may have a bug but am unsure,
    will research the video to see.
   */
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    /*
    current implementation is in violation of the instructions,
    need to read the notes or research online to remove the if statement
    */
    if (percentageChange > 20) {
        performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
    } else {
        performanceSummary = `The portfolio has performed poorly.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}