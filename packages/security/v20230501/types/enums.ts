export const ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = {
    /**
     * Microsoft Defender for Endpoints threat and vulnerability management.
     */
    MdeTvm: "MdeTvm",
} as const;

export type ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = (typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider)[keyof typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider];

export const ServerVulnerabilityAssessmentsSettingKind = {
    AzureServersSetting: "AzureServersSetting",
} as const;

export type ServerVulnerabilityAssessmentsSettingKind = (typeof ServerVulnerabilityAssessmentsSettingKind)[keyof typeof ServerVulnerabilityAssessmentsSettingKind];
