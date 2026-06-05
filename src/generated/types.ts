// GENERATED — DO NOT EDIT BY HAND
// openapi.json sha256: 41872ac13249429d
// Source: openapi.json
// Run `pnpm codegen` to regenerate

// ─── Primitive aliases ────────────────────────────────────────────────────

/** A 24-character hex Trello resource ID. */
export type TrelloID = string;

/** Position: "top", "bottom", or a floating-point number. */
export type PosStringOrNumber = "top" | "bottom" | number;

// ─── Schemas ──────────────────────────────────────────────────────────────

export type Action = {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
};

export type ActionFields = "id" | "idMemberCreator" | "data" | "type" | "date" | "limits" | "display" | "memberCreator";

export type Attachment = {
  id?: string;
  bytes?: string | null;
  date?: string;
  edgeColor?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idMember?: string;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
};

export type AttachmentFields = "id" | "bytes" | "date" | "edgeColor" | "idMember" | "isUpload" | "mimeType" | "name" | "previews" | "url" | "pos";

/**
 * @example "notification_comment_card"
 */
export type BlockedKey = "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card";

export type Board = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};

export type BoardBackground = {
  id?: string;
};

export type BoardFields = "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";

export type BoardStars = {
  id?: string;
  idBoard?: string;
  pos?: number;
};

export type CFValue = {
  number?: string;
};

export type Card = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

export type CardAging = "pirate" | "regular";

/** The fields on a Card. */
export type CardFields = "id" | "address" | "badges" | "checkItemStates" | "closed" | "coordinates" | "creationMethod" | "dueComplete" | "dateLastActivity" | "desc" | "descData" | "due" | "dueReminder" | "idBoard" | "idChecklists" | "idLabels" | "idList" | "idMembers" | "idMembersVoted" | "idShort" | "idAttachmentCover" | "labels" | "limits" | "locationName" | "manualCoverAttachment" | "name" | "pos" | "shortLink" | "shortUrl" | "subscribed" | "url" | "cover" | "isTemplate";

/**
 * @example "email"
 */
export type Channel = "email";

export type CheckItem = {
  idChecklist?: string;
  state?: "complete" | "incomplete";
  id?: string;
  name?: string;
  nameData?: string | null;
  pos?: string;
};

export type Checklist = {
  id?: string;
};

export type ClaimableOrganizations = {
  organizations?: {
  name?: string;
  displayName?: string;
  activeMembershipCount?: number;
  idActiveAdmins?: string[];
  products?: number[];
  id?: string;
  logoUrl?: string | null;
  /** The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null. */
  dateLastActive?: string | null;
}[];
  claimableCount?: number;
};

export type Color = "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;

export type CustomEmoji = {
  id?: string;
  url?: string;
  name?: string;
};

export type CustomField = {
  id?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
  fieldGroup?: string;
  display?: {
  cardFront?: boolean;
  name?: string;
  pos?: string;
  options?: {
  id?: string;
  idCustomField?: string;
  value?: {
  text?: string;
};
  color?: string;
  pos?: number;
}[];
};
  type_?: string;
};

export type CustomFieldItems = {
  id?: string;
  value?: {
  checked?: string;
};
  idCustomField?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
};

export type CustomSticker = {
  id?: string;
  url?: string;
  scaled?: {
  id?: string;
}[];
};

export type Emoji = {
  trello?: {
  unified?: string;
  name?: string;
  native?: string;
  shortName?: string;
  shortNames?: string[];
  text?: string;
  texts?: string | null;
  category?: string;
  sheetX?: number;
  sheetY?: number;
  tts?: string;
  keywords?: string[];
}[];
};

export type Enterprise = {
  id?: string;
  name?: string;
  displayName?: string;
  logoHash?: string | null;
  logoUrl?: string | null;
  prefs?: {
  ssoOnly?: boolean;
  signup?: {
  banner?: string;
  bannerHtml?: string;
};
  mandatoryTransferDate?: string | null;
  brandingColor?: string;
  autoJoinOrganizations?: boolean;
  notifications?: Record<string, unknown>;
  maxMembers?: number | null;
};
  organizationPrefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  ssoActivationFailed?: boolean;
  idAdmins?: string[];
  enterpriseDomains?: string[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: string[];
  idOrganizations?: string[];
  products?: number[];
  licenses?: {
  maxMembers?: number | null;
  totalMembers?: number;
  relatedEnterprises?: {
  name?: string;
  displayName?: string;
  count?: number;
}[];
};
  domains?: string[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
  requestSigned?: boolean;
  certificate?: string | null;
  loginUrl?: string | null;
};
};

export type EnterpriseAdmin = {
  id?: string;
  fullName?: string;
  username?: string;
};

export type EnterpriseAuditLog = {
  idAction?: string;
  type_?: string;
  date?: string;
  memberCreator?: {
  id?: string;
  username?: string;
  fullName?: string;
};
  organization?: {
  enterpriseJoinRequest?: {
  idEnterprise?: string;
  idMember?: string;
  date?: string;
} | null;
  id?: string;
  name?: string;
};
  member?: {
  id?: string;
  username?: string;
  fullName?: string;
};
};

export type Error = {
  code: string;
  message: string;
};

export type Export = {
  id?: string;
  status?: {
  attempts?: number;
  finished?: boolean;
  stage?: string;
};
  startedAt?: string;
  size?: string | null;
  exportUrl?: string | null;
};

export type ImageDescriptor = {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
};

export type Label = {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
};

export type Limits = {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};

export type LimitsObject = {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};

export type ListFields = "id";

export type Member = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

export type MemberFields = "id";

export type MemberPrefs = {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};

export type Membership = {
  managed?: boolean;
  licensed?: boolean;
  admin?: boolean;
  deactivated?: boolean;
  collaborator?: boolean;
  member?: {
  id?: string;
  fullname?: string;
  username?: string;
  dateLastImpression?: string;
  email?: string;
  initials?: string;
  avatarURL?: string;
  memberType?: string;
  confirmed?: boolean;
};
};

export type Memberships = {
  id?: string;
};

export type Notification = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

export type NotificationChannelSettings = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
};

export type NotificationFields = "id" | "unread" | "type" | "date" | "dateRead" | "data" | "card" | "board" | "idMemberCreator" | "idAction" | "reactions";

export type Organization = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

export type OrganizationFields = "id" | "name";

export type OrganizationPrefs = {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};

export type PendingOrganizations = {
  id?: string;
  idMember?: string;
  memberRequestor?: {
  id?: string;
  fullName?: string;
};
  date?: string;
  displayName?: string;
  membershipCount?: number;
  logoUrl?: string | null;
  transferability?: {
  transferrable?: boolean;
  newBillableMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
  restrictedMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
};
};

export type Plugin = {
  id?: string;
};

export type PluginData = {
  id?: string;
  idPlugin?: string;
  scope?: "member" | "board" | "organization" | "card";
  idModel?: string;
  value?: string;
  access?: "private" | "shared";
};

export type PluginListing = {
  id?: string;
  name?: string;
  locale?: string;
  description?: string;
  overview?: string;
};

export type Prefs = {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};

export type SavedSearch = {
  id?: string;
  name?: string;
  query?: string;
  pos?: "top" | "bottom" | number;
};

export type Tag = {
  id?: string;
  name?: string;
};

export type Token = {
  id?: string;
  identifier?: string;
  idMember?: string;
  dateCreated?: string;
  dateExpires?: string | null;
  permissions?: {
  idModel?: string | "*";
  modelType?: "board" | "member" | "organization" | "enterprise";
  read?: boolean;
  write?: boolean;
}[];
};

export type TokenFields = "identifier" | "idMember" | "dateCreated" | "dateExpires" | "permissions";

export type TokenPermission = {
  idModel?: string | "*";
  modelType?: "board" | "member" | "organization" | "enterprise";
  read?: boolean;
  write?: boolean;
};

export type TransferrableOrganization = {
  transferrable?: boolean;
  newBillableMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
  restrictedMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
};

export type TrelloList = {
  id?: string;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
};

export type ViewFilter = "all" | "closed" | "none" | "open";

export type Webhook = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

export type customFieldItemValue = {
  value?: Record<string, unknown>;
};

// ─── Operation parameter types ────────────────────────────────────────────

/**
 * Get an Action
 */
export interface GetActionsIdParams {
  /** The ID of the Action */
  id: string;
  display?: boolean;
  entities?: boolean;
  /**
   * `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)
   */
  fields?: string;
  member?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  member_fields?: string;
  /**
   * Whether to include the member object for the creator of the action
   */
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreator_fields?: string;
}

export type GetActionsIdResponse = void;

/**
 * Update an Action
 * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
 */
export interface PutActionsIdParams {
  /** The ID of the Action */
  id: string;
  /**
   * The new text for the comment
   */
  text: string;
}

export type PutActionsIdResponse = void;

/**
 * Delete an Action
 * Delete a specific action. Only comment actions can be deleted.
 */
export interface DeleteActionsIdParams {
  /** The ID of the Action */
  id: string;
}

export type DeleteActionsIdResponse = void;

/**
 * Get a specific field on an Action
 * Get a specific property of an action
 */
export interface GetActionsIdFieldParams {
  /** The ID of the Action */
  id: string;
  /** An action field */
  field: "id" | "idMemberCreator" | "data" | "type" | "date" | "limits" | "display" | "memberCreator";
}

export type GetActionsIdFieldResponse = {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
};

/**
 * Get the Board for an Action
 */
export interface GetActionsIdBoardParams {
  /** The ID of the action */
  id: string;
  /**
   * `all` or a comma-separated list of board fields
   */
  fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
}

export type GetActionsIdBoardResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};

/**
 * Get the Card for an Action
 * Get the card for an action
 */
export interface GetActionsIdCardParams {
  /** The ID of the action */
  id: string;
  /**
   * `all` or a comma-separated list of card fields
   */
  fields?: "id" | "address" | "badges" | "checkItemStates" | "closed" | "coordinates" | "creationMethod" | "dueComplete" | "dateLastActivity" | "desc" | "descData" | "due" | "dueReminder" | "idBoard" | "idChecklists" | "idLabels" | "idList" | "idMembers" | "idMembersVoted" | "idShort" | "idAttachmentCover" | "labels" | "limits" | "locationName" | "manualCoverAttachment" | "name" | "pos" | "shortLink" | "shortUrl" | "subscribed" | "url" | "cover" | "isTemplate";
}

export type GetActionsIdCardResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Get the List for an Action
 */
export interface GetActionsIdListParams {
  /** The ID of the action */
  id: string;
  /**
   * `all` or a comma-separated list of list fields
   */
  fields?: "id";
}

export type GetActionsIdListResponse = {
  id?: string;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
};

/**
 * Get the Member of an Action
 * Gets the member of an action (not the creator)
 */
export interface GetActionsIdMemberParams {
  /** The ID of the Action */
  id: string;
  /**
   * `all` or a comma-separated list of member fields
   */
  fields?: "id";
}

export type GetActionsIdMemberResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get the Member Creator of an Action
 * Get the Member who created the Action
 */
export interface GetActionsIdMemberCreatorParams {
  /** The ID of the Action */
  id: string;
  /**
   * `all` or a comma-separated list of member fields
   */
  fields?: "id";
}

export type GetActionsIdMemberCreatorResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get the Organization of an Action
 */
export interface GetActionsIdOrganizationParams {
  /** The ID of the action */
  id: string;
  /**
   * `all` or a comma-separated list of organization fields
   */
  fields?: "id" | "name";
}

export type GetActionsIdOrganizationResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Update a Comment Action
 * Update a comment action
 */
export interface PutActionsIdTextParams {
  /** The ID of the action to update */
  id: string;
  /**
   * The new text for the comment
   */
  value: string;
}

export type PutActionsIdTextResponse = void;

/**
 * Get Action's Reactions
 * List reactions for an action
 */
export interface GetActionsIdActionReactionsParams {
  /** The ID of the action */
  idAction: string;
  /**
   * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
   */
  member?: boolean;
  /**
   * Whether to load the emoji as a nested resource.
   */
  emoji?: boolean;
}

export type GetActionsIdActionReactionsResponse = void;

/**
 * Create Reaction for Action
 * Adds a new reaction to an action
 */
export interface PostActionsIdActionReactionsParams {
  /** The ID of the action */
  idAction: string;
  /** The primary `shortName` of the emoji to add. See [/emoji](#emoji) */
  shortName?: string;
  /** The `skinVariation` of the emoji to add. See [/emoji](#emoji) */
  skinVariation?: string;
  /** The emoji to add as a native unicode emoji. See [/emoji](#emoji) */
  native?: string;
  /** The `unified` value of the emoji to add. See [/emoji](#emoji) */
  unified?: string;
}

export type PostActionsIdActionReactionsResponse = void;

/**
 * Get Action's Reaction
 * Get information for a reaction
 */
export interface GetActionsIdActionReactionsIdParams {
  /** The ID of the Action */
  idAction: string;
  /** The ID of the reaction */
  id: string;
  /**
   * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
   */
  member?: boolean;
  /**
   * Whether to load the emoji as a nested resource.
   */
  emoji?: boolean;
}

export type GetActionsIdActionReactionsIdResponse = void;

/**
 * Delete Action's Reaction
 * Deletes a reaction
 */
export interface DeleteActionsIdActionReactionsIdParams {
  /** The ID of the Action */
  idAction: string;
  /** The ID of the reaction */
  id: string;
}

export type DeleteActionsIdActionReactionsIdResponse = void;

/**
 * List Action's summary of Reactions
 * List a summary of all reactions for an action
 */
export interface GetActionsIdActionReactionsSummaryParams {
  /** The ID of the action */
  idAction: string;
}

export type GetActionsIdActionReactionsSummaryResponse = void;

/**
 * Get Application's compliance data
 */
export interface GetApplicationsKeyComplianceParams {
  key: string;
}

export type GetApplicationsKeyComplianceResponse = void;

/**
 * Batch Requests
 * Make up to 10 GET requests in a single, batched API call.
 */
export interface GetBatchParams {
  /**
   * A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
   */
  urls: string;
}

export type GetBatchResponse = void;

/**
 * Get Memberships of a Board
 * Get information about the memberships users have to the board.
 */
export interface GetBoardsIdMembershipsParams {
  /** The ID of the board */
  id: string;
  /**
   * One of `admins`, `all`, `none`, `normal`
   */
  filter?: "admins" | "all" | "none" | "normal";
  /**
   * Works for premium organizations only.
   */
  activity?: boolean;
  /**
   * Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
   */
  orgMemberType?: boolean;
  /**
   * Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
   */
  member?: boolean;
  /**
   * Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
   */
  member_fields?: "id";
}

export type GetBoardsIdMembershipsResponse = {
  id?: string;
};

/**
 * Get a Board
 * Request a single board.
 */
export interface GetBoardsIdParams {
  id: string;
  /**
   * This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  actions?: string;
  /**
   * Valid values are one of: `mine` or `none`.
   */
  boardStars?: string;
  /**
   * This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  cards?: string;
  /**
   * Use with the `cards` param to include card pluginData with the response
   */
  card_pluginData?: boolean;
  /**
   * This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  checklists?: string;
  /**
   * This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
   */
  customFields?: boolean;
  /**
   * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
   */
  fields?: string;
  /**
   * This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  labels?: string;
  /**
   * This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  lists?: string;
  /**
   * This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  members?: string;
  /**
   * This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  memberships?: string;
  /**
   * Determines whether the pluginData for this board should be returned. Valid values: true or false.
   */
  pluginData?: boolean;
  /**
   * This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
   */
  organization?: boolean;
  /**
   * Use with the `organization` param to include organization pluginData with the response
   */
  organization_pluginData?: boolean;
  myPrefs?: boolean;
  /**
   * Also known as collections, tags, refer to the collection(s) that a Board belongs to.
   */
  tags?: boolean;
}

