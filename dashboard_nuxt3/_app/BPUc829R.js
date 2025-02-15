const schemaKeys = {
  CONVERSION_VALUE: "Branch Conversion Value"
};
const branchEvents = {
  completeSignUp: {
    name: "Complete Sign Up",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 2
    }
  },
  verifyPhoneNumber: {
    name: "Verify Phone Number",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 3
    }
  },
  completeIDVerification: {
    name: "Complete ID Verification",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 4
    }
  },
  KYCSectionSubmitted: {
    name: "KYC Section Submitted",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 5
    }
  },
  complete2FASetup: {
    name: "Complete 2FA Setup",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 6
    }
  },
  startDeposit: {
    name: "Start Deposit",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 10
    }
  },
  startCreditCardPurchase: {
    name: "Start Credit Card Purchase",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 14
    }
  },
  startPaypalPurchase: {
    name: "Start Paypal Purchase",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 15
    }
  },
  startWithdrawal: {
    name: "Start Withdrawal",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 18
    }
  },
  buyOrderPlaced: {
    name: "Buy Order Placed",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 59
    }
  },
  sellOrderPlaced: {
    name: "Sell Order Placed",
    schema: {
      [schemaKeys.CONVERSION_VALUE]: 60
    }
  }
};
export {
  branchEvents as b
};
