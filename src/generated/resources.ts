// GENERATED — DO NOT EDIT BY HAND
// openapi.json sha256: 41872ac13249429d
// Source: openapi.json
// Run `pnpm codegen` to regenerate

import type { CollectionBuilder } from "../builders/collection.js";
import type { JobHandle } from "../core/queue/queue.js";
import type * as T from "./types.js";

export interface ActionsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteActionsIdParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetActionsIdParams>): Promise<T.GetActionsIdResponse>;
  update(id: T.TrelloID, params: Partial<T.PutActionsIdParams>): Promise<JobHandle<T.PutActionsIdResponse>>;
  reactions(): CollectionBuilder<T.GetActionsIdActionReactionsResponse, T.GetActionsIdActionReactionsParams>;
  reactionsSummary(): CollectionBuilder<T.GetActionsIdActionReactionsSummaryResponse, T.GetActionsIdActionReactionsSummaryParams>;
  board(): CollectionBuilder<T.GetActionsIdBoardResponse, T.GetActionsIdBoardParams>;
  card(): CollectionBuilder<T.GetActionsIdCardResponse, T.GetActionsIdCardParams>;
  list(): CollectionBuilder<T.GetActionsIdListResponse, T.GetActionsIdListParams>;
  member(): CollectionBuilder<T.GetActionsIdMemberResponse, T.GetActionsIdMemberParams>;
  memberCreator(): CollectionBuilder<T.GetActionsIdMemberCreatorResponse, T.GetActionsIdMemberCreatorParams>;
  organization(): CollectionBuilder<T.GetActionsIdOrganizationResponse, T.GetActionsIdOrganizationParams>;
}

export interface BoardsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteBoardsIdParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetBoardsIdParams>): Promise<T.GetBoardsIdResponse>;
  create(params: T.PostBoardsParams): Promise<JobHandle<T.PostBoardsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutBoardsIdParams>): Promise<JobHandle<T.PutBoardsIdResponse>>;
  boardPlugins(): CollectionBuilder<T.GetBoardsIdBoardPluginsResponse, T.GetBoardsIdBoardPluginsParams>;
  members(): CollectionBuilder<T.GetBoardsIdMembersResponse, T.GetBoardsIdMembersParams>;
  actions(): CollectionBuilder<T.GetBoardsBoardIdActionsResponse, T.GetBoardsBoardIdActionsParams>;
  boardStars(): CollectionBuilder<T.GetBoardsBoardIdBoardStarsResponse, T.GetBoardsBoardIdBoardStarsParams>;
  cards(): CollectionBuilder<T.GetBoardsIdCardsResponse, T.GetBoardsIdCardsParams>;
  checklists(): CollectionBuilder<T.GetBoardsIdChecklistsResponse, T.GetBoardsIdChecklistsParams>;
  customFields(): CollectionBuilder<T.GetBoardsIdCustomFieldsResponse, T.GetBoardsIdCustomFieldsParams>;
  labels(): CollectionBuilder<T.GetBoardsIdLabelsResponse, T.GetBoardsIdLabelsParams>;
  lists(): CollectionBuilder<T.GetBoardsIdListsResponse, T.GetBoardsIdListsParams>;
  memberships(): CollectionBuilder<T.GetBoardsIdMembershipsResponse, T.GetBoardsIdMembershipsParams>;
  plugins(): CollectionBuilder<T.GetBoardsIdPluginsResponse, T.GetBoardsIdPluginsParams>;
}