export type GetBoardsIdResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};

/**
 * Update a Board
 * Update an existing board by id
 */
export interface PutBoardsIdParams {
  id: string;
  /**
   * The new name for the board. 1 to 16384 characters long.
   */
  name?: string;
  /**
   * A new description for the board, 0 to 16384 characters long
   */
  desc?: string;
  /**
   * Whether the board is closed
   */
  closed?: boolean;
  /**
   * Whether the acting user is subscribed to the board
   */
  subscribed?: string;
  /**
   * The id of the Workspace the board should be moved to
   */
  idOrganization?: string;
  /**
   * One of: org, private, public
   */
  prefs_permissionLevel?: string;
  /**
   * Whether Workspace members can join the board themselves
   */
  prefs_selfJoin?: boolean;
  /**
   * Whether card covers should be displayed on this board
   */
  prefs_cardCovers?: boolean;
  /**
   * Determines whether the Voting Power-Up should hide who voted on cards or not.
   */
  prefs_hideVotes?: boolean;
  /**
   * Who can invite people to this board. One of: admins, members
   */
  prefs_invitations?: string;
  /**
   * Who can vote on this board. One of disabled, members, observers, org, public
   */
  prefs_voting?: string;
  /**
   * Who can comment on cards on this board. One of: disabled, members, observers, org, public
   */
  prefs_comments?: string;
  /**
   * The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
   */
  prefs_background?: string;
  /**
   * One of: pirate, regular
   */
  prefs_cardAging?: string;
  /**
   * Determines whether the calendar feed is enabled or not.
   */
  prefs_calendarFeedEnabled?: boolean;
}

export type PutBoardsIdResponse = void;

/**
 * Delete a Board
 * Delete a board.
 */
export interface DeleteBoardsIdParams {
  /** The id of the board to delete */
  id: string;
}

export type DeleteBoardsIdResponse = void;

/**
 * Get a field on a Board
 * Get a single, specific field on a board
 */
export interface GetBoardsIdFieldParams {
  /** The ID of the board. */
  id: string;
  /** The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url. */
  field: string;
}

export type GetBoardsIdFieldResponse = void;

/**
 * Get Actions of a Board
 * Get all of the actions of a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export interface GetBoardsBoardIdActionsParams {
  boardId: string;
  /**
   * The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
   */
  fields?: {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
};
  /**
   * A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
   */
  filter?: string;
  /**
   * The format of the returned Actions. Either list or count.
   */
  format?: string;
  /**
   * A comma-separated list of idModels. Only actions related to these models will be returned.
   */
  idModels?: string;
  /**
   * The limit of the number of responses, between 0 and 1000.
   */
  limit?: number;
  /**
   * Whether to return the member object for each action.
   */
  member?: boolean;
  /**
   * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
   */
  member_fields?: string;
  /**
   * Whether to return the memberCreator object for each action.
   */
  memberCreator?: boolean;
  /**
   * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
   */
  memberCreator_fields?: string;
  /**
   * The page of results for actions.
   */
  page?: number;
  /**
   * Whether to show reactions on comments or not.
   */
  reactions?: boolean;
  /**
   * A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will be returned.
   */
  before?: string;
  /**
   * A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will be returned.
   */
  since?: string;
}

export type GetBoardsBoardIdActionsResponse = void;

/**
 * Get boardStars on a Board
 */
export interface GetBoardsBoardIdBoardStarsParams {
  boardId: string;
  /**
   * Valid values: mine, none
   */
  filter?: string;
}

export type GetBoardsBoardIdBoardStarsResponse = {
  id?: string;
  idBoard?: string;
  pos?: number;
}[];

/**
 * Get Checklists on a Board
 * Get all of the checklists on a Board.
 */
export interface GetBoardsIdChecklistsParams {
  /** The ID of the board */
  id: string;
}

export type GetBoardsIdChecklistsResponse = void;

/**
 * Get Cards on a Board
 * Get all of the open Cards on a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export interface GetBoardsIdCardsParams {
  id: string;
}

export type GetBoardsIdCardsResponse = void;

/**
 * Get filtered Cards on a Board
 * Get the Cards on a Board that match a given filter. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export interface GetBoardsIdCardsFilterParams {
  /** ID of the Board */
  id: string;
  /** One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` */
  filter: "all" | "closed" | "complete" | "incomplete" | "none" | "open" | "visible";
}

export type GetBoardsIdCardsFilterResponse = void;

/**
 * Get Custom Fields for Board
 * Get the Custom Field Definitions that exist on a board.
 */
export interface GetBoardsIdCustomFieldsParams {
  /** The ID of the board */
  id: string;
}

export type GetBoardsIdCustomFieldsResponse = {
  id?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
  fieldGroup?: string;
  display?: {
  cardFront?: boolean;
  name?: string;
  pos?: string;
  options?: {
  id?: string;
  idCustomField?: string;
  value?: {
  text?: string;
};
  color?: string;
  pos?: number;
}[];
};
  type_?: string;
}[];

/**
 * Get Labels on a Board
 * Get all of the Labels on a Board.
 */
export interface GetBoardsIdLabelsParams {
  /** The ID of the Board. */
  id: string;
  /**
   * The fields to be returned for the Labels.
   */
  fields?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
};
  /**
   * The number of Labels to be returned.
   */
  limit?: number;
}

export type GetBoardsIdLabelsResponse = void;

/**
 * Create a Label on a Board
 * Create a new Label on a Board.
 */
export interface PostBoardsIdLabelsParams {
  /** The id of the board to update */
  id: string;
  /**
   * The name of the label to be created. 1 to 16384 characters long.
   */
  name: string;
  /**
   * Sets the color of the new label. Valid values are a label color or `null`.
   */
  color: string;
}

export type PostBoardsIdLabelsResponse = void;

/**
 * Get Lists on a Board
 * Get the Lists on a Board
 */
export interface GetBoardsIdListsParams {
  /** The ID of the board */
  id: string;
  /**
   * Filter to apply to Cards.
   */
  cards?: "all" | "closed" | "none" | "open";
  /**
   * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
   */
  card_fields?: string;
  /**
   * Filter to apply to Lists
   */
  filter?: "all" | "closed" | "none" | "open";
  /**
   * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetBoardsIdListsResponse = {
  id?: string;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
}[];

/**
 * Create a List on a Board
 * Create a new List on a Board.
 */
export interface PostBoardsIdListsParams {
  /** The ID of the board */
  id: string;
  /**
   * The name of the list to be created. 1 to 16384 characters long.
   */
  name: string;
  /**
   * Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
   */
  pos?: string;
}

export type PostBoardsIdListsResponse = {
  id?: string;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
};

/**
 * Get filtered Lists on a Board
 */
export interface GetBoardsIdListsFilterParams {
  /** The ID of the board */
  id: string;
  /** One of `all`, `closed`, `none`, `open` */
  filter: "all" | "closed" | "none" | "open";
}

export type GetBoardsIdListsFilterResponse = void;

/**
 * Get the Members of a Board
 * Get the Members for a board
 */
export interface GetBoardsIdMembersParams {
  /** The ID of the board */
  id: string;
}

export type GetBoardsIdMembersResponse = void;

/**
 * Invite Member to Board via email
 * Invite a Member to a Board via their email address.
 */
export interface PutBoardsIdMembersParams {
  /** The ID of the board */
  id: string;
  /**
   * The email address of a user to add as a member of the board.
   */
  email: string;
  /**
   * Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
   */
  type_?: "admin" | "normal" | "observer";
  /** The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space. */
  fullName?: string;
}

export type PutBoardsIdMembersResponse = void;

/**
 * Add a Member to a Board
 * Add a member to the board.
 */
export interface PutBoardsIdMembersIdMemberParams {
  /** The id of the board to update */
  id: string;
  /** The id of the member to add to the board. */
  idMember: string;
  /**
   * One of: admin, normal, observer. Determines the type of member this user will be on the board.
   */
  type_: "admin" | "normal" | "observer";
  /**
   * Optional param that allows organization admins to add multi-board guests onto a board.
   */
  allowBillableGuest?: boolean;
}

export type PutBoardsIdMembersIdMemberResponse = void;

/**
 * Remove Member from Board
 */
export interface DeleteBoardsIdMembersIdMemberParams {
  /** The id of the board to update */
  id: string;
  /** The id of the member to add to the board. */
  idMember: string;
}

export type DeleteBoardsIdMembersIdMemberResponse = void;

/**
 * Update Membership of Member on a Board
 * Update an existing board by id
 */
export interface PutBoardsIdMembershipsIdMembershipParams {
  /** The id of the board to update */
  id: string;
  /** The id of a membership that should be added to this board. */
  idMembership: string;
  /**
   * One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
   */
  type_: "admin" | "normal" | "observer";
  /**
   * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
   */
  member_fields?: "all" | "avatarHash" | "bio" | "bioData" | "confirmed" | "fullName" | "idPremOrgsAdmin" | "initials" | "memberType" | "products" | "status" | "url" | "username";
}

export type PutBoardsIdMembershipsIdMembershipResponse = void;

/**
 * Update emailPosition Pref on a Board
 */
export interface PutBoardsIdMyPrefsEmailPositionParams {
  /** The id of the board to update */
  id: string;
  /**
   * Valid values: bottom, top. Determines the position of the email address.
   */
  value: "bottom" | "top";
}

export type PutBoardsIdMyPrefsEmailPositionResponse = void;

/**
 * Update idEmailList Pref on a Board
 * Change the default list that email-to-board cards are created in.
 */
export interface PutBoardsIdMyPrefsIdEmailListParams {
  /** The id of the board to update */
  id: string;
  /**
   * The id of an email list.
   */
  value: string;
}

export type PutBoardsIdMyPrefsIdEmailListResponse = void;

/**
 * Update showSidebar Pref on a Board
 */
export interface PutBoardsIdMyPrefsShowSidebarParams {
  /** The id of the board to update */
  id: string;
  /**
   * Determines whether to show the side bar.
   */
  value: boolean;
}

export type PutBoardsIdMyPrefsShowSidebarResponse = void;

/**
 * Update showSidebarActivity Pref on a Board
 */
export interface PutBoardsIdMyPrefsShowSidebarActivityParams {
  /** The id of the board to update */
  id: string;
  /**
   * Determines whether to show sidebar activity.
   */
  value: boolean;
}

export type PutBoardsIdMyPrefsShowSidebarActivityResponse = void;

/**
 * Update showSidebarBoardActions Pref on a Board
 */
export interface PutBoardsIdMyPrefsShowSidebarBoardActionsParams {
  /** The id of the board to update */
  id: string;
  /**
   * Determines whether to show the sidebar board actions.
   */
  value: boolean;
}

export type PutBoardsIdMyPrefsShowSidebarBoardActionsResponse = void;

/**
 * Update showSidebarMembers Pref on a Board
 */
export interface PutBoardsIdMyPrefsShowSidebarMembersParams {
  /** The id of the board to update */
  id: string;
  /**
   * Determines whether to show members of the board in the sidebar.
   */
  value: boolean;
}

export type PutBoardsIdMyPrefsShowSidebarMembersResponse = void;

/**
 * Create a Board
 * Create a new board.
 */
export interface PostBoardsParams {
  /**
   * The new name for the board. 1 to 16384 characters long.
   */
  name: string;
  /**
   * Determines whether to use the default set of labels.
   */
  defaultLabels?: boolean;
  /**
   * Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
   */
  defaultLists?: boolean;
  /**
   * A new description for the board, 0 to 16384 characters long
   */
  desc?: string;
  /**
   * The id or name of the Workspace the board should belong to.
   */
  idOrganization?: string;
  /**
   * The id of a board to copy into the new board.
   */
  idBoardSource?: string;
  /**
   * To keep cards from the original board pass in the value `cards`
   */
  keepFromSource?: "cards" | "none";
  /**
   * The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
   */
  powerUps?: "all" | "calendar" | "cardAging" | "recap" | "voting";
  /**
   * The permissions level of the board. One of: `org`, `private`, `public`.
   */
  prefs_permissionLevel?: "org" | "private" | "public";
  /**
   * Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs_voting?: "disabled" | "members" | "observers" | "org" | "public";
  /**
   * Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs_comments?: "disabled" | "members" | "observers" | "org" | "public";
  /**
   * Determines what types of members can invite users to join. One of: `admins`, `members`.
   */
  prefs_invitations?: "members" | "admins";
  /**
   * Determines whether users can join the boards themselves or whether they have to be invited.
   */
  prefs_selfJoin?: boolean;
  /**
   * Determines whether card covers are enabled.
   */
  prefs_cardCovers?: boolean;
  /**
   * The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
   */
  prefs_background?: "blue" | "orange" | "green" | "red" | "purple" | "pink" | "lime" | "sky" | "grey";
  /**
   * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
   */
  prefs_cardAging?: "pirate" | "regular";
}

export type PostBoardsResponse = void;

/**
 * Create a calendarKey for a Board
 * Create a new board.
 */
export interface PostBoardsIdCalendarKeyGenerateParams {
  /** The id of the board to update */
  id: string;
}

export type PostBoardsIdCalendarKeyGenerateResponse = void;

/**
 * Create a emailKey for a Board
 */
export interface PostBoardsIdEmailKeyGenerateParams {
  /** The id of the board to update */
  id: string;
}

export type PostBoardsIdEmailKeyGenerateResponse = void;

/**
 * Create a Tag for a Board
 */
export interface PostBoardsIdIdTagsParams {
  /** The id of the board to update */
  id: string;
  /**
   * The id of a tag from the organization to which this board belongs.
   */
  value: string;
}

export type PostBoardsIdIdTagsResponse = void;

/**
 * Mark Board as viewed
 */
export interface PostBoardsIdMarkedAsViewedParams {
  /** The id of the board to update */
  id: string;
}

export type PostBoardsIdMarkedAsViewedResponse = void;

/**
 * Get Enabled Power-Ups on Board
 * Get the enabled Power-Ups on a board
 */
export interface GetBoardsIdBoardPluginsParams {
  /** The ID of the Board */
  id: string;
}

export type GetBoardsIdBoardPluginsResponse = {
  id?: string;
}[];

/**
 * Enable a Power-Up on a Board
 * @deprecated
 */
export interface PostBoardsIdBoardPluginsParams {
  /** The ID of the Board */
  id: string;
  /**
   * The ID of the Power-Up to enable
   */
  idPlugin?: string;
}

export type PostBoardsIdBoardPluginsResponse = void;

/**
 * Disable a Power-Up on a Board
 * Disable a Power-Up on a board
 * @deprecated
 */
export interface DeleteBoardsIdBoardPluginsIdPluginParams {
  /** The ID of the board */
  id: string;
  /** The ID of the Power-Up to disable */
  idPlugin: string;
}

export type DeleteBoardsIdBoardPluginsIdPluginResponse = void;

/**
 * Get Power-Ups on a Board
 * List the Power-Ups on a board
 */
export interface GetBoardsIdPluginsParams {
  /** The ID of the board */
  id: string;
  /**
   * One of: `enabled` or `available`
   */
  filter?: "enabled" | "available";
}

export type GetBoardsIdPluginsResponse = {
  id?: string;
};

/**
 * Create a new Card
 * Create a new card. Query parameters may also be replaced with a JSON request body instead.
 */
export interface PostCardsParams {
  /**
   * The name for the card
   */
  name?: string;
  /**
   * The description for the card
   */
  desc?: string;
  /**
   * The position of the new card. `top`, `bottom`, or a positive float
   */
  pos?: "top" | "bottom" | number;
  /**
   * A due date for the card
   */
  due?: string;
  /**
   * The start date of a card, or `null`
   */
  start?: string | null;
  /**
   * Whether the status of the card is complete
   */
  dueComplete?: boolean;
  /**
   * The ID of the list the card should be created in
   */
  idList: string;
  /**
   * Comma-separated list of member IDs to add to the card
   */
  idMembers?: string[];
  /**
   * Comma-separated list of label IDs to add to the card
   */
  idLabels?: string[];
  /**
   * A URL starting with `http://` or `https://`. The URL will be attached to the card upon creation.
   */
  urlSource?: string;
  fileSource?: string;
  /**
   * The mimeType of the attachment. Max length 256
   */
  mimeType?: string;
  /**
   * The ID of a card to copy into the new card
   */
  idCardSource?: string;
  /**
   * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
   */
  keepFromSource?: "all" | "attachments" | "checklists" | "comments" | "customFields" | "due" | "start" | "labels" | "members" | "start" | "stickers";
  /**
   * For use with/by the Map View
   */
  address?: string;
  /**
   * For use with/by the Map View
   */
  locationName?: string;
  /**
   * For use with/by the Map View. Should take the form latitude,longitude
   */
  coordinates?: string;
  /**
   * For displaying cards in different ways based on the card name. Board cards must have a name that is a link to a Trello board. Mirror cards must have a name that is a link to a Trello card.
   */
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
}

export type PostCardsResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Get a Card
 * Get a card by its ID
 */
export interface GetCardsIdParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
   */
  fields?: string;
  /**
   * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
   */
  actions?: string;
  /**
   * `true`, `false`, or `cover`
   */
  attachments?: "cover" | boolean;
  /**
   * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  attachment_fields?: string;
  /**
   * Whether to return member objects for members on the card
   */
  members?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
   */
  member_fields?: string;
  /**
   * Whether to return member objects for members who voted on the card
   */
  membersVoted?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
   */
  memberVoted_fields?: string;
  checkItemStates?: boolean;
  /**
   * Whether to return the checklists on the card. `all` or `none`
   */
  checklists?: string;
  /**
   * `all` or a comma-separated list of `idBoard,idCard,name,pos`
   */
  checklist_fields?: string;
  /**
   * Whether to return the board object the card is on
   */
  board?: boolean;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
   */
  board_fields?: string;
  /**
   * See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
   */
  list?: boolean;
  /**
   * Whether to include pluginData on the card with the response
   */
  pluginData?: boolean;
  /**
   * Whether to include sticker models with the response
   */
  stickers?: boolean;
  /**
   * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  sticker_fields?: string;
  /**
   * Whether to include the customFieldItems
   */
  customFieldItems?: boolean;
}

