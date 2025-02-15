import { aA as constants } from "./BEpVD-aq.js";
const schemaKeys = {
  REWARD_TYPE: "Reward Type",
  REWARD_SIZE: "Reward Size",
  TRIGGER_TYPE: "Type Of Trigger",
  DEVICE: "Device",
  TYPE: "Type",
  SOURCE: "Source",
  DESTINATION: "Destination",
  TRIGGER_POINT: "Trigger Point",
  REFERRAL_DATE_DISTINCTION: "Referral Date Distinction",
  ENTITY: "Entity",
  DEPOSIT_AMOUNT: "Deposit Amount",
  FROM_CURRENCY: "From Currency",
  TO_CURRENCY: "To Currency",
  PRESELECTED_AMOUNT: "Preselected Amount"
};
const orderTypeNames = {
  [constants.ORDER_TYPE.INSTANT]: "Instant Order",
  [constants.ORDER_TYPE.MARKET]: "Market Order",
  [constants.ORDER_TYPE.LIMIT]: "Limit Order",
  [constants.ORDER_TYPE.STOP_MARKET]: "Stop Market Order",
  [constants.ORDER_TYPE.STOP_LIMIT]: "Stop Limit Order"
};
const referralEvents = {
  referralInvitationCtaClick: {
    name: "Referral Invitation CTA Click",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.TRIGGER_TYPE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.TYPE]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  },
  referralInvitationDisplay: {
    name: "Referral Invitation Display",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.TRIGGER_TYPE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.TYPE]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  },
  referralPageVisit: {
    name: "Referral Page Visit",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.SOURCE]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  },
  referralLinkCopied: {
    name: "Referral Link Copied",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  },
  referralSocialShare: {
    name: "Referral Social Share",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.DESTINATION]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  },
  referralInvitationExit: {
    name: "Referral Invitation Exit",
    schema: {
      [schemaKeys.REWARD_TYPE]: "",
      [schemaKeys.REWARD_SIZE]: "",
      [schemaKeys.DEVICE]: "",
      [schemaKeys.DESTINATION]: "",
      [schemaKeys.REFERRAL_DATE_DISTINCTION]: "",
      [schemaKeys.ENTITY]: ""
    }
  }
};
const tradeAndWinEvents = {
  showMeHowCTAClick: {
    name: "Show me how CTA click",
    schema: {
      "Campaign ID": ""
    }
  },
  joinNowCTAClick: {
    name: "Join now CTA click",
    schema: {
      "Campaign ID": ""
    }
  }
};
const trackingConstants = {
  ORIGIN: {
    ONBOARDING: "onboarding",
    DUE_DILIGENCE: "due_diligence",
    VOLUNTARY: "voluntary"
  }
};
export {
  tradeAndWinEvents as a,
  orderTypeNames as o,
  referralEvents as r,
  schemaKeys as s,
  trackingConstants as t
};
