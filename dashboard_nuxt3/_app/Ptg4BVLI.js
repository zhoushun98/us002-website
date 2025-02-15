import { a0 as Decimal, aA as constants$2, bG as forceReloadConstants, bH as preferredCurrencyConstants } from "./BEpVD-aq.js";
import { d as deepFreeze } from "./BwaZ2ET2.js";
const constants = {
  LOCALE: "en-US",
  ORDERBOOK: {
    INITIAL_STATE: {
      bids: [],
      asks: []
    },
    SIDES: {
      ASKS: "asks",
      BIDS: "bids"
    },
    ROUNDING: {
      ASKS: Decimal.ROUND_UP,
      BIDS: Decimal.ROUND_DOWN
    }
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    REQUIRED_2FA: "required_2fa"
  },
  TIMERS: {
    POLLING_USER_PROFILE: {
      TIME: 3e4,
      ID: "polling_user_profile"
    },
    POLLING_ORDERS: {
      TIME: 15e3,
      ID: "polling_orders"
    },
    POLLING_USER_BALANCE: {
      TIME: 3e4,
      ID: "polling_user_balance"
    },
    POLLING_USER_TRANSACTIONS: {
      TIME: 3e4,
      ID: "polling_user_transactions"
    },
    POLLING_DASHBOARD_USER_INFO: {
      TIME: 3e4,
      ID: "polling_dashboard_user_info"
    },
    POLLING_HOLDINGS: {
      TIME: 3e4,
      ID: "polling_holdings"
    },
    POLLING_FEE_SCHEDULE: {
      TIME: 1e3 * 60 * 5,
      ID: "polling_fee_schedule"
    },
    POLLING_CRYPTO_WITHDRAWAL_DATA_REVIEW: {
      TIME: 1e3,
      ID: "polling_crypto_withdrawal_data_review"
    },
    POLLING_DERIVATIVES_POSITION_HISTORY: {
      TIME: 15e3,
      ID: "polling_derivatives_position_history"
    },
    POLLING_DERIVATIVES_OPEN_POSITIONS: {
      TIME: 3e4,
      AGGRESSIVE_TIME: 5e3,
      ID: "polling_derivatives_open_positions"
    },
    OPEN_ORDERS: {
      ANIMATION: 100
    },
    ORDERBOOK: {
      MIN_THROTTLE: 700,
      MAX_THROTTLE: 5e3
    },
    CREATE_ORDER: {
      MIN_THROTTLE: 2e3,
      MAX_THROTTLE: 5e3
    },
    THROTTLE_ORDER_HISTORY: 250,
    THROTTLE_POSITION_HISTORY: 250
  },
  // TODO: Source from API / Initial data
  MINIMUM_FEE: {
    BTC: new Decimal(1e-6),
    DEFAULT: new Decimal(0.01)
  },
  LOCAL_STORAGE: {
    ...constants$2.LOCAL_STORAGE,
    ...forceReloadConstants.LOCAL_STORAGE,
    ORDER_TYPE: "bts-order-type",
    USER_ORDER_LIST_TYPE: "bts-user-order-list-type",
    USER_ORDER_PAGINATION: "bts-user-order-pagination-size"
  },
  USER_ORDER_LIST_TYPE: {
    ALL_ORDERS_KEY: "all",
    CURRENT_ORDERS_KEY: "current"
  },
  USER_ORDER_PAGINATION_SIZE: {
    DEFAULT: "10"
  },
  BANK_TRANSFERS: {
    DIGITS_ONLY_CURRENCIES: ["JPY"],
    ACH_CURRENCIES_SUPPORTING_LOCKED_AMOUNTS: ["USD"],
    TYPE: {
      SEPA: "sepa",
      FPS: "fps",
      WIRE: "wire",
      ACH: "ach",
      SEN: "sen",
      SIGNET: "signet",
      // Deprecated
      ABA: "aba",
      BLINC: "blinc",
      CARD: "card",
      CBIT: "cbit"
    }
  },
  ALL_MIXPANEL_STAKING_TYPES: {
    AUTOMATIC: "Automatic",
    MANUAL: "Manual",
    ETH2: "ETH2"
  },
  DEPOSIT_TO_CURRENCIES: {
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP"
  },
  ACCOUNT_TYPES: {
    SUB_ACCOUNT: 0,
    PTS: 4,
    COLLATERAL: 5
  },
  ACCOUNT_STATUS: {
    ACTIVE: "active",
    PENDING: "pending",
    CLOSED: "closed",
    DENIED: "denied"
  },
  EMAIL: {
    PREMIUM_SUPPORT: "premium.support@bitstamp.net"
  },
  ASSET_LISTS: {
    WATCHLIST: "watchlist"
  }
};
constants.MIXPANEL_STAKING_TYPES = {
  ETH: constants.ALL_MIXPANEL_STAKING_TYPES.ETH2
};
constants.SOURCES = {
  MARKET_PAGE: "Market page",
  DASHBOARD: "Dashboard",
  PORTFOLIO: "Portfolio",
  ASSET_PAGE: "Asset Page",
  EARN_HOME: "Earn Home"
};
constants.DEFAULT_PREFERRED_CURRENCY = preferredCurrencyConstants.DEFAULT_PREFERRED_CURRENCY;
constants.MAIN_ACCOUNT_ID = "main";
deepFreeze(constants);
const constants$1 = constants;
export {
  constants$1 as c
};