export type GetCardsIdResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Update a Card
 * Update a card. Query parameters may also be replaced with a JSON request body instead.
 */
export interface PutCardsIdParams {
  /** The ID of the Card */
  id: string;
  /**
   * The new name for the card
   */
  name?: string;
  /**
   * The new description for the card
   */
  desc?: string;
  /**
   * Whether the card should be archived (closed: true)
   */
  closed?: boolean;
  /**
   * Comma-separated list of member IDs
   */
  idMembers?: string;
  /**
   * The ID of the image attachment the card should use as its cover, or null for none
   */
  idAttachmentCover?: string;
  /**
   * The ID of the list the card should be in
   */
  idList?: string;
  /**
   * Comma-separated list of label IDs
   */
  idLabels?: string;
  /**
   * The ID of the board the card should be on
   */
  idBoard?: string;
  /**
   * The position of the card in its list. `top`, `bottom`, or a positive float
   */
  pos?: "top" | "bottom" | number;
  /**
   * When the card is due, or `null`
   */
  due?: string | null;
  /**
   * The start date of a card, or `null`
   */
  start?: string | null;
  /**
   * Whether the status of the card is complete
   */
  dueComplete?: boolean;
  /**
   * Whether the member is should be subscribed to the card
   */
  subscribed?: boolean;
  /**
   * For use with/by the Map View
   */
  address?: string;
  /**
   * For use with/by the Map View
   */
  locationName?: string;
  /**
   * For use with/by the Map View. Should be latitude,longitude
   */
  coordinates?: string;
  /**
   * Updates the card's cover  | Option | Values | About |  |--------|--------|-------|  | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |  | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.  | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.  | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |  | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |    `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.     On the brightness options, setting it to light will make the text on the card cover dark:  ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)    And vice versa, setting it to dark will make the text on the card cover light:   ![](/cloud/trello/images/rest/cards/cover-brightness-light.png)
   */
  cover?: {
  /** An object containing information regarding the card's cover   `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time. */
  value?: {
  /** One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green` */
  color?: "pink" | "yellow" | "lime" | "blue" | "black" | "orange" | "red" | "purple" | "sky" | "green";
  /** Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light */
  brightness?: "dark" | "light";
  /** Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work. */
  url?: string;
};
};
}

export type PutCardsIdResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Delete a Card
 */
export interface DeleteCardsIdParams {
  /** The ID of the Card */
  id: string;
}

export type DeleteCardsIdResponse = void;

/**
 * Get a field on a Card
 * Get a specific property of a card
 */
export interface GetCardsIdFieldParams {
  /** The ID of the Card */
  id: string;
  /** The desired field. */
  field: "id" | "address" | "badges" | "checkItemStates" | "closed" | "coordinates" | "creationMethod" | "dueComplete" | "dateLastActivity" | "desc" | "descData" | "due" | "dueReminder" | "idBoard" | "idChecklists" | "idLabels" | "idList" | "idMembers" | "idMembersVoted" | "idShort" | "idAttachmentCover" | "labels" | "limits" | "locationName" | "manualCoverAttachment" | "name" | "pos" | "shortLink" | "shortUrl" | "subscribed" | "url" | "cover" | "isTemplate";
}

export type GetCardsIdFieldResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Get Actions on a Card
 * List the Actions on a Card. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.
 */
export interface GetCardsIdActionsParams {
  /** The ID of the Card */
  id: string;
  /**
   * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   */
  filter?: string;
  /**
   * The page of results for actions. Each page of results has 50 actions.
   */
  page?: number;
}

export type GetCardsIdActionsResponse = {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
}[];

/**
 * Get Attachments on a Card
 * List the attachments on a card
 */
export interface GetCardsIdAttachmentsParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
  /**
   * Use `cover` to restrict to just the cover attachment
   */
  filter?: string;
}

export type GetCardsIdAttachmentsResponse = {
  id?: string;
  bytes?: string | null;
  date?: string;
  edgeColor?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idMember?: string;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
}[];

/**
 * Create Attachment On Card
 * Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples. You may need to remix the project in order to view it.
 */
export interface PostCardsIdAttachmentsParams {
  /** The ID of the Card */
  id: string;
  /**
   * The name of the attachment. Max length 256.
   */
  name?: string;
  /**
   * The file to attach, as multipart/form-data
   */
  file?: string;
  /**
   * The mimeType of the attachment. Max length 256
   */
  mimeType?: string;
  /**
   * A URL to attach. Must start with `http://` or `https://`
   */
  url?: string;
  /**
   * Determines whether to use the new attachment as a cover for the Card.
   */
  setCover?: boolean;
}

export type PostCardsIdAttachmentsResponse = {
  id?: string;
  bytes?: string | null;
  date?: string;
  edgeColor?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idMember?: string;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
}[];

/**
 * Get an Attachment on a Card
 * Get a specific Attachment on a Card.
 */
export interface GetCardsIdAttachmentsIdAttachmentParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the Attachment */
  idAttachment: string;
  /**
   * The Attachment fields to be included in the response.
   */
  fields?: "id" | "bytes" | "date" | "edgeColor" | "idMember" | "isUpload" | "mimeType" | "name" | "previews" | "url" | "pos"[];
}

export type GetCardsIdAttachmentsIdAttachmentResponse = {
  id?: string;
  bytes?: string | null;
  date?: string;
  edgeColor?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idMember?: string;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  previews?: string[];
  url?: string;
  pos?: number;
}[];

/**
 * Delete an Attachment on a Card
 * Delete an Attachment
 */
export interface DeleteCardsIdAttachmentsIdAttachmentParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the attachment to delete */
  idAttachment: string;
}

export type DeleteCardsIdAttachmentsIdAttachmentResponse = void;

/**
 * Get the Board the Card is on
 * Get the board a card is on
 */
export interface GetCardsIdBoardParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields?: string;
}

export type GetCardsIdBoardResponse = void;

/**
 * Get checkItems on a Card
 * Get the completed checklist items on a card
 */
export interface GetCardsIdCheckItemStatesParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of: `idCheckItem`, `state`
   */
  fields?: string;
}

export type GetCardsIdCheckItemStatesResponse = void;

/**
 * Get Checklists on a Card
 * Get the checklists on a card
 */
export interface GetCardsIdChecklistsParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or `none`
   */
  checkItems?: "all" | "none";
  /**
   * `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
   */
  checkItem_fields?: "name" | "nameData" | "pos" | "state" | "type" | "due" | "dueReminder" | "idMember";
  /**
   * `all` or `none`
   */
  filter?: "all" | "none";
  /**
   * `all` or a comma-separated list of: `idBoard,idCard,name,pos`
   */
  fields?: "all" | "name" | "nameData" | "pos" | "state" | "type";
}

export type GetCardsIdChecklistsResponse = void;

/**
 * Create Checklist on a Card
 * Create a new checklist on a card
 */
export interface PostCardsIdChecklistsParams {
  /** The ID of the Card */
  id: string;
  /**
   * The name of the checklist
   */
  name?: string;
  /**
   * The ID of a source checklist to copy into the new one
   */
  idChecklistSource?: string;
  /**
   * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
   */
  pos?: string;
}

export type PostCardsIdChecklistsResponse = void;

/**
 * Get checkItem on a Card
 * Get a specific checkItem on a card
 */
export interface GetCardsIdCheckItemIdCheckItemParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
  /**
   * `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
   */
  fields?: string;
}

export type GetCardsIdCheckItemIdCheckItemResponse = void;

/**
 * Update a checkItem on a Card
 * Update an item in a checklist on a card.
 */
export interface PutCardsIdCheckItemIdCheckItemParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
  /**
   * The new name for the checklist item
   */
  name?: string;
  /**
   * One of: `complete`, `incomplete`
   */
  state?: "complete" | "incomplete";
  /**
   * The ID of the checklist this item is in
   */
  idChecklist?: string;
  /**
   * `top`, `bottom`, or a positive float
   */
  pos?: "top" | "bottom" | number;
  /**
   * A due date for the checkitem
   */
  due?: string;
  /**
   * A dueReminder for the due date on the checkitem
   */
  dueReminder?: number | null;
  /**
   * The ID of the member to remove from the card
   */
  idMember?: string;
}

export type PutCardsIdCheckItemIdCheckItemResponse = void;

/**
 * Delete checkItem on a Card
 * Delete a checklist item
 */
export interface DeleteCardsIdCheckItemIdCheckItemParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the checkitem */
  idCheckItem: string;
}

export type DeleteCardsIdCheckItemIdCheckItemResponse = void;

/**
 * Get the List of a Card
 * Get the list a card is in
 */
export interface GetCardsIdListParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetCardsIdListResponse = void;

/**
 * Get the Members of a Card
 * Get the members on a card
 */
export interface GetCardsIdMembersParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetCardsIdMembersResponse = void;

/**
 * Get Members who have voted on a Card
 * Get the members who have voted on a card
 */
export interface GetCardsIdMembersVotedParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetCardsIdMembersVotedResponse = void;

/**
 * Add Member vote to Card
 * Vote on the card for a given member.
 */
export interface PostCardsIdMembersVotedParams {
  /** The ID of the Card */
  id: string;
  /**
   * The ID of the member to vote 'yes' on the card
   */
  value: string;
}

export type PostCardsIdMembersVotedResponse = void;

/**
 * Get pluginData on a Card
 * Get any shared pluginData on a card.
 */
export interface GetCardsIdPluginDataParams {
  /** The ID of the Card */
  id: string;
}

export type GetCardsIdPluginDataResponse = void;

/**
 * Get Stickers on a Card
 * Get the stickers on a card
 */
export interface GetCardsIdStickersParams {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetCardsIdStickersResponse = void;

/**
 * Add a Sticker to a Card
 * Add a sticker to a card
 */
export interface PostCardsIdStickersParams {
  /** The ID of the Card */
  id: string;
  /**
   * For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
   */
  image: string;
  /**
   * The top position of the sticker, from -60 to 100
   */
  top: number;
  /**
   * The left position of the sticker, from -60 to 100
   */
  left: number;
  /**
   * The z-index of the sticker
   */
  zIndex: number;
  /**
   * The rotation of the sticker
   */
  rotate?: number;
}

export type PostCardsIdStickersResponse = void;

/**
 * Get a Sticker on a Card
 * Get a specific sticker on a card
 */
export interface GetCardsIdStickersIdStickerParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the sticker */
  idSticker: string;
  /**
   * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetCardsIdStickersIdStickerResponse = void;

/**
 * Update a Sticker on a Card
 * Update a sticker on a card
 */
export interface PutCardsIdStickersIdStickerParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the sticker */
  idSticker: string;
  /**
   * The top position of the sticker, from -60 to 100
   */
  top: number;
  /**
   * The left position of the sticker, from -60 to 100
   */
  left: number;
  /**
   * The z-index of the sticker
   */
  zIndex: number;
  /**
   * The rotation of the sticker
   */
  rotate?: number;
}

export type PutCardsIdStickersIdStickerResponse = void;

/**
 * Delete a Sticker on a Card
 * Remove a sticker from the card
 */
export interface DeleteCardsIdStickersIdStickerParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the sticker */
  idSticker: string;
}

export type DeleteCardsIdStickersIdStickerResponse = void;

/**
 * Update Comment Action on a Card
 * Update an existing comment
 */
export interface PutCardsIdActionsIdActionCommentsParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the comment action to update */
  idAction: string;
  /**
   * The new text for the comment
   */
  text: string;
}

export type PutCardsIdActionsIdActionCommentsResponse = void;

/**
 * Delete a comment on a Card
 * Delete a comment
 */
export interface DeleteCardsIdActionsIdActionCommentsParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the comment action to update */
  idAction: string;
}

export type DeleteCardsIdActionsIdActionCommentsResponse = void;

/**
 * Update Custom Field item on Card
 * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
 */
export interface PutCardsIdCardCustomFieldIdCustomFieldItemParams {
  /** ID of the card that the Custom Field value should be set/updated for */
  idCard: string;
  /** ID of the Custom Field on the card. */
  idCustomField: string;
}

export type PutCardsIdCardCustomFieldIdCustomFieldItemResponse = void;

/**
 * Update Multiple Custom Field items on Card
 * Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
 */
export interface PutCardsIdCardCustomFieldsParams {
  /** An array of objects containing the custom field ID, key and value, and ID of list type option. */
  customFieldItems?: {
  /** The ID of the Custom Field */
  idCustomField?: unknown;
  /** An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. This is optional if Custom Field is list type. */
  value?: {
  text?: string;
  checked?: boolean;
  date?: string;
  number?: string;
};
  /** The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type. */
  idValue?: unknown;
}[];
}

export type PutCardsIdCardCustomFieldsResponse = void;

/**
 * Get Custom Field Items for a Card
 * Get the custom field items for a card.
 */
export interface GetCardsIdCustomFieldItemsParams {
  /** The ID of the Card */
  id: string;
}

export type GetCardsIdCustomFieldItemsResponse = {
  id?: string;
  value?: {
  checked?: string;
};
  idCustomField?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
}[];

/**
 * Add a new comment to a Card
 * Add a new comment to a card
 */
