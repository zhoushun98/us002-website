import { ao as axiosInstanceWithoutErrorHandling, U as URLService, a as axiosInstance, aj as _, bZ as CookieService, aV as EventBusConstants } from "./BEpVD-aq.js";
const api = {
  requestAction: {
    get(uuid) {
      return axiosInstanceWithoutErrorHandling.get(URLService.buildUrl("requestAction", { "request_uid": uuid })).then((response) => response.data.data);
    },
    getOrCreate(data, queryParams) {
      return axiosInstanceWithoutErrorHandling.post(URLService.buildUrl("requestActionGetOrCreate", {}, true, queryParams), { data }).then((response) => response.data.data);
    },
    patch(uuid, data) {
      return axiosInstanceWithoutErrorHandling.patch(URLService.buildUrl("requestAction", { "request_uid": uuid }), { data }).then((response) => response.data.data);
    },
    list() {
      return axiosInstanceWithoutErrorHandling.get(URLService.buildUrl("requestActionList")).then((response) => response.data.data);
    },
    create({ actionType, ...other }) {
      return axiosInstanceWithoutErrorHandling.post(URLService.buildUrl("requestActionList"), { data: { actionType, ...other } }).then((response) => response.data.data);
    },
    latest(actionType, queryParams = {}) {
      const url = URLService.buildUrl("requestAction", { "request_uid": "latest" }, true, queryParams);
      return axiosInstanceWithoutErrorHandling.get(url, { params: { actionType } }).then((response) => response.data.data);
    },
    /**
     * @param {string} uuid
     * @param {string} actionType
     * @return {Promise<{'redirect': string}>}
     */
    cancel(uuid) {
      return axiosInstanceWithoutErrorHandling.patch(URLService.buildUrl("cancelRequestAction", { "request_uid": uuid }), {}).then((response) => response.data.data);
    }
  },
  identification: {
    getToken(uuid) {
      return axiosInstanceWithoutErrorHandling.post(URLService.buildUrl("identificationToken", { uuid }), { data: {} }).then((response) => response.data.data);
    },
    getIdentificationList(userId, page) {
      const url = URLService.buildUrl("identificationOverview", { "user_id": userId });
      return axiosInstance.get(`${url}?page=${page}&perPage=5`).then((response) => response.data);
    },
    getIdentificationDetails(userId, uuid) {
      const url = URLService.buildUrl("identificationDetails", { "user_id": userId, "identification_uuid": uuid });
      return axiosInstance.get(url).then((response) => response.data.data);
    },
    getUserData(userId) {
      const url = URLService.buildUrl("identificationsUserPersonalData", { "user_id": userId });
      return axiosInstance.get(url).then((response) => response.data.data);
    },
    getActiveIdentification(userId, params) {
      const urlParams = new URLSearchParams(params);
      const url = URLService.buildUrl("identificationActiveIdentification", { "user_id": userId });
      return axiosInstance.get(`${url}?${urlParams.toString()}`).then((response) => response.data.data);
    },
    getExternalLivenessConfigOverride(userId) {
      const url = URLService.buildUrl("identificationExternalLivenessConfigOverride", { "user_id": userId });
      return axiosInstance.get(url).then((response) => response.data.data);
    },
    setExternalLivenessConfigOverride(userId, data) {
      const url = URLService.buildUrl("identificationExternalLivenessConfigOverrideCreate", { "user_id": userId });
      return axiosInstance.post(url, data);
    },
    create(userId) {
      const url = URLService.buildUrl("complianceIdentificationCreate", { "user_id": userId });
      return axiosInstance.post(url).then((response) => response.data);
    },
    requestScan(userId, uuid) {
      const url = URLService.buildUrl("identificationRequestScan", { "user_id": userId, "identification_uuid": uuid });
      return axiosInstance.post(url).then((response) => response.data);
    },
    latest(actionType) {
      const url = URLService.buildUrl("identificationLatest");
      return axiosInstanceWithoutErrorHandling.get(`${url}?processType=${actionType}`).then(({ data }) => data.data);
    },
    update(userId, identificationUuid, data = {}) {
      const url = URLService.buildUrl("identificationDetails", {
        "user_id": userId,
        "identification_uuid": identificationUuid
      });
      return axiosInstance.patch(url, { data });
    },
    cancel(userId, identificationUuid) {
      const url = URLService.buildUrl("identificationDetails", {
        "user_id": userId,
        "identification_uuid": identificationUuid
      });
      return axiosInstance.delete(url);
    },
    manualOverride(userId, uuid, data) {
      const url = URLService.buildUrl("identificationManualOverride", { "user_id": userId, "identification_uuid": uuid });
      return axiosInstance.post(url, data).then((response) => response.data);
    },
    apiUrl: {
      upload(userId, identificationUuid) {
        return URLService.buildUrl(
          "complianceIdentificationUploads",
          {
            "user_id": userId,
            "identification_uuid": identificationUuid
          },
          false
        );
      },
      delete(userId, identificationUuid) {
        return URLService.buildUrl(
          "complianceIdentificationUploadsDelete",
          {
            "user_id": userId,
            "identification_uuid": identificationUuid
          },
          false
        );
      },
      preview(userId, identificationUuid) {
        return URLService.buildUrl(
          "complianceFilesStream",
          {
            "user_id": userId,
            context: "identification",
            "identification_uuid": identificationUuid
          },
          false
        );
      }
    },
    pageUrl: {
      detailsPageUrl(userId, identificationUuid) {
        return URLService.getPageUrl("identificationDetails", {
          "user_id": userId,
          "identification_uuid": identificationUuid
        });
      },
      overviewPageUrl(userId) {
        return URLService.getPageUrl("identificationOverview", {
          "user_id": userId
        });
      }
    }
  },
  identificationDocuments: {
    submit(uuid, documents) {
      return axiosInstanceWithoutErrorHandling.patch(URLService.buildUrl("identificationDocuments", { uuid }), { data: { documents } }).then((response) => response.data.data);
    },
    scan(uuid) {
      return axiosInstanceWithoutErrorHandling.post(URLService.buildUrl("identificationDocumentsScan", { uuid }), "").then((response) => response.data.data);
    }
  },
  documentTypes: {
    list(country) {
      return axiosInstanceWithoutErrorHandling.get(URLService.buildUrl("documentTypes"), { params: { country } }).then((response) => response.data.data);
    }
  },
  kyc: {
    jiraRemovelink(userId) {
      const url = URLService.buildUrl("kycReviewUnlinkTicket", { "user_id": userId });
      return axiosInstance.post(url);
    },
    jiraCreateLink(userId, ticketUid) {
      const url = URLService.buildUrl("kycReviewLinkTicket", { "user_id": userId });
      return axiosInstance.post(url, { data: { ticketUid } });
    },
    getReview(userId) {
      const url = URLService.buildUrl("complianceKycReview", { "user_id": userId });
      return axiosInstance.get(url).then(({ data }) => data.data);
    },
    submitValidateUser(userId, sections, comment) {
      const data = { sections };
      if (comment == null ? void 0 : comment.length) {
        data.comment = comment;
      }
      const url = URLService.buildUrl("kycReviewValidateAndRequest", { "user_id": userId });
      return axiosInstance.post(url, { data });
    },
    getAddress(userId) {
      const url = URLService.buildUrl("kycAddress", { "user_id": userId });
      return axiosInstance.get(url).then(({ data }) => data);
    },
    updateAddress(userId, data) {
      const url = URLService.buildUrl("kycAddress", { "user_id": userId });
      return axiosInstance.patch(url, { address: data });
    },
    createChangelog(userId, { comment, entityClass, category, entityUuid }) {
      const url = URLService.buildUrl("complianceLogs", { "user_id": userId });
      return axiosInstance.post(url, { data: { comment, entityClass, category, userId, entityUuid } });
    },
    questionnaireHistory({ userId, perPage = 10 }) {
      return URLService.buildUrl("complianceKycQuestionnaireHistory", {}, true, { userId, perPage });
    },
    kycReviewOverview(userId) {
      return URLService.buildUrl("kycReviewOverview", { "user_id": userId }, true);
    },
    submitSection(userId, data) {
      return axiosInstance.post(URLService.buildUrl("submitKycSection", { "user_id": userId }), data);
    },
    getDepositThreshold(userId) {
      const url = URLService.buildUrl("kycDepositThreshold", { "user_id": userId });
      return axiosInstance.get(url).then(({ data }) => data);
    },
    updateDepositThreshold(userId, data) {
      const url = URLService.buildUrl("kycDepositThreshold", { "user_id": userId });
      return axiosInstance.patch(url, data);
    },
    getNationalitiesData(userId) {
      const url = URLService.buildUrl("kycNationalities", { "user_id": userId });
      return axiosInstance.get(url).then((response) => response.data.data);
    },
    modifyUserNationalities(userId, modifiedNationalities) {
      const url = URLService.buildUrl("kycNationalities", { "user_id": userId });
      return axiosInstance.patch(url, modifiedNationalities);
    }
  },
  downloads: {
    bulkDownload(userId, sectionType) {
      return URLService.getPageUrl("kycBulkDocument", { "user_id": userId, "section_type": sectionType });
    }
  },
  uploads: {
    listUrl() {
      return URLService.buildUrl("complianceUploads");
    },
    uploadDocument({ userId, sectionType, file, eventBus }) {
      const uploadEndpointUrl = URLService.buildUrl("complianceUploads");
      const fileSubmission = new FormData();
      fileSubmission.append("file", file);
      const toastID = _.random(1e3, 1e5);
      return axiosInstance.post(
        uploadEndpointUrl,
        { userId, sectionType },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRFToken": CookieService.get("csrftoken"),
            "X-Requested-With": "XMLHttpRequest"
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            eventBus.$emit(EventBusConstants.TOASTS.CREATE, {
              id: toastID,
              title: "Uploading",
              text: `Upload progress: ${progress}%`
            });
          }
        }
      ).finally(() => {
        eventBus.$emit(EventBusConstants.TOASTS.CLOSE, toastID);
      });
    }
  },
  countries: {
    listOnfidoCountries() {
      return axiosInstanceWithoutErrorHandling.get(URLService.buildUrl("onfidoCountries")).then(({ data }) => data.data);
    }
  }
};
export {
  api as a
};
