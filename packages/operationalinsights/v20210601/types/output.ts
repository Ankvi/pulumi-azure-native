import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The list of Log Analytics workspaces associated with the cluster.
     */
    export interface AssociatedWorkspaceResponse {
        /**
         * The time of workspace association.
         */
        associateDate: string;
        /**
         * The ResourceId id the assigned workspace.
         */
        resourceId: string;
        /**
         * The id of the assigned workspace.
         */
        workspaceId: string;
        /**
         * The name id the assigned workspace.
         */
        workspaceName: string;
    }

    /**
     * The Capacity Reservation properties.
     */
    export interface CapacityReservationPropertiesResponse {
        /**
         * The last time Sku was updated.
         */
        lastSkuUpdate: string;
        /**
         * Minimum CapacityReservation value in GB.
         */
        minCapacity: number;
    }

    /**
     * The cluster sku definition.
     */
    export interface ClusterSkuResponse {
        /**
         * The capacity value
         */
        capacity?: number;
        /**
         * The name of the SKU.
         */
        name?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * The key vault properties.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The name of the key associated with the Log Analytics cluster.
         */
        keyName?: string;
        /**
         * Selected key minimum required size.
         */
        keyRsaSize?: number;
        /**
         * The Key Vault uri which holds they key associated with the Log Analytics cluster.
         */
        keyVaultUri?: string;
        /**
         * The version of the key associated with the Log Analytics cluster.
         */
        keyVersion?: string;
    }

    /**
     * The private link scope resource reference.
     */
    export interface PrivateLinkScopedResourceResponse {
        /**
         * The full resource Id of the private link scope resource.
         */
        resourceId?: string;
        /**
         * The private link scope unique Identifier.
         */
        scopeId?: string;
    }

    /**
     * User assigned identity properties.
     */
    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * The daily volume cap for ingestion.
     */
    export interface WorkspaceCappingResponse {
        /**
         * The workspace daily quota for ingestion.
         */
        dailyQuotaGb?: number;
        /**
         * The status of data ingestion for this workspace.
         */
        dataIngestionStatus: string;
        /**
         * The time when the quota will be rest.
         */
        quotaNextResetTime: string;
    }

    /**
     * Workspace features.
     */
    export interface WorkspaceFeaturesResponse {
        /**
         * Dedicated LA cluster resourceId that is linked to the workspaces.
         */
        clusterResourceId?: string;
        /**
         * Disable Non-AAD based Auth.
         */
        disableLocalAuth?: boolean;
        /**
         * Flag that indicate if data should be exported.
         */
        enableDataExport?: boolean;
        /**
         * Flag that indicate which permission to use - resource or workspace or both.
         */
        enableLogAccessUsingOnlyResourcePermissions?: boolean;
        /**
         * Flag that describes if we want to remove the data after 30 days.
         */
        immediatePurgeDataOn30Days?: boolean;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface WorkspaceSkuResponse {
        /**
         * The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
         */
        capacityReservationLevel?: number;
        /**
         * The last time when the sku was updated.
         */
        lastSkuUpdate: string;
        /**
         * The name of the SKU.
         */
        name: string;
    }