export interface PostCardsIdActionsCommentsParams {
  /** The ID of the Card */
  id: string;
  /**
   * The comment
   */
  text: string;
}

export type PostCardsIdActionsCommentsResponse = {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
};

/**
 * Add a Label to a Card
 * Add a label to a card
 */
export interface PostCardsIdIdLabelsParams {
  /** The ID of the Card */
  id: string;
  /**
   * The ID of the label to add
   */
  value?: string;
}

export type PostCardsIdIdLabelsResponse = void;

/**
 * Add a Member to a Card
 * Add a member to a card
 */
export interface PostCardsIdIdMembersParams {
  /** The ID of the Card */
  id: string;
  /**
   * The ID of the Member to add to the card
   */
  value?: string;
}

export type PostCardsIdIdMembersResponse = void;

/**
 * Create a new Label on a Card
 * Create a new label for the board and add it to the given card.
 */
export interface PostCardsIdLabelsParams {
  /** The ID of the Card */
  id: string;
  /**
   * A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
   */
  color: string;
  /**
   * A name for the label
   */
  name?: string;
}

export type PostCardsIdLabelsResponse = void;

/**
 * Mark a Card's Notifications as read
 * Mark notifications about this card as read
 */
export interface PostCardsIdMarkAssociatedNotificationsReadParams {
  /** The ID of the Card */
  id: string;
}

export type PostCardsIdMarkAssociatedNotificationsReadResponse = void;

/**
 * Remove a Label from a Card
 * Remove a label from a card
 */
export interface DeleteCardsIdIdLabelsIdLabelParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the label to remove */
  idLabel: string;
}

export type DeleteCardsIdIdLabelsIdLabelResponse = void;

/**
 * Remove a Member from a Card
 * Remove a member from a card
 */
export interface DeleteCardsIdIdMembersIdMemberParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the member to remove from the card */
  idMember: string;
}

export type DeleteCardsIdIdMembersIdMemberResponse = void;

/**
 * Remove a Member's Vote on a Card
 * Remove a member's vote from a card
 */
export interface DeleteCardsIdMembersVotedIdMemberParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the member whose vote to remove */
  idMember: string;
}

export type DeleteCardsIdMembersVotedIdMemberResponse = void;

/**
 * Update Checkitem on Checklist on Card
 * Update an item in a checklist on a card.
 */
export interface PutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemParams {
  /** The ID of the Card */
  idCard: string;
  /** The ID of the checklist item to update */
  idCheckItem: string;
  /** The ID of the item to update. */
  idChecklist: string;
  /**
   * `top`, `bottom`, or a positive float
   */
  pos?: "top" | "bottom" | number;
}

export type PutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemResponse = {
  idChecklist?: string;
  state?: "complete" | "incomplete";
  id?: string;
  name?: string;
  nameData?: string | null;
  pos?: string;
};

/**
 * Delete a Checklist on a Card
 * Delete a checklist from a card
 */
export interface DeleteCardsIdChecklistsIdChecklistParams {
  /** The ID of the Card */
  id: string;
  /** The ID of the checklist to delete */
  idChecklist: string;
}

export type DeleteCardsIdChecklistsIdChecklistResponse = void;

/**
 * Create a Checklist
 */
export interface PostChecklistsParams {
  /**
   * The ID of the Card that the checklist should be added to.
   */
  idCard: string;
  /**
   * The name of the checklist. Should be a string of length 1 to 16384.
   */
  name?: string;
  /**
   * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
   */
  pos?: "top" | "bottom" | number;
  /**
   * The ID of a checklist to copy into the new checklist.
   */
  idChecklistSource?: string;
}

export type PostChecklistsResponse = void;

/**
 * Get a Checklist
 */
export interface GetChecklistsIdParams {
  /** ID of a checklist. */
  id: string;
  /**
   * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
   */
  cards?: "all" | "closed" | "none" | "open" | "visible";
  /**
   * The check items on the list to return. One of: `all`, `none`.
   */
  checkItems?: "all" | "none";
  /**
   * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
   */
  checkItem_fields?: "all" | "name" | "nameData" | "pos" | "state" | "type" | "due" | "dueReminder" | "idMember";
  /**
   * `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetChecklistsIdResponse = void;

/**
 * Update a Checklist
 * Update an existing checklist.
 */
export interface PutChecklistsIdParams {
  /** ID of a checklist. */
  id: string;
  /**
   * Name of the new checklist being created. Should be length of 1 to 16384.
   */
  name?: string;
  /**
   * Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
   */
  pos?: "top" | "bottom" | number;
}

export type PutChecklistsIdResponse = void;

/**
 * Delete a Checklist
 * Delete a checklist
 */
export interface DeleteChecklistsIdParams {
  /** ID of a checklist. */
  id: string;
}

export type DeleteChecklistsIdResponse = void;

/**
 * Get field on a Checklist
 */
export interface GetChecklistsIdFieldParams {
  /** ID of a checklist. */
  id: string;
  /** Field to update. */
  field: "name" | "pos";
}

export type GetChecklistsIdFieldResponse = void;

/**
 * Update field on a Checklist
 */
export interface PutChecklistsIdFieldParams {
  /** ID of a checklist. */
  id: string;
  /** Field to update. */
  field: "name" | "pos";
  /**
   * The value to change the checklist name to. Should be a string of length 1 to 16384.
   */
  value: "top" | "bottom" | number | string;
}

export type PutChecklistsIdFieldResponse = void;

/**
 * Get the Board the Checklist is on
 */
export interface GetChecklistsIdBoardParams {
  /** ID of a checklist. */
  id: string;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "all" | "name";
}

export type GetChecklistsIdBoardResponse = void;

/**
 * Get the Card a Checklist is on
 */
export interface GetChecklistsIdCardsParams {
  /** ID of a checklist. */
  id: string;
}

export type GetChecklistsIdCardsResponse = void;

/**
 * Get Checkitems on a Checklist
 */
export interface GetChecklistsIdCheckItemsParams {
  /** ID of a checklist. */
  id: string;
  /**
   * One of: `all`, `none`.
   */
  filter?: "all" | "none";
  /**
   * One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
   */
  fields?: "all" | "name" | "nameData" | "pos" | "state" | "type" | "due" | "dueReminder" | "idMember";
}

export type GetChecklistsIdCheckItemsResponse = void;

/**
 * Create Checkitem on Checklist
 */
export interface PostChecklistsIdCheckItemsParams {
  /** ID of a checklist. */
  id: string;
  /**
   * The name of the new check item on the checklist. Should be a string of length 1 to 16384.
   */
  name: string;
  /**
   * The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
   */
  pos?: "top" | "bottom" | number;
  /**
   * Determines whether the check item is already checked when created.
   */
  checked?: boolean;
  /**
   * A due date for the checkitem
   */
  due?: string;
  /**
   * A dueReminder for the due date on the checkitem
   */
  dueReminder?: number | null;
  /**
   * An ID of a member resource.
   */
  idMember?: string;
}

export type PostChecklistsIdCheckItemsResponse = void;

/**
 * Get a Checkitem on a Checklist
 */
export interface GetChecklistsIdCheckItemsIdCheckItemParams {
  /** ID of a checklist. */
  id: string;
  /** ID of the check item to retrieve. */
  idCheckItem: string;
  /**
   * One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
   */
  fields?: "all" | "name" | "nameData" | "pos" | "state" | "type" | "due" | "dueReminder" | "idMember";
}

export type GetChecklistsIdCheckItemsIdCheckItemResponse = void;

/**
 * Delete Checkitem from Checklist
 * Remove an item from a checklist
 */
export interface DeleteChecklistsIdCheckItemsIdCheckItemParams {
  /** ID of a checklist. */
  id: string;
  /** ID of the check item to retrieve. */
  idCheckItem: string;
}

export type DeleteChecklistsIdCheckItemsIdCheckItemResponse = void;

/**
 * Create a new Custom Field on a Board
 * Create a new Custom Field on a board.
 */
export interface PostCustomFieldsParams {
  /** The ID of the model for which the Custom Field is being defined. This should always be the ID of a board. */
  idModel: string;
  /** The type of model that the Custom Field is being defined on. This should always be `board`. */
  modelType: "board";
  /** The name of the Custom Field */
  name: string;
  /** The type of Custom Field to create. */
  type_: "checkbox" | "list" | "number" | "text" | "date";
  /** If the type is `checkbox` */
  options?: string;
  pos: "top" | "bottom" | number;
  /** Whether this Custom Field should be shown on the front of Cards */
  display_cardFront?: boolean;
}

export type PostCustomFieldsResponse = {
  id?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
  fieldGroup?: string;
  display?: {
  cardFront?: boolean;
  name?: string;
  pos?: string;
  options?: {
  id?: string;
  idCustomField?: string;
  value?: {
  text?: string;
};
  color?: string;
  pos?: number;
}[];
};
  type_?: string;
};

/**
 * Get a Custom Field
 */
export interface GetCustomFieldsIdParams {
  /** ID of the Custom Field. */
  id: string;
}

export type GetCustomFieldsIdResponse = {
  id?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
  fieldGroup?: string;
  display?: {
  cardFront?: boolean;
  name?: string;
  pos?: string;
  options?: {
  id?: string;
  idCustomField?: string;
  value?: {
  text?: string;
};
  color?: string;
  pos?: number;
}[];
};
  type_?: string;
};

/**
 * Update a Custom Field definition
 * Update a Custom Field definition.
 */
export interface PutCustomFieldsIdParams {
  /** ID of the Custom Field. */
  id: string;
  /** The name of the Custom Field */
  name?: string;
  pos?: "top" | "bottom" | number;
  /** Whether to display this custom field on the front of cards */
  display_cardFront?: boolean;
}

export type PutCustomFieldsIdResponse = {
  id?: string;
  idModel?: string;
  modelType?: "card" | "board" | "member";
  fieldGroup?: string;
  display?: {
  cardFront?: boolean;
  name?: string;
  pos?: string;
  options?: {
  id?: string;
  idCustomField?: string;
  value?: {
  text?: string;
};
  color?: string;
  pos?: number;
}[];
};
  type_?: string;
};

/**
 * Delete a Custom Field definition
 * Delete a Custom Field from a board.
 */
export interface DeleteCustomFieldsIdParams {
  /** ID of the Custom Field. */
  id: string;
}

export type DeleteCustomFieldsIdResponse = void;

/**
 * Get Options of Custom Field drop down
 * Get the options of a drop down Custom Field
 */
export interface GetCustomFieldsIdOptionsParams {
  /** ID of the customfield. */
  id: string;
}

export type GetCustomFieldsIdOptionsResponse = void;

/**
 * Add Option to Custom Field dropdown
 * Add an option to a dropdown Custom Field
 */
export interface PostCustomFieldsIdOptionsParams {
  /** ID of the customfield. */
  id: string;
}

export type PostCustomFieldsIdOptionsResponse = void;

/**
 * Get Option of Custom Field dropdown
 * Retrieve a specific, existing Option on a given dropdown-type Custom Field
 */
export interface GetCustomFieldsIdOptionsIdCustomFieldOptionParams {
  /** ID of the customfielditem. */
  id: string;
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: string;
}

export type GetCustomFieldsIdOptionsIdCustomFieldOptionResponse = void;

/**
 * Delete Option of Custom Field dropdown
 * Delete an option from a Custom Field dropdown.
 */
export interface DeleteCustomFieldsIdOptionsIdCustomFieldOptionParams {
  /** ID of the customfielditem. */
  id: string;
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: string;
}

export type DeleteCustomFieldsIdOptionsIdCustomFieldOptionResponse = void;

/**
 * List available Emoji
 */
export interface GetEmojiParams {
  /**
   * The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
   */
  locale?: string;
  /**
   * `true` to return spritesheet URLs in the response
   */
  spritesheets?: boolean;
}

export type GetEmojiResponse = {
  trello?: {
  unified?: string;
  name?: string;
  native?: string;
  shortName?: string;
  shortNames?: string[];
  text?: string;
  texts?: string | null;
  category?: string;
  sheetX?: number;
  sheetY?: number;
  tts?: string;
  keywords?: string[];
}[];
};

/**
 * Get an Enterprise
 * Get an enterprise by its ID.
 */
export interface GetEnterprisesIdParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /**
   * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
   */
  fields?: string;
  /**
   * One of: `none`, `normal`, `admins`, `owners`, `all`
   */
  members?: string;
  /**
   * One of: `avatarHash`, `fullName`, `initials`, `username`
   */
  member_fields?: string;
  /**
   * Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
   */
  member_filter?: string;
  /**
   * This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
   */
  member_sort?: string;
  /**
   * Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
   */
  member_sortBy?: string;
  /**
   * Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
   */
  member_sortOrder?: string;
  /**
   * Any integer between 0 and 100.
   */
  member_startIndex?: number;
  /**
   * 0 to 100
   */
  member_count?: number;
  /**
   * One of: `none`, `members`, `public`, `all`
   */
  organizations?: string;
  /**
   * Any valid value that the [nested organization field resource]() accepts.
   */
  organization_fields?: string;
  /**
   * Whether or not to include paid account information in the returned workspace objects
   */
  organization_paid_accounts?: boolean;
  /**
   * Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
   */
  organization_memberships?: string;
}

export type GetEnterprisesIdResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  logoHash?: string | null;
  logoUrl?: string | null;
  prefs?: {
  ssoOnly?: boolean;
  signup?: {
  banner?: string;
  bannerHtml?: string;
};
  mandatoryTransferDate?: string | null;
  brandingColor?: string;
  autoJoinOrganizations?: boolean;
  notifications?: Record<string, unknown>;
  maxMembers?: number | null;
};
  organizationPrefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  ssoActivationFailed?: boolean;
  idAdmins?: string[];
  enterpriseDomains?: string[];
  isRealEnterprise?: boolean;
  pluginWhitelistingEnabled?: string[];
  idOrganizations?: string[];
  products?: number[];
  licenses?: {
  maxMembers?: number | null;
  totalMembers?: number;
  relatedEnterprises?: {
  name?: string;
  displayName?: string;
  count?: number;
}[];
};
  domains?: string[];
  dateOrganizationPrefsLastUpdated?: string;
  idp?: {
  requestSigned?: boolean;
  certificate?: string | null;
  loginUrl?: string | null;
};
};

/**
 * Get auditlog data for an Enterprise
 * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.    NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.
 */
export interface GetEnterprisesIdAuditlogParams {
  /** ID of the enterprise to retrieve. */
  id: string;
}

export type GetEnterprisesIdAuditlogResponse = {
  idAction?: string;
  type_?: string;
  date?: string;
  memberCreator?: {
  id?: string;
  username?: string;
  fullName?: string;
};
  organization?: {
  enterpriseJoinRequest?: {
  idEnterprise?: string;
  idMember?: string;
  date?: string;
} | null;
  id?: string;
  name?: string;
};
  member?: {
  id?: string;
  username?: string;
  fullName?: string;
};
}[];

/**
 * Get Enterprise admin Members
 * Get an enterprise's admin members.
 */
export interface GetEnterprisesIdAdminsParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /**
   * Any valid value that the [nested member field resource]() accepts.
   */
  fields?: string;
}

export type GetEnterprisesIdAdminsResponse = {
  id?: string;
  fullName?: string;
  username?: string;
};

/**
 * Get signupUrl for Enterprise
 * Get the signup URL for an enterprise.
 */
export interface GetEnterprisesIdSignupUrlParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  authenticate?: boolean;
  confirmationAccepted?: boolean;
  /**
   * Any valid URL.
   */
  returnUrl?: string | null;
  /**
   * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
   */
  tosAccepted?: boolean;
}

export type GetEnterprisesIdSignupUrlResponse = {
  signupUrl?: string;
};