export interface CardsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteCardsIdParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetCardsIdParams>): Promise<T.GetCardsIdResponse>;
  create(params: T.PostCardsParams): Promise<JobHandle<T.PostCardsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutCardsIdParams>): Promise<JobHandle<T.PutCardsIdResponse>>;
  actions(): CollectionBuilder<T.GetCardsIdActionsResponse, T.GetCardsIdActionsParams>;
  attachments(): CollectionBuilder<T.GetCardsIdAttachmentsResponse, T.GetCardsIdAttachmentsParams>;
  checkItem(): CollectionBuilder<T.GetCardsIdCheckItemIdCheckItemResponse, T.GetCardsIdCheckItemIdCheckItemParams>;
  checklists(): CollectionBuilder<T.GetCardsIdChecklistsResponse, T.GetCardsIdChecklistsParams>;
  membersVoted(): CollectionBuilder<T.GetCardsIdMembersVotedResponse, T.GetCardsIdMembersVotedParams>;
  stickers(): CollectionBuilder<T.GetCardsIdStickersResponse, T.GetCardsIdStickersParams>;
  board(): CollectionBuilder<T.GetCardsIdBoardResponse, T.GetCardsIdBoardParams>;
  checkItemStates(): CollectionBuilder<T.GetCardsIdCheckItemStatesResponse, T.GetCardsIdCheckItemStatesParams>;
  customFieldItems(): CollectionBuilder<T.GetCardsIdCustomFieldItemsResponse, T.GetCardsIdCustomFieldItemsParams>;
  list(): CollectionBuilder<T.GetCardsIdListResponse, T.GetCardsIdListParams>;
  members(): CollectionBuilder<T.GetCardsIdMembersResponse, T.GetCardsIdMembersParams>;
  pluginData(): CollectionBuilder<T.GetCardsIdPluginDataResponse, T.GetCardsIdPluginDataParams>;
}

export interface ChecklistsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteChecklistsIdParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetChecklistsIdParams>): Promise<T.GetChecklistsIdResponse>;
  create(params: T.PostChecklistsParams): Promise<JobHandle<T.PostChecklistsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutChecklistsIdParams>): Promise<JobHandle<T.PutChecklistsIdResponse>>;
  checkItems(): CollectionBuilder<T.GetChecklistsIdCheckItemsResponse, T.GetChecklistsIdCheckItemsParams>;
  board(): CollectionBuilder<T.GetChecklistsIdBoardResponse, T.GetChecklistsIdBoardParams>;
  cards(): CollectionBuilder<T.GetChecklistsIdCardsResponse, T.GetChecklistsIdCardsParams>;
}

export interface CustomFieldsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteCustomFieldsIdParams>): Promise<JobHandle<void>>;
  get(params: Partial<T.GetCustomFieldsIdParams>): Promise<T.GetCustomFieldsIdResponse>;
  create(params: T.PostCustomFieldsParams): Promise<JobHandle<T.PostCustomFieldsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutCustomFieldsIdParams>): Promise<JobHandle<T.PutCustomFieldsIdResponse>>;
  options(): CollectionBuilder<T.GetCustomFieldsIdOptionsResponse, T.GetCustomFieldsIdOptionsParams>;
}

export interface EnterprisesResource {
  get(params?: Partial<T.GetEnterprisesIdParams>): Promise<T.GetEnterprisesIdResponse>;
  admins(): CollectionBuilder<T.GetEnterprisesIdAdminsResponse, T.GetEnterprisesIdAdminsParams>;
  organizations(): CollectionBuilder<T.GetEnterprisesIdOrganizationsResponse, T.GetEnterprisesIdOrganizationsParams>;
  auditlog(): CollectionBuilder<T.GetEnterprisesIdAuditlogResponse, T.GetEnterprisesIdAuditlogParams>;
  claimableOrganizations(): CollectionBuilder<T.GetEnterprisesIdClaimableOrganizationsResponse, T.GetEnterprisesIdClaimableOrganizationsParams>;
  members(): CollectionBuilder<T.GetEnterprisesIdMembersResponse, T.GetEnterprisesIdMembersParams>;
  pendingOrganizations(): CollectionBuilder<T.GetEnterprisesIdPendingOrganizationsResponse, T.GetEnterprisesIdPendingOrganizationsParams>;
  signupUrl(): CollectionBuilder<T.GetEnterprisesIdSignupUrlResponse, T.GetEnterprisesIdSignupUrlParams>;
  transferrable(): CollectionBuilder<T.GetEnterprisesIdTransferrableBulkIdOrganizationsResponse, T.GetEnterprisesIdTransferrableBulkIdOrganizationsParams>;
}

export interface LabelsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteLabelsIdParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetLabelsIdParams>): Promise<T.GetLabelsIdResponse>;
  create(params: T.PostLabelsParams): Promise<JobHandle<T.PostLabelsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutLabelsIdParams>): Promise<JobHandle<T.PutLabelsIdResponse>>;
}

