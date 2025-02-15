const resource = {
  "pages": {
    "account": {
      "withdraw": {
        "cryptocurrency": {
          "errorFetchingScamWarningStateTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong" } },
          "errorFetchingScamWarningStateText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please try refreshing the page or contact support if the issue persists." } }
        }
      },
      "logout": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have been securely logged out." } }
      }
    },
    "accountFreeze": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Are you sure you want to freeze your account?" } },
      "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If you do this, your account will be locked until you contact Bitstamp support." } },
      "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Freeze account" } }
    },
    "accountFrozen": {
      "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Account frozen" } },
      "text": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your account has been frozen. No one will be able to use it until you contact our support team to get it back online. Your funds are safe in the meanwhile." } }
    },
    "accountActivationFailure": {
      "userDeleted": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Link expired – let’s try again!" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Looks like this verification link is no longer valid." } },
        "subtitleRestart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please restart your registration to continue." } },
        "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restart registration" } }
      },
      "linkExpired": {
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Oops, your link expired!" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Don’t worry! Just click below to get a new email and complete your setup." } },
        "button": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resend verification email" } },
        "emailSent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New verification email sent" } }
      }
    }
  },
  "components": {
    "withdrawals": {
      "scamWarningNotice": {
        "ackErrorTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error" } },
        "ackErrorText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong. Please try again later or contact support if the issue persists." } },
        "compromisedAccount": {
          "question": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Was your account compromised?" } },
          "moreInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Find all the information you need " } },
          "moreInfoLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "here." } }
        }
      }
    },
    "markets": {
      "assetOverview": {
        "bestPerformingAssetsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best performing assets" } },
        "bestPerformingAssetsSmallTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best performing" } },
        "bestPerformingAssetsAlternativeText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Biggest rises" } },
        "bestPerformingAssetsSmallAlternativeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Biggest rises" } },
        "worstPerformingAssetsTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Worst performing assets" } },
        "worstPerformingAssetsSmallTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Worst performing" } },
        "worstPerformingAssetsAlternativeTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Biggest falls" } },
        "worstPerformingAssetsAlternativeSmallTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Biggest falls" } },
        "lastListedTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Last listed" } }
      },
      "assetRow": {
        "tradeButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Trade" } },
        "viewButtonText": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View" } }
      }
    },
    "notifications": {
      "accountFreeze": {
        "successMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your account has been frozen." } },
        "errorMessage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "There has been a problem freezing your account. Please try again later." } }
      }
    },
    "userPortfolioTable": {
      "smallBalancesLabel": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Small balances" } }
    }
  }
};
export {
  resource as default
};