/**
 * Get Users of an Enterprise
 * Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc. The response is paginated and will return 100 users at a time.
 */
export interface GetEnterprisesIdMembersQueryParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /**
   * When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.
   */
  licensed?: boolean;
  /**
   * When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.
   */
  deactivated?: boolean;
  /**
   * When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.
   */
  collaborator?: boolean;
  /**
   * When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.
   */
  managed?: boolean;
  /**
   * When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.
   */
  admin?: boolean;
  /**
   * Returns only Trello users active since this date (inclusive).
   */
  activeSince?: string;
  /**
   * Returns only Trello users active since this date (inclusive).
   */
  inactiveSince?: string;
  /**
   * Returns members with email address or full name that start with the search value.
   */
  search?: string;
  /**
   * Cursor to return next set of results, use cursor returned in the response to query the next batch.
   */
  cursor?: string;
}

export type GetEnterprisesIdMembersQueryResponse = {
  managed?: boolean;
  licensed?: boolean;
  admin?: boolean;
  deactivated?: boolean;
  collaborator?: boolean;
  member?: {
  id?: string;
  fullname?: string;
  username?: string;
  dateLastImpression?: string;
  email?: string;
  initials?: string;
  avatarURL?: string;
  memberType?: string;
  confirmed?: boolean;
};
}[];

/**
 * Get Members of Enterprise
 * Get the members of an enterprise.
 */
export interface GetEnterprisesIdMembersParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /**
   * A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).
   */
  fields?: string;
  /**
   * Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
   */
  filter?: string | null;
  /**
   * This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
   */
  sort?: string;
  /**
   * Deprecated: Please use `sort` instead. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
   */
  sortBy?: string;
  /**
   * Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
   */
  sortOrder?: "ascending" | "descending" | "asc" | "desc" | null | null;
  /**
   * Any integer between 0 and 9999.
   */
  startIndex?: number;
  /**
   * SCIM-style filter.
   */
  count?: string;
  /**
   * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organization_fields?: string;
  /**
   * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  board_fields?: string;
}

export type GetEnterprisesIdMembersResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
}[];

/**
 * Get a Member of Enterprise
 * Get a specific member of an enterprise by ID.
 */
export interface GetEnterprisesIdMembersIdMemberParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** An ID of a member resource. */
  idMember: string;
  /**
   * A comma separated list of any valid values that the [nested member field resource]() accepts.
   */
  fields?: string;
  /**
   * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organization_fields?: string;
  /**
   * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  board_fields?: string;
}

export type GetEnterprisesIdMembersIdMemberResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get whether an organization can be transferred to an enterprise.
 */
export interface GetEnterprisesIdTransferrableOrganizationIdOrganizationParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /** An ID of an Organization resource. */
  idOrganization: string;
}

export type GetEnterprisesIdTransferrableOrganizationIdOrganizationResponse = {
  transferrable?: boolean;
  newBillableMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
  restrictedMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
};

/**
 * Get a bulk list of organizations that can be transferred to an enterprise.
 * Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.
 */
export interface GetEnterprisesIdTransferrableBulkIdOrganizationsParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /** An array of IDs of an Organization resource. */
  idOrganizations: {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];
}

export type GetEnterprisesIdTransferrableBulkIdOrganizationsResponse = {
  transferrable?: boolean;
  newBillableMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
  restrictedMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
}[];

/**
 * Decline enterpriseJoinRequests from one organization or a bulk list of organizations.
 * Decline enterpriseJoinRequests from one organization or bulk amount of organizations
 */
export interface PutEnterprisesIdEnterpriseJoinRequestBulkParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /**
   * An array of IDs of an Organization resource.
   */
  idOrganizations: {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];
}

export type PutEnterprisesIdEnterpriseJoinRequestBulkResponse = void;

/**
 * Get ClaimableOrganizations of an Enterprise
 * Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.
 */
export interface GetEnterprisesIdClaimableOrganizationsParams {
  /** ID of the enterprise to retrieve */
  id: string;
  /**
   * Limits the number of workspaces to be sorted
   */
  limit?: number;
  /**
   * Specifies the sort order to return matching documents
   */
  cursor?: string;
  /**
   * Name of the enterprise to retrieve workspaces for
   */
  name?: string;
  /**
   * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
   */
  activeSince?: string;
  /**
   * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
   */
  inactiveSince?: string;
}

export type GetEnterprisesIdClaimableOrganizationsResponse = {
  organizations?: {
  name?: string;
  displayName?: string;
  activeMembershipCount?: number;
  idActiveAdmins?: string[];
  products?: number[];
  id?: string;
  logoUrl?: string | null;
  /** The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null. */
  dateLastActive?: string | null;
}[];
  claimableCount?: number;
};

/**
 * Get PendingOrganizations of an Enterprise
 * Get the Workspaces that are pending for the enterprise by ID.
 */
export interface GetEnterprisesIdPendingOrganizationsParams {
  /** ID of the enterprise to retrieve */
  id: string;
  /**
   * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
   */
  activeSince?: string;
  /**
   * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
   */
  inactiveSince?: string;
}

export type GetEnterprisesIdPendingOrganizationsResponse = {
  id?: string;
  idMember?: string;
  memberRequestor?: {
  id?: string;
  fullName?: string;
};
  date?: string;
  displayName?: string;
  membershipCount?: number;
  logoUrl?: string | null;
  transferability?: {
  transferrable?: boolean;
  newBillableMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
  restrictedMembers?: {
  id?: string;
  fullName?: string;
  username?: string;
  initials?: string;
  avatarHash?: string;
}[];
};
}[];

/**
 * Create an auth Token for an Enterprise.
 */
export interface PostEnterprisesIdTokensParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /**
   * One of: `1hour`, `1day`, `30days`, `never`
   */
  expiration?: string;
}

export type PostEnterprisesIdTokensResponse = void;

/**
 * Get Organizations of an Enterprise
 * Get the organizations of an enterprise.
 */
export interface GetEnterprisesIdOrganizationsParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /**
   * comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name";
  filter?: string;
  /**
   * Any integer greater than and equal to 1.
   */
  startIndex?: number;
  /**
   * Any integer between 0 and 100.
   */
  count?: number;
}

export type GetEnterprisesIdOrganizationsResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];

/**
 * Transfer an Organization to an Enterprise.
 * Transfer an organization to an enterprise.   NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
 */
export interface PutEnterprisesIdOrganizationsParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /**
   * ID of Organization to be transferred to Enterprise.
   */
  idOrganization: string;
}

export type PutEnterprisesIdOrganizationsResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];

/**
 * Update a Member's licensed status
 * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise.    NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
 */
export interface PutEnterprisesIdMembersIdMemberLicensedParams {
  /** ID of the Enterprise. */
  id: string;
  /** The ID of the Member */
  idMember: string;
  /**
   * Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
   */
  value: boolean;
}

export type PutEnterprisesIdMembersIdMemberLicensedResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Deactivate a Member of an Enterprise.
 * Deactivate a Member of an Enterprise.   NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.
 */
export interface PutEnterprisesIdMembersIdMemberDeactivatedParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** ID of the Member to deactive. */
  idMember: string;
  /**
   * Determines whether the user is deactivated or not.
   */
  value: boolean;
  /**
   * A comma separated list of any valid values that the [nested member field resource]() accepts.
   */
  fields?: "id";
  /**
   * Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organization_fields?: "id" | "name";
  /**
   * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  board_fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
}

export type PutEnterprisesIdMembersIdMemberDeactivatedResponse = void;

/**
 * Update Member to be admin of Enterprise
 * Make Member an admin of Enterprise.   NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
 */
export interface PutEnterprisesIdAdminsIdMemberParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** ID of member to be made an admin of enterprise. */
  idMember: string;
}

export type PutEnterprisesIdAdminsIdMemberResponse = void;

/**
 * Remove a Member as admin from Enterprise.
 * Remove a member as admin from an enterprise.   NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
 */
export interface DeleteEnterprisesIdAdminsIdMemberParams {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /** ID of the member to be removed as an admin from enterprise. */
  idMember: string;
}

export type DeleteEnterprisesIdAdminsIdMemberResponse = void;

/**
 * Delete an Organization from an Enterprise.
 * Remove an organization from an enterprise.
 */
export interface DeleteEnterprisesIdOrganizationsIdOrgParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** ID of the organization to be removed from the enterprise. */
  idOrg: string;
}

export type DeleteEnterprisesIdOrganizationsIdOrgResponse = void;

/**
 * Bulk accept a set of organizations to an Enterprise.
 * Accept an array of organizations to an enterprise.   NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
 */
export interface GetEnterprisesIdOrganizationsBulkIdOrganizationsParams {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** An array of IDs of the organizations to be removed from the enterprise. */
  idOrganizations: {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];
}

export type GetEnterprisesIdOrganizationsBulkIdOrganizationsResponse = void;

/**
 * Get a Label
 * Get information about a single Label.
 */
export interface GetLabelsIdParams {
  /** The ID of the Label */
  id: string;
  /**
   * all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}

export type GetLabelsIdResponse = void;

/**
 * Update a Label
 * Update a label by ID.
 */
export interface PutLabelsIdParams {
  /** The ID of the Label */
  id: string;
  /**
   * The new name for the label
   */
  name?: string;
  /**
   * The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options
   */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
}

export type PutLabelsIdResponse = void;

/**
 * Delete a Label
 * Delete a label by ID.
 */
export interface DeleteLabelsIdParams {
  /** The ID of the Label */
  id: string;
}

export type DeleteLabelsIdResponse = void;

/**
 * Update a field on a label
 * Update a field on a label.
 */
export interface PutLabelsIdFieldParams {
  /** The id of the label */
  id: string;
  /** The field on the Label to update. */
  field: "color" | "name";
  /**
   * The new value for the field.
   */
  value: string;
}

export type PutLabelsIdFieldResponse = void;

/**
 * Create a Label
 * Create a new Label on a Board.
 */
export interface PostLabelsParams {
  /**
   * Name for the label
   */
  name: string;
  /**
   * The color for the label.
   */
  color: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  /**
   * The ID of the Board to create the Label on.
   */
  idBoard: string;
}

export type PostLabelsResponse = void;

/**
 * Get a List
 * Get information about a List
 */
export interface GetListsIdParams {
  /** The ID of the list */
  id: string;
  /**
   * `all` or a comma separated list of List field names.
   */
  fields?: string;
}

export type GetListsIdResponse = void;

/**
 * Update a List
 * Update the properties of a List
 */
export interface PutListsIdParams {
  /** The ID of the list */
  id: string;
  /**
   * New name for the list
   */
  name?: string;
  /**
   * Whether the list should be closed (archived)
   */
  closed?: boolean;
  /**
   * ID of a board the list should be moved to
   */
  idBoard?: string;
  /**
   * New position for the list: `top`, `bottom`, or a positive floating point number
   */
  pos?: number | "top" | "bottom";
  /**
   * Whether the active member is subscribed to this list
   */
  subscribed?: boolean;
}

export type PutListsIdResponse = void;

/**
 * Create a new List
 * Create a new List on a Board
 */
export interface PostListsParams {
  /**
   * Name for the list
   */
  name: string;
  /**
   * The long ID of the board the list should be created on
   */
  idBoard: string;
  /**
   * ID of the List to copy into the new List
   */
  idListSource?: string;
  /**
   * Position of the list. `top`, `bottom`, or a positive floating point number
   */
  pos?: number | "top" | "bottom";
}

export type PostListsResponse = void;

/**
 * Archive all Cards in List
 * Archive all cards in a list
 */
export interface PostListsIdArchiveAllCardsParams {
  /** The ID of the list */
  id: string;
}

export type PostListsIdArchiveAllCardsResponse = void;

/**
 * Move all Cards in List
 * Move all Cards in a List
 */
export interface PostListsIdMoveAllCardsParams {
  /** The ID of the list */
  id: string;
  /**
   * The ID of the board the cards should be moved to
   */
  idBoard: string;
  /**
   * The ID of the list that the cards should be moved to
   */
  idList: string;
}

export type PostListsIdMoveAllCardsResponse = void;

/**
 * Archive or unarchive a list
 */
export interface PutListsIdClosedParams {
  /** The ID of the list */
  id: string;
  /**
   * Set to true to close (archive) the list
   */
  value?: string;
}

export type PutListsIdClosedResponse = void;

/**
 * Move List to Board
 * Move a List to a different Board
 */
export interface PutListsIdIdBoardParams {
  /** The ID of the list */
  id: string;
  /**
   * The ID of the board to move the list to
   */
  value: string;
}

export type PutListsIdIdBoardResponse = void;

/**
 * Update a field on a List
 * Rename a list
 */
export interface PutListsIdFieldParams {
  /** The ID of the list */
  id: string;
  /** The field on the List to be updated */
  field: "name" | "pos" | "subscribed";
  /**
   * The new value for the field
   */
  value?: string | number | "top" | "bottom" | boolean;
}

export type PutListsIdFieldResponse = void;

/**
 * Get Actions for a List
 * Get the Actions on a List
 */
export interface GetListsIdActionsParams {
  /** The ID of the list */
  id: string;
  /**
   * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   */
  filter?: string;
}

export type GetListsIdActionsResponse = void;

/**
 * Get the Board a List is on
 * Get the board a list is on
 */
export interface GetListsIdBoardParams {
  /** The ID of the list */
  id: string;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields?: string;
}

export type GetListsIdBoardResponse = void;

/**
 * Get Cards in a List
 * List the cards in a list
 */
export interface GetListsIdCardsParams {
  /** The ID of the list */
  id: string;
}

export type GetListsIdCardsResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
}[];

/**
 * Get a Member
 * Get a member
 */
export interface GetMembersIdParams {
  /** The ID or username of the member */
  id: string | string;
  /**
   * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
   */
  actions?: string;
  /**
   * See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
   */
  boards?: string;
  /**
   * One of: `all`, `custom`, `default`, `none`, `premium`
   */
  boardBackgrounds?: "all" | "custom" | "default" | "none" | "premium";
  /**
   * `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
   */
  boardsInvited?: "closed" | "members" | "open" | "organization" | "pinned" | "public" | "starred" | "unpinned";
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  boardsInvited_fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
  /**
   * Whether to return the boardStars or not
   */
  boardStars?: boolean;
  /**
   * See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
   */
  cards?: string;
  /**
   * `all` or `none`
   */
  customBoardBackgrounds?: "all" | "none";
  /**
   * `all` or `none`
   */
  customEmoji?: "all" | "none";
  /**
   * `all` or `none`
   */
  customStickers?: "all" | "none";
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id";
  /**
   * See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
   */
  notifications?: string;
  /**
   * One of: `all`, `members`, `none`, `public`
   */
  organizations?: "all" | "members" | "none" | "public";
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  organization_fields?: "id" | "name";
  /**
   * Whether or not to include paid account information in the returned workspace object
   */
  organization_paid_account?: boolean;
  /**
   * One of: `all`, `members`, `none`, `public`
   */
  organizationsInvited?: "all" | "members" | "none" | "public";
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationsInvited_fields?: "id" | "name";
  /**
   * Whether or not to include paid account information in the returned member object
   * @deprecated
   */
  paid_account?: boolean;
  savedSearches?: boolean;
  /**
   * `all` or `none`
   */
  tokens?: "all" | "none";
}

export type GetMembersIdResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Update a Member
 */
export interface PutMembersIdParams {
  /** The ID or username of the member */
  id: string;
  /**
   * New name for the member. Cannot begin or end with a space.
   */
  fullName?: string;
  /**
   * New initials for the member. 1-4 characters long.
   */
  initials?: string;
  /**
   * New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
   */
  username?: string;
  bio?: string;
  /**
   * One of: `gravatar`, `none`, `upload`
   */
  avatarSource?: "gravatar" | "none" | "upload";
  prefs_colorBlind?: boolean;
  prefs_locale?: string;
  /**
   * `-1` for disabled, `1`, or `60`
   */
  prefs_minutesBetweenSummaries?: number;
}

