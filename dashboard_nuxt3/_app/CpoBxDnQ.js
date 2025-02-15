import { a as axiosInstance, U as URLService, I as constants } from "./BEpVD-aq.js";
const userPromptsApi = {
  /**
   * @param {string: 'notice' | 'liquidation_alert'} [type] - Note, this will be deprecated in favor of unified notifications
   * @return {Promise<UserPrompt[]>}
   */
  list(type = constants.NOTIFICATIONS._TYPE.NOTICE) {
    return axiosInstance.get(
      URLService.buildUrl(
        "promptListResource",
        { user_id: "own" },
        true,
        { type }
      )
    ).then((response) => response.data.data);
  },
  dismiss(externalId) {
    return axiosInstance.post(
      URLService.buildUrl(
        "promptDismissResource",
        { external_id: externalId, user_id: "own" }
      )
    ).then((response) => response.data.data);
  }
};
export {
  userPromptsApi as u
};
