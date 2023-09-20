export const ApplicationType = {
    Web: "web",
    Other: "other",
} as const;

export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

export const FlowType = {
    Bluefield: "Bluefield",
} as const;

export type FlowType = (typeof FlowType)[keyof typeof FlowType];

export const IngestionMode = {
    ApplicationInsights: "ApplicationInsights",
    ApplicationInsightsWithDiagnosticSettings: "ApplicationInsightsWithDiagnosticSettings",
    LogAnalytics: "LogAnalytics",
} as const;

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

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const RequestSource = {
    Rest: "rest",
} as const;

export type RequestSource = (typeof RequestSource)[keyof typeof RequestSource];