export interface MembersResource {
  get(params?: Partial<T.GetMembersIdParams>): Promise<T.GetMembersIdResponse>;
  update(id: T.TrelloID, params: Partial<T.PutMembersIdParams>): Promise<JobHandle<T.PutMembersIdResponse>>;
  boardBackgrounds(): CollectionBuilder<T.GetMembersIdBoardBackgroundsResponse, T.GetMembersIdBoardBackgroundsParams>;
  boardStars(): CollectionBuilder<T.GetMembersIdBoardStarsResponse, T.GetMembersIdBoardStarsParams>;
  customBoardBackgrounds(): CollectionBuilder<T.GetMembersIdCustomBoardBackgroundsResponse, T.GetMembersIdCustomBoardBackgroundsParams>;
  customStickers(): CollectionBuilder<T.GetMembersIdCustomStickersResponse, T.GetMembersIdCustomStickersParams>;
  savedSearches(): CollectionBuilder<T.GetMembersIdSavedSearchesResponse, T.GetMembersIdSavedSearchesParams>;
  actions(): CollectionBuilder<T.GetMembersIdActionsResponse, T.GetMembersIdActionsParams>;
  boards(): CollectionBuilder<T.GetMembersIdBoardsResponse, T.GetMembersIdBoardsParams>;
  boardsInvited(): CollectionBuilder<T.GetMembersIdBoardsInvitedResponse, T.GetMembersIdBoardsInvitedParams>;
  cards(): CollectionBuilder<T.GetMembersIdCardsResponse, T.GetMembersIdCardsParams>;
  customEmoji(): CollectionBuilder<T.GetMembersIdCustomEmojiResponse, T.GetMembersIdCustomEmojiParams>;
  notifications(): CollectionBuilder<T.GetMembersIdNotificationsResponse, T.GetMembersIdNotificationsParams>;
  notificationsChannelSettings(): CollectionBuilder<T.GetMembersIdNotificationsChannelSettingsResponse, T.GetMembersIdNotificationsChannelSettingsParams>;
  organizations(): CollectionBuilder<T.GetMembersIdOrganizationsResponse, T.GetMembersIdOrganizationsParams>;
  organizationsInvited(): CollectionBuilder<T.GetMembersIdOrganizationsInvitedResponse, T.GetMembersIdOrganizationsInvitedParams>;
  tokens(): CollectionBuilder<T.GetMembersIdTokensResponse, T.GetMembersIdTokensParams>;
}

export interface OrganizationsResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteOrganizationsIdParams>): Promise<JobHandle<void>>;
  get(params: Partial<T.GetOrganizationsIdParams>): Promise<T.GetOrganizationsIdResponse>;
  create(params: T.PostOrganizationsParams): Promise<JobHandle<T.PostOrganizationsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutOrganizationsIdParams>): Promise<JobHandle<T.PutOrganizationsIdResponse>>;
  members(): CollectionBuilder<T.GetOrganizationsIdMembersResponse, T.GetOrganizationsIdMembersParams>;
  tags(): CollectionBuilder<T.GetOrganizationsIdTagsResponse, T.GetOrganizationsIdTagsParams>;
  actions(): CollectionBuilder<T.GetOrganizationsIdActionsResponse, T.GetOrganizationsIdActionsParams>;
  boards(): CollectionBuilder<T.GetOrganizationsIdBoardsResponse, T.GetOrganizationsIdBoardsParams>;
  exports(): CollectionBuilder<T.GetOrganizationsIdExportsResponse, T.GetOrganizationsIdExportsParams>;
  memberships(): CollectionBuilder<T.GetOrganizationsIdMembershipsResponse, T.GetOrganizationsIdMembershipsParams>;
  newBillableGuests(): CollectionBuilder<T.GetOrganizationsIdNewBillableGuestsIdBoardResponse, T.GetOrganizationsIdNewBillableGuestsIdBoardParams>;
  pluginData(): CollectionBuilder<T.GetOrganizationsIdPluginDataResponse, T.GetOrganizationsIdPluginDataParams>;
}

export interface TokensResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteTokensTokenParams>): Promise<JobHandle<void>>;
  get(params?: Partial<T.GetTokensTokenParams>): Promise<T.GetTokensTokenResponse>;
  webhooks(): CollectionBuilder<T.GetTokensTokenWebhooksResponse, T.GetTokensTokenWebhooksParams>;
  member(): CollectionBuilder<T.GetTokensTokenMemberResponse, T.GetTokensTokenMemberParams>;
}

