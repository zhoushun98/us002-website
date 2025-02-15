const en = {
  validation: {
    fieldIsRequired: "This field is required!",
    invalidFormat: "Invalid format!",
    numberTooSmall: "The number is too small! Minimum: {0}",
    numberTooBig: "The number is too big! Maximum: {0}",
    invalidNumber: "Invalid number",
    invalidInteger: "The value is not an integer",
    textTooSmall: "The length of text is too small! Current: {0}, Minimum: {1}",
    textTooBig: "The length of text is too big! Current: {0}, Maximum: {1}",
    thisNotText: "This is not a text!",
    thisNotArray: "This is not an array!",
    selectMinItems: "Select minimum {0} items!",
    selectMaxItems: "Select maximum {0} items!",
    invalidDate: "Invalid date!",
    dateIsEarly: "The date is too early! Current: {0}, Minimum: {1}",
    dateIsLate: "The date is too late! Current: {0}, Maximum: {1}",
    invalidEmail: "Invalid e-mail address!",
    invalidURL: "Invalid URL!",
    invalidCard: "Invalid card format!",
    invalidCardNumber: "Invalid card number!",
    invalidTextContainNumber: "Invalid text! Cannot contain numbers or special characters",
    invalidTextContainSpec: "Invalid text! Cannot contain special characters"
  },
  constants: {
    markets: {
      typeGroup: {
        SPOT: "Spot",
        PERPETUAL: "Perpetuals"
      }
    },
    simpleApp: {
      btnText: "Buy / Sell",
      viewRecurrings: "View all recurring buys/sells",
      tabName: {
        BUY: "Buy",
        SELL: "Sell",
        CONVERT: "Convert"
      }
    }
  },
  components: {
    appTable: {
      noMatches: "No matches",
      clearFiltersAction: "Clear filters",
      perPage: "Per page:",
      noDataText: "No data."
    },
    fileUpload: {
      previewAction: "Preview",
      otherFiles: "+ {count} other file | + {count} other files",
      dragAndDrop: "Drag & drop file here",
      or: "or",
      browseFilesAction: "browse files"
    },
    genericFileUpload: {
      maximumFilesLimitError: "You have reached the maximum amount of documents allowed ({limit})",
      deleteFilePrompt: "Are you sure you want to delete this file?"
    },
    mobileFileUpload: {
      takePhotoAction: "Take a photo",
      previewAction: "Preview",
      otherFiles: "+ {count} other file | + {count} other files",
      or: "or",
      uploadFileAction: "Upload file"
    },
    uploadedFile: {
      previewAction: "Preview"
    },
    fieldBinaryChoice: {
      yesLabel: "Yes",
      noLabel: "No"
    },
    fieldDynamicCountries: {
      removeTooltip: "Remove",
      addButton: "Add",
      selectCountryLabel: "Select country"
    },
    fieldDynamicDropdowns: {
      removeTooltip: "Remove",
      addButton: "Add"
    },
    fieldDynamicQuestion: {
      multipleAnswersLabel: "Multiple answers possible"
    },
    fieldEntityTermsOfUse: {
      title: "Changing the country of residency at this point will change the Bitstamp’s legal entity you are registering to.",
      agreeStatement: `I agree to Bitstamp's {terms-link}{referral-link} and {privacy-policy-link}.`,
      termsOfUse: "Terms of Use",
      referralProgramTerms: "Referral Program Terms",
      privacyPolicy: "Privacy Policy"
    },
    fieldPaymentInput: {
      amountLeftError: "You have {limit} USD left available on Level 1. {break} {verify-link} to remove the limit. {more-info-link}.",
      verifyIdAction: "Verify ID",
      moreInfoAction: "More Info"
    },
    fieldTermsOfUse: {
      agreeStatement: `I agree to Bitstamp's {terms-link}{referral-link} and {privacy-policy-link}.`,
      termsOfUse: "Terms of Use",
      referralProgramTerms: "Referral Program Terms",
      privacyPolicy: "Privacy Policy",
      errorBody: "Something went wrong. Please try again later."
    },
    marketsDropdown: {
      newLabel: "new",
      allLabel: "all",
      marketSort: "Market",
      lastPriceSort: "Last price",
      twentyFourHourChangeSort: "24h change",
      twentyFourHourVolumeSort: "24h volume",
      noResults: "No results",
      allFilterLabel: "All",
      favoriteFilterLabel: "Favorites",
      spotFilterLabel: "Spot",
      perpetualFilterLabel: "Perpetuals"
    },
    simpleLayoutMarketSelector: {
      findAsset: "Find asset",
      searchPlaceholder: "Which asset are you looking for?"
    },
    marketsChartSwitch: {
      lineChart: "Line Chart",
      candleChart: "Candle Chart"
    },
    navigation: {
      appFooter: {
        sectionTitle: {
          about: "About",
          legalAndPrivacy: "Legal & privacy",
          products: "Products",
          services: "Services",
          resources: "Resources",
          address: "Address",
          contact: "Contact"
        },
        sectionLink: {
          aboutUs: "Who We are",
          bitstampWay: "The Bitstamp Way",
          careers: "Careers",
          legalAndPrivacy: "Legal & Privacy",
          legalAndPrivacyUsa: "Legal & Privacy - USA",
          feeSchedule: "Fee Schedule",
          faq: "FAQ",
          mobileApps: "Mobile App",
          tradeview: "Tradeview",
          earnStake: "Earn Stake",
          earnLend: "Earn Lend",
          institutionsAndPartners: "Institutions & Partners",
          baas: "Bitstamp as a Service",
          bitstampEcosystem: "The Bitstamp Ecosystem",
          pro: "Pro",
          apiDocumentation: "API Documentation",
          httpApi: "HTTP API",
          websocketApiV2: "Websocket API v2",
          fixV2: "Fix v2",
          pgpKey: "PGP Key",
          lightningNetwork: "Lightning Network",
          customerSupport: "Customer Support"
        },
        telegramExchangeLink: "Bitstamp Exchange",
        telegramExchangeTitle: "Telegram - Bitstamp Exchange",
        telegramSupportLink: "Bitstamp Support",
        telegramSupportTitle: "Telegram - Bitstamp Support",
        telegramCommunityLink: "Bitstamp Community",
        telegramCommunityTitle: "Telegram - Bitstamp Community",
        incDisclaimer: "Bitstamp USA, Inc. is licensed to engage in Virtual Currency Business Activity by the New York State Department of Financial Services. Licensed as a Money Transmitter by the New York State Department of Financial Services.",
        bfsDisclaimer: {
          disclaimerText: "Bitstamp Financial Services, brokerage company, Ltd. (“BFS”) is authorized and supervised as a MiFID investment firm by the Slovenian Securities Market Agency (ATVP) and provides investment services and other ancillary services with regards to trading in crypto derivatives. Trading crypto derivatives carries significant risks and may result in substantial losses. Please trade responsibly and ensure you understand the associated risks. You can find more about the risks {generalTermsAndConditionsLink}. To help you understand the risks involved we have put together a series of {keyInformationDocumentsLink} highlighting the risks and rewards related to each derivatives contract.",
          generalTermsAndConditionsText: "here",
          keyInformationDocumentsLinkText: "Key Information Documents (KIDs)",
          notAvailableCountries: "Crypto derivatives trading is not available in the US, Canada, Japan and some other countries."
        },
        copyright: "All rights reserved © {currentYear} Bitstamp."
      },
      mobileMenu: {
        sectionTitle: {
          myProfile: "My Profile",
          subAccount: "My account",
          defaultCurrency: "Default currency",
          proSettings: "Settings",
          accountBalance: "Account balance",
          switchAccounts: "Switch accounts"
        },
        back: "Back",
        logOutLink: "Log out",
        logInButton: "Log in",
        getStartedButton: "Get started",
        earnBalancesTitle: "Earn",
        emptyAccountBalanceText: "You don't have any assets on this account.",
        transferBetweenAccountsAction: "Transfer between accounts",
        createNewSubAccountAction: "Create new sub account",
        getBitstampApp: "Get Bitstamp app"
      }
    },
    pagination: {
      paginationBox: {
        previousPageTooltip: "Previous page",
        nextPageTooltip: "Next page",
        currentPageTooltip: "Current page",
        currentPageLabel: "Page {currentPage} of {pageCount}"
      }
    },
    buyDirectCryptoButton: {
      buyCurrencyWith: "Buy {currency} with"
    },
    copyDataIconButton: {
      copied: "Copied",
      copyTitle: "Copy"
    },
    createPassword: {
      enterPasswordLabel: "Enter password",
      passwordRules: "Your password must contain:",
      charactersRule: "{count} or more characters",
      caseRule: "Upper & lowercase letters",
      numberRule: "At least one number",
      specialCharacterRule: "At least one special character",
      passwordStrength: "Password strength",
      confirmPasswordLabel: "Confirm password"
    },
    dropdown: {
      searchLabel: "Search",
      selectLabel: "Select",
      noDataLabel: "No data available"
    },
    labeledDropdown: {
      searchLabel: "Search",
      noResultsText: "No results."
    },
    hcaptcha: {
      disclaimer: "This site is protected by hCaptcha and its {privacy-policy-link} and {terms-link} apply.",
      privacyPolicyLink: "Privacy Policy",
      termsOfServiceLink: "Terms of Service"
    },
    helpPanel: {
      needHelpTooltip: "Need help?",
      helpTitle: "Help"
    },
    networkSelector: {
      noNetworkFound: "No Network found",
      selectNetworkLabel: "Select Network"
    },
    orderSlider: {
      disabledSection: "Disabled section"
    },
    platformNotification: {
      clickToReadMore: "{notification-text} Click {here-link} to read more.",
      hereLink: "here"
    },
    rightSidebar: {
      closeButton: "Close"
    },
    shareableLink: {
      shareWithFriends: "Share with friends"
    },
    table: {
      noDataProvided: "No data provided"
    },
    toast: {
      clickToReadMore: "Click {here-link} to read more.",
      hereLink: "here"
    },
    twoFactorModal: {
      confirmButton: "Confirm",
      confirmingLabel: "Confirming"
    },
    activityHistory: {
      activityHistoryTable: {
        historyNotAvailableError: "Activity history not available",
        historyIsEmptyError: "Activity history is empty",
        dateAndTimeColumnTitle: "Date and time",
        ipAddressColumnTitle: "IP address",
        actionColumnTitle: "Action"
      },
      exportModal: {
        selectPeriodOfActivity: "Select the period* of activity you would like for the report.",
        timezoneDisclaimer: "* Note that the selected period and exported data are in UTC time.",
        closeButton: "Close",
        requestSentStatus: "Soon you will receive an email in your inbox with a link to download the report.",
        requestSentStatusNotice: `If you don't get an email in 30 minutes you can try again and generate a new one.`,
        requestDownloadedStatus: "Your activity history report is ready to be downloaded.",
        requestDownloadedValidLinkStatus: "As a security precaution the download will be locked after {seconds} seconds. You will be able to unlock it again once this timer expires.",
        requestDownloadedLockedLinkStatus: `As a security precaution your download is locked. Please unlock it when you're ready to download.`,
        daysPeriod: "{number} days",
        monthsPeriod: "{number} months",
        yearToDatePeriod: "Year to date",
        allPeriod: "All",
        customPeriod: "Custom",
        configStatusTitle: "Export activity history",
        sentStatusTitle: "Preparing your activity history report",
        downloadStatusTitle: "Download activity history report",
        errorTitle: "Error",
        unlockDownloadButton: "Unlock download",
        downloadButton: "Download",
        exportButton: "Export",
        exportRequestErrorTitle: "Export request failed",
        exportRequestErrorBody: "An unexpected error occurred. Please try again later or contact our support.",
        expiredErrorTitle: "This report has expired",
        expiredErrorBody: "This activity history report is no longer available, please request a new one"
      },
      activityHistoryV2: {
        unexpectedError: "An unexpected error occurred. Please try again later or contact support if the problem persists."
      }
    },
    onfidoTerms: {
      biometricsCapturingDisclaimer: "Identity verification includes capturing your biometrics (unique facial features) and is a required safety measure for using the app and to enhance your security.",
      findMoreInfoInPrivacyPolicy: "Know that we are committed to protecting your privacy and account. Find more information on how this data is processed in our {privacy-policy-link}.",
      privacyPolicy: "Privacy Policy"
    },
    onfidoTermsUS: {
      agreeDisclaimer: 'By clicking on the "Start now" button, you agree you have read, understand and accept {facial-scan-policy-link}, {privacy-policy-link} and {terms-of-service-link}.',
      facialScanPolicy: "Facial Scan Policy and Release",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    kycSubtitle: {
      internalUseOnlyDisclaimer: "This info is for internal Bitstamp use only.",
      kycDisclaimer: "As a licensed financial services provider, we are obligated to collect the following information from all customers. We need to keep this data on file to fulfill our regulatory obligations, but we will never use it for any other purpose."
    },
    accountStatusTable: {
      currentLevel: `Level {level}`,
      verifiedStatus: "Verified",
      pendingStatus: "Pending"
    },
    appropriatenessComponent: {
      knowledgeDisclaimer: "We are required by the Financial Conduct Authority to assess your knowledge about cryptoasset investing and your understanding of the risks. This is so that we can determine if an investment in cryptoassets is appropriate for you.",
      answerFollowingQuestions: "Please answer the following questions.",
      estimatedTime: "Estimated time: {minutes} minutes"
    },
    appropriatenessSuccessComponent: {
      completedStatus: "You have completed the derivatives appropriateness assessment.",
      additionalInfo: "Before we can review your request, we need to collect some additional information."
    },
    inReviewComponent: {
      thankYouForSubmitting: "Thank you for submitting your data.",
      inReviewStatus: "Your request is in review",
      notificationNotice: "We will notify you via email about it."
    },
    temporaryAddressIntroComponent: {
      yesIDoButton: "Yes I do",
      noIDontButton: `No I don't`
    },
    unexpectedError: {
      defaultErrorTitle: "Oops, something went wrong.",
      defaultErrorText: "Please try again later.",
      defaultErrorAction: "Try again"
    },
    cookieConsentBanner: {
      disclaimer: "We use cookies and similar technologies to operate core site features, customize core services, analyze our traffic, and for security and marketing. Accept all cookies, customize your settings or read our full {cookie-policy-link}.",
      cookiePolicyLink: "Cookie Policy",
      customizeButton: "Customize",
      enableAllButton: "Enable all"
    },
    cookieConsentModal: {
      cookieSettingsTitle: "Cookie Settings",
      dontEnableAllButton: `Don’t enable all`,
      enableAllButton: "Enable all",
      confirmSelectionButton: "Confirm selection",
      readMoreAction: "Read more",
      cookiePolicyLink: "Cookie Policy",
      generalInformationTitle: "General information",
      inControlTitle: "You are in control of your personal data.",
      inControlBody: {
        md: `This interface will help you select what cookies and similar technologies are used while browsing the Bitstamp Site. Certain types of cookies are strictly necessary for running the Site and therefore cannot be turned off, as that would prevent the site from functioning as requested.

We use first-party and third-party cookies and other technologies to recognize you as a Bitstamp customer, customize services, content and advertising, measure promotional effectiveness, and collect information about your computer or other access device to mitigate risk, help prevent fraud, and promote trust and safety.`
      },
      whatAreCookiesTitle: "What are cookies and why does Bitstamp use them?",
      whatAreCookiesBody: {
        md: `**Cookies** are small text files that enable us and our service providers to uniquely identify your browser or device. Cookies normally work by assigning a unique number to your device and are stored on your browser by the websites that you visit as well as third-party service providers for those websites.

Similar technologies we also use are:

**SDKs** are blocks of code that may be installed in the website. SDKs help us understand how you interact with the website and collect certain information about the device and network you use to access the website.

**Pixels** are small invisible images that are embedded in certain website pages or emails. Pixels collect information about your visit to a website page, record the fact you opened an email and can set cookies.

**Local storage** allows data to be stored locally on your browser or device and includes HTML5 local storage and browser cache. Local storage is normally used to speed up site functionality and remember your preferences.`
      },
      ifEnabledTitle: "If enabled",
      ifEnabledBody: {
        md: `*   We use cookies and other technologies to recognize you as a Bitstamp customer, customize Services, content and advertising, measure promotional effectiveness, and collect information about your computer or other access device to mitigate risk, help prevent fraud, and promote trust and safety
*   We can improve your experience by remembering you from session to session
*   We can better keep track of your preferences and improve Bitstamp accordingly
*   It will help us improve the performance of our website`
      },
      ifDisabledTitle: "If disabled",
      ifDisabledBody: {
        md: `*   We won’t be able to remember you from session to session so we will not be able to tailor the site to you in any way
*   Note that some cookies are strictly necessary for the Site to function and therefore cannot be disabled`
      },
      enableCheckboxLabel: "Enable",
      strictlyNecessaryTitle: "Strictly necessary",
      strictlyNecessaryDescription: "These tracking technologies are strictly necessary for the Site to function and provide you with essential features, such as to allow you to log in to secure areas of the Site. Because these technologies are essential for the Site and its features to work, you cannot decline using these technologies.",
      analyticsAndPerformanceTitle: "Analytics and performance",
      analyticsAndPerformanceDescription: "We use analytics and performance tracking technologies to analyze how you use the Site, including which pages you view most often, how you interact with the content, measure any errors that occur and test different design ideas.",
      advertisingAndMarketingTitle: "Advertising and marketing",
      advertisingAndMarketingDescription: "The Site may use third-party advertising and marketing tracking technologies. These tracking technologies help us, and third parties in some cases, promote our services on other platforms and websites and measure the effectiveness of our campaigns.",
      moreInformation: `For more information, see our {cookie-policy-link}.`
    },
    dustLiquidationModal: {
      title: "Convert small balances",
      generalNotice: `Small balances can be converted once every 24h.{line-break}It is currently not possible to convert delisted assets.`
    },
    dustLiquidationTable: {
      convertToLabel: "Convert to:",
      valueHeader: "Value",
      noAssetsToConvert: `Small balances conversion allows you to exchange crypto assets valued below {threshold} into fiat currency. Currently, you don't have any assets eligible for {currency} conversion.`,
      selectedAssetsNotice: "You have selected {asset-count} asset(s) that can be converted to {assets-sum}",
      offerValidLabel: "Offer valid for {time}",
      refreshingStatus: "Refreshing",
      convertToButton: "Convert to {currency}",
      assetColumnHeader: "Asset",
      balanceColumnHeader: "Balance",
      convertErrorTitle: "Error",
      convertErrorBody: "{count} asset(s) could not be converted: {assetList}",
      convertSuccessTitle: "Success",
      convertSuccessBody: "Requested conversion of {count} asset(s) to {amount}.",
      generalErrorBody: "Something went wrong, please try again later.",
      convertTimeLimitError: "You can only convert small balances once every 24 hours."
    },
    header: {
      accountMenu: {
        noAssetsOnAccount: `You don't have any assets on this account.`,
        earnTitle: "Earn",
        switchAccountsTitle: "Switch accounts",
        transferBetweenAccountsAction: "Transfer between accounts",
        createNewSubAccountAction: "Create new sub account",
        manageSubAccountsAction: "Manage sub accounts"
      },
      downloadAppMenu: {
        downloadLabel: "Download the Bitstamp app"
      },
      preferredCurrencySelector: {
        currencyLabel: "Currency",
        preferredCurrencyLabel: "Set your preferred currency"
      },
      proDashboardSettingsMenu: {
        dashboardTitle: "Dashboard settings",
        resetButton: "Reset"
      },
      proSwitch: {
        basicModeLabel: "Basic",
        proModeLabel: "Pro"
      },
      settingsMenu: {
        globalSettingsTitle: "Global settings"
      },
      userMenu: {
        levelOneLabel: "Lv. 1",
        verifyMyIDButton: "Verify my ID",
        accountValueTitle: "Account value",
        myProfileTitle: "My profile",
        settingsLink: "Settings",
        myInformationLink: "My information",
        supportLink: "Support",
        historyLink: "History",
        referralLink: "Referral",
        dashboardLink: "Dashboard",
        logOutLink: "Log out"
      },
      publicActions: {
        logInButton: "Log in",
        getStarted: "Get started"
      }
    },
    mobileAppLinks: {
      appStoreDownloadAction: "Download on App Store",
      playStoreDownloadAction: "Get it on Google Play"
    },
    notifications: {
      liquidationAlert: {
        affectedDateAndAccount: "{date} on {account}.",
        viewButton: "View"
      },
      liquidationAlerts: {
        dismissAllButton: "Dismiss all",
        expandButton: "Expand ({count})",
        collapseButton: "Collapse",
        dismissErrorBody: "Failed to dismiss all alerts."
      }
    },
    promo: {
      learnAndEarn: {
        learnAndEarnTitle: "Learn & Earn",
        bannerText: "Ready to put your crypto knowledge to good use and earn rewards?",
        startButton: "Start now!"
      },
      tradeAndWinBanner: {
        endOfCampaignLabel: "End of campaign",
        showMeHowButton: "Show me how",
        endsOnLabel: "Ends on:",
        hereLink: "here",
        haveAQuestion: "Have a question? Read more {here-link}.",
        haveQuestions: "Have questions? Find more details {here-link}.",
        iAgreeToTerms: "I agree to {campaign} {terms-link}",
        joinNowButton: "Join now",
        termsOfUseLink: "Terms of Use"
      }
    },
    tiers: {
      tierMoreInfoModal: {
        modalTitle: "Level 2 benefits",
        verifyIdentityDisclaimer: "To access Level 2, you will need to verify your identity and provide basic financial information.",
        verifyIDButton: "Verify my ID"
      },
      tierOneCryptoWithdrawalBlock: {
        moreInfoLink: "More Info.",
        provideProofOfIdentity: "Verify your ID for unlimited crypto withdrawals and additional features.",
        verifyIDButton: "Verify my ID"
      },
      tierOneFeatureBlock: {
        blockTitle: "To whitelist a crypto address, you’ll need to verify your ID",
        verifyIDDisclaimer: "Verify your ID for unlimited crypto withdrawals and additional features.",
        moreInfoLink: "More Info.",
        verifyIDButton: "Verify my ID"
      }
    },
    scaForm: {
      failCountWarning: "Failing to authenticate repeatedly will lead to your account being blocked.",
      blockedWarning: "Your account may have been blocked due to multiple failed attempts. Please check your email.",
      authorizedTitle: "Authorized",
      securityPrecaution: "As a security precaution, we would like to ask you to enter your {challenge} again before accessing this page.",
      confirmButton: "Confirm",
      contactSupportLink: "contact support",
      visitLink: "Visit {bts-link} or {support-link}",
      or: "or",
      gotoDashboard: "go to your dashboard instead",
      passwordLabel: "Password",
      twoFactorCodeLabel: "Enter the 6-digit authentication code from your app",
      loggedOutError: "You have been logged out",
      invalidCredentialsError: "Invalid credentials."
    },
    subAccountTransferForm: {
      transferButton: "Transfer",
      swapFromToTooltip: "Swap To and From accounts",
      transferableLabel: "Transferable:",
      balanceLabel: "Balance:",
      aboutToTransferLabel: "You are about to transfer",
      fromLabel: "from",
      toLabel: "to",
      fromFormLabel: "From",
      toFormLabel: "To",
      noMatchingAccountError: "No matching account",
      assetFormLabel: "Asset",
      amountFormLabel: "Amount",
      transferCompleteNotificationTitle: "Transfer complete",
      transferCompleteNotificationBody: "Transferred {value} {currency} from {fromYour} {fromAccount} to {toYour} {toAccount}",
      invalidNumberError: "Input a valid number.",
      negativeNumberError: "Input a positive number.",
      sameAccountError: "You must transfer between different accounts.",
      accountAvailableAmountError: "{account} only has {value} {currency} available for transfer.",
      noFoundsAvailableError: "{account} has no {currency} available for transfer.",
      yourLabel: "your",
      noTransferableAssetsAvailable: "No transferable assets available."
    },
    themeSwitch: {
      toggleDarkTitle: "Toggle dark theme",
      themeLabel: "Dark theme"
    },
    dialog: {
      okButton: "Ok",
      cancelButton: "Cancel"
    },
    binaryChoice: {
      trueLabel: "Yes",
      falseLabel: "No"
    },
    multiSelectInput: {
      searchLabel: "Search"
    },
    walletSelector: {
      selectWalletLabel: "Select Wallet"
    },
    maintenanceComponent: {
      maintenanceErrorTitle: "Our verification system is currently under scheduled maintenance",
      maintenanceErrorBody: "Please try again later.",
      maintenanceErrorBackButton: "Back"
    },
    formBuilder: {
      generalError: "An error occurred. Please try again later.",
      invalidURLError: "Invalid submit URL"
    },
    currencySelector: {
      selectCryptocurrencyLabel: "Select cryptocurrency",
      noResultsText: 'No results for "{search}".'
    },
    publicSupportForm: {
      contactUsButton: "Contact us",
      titleText: "Fill out your contact info and we’ll be in touch",
      submitButton: "Submit",
      submitPrivacyPolicyTextStart: "By submitting this form I confirm that I have read, understood and agreed to Bitstamp's",
      submitPrivacyPolicyTextLink: "Privacy Policy",
      submitPrivacyPolicyTextEnd: "and I agree that Bitstamp can store and process my personal data.",
      helpLinkSingleMoreInfo: "For more information on this topic, please visit",
      helpLinksMultipleMoreInfo: "For more information on this topic, please visit the following articles:",
      helpLinksSendMessage: "If you are unable to find the answer you're looking for, send us a message and we'll be happy to assist you\n further.",
      formSubmitSuccessTitle: "Thank you!",
      formSubmitSuccessText: "Thank you for contacting us! Our team will review it and respond to your stated email as quickly as\n possible. Please keep an eye on your email inbox for our reply.",
      formSubmitFailedTitle: "Something went wrong!",
      formSubmitFailedText: "We're sorry, but it looks like something went wrong, and your message was not sent successfully. Please try\n submitting your message again.",
      thankYouExclamation: "Thank you!",
      thankYou: "Thank you",
      bitstampTeam: "Bitstamp team",
      tryAgain: "Try again",
      global: "Global:",
      customerSupportLiveAssist: "Our customer support team is available to assist you live:",
      customerSupportLiveAssistHours: "Mon - Sat: 6 AM to 10 PM (CET)",
      formSelectCategory: "Select Category",
      formSelectSubcategory: "Select Subcategory",
      formEnterName: "Enter your name",
      formEnterEmail: "Enter your email",
      formMessage: "Message"
    },
    simpleApp: {
      frequency: "Frequency",
      atAPrice: "At a price",
      findOutMore: "Find out more in our",
      termsOfUse: "Terms of Use",
      cancel: "Cancel",
      warningText: "Warning",
      addNewPaymentMethod: "Add new payment method",
      recurringTerms: `I authorize Bitstamp to initiate and execute this transaction, as well as all recurring transactions, in accordance with the preferences I specified during the setup of the recurring {type} transaction.`,
      recurringPriceDisclaimer: "The current quoted price is valid for this first transaction only. Your future transaction(s) will be subject to the market price at the time of their execution. If we are unable to collect the necessary funds for your transaction, it will not be processed.",
      offerExpiresIn: "Offer expires in",
      transactionDisclaimer: "This transaction is subject to a variable spread in the price. Bitstamp reserves the right to suspend the quote in the event of significant market volatility or similar impactful circumstances. If the quote is suspended, Bitstamp will provide a new quote.",
      recurringTransactionDisclaimer: 'Your first transaction will be executed promptly upon clicking "Confirm recurring {type}" below. Your next transaction(s) will be scheduled based on the preferences you specified during the setup of the recurring {type} transaction.',
      preview: "Preview",
      buyMore: "Buy more",
      sellMore: "Sell more crypto",
      convertMore: "Convert more",
      max: "Max",
      fee: "Fee",
      paymentMethod: "Payment method",
      learnMore: "Learn more",
      tomorrow: "Tomorrow",
      earn: "Earn",
      readyToEarnMore: "Ready to Earn more?",
      growEarnDisclaimer: "Grow your {currency} by earning",
      annuallyThrough: "annually through {action}",
      reversalDisclaimer: "This transaction cannot be reversed. By continuing, you agree that you have reviewed and acknowledged this disclosure",
      bitstampAgree: "I agree to Bitstamp's",
      authorizeCompany: "and authorize the company to debit my bank account for the entered amount on a one-time (irrevocable) transaction basis and, if necessary, to make adjustments for any debits made to my bank account in error",
      details: "Details",
      name: "Name",
      dateAndTime: "Date and time",
      day: "day",
      days: "days",
      reservationText: "For security reasons purchased assets will be locked for {days}",
      reservationTextEnd: "before you can withdraw them",
      selectPmTitle: "Please select payment method",
      addNewPm: "Add new payment method",
      pmRecurringNotAvailable: "*{pmTitle} is currently not available for recurring buy/sell",
      disposableDisclaimer: "We recommend avoiding Single Use/Disposable cards for crypto purchases.",
      continue: "Continue",
      linkPayPalTitle: "Link your PayPal account",
      linkPayPalDescription: "You can link your PayPal account by logging into PayPal and selecting the payment method you would like to use for Bistamp payments.",
      privacyPolicy: "Privacy Policy",
      paypalDisclaimer: 'By linking your <a href="{websiteUrl}" target="_blank" >PayPal</a> account, you will enable processing of payments by PayPal. You agree that PayPal may receive and process your personal data in accordance with their <a href="{privacyPolicyUrl}" target="_blank">Privacy policy</a>.',
      vaspRisk: `Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. <a href="{riskWarningLink}" target="_blank">Take 2 mins to learn more.</a>`,
      vaspDisclaimer: `This screen displays a financial promotion which has been approved by Bitstamp UK Limited which is registered with the FCA. Please read the <a href="{riskDisclaimer}" target="_blank">Risk Warning Statement</a> before investing. Cryptoassets and cryptoasset services are not regulated by the FCA. You are unlikely to be protected if something goes wrong. Your investment may go down as well as up. You may be liable to pay Capital Gains Tax on any profits you earn.`,
      returnLabel: "Return",
      firstRecurring: "First recurring {type}",
      nextRecurring: "Next recurring {type}",
      today: "Today",
      confirmSelection: "Confirm selection",
      recurringLabel: "Recurring {type}",
      noResults: 'No results for "{query}".',
      noResultsFound: "No results found.",
      paymentProcessor: 'Your payment will be processed by <a href="{websiteUrl}" target="_blank" >{processorName}</a>. You agree that {processorName} may receive and process your personal data in accordance with their <a href="{privacyPolicyUrl}" target="_blank">Privacy Policy.</a>',
      updateInfo: "Update info",
      tryAgain: "Try again",
      addNewCard: "Add new card",
      updateCard: "Update card",
      buyCrypto: "Buy crypto",
      temporaryAuthorizationDisclaimer: "A temporary authorization hold for a minor amount will appear in your account. This is a test transaction and is normally voided immediately, however the exact time required for the removal of authorization may vary depending on the financial institution.",
      disposableDisclaimerDescription: "We recommend avoiding Single Use/Disposable cards for crypto purchases. These cards are designed for a one-time transaction, which the linking process will use up, making them unsuitable for this purpose",
      daiDisclaimer: "DAI uses cryptocurrency collateral to maintain its peg to the US dollar. Any failure in the collateralization mechanism or the custodian holding the assets could adversely affect the value of DAI.",
      stakingDisclaimer: 'Bitstamp stakes your {currency} automatically upon purchase. Opt-out anytime. More on Earn staking <a href="{stakingFaqUrl}" target="_blank">here</a>.',
      tryAgainLater: "Please try again later.",
      recurring: {
        oneTime: "One time",
        daily: "Every day",
        weekly: "Every week",
        beWeekly: "Every two weeks",
        monthly: "Every month",
        oneTimeAmount: "One time - {amount}",
        dailyAmount: "Every day - {amount}",
        weeklyAmount: "Every week - {amount}",
        beWeeklyAmount: "Every two weeks - {amount}",
        monthlyAmount: "Every month - {amount}",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        dayPrefix: "on",
        monthPrefix: "on the"
      },
      error: {
        title: "Oops, something went wrong!",
        purchaseDescription: `Sorry, we can't process your request at the moment`,
        cardPurchaseTitle: "Card transaction failed",
        tradeTitle: "Purchase currently unavailable!",
        cardFeatureTitle: "Card purchase is unavailable!",
        paypalFeatureTitle: "PayPal purchase is unavailable!",
        achFeatureTitle: "ACH purchase is unavailable!",
        tradingUnavailableTitle: "Trading is unavailable!",
        sellTradeTitle: "Crypto selling currently unavailable",
        convertTradeTitle: "Convert currently unavailable",
        emptyFromCurrencyDescription: "No currencies available for conversion.",
        noCurrenciesAvailable: "No currencies available for conversion.",
        linkNuveiFailedTitle: "Linking credit card failed",
        paypalPurchaseTitle: "PayPal transaction failed",
        achPurchaseTitle: "ACH transfer failed!",
        achReauthTitle: "Re-authentication failed!",
        achReauthSolution: "Please try again or select a different payment method.",
        relinkDescription: "Card updating failed.",
        relinkSolution: "Give it another try.",
        pairsError: "You cannot {type} {cryptoCurrency} {typeStr} {fiatCurrency}. Please select a different pair.",
        insufficientFunds: "Insufficient funds. ",
        linkYourCard: "Link your debit/credit card ",
        depositOr: "or ",
        makeADeposit: "make a deposit.",
        buyUnavailable: "Purchase is unavailable. Please contact our ",
        sellUnavailable: "Sell is unavailable. Please contact our ",
        convertUnavailable: "Convert is unavailable. Please contact our ",
        support: "support!",
        insufficientFundsExtended: "Insufficient funds. Please enter available amount.",
        minimumBuyValue: "Minimum purchase value is {minOrderAmount} {currency}.",
        minimumSellValue: "Minimum sell value is {minOrderAmount} {currency}.",
        minimumConvertValue: "Minimum convert value is {minOrderAmount} {currency}.",
        maximumBuyValue: "Maximum purchase value is {maxOrderAmount} {currency}.",
        maximumSellValue: "Maximum sell value is {maxOrderAmount} {currency}.",
        maximumConvertValue: "Maximum convert value is {maxOrderAmount} {currency}.",
        paymentRequestsCardExceeded: "Number of daily card transactions exceeded.",
        paymentRequestsPayPalExceeded: "Number of daily PayPal transactions exceeded.",
        paymentRequestsBankExceeded: "Number of daily bank account transactions exceeded.",
        dailyLimitReached: "Exceeded daily limit. Available {limit}{fiatSymbol}",
        monthlyLimitReached: "Exceeded monthly limit. Available {limit}{fiatSymbol}",
        tfaNeedTo: "You need to ",
        tfaEnable: "enable 2FA ",
        tfabuy: "to buy crypto",
        tfasell: "to sell crypto",
        tfaconvert: "to convert crypto",
        noCrypto: "No Crypto. You can ",
        noCryptoBuy: "Buy ",
        noCryptoFirst: "crypto first.",
        spendingLimit: "To increase your spending limit, please ",
        verifyId: "verify your ID.",
        differentPaymentMethod: "Please select a different payment method or contact our "
      },
      warning: {
        paypalLinkedTitle: "You can link only one PayPal account",
        paypalLinkedDescOne: `You've already linked your PayPal account.`,
        paypalLinkedDescTwo: `If you'd like to use another payment method with it, you can unlink your PayPal account`,
        paypalLinkedDescThree: " here",
        paypalLinkedDescFour: " and relink it after.",
        pendingVerificationTitle: `We're verifying your account`,
        pendingVerificationDescOne: `It shouldn't take more than a few moments. As soon as we're done, you'll be able to buy crypto.`,
        pendingVerificationDescTwo: "Feel free to browse the exchange while you wait.",
        userNotVerifiedTitle: "Continue setting up your account",
        userNotVerifiedBtn: "Verify account",
        userNotVerifiedDesc: "Your first trade is just around the corner. You need to verify your account first.",
        maxCardsTitle: "Maximum number of cards allowed",
        maxCardsDescOne: "You already have the maximum number of cards allowed on the portal. You can manage your cards",
        maxCardsDescTwo: " here.",
        maxBankAccTitle: "Maximum number of bank accounts allowed",
        maxBankAccDescOne: "You already have the maximum number of bank accounts allowed on the portal. You can manage your accounts",
        maxBankAccDescTwo: " here.",
        phoneVerificationTitle: "We need to verify your phone number first",
        phoneVerificationBtn: "Verify phone number",
        phoneVerificationDesc: "By clicking the button below, you will be redirected to our phone verification page.",
        reAuthTitle: "Re-authentication required",
        reAuthBtn: "Authenticate",
        reAuthDesc: "Before you can buy crypto instantly with ACH bank transfer, we need to ask you to perform new authentication.",
        relinkBtn: "Replace",
        relinkDescOne: "Looks like a new card.",
        relinkDescTwo: "Proceed with replacement?"
      },
      buy: {
        purchaseTitle: "Purchase",
        buyTitle: "Buy",
        text: "buy",
        confirmRecurring: "Confirm recurring buy",
        buyNow: "Buy now",
        buyWith: "Buy with",
        selectCrypto: "Select cryptocurrency",
        previewFromCurrencyLabel: "You are spending",
        previewToCurrencyLabel: "You are buying",
        successful: "Purchase successful!",
        confirmationFromCurrencyLabel: "You have purchased",
        confirmationToCurrencyLabel: "By spending",
        recurringNotAvailable: "Recurring buy is not available for selected payment method"
      },
      sell: {
        sellTitle: "Sell",
        text: "sell",
        confirm: "Confirm sell",
        confirmRecurring: "Confirm recurring sell",
        receivedCurrencyLabel: "For",
        confirmationFromCurrencyLabel: "You have sold",
        previewFromCurrencyLabel: "You are selling",
        successful: "Sell successful!",
        sellCryptoLabel: "Sell cryptocurrency"
      },
      convert: {
        convertTitle: "Convert",
        text: "Convert",
        from: "Convert from",
        to: "To",
        confirm: "Confirm convert",
        receivedCurrencyLabel: "To",
        confirmationFromCurrencyLabel: "You have converted",
        successful: "Convert successful!",
        previewFromCurrencyLabel: "You are converting",
        convertMore: "Convert more"
      }
    },
    recurringTradePanel: {
      buyTitle: "Recurring buy",
      sellTitle: "Recurring sell",
      buyText: "Schedule your buys daily, weekly, or monthly and automate your crypto routine.",
      sellText: "Schedule your sells daily, weekly, or monthly and automate your crypto routine.",
      buyCta: "Set up a recurring buy",
      sellCta: "Set up a recurring sell"
    }
  }
};
export {
  en as default
};
