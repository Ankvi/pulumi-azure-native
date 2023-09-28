export const ApplicationType = {
    Web: "web",
    Other: "other",
} as const;

/**
 * Type of application being monitored.
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

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
