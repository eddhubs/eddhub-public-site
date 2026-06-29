export const pricing = {
  launchMonthSubscriptionWaived: true,
  monthlySubscription: {
    confirmed: true,
    amount: 24.99,
    amountLabel: "£24.99/month"
  },
  subscribedPlatformFees: [
    {
      requestType: "Single delivery",
      shortLabel: "Single",
      fee: "£1.50",
      savingLabel: "Save £1.00 with subscription",
      countsTowardSubscriptionSaving: true
    },
    {
      requestType: "Bundle - 2 drops",
      shortLabel: "Bundle 2",
      fee: "£2.50",
      savingLabel: "Save £1.00 with subscription",
      countsTowardSubscriptionSaving: true
    },
    {
      requestType: "Bundle - 3 drops",
      shortLabel: "Bundle 3",
      fee: "£3.00",
      savingLabel: "Save £1.00 with subscription",
      countsTowardSubscriptionSaving: true
    },
    {
      requestType: "Bundle - 4 drops",
      shortLabel: "Bundle 4",
      fee: "£3.50",
      savingLabel: "Save £1.00 with subscription",
      countsTowardSubscriptionSaving: true
    }
  ],
  noSubscriptionPlatformFees: [
    {
      requestType: "Single delivery",
      shortLabel: "Single",
      fee: "£2.50"
    },
    {
      requestType: "Bundle - 2 drops",
      shortLabel: "Bundle 2",
      fee: "£3.50"
    },
    {
      requestType: "Bundle - 3 drops",
      shortLabel: "Bundle 3",
      fee: "£4.00"
    },
    {
      requestType: "Bundle - 4 drops",
      shortLabel: "Bundle 4",
      fee: "£4.50"
    }
  ],
  qualifyingRunSaving: "£1"
} as const;

export const pricingComparison = pricing.subscribedPlatformFees.map((subscribedFee, index) => ({
  requestType: subscribedFee.requestType,
  subscribedFee: subscribedFee.fee,
  noSubscriptionFee: pricing.noSubscriptionPlatformFees[index].fee,
  difference: subscribedFee.savingLabel,
  countsTowardSubscriptionSaving: subscribedFee.countsTowardSubscriptionSaving
}));
