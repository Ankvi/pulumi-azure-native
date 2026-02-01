import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration for the Azure Monitor Insights service.
 */
export interface AzureMonitorConfigurationResponse {
    /**
     * Azure monitor workspace resource ID used by the service.
     */
    azureMonitorWorkspaceId: string;
}

/**
 * Azure Monitor Insights service information.
 */
export interface AzureMonitorInformationResponse {
    /**
     * ID of Data Collection Rule (DCR) associated with this service.
     */
    dcrId: string;
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}

/**
 * Configuration for the Change Tracking and Inventory service.
 */
export interface ChangeTrackingConfigurationResponse {
    /**
     * Log analytics workspace resource ID used by the service.
     */
    logAnalyticsWorkspaceId: string;
}

/**
 * Change Tracking and Inventory service information.
 */
export interface ChangeTrackingInformationResponse {
    /**
     * ID of Data Collection Rule (DCR) associated with this service.
     */
    dcrId: string;
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}

/**
 * Defender Cloud Security Posture Management (CSPM) service information.
 */
export interface DefenderCspmInformationResponse {
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}

/**
 * Defender for Servers service information.
 */
export interface DefenderForServersInformationResponse {
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}

/**
 * Desired configuration input by the user.
 */
export interface DesiredConfigurationResponse {
    /**
     * Configuration for the Azure Monitor Insights service.
     */
    azureMonitorInsights: AzureMonitorConfigurationResponse;
    /**
     * Configuration for the Change Tracking and Inventory service.
     */
    changeTrackingAndInventory: ChangeTrackingConfigurationResponse;
    /**
     * Desired enablement state of the Defender Cloud Security Posture Management (CSPM) service.
     */
    defenderCspm?: string;
    /**
     * Desired enablement state of the Defender For Servers service.
     */
    defenderForServers?: string;
    /**
     * User assigned Managed Identity used to perform operations on machines managed by Ops360.
     */
    userAssignedManagedIdentityId: string;
}

/**
 * Azure Policy and Machine Configuration service information.
 */
export interface GuestConfigurationInformationResponse {
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}

/**
 * Properties of the ManagedOps resource.
 */
export interface ManagedOpsPropertiesResponse {
    /**
     * Desired configuration input by the user.
     */
    desiredConfiguration: DesiredConfigurationResponse;
    /**
     * Policy assignments created for managing services.
     */
    policyAssignmentProperties: PolicyAssignmentPropertiesResponse;
    /**
     * Provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Services provisioned by this resource.
     */
    services: ServiceInformationResponse;
    /**
     * Product plan details of this resource.
     */
    sku: SkuResponse;
}

/**
 * Policy assignments created for managing services.
 */
export interface PolicyAssignmentPropertiesResponse {
    /**
     * Policy initiative assignment ID.
     */
    policyInitiativeAssignmentId: string;
}

/**
 * Services provisioned by this resource.
 */
export interface ServiceInformationResponse {
    /**
     * Azure Monitor Insights service information.
     */
    azureMonitorInsights: AzureMonitorInformationResponse;
    /**
     * Azure Policy and Machine Configuration service information.
     */
    azurePolicyAndMachineConfiguration: GuestConfigurationInformationResponse;
    /**
     * Azure Update Manager service information.
     */
    azureUpdateManager: UpdateManagerInformationResponse;
    /**
     * Change Tracking and Inventory service information.
     */
    changeTrackingAndInventory: ChangeTrackingInformationResponse;
    /**
     * Defender for Cloud's Cloud security posture management (CSPM) service information.
     */
    defenderCspm: DefenderCspmInformationResponse;
    /**
     * Defender for Servers service information.
     */
    defenderForServers: DefenderForServersInformationResponse;
}

/**
 * Specifies the service plan for this resource.
 */
export interface SkuResponse {
    /**
     * Name of the SKU.
     */
    name: string;
    /**
     * Pricing tier of the SKU.
     */
    tier: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Azure Update Manager service information.
 */
export interface UpdateManagerInformationResponse {
    /**
     * Indicates whether the service is enabled.
     */
    enablementStatus: string;
}
