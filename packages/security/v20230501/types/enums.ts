export const ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = {
    /**
     * Microsoft Defender for Endpoints threat and vulnerability management.
     */
    MdeTvm: "MdeTvm",
} as const;

/**
 * The selected vulnerability assessments provider on Azure servers in the defined scope.
 */
export type ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = (typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider)[keyof typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider];

export const ServerVulnerabilityAssessmentsSettingKind = {
    AzureServersSetting: "AzureServersSetting",
} as const;

/**
 * The kind of the server vulnerability assessments setting.
 */
export type ServerVulnerabilityAssessmentsSettingKind = (typeof ServerVulnerabilityAssessmentsSettingKind)[keyof typeof ServerVulnerabilityAssessmentsSettingKind];
