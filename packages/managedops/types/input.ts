import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration for the Azure Monitor Insights service.
 */
export interface AzureMonitorConfigurationArgs {
    /**
     * Azure monitor workspace resource ID used by the service.
     */
    azureMonitorWorkspaceId: pulumi.Input<string>;
}

/**
 * Configuration for the Change Tracking and Inventory service.
 */
export interface ChangeTrackingConfigurationArgs {
    /**
     * Log analytics workspace resource ID used by the service.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
}

/**
 * Desired configuration input by the user.
 */
export interface DesiredConfigurationArgs {
    /**
     * Configuration for the Azure Monitor Insights service.
     */
    azureMonitorInsights: pulumi.Input<AzureMonitorConfigurationArgs>;
    /**
     * Configuration for the Change Tracking and Inventory service.
     */
    changeTrackingAndInventory: pulumi.Input<ChangeTrackingConfigurationArgs>;
    /**
     * Desired enablement state of the Defender Cloud Security Posture Management (CSPM) service.
     */
    defenderCspm?: pulumi.Input<string | enums.DesiredEnablementState | undefined>;
    /**
     * Desired enablement state of the Defender For Servers service.
     */
    defenderForServers?: pulumi.Input<string | enums.DesiredEnablementState | undefined>;
    /**
     * User assigned Managed Identity used to perform operations on machines managed by Ops360.
     */
    userAssignedManagedIdentityId: pulumi.Input<string>;
}

/**
 * Properties of the ManagedOps resource.
 */
export interface ManagedOpsPropertiesArgs {
    /**
     * Desired configuration input by the user.
     */
    desiredConfiguration: pulumi.Input<DesiredConfigurationArgs>;
}