export type PutMembersIdResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get a field on a Member
 * Get a particular property of a member
 */
export interface GetMembersIdFieldParams {
  /** The ID or username of the member */
  id: string;
  /** One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  field: "id";
}

export type GetMembersIdFieldResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get a Member's Actions
 * List the actions for a member
 */
export interface GetMembersIdActionsParams {
  /** The ID or username of the member */
  id: string;
  /**
   * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   */
  filter?: string;
}

export type GetMembersIdActionsResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
}[];

/**
 * Get Member's custom Board backgrounds
 * Get a member's custom board backgrounds
 */
export interface GetMembersIdBoardBackgroundsParams {
  /** The ID or username of the member */
  id: string;
  /**
   * One of: `all`, `custom`, `default`, `none`, `premium`
   */
  filter?: "all" | "custom" | "default" | "none" | "premium";
}

export type GetMembersIdBoardBackgroundsResponse = {
  id?: string;
}[];

/**
 * Upload new boardBackground for Member
 * Upload a new boardBackground
 */
export interface PostMembersIdBoardBackgroundsParams {
  /** The ID or username of the member */
  id: string;
  file: string;
}

export type PostMembersIdBoardBackgroundsResponse = {
  id?: string;
}[];

/**
 * Get a boardBackground of a Member
 * Get a member's board background
 */
export interface GetMembersIdBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board background */
  idBackground: string;
  /**
   * `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
   */
  fields?: "all" | "brightness" | "fullSizeUrl" | "scaled" | "tile";
}

export type GetMembersIdBoardBackgroundsIdBackgroundResponse = {
  id?: string;
};

/**
 * Update a Member's custom Board background
 * Update a board background
 */
export interface PutMembersIdBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board background */
  idBackground: string;
  /**
   * One of: `dark`, `light`, `unknown`
   */
  brightness?: "dark" | "light" | "unknown";
  /**
   * Whether the background should be tiled
   */
  tile?: boolean;
}

export type PutMembersIdBoardBackgroundsIdBackgroundResponse = {
  id?: string;
};

/**
 * Delete a Member's custom Board background
 * Delete a board background
 */
export interface DeleteMembersIdBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board background */
  idBackground: string;
}

export type DeleteMembersIdBoardBackgroundsIdBackgroundResponse = void;

/**
 * Get a Member's boardStars
 * List a member's board stars
 */
export interface GetMembersIdBoardStarsParams {
  /** The ID or username of the member */
  id: string;
}

export type GetMembersIdBoardStarsResponse = void;

/**
 * Create Star for Board
 * Star a new board on behalf of a Member
 */
export interface PostMembersIdBoardStarsParams {
  /** The ID or username of the member */
  id: string | string;
  /**
   * The ID of the board to star
   */
  idBoard: string;
  /**
   * The position of the newly starred board. `top`, `bottom`, or a positive float.
   */
  pos: "top" | "bottom" | number;
}

export type PostMembersIdBoardStarsResponse = {
  id?: string;
  idBoard?: string;
  pos?: number;
}[];

/**
 * Get a boardStar of Member
 * Get a specific boardStar
 */
export interface GetMembersIdBoardStarsIdStarParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board star */
  idStar: string;
}

export type GetMembersIdBoardStarsIdStarResponse = {
  id?: string;
  idBoard?: string;
  pos?: number;
};

/**
 * Update the position of a boardStar of Member
 * Update the position of a starred board
 */
export interface PutMembersIdBoardStarsIdStarParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board star */
  idStar: string;
  /**
   * New position for the starred board. `top`, `bottom`, or a positive float.
   */
  pos?: "top" | "bottom" | number;
}

export type PutMembersIdBoardStarsIdStarResponse = void;

/**
 * Delete Star for Board
 * Unstar a board
 */
export interface DeleteMembersIdBoardStarsIdStarParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board star */
  idStar: string;
}

export type DeleteMembersIdBoardStarsIdStarResponse = void;

/**
 * Get Boards that Member belongs to
 * Lists the boards that the user is a member of.
 */
export interface GetMembersIdBoardsParams {
  /** The ID or username of the member */
  id: string;
  /**
   * `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
   */
  filter?: "all" | "closed" | "members" | "open" | "organization" | "public" | "starred";
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
  /**
   * Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
   */
  lists?: "all" | "closed" | "none" | "open";
  /**
   * Whether to include the Organization object with the Boards
   */
  organization?: boolean;
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  organization_fields?: "id" | "name";
}

export type GetMembersIdBoardsResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
}[];

/**
 * Get Boards the Member has been invited to
 * Get the boards the member has been invited to
 */
export interface GetMembersIdBoardsInvitedParams {
  /** The ID or username of the member */
  id: string;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
}

export type GetMembersIdBoardsInvitedResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
}[];

/**
 * Get Cards the Member is on
 * Gets the cards a member is on
 */
export interface GetMembersIdCardsParams {
  /** The ID or username of the member */
  id: string;
  /**
   * One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`
   */
  filter?: "all" | "closed" | "complete" | "incomplete" | "none" | "open" | "visible";
}

export type GetMembersIdCardsResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
}[];

/**
 * Get a Member's custom Board Backgrounds
 * Get a member's custom board backgrounds
 */
export interface GetMembersIdCustomBoardBackgroundsParams {
  /** The ID or username of the member */
  id: string;
}

export type GetMembersIdCustomBoardBackgroundsResponse = {
  id?: string;
}[];

/**
 * Create a new custom Board Background
 * Upload a new custom board background
 */
export interface PostMembersIdCustomBoardBackgroundsParams {
  /** The ID or username of the member */
  id: string;
  file: string;
}

export type PostMembersIdCustomBoardBackgroundsResponse = {
  id?: string;
};

/**
 * Get custom Board Background of Member
 * Get a specific custom board background
 */
export interface GetMembersIdCustomBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string | string;
  /** The ID of the custom background */
  idBackground: string;
}

export type GetMembersIdCustomBoardBackgroundsIdBackgroundResponse = {
  id?: string;
};

/**
 * Update custom Board Background of Member
 * Update a specific custom board background
 */
export interface PutMembersIdCustomBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string | string;
  /** The ID of the custom background */
  idBackground: string;
  /**
   * One of: `dark`, `light`, `unknown`
   */
  brightness?: "dark" | "light" | "unknown";
  /**
   * Whether to tile the background
   */
  tile?: boolean;
}

export type PutMembersIdCustomBoardBackgroundsIdBackgroundResponse = {
  id?: string;
};

/**
 * Delete custom Board Background of Member
 * Delete a specific custom board background
 */
export interface DeleteMembersIdCustomBoardBackgroundsIdBackgroundParams {
  /** The ID or username of the member */
  id: string | string;
  /** The ID of the custom background */
  idBackground: string;
}

export type DeleteMembersIdCustomBoardBackgroundsIdBackgroundResponse = void;

/**
 * Get a Member's customEmojis
 * Get a Member's uploaded custom Emojis
 */
export interface GetMembersIdCustomEmojiParams {
  /** The ID or username of the member */
  id: string;
}

export type GetMembersIdCustomEmojiResponse = {
  id?: string;
  url?: string;
  name?: string;
}[];

/**
 * Create custom Emoji for Member
 * Create a new custom Emoji
 */
export interface PostMembersIdCustomEmojiParams {
  /** The ID or username of the member */
  id: string;
  file: string;
  /**
   * Name for the emoji. 2 - 64 characters
   */
  name: string;
}

export type PostMembersIdCustomEmojiResponse = {
  id?: string;
  url?: string;
  name?: string;
};

/**
 * Get a Member's custom Emoji
 */
export interface GetMembersIdCustomEmojiIdEmojiParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the custom emoji */
  idEmoji: string;
  /**
   * `all` or a comma-separated list of `name`, `url`
   */
  fields?: "name" | "url" | "all";
}

export type GetMembersIdCustomEmojiIdEmojiResponse = {
  id?: string;
  url?: string;
  name?: string;
};

/**
 * Get Member's custom Stickers
 * Get a Member's uploaded stickers
 */
export interface GetMembersIdCustomStickersParams {
  /** The ID or username of the member */
  id: string;
}

export type GetMembersIdCustomStickersResponse = {
  id?: string;
  url?: string;
  scaled?: {
  id?: string;
}[];
}[];

/**
 * Create custom Sticker for Member
 * Upload a new custom sticker
 */
export interface PostMembersIdCustomStickersParams {
  /** The ID or username of the member */
  id: string;
  file: string;
}

export type PostMembersIdCustomStickersResponse = {
  id?: string;
  url?: string;
  scaled?: {
  id?: string;
}[];
};

/**
 * Get a Member's custom Sticker
 */
export interface GetMembersIdCustomStickersIdStickerParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the uploaded sticker */
  idSticker: string;
  /**
   * `all` or a comma-separated list of `scaled`, `url`
   */
  fields?: "scaled" | "url" | "all";
}

export type GetMembersIdCustomStickersIdStickerResponse = {
  id?: string;
  url?: string;
  scaled?: {
  id?: string;
}[];
};

/**
 * Delete a Member's custom Sticker
 */
export interface DeleteMembersIdCustomStickersIdStickerParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the uploaded sticker */
  idSticker: string;
}

export type DeleteMembersIdCustomStickersIdStickerResponse = void;

/**
 * Get Member's Notifications
 * Get a member's notifications
 */
export interface GetMembersIdNotificationsParams {
  /** The ID or username of the member */
  id: string;
  entities?: boolean;
  display?: boolean;
  filter?: string;
  /**
   * One of: `all`, `read`, `unread`
   */
  read_filter?: string;
  /**
   * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
  /**
   * Max 1000
   */
  limit?: number;
  /**
   * Max 100
   */
  page?: number;
  /**
   * A notification ID
   */
  before?: string;
  /**
   * A notification ID
   */
  since?: string;
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreator_fields?: string;
}

export type GetMembersIdNotificationsResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
}[];

/**
 * Get Member's Organizations
 * Get a member's Workspaces
 */
export interface GetMembersIdOrganizationsParams {
  /** The ID or username of the member */
  id: string;
  /**
   * One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
   */
  filter?: "all" | "members" | "none" | "public";
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name";
  /**
   * Whether or not to include paid account information in the returned workspace object
   */
  paid_account?: boolean;
}

export type GetMembersIdOrganizationsResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];

/**
 * Get Organizations a Member has been invited to
 * Get a member's Workspaces they have been invited to
 */
export interface GetMembersIdOrganizationsInvitedParams {
  /** The ID or username of the member */
  id: string;
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name";
}

export type GetMembersIdOrganizationsInvitedResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];

/**
 * Get Member's saved searched
 * List the saved searches of a Member
 */
export interface GetMembersIdSavedSearchesParams {
  /** The ID or username of the member */
  id: string;
}

export type GetMembersIdSavedSearchesResponse = {
  id?: string;
  name?: string;
  query?: string;
  pos?: "top" | "bottom" | number;
}[];

/**
 * Create saved Search for Member
 * Create a saved search
 */
export interface PostMembersIdSavedSearchesParams {
  /** The ID or username of the member */
  id: string;
  /**
   * The name for the saved search
   */
  name: string;
  /**
   * The search query
   */
  query: string;
  /**
   * The position of the saved search. `top`, `bottom`, or a positive float.
   */
  pos: "top" | "bottom" | number;
}

export type PostMembersIdSavedSearchesResponse = {
  id?: string;
  name?: string;
  query?: string;
  pos?: "top" | "bottom" | number;
};

/**
 * Get a saved search
 */
export interface GetMembersIdSavedSearchesIdSearchParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the saved search to delete */
  idSearch: string;
}

export type GetMembersIdSavedSearchesIdSearchResponse = {
  id?: string;
  name?: string;
  query?: string;
  pos?: "top" | "bottom" | number;
};

/**
 * Update a saved search
 */
export interface PutMembersIdSavedSearchesIdSearchParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the saved search to delete */
  idSearch: string;
  /**
   * The new name for the saved search
   */
  name?: string;
  /**
   * The new search query
   */
  query?: string;
  /**
   * New position for saves search. `top`, `bottom`, or a positive float.
   */
  pos?: string;
}

export type PutMembersIdSavedSearchesIdSearchResponse = {
  id?: string;
  name?: string;
  query?: string;
  pos?: "top" | "bottom" | number;
};

/**
 * Delete a saved search
 */
export interface DeleteMembersIdSavedSearchesIdSearchParams {
  /** The ID or username of the member */
  id: string;
  /** The ID of the saved search to delete */
  idSearch: string;
}

export type DeleteMembersIdSavedSearchesIdSearchResponse = void;

/**
 * Get Member's Tokens
 * List a members app tokens
 */
export interface GetMembersIdTokensParams {
  /** The ID or username of the member */
  id: string;
  /**
   * Whether to include webhooks
   */
  webhooks?: boolean;
}

export type GetMembersIdTokensResponse = {
  id?: string;
  identifier?: string;
  idMember?: string;
  dateCreated?: string;
  dateExpires?: string | null;
  permissions?: {
  idModel?: string | "*";
  modelType?: "board" | "member" | "organization" | "enterprise";
  read?: boolean;
  write?: boolean;
}[];
}[];

/**
 * Create Avatar for Member
 * Create a new avatar for a member
 */
export interface PostMembersIdAvatarParams {
  /** The ID or username of the member */
  id: string;
  file: string;
}

export type PostMembersIdAvatarResponse = void;

/**
 * Dismiss a message for Member
 * Dismiss a message
 */
export interface PostMembersIdOneTimeMessagesDismissedParams {
  /** The ID or username of the member */
  id: string;
  /**
   * The message to dismiss
   */
  value: string;
}

export type PostMembersIdOneTimeMessagesDismissedResponse = void;

/**
 * Get a Member's notification channel settings
 * Get a member's notification channel settings
 */
export interface GetMembersIdNotificationsChannelSettingsParams {
  /** The ID or username of the member */
  id: string | string;
}

export type GetMembersIdNotificationsChannelSettingsResponse = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
}[];

/**
 * Update blocked notification keys of Member on a channel
 * Update blocked notification keys of Member on a specific channel
 */
export interface PutMembersIdNotificationsChannelSettingsParams {
  /** The ID or username of the member */
  id: string | string;
  channel: "email";
  /** Blocked key or array of blocked keys. */
  blockedKeys: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card" | "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
}

export type PutMembersIdNotificationsChannelSettingsResponse = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
};

/**
 * Get blocked notification keys of Member on this channel
 * Get blocked notification keys of Member on a specific channel
 */
export interface GetMembersIdNotificationsChannelSettingsChannelParams {
  /** The ID or username of the member */
  id: string | string;
  /** Channel to block notifications on */
  channel: "email";
}

export type GetMembersIdNotificationsChannelSettingsChannelResponse = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
};

/**
 * Update blocked notification keys of Member on a channel
 * Update blocked notification keys of Member on a specific channel
 */
export interface PutMembersIdNotificationsChannelSettingsChannelParams {
  /** The ID or username of the member */
  id: string | string;
  /** Channel to block notifications on */
  channel: "email";
  /** Singular key or array of notification keys */
  blockedKeys: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card" | "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
}

export type PutMembersIdNotificationsChannelSettingsChannelResponse = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
};

/**
 * Update blocked notification keys of Member on a channel
 * Update blocked notification keys of Member on a specific channel
 */
