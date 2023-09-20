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

export const FhirResourceVersionPolicy = {
    No_version: "no-version",
    Versioned: "versioned",
    Versioned_update: "versioned-update",
} as const;

export type FhirResourceVersionPolicy = (typeof FhirResourceVersionPolicy)[keyof typeof FhirResourceVersionPolicy];

export const FhirServiceKind = {
    Fhir_Stu3: "fhir-Stu3",
    Fhir_R4: "fhir-R4",
} as const;

export type FhirServiceKind = (typeof FhirServiceKind)[keyof typeof FhirServiceKind];

export const FhirServiceVersion = {
    STU3: "STU3",
    R4: "R4",
} as const;

export type FhirServiceVersion = (typeof FhirServiceVersion)[keyof typeof FhirServiceVersion];

export const IotIdentityResolutionType = {
    Create: "Create",
    Lookup: "Lookup",
} as const;

export type IotIdentityResolutionType = (typeof IotIdentityResolutionType)[keyof typeof IotIdentityResolutionType];

export const Kind = {
    Fhir: "fhir",
    Fhir_Stu3: "fhir-Stu3",
    Fhir_R4: "fhir-R4",
} as const;

export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ServiceManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ServiceManagedIdentityType = (typeof ServiceManagedIdentityType)[keyof typeof ServiceManagedIdentityType];