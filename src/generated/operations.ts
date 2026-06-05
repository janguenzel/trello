// GENERATED — DO NOT EDIT BY HAND
// openapi.json sha256: 41872ac13249429d
// Source: openapi.json
// Run `pnpm codegen` to regenerate

import type { HttpMethod } from "../core/http.js";
import type * as T from "./types.js";

export interface OperationMeta {
  readonly method: HttpMethod;
  readonly path: string;
  readonly pathParams: readonly string[];
  readonly summary?: string;
  readonly deprecated?: true;
}

export const operations = {
  deleteActionsId: { method: "DELETE" as const, path: "/actions/{id}", pathParams: ["id"] as const, summary: "Delete an Action" },
  deleteActionsIdActionReactionsId: { method: "DELETE" as const, path: "/actions/{idAction}/reactions/{id}", pathParams: ["idAction", "id"] as const, summary: "Delete Action's Reaction" },
  deleteBoardsId: { method: "DELETE" as const, path: "/boards/{id}", pathParams: ["id"] as const, summary: "Delete a Board" },
  deleteBoardsIdBoardPluginsIdPlugin: { method: "DELETE" as const, path: "/boards/{id}/boardPlugins/{idPlugin}", pathParams: ["id", "idPlugin"] as const, summary: "Disable a Power-Up on a Board", deprecated: true as const },
  deleteBoardsIdMembersIdMember: { method: "DELETE" as const, path: "/boards/{id}/members/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Remove Member from Board" },
  deleteCardsId: { method: "DELETE" as const, path: "/cards/{id}", pathParams: ["id"] as const, summary: "Delete a Card" },
  deleteCardsIdActionsIdActionComments: { method: "DELETE" as const, path: "/cards/{id}/actions/{idAction}/comments", pathParams: ["id", "idAction"] as const, summary: "Delete a comment on a Card" },
  deleteCardsIdAttachmentsIdAttachment: { method: "DELETE" as const, path: "/cards/{id}/attachments/{idAttachment}", pathParams: ["id", "idAttachment"] as const, summary: "Delete an Attachment on a Card" },
  deleteCardsIdCheckItemIdCheckItem: { method: "DELETE" as const, path: "/cards/{id}/checkItem/{idCheckItem}", pathParams: ["id", "idCheckItem"] as const, summary: "Delete checkItem on a Card" },
  deleteCardsIdChecklistsIdChecklist: { method: "DELETE" as const, path: "/cards/{id}/checklists/{idChecklist}", pathParams: ["id", "idChecklist"] as const, summary: "Delete a Checklist on a Card" },
  deleteCardsIdIdLabelsIdLabel: { method: "DELETE" as const, path: "/cards/{id}/idLabels/{idLabel}", pathParams: ["id", "idLabel"] as const, summary: "Remove a Label from a Card" },
  deleteCardsIdIdMembersIdMember: { method: "DELETE" as const, path: "/cards/{id}/idMembers/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Remove a Member from a Card" },
  deleteCardsIdMembersVotedIdMember: { method: "DELETE" as const, path: "/cards/{id}/membersVoted/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Remove a Member's Vote on a Card" },
  deleteCardsIdStickersIdSticker: { method: "DELETE" as const, path: "/cards/{id}/stickers/{idSticker}", pathParams: ["id", "idSticker"] as const, summary: "Delete a Sticker on a Card" },
  deleteChecklistsId: { method: "DELETE" as const, path: "/checklists/{id}", pathParams: ["id"] as const, summary: "Delete a Checklist" },
  deleteChecklistsIdCheckItemsIdCheckItem: { method: "DELETE" as const, path: "/checklists/{id}/checkItems/{idCheckItem}", pathParams: ["id", "idCheckItem"] as const, summary: "Delete Checkitem from Checklist" },
  deleteCustomFieldsId: { method: "DELETE" as const, path: "/customFields/{id}", pathParams: ["id"] as const, summary: "Delete a Custom Field definition" },
  deleteCustomFieldsIdOptionsIdCustomFieldOption: { method: "DELETE" as const, path: "/customFields/{id}/options/{idCustomFieldOption}", pathParams: ["id", "idCustomFieldOption"] as const, summary: "Delete Option of Custom Field dropdown" },
  deleteEnterprisesIdAdminsIdMember: { method: "DELETE" as const, path: "/enterprises/{id}/admins/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Remove a Member as admin from Enterprise." },
  deleteEnterprisesIdOrganizationsIdOrg: { method: "DELETE" as const, path: "/enterprises/{id}/organizations/{idOrg}", pathParams: ["id", "idOrg"] as const, summary: "Delete an Organization from an Enterprise." },
  deleteLabelsId: { method: "DELETE" as const, path: "/labels/{id}", pathParams: ["id"] as const, summary: "Delete a Label" },
  deleteMembersIdBoardBackgroundsIdBackground: { method: "DELETE" as const, path: "/members/{id}/boardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Delete a Member's custom Board background" },
  deleteMembersIdBoardStarsIdStar: { method: "DELETE" as const, path: "/members/{id}/boardStars/{idStar}", pathParams: ["id", "idStar"] as const, summary: "Delete Star for Board" },
  deleteMembersIdCustomBoardBackgroundsIdBackground: { method: "DELETE" as const, path: "/members/{id}/customBoardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Delete custom Board Background of Member" },
  deleteMembersIdCustomStickersIdSticker: { method: "DELETE" as const, path: "/members/{id}/customStickers/{idSticker}", pathParams: ["id", "idSticker"] as const, summary: "Delete a Member's custom Sticker" },
  deleteMembersIdSavedSearchesIdSearch: { method: "DELETE" as const, path: "/members/{id}/savedSearches/{idSearch}", pathParams: ["id", "idSearch"] as const, summary: "Delete a saved search" },
  deleteOrganizationsId: { method: "DELETE" as const, path: "/organizations/{id}", pathParams: ["id"] as const, summary: "Delete an Organization" },
  deleteOrganizationsIdLogo: { method: "DELETE" as const, path: "/organizations/{id}/logo", pathParams: ["id"] as const, summary: "Delete Logo for Organization" },
  deleteOrganizationsIdMembersIdMember: { method: "DELETE" as const, path: "/organizations/{id}/members/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Remove a Member from an Organization" },
  deleteOrganizationsIdMembersIdMemberAll: { method: "DELETE" as const, path: "/organizations/{id}/members/{idMember}/all", pathParams: ["id", "idMember"] as const, summary: "Remove a Member from an Organization and all Organization Boards" },
  deleteOrganizationsIdPrefsAssociatedDomain: { method: "DELETE" as const, path: "/organizations/{id}/prefs/associatedDomain", pathParams: ["id"] as const, summary: "Remove the associated Google Apps domain from a Workspace" },
  deleteOrganizationsIdPrefsOrgInviteRestrict: { method: "DELETE" as const, path: "/organizations/{id}/prefs/orgInviteRestrict", pathParams: ["id"] as const, summary: "Delete the email domain restriction on who can be invited to the Workspace" },
  deleteOrganizationsIdTagsIdTag: { method: "DELETE" as const, path: "/organizations/{id}/tags/{idTag}", pathParams: ["id", "idTag"] as const, summary: "Delete an Organization's Tag" },
  deleteTokensToken: { method: "DELETE" as const, path: "/tokens/{token}/", pathParams: ["token"] as const, summary: "Delete a Token" },
  deleteTokensTokenWebhooksIdWebhook: { method: "DELETE" as const, path: "/tokens/{token}/webhooks/{idWebhook}", pathParams: ["token", "idWebhook"] as const, summary: "Delete a Webhook created by Token" },
  deleteWebhooksId: { method: "DELETE" as const, path: "/webhooks/{id}", pathParams: ["id"] as const, summary: "Delete a Webhook" },
  getActionsId: { method: "GET" as const, path: "/actions/{id}", pathParams: ["id"] as const, summary: "Get an Action" },
  getActionsIdActionReactions: { method: "GET" as const, path: "/actions/{idAction}/reactions", pathParams: ["idAction"] as const, summary: "Get Action's Reactions" },
  getActionsIdActionReactionsId: { method: "GET" as const, path: "/actions/{idAction}/reactions/{id}", pathParams: ["idAction", "id"] as const, summary: "Get Action's Reaction" },
  getActionsIdActionReactionsSummary: { method: "GET" as const, path: "/actions/{idAction}/reactionsSummary", pathParams: ["idAction"] as const, summary: "List Action's summary of Reactions" },
  getActionsIdBoard: { method: "GET" as const, path: "/actions/{id}/board", pathParams: ["id"] as const, summary: "Get the Board for an Action" },
  getActionsIdCard: { method: "GET" as const, path: "/actions/{id}/card", pathParams: ["id"] as const, summary: "Get the Card for an Action" },
  getActionsIdField: { method: "GET" as const, path: "/actions/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a specific field on an Action" },
  getActionsIdList: { method: "GET" as const, path: "/actions/{id}/list", pathParams: ["id"] as const, summary: "Get the List for an Action" },
  getActionsIdMember: { method: "GET" as const, path: "/actions/{id}/member", pathParams: ["id"] as const, summary: "Get the Member of an Action" },
  getActionsIdMemberCreator: { method: "GET" as const, path: "/actions/{id}/memberCreator", pathParams: ["id"] as const, summary: "Get the Member Creator of an Action" },
  getActionsIdOrganization: { method: "GET" as const, path: "/actions/{id}/organization", pathParams: ["id"] as const, summary: "Get the Organization of an Action" },
  getApplicationsKeyCompliance: { method: "GET" as const, path: "/applications/{key}/compliance", pathParams: ["key"] as const, summary: "Get Application's compliance data" },
  getBatch: { method: "GET" as const, path: "/batch", pathParams: [] as const, summary: "Batch Requests" },
  getBoardsBoardIdActions: { method: "GET" as const, path: "/boards/{boardId}/actions", pathParams: ["boardId"] as const, summary: "Get Actions of a Board" },
  getBoardsBoardIdBoardStars: { method: "GET" as const, path: "/boards/{boardId}/boardStars", pathParams: ["boardId"] as const, summary: "Get boardStars on a Board" },
  getBoardsId: { method: "GET" as const, path: "/boards/{id}", pathParams: ["id"] as const, summary: "Get a Board" },
  getBoardsIdBoardPlugins: { method: "GET" as const, path: "/boards/{id}/boardPlugins", pathParams: ["id"] as const, summary: "Get Enabled Power-Ups on Board" },
  getBoardsIdCards: { method: "GET" as const, path: "/boards/{id}/cards", pathParams: ["id"] as const, summary: "Get Cards on a Board" },
  getBoardsIdCardsFilter: { method: "GET" as const, path: "/boards/{id}/cards/{filter}", pathParams: ["id", "filter"] as const, summary: "Get filtered Cards on a Board" },
  getBoardsIdChecklists: { method: "GET" as const, path: "/boards/{id}/checklists", pathParams: ["id"] as const, summary: "Get Checklists on a Board" },
  getBoardsIdCustomFields: { method: "GET" as const, path: "/boards/{id}/customFields", pathParams: ["id"] as const, summary: "Get Custom Fields for Board" },
  getBoardsIdField: { method: "GET" as const, path: "/boards/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a field on a Board" },
  getBoardsIdLabels: { method: "GET" as const, path: "/boards/{id}/labels", pathParams: ["id"] as const, summary: "Get Labels on a Board" },
  getBoardsIdLists: { method: "GET" as const, path: "/boards/{id}/lists", pathParams: ["id"] as const, summary: "Get Lists on a Board" },
  getBoardsIdListsFilter: { method: "GET" as const, path: "/boards/{id}/lists/{filter}", pathParams: ["id", "filter"] as const, summary: "Get filtered Lists on a Board" },
  getBoardsIdMembers: { method: "GET" as const, path: "/boards/{id}/members", pathParams: ["id"] as const, summary: "Get the Members of a Board" },
  getBoardsIdMemberships: { method: "GET" as const, path: "/boards/{id}/memberships", pathParams: ["id"] as const, summary: "Get Memberships of a Board" },
  getBoardsIdPlugins: { method: "GET" as const, path: "/boards/{id}/plugins", pathParams: ["id"] as const, summary: "Get Power-Ups on a Board" },
  getCardsId: { method: "GET" as const, path: "/cards/{id}", pathParams: ["id"] as const, summary: "Get a Card" },
  getCardsIdActions: { method: "GET" as const, path: "/cards/{id}/actions", pathParams: ["id"] as const, summary: "Get Actions on a Card" },
  getCardsIdAttachments: { method: "GET" as const, path: "/cards/{id}/attachments", pathParams: ["id"] as const, summary: "Get Attachments on a Card" },
  getCardsIdAttachmentsIdAttachment: { method: "GET" as const, path: "/cards/{id}/attachments/{idAttachment}", pathParams: ["id", "idAttachment"] as const, summary: "Get an Attachment on a Card" },
  getCardsIdBoard: { method: "GET" as const, path: "/cards/{id}/board", pathParams: ["id"] as const, summary: "Get the Board the Card is on" },
  getCardsIdCheckItemIdCheckItem: { method: "GET" as const, path: "/cards/{id}/checkItem/{idCheckItem}", pathParams: ["id", "idCheckItem"] as const, summary: "Get checkItem on a Card" },
  getCardsIdCheckItemStates: { method: "GET" as const, path: "/cards/{id}/checkItemStates", pathParams: ["id"] as const, summary: "Get checkItems on a Card" },
  getCardsIdChecklists: { method: "GET" as const, path: "/cards/{id}/checklists", pathParams: ["id"] as const, summary: "Get Checklists on a Card" },
  getCardsIdCustomFieldItems: { method: "GET" as const, path: "/cards/{id}/customFieldItems", pathParams: ["id"] as const, summary: "Get Custom Field Items for a Card" },
  getCardsIdField: { method: "GET" as const, path: "/cards/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a field on a Card" },
  getCardsIdList: { method: "GET" as const, path: "/cards/{id}/list", pathParams: ["id"] as const, summary: "Get the List of a Card" },
  getCardsIdMembers: { method: "GET" as const, path: "/cards/{id}/members", pathParams: ["id"] as const, summary: "Get the Members of a Card" },
  getCardsIdMembersVoted: { method: "GET" as const, path: "/cards/{id}/membersVoted", pathParams: ["id"] as const, summary: "Get Members who have voted on a Card" },
  getCardsIdPluginData: { method: "GET" as const, path: "/cards/{id}/pluginData", pathParams: ["id"] as const, summary: "Get pluginData on a Card" },
  getCardsIdStickers: { method: "GET" as const, path: "/cards/{id}/stickers", pathParams: ["id"] as const, summary: "Get Stickers on a Card" },
  getCardsIdStickersIdSticker: { method: "GET" as const, path: "/cards/{id}/stickers/{idSticker}", pathParams: ["id", "idSticker"] as const, summary: "Get a Sticker on a Card" },
  getChecklistsId: { method: "GET" as const, path: "/checklists/{id}", pathParams: ["id"] as const, summary: "Get a Checklist" },
  getChecklistsIdBoard: { method: "GET" as const, path: "/checklists/{id}/board", pathParams: ["id"] as const, summary: "Get the Board the Checklist is on" },
  getChecklistsIdCards: { method: "GET" as const, path: "/checklists/{id}/cards", pathParams: ["id"] as const, summary: "Get the Card a Checklist is on" },
  getChecklistsIdCheckItems: { method: "GET" as const, path: "/checklists/{id}/checkItems", pathParams: ["id"] as const, summary: "Get Checkitems on a Checklist" },
  getChecklistsIdCheckItemsIdCheckItem: { method: "GET" as const, path: "/checklists/{id}/checkItems/{idCheckItem}", pathParams: ["id", "idCheckItem"] as const, summary: "Get a Checkitem on a Checklist" },
  getChecklistsIdField: { method: "GET" as const, path: "/checklists/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get field on a Checklist" },
  getCustomFieldsId: { method: "GET" as const, path: "/customFields/{id}", pathParams: ["id"] as const, summary: "Get a Custom Field" },
  getCustomFieldsIdOptions: { method: "GET" as const, path: "/customFields/{id}/options", pathParams: ["id"] as const, summary: "Get Options of Custom Field drop down" },
  getCustomFieldsIdOptionsIdCustomFieldOption: { method: "GET" as const, path: "/customFields/{id}/options/{idCustomFieldOption}", pathParams: ["id", "idCustomFieldOption"] as const, summary: "Get Option of Custom Field dropdown" },
  getEmoji: { method: "GET" as const, path: "/emoji", pathParams: [] as const, summary: "List available Emoji" },
  getEnterprisesId: { method: "GET" as const, path: "/enterprises/{id}", pathParams: ["id"] as const, summary: "Get an Enterprise" },
  getEnterprisesIdAdmins: { method: "GET" as const, path: "/enterprises/{id}/admins", pathParams: ["id"] as const, summary: "Get Enterprise admin Members" },
  getEnterprisesIdAuditlog: { method: "GET" as const, path: "/enterprises/{id}/auditlog", pathParams: ["id"] as const, summary: "Get auditlog data for an Enterprise" },
  getEnterprisesIdClaimableOrganizations: { method: "GET" as const, path: "/enterprises/{id}/claimableOrganizations", pathParams: ["id"] as const, summary: "Get ClaimableOrganizations of an Enterprise" },
  getEnterprisesIdMembers: { method: "GET" as const, path: "/enterprises/{id}/members", pathParams: ["id"] as const, summary: "Get Members of Enterprise" },
  getEnterprisesIdMembersIdMember: { method: "GET" as const, path: "/enterprises/{id}/members/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Get a Member of Enterprise" },
  getEnterprisesIdMembersQuery: { method: "GET" as const, path: "/enterprises/{id}/members/query", pathParams: ["id"] as const, summary: "Get Users of an Enterprise" },
  getEnterprisesIdOrganizations: { method: "GET" as const, path: "/enterprises/{id}/organizations", pathParams: ["id"] as const, summary: "Get Organizations of an Enterprise" },
  getEnterprisesIdOrganizationsBulkIdOrganizations: { method: "GET" as const, path: "/enterprises/{id}/organizations/bulk/{idOrganizations}", pathParams: ["id", "idOrganizations"] as const, summary: "Bulk accept a set of organizations to an Enterprise." },
  getEnterprisesIdPendingOrganizations: { method: "GET" as const, path: "/enterprises/{id}/pendingOrganizations", pathParams: ["id"] as const, summary: "Get PendingOrganizations of an Enterprise" },
  getEnterprisesIdSignupUrl: { method: "GET" as const, path: "/enterprises/{id}/signupUrl", pathParams: ["id"] as const, summary: "Get signupUrl for Enterprise" },
  getEnterprisesIdTransferrableBulkIdOrganizations: { method: "GET" as const, path: "/enterprises/{id}/transferrable/bulk/{idOrganizations}", pathParams: ["id", "idOrganizations"] as const, summary: "Get a bulk list of organizations that can be transferred to an enterprise." },
  getEnterprisesIdTransferrableOrganizationIdOrganization: { method: "GET" as const, path: "/enterprises/{id}/transferrable/organization/{idOrganization}", pathParams: ["id", "idOrganization"] as const, summary: "Get whether an organization can be transferred to an enterprise." },
  getLabelsId: { method: "GET" as const, path: "/labels/{id}", pathParams: ["id"] as const, summary: "Get a Label" },
  getListsId: { method: "GET" as const, path: "/lists/{id}", pathParams: ["id"] as const, summary: "Get a List" },
  getListsIdActions: { method: "GET" as const, path: "/lists/{id}/actions", pathParams: ["id"] as const, summary: "Get Actions for a List" },
  getListsIdBoard: { method: "GET" as const, path: "/lists/{id}/board", pathParams: ["id"] as const, summary: "Get the Board a List is on" },
  getListsIdCards: { method: "GET" as const, path: "/lists/{id}/cards", pathParams: ["id"] as const, summary: "Get Cards in a List" },
  getMembersId: { method: "GET" as const, path: "/members/{id}", pathParams: ["id"] as const, summary: "Get a Member" },
  getMembersIdActions: { method: "GET" as const, path: "/members/{id}/actions", pathParams: ["id"] as const, summary: "Get a Member's Actions" },
  getMembersIdBoardBackgrounds: { method: "GET" as const, path: "/members/{id}/boardBackgrounds", pathParams: ["id"] as const, summary: "Get Member's custom Board backgrounds" },
  getMembersIdBoardBackgroundsIdBackground: { method: "GET" as const, path: "/members/{id}/boardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Get a boardBackground of a Member" },
  getMembersIdBoards: { method: "GET" as const, path: "/members/{id}/boards", pathParams: ["id"] as const, summary: "Get Boards that Member belongs to" },
  getMembersIdBoardsInvited: { method: "GET" as const, path: "/members/{id}/boardsInvited", pathParams: ["id"] as const, summary: "Get Boards the Member has been invited to" },
  getMembersIdBoardStars: { method: "GET" as const, path: "/members/{id}/boardStars", pathParams: ["id"] as const, summary: "Get a Member's boardStars" },
  getMembersIdBoardStarsIdStar: { method: "GET" as const, path: "/members/{id}/boardStars/{idStar}", pathParams: ["id", "idStar"] as const, summary: "Get a boardStar of Member" },
  getMembersIdCards: { method: "GET" as const, path: "/members/{id}/cards", pathParams: ["id"] as const, summary: "Get Cards the Member is on" },
  getMembersIdCustomBoardBackgrounds: { method: "GET" as const, path: "/members/{id}/customBoardBackgrounds", pathParams: ["id"] as const, summary: "Get a Member's custom Board Backgrounds" },
  getMembersIdCustomBoardBackgroundsIdBackground: { method: "GET" as const, path: "/members/{id}/customBoardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Get custom Board Background of Member" },
  getMembersIdCustomEmoji: { method: "GET" as const, path: "/members/{id}/customEmoji", pathParams: ["id"] as const, summary: "Get a Member's customEmojis" },
  getMembersIdCustomEmojiIdEmoji: { method: "GET" as const, path: "/members/{id}/customEmoji/{idEmoji}", pathParams: ["id", "idEmoji"] as const, summary: "Get a Member's custom Emoji" },
  getMembersIdCustomStickers: { method: "GET" as const, path: "/members/{id}/customStickers", pathParams: ["id"] as const, summary: "Get Member's custom Stickers" },
  getMembersIdCustomStickersIdSticker: { method: "GET" as const, path: "/members/{id}/customStickers/{idSticker}", pathParams: ["id", "idSticker"] as const, summary: "Get a Member's custom Sticker" },
  getMembersIdField: { method: "GET" as const, path: "/members/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a field on a Member" },
  getMembersIdNotifications: { method: "GET" as const, path: "/members/{id}/notifications", pathParams: ["id"] as const, summary: "Get Member's Notifications" },
  getMembersIdNotificationsChannelSettings: { method: "GET" as const, path: "/members/{id}/notificationsChannelSettings", pathParams: ["id"] as const, summary: "Get a Member's notification channel settings" },
  getMembersIdNotificationsChannelSettingsChannel: { method: "GET" as const, path: "/members/{id}/notificationsChannelSettings/{channel}", pathParams: ["id", "channel"] as const, summary: "Get blocked notification keys of Member on this channel" },
  getMembersIdOrganizations: { method: "GET" as const, path: "/members/{id}/organizations", pathParams: ["id"] as const, summary: "Get Member's Organizations" },
  getMembersIdOrganizationsInvited: { method: "GET" as const, path: "/members/{id}/organizationsInvited", pathParams: ["id"] as const, summary: "Get Organizations a Member has been invited to" },
  getMembersIdSavedSearches: { method: "GET" as const, path: "/members/{id}/savedSearches", pathParams: ["id"] as const, summary: "Get Member's saved searched" },
  getMembersIdSavedSearchesIdSearch: { method: "GET" as const, path: "/members/{id}/savedSearches/{idSearch}", pathParams: ["id", "idSearch"] as const, summary: "Get a saved search" },
  getMembersIdTokens: { method: "GET" as const, path: "/members/{id}/tokens", pathParams: ["id"] as const, summary: "Get Member's Tokens" },
  getNotificationsId: { method: "GET" as const, path: "/notifications/{id}", pathParams: ["id"] as const, summary: "Get a Notification" },
  getNotificationsIdBoard: { method: "GET" as const, path: "/notifications/{id}/board", pathParams: ["id"] as const, summary: "Get the Board a Notification is on" },
  getNotificationsIdCard: { method: "GET" as const, path: "/notifications/{id}/card", pathParams: ["id"] as const, summary: "Get the Card a Notification is on" },
  getNotificationsIdField: { method: "GET" as const, path: "/notifications/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a field of a Notification" },
  getNotificationsIdList: { method: "GET" as const, path: "/notifications/{id}/list", pathParams: ["id"] as const, summary: "Get the List a Notification is on" },
  getNotificationsIdMember: { method: "GET" as const, path: "/notifications/{id}/member", pathParams: ["id"] as const, summary: "Get the Member a Notification is about (not the creator)" },
  getNotificationsIdMemberCreator: { method: "GET" as const, path: "/notifications/{id}/memberCreator", pathParams: ["id"] as const, summary: "Get the Member who created the Notification" },
  getNotificationsIdOrganization: { method: "GET" as const, path: "/notifications/{id}/organization", pathParams: ["id"] as const, summary: "Get a Notification's associated Organization" },
  getOrganizationsId: { method: "GET" as const, path: "/organizations/{id}", pathParams: ["id"] as const, summary: "Get an Organization" },
  getOrganizationsIdActions: { method: "GET" as const, path: "/organizations/{id}/actions", pathParams: ["id"] as const, summary: "Get Actions for Organization" },
  getOrganizationsIdBoards: { method: "GET" as const, path: "/organizations/{id}/boards", pathParams: ["id"] as const, summary: "Get Boards in an Organization" },
  getOrganizationsIdExports: { method: "GET" as const, path: "/organizations/{id}/exports", pathParams: ["id"] as const, summary: "Retrieve Organization's Exports" },
  getOrganizationsIdField: { method: "GET" as const, path: "/organizations/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get field on Organization" },
  getOrganizationsIdMembers: { method: "GET" as const, path: "/organizations/{id}/members", pathParams: ["id"] as const, summary: "Get the Members of an Organization" },
  getOrganizationsIdMemberships: { method: "GET" as const, path: "/organizations/{id}/memberships", pathParams: ["id"] as const, summary: "Get Memberships of an Organization" },
  getOrganizationsIdMembershipsIdMembership: { method: "GET" as const, path: "/organizations/{id}/memberships/{idMembership}", pathParams: ["id", "idMembership"] as const, summary: "Get a Membership of an Organization" },
  getOrganizationsIdNewBillableGuestsIdBoard: { method: "GET" as const, path: "/organizations/{id}/newBillableGuests/{idBoard}", pathParams: ["id", "idBoard"] as const, summary: "Get Organizations new billable guests" },
  getOrganizationsIdPluginData: { method: "GET" as const, path: "/organizations/{id}/pluginData", pathParams: ["id"] as const, summary: "Get the pluginData Scoped to Organization" },
  getOrganizationsIdTags: { method: "GET" as const, path: "/organizations/{id}/tags", pathParams: ["id"] as const, summary: "Get Tags of an Organization" },
  getPluginsId: { method: "GET" as const, path: "/plugins/{id}/", pathParams: ["id"] as const, summary: "Get a Plugin" },
  getPluginsIdComplianceMemberPrivacy: { method: "GET" as const, path: "/plugins/{id}/compliance/memberPrivacy", pathParams: ["id"] as const, summary: "Get Plugin's Member privacy compliance" },
  getSearch: { method: "GET" as const, path: "/search", pathParams: [] as const, summary: "Search Trello" },
  getSearchMembers: { method: "GET" as const, path: "/search/members/", pathParams: [] as const, summary: "Search for Members" },
  getTokensToken: { method: "GET" as const, path: "/tokens/{token}", pathParams: ["token"] as const, summary: "Get a Token" },
  getTokensTokenMember: { method: "GET" as const, path: "/tokens/{token}/member", pathParams: ["token"] as const, summary: "Get Token's Member" },
  getTokensTokenWebhooks: { method: "GET" as const, path: "/tokens/{token}/webhooks", pathParams: ["token"] as const, summary: "Get Webhooks for Token" },
  getTokensTokenWebhooksIdWebhook: { method: "GET" as const, path: "/tokens/{token}/webhooks/{idWebhook}", pathParams: ["token", "idWebhook"] as const, summary: "Get a Webhook belonging to a Token" },
  getWebhooksId: { method: "GET" as const, path: "/webhooks/{id}", pathParams: ["id"] as const, summary: "Get a Webhook" },
  getWebhooksIdField: { method: "GET" as const, path: "/webhooks/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Get a field on a Webhook" },
  postActionsIdActionReactions: { method: "POST" as const, path: "/actions/{idAction}/reactions", pathParams: ["idAction"] as const, summary: "Create Reaction for Action" },
  postBoards: { method: "POST" as const, path: "/boards/", pathParams: [] as const, summary: "Create a Board" },
  postBoardsIdBoardPlugins: { method: "POST" as const, path: "/boards/{id}/boardPlugins", pathParams: ["id"] as const, summary: "Enable a Power-Up on a Board", deprecated: true as const },
  postBoardsIdCalendarKeyGenerate: { method: "POST" as const, path: "/boards/{id}/calendarKey/generate", pathParams: ["id"] as const, summary: "Create a calendarKey for a Board" },
  postBoardsIdEmailKeyGenerate: { method: "POST" as const, path: "/boards/{id}/emailKey/generate", pathParams: ["id"] as const, summary: "Create a emailKey for a Board" },
  postBoardsIdIdTags: { method: "POST" as const, path: "/boards/{id}/idTags", pathParams: ["id"] as const, summary: "Create a Tag for a Board" },
  postBoardsIdLabels: { method: "POST" as const, path: "/boards/{id}/labels", pathParams: ["id"] as const, summary: "Create a Label on a Board" },
  postBoardsIdLists: { method: "POST" as const, path: "/boards/{id}/lists", pathParams: ["id"] as const, summary: "Create a List on a Board" },
  postBoardsIdMarkedAsViewed: { method: "POST" as const, path: "/boards/{id}/markedAsViewed", pathParams: ["id"] as const, summary: "Mark Board as viewed" },
  postCards: { method: "POST" as const, path: "/cards", pathParams: [] as const, summary: "Create a new Card" },
  postCardsIdActionsComments: { method: "POST" as const, path: "/cards/{id}/actions/comments", pathParams: ["id"] as const, summary: "Add a new comment to a Card" },
  postCardsIdAttachments: { method: "POST" as const, path: "/cards/{id}/attachments", pathParams: ["id"] as const, summary: "Create Attachment On Card" },
  postCardsIdChecklists: { method: "POST" as const, path: "/cards/{id}/checklists", pathParams: ["id"] as const, summary: "Create Checklist on a Card" },
  postCardsIdIdLabels: { method: "POST" as const, path: "/cards/{id}/idLabels", pathParams: ["id"] as const, summary: "Add a Label to a Card" },
  postCardsIdIdMembers: { method: "POST" as const, path: "/cards/{id}/idMembers", pathParams: ["id"] as const, summary: "Add a Member to a Card" },
  postCardsIdLabels: { method: "POST" as const, path: "/cards/{id}/labels", pathParams: ["id"] as const, summary: "Create a new Label on a Card" },
  postCardsIdMarkAssociatedNotificationsRead: { method: "POST" as const, path: "/cards/{id}/markAssociatedNotificationsRead", pathParams: ["id"] as const, summary: "Mark a Card's Notifications as read" },
  postCardsIdMembersVoted: { method: "POST" as const, path: "/cards/{id}/membersVoted", pathParams: ["id"] as const, summary: "Add Member vote to Card" },
  postCardsIdStickers: { method: "POST" as const, path: "/cards/{id}/stickers", pathParams: ["id"] as const, summary: "Add a Sticker to a Card" },
  postChecklists: { method: "POST" as const, path: "/checklists", pathParams: [] as const, summary: "Create a Checklist" },
  postChecklistsIdCheckItems: { method: "POST" as const, path: "/checklists/{id}/checkItems", pathParams: ["id"] as const, summary: "Create Checkitem on Checklist" },
  postCustomFields: { method: "POST" as const, path: "/customFields", pathParams: [] as const, summary: "Create a new Custom Field on a Board" },
  postCustomFieldsIdOptions: { method: "POST" as const, path: "/customFields/{id}/options", pathParams: ["id"] as const, summary: "Add Option to Custom Field dropdown" },
  postEnterprisesIdTokens: { method: "POST" as const, path: "/enterprises/{id}/tokens", pathParams: ["id"] as const, summary: "Create an auth Token for an Enterprise." },
  postLabels: { method: "POST" as const, path: "/labels", pathParams: [] as const, summary: "Create a Label" },
  postLists: { method: "POST" as const, path: "/lists", pathParams: [] as const, summary: "Create a new List" },
  postListsIdArchiveAllCards: { method: "POST" as const, path: "/lists/{id}/archiveAllCards", pathParams: ["id"] as const, summary: "Archive all Cards in List" },
  postListsIdMoveAllCards: { method: "POST" as const, path: "/lists/{id}/moveAllCards", pathParams: ["id"] as const, summary: "Move all Cards in List" },
  postMembersIdAvatar: { method: "POST" as const, path: "/members/{id}/avatar", pathParams: ["id"] as const, summary: "Create Avatar for Member" },
  postMembersIdBoardBackgrounds: { method: "POST" as const, path: "/members/{id}/boardBackgrounds", pathParams: ["id"] as const, summary: "Upload new boardBackground for Member" },
  postMembersIdBoardStars: { method: "POST" as const, path: "/members/{id}/boardStars", pathParams: ["id"] as const, summary: "Create Star for Board" },
  postMembersIdCustomBoardBackgrounds: { method: "POST" as const, path: "/members/{id}/customBoardBackgrounds", pathParams: ["id"] as const, summary: "Create a new custom Board Background" },
  postMembersIdCustomEmoji: { method: "POST" as const, path: "/members/{id}/customEmoji", pathParams: ["id"] as const, summary: "Create custom Emoji for Member" },
  postMembersIdCustomStickers: { method: "POST" as const, path: "/members/{id}/customStickers", pathParams: ["id"] as const, summary: "Create custom Sticker for Member" },
  postMembersIdOneTimeMessagesDismissed: { method: "POST" as const, path: "/members/{id}/oneTimeMessagesDismissed", pathParams: ["id"] as const, summary: "Dismiss a message for Member" },
  postMembersIdSavedSearches: { method: "POST" as const, path: "/members/{id}/savedSearches", pathParams: ["id"] as const, summary: "Create saved Search for Member" },
  postNotificationsAllRead: { method: "POST" as const, path: "/notifications/all/read", pathParams: [] as const, summary: "Mark all Notifications as read" },
  postOrganizations: { method: "POST" as const, path: "/organizations", pathParams: [] as const, summary: "Create a new Organization" },
  postOrganizationsIdExports: { method: "POST" as const, path: "/organizations/{id}/exports", pathParams: ["id"] as const, summary: "Create Export for Organizations" },
  postOrganizationsIdLogo: { method: "POST" as const, path: "/organizations/{id}/logo", pathParams: ["id"] as const, summary: "Update logo for an Organization" },
  postOrganizationsIdTags: { method: "POST" as const, path: "/organizations/{id}/tags", pathParams: ["id"] as const, summary: "Create a Tag in Organization" },
  postPluginsIdPluginListing: { method: "POST" as const, path: "/plugins/{idPlugin}/listing", pathParams: ["idPlugin"] as const, summary: "Create a Listing for Plugin" },
  postTokensTokenWebhooks: { method: "POST" as const, path: "/tokens/{token}/webhooks", pathParams: ["token"] as const, summary: "Create Webhooks for Token" },
  postWebhooks: { method: "POST" as const, path: "/webhooks/", pathParams: [] as const, summary: "Create a Webhook" },
  putActionsId: { method: "PUT" as const, path: "/actions/{id}", pathParams: ["id"] as const, summary: "Update an Action" },
  putActionsIdText: { method: "PUT" as const, path: "/actions/{id}/text", pathParams: ["id"] as const, summary: "Update a Comment Action" },
  putBoardsId: { method: "PUT" as const, path: "/boards/{id}", pathParams: ["id"] as const, summary: "Update a Board" },
  putBoardsIdMembers: { method: "PUT" as const, path: "/boards/{id}/members", pathParams: ["id"] as const, summary: "Invite Member to Board via email" },
  putBoardsIdMembershipsIdMembership: { method: "PUT" as const, path: "/boards/{id}/memberships/{idMembership}", pathParams: ["id", "idMembership"] as const, summary: "Update Membership of Member on a Board" },
  putBoardsIdMembersIdMember: { method: "PUT" as const, path: "/boards/{id}/members/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Add a Member to a Board" },
  putBoardsIdMyPrefsEmailPosition: { method: "PUT" as const, path: "/boards/{id}/myPrefs/emailPosition", pathParams: ["id"] as const, summary: "Update emailPosition Pref on a Board" },
  putBoardsIdMyPrefsIdEmailList: { method: "PUT" as const, path: "/boards/{id}/myPrefs/idEmailList", pathParams: ["id"] as const, summary: "Update idEmailList Pref on a Board" },
  putBoardsIdMyPrefsShowSidebar: { method: "PUT" as const, path: "/boards/{id}/myPrefs/showSidebar", pathParams: ["id"] as const, summary: "Update showSidebar Pref on a Board" },
  putBoardsIdMyPrefsShowSidebarActivity: { method: "PUT" as const, path: "/boards/{id}/myPrefs/showSidebarActivity", pathParams: ["id"] as const, summary: "Update showSidebarActivity Pref on a Board" },
  putBoardsIdMyPrefsShowSidebarBoardActions: { method: "PUT" as const, path: "/boards/{id}/myPrefs/showSidebarBoardActions", pathParams: ["id"] as const, summary: "Update showSidebarBoardActions Pref on a Board" },
  putBoardsIdMyPrefsShowSidebarMembers: { method: "PUT" as const, path: "/boards/{id}/myPrefs/showSidebarMembers", pathParams: ["id"] as const, summary: "Update showSidebarMembers Pref on a Board" },
  putCardsId: { method: "PUT" as const, path: "/cards/{id}", pathParams: ["id"] as const, summary: "Update a Card" },
  putCardsIdActionsIdActionComments: { method: "PUT" as const, path: "/cards/{id}/actions/{idAction}/comments", pathParams: ["id", "idAction"] as const, summary: "Update Comment Action on a Card" },
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItem: { method: "PUT" as const, path: "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}", pathParams: ["idCard", "idCheckItem", "idChecklist"] as const, summary: "Update Checkitem on Checklist on Card" },
  putCardsIdCardCustomFieldIdCustomFieldItem: { method: "PUT" as const, path: "/cards/{idCard}/customField/{idCustomField}/item", pathParams: ["idCard", "idCustomField"] as const, summary: "Update Custom Field item on Card" },
  putCardsIdCardCustomFields: { method: "PUT" as const, path: "/cards/{idCard}/customFields", pathParams: [] as const, summary: "Update Multiple Custom Field items on Card" },
  putCardsIdCheckItemIdCheckItem: { method: "PUT" as const, path: "/cards/{id}/checkItem/{idCheckItem}", pathParams: ["id", "idCheckItem"] as const, summary: "Update a checkItem on a Card" },
  putCardsIdStickersIdSticker: { method: "PUT" as const, path: "/cards/{id}/stickers/{idSticker}", pathParams: ["id", "idSticker"] as const, summary: "Update a Sticker on a Card" },
  putChecklistsId: { method: "PUT" as const, path: "/checklists/{id}", pathParams: ["id"] as const, summary: "Update a Checklist" },
  putChecklistsIdField: { method: "PUT" as const, path: "/checklists/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Update field on a Checklist" },
  putCustomFieldsId: { method: "PUT" as const, path: "/customFields/{id}", pathParams: ["id"] as const, summary: "Update a Custom Field definition" },
  putEnterprisesIdAdminsIdMember: { method: "PUT" as const, path: "/enterprises/{id}/admins/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Update Member to be admin of Enterprise" },
  putEnterprisesIdEnterpriseJoinRequestBulk: { method: "PUT" as const, path: "/enterprises/${id}/enterpriseJoinRequest/bulk", pathParams: ["id"] as const, summary: "Decline enterpriseJoinRequests from one organization or a bulk list of organizations." },
  putEnterprisesIdMembersIdMemberDeactivated: { method: "PUT" as const, path: "/enterprises/{id}/members/{idMember}/deactivated", pathParams: ["id", "idMember"] as const, summary: "Deactivate a Member of an Enterprise." },
  putEnterprisesIdMembersIdMemberLicensed: { method: "PUT" as const, path: "/enterprises/{id}/members/{idMember}/licensed", pathParams: ["id", "idMember"] as const, summary: "Update a Member's licensed status" },
  putEnterprisesIdOrganizations: { method: "PUT" as const, path: "/enterprises/{id}/organizations", pathParams: ["id"] as const, summary: "Transfer an Organization to an Enterprise." },
  putLabelsId: { method: "PUT" as const, path: "/labels/{id}", pathParams: ["id"] as const, summary: "Update a Label" },
  putLabelsIdField: { method: "PUT" as const, path: "/labels/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Update a field on a label" },
  putListsId: { method: "PUT" as const, path: "/lists/{id}", pathParams: ["id"] as const, summary: "Update a List" },
  putListsIdClosed: { method: "PUT" as const, path: "/lists/{id}/closed", pathParams: ["id"] as const, summary: "Archive or unarchive a list" },
  putListsIdField: { method: "PUT" as const, path: "/lists/{id}/{field}", pathParams: ["id", "field"] as const, summary: "Update a field on a List" },
  putListsIdIdBoard: { method: "PUT" as const, path: "/lists/{id}/idBoard", pathParams: ["id"] as const, summary: "Move List to Board" },
  putMembersId: { method: "PUT" as const, path: "/members/{id}", pathParams: ["id"] as const, summary: "Update a Member" },
  putMembersIdBoardBackgroundsIdBackground: { method: "PUT" as const, path: "/members/{id}/boardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Update a Member's custom Board background" },
  putMembersIdBoardStarsIdStar: { method: "PUT" as const, path: "/members/{id}/boardStars/{idStar}", pathParams: ["id", "idStar"] as const, summary: "Update the position of a boardStar of Member" },
  putMembersIdCustomBoardBackgroundsIdBackground: { method: "PUT" as const, path: "/members/{id}/customBoardBackgrounds/{idBackground}", pathParams: ["id", "idBackground"] as const, summary: "Update custom Board Background of Member" },
  putMembersIdNotificationsChannelSettings: { method: "PUT" as const, path: "/members/{id}/notificationsChannelSettings", pathParams: ["id"] as const, summary: "Update blocked notification keys of Member on a channel" },
  putMembersIdNotificationsChannelSettingsChannel: { method: "PUT" as const, path: "/members/{id}/notificationsChannelSettings/{channel}", pathParams: ["id", "channel"] as const, summary: "Update blocked notification keys of Member on a channel" },
  putMembersIdNotificationsChannelSettingsChannelBlockedKeys: { method: "PUT" as const, path: "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}", pathParams: ["id", "channel", "blockedKeys"] as const, summary: "Update blocked notification keys of Member on a channel" },
  putMembersIdSavedSearchesIdSearch: { method: "PUT" as const, path: "/members/{id}/savedSearches/{idSearch}", pathParams: ["id", "idSearch"] as const, summary: "Update a saved search" },
  putNotificationsId: { method: "PUT" as const, path: "/notifications/{id}", pathParams: ["id"] as const, summary: "Update a Notification's read status" },
  putNotificationsIdUnread: { method: "PUT" as const, path: "/notifications/{id}/unread", pathParams: ["id"] as const, summary: "Update Notification's read status" },
  putOrganizationsId: { method: "PUT" as const, path: "/organizations/{id}", pathParams: ["id"] as const, summary: "Update an Organization" },
  putOrganizationsIdMembers: { method: "PUT" as const, path: "/organizations/{id}/members", pathParams: ["id"] as const, summary: "Update an Organization's Members" },
  putOrganizationsIdMembersIdMember: { method: "PUT" as const, path: "/organizations/{id}/members/{idMember}", pathParams: ["id", "idMember"] as const, summary: "Update a Member of an Organization" },
  putOrganizationsIdMembersIdMemberDeactivated: { method: "PUT" as const, path: "/organizations/{id}/members/{idMember}/deactivated", pathParams: ["id", "idMember"] as const, summary: "Deactivate or reactivate a member of an Organization" },
  putPluginsId: { method: "PUT" as const, path: "/plugins/{id}/", pathParams: ["id"] as const, summary: "Update a Plugin" },
  putPluginsIdPluginListingsIdListing: { method: "PUT" as const, path: "/plugins/{idPlugin}/listings/{idListing}", pathParams: ["idPlugin", "idListing"] as const, summary: "Updating Plugin's Listing" },
  putTokensTokenWebhooksIdWebhook: { method: "PUT" as const, path: "/tokens/{token}/webhooks/{idWebhook}", pathParams: ["token", "idWebhook"] as const, summary: "Update a Webhook created by Token" },
  putWebhooksId: { method: "PUT" as const, path: "/webhooks/{id}", pathParams: ["id"] as const, summary: "Update a Webhook" },
} as const satisfies Record<string, OperationMeta>;