export interface PutMembersIdNotificationsChannelSettingsChannelBlockedKeysParams {
  /** The ID or username of the member */
  id: string | string;
  /** Channel to block notifications on */
  channel: "email";
  /** Singular key or comma-separated list of notification keys */
  blockedKeys: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card";
}

export type PutMembersIdNotificationsChannelSettingsChannelBlockedKeysResponse = {
  id?: string;
  idMember?: string;
  blockedKeys?: "notification_comment_card" | "notification_added_a_due_date" | "notification_changed_due_date" | "notification_card_due_soon" | "notification_removed_from_card" | "notification_added_attachment_to_card" | "notification_created_card" | "notification_moved_card" | "notification_archived_card" | "notification_unarchived_card"[];
  channel?: "email";
};

/**
 * Get a Notification
 */
export interface GetNotificationsIdParams {
  /** The ID of the notification */
  id: string;
  /**
   * Whether to include the board object
   */
  board?: boolean;
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  board_fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
  /**
   * Whether to include the card object
   */
  card?: boolean;
  /**
   * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  card_fields?: "id" | "address" | "badges" | "checkItemStates" | "closed" | "coordinates" | "creationMethod" | "dueComplete" | "dateLastActivity" | "desc" | "descData" | "due" | "dueReminder" | "idBoard" | "idChecklists" | "idLabels" | "idList" | "idMembers" | "idMembersVoted" | "idShort" | "idAttachmentCover" | "labels" | "limits" | "locationName" | "manualCoverAttachment" | "name" | "pos" | "shortLink" | "shortUrl" | "subscribed" | "url" | "cover" | "isTemplate";
  /**
   * Whether to include the display object with the results
   */
  display?: boolean;
  /**
   * Whether to include the entities object with the results
   */
  entities?: boolean;
  /**
   * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "unread" | "type" | "date" | "dateRead" | "data" | "card" | "board" | "idMemberCreator" | "idAction" | "reactions";
  /**
   * Whether to include the list object
   */
  list?: boolean;
  /**
   * Whether to include the member object
   */
  member?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  member_fields?: "id";
  /**
   * Whether to include the member object of the creator
   */
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreator_fields?: "id";
  /**
   * Whether to include the organization object
   */
  organization?: boolean;
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  organization_fields?: "id" | "name";
}

export type GetNotificationsIdResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

/**
 * Update a Notification's read status
 * Update the read status of a notification
 */
export interface PutNotificationsIdParams {
  /** The ID of the notification */
  id: string;
  /**
   * Whether the notification should be marked as read or not
   */
  unread?: boolean;
}

export type PutNotificationsIdResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

/**
 * Get a field of a Notification
 * Get a specific property of a notification
 */
export interface GetNotificationsIdFieldParams {
  /** The ID of the notification */
  id: string;
  /** A notification [field](/cloud/trello/guides/rest-api/object-definitions/) */
  field: "id" | "unread" | "type" | "date" | "dateRead" | "data" | "card" | "board" | "idMemberCreator" | "idAction" | "reactions";
}

export type GetNotificationsIdFieldResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

/**
 * Mark all Notifications as read
 * Mark all notifications as read
 */
export interface PostNotificationsAllReadParams {
  /**
   * Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
   */
  read?: boolean;
  /**
   * A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
   */
  ids?: string[];
}

export type PostNotificationsAllReadResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

/**
 * Update Notification's read status
 */
export interface PutNotificationsIdUnreadParams {
  /** The ID of the notification */
  id: string;
  value?: string;
}

export type PutNotificationsIdUnreadResponse = {
  id?: string;
  unread?: boolean;
  type_?: "cardDueSoon";
  date?: string;
  dateRead?: string;
  data?: string;
  card?: {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};
  board?: {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};
  idMemberCreator?: string | null;
  idAction?: string | null;
  reactions?: unknown[];
};

/**
 * Get the Board a Notification is on
 * Get the board a notification is associated with
 */
export interface GetNotificationsIdBoardParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
}

export type GetNotificationsIdBoardResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
};

/**
 * Get the Card a Notification is on
 * Get the card a notification is associated with
 */
export interface GetNotificationsIdCardParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "address" | "badges" | "checkItemStates" | "closed" | "coordinates" | "creationMethod" | "dueComplete" | "dateLastActivity" | "desc" | "descData" | "due" | "dueReminder" | "idBoard" | "idChecklists" | "idLabels" | "idList" | "idMembers" | "idMembersVoted" | "idShort" | "idAttachmentCover" | "labels" | "limits" | "locationName" | "manualCoverAttachment" | "name" | "pos" | "shortLink" | "shortUrl" | "subscribed" | "url" | "cover" | "isTemplate";
}

export type GetNotificationsIdCardResponse = {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
};

/**
 * Get the List a Notification is on
 * Get the list a notification is associated with
 */
export interface GetNotificationsIdListParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id";
}

export type GetNotificationsIdListResponse = {
  id?: string;
  /** The name of the list */
  name?: string;
  closed?: boolean;
  pos?: number;
  softLimit?: string;
  idBoard?: string;
  subscribed?: boolean;
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
};

/**
 * Get the Member a Notification is about (not the creator)
 * Get the member (not the creator) a notification is about
 */
export interface GetNotificationsIdMemberParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id";
}

export type GetNotificationsIdMemberResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get the Member who created the Notification
 * Get the member who created the notification
 */
export interface GetNotificationsIdMemberCreatorParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id";
}

export type GetNotificationsIdMemberCreatorResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get a Notification's associated Organization
 * Get the organization a notification is associated with
 */
export interface GetNotificationsIdOrganizationParams {
  /** The ID of the notification */
  id: string;
  /**
   * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name";
}

export type GetNotificationsIdOrganizationResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Create a new Organization
 * Create a new Workspace
 */
export interface PostOrganizationsParams {
  /**
   * The name to display for the Organization
   */
  displayName: string;
  /**
   * The description for the organizations
   */
  desc?: string;
  /**
   * A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.
   */
  name?: string;
  /**
   * A URL starting with `http://` or `https://`
   */
  website?: string;
}

export type PostOrganizationsResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Get an Organization
 */
export interface GetOrganizationsIdParams {
  /** The ID or name of the Organization */
  id: string;
}

export type GetOrganizationsIdResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Update an Organization
 * Update an organization
 */
export interface PutOrganizationsIdParams {
  /** The ID or name of the Organization */
  id: string;
  /**
   * A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
   */
  name?: string;
  /**
   * A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
   */
  displayName?: string;
  /**
   * A new description for the organization
   */
  desc?: string;
  /**
   * A URL starting with `http://`, `https://`, or `null`
   */
  website?: string;
  /**
   * The Google Apps domain to link this org to.
   */
  prefs_associatedDomain?: string;
  /**
   * Whether non-workspace members can be added to boards inside the Workspace
   */
  prefs_externalMembersDisabled?: boolean;
  /**
   * `1` or `2`
   */
  prefs_googleAppsVersion?: number;
  /**
   * Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`
   */
  prefs_boardVisibilityRestrict_org?: string;
  /**
   * Who can make private boards. One of: `admin`, `none`, `org`
   */
  prefs_boardVisibilityRestrict_private?: string;
  /**
   * Who on the Workspace can make public boards. One of: `admin`, `none`, `org`
   */
  prefs_boardVisibilityRestrict_public?: string;
  /**
   * An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
   */
  prefs_orgInviteRestrict?: string;
  /**
   * Whether the Workspace page is publicly visible. One of: `private`, `public`
   */
  prefs_permissionLevel?: string;
}

export type PutOrganizationsIdResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Delete an Organization
 */
export interface DeleteOrganizationsIdParams {
  /** The ID or name of the Organization */
  id: string;
}

export type DeleteOrganizationsIdResponse = void;

/**
 * Get field on Organization
 */
export interface GetOrganizationsIdFieldParams {
  /** The ID or name of the organization */
  id: string;
  /** An organization [field](/cloud/trello/guides/rest-api/object-definitions/) */
  field: "id" | "name";
}

export type GetOrganizationsIdFieldResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Get Actions for Organization
 * List the actions on a Workspace
 */
export interface GetOrganizationsIdActionsParams {
  /** The ID or name of the organization */
  id: string;
}

export type GetOrganizationsIdActionsResponse = {
  id?: string;
  idMemberCreator?: string;
  data?: {
  text?: string;
  card?: {
  id?: string;
  name?: string;
  idShort?: number;
  shortLink?: string;
};
  board?: {
  id?: string;
  name?: string;
  shortLink?: string;
};
  list?: {
  id?: string;
  name?: string;
};
};
  type_?: string;
  date?: string;
  limits?: {
  reactions?: {
  perAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
  uniquePerAction?: {
  status?: string;
  disableAt?: number;
  warnAt?: number;
};
};
};
  display?: {
  translationKey?: string;
  entities?: {
  contextOn?: {
  type_?: string;
  translationKey?: string;
  hideIfContext?: boolean;
  idContext?: string;
};
  card?: {
  type_?: string;
  hideIfContext?: boolean;
  id?: string;
  shortLink?: string;
  text?: string;
};
  comment?: {
  type_?: string;
  text?: string;
};
  memberCreator?: {
  type_?: string;
  id?: string;
  username?: string;
  text?: string;
};
};
};
  memberCreator?: {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName?: string;
  idMemberReferrer?: string | null;
  initials?: string;
  username?: string;
};
}[];

/**
 * Get Boards in an Organization
 * List the boards in a Workspace
 */
export interface GetOrganizationsIdBoardsParams {
  /** The ID or name of the organization */
  id: string;
  /**
   * `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
   */
  filter?: "all" | "open" | "closed" | "members" | "organization" | "public";
  /**
   * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: "id" | "name" | "desc" | "descData" | "closed" | "idMemberCreator" | "idOrganization" | "pinned" | "url" | "shortUrl" | "prefs" | "labelNames" | "starred" | "limits" | "memberships" | "enterpriseOwned";
}

export type GetOrganizationsIdBoardsResponse = {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
}[];

/**
 * Retrieve Organization's Exports
 * Retrieve the exports that exist for the given organization
 */
export interface GetOrganizationsIdExportsParams {
  /** The ID or name of the Workspace */
  id: string;
}

export type GetOrganizationsIdExportsResponse = {
  id?: string;
  status?: {
  attempts?: number;
  finished?: boolean;
  stage?: string;
};
  startedAt?: string;
  size?: string | null;
  exportUrl?: string | null;
}[];

/**
 * Create Export for Organizations
 * Kick off CSV export for an organization
 */
export interface PostOrganizationsIdExportsParams {
  /** The ID or name of the Workspace */
  id: string;
  /**
   * Whether the CSV should include attachments or not.
   */
  attachments?: boolean;
}

export type PostOrganizationsIdExportsResponse = {
  id?: string;
  status?: {
  attempts?: number;
  finished?: boolean;
  stage?: string;
};
  startedAt?: string;
  size?: string | null;
  exportUrl?: string | null;
};

/**
 * Get the Members of an Organization
 * List the members in a Workspace
 */
export interface GetOrganizationsIdMembersParams {
  /** The ID or name of the Organization */
  id: string;
}

export type GetOrganizationsIdMembersResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
}[];

/**
 * Update an Organization's Members
 */
export interface PutOrganizationsIdMembersParams {
  /** The ID or name of the organization */
  id: string;
  /**
   * An email address
   */
  email: string;
  /**
   * Name for the member, at least 1 character not beginning or ending with a space
   */
  fullName: string;
  /**
   * One of: `admin`, `normal`
   */
  type_?: "admin" | "normal";
}

export type PutOrganizationsIdMembersResponse = void;

/**
 * Get Memberships of an Organization
 * List the memberships of a Workspace
 */
export interface GetOrganizationsIdMembershipsParams {
  /** The ID or name of the organization */
  id: string;
  /**
   * `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
   */
  filter?: "all" | "active" | "admin" | "deactivated" | "me" | "normal";
  /**
   * Whether to include the Member objects with the Memberships
   */
  member?: boolean;
}

export type GetOrganizationsIdMembershipsResponse = {
  id?: string;
}[];

/**
 * Get a Membership of an Organization
 * Get a single Membership for an Organization
 */
export interface GetOrganizationsIdMembershipsIdMembershipParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the membership to load */
  idMembership: string;
  /**
   * Whether to include the Member object in the response
   */
  member?: boolean;
}

export type GetOrganizationsIdMembershipsIdMembershipResponse = {
  id?: string;
};

/**
 * Get the pluginData Scoped to Organization
 * Get organization scoped pluginData on this Workspace
 */
export interface GetOrganizationsIdPluginDataParams {
  /** The ID or name of the organization */
  id: string;
}

export type GetOrganizationsIdPluginDataResponse = {
  id?: string;
  idPlugin?: string;
  scope?: "member" | "board" | "organization" | "card";
  idModel?: string;
  value?: string;
  access?: "private" | "shared";
}[];

/**
 * Get Tags of an Organization
 * List the organization's collections
 */
export interface GetOrganizationsIdTagsParams {
  /** The ID or name of the Organization */
  id: string | string;
}

export type GetOrganizationsIdTagsResponse = {
  id?: string;
  name?: string;
}[];

/**
 * Create a Tag in Organization
 * Create a Tag in an Organization
 */
export interface PostOrganizationsIdTagsParams {
  /** The ID or name of the Organization */
  id: string | string;
}

export type PostOrganizationsIdTagsResponse = {
  id?: string;
  name?: string;
};

/**
 * Update a Member of an Organization
 * Add a member to a Workspace or update their member type.
 */
export interface PutOrganizationsIdMembersIdMemberParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID or username of the member to update */
  idMember: string | string;
  /**
   * One of: `admin`, `normal`
   */
  type_: "admin" | "normal";
}

export type PutOrganizationsIdMembersIdMemberResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Remove a Member from an Organization
 * Remove a member from a Workspace
 */
export interface DeleteOrganizationsIdMembersIdMemberParams {
  /** The ID or name of the organization */
  id: string | string;
  /** The ID of the Member to remove from the Workspace */
  idMember: string;
}

export type DeleteOrganizationsIdMembersIdMemberResponse = void;

/**
 * Deactivate or reactivate a member of an Organization
 * Deactivate or reactivate a member of a Workspace
 */
export interface PutOrganizationsIdMembersIdMemberDeactivatedParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID or username of the member to update */
  idMember: string | string;
  value: boolean;
}

export type PutOrganizationsIdMembersIdMemberDeactivatedResponse = void;

/**
 * Update logo for an Organization
 * Set the logo image for a Workspace
 */
export interface PostOrganizationsIdLogoParams {
  /** The ID or name of the Workspace */
  id: string;
  /**
   * Image file for the logo
   */
  file?: string;
}

export type PostOrganizationsIdLogoResponse = {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
};

/**
 * Delete Logo for Organization
 * Delete a the logo from a Workspace
 */
export interface DeleteOrganizationsIdLogoParams {
  /** The ID or name of the organization */
  id: string;
}

export type DeleteOrganizationsIdLogoResponse = void;

/**
 * Remove a Member from an Organization and all Organization Boards
 * Remove a member from a Workspace and from all Workspace boards
 */
export interface DeleteOrganizationsIdMembersIdMemberAllParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the member to remove from the Workspace */
  idMember: string;
}

export type DeleteOrganizationsIdMembersIdMemberAllResponse = void;

/**
 * Remove the associated Google Apps domain from a Workspace
 */
export interface DeleteOrganizationsIdPrefsAssociatedDomainParams {
  /** The ID or name of the organization */
  id: string;
}

export type DeleteOrganizationsIdPrefsAssociatedDomainResponse = void;

/**
 * Delete the email domain restriction on who can be invited to the Workspace
 * Remove the email domain restriction on who can be invited to the Workspace
 */
