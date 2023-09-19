export const PublicNetworkAccessType = {
    /**
     * Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints.
     */
    Enabled: "Enabled",
    /**
     * Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link.
     */
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const StatusLevelTypes = {
    Info: "Info",
    Warning: "Warning",
    Error: "Error",
} as const;

export type StatusLevelTypes = (typeof StatusLevelTypes)[keyof typeof StatusLevelTypes];
