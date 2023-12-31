import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Configuration properties of an Azure Monitor workspace that receives change notifications.
     */
    export interface AzureMonitorWorkspacePropertiesResponse {
        /**
         * The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values.
         */
        includeChangeDetails?: string;
        /**
         * The Azure Monitor workspace ID - the unique identifier for the Log Analytics workspace.
         */
        workspaceId?: string;
        /**
         * The Azure Monitor workspace ARM Resource ID. The resource ID should be in the following format: /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}
         */
        workspaceResourceId?: string;
    }

    /**
     * The properties of a configuration profile.
     */
    export interface ConfigurationProfileResourcePropertiesResponse {
        /**
         * Settings of change notification configuration for a subscription.
         */
        notifications?: NotificationSettingsResponse;
    }

    /**
     * Settings of change notification configuration for a subscription.
     */
    export interface NotificationSettingsResponse {
        /**
         * The state of notifications feature.
         */
        activationState?: string;
        /**
         * Configuration properties of an Azure Monitor workspace that receives change notifications.
         */
        azureMonitorWorkspaceProperties?: AzureMonitorWorkspacePropertiesResponse;
    }

    /**
     * The identity block returned by ARM resource that supports managed identity.
     */
    export interface ResourceIdentityResponse {
        /**
         * The principal id of the identity. This property will only be provided for a system-assigned identity.
         */
        principalId: string;
        /**
         * The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
         */
        tenantId: string;
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
         */
        type?: string;
    }

    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt: string;
        /**
         * A string identifier for the identity that created the resource
         */
        createdBy: string;
        /**
         * The type of identity that created the resource: user, application, managedIdentity, key
         */
        createdByType: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt: string;
        /**
         * A string identifier for the identity that last modified the resource
         */
        lastModifiedBy: string;
        /**
         * The type of identity that last modified the resource: user, application, managedIdentity, key
         */
        lastModifiedByType: string;
    }
