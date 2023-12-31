import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
         * The identity type.
         */
        type: string;
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
     * Describes a storage account connection.
     */
    export interface StorageAccountResponse {
        /**
         * The Azure Resource Manager ID of the storage account resource.
         */
        id: string;
        /**
         * The storage account key.
         */
        key: string;
    }

    /**
     * The status of the storage insight.
     */
    export interface StorageInsightStatusResponse {
        /**
         * Description of the state of the storage insight.
         */
        description?: string;
        /**
         * The state of the storage insight connection to the workspace
         */
        state: string;
    }

    /**
     * A tag of a saved search.
     */
    export interface TagResponse {
        /**
         * The tag name.
         */
        name: string;
        /**
         * The tag value.
         */
        value: string;
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
     * The SKU (tier) of a workspace.
     */
    export interface WorkspaceSkuResponse {
        /**
         * The capacity reservation level for this workspace, when CapacityReservation sku is selected.
         */
        capacityReservationLevel?: number;
        /**
         * The last time when the sku was updated.
         */
        lastSkuUpdate: string;
        /**
         * The maximum capacity reservation level available for this workspace, when CapacityReservation sku is selected.
         */
        maxCapacityReservationLevel: number;
        /**
         * The name of the SKU.
         */
        name: string;
    }
