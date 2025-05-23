export const AnalyticsConnectorDataDestinationType = {
    Datalake: "datalake",
} as const;

/**
 * Type of data destination.
 */
export type AnalyticsConnectorDataDestinationType = (typeof AnalyticsConnectorDataDestinationType)[keyof typeof AnalyticsConnectorDataDestinationType];

export const AnalyticsConnectorDataSourceType = {
    Fhirservice: "fhirservice",
} as const;

/**
 * Type of data source.
 */
export type AnalyticsConnectorDataSourceType = (typeof AnalyticsConnectorDataSourceType)[keyof typeof AnalyticsConnectorDataSourceType];

export const AnalyticsConnectorMappingType = {
    FhirToParquet: "fhirToParquet",
} as const;

/**
 * Type of data mapping.
 */
export type AnalyticsConnectorMappingType = (typeof AnalyticsConnectorMappingType)[keyof typeof AnalyticsConnectorMappingType];

export const FhirResourceVersionPolicy = {
    No_version: "no-version",
    Versioned: "versioned",
    Versioned_update: "versioned-update",
} as const;

/**
 * Controls how resources are versioned on the FHIR service
 */
export type FhirResourceVersionPolicy = (typeof FhirResourceVersionPolicy)[keyof typeof FhirResourceVersionPolicy];

export const FhirServiceKind = {
    Fhir_Stu3: "fhir-Stu3",
    Fhir_R4: "fhir-R4",
} as const;

/**
 * The kind of the service.
 */
export type FhirServiceKind = (typeof FhirServiceKind)[keyof typeof FhirServiceKind];

export const FhirServiceVersion = {
    STU3: "STU3",
    R4: "R4",
} as const;

/**
 * The kind of FHIR Service.
 */
export type FhirServiceVersion = (typeof FhirServiceVersion)[keyof typeof FhirServiceVersion];

export const IotIdentityResolutionType = {
    Create: "Create",
    Lookup: "Lookup",
} as const;

/**
 * Determines how resource identity is resolved on the destination.
 */
export type IotIdentityResolutionType = (typeof IotIdentityResolutionType)[keyof typeof IotIdentityResolutionType];

export const Kind = {
    Fhir: "fhir",
    Fhir_Stu3: "fhir-Stu3",
    Fhir_R4: "fhir-R4",
} as const;

/**
 * The kind of the service.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * Type of identity being specified, currently SystemAssigned and None are allowed.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ServiceManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of identity being specified, currently SystemAssigned and None are allowed.
 */
export type ServiceManagedIdentityType = (typeof ServiceManagedIdentityType)[keyof typeof ServiceManagedIdentityType];

export const SmartDataActions = {
    Read: "Read",
} as const;

/**
 * The Data Actions that can be enabled for a Smart Identity Provider Application.
 */
export type SmartDataActions = (typeof SmartDataActions)[keyof typeof SmartDataActions];
