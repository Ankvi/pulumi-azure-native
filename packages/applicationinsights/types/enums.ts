export const ApplicationType = {
    Web: "web",
    Other: "other",
} as const;

/**
 * Type of application being monitored.
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

export const FavoriteType = {
    Shared: "shared",
    User: "user",
} as const;

/**
 * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
 */
export type FavoriteType = (typeof FavoriteType)[keyof typeof FavoriteType];

export const FlowType = {
    Bluefield: "Bluefield",
} as const;

/**
 * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
 */
export type FlowType = (typeof FlowType)[keyof typeof FlowType];

export const IngestionMode = {
    ApplicationInsights: "ApplicationInsights",
    ApplicationInsightsWithDiagnosticSettings: "ApplicationInsightsWithDiagnosticSettings",
    LogAnalytics: "LogAnalytics",
} as const;

/**
 * Indicates the flow of the ingestion.
 */
export type IngestionMode = (typeof IngestionMode)[keyof typeof IngestionMode];

export const ItemScope = {
    Shared: "shared",
    User: "user",
} as const;

/**
 * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
 */
export type ItemScope = (typeof ItemScope)[keyof typeof ItemScope];

export const ItemType = {
    None: "none",
    Query: "query",
    Recent: "recent",
    Function: "function",
} as const;

/**
 * Enum indicating the type of the Analytics item.
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const Kind = {
    User: "user",
    Shared: "shared",
} as const;

/**
 * The kind of workbook. Choices are user and shared.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Application Insights through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity to Application Insights through public DNS.
     */
    Disabled: "Disabled",
} as const;

/**
 * The network access type for accessing Application Insights query.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const RequestSource = {
    Rest: "rest",
} as const;

/**
 * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
 */
export type RequestSource = (typeof RequestSource)[keyof typeof RequestSource];

export const WebTestKind = {
    Ping: "ping",
    Multistep: "multistep",
    Standard: "standard",
} as const;

/**
 * The kind of web test this is, valid choices are ping, multistep and standard.
 */
export type WebTestKind = (typeof WebTestKind)[keyof typeof WebTestKind];

export const WorkbookSharedTypeKind = {
    Shared: "shared",
} as const;

/**
 * The kind of workbook. Only valid value is shared.
 */
export type WorkbookSharedTypeKind = (typeof WorkbookSharedTypeKind)[keyof typeof WorkbookSharedTypeKind];