export type OperationId = keyof typeof operations;

export interface OperationParamMap {
  deleteActionsId: T.DeleteActionsIdParams;
  deleteActionsIdActionReactionsId: T.DeleteActionsIdActionReactionsIdParams;
  deleteBoardsId: T.DeleteBoardsIdParams;
  deleteBoardsIdBoardPluginsIdPlugin: T.DeleteBoardsIdBoardPluginsIdPluginParams;
  deleteBoardsIdMembersIdMember: T.DeleteBoardsIdMembersIdMemberParams;
  deleteCardsId: T.DeleteCardsIdParams;
  deleteCardsIdActionsIdActionComments: T.DeleteCardsIdActionsIdActionCommentsParams;
  deleteCardsIdAttachmentsIdAttachment: T.DeleteCardsIdAttachmentsIdAttachmentParams;
  deleteCardsIdCheckItemIdCheckItem: T.DeleteCardsIdCheckItemIdCheckItemParams;
  deleteCardsIdChecklistsIdChecklist: T.DeleteCardsIdChecklistsIdChecklistParams;
  deleteCardsIdIdLabelsIdLabel: T.DeleteCardsIdIdLabelsIdLabelParams;
  deleteCardsIdIdMembersIdMember: T.DeleteCardsIdIdMembersIdMemberParams;
  deleteCardsIdMembersVotedIdMember: T.DeleteCardsIdMembersVotedIdMemberParams;
  deleteCardsIdStickersIdSticker: T.DeleteCardsIdStickersIdStickerParams;
  deleteChecklistsId: T.DeleteChecklistsIdParams;
  deleteChecklistsIdCheckItemsIdCheckItem: T.DeleteChecklistsIdCheckItemsIdCheckItemParams;
  deleteCustomFieldsId: T.DeleteCustomFieldsIdParams;
  deleteCustomFieldsIdOptionsIdCustomFieldOption: T.DeleteCustomFieldsIdOptionsIdCustomFieldOptionParams;
  deleteEnterprisesIdAdminsIdMember: T.DeleteEnterprisesIdAdminsIdMemberParams;
  deleteEnterprisesIdOrganizationsIdOrg: T.DeleteEnterprisesIdOrganizationsIdOrgParams;
  deleteLabelsId: T.DeleteLabelsIdParams;
  deleteMembersIdBoardBackgroundsIdBackground: T.DeleteMembersIdBoardBackgroundsIdBackgroundParams;
  deleteMembersIdBoardStarsIdStar: T.DeleteMembersIdBoardStarsIdStarParams;
  deleteMembersIdCustomBoardBackgroundsIdBackground: T.DeleteMembersIdCustomBoardBackgroundsIdBackgroundParams;
  deleteMembersIdCustomStickersIdSticker: T.DeleteMembersIdCustomStickersIdStickerParams;
  deleteMembersIdSavedSearchesIdSearch: T.DeleteMembersIdSavedSearchesIdSearchParams;
  deleteOrganizationsId: T.DeleteOrganizationsIdParams;
  deleteOrganizationsIdLogo: T.DeleteOrganizationsIdLogoParams;
  deleteOrganizationsIdMembersIdMember: T.DeleteOrganizationsIdMembersIdMemberParams;
  deleteOrganizationsIdMembersIdMemberAll: T.DeleteOrganizationsIdMembersIdMemberAllParams;
  deleteOrganizationsIdPrefsAssociatedDomain: T.DeleteOrganizationsIdPrefsAssociatedDomainParams;
  deleteOrganizationsIdPrefsOrgInviteRestrict: T.DeleteOrganizationsIdPrefsOrgInviteRestrictParams;
  deleteOrganizationsIdTagsIdTag: T.DeleteOrganizationsIdTagsIdTagParams;
  deleteTokensToken: T.DeleteTokensTokenParams;
  deleteTokensTokenWebhooksIdWebhook: T.DeleteTokensTokenWebhooksIdWebhookParams;
  deleteWebhooksId: T.DeleteWebhooksIdParams;
  getActionsId: T.GetActionsIdParams;
  getActionsIdActionReactions: T.GetActionsIdActionReactionsParams;
  getActionsIdActionReactionsId: T.GetActionsIdActionReactionsIdParams;
  getActionsIdActionReactionsSummary: T.GetActionsIdActionReactionsSummaryParams;
  getActionsIdBoard: T.GetActionsIdBoardParams;
  getActionsIdCard: T.GetActionsIdCardParams;
  getActionsIdField: T.GetActionsIdFieldParams;
  getActionsIdList: T.GetActionsIdListParams;
  getActionsIdMember: T.GetActionsIdMemberParams;
  getActionsIdMemberCreator: T.GetActionsIdMemberCreatorParams;
  getActionsIdOrganization: T.GetActionsIdOrganizationParams;
  getApplicationsKeyCompliance: T.GetApplicationsKeyComplianceParams;
  getBatch: T.GetBatchParams;
  getBoardsBoardIdActions: T.GetBoardsBoardIdActionsParams;
  getBoardsBoardIdBoardStars: T.GetBoardsBoardIdBoardStarsParams;
  getBoardsId: T.GetBoardsIdParams;
  getBoardsIdBoardPlugins: T.GetBoardsIdBoardPluginsParams;
  getBoardsIdCards: T.GetBoardsIdCardsParams;
  getBoardsIdCardsFilter: T.GetBoardsIdCardsFilterParams;
  getBoardsIdChecklists: T.GetBoardsIdChecklistsParams;
  getBoardsIdCustomFields: T.GetBoardsIdCustomFieldsParams;
  getBoardsIdField: T.GetBoardsIdFieldParams;
  getBoardsIdLabels: T.GetBoardsIdLabelsParams;
  getBoardsIdLists: T.GetBoardsIdListsParams;
  getBoardsIdListsFilter: T.GetBoardsIdListsFilterParams;
  getBoardsIdMembers: T.GetBoardsIdMembersParams;
  getBoardsIdMemberships: T.GetBoardsIdMembershipsParams;
  getBoardsIdPlugins: T.GetBoardsIdPluginsParams;
  getCardsId: T.GetCardsIdParams;
  getCardsIdActions: T.GetCardsIdActionsParams;
  getCardsIdAttachments: T.GetCardsIdAttachmentsParams;
  getCardsIdAttachmentsIdAttachment: T.GetCardsIdAttachmentsIdAttachmentParams;
  getCardsIdBoard: T.GetCardsIdBoardParams;
  getCardsIdCheckItemIdCheckItem: T.GetCardsIdCheckItemIdCheckItemParams;
  getCardsIdCheckItemStates: T.GetCardsIdCheckItemStatesParams;
  getCardsIdChecklists: T.GetCardsIdChecklistsParams;
  getCardsIdCustomFieldItems: T.GetCardsIdCustomFieldItemsParams;
  getCardsIdField: T.GetCardsIdFieldParams;
  getCardsIdList: T.GetCardsIdListParams;
  getCardsIdMembers: T.GetCardsIdMembersParams;
  getCardsIdMembersVoted: T.GetCardsIdMembersVotedParams;
  getCardsIdPluginData: T.GetCardsIdPluginDataParams;
  getCardsIdStickers: T.GetCardsIdStickersParams;
  getCardsIdStickersIdSticker: T.GetCardsIdStickersIdStickerParams;
  getChecklistsId: T.GetChecklistsIdParams;
  getChecklistsIdBoard: T.GetChecklistsIdBoardParams;
  getChecklistsIdCards: T.GetChecklistsIdCardsParams;
  getChecklistsIdCheckItems: T.GetChecklistsIdCheckItemsParams;
  getChecklistsIdCheckItemsIdCheckItem: T.GetChecklistsIdCheckItemsIdCheckItemParams;
  getChecklistsIdField: T.GetChecklistsIdFieldParams;
  getCustomFieldsId: T.GetCustomFieldsIdParams;
  getCustomFieldsIdOptions: T.GetCustomFieldsIdOptionsParams;
  getCustomFieldsIdOptionsIdCustomFieldOption: T.GetCustomFieldsIdOptionsIdCustomFieldOptionParams;
  getEmoji: T.GetEmojiParams;
  getEnterprisesId: T.GetEnterprisesIdParams;
  getEnterprisesIdAdmins: T.GetEnterprisesIdAdminsParams;
  getEnterprisesIdAuditlog: T.GetEnterprisesIdAuditlogParams;
  getEnterprisesIdClaimableOrganizations: T.GetEnterprisesIdClaimableOrganizationsParams;
  getEnterprisesIdMembers: T.GetEnterprisesIdMembersParams;
  getEnterprisesIdMembersIdMember: T.GetEnterprisesIdMembersIdMemberParams;
  getEnterprisesIdMembersQuery: T.GetEnterprisesIdMembersQueryParams;
  getEnterprisesIdOrganizations: T.GetEnterprisesIdOrganizationsParams;
  getEnterprisesIdOrganizationsBulkIdOrganizations: T.GetEnterprisesIdOrganizationsBulkIdOrganizationsParams;
  getEnterprisesIdPendingOrganizations: T.GetEnterprisesIdPendingOrganizationsParams;
  getEnterprisesIdSignupUrl: T.GetEnterprisesIdSignupUrlParams;
  getEnterprisesIdTransferrableBulkIdOrganizations: T.GetEnterprisesIdTransferrableBulkIdOrganizationsParams;
  getEnterprisesIdTransferrableOrganizationIdOrganization: T.GetEnterprisesIdTransferrableOrganizationIdOrganizationParams;
  getLabelsId: T.GetLabelsIdParams;
  getListsId: T.GetListsIdParams;
  getListsIdActions: T.GetListsIdActionsParams;
  getListsIdBoard: T.GetListsIdBoardParams;
  getListsIdCards: T.GetListsIdCardsParams;
  getMembersId: T.GetMembersIdParams;
  getMembersIdActions: T.GetMembersIdActionsParams;
  getMembersIdBoardBackgrounds: T.GetMembersIdBoardBackgroundsParams;
  getMembersIdBoardBackgroundsIdBackground: T.GetMembersIdBoardBackgroundsIdBackgroundParams;
  getMembersIdBoards: T.GetMembersIdBoardsParams;
  getMembersIdBoardsInvited: T.GetMembersIdBoardsInvitedParams;
  getMembersIdBoardStars: T.GetMembersIdBoardStarsParams;
  getMembersIdBoardStarsIdStar: T.GetMembersIdBoardStarsIdStarParams;
  getMembersIdCards: T.GetMembersIdCardsParams;
  getMembersIdCustomBoardBackgrounds: T.GetMembersIdCustomBoardBackgroundsParams;
  getMembersIdCustomBoardBackgroundsIdBackground: T.GetMembersIdCustomBoardBackgroundsIdBackgroundParams;
  getMembersIdCustomEmoji: T.GetMembersIdCustomEmojiParams;
  getMembersIdCustomEmojiIdEmoji: T.GetMembersIdCustomEmojiIdEmojiParams;
  getMembersIdCustomStickers: T.GetMembersIdCustomStickersParams;
  getMembersIdCustomStickersIdSticker: T.GetMembersIdCustomStickersIdStickerParams;
  getMembersIdField: T.GetMembersIdFieldParams;
  getMembersIdNotifications: T.GetMembersIdNotificationsParams;
  getMembersIdNotificationsChannelSettings: T.GetMembersIdNotificationsChannelSettingsParams;
  getMembersIdNotificationsChannelSettingsChannel: T.GetMembersIdNotificationsChannelSettingsChannelParams;
  getMembersIdOrganizations: T.GetMembersIdOrganizationsParams;
  getMembersIdOrganizationsInvited: T.GetMembersIdOrganizationsInvitedParams;
  getMembersIdSavedSearches: T.GetMembersIdSavedSearchesParams;
  getMembersIdSavedSearchesIdSearch: T.GetMembersIdSavedSearchesIdSearchParams;
  getMembersIdTokens: T.GetMembersIdTokensParams;
  getNotificationsId: T.GetNotificationsIdParams;
  getNotificationsIdBoard: T.GetNotificationsIdBoardParams;
  getNotificationsIdCard: T.GetNotificationsIdCardParams;
  getNotificationsIdField: T.GetNotificationsIdFieldParams;
  getNotificationsIdList: T.GetNotificationsIdListParams;
  getNotificationsIdMember: T.GetNotificationsIdMemberParams;
  getNotificationsIdMemberCreator: T.GetNotificationsIdMemberCreatorParams;
  getNotificationsIdOrganization: T.GetNotificationsIdOrganizationParams;
  getOrganizationsId: T.GetOrganizationsIdParams;
  getOrganizationsIdActions: T.GetOrganizationsIdActionsParams;
  getOrganizationsIdBoards: T.GetOrganizationsIdBoardsParams;
  getOrganizationsIdExports: T.GetOrganizationsIdExportsParams;
  getOrganizationsIdField: T.GetOrganizationsIdFieldParams;
  getOrganizationsIdMembers: T.GetOrganizationsIdMembersParams;
  getOrganizationsIdMemberships: T.GetOrganizationsIdMembershipsParams;
  getOrganizationsIdMembershipsIdMembership: T.GetOrganizationsIdMembershipsIdMembershipParams;
  getOrganizationsIdNewBillableGuestsIdBoard: T.GetOrganizationsIdNewBillableGuestsIdBoardParams;
  getOrganizationsIdPluginData: T.GetOrganizationsIdPluginDataParams;
  getOrganizationsIdTags: T.GetOrganizationsIdTagsParams;
  getPluginsId: T.GetPluginsIdParams;
  getPluginsIdComplianceMemberPrivacy: T.GetPluginsIdComplianceMemberPrivacyParams;
  getSearch: T.GetSearchParams;
  getSearchMembers: T.GetSearchMembersParams;
  getTokensToken: T.GetTokensTokenParams;
  getTokensTokenMember: T.GetTokensTokenMemberParams;
  getTokensTokenWebhooks: T.GetTokensTokenWebhooksParams;
  getTokensTokenWebhooksIdWebhook: T.GetTokensTokenWebhooksIdWebhookParams;
  getWebhooksId: T.GetWebhooksIdParams;
  getWebhooksIdField: T.GetWebhooksIdFieldParams;
  postActionsIdActionReactions: T.PostActionsIdActionReactionsParams;
  postBoards: T.PostBoardsParams;
  postBoardsIdBoardPlugins: T.PostBoardsIdBoardPluginsParams;
  postBoardsIdCalendarKeyGenerate: T.PostBoardsIdCalendarKeyGenerateParams;
  postBoardsIdEmailKeyGenerate: T.PostBoardsIdEmailKeyGenerateParams;
  postBoardsIdIdTags: T.PostBoardsIdIdTagsParams;
  postBoardsIdLabels: T.PostBoardsIdLabelsParams;
  postBoardsIdLists: T.PostBoardsIdListsParams;
  postBoardsIdMarkedAsViewed: T.PostBoardsIdMarkedAsViewedParams;
  postCards: T.PostCardsParams;
  postCardsIdActionsComments: T.PostCardsIdActionsCommentsParams;
  postCardsIdAttachments: T.PostCardsIdAttachmentsParams;
  postCardsIdChecklists: T.PostCardsIdChecklistsParams;
  postCardsIdIdLabels: T.PostCardsIdIdLabelsParams;
  postCardsIdIdMembers: T.PostCardsIdIdMembersParams;
  postCardsIdLabels: T.PostCardsIdLabelsParams;
  postCardsIdMarkAssociatedNotificationsRead: T.PostCardsIdMarkAssociatedNotificationsReadParams;
  postCardsIdMembersVoted: T.PostCardsIdMembersVotedParams;
  postCardsIdStickers: T.PostCardsIdStickersParams;
  postChecklists: T.PostChecklistsParams;
  postChecklistsIdCheckItems: T.PostChecklistsIdCheckItemsParams;
  postCustomFields: T.PostCustomFieldsParams;
  postCustomFieldsIdOptions: T.PostCustomFieldsIdOptionsParams;
  postEnterprisesIdTokens: T.PostEnterprisesIdTokensParams;
  postLabels: T.PostLabelsParams;
  postLists: T.PostListsParams;
  postListsIdArchiveAllCards: T.PostListsIdArchiveAllCardsParams;
  postListsIdMoveAllCards: T.PostListsIdMoveAllCardsParams;
  postMembersIdAvatar: T.PostMembersIdAvatarParams;
  postMembersIdBoardBackgrounds: T.PostMembersIdBoardBackgroundsParams;
  postMembersIdBoardStars: T.PostMembersIdBoardStarsParams;
  postMembersIdCustomBoardBackgrounds: T.PostMembersIdCustomBoardBackgroundsParams;
  postMembersIdCustomEmoji: T.PostMembersIdCustomEmojiParams;
  postMembersIdCustomStickers: T.PostMembersIdCustomStickersParams;
  postMembersIdOneTimeMessagesDismissed: T.PostMembersIdOneTimeMessagesDismissedParams;
  postMembersIdSavedSearches: T.PostMembersIdSavedSearchesParams;
  postNotificationsAllRead: T.PostNotificationsAllReadParams;
  postOrganizations: T.PostOrganizationsParams;
  postOrganizationsIdExports: T.PostOrganizationsIdExportsParams;
  postOrganizationsIdLogo: T.PostOrganizationsIdLogoParams;
  postOrganizationsIdTags: T.PostOrganizationsIdTagsParams;
  postPluginsIdPluginListing: T.PostPluginsIdPluginListingParams;
  postTokensTokenWebhooks: T.PostTokensTokenWebhooksParams;
  postWebhooks: T.PostWebhooksParams;
  putActionsId: T.PutActionsIdParams;
  putActionsIdText: T.PutActionsIdTextParams;
  putBoardsId: T.PutBoardsIdParams;
  putBoardsIdMembers: T.PutBoardsIdMembersParams;
  putBoardsIdMembershipsIdMembership: T.PutBoardsIdMembershipsIdMembershipParams;
  putBoardsIdMembersIdMember: T.PutBoardsIdMembersIdMemberParams;
  putBoardsIdMyPrefsEmailPosition: T.PutBoardsIdMyPrefsEmailPositionParams;
  putBoardsIdMyPrefsIdEmailList: T.PutBoardsIdMyPrefsIdEmailListParams;
  putBoardsIdMyPrefsShowSidebar: T.PutBoardsIdMyPrefsShowSidebarParams;
  putBoardsIdMyPrefsShowSidebarActivity: T.PutBoardsIdMyPrefsShowSidebarActivityParams;
  putBoardsIdMyPrefsShowSidebarBoardActions: T.PutBoardsIdMyPrefsShowSidebarBoardActionsParams;
  putBoardsIdMyPrefsShowSidebarMembers: T.PutBoardsIdMyPrefsShowSidebarMembersParams;
  putCardsId: T.PutCardsIdParams;
  putCardsIdActionsIdActionComments: T.PutCardsIdActionsIdActionCommentsParams;
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItem: T.PutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemParams;
  putCardsIdCardCustomFieldIdCustomFieldItem: T.PutCardsIdCardCustomFieldIdCustomFieldItemParams;
  putCardsIdCardCustomFields: T.PutCardsIdCardCustomFieldsParams;
  putCardsIdCheckItemIdCheckItem: T.PutCardsIdCheckItemIdCheckItemParams;
  putCardsIdStickersIdSticker: T.PutCardsIdStickersIdStickerParams;
  putChecklistsId: T.PutChecklistsIdParams;
  putChecklistsIdField: T.PutChecklistsIdFieldParams;
  putCustomFieldsId: T.PutCustomFieldsIdParams;
  putEnterprisesIdAdminsIdMember: T.PutEnterprisesIdAdminsIdMemberParams;
  putEnterprisesIdEnterpriseJoinRequestBulk: T.PutEnterprisesIdEnterpriseJoinRequestBulkParams;
  putEnterprisesIdMembersIdMemberDeactivated: T.PutEnterprisesIdMembersIdMemberDeactivatedParams;
  putEnterprisesIdMembersIdMemberLicensed: T.PutEnterprisesIdMembersIdMemberLicensedParams;
  putEnterprisesIdOrganizations: T.PutEnterprisesIdOrganizationsParams;
  putLabelsId: T.PutLabelsIdParams;
  putLabelsIdField: T.PutLabelsIdFieldParams;
  putListsId: T.PutListsIdParams;
  putListsIdClosed: T.PutListsIdClosedParams;
  putListsIdField: T.PutListsIdFieldParams;
  putListsIdIdBoard: T.PutListsIdIdBoardParams;
  putMembersId: T.PutMembersIdParams;
  putMembersIdBoardBackgroundsIdBackground: T.PutMembersIdBoardBackgroundsIdBackgroundParams;
  putMembersIdBoardStarsIdStar: T.PutMembersIdBoardStarsIdStarParams;
  putMembersIdCustomBoardBackgroundsIdBackground: T.PutMembersIdCustomBoardBackgroundsIdBackgroundParams;
  putMembersIdNotificationsChannelSettings: T.PutMembersIdNotificationsChannelSettingsParams;
  putMembersIdNotificationsChannelSettingsChannel: T.PutMembersIdNotificationsChannelSettingsChannelParams;
  putMembersIdNotificationsChannelSettingsChannelBlockedKeys: T.PutMembersIdNotificationsChannelSettingsChannelBlockedKeysParams;
  putMembersIdSavedSearchesIdSearch: T.PutMembersIdSavedSearchesIdSearchParams;
  putNotificationsId: T.PutNotificationsIdParams;
  putNotificationsIdUnread: T.PutNotificationsIdUnreadParams;
  putOrganizationsId: T.PutOrganizationsIdParams;
  putOrganizationsIdMembers: T.PutOrganizationsIdMembersParams;
  putOrganizationsIdMembersIdMember: T.PutOrganizationsIdMembersIdMemberParams;
  putOrganizationsIdMembersIdMemberDeactivated: T.PutOrganizationsIdMembersIdMemberDeactivatedParams;
  putPluginsId: T.PutPluginsIdParams;
  putPluginsIdPluginListingsIdListing: T.PutPluginsIdPluginListingsIdListingParams;
  putTokensTokenWebhooksIdWebhook: T.PutTokensTokenWebhooksIdWebhookParams;
  putWebhooksId: T.PutWebhooksIdParams;
}