export interface WebhooksResource {
  delete_(id: T.TrelloID, params: Partial<T.DeleteWebhooksIdParams>): Promise<JobHandle<void>>;
  get(params: Partial<T.GetWebhooksIdParams>): Promise<T.GetWebhooksIdResponse>;
  create(params: T.PostWebhooksParams): Promise<JobHandle<T.PostWebhooksResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutWebhooksIdParams>): Promise<JobHandle<T.PutWebhooksIdResponse>>;
}

export interface ApplicationsResource {
  compliance(): CollectionBuilder<T.GetApplicationsKeyComplianceResponse, T.GetApplicationsKeyComplianceParams>;
}

export interface BatchResource {
  get(params?: Partial<T.GetBatchParams>): Promise<T.GetBatchResponse>;
}

export interface EmojiResource {
  get(params?: Partial<T.GetEmojiParams>): Promise<T.GetEmojiResponse>;
}

export interface ListsResource {
  get(params?: Partial<T.GetListsIdParams>): Promise<T.GetListsIdResponse>;
  create(params: T.PostListsParams): Promise<JobHandle<T.PostListsResponse>>;
  update(id: T.TrelloID, params: Partial<T.PutListsIdParams>): Promise<JobHandle<T.PutListsIdResponse>>;
  actions(): CollectionBuilder<T.GetListsIdActionsResponse, T.GetListsIdActionsParams>;
  board(): CollectionBuilder<T.GetListsIdBoardResponse, T.GetListsIdBoardParams>;
  cards(): CollectionBuilder<T.GetListsIdCardsResponse, T.GetListsIdCardsParams>;
}

export interface NotificationsResource {
  get(params?: Partial<T.GetNotificationsIdParams>): Promise<T.GetNotificationsIdResponse>;
  update(id: T.TrelloID, params: Partial<T.PutNotificationsIdParams>): Promise<JobHandle<T.PutNotificationsIdResponse>>;
  board(): CollectionBuilder<T.GetNotificationsIdBoardResponse, T.GetNotificationsIdBoardParams>;
  card(): CollectionBuilder<T.GetNotificationsIdCardResponse, T.GetNotificationsIdCardParams>;
  list(): CollectionBuilder<T.GetNotificationsIdListResponse, T.GetNotificationsIdListParams>;
  member(): CollectionBuilder<T.GetNotificationsIdMemberResponse, T.GetNotificationsIdMemberParams>;
  memberCreator(): CollectionBuilder<T.GetNotificationsIdMemberCreatorResponse, T.GetNotificationsIdMemberCreatorParams>;
  organization(): CollectionBuilder<T.GetNotificationsIdOrganizationResponse, T.GetNotificationsIdOrganizationParams>;
}

export interface PluginsResource {
  get(params: Partial<T.GetPluginsIdParams>): Promise<T.GetPluginsIdResponse>;
  update(id: T.TrelloID, params: Partial<T.PutPluginsIdParams>): Promise<JobHandle<T.PutPluginsIdResponse>>;
  compliance(): CollectionBuilder<T.GetPluginsIdComplianceMemberPrivacyResponse, T.GetPluginsIdComplianceMemberPrivacyParams>;
}

export interface SearchResource {
  get(params?: Partial<T.GetSearchParams>): Promise<T.GetSearchResponse>;
  get(params?: Partial<T.GetSearchMembersParams>): Promise<T.GetSearchMembersResponse>;
}

export interface ResourceMap {
  actions: ActionsResource;
  boards: BoardsResource;
  cards: CardsResource;
  checklists: ChecklistsResource;
  customfields: CustomFieldsResource;
  enterprises: EnterprisesResource;
  labels: LabelsResource;
  members: MembersResource;
  organizations: OrganizationsResource;
  tokens: TokensResource;
  webhooks: WebhooksResource;
  applications: ApplicationsResource;
  batch: BatchResource;
  emoji: EmojiResource;
  lists: ListsResource;
  notifications: NotificationsResource;
  plugins: PluginsResource;
  search: SearchResource;
}