export interface DeleteOrganizationsIdPrefsOrgInviteRestrictParams {
  /** The ID or name of the organization */
  id: string;
}

export type DeleteOrganizationsIdPrefsOrgInviteRestrictResponse = void;

/**
 * Delete an Organization's Tag
 * Delete an organization's tag
 */
export interface DeleteOrganizationsIdTagsIdTagParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the tag to delete */
  idTag: string;
}

export type DeleteOrganizationsIdTagsIdTagResponse = void;

/**
 * Get Organizations new billable guests
 * Used to check whether the given board has new billable guests on it.
 */
export interface GetOrganizationsIdNewBillableGuestsIdBoardParams {
  /** The ID or name of the organization */
  id: string;
  /** The ID of the board to check for new billable guests. */
  idBoard: string;
}

export type GetOrganizationsIdNewBillableGuestsIdBoardResponse = void;

/**
 * Get a Plugin
 * Get plugins
 */
export interface GetPluginsIdParams {
  /** The ID or name of the organization */
  id: string;
}

export type GetPluginsIdResponse = {
  id?: string;
};

/**
 * Update a Plugin
 */
export interface PutPluginsIdParams {
  /** The ID or name of the organization */
  id: string;
}

export type PutPluginsIdResponse = {
  id?: string;
};

/**
 * Create a Listing for Plugin
 * Create a new listing for a given locale for your Power-Up
 */
export interface PostPluginsIdPluginListingParams {
  /** The ID of the Power-Up for which you are creating a new listing. */
  idPlugin: string;
  /** The description to show for the given locale */
  description?: string;
  /** The locale that this listing should be displayed for. */
  locale?: string;
  /** The overview to show for the given locale. */
  overview?: string;
  /** The name to use for the given locale. */
  name?: string;
}

export type PostPluginsIdPluginListingResponse = {
  id?: string;
  name?: string;
  locale?: string;
  description?: string;
  overview?: string;
};

/**
 * Get Plugin's Member privacy compliance
 */
export interface GetPluginsIdComplianceMemberPrivacyParams {
  /** The ID of the Power-Up */
  id: string;
}

export type GetPluginsIdComplianceMemberPrivacyResponse = void;

/**
 * Updating Plugin's Listing
 * Update an existing listing for your Power-Up
 */
export interface PutPluginsIdPluginListingsIdListingParams {
  /** The ID of the Power-Up whose listing is being updated. */
  idPlugin: string;
  /** The ID of the existing listing for the Power-Up that is being updated. */
  idListing: string;
  /** The description to show for the given locale */
  description?: string;
  /** The locale that this listing should be displayed for. */
  locale?: string;
  /** The overview to show for the given locale. */
  overview?: string;
  /** The name to use for the given locale. */
  name?: string;
}

export type PutPluginsIdPluginListingsIdListingResponse = {
  id?: string;
  name?: string;
  locale?: string;
  description?: string;
  overview?: string;
};

/**
 * Search Trello
 * Find what you're looking for in Trello
 */
export interface GetSearchParams {
  /**
   * The search query with a length of 1 to 16384 characters
   */
  query: string;
  /**
   * `mine` or a comma-separated list of Board IDs
   */
  idBoards?: "mine" | string;
  /**
   * A comma-separated list of Organization IDs
   */
  idOrganizations?: string;
  /**
   * A comma-separated list of Card IDs
   */
  idCards?: string;
  /**
   * What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`
   */
  modelTypes?: string;
  /**
   * all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
   */
  board_fields?: string;
  /**
   * The maximum number of boards returned. Maximum: 1000
   */
  boards_limit?: number;
  /**
   * Whether to include the parent organization with board results
   */
  board_organization?: boolean;
  /**
   * all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
   */
  card_fields?: string;
  /**
   * The maximum number of cards to return. Maximum: 1000
   */
  cards_limit?: number;
  /**
   * The page of results for cards. Maximum: 100
   */
  cards_page?: number;
  /**
   * Whether to include the parent board with card results
   */
  card_board?: boolean;
  /**
   * Whether to include the parent list with card results
   */
  card_list?: boolean;
  /**
   * Whether to include member objects with card results
   */
  card_members?: boolean;
  /**
   * Whether to include sticker objects with card results
   */
  card_stickers?: boolean;
  /**
   * Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.
   */
  card_attachments?: string;
  /**
   * all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website
   */
  organization_fields?: string;
  /**
   * The maximum number of Workspaces to return. Maximum 1000
   */
  organizations_limit?: number;
  /**
   * all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
   */
  member_fields?: string;
  /**
   * The maximum number of members to return. Maximum 1000
   */
  members_limit?: number;
  /**
   * By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".
   */
  partial?: boolean;
}

export type GetSearchResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
} | {
  id?: string;
  address?: string | null;
  badges?: {
  attachmentsByType?: {
  trello?: {
  board?: number;
  card?: number;
};
};
  location?: boolean;
  votes?: number;
  viewingMemberVoted?: boolean;
  subscribed?: boolean;
  fogbugz?: string;
  checkItems?: number;
  checkItemsChecked?: number;
  comments?: number;
  attachments?: number;
  description?: boolean;
  due?: string | null;
  start?: string | null;
  dueComplete?: boolean;
};
  cardRole?: "separator" | "board" | "mirror" | "link" | null;
  checkItemStates?: string[];
  closed?: boolean;
  coordinates?: string | null;
  creationMethod?: string | null;
  dateLastActivity?: string;
  desc?: string;
  descData?: {
  emoji?: Record<string, unknown>;
};
  due?: string | null;
  dueReminder?: string | null;
  idBoard?: string;
  idChecklists?: {
  id?: string;
} | string[];
  idLabels?: {
  /** The ID of the label. */
  id?: string;
  /** The ID of the board the label is on. */
  idBoard?: string;
  /** The name displayed for the label. */
  name?: string | null;
  /** The color of the label. Null means no color and the label will not be shown on the front of Cards. */
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
} | string[];
  idList?: string;
  idMembers?: string[];
  idMembersVoted?: string[];
  idShort?: number;
  idAttachmentCover?: string | null;
  labels?: string[];
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  locationName?: string | null;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: string | null;
  name?: string;
  pos?: number;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
  cover?: {
  idAttachment?: string | null;
  color?: "yellow" | "purple" | "blue" | "red" | "green" | "orange" | "black" | "sky" | "pink" | "lime" | null;
  idUploadedBackground?: boolean | null;
  size?: "normal";
  brightness?: "light" | "dark";
  isTemplate?: boolean;
};
} | {
  id: string;
  /** The name of the board. */
  name?: string;
  desc?: string;
  descData?: string;
  closed?: boolean;
  idMemberCreator?: string;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: {
  permissionLevel?: "org" | "board";
  hideVotes?: boolean;
  voting?: "disabled" | "enabled";
  comments?: string;
  invitations?: "admins" | "members";
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: "pirate" | "regular";
  calendarFeedEnabled?: boolean;
  background?: string;
  backgroundImage?: string;
  backgroundImageScaled?: {
  /** The width of the image. */
  width?: number;
  /** The height of the image. */
  height?: number;
  /** The URL of the image. */
  url?: string;
}[];
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};
  labelNames?: {
  green?: string;
  yellow?: string;
  orange?: string;
  red?: string;
  purple?: string;
  blue?: string;
  sky?: string;
  lime?: string;
  pink?: string;
  black?: string;
};
  limits?: {
  attachments?: {
  perBoard?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
};
};
  starred?: boolean;
  memberships?: string;
  shortLink?: string;
  subscribed?: boolean;
  powerUps?: string;
  dateLastActivity?: string;
  dateLastView?: string;
  idTags?: string;
  datePluginDisable?: string | null;
  creationMethod?: string | null;
  ixUpdate?: number;
  templateGallery?: string | null;
  enterpriseOwned?: boolean;
} | {
  id?: string;
  name?: string;
  displayName?: string;
  dateLastActivity?: string;
  prefs?: {
  boardVisibilityRestrict?: Record<string, unknown>;
  boardDeleteRestrict?: Record<string, unknown>;
  attachmentRestrictions?: "computer" | "trello" | "google-drive" | "box" | "onedrive" | "link"[];
  permissionLevel?: "org" | "private" | "public" | "enterprise" | "domain";
};
  idEnterprise?: string;
  offering?: string;
  url?: string;
  idBoards?: string[];
  memberships?: string[];
  premiumFeatures?: string[];
}[];

/**
 * Search for Members
 * Search for Trello members.
 */
export interface GetSearchMembersParams {
  /**
   * Search query 1 to 16384 characters long
   */
  query: string;
  /**
   * The maximum number of results to return. Maximum of 20.
   */
  limit?: number;
  idBoard?: string;
  idOrganization?: string;
  onlyOrgMembers?: boolean;
}

export type GetSearchMembersResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
}[];

/**
 * Get a Token
 * Retrieve information about a token.
 */
export interface GetTokensTokenParams {
  token: string;
  /**
   * `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
   */
  fields?: "identifier" | "idMember" | "dateCreated" | "dateExpires" | "permissions";
  /**
   * Determines whether to include webhooks.
   */
  webhooks?: boolean;
}

export type GetTokensTokenResponse = {
  id?: string;
  identifier?: string;
  idMember?: string;
  dateCreated?: string;
  dateExpires?: string | null;
  permissions?: {
  idModel?: string | "*";
  modelType?: "board" | "member" | "organization" | "enterprise";
  read?: boolean;
  write?: boolean;
}[];
};

/**
 * Get Token's Member
 * Retrieve information about a token's owner by token.
 */
export interface GetTokensTokenMemberParams {
  token: string;
  /**
   * `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
   */
  fields?: "id";
}

export type GetTokensTokenMemberResponse = {
  id?: string;
  activityBlocked?: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  bio?: string;
  bioData?: {
  emoji?: Record<string, unknown>;
};
  confirmed?: boolean;
  fullName?: string;
  idEnterprise?: string;
  idEnterprisesDeactivated?: string[];
  idMemberReferrer?: string | null;
  idPremOrgsAdmin?: string[];
  initials?: string;
  memberType?: "normal" | "ghost";
  /** Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response. */
  nonPublic?: {
  fullName?: string;
  initials?: string;
  /** A URL that references the non-public avatar for the member */
  avatarUrl?: string;
  avatarHash?: string;
};
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable?: boolean;
  products?: number[];
  url?: string;
  username?: string;
  status?: "disconnected";
  aaEmail?: string | null;
  aaEnrolledDate?: string | null;
  aaId?: string | null;
  avatarSource?: "gravatar" | "upload";
  email?: string;
  gravatarHash?: string;
  idBoards?: string[];
  idOrganizations?: string[];
  idEnterprisesAdmin?: string[];
  limits?: {
  status?: "ok" | "warning";
  disableAt?: number;
  warnAt?: number;
};
  loginTypes?: "password" | "saml"[];
  marketingOptIn?: {
  optedIn?: boolean;
  date?: string;
};
  messagesDismissed?: {
  name?: string;
  count?: string;
  lastDismissed?: string;
  _id?: string;
};
  oneTimeMessagesDismissed?: string[];
  prefs?: {
  timezoneInfo?: {
  offsetCurrent?: number;
  timezoneCurrent?: string;
  offsetNext?: number;
  dateNext?: string;
  timezoneNext?: string;
};
  privacy?: {
  fullName?: "public" | "private" | "collaborator";
  avatar?: "public" | "private" | "collaborator";
};
  sendSummaries?: boolean;
  minutesBetweenSummaries?: number;
  minutesBeforeDeadlineToNotify?: number;
  colorBlind?: boolean;
  locale?: string;
  timezone?: string;
  twoFactor?: {
  enabled?: boolean;
  needsNewBackups?: boolean;
};
};
  trophies?: string[];
  uploadedAvatarHash?: string;
  uploadedAvatarUrl?: string;
  premiumFeatures?: string[];
  isAaMastered?: boolean;
  ixUpdate?: number;
  idBoardsPinned?: string[] | null;
};

/**
 * Get Webhooks for Token
 * Retrieve all webhooks created with a Token.
 */
export interface GetTokensTokenWebhooksParams {
  token: string;
}

export type GetTokensTokenWebhooksResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
}[];

/**
 * Create Webhooks for Token
 * Create a new webhook for a Token.
 */
export interface PostTokensTokenWebhooksParams {
  token: string;
  /**
   * A description to be displayed when retrieving information about the webhook.
   */
  description?: string;
  /**
   * The URL that the webhook should POST information to.
   */
  callbackURL: string;
  /**
   * ID of the object to create a webhook on.
   */
  idModel: string;
}

export type PostTokensTokenWebhooksResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

/**
 * Get a Webhook belonging to a Token
 * Retrieve a webhook created with a Token.
 */
export interface GetTokensTokenWebhooksIdWebhookParams {
  token: string;
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: string;
}

export type GetTokensTokenWebhooksIdWebhookResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

/**
 * Update a Webhook created by Token
 */
export interface PutTokensTokenWebhooksIdWebhookParams {
  token: string;
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: string;
  /**
   * A description to be displayed when retrieving information about the webhook.
   */
  description?: string;
  /**
   * The URL that the webhook should `POST` information to.
   */
  callbackURL?: string;
  /**
   * ID of the object that the webhook is on.
   */
  idModel?: string;
}

export type PutTokensTokenWebhooksIdWebhookResponse = void;

/**
 * Delete a Webhook created by Token
 * Delete a webhook created with given token.
 */
export interface DeleteTokensTokenWebhooksIdWebhookParams {
  token: string;
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: string;
}

export type DeleteTokensTokenWebhooksIdWebhookResponse = void;

/**
 * Delete a Token
 * Delete a token.
 */
export interface DeleteTokensTokenParams {
  token: string;
}

export type DeleteTokensTokenResponse = void;

/**
 * Create a Webhook
 * Create a new webhook.
 */
export interface PostWebhooksParams {
  /**
   * A string with a length from `0` to `16384`.
   */
  description?: string;
  /**
   * A valid URL that is reachable with a `HEAD` and `POST` request.
   */
  callbackURL: string;
  /**
   * ID of the model to be monitored
   */
  idModel: string;
  /**
   * Determines whether the webhook is active and sending `POST` requests.
   */
  active?: boolean;
}

export type PostWebhooksResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

/**
 * Get a Webhook
 * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.
 */
export interface GetWebhooksIdParams {
  /** ID of the webhook to retrieve. */
  id: string;
}

export type GetWebhooksIdResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

/**
 * Update a Webhook
 * Update a webhook by ID.
 */
export interface PutWebhooksIdParams {
  /** ID of the webhook to retrieve. */
  id: string;
  /**
   * A string with a length from `0` to `16384`.
   */
  description?: string;
  /**
   * A valid URL that is reachable with a `HEAD` and `POST` request.
   */
  callbackURL?: string;
  /**
   * ID of the model to be monitored
   */
  idModel?: string;
  /**
   * Determines whether the webhook is active and sending `POST` requests.
   */
  active?: boolean;
}

export type PutWebhooksIdResponse = {
  id?: string;
  description?: string;
  idModel?: string;
  callbackURL?: string;
  active?: boolean;
  consecutiveFailures?: number;
  firstConsecutiveFailDate?: string | null;
};

/**
 * Delete a Webhook
 * Delete a webhook by ID.
 */
export interface DeleteWebhooksIdParams {
  /** ID of the webhook to retrieve. */
  id: string;
}

export type DeleteWebhooksIdResponse = void;

/**
 * Get a field on a Webhook
 */
export interface GetWebhooksIdFieldParams {
  /** ID of the webhook. */
  id: string;
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: "active" | "callbackURL" | "description" | "idModel" | "consecutiveFailures" | "firstConsecutiveFailDate";
}

export type GetWebhooksIdFieldResponse = void;
