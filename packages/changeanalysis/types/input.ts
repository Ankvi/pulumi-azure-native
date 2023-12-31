import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration properties of an Azure Monitor workspace that receives change notifications.
 */
export interface AzureMonitorWorkspacePropertiesArgs {
    /**
     * The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values.
     */
    includeChangeDetails?: pulumi.Input<string | enums.ChangeDetailsMode>;
    /**
     * The Azure Monitor workspace ID - the unique identifier for the Log Analytics workspace.
     */
    workspaceId?: pulumi.Input<string>;
    /**
     * The Azure Monitor workspace ARM Resource ID. The resource ID should be in the following format: /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}
     */
    workspaceResourceId?: pulumi.Input<string>;
}

/**
 * The properties of a configuration profile.
 */
export interface ConfigurationProfileResourcePropertiesArgs {
    /**
     * Settings of change notification configuration for a subscription.
     */
    notifications?: pulumi.Input<NotificationSettingsArgs>;
}

/**
 * Settings of change notification configuration for a subscription.
 */
export interface NotificationSettingsArgs {
    /**
     * The state of notifications feature.
     */
    activationState?: pulumi.Input<string | enums.NotificationsState>;
    /**
     * Configuration properties of an Azure Monitor workspace that receives change notifications.
     */
    azureMonitorWorkspaceProperties?: pulumi.Input<AzureMonitorWorkspacePropertiesArgs>;
}

/**
 * The identity block returned by ARM resource that supports managed identity.
 */
export interface ResourceIdentityArgs {
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
     */
    type?: pulumi.Input<string | enums.ManagedIdentityTypes>;
}