export interface OperationResponseMap {
  deleteActionsId: T.DeleteActionsIdResponse;
  deleteActionsIdActionReactionsId: T.DeleteActionsIdActionReactionsIdResponse;
  deleteBoardsId: T.DeleteBoardsIdResponse;
  deleteBoardsIdBoardPluginsIdPlugin: T.DeleteBoardsIdBoardPluginsIdPluginResponse;
  deleteBoardsIdMembersIdMember: T.DeleteBoardsIdMembersIdMemberResponse;
  deleteCardsId: T.DeleteCardsIdResponse;
  deleteCardsIdActionsIdActionComments: T.DeleteCardsIdActionsIdActionCommentsResponse;
  deleteCardsIdAttachmentsIdAttachment: T.DeleteCardsIdAttachmentsIdAttachmentResponse;
  deleteCardsIdCheckItemIdCheckItem: T.DeleteCardsIdCheckItemIdCheckItemResponse;
  deleteCardsIdChecklistsIdChecklist: T.DeleteCardsIdChecklistsIdChecklistResponse;
  deleteCardsIdIdLabelsIdLabel: T.DeleteCardsIdIdLabelsIdLabelResponse;
  deleteCardsIdIdMembersIdMember: T.DeleteCardsIdIdMembersIdMemberResponse;
  deleteCardsIdMembersVotedIdMember: T.DeleteCardsIdMembersVotedIdMemberResponse;
  deleteCardsIdStickersIdSticker: T.DeleteCardsIdStickersIdStickerResponse;
  deleteChecklistsId: T.DeleteChecklistsIdResponse;
  deleteChecklistsIdCheckItemsIdCheckItem: T.DeleteChecklistsIdCheckItemsIdCheckItemResponse;
  deleteCustomFieldsId: T.DeleteCustomFieldsIdResponse;
  deleteCustomFieldsIdOptionsIdCustomFieldOption: T.DeleteCustomFieldsIdOptionsIdCustomFieldOptionResponse;
  deleteEnterprisesIdAdminsIdMember: T.DeleteEnterprisesIdAdminsIdMemberResponse;
  deleteEnterprisesIdOrganizationsIdOrg: T.DeleteEnterprisesIdOrganizationsIdOrgResponse;
  deleteLabelsId: T.DeleteLabelsIdResponse;
  deleteMembersIdBoardBackgroundsIdBackground: T.DeleteMembersIdBoardBackgroundsIdBackgroundResponse;
  deleteMembersIdBoardStarsIdStar: T.DeleteMembersIdBoardStarsIdStarResponse;
  deleteMembersIdCustomBoardBackgroundsIdBackground: T.DeleteMembersIdCustomBoardBackgroundsIdBackgroundResponse;
  deleteMembersIdCustomStickersIdSticker: T.DeleteMembersIdCustomStickersIdStickerResponse;
  deleteMembersIdSavedSearchesIdSearch: T.DeleteMembersIdSavedSearchesIdSearchResponse;
  deleteOrganizationsId: T.DeleteOrganizationsIdResponse;
  deleteOrganizationsIdLogo: T.DeleteOrganizationsIdLogoResponse;
  deleteOrganizationsIdMembersIdMember: T.DeleteOrganizationsIdMembersIdMemberResponse;
  deleteOrganizationsIdMembersIdMemberAll: T.DeleteOrganizationsIdMembersIdMemberAllResponse;
  deleteOrganizationsIdPrefsAssociatedDomain: T.DeleteOrganizationsIdPrefsAssociatedDomainResponse;
  deleteOrganizationsIdPrefsOrgInviteRestrict: T.DeleteOrganizationsIdPrefsOrgInviteRestrictResponse;
  deleteOrganizationsIdTagsIdTag: T.DeleteOrganizationsIdTagsIdTagResponse;
  deleteTokensToken: T.DeleteTokensTokenResponse;
  deleteTokensTokenWebhooksIdWebhook: T.DeleteTokensTokenWebhooksIdWebhookResponse;
  deleteWebhooksId: T.DeleteWebhooksIdResponse;
  getActionsId: T.GetActionsIdResponse;
  getActionsIdActionReactions: T.GetActionsIdActionReactionsResponse;
  getActionsIdActionReactionsId: T.GetActionsIdActionReactionsIdResponse;
  getActionsIdActionReactionsSummary: T.GetActionsIdActionReactionsSummaryResponse;
  getActionsIdBoard: T.GetActionsIdBoardResponse;
  getActionsIdCard: T.GetActionsIdCardResponse;
  getActionsIdField: T.GetActionsIdFieldResponse;
  getActionsIdList: T.GetActionsIdListResponse;
  getActionsIdMember: T.GetActionsIdMemberResponse;
  getActionsIdMemberCreator: T.GetActionsIdMemberCreatorResponse;
  getActionsIdOrganization: T.GetActionsIdOrganizationResponse;
  getApplicationsKeyCompliance: T.GetApplicationsKeyComplianceResponse;
  getBatch: T.GetBatchResponse;
  getBoardsBoardIdActions: T.GetBoardsBoardIdActionsResponse;
  getBoardsBoardIdBoardStars: T.GetBoardsBoardIdBoardStarsResponse;
  getBoardsId: T.GetBoardsIdResponse;
  getBoardsIdBoardPlugins: T.GetBoardsIdBoardPluginsResponse;
  getBoardsIdCards: T.GetBoardsIdCardsResponse;
  getBoardsIdCardsFilter: T.GetBoardsIdCardsFilterResponse;
  getBoardsIdChecklists: T.GetBoardsIdChecklistsResponse;
  getBoardsIdCustomFields: T.GetBoardsIdCustomFieldsResponse;
  getBoardsIdField: T.GetBoardsIdFieldResponse;
  getBoardsIdLabels: T.GetBoardsIdLabelsResponse;
  getBoardsIdLists: T.GetBoardsIdListsResponse;
  getBoardsIdListsFilter: T.GetBoardsIdListsFilterResponse;
  getBoardsIdMembers: T.GetBoardsIdMembersResponse;
  getBoardsIdMemberships: T.GetBoardsIdMembershipsResponse;
  getBoardsIdPlugins: T.GetBoardsIdPluginsResponse;
  getCardsId: T.GetCardsIdResponse;
  getCardsIdActions: T.GetCardsIdActionsResponse;
  getCardsIdAttachments: T.GetCardsIdAttachmentsResponse;
  getCardsIdAttachmentsIdAttachment: T.GetCardsIdAttachmentsIdAttachmentResponse;
  getCardsIdBoard: T.GetCardsIdBoardResponse;
  getCardsIdCheckItemIdCheckItem: T.GetCardsIdCheckItemIdCheckItemResponse;
  getCardsIdCheckItemStates: T.GetCardsIdCheckItemStatesResponse;
  getCardsIdChecklists: T.GetCardsIdChecklistsResponse;
  getCardsIdCustomFieldItems: T.GetCardsIdCustomFieldItemsResponse;
  getCardsIdField: T.GetCardsIdFieldResponse;
  getCardsIdList: T.GetCardsIdListResponse;
  getCardsIdMembers: T.GetCardsIdMembersResponse;
  getCardsIdMembersVoted: T.GetCardsIdMembersVotedResponse;
  getCardsIdPluginData: T.GetCardsIdPluginDataResponse;
  getCardsIdStickers: T.GetCardsIdStickersResponse;
  getCardsIdStickersIdSticker: T.GetCardsIdStickersIdStickerResponse;
  getChecklistsId: T.GetChecklistsIdResponse;
  getChecklistsIdBoard: T.GetChecklistsIdBoardResponse;
  getChecklistsIdCards: T.GetChecklistsIdCardsResponse;
  getChecklistsIdCheckItems: T.GetChecklistsIdCheckItemsResponse;
  getChecklistsIdCheckItemsIdCheckItem: T.GetChecklistsIdCheckItemsIdCheckItemResponse;
  getChecklistsIdField: T.GetChecklistsIdFieldResponse;
  getCustomFieldsId: T.GetCustomFieldsIdResponse;
  getCustomFieldsIdOptions: T.GetCustomFieldsIdOptionsResponse;
  getCustomFieldsIdOptionsIdCustomFieldOption: T.GetCustomFieldsIdOptionsIdCustomFieldOptionResponse;
  getEmoji: T.GetEmojiResponse;
  getEnterprisesId: T.GetEnterprisesIdResponse;
  getEnterprisesIdAdmins: T.GetEnterprisesIdAdminsResponse;
  getEnterprisesIdAuditlog: T.GetEnterprisesIdAuditlogResponse;
  getEnterprisesIdClaimableOrganizations: T.GetEnterprisesIdClaimableOrganizationsResponse;
  getEnterprisesIdMembers: T.GetEnterprisesIdMembersResponse;
  getEnterprisesIdMembersIdMember: T.GetEnterprisesIdMembersIdMemberResponse;
  getEnterprisesIdMembersQuery: T.GetEnterprisesIdMembersQueryResponse;
  getEnterprisesIdOrganizations: T.GetEnterprisesIdOrganizationsResponse;
  getEnterprisesIdOrganizationsBulkIdOrganizations: T.GetEnterprisesIdOrganizationsBulkIdOrganizationsResponse;
  getEnterprisesIdPendingOrganizations: T.GetEnterprisesIdPendingOrganizationsResponse;
  getEnterprisesIdSignupUrl: T.GetEnterprisesIdSignupUrlResponse;
  getEnterprisesIdTransferrableBulkIdOrganizations: T.GetEnterprisesIdTransferrableBulkIdOrganizationsResponse;
  getEnterprisesIdTransferrableOrganizationIdOrganization: T.GetEnterprisesIdTransferrableOrganizationIdOrganizationResponse;
  getLabelsId: T.GetLabelsIdResponse;
  getListsId: T.GetListsIdResponse;
  getListsIdActions: T.GetListsIdActionsResponse;
  getListsIdBoard: T.GetListsIdBoardResponse;
  getListsIdCards: T.GetListsIdCardsResponse;
  getMembersId: T.GetMembersIdResponse;
  getMembersIdActions: T.GetMembersIdActionsResponse;
  getMembersIdBoardBackgrounds: T.GetMembersIdBoardBackgroundsResponse;
  getMembersIdBoardBackgroundsIdBackground: T.GetMembersIdBoardBackgroundsIdBackgroundResponse;
  getMembersIdBoards: T.GetMembersIdBoardsResponse;
  getMembersIdBoardsInvited: T.GetMembersIdBoardsInvitedResponse;
  getMembersIdBoardStars: T.GetMembersIdBoardStarsResponse;
  getMembersIdBoardStarsIdStar: T.GetMembersIdBoardStarsIdStarResponse;
  getMembersIdCards: T.GetMembersIdCardsResponse;
  getMembersIdCustomBoardBackgrounds: T.GetMembersIdCustomBoardBackgroundsResponse;
  getMembersIdCustomBoardBackgroundsIdBackground: T.GetMembersIdCustomBoardBackgroundsIdBackgroundResponse;
  getMembersIdCustomEmoji: T.GetMembersIdCustomEmojiResponse;
  getMembersIdCustomEmojiIdEmoji: T.GetMembersIdCustomEmojiIdEmojiResponse;
  getMembersIdCustomStickers: T.GetMembersIdCustomStickersResponse;
  getMembersIdCustomStickersIdSticker: T.GetMembersIdCustomStickersIdStickerResponse;
  getMembersIdField: T.GetMembersIdFieldResponse;
  getMembersIdNotifications: T.GetMembersIdNotificationsResponse;
  getMembersIdNotificationsChannelSettings: T.GetMembersIdNotificationsChannelSettingsResponse;
  getMembersIdNotificationsChannelSettingsChannel: T.GetMembersIdNotificationsChannelSettingsChannelResponse;
  getMembersIdOrganizations: T.GetMembersIdOrganizationsResponse;
  getMembersIdOrganizationsInvited: T.GetMembersIdOrganizationsInvitedResponse;
  getMembersIdSavedSearches: T.GetMembersIdSavedSearchesResponse;
  getMembersIdSavedSearchesIdSearch: T.GetMembersIdSavedSearchesIdSearchResponse;
  getMembersIdTokens: T.GetMembersIdTokensResponse;
  getNotificationsId: T.GetNotificationsIdResponse;
  getNotificationsIdBoard: T.GetNotificationsIdBoardResponse;
  getNotificationsIdCard: T.GetNotificationsIdCardResponse;
  getNotificationsIdField: T.GetNotificationsIdFieldResponse;
  getNotificationsIdList: T.GetNotificationsIdListResponse;
  getNotificationsIdMember: T.GetNotificationsIdMemberResponse;
  getNotificationsIdMemberCreator: T.GetNotificationsIdMemberCreatorResponse;
  getNotificationsIdOrganization: T.GetNotificationsIdOrganizationResponse;
  getOrganizationsId: T.GetOrganizationsIdResponse;
  getOrganizationsIdActions: T.GetOrganizationsIdActionsResponse;
  getOrganizationsIdBoards: T.GetOrganizationsIdBoardsResponse;
  getOrganizationsIdExports: T.GetOrganizationsIdExportsResponse;
  getOrganizationsIdField: T.GetOrganizationsIdFieldResponse;
  getOrganizationsIdMembers: T.GetOrganizationsIdMembersResponse;
  getOrganizationsIdMemberships: T.GetOrganizationsIdMembershipsResponse;
  getOrganizationsIdMembershipsIdMembership: T.GetOrganizationsIdMembershipsIdMembershipResponse;
  getOrganizationsIdNewBillableGuestsIdBoard: T.GetOrganizationsIdNewBillableGuestsIdBoardResponse;
  getOrganizationsIdPluginData: T.GetOrganizationsIdPluginDataResponse;
  getOrganizationsIdTags: T.GetOrganizationsIdTagsResponse;
  getPluginsId: T.GetPluginsIdResponse;
  getPluginsIdComplianceMemberPrivacy: T.GetPluginsIdComplianceMemberPrivacyResponse;
  getSearch: T.GetSearchResponse;
  getSearchMembers: T.GetSearchMembersResponse;
  getTokensToken: T.GetTokensTokenResponse;
  getTokensTokenMember: T.GetTokensTokenMemberResponse;
  getTokensTokenWebhooks: T.GetTokensTokenWebhooksResponse;
  getTokensTokenWebhooksIdWebhook: T.GetTokensTokenWebhooksIdWebhookResponse;
  getWebhooksId: T.GetWebhooksIdResponse;
  getWebhooksIdField: T.GetWebhooksIdFieldResponse;
  postActionsIdActionReactions: T.PostActionsIdActionReactionsResponse;
  postBoards: T.PostBoardsResponse;
  postBoardsIdBoardPlugins: T.PostBoardsIdBoardPluginsResponse;
  postBoardsIdCalendarKeyGenerate: T.PostBoardsIdCalendarKeyGenerateResponse;
  postBoardsIdEmailKeyGenerate: T.PostBoardsIdEmailKeyGenerateResponse;
  postBoardsIdIdTags: T.PostBoardsIdIdTagsResponse;
  postBoardsIdLabels: T.PostBoardsIdLabelsResponse;
  postBoardsIdLists: T.PostBoardsIdListsResponse;
  postBoardsIdMarkedAsViewed: T.PostBoardsIdMarkedAsViewedResponse;
  postCards: T.PostCardsResponse;
  postCardsIdActionsComments: T.PostCardsIdActionsCommentsResponse;
  postCardsIdAttachments: T.PostCardsIdAttachmentsResponse;
  postCardsIdChecklists: T.PostCardsIdChecklistsResponse;
  postCardsIdIdLabels: T.PostCardsIdIdLabelsResponse;
  postCardsIdIdMembers: T.PostCardsIdIdMembersResponse;
  postCardsIdLabels: T.PostCardsIdLabelsResponse;
  postCardsIdMarkAssociatedNotificationsRead: T.PostCardsIdMarkAssociatedNotificationsReadResponse;
  postCardsIdMembersVoted: T.PostCardsIdMembersVotedResponse;
  postCardsIdStickers: T.PostCardsIdStickersResponse;
  postChecklists: T.PostChecklistsResponse;
  postChecklistsIdCheckItems: T.PostChecklistsIdCheckItemsResponse;
  postCustomFields: T.PostCustomFieldsResponse;
  postCustomFieldsIdOptions: T.PostCustomFieldsIdOptionsResponse;
  postEnterprisesIdTokens: T.PostEnterprisesIdTokensResponse;
  postLabels: T.PostLabelsResponse;
  postLists: T.PostListsResponse;
  postListsIdArchiveAllCards: T.PostListsIdArchiveAllCardsResponse;
  postListsIdMoveAllCards: T.PostListsIdMoveAllCardsResponse;
  postMembersIdAvatar: T.PostMembersIdAvatarResponse;
  postMembersIdBoardBackgrounds: T.PostMembersIdBoardBackgroundsResponse;
  postMembersIdBoardStars: T.PostMembersIdBoardStarsResponse;
  postMembersIdCustomBoardBackgrounds: T.PostMembersIdCustomBoardBackgroundsResponse;
  postMembersIdCustomEmoji: T.PostMembersIdCustomEmojiResponse;
  postMembersIdCustomStickers: T.PostMembersIdCustomStickersResponse;
  postMembersIdOneTimeMessagesDismissed: T.PostMembersIdOneTimeMessagesDismissedResponse;
  postMembersIdSavedSearches: T.PostMembersIdSavedSearchesResponse;
  postNotificationsAllRead: T.PostNotificationsAllReadResponse;
  postOrganizations: T.PostOrganizationsResponse;
  postOrganizationsIdExports: T.PostOrganizationsIdExportsResponse;
  postOrganizationsIdLogo: T.PostOrganizationsIdLogoResponse;
  postOrganizationsIdTags: T.PostOrganizationsIdTagsResponse;
  postPluginsIdPluginListing: T.PostPluginsIdPluginListingResponse;
  postTokensTokenWebhooks: T.PostTokensTokenWebhooksResponse;
  postWebhooks: T.PostWebhooksResponse;
  putActionsId: T.PutActionsIdResponse;
  putActionsIdText: T.PutActionsIdTextResponse;
  putBoardsId: T.PutBoardsIdResponse;
  putBoardsIdMembers: T.PutBoardsIdMembersResponse;
  putBoardsIdMembershipsIdMembership: T.PutBoardsIdMembershipsIdMembershipResponse;
  putBoardsIdMembersIdMember: T.PutBoardsIdMembersIdMemberResponse;
  putBoardsIdMyPrefsEmailPosition: T.PutBoardsIdMyPrefsEmailPositionResponse;
  putBoardsIdMyPrefsIdEmailList: T.PutBoardsIdMyPrefsIdEmailListResponse;
  putBoardsIdMyPrefsShowSidebar: T.PutBoardsIdMyPrefsShowSidebarResponse;
  putBoardsIdMyPrefsShowSidebarActivity: T.PutBoardsIdMyPrefsShowSidebarActivityResponse;
  putBoardsIdMyPrefsShowSidebarBoardActions: T.PutBoardsIdMyPrefsShowSidebarBoardActionsResponse;
  putBoardsIdMyPrefsShowSidebarMembers: T.PutBoardsIdMyPrefsShowSidebarMembersResponse;
  putCardsId: T.PutCardsIdResponse;
  putCardsIdActionsIdActionComments: T.PutCardsIdActionsIdActionCommentsResponse;
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItem: T.PutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemResponse;
  putCardsIdCardCustomFieldIdCustomFieldItem: T.PutCardsIdCardCustomFieldIdCustomFieldItemResponse;
  putCardsIdCardCustomFields: T.PutCardsIdCardCustomFieldsResponse;
  putCardsIdCheckItemIdCheckItem: T.PutCardsIdCheckItemIdCheckItemResponse;
  putCardsIdStickersIdSticker: T.PutCardsIdStickersIdStickerResponse;
  putChecklistsId: T.PutChecklistsIdResponse;
  putChecklistsIdField: T.PutChecklistsIdFieldResponse;
  putCustomFieldsId: T.PutCustomFieldsIdResponse;
  putEnterprisesIdAdminsIdMember: T.PutEnterprisesIdAdminsIdMemberResponse;
  putEnterprisesIdEnterpriseJoinRequestBulk: T.PutEnterprisesIdEnterpriseJoinRequestBulkResponse;
  putEnterprisesIdMembersIdMemberDeactivated: T.PutEnterprisesIdMembersIdMemberDeactivatedResponse;
  putEnterprisesIdMembersIdMemberLicensed: T.PutEnterprisesIdMembersIdMemberLicensedResponse;
  putEnterprisesIdOrganizations: T.PutEnterprisesIdOrganizationsResponse;
  putLabelsId: T.PutLabelsIdResponse;
  putLabelsIdField: T.PutLabelsIdFieldResponse;
  putListsId: T.PutListsIdResponse;
  putListsIdClosed: T.PutListsIdClosedResponse;
  putListsIdField: T.PutListsIdFieldResponse;
  putListsIdIdBoard: T.PutListsIdIdBoardResponse;
  putMembersId: T.PutMembersIdResponse;
  putMembersIdBoardBackgroundsIdBackground: T.PutMembersIdBoardBackgroundsIdBackgroundResponse;
  putMembersIdBoardStarsIdStar: T.PutMembersIdBoardStarsIdStarResponse;
  putMembersIdCustomBoardBackgroundsIdBackground: T.PutMembersIdCustomBoardBackgroundsIdBackgroundResponse;
  putMembersIdNotificationsChannelSettings: T.PutMembersIdNotificationsChannelSettingsResponse;
  putMembersIdNotificationsChannelSettingsChannel: T.PutMembersIdNotificationsChannelSettingsChannelResponse;
  putMembersIdNotificationsChannelSettingsChannelBlockedKeys: T.PutMembersIdNotificationsChannelSettingsChannelBlockedKeysResponse;
  putMembersIdSavedSearchesIdSearch: T.PutMembersIdSavedSearchesIdSearchResponse;
  putNotificationsId: T.PutNotificationsIdResponse;
  putNotificationsIdUnread: T.PutNotificationsIdUnreadResponse;
  putOrganizationsId: T.PutOrganizationsIdResponse;
  putOrganizationsIdMembers: T.PutOrganizationsIdMembersResponse;
  putOrganizationsIdMembersIdMember: T.PutOrganizationsIdMembersIdMemberResponse;
  putOrganizationsIdMembersIdMemberDeactivated: T.PutOrganizationsIdMembersIdMemberDeactivatedResponse;
  putPluginsId: T.PutPluginsIdResponse;
  putPluginsIdPluginListingsIdListing: T.PutPluginsIdPluginListingsIdListingResponse;
  putTokensTokenWebhooksIdWebhook: T.PutTokensTokenWebhooksIdWebhookResponse;
  putWebhooksId: T.PutWebhooksIdResponse;
}

export type OperationParams<K extends OperationId> = OperationParamMap[K];
export type OperationResponse<K extends OperationId> = OperationResponseMap[K];
export type OperationArgs<K extends OperationId> = keyof OperationParams<K> extends never
  ? [params?: OperationParams<K>]
  : [params: OperationParams<K>];
