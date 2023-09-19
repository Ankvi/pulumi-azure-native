export const AnalyticsConnectorDataDestinationType = {
    Datalake: "datalake",
} as const;

export type AnalyticsConnectorDataDestinationType = (typeof AnalyticsConnectorDataDestinationType)[keyof typeof AnalyticsConnectorDataDestinationType];

export const AnalyticsConnectorDataSourceType = {
    Fhirservice: "fhirservice",
} as const;

export type AnalyticsConnectorDataSourceType = (typeof AnalyticsConnectorDataSourceType)[keyof typeof AnalyticsConnectorDataSourceType];

export const AnalyticsConnectorMappingType = {
    FhirToParquet: "fhirToParquet",
} as const;

export type AnalyticsConnectorMappingType = (typeof AnalyticsConnectorMappingType)[keyof typeof AnalyticsConnectorMappingType];

export const FhirServiceVersion = {
    STU3: "STU3",
    R4: "R4",
} as const;

export type FhirServiceVersion = (typeof FhirServiceVersion)[keyof typeof FhirServiceVersion];

export const ServiceManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ServiceManagedIdentityType = (typeof ServiceManagedIdentityType)[keyof typeof ServiceManagedIdentityType];
