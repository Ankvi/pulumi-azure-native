import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The cluster sku definition.
     */
    export interface ClusterSkuArgs {
        /**
         * The capacity value
         */
        capacity?: pulumi.Input<number>;
        /**
         * The name of the SKU.
         */
        name?: pulumi.Input<string | enums.ClusterSkuNameEnum>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<enums.IdentityType>;
    }

    /**
     * The key vault properties.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of the key associated with the Log Analytics cluster.
         */
        keyName?: pulumi.Input<string>;
        /**
         * The Key Vault uri which holds they key associated with the Log Analytics cluster.
         */
        keyVaultUri?: pulumi.Input<string>;
        /**
         * The version of the key associated with the Log Analytics cluster.
         */
        keyVersion?: pulumi.Input<string>;
    }

    /**
     * Describes a storage account connection.
     */
    export interface StorageAccountArgs {
        /**
         * The Azure Resource Manager ID of the storage account resource.
         */
        id: pulumi.Input<string>;
        /**
         * The storage account key.
         */
        key: pulumi.Input<string>;
    }

    /**
     * A tag of a saved search.
     */
    export interface TagArgs {
        /**
         * The tag name.
         */
        name: pulumi.Input<string>;
        /**
         * The tag value.
         */
        value: pulumi.Input<string>;
    }

    /**
     * The daily volume cap for ingestion.
     */
    export interface WorkspaceCappingArgs {
        /**
         * The workspace daily quota for ingestion.
         */
        dailyQuotaGb?: pulumi.Input<number>;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface WorkspaceSkuArgs {
        /**
         * The capacity reservation level for this workspace, when CapacityReservation sku is selected.
         */
        capacityReservationLevel?: pulumi.Input<number>;
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<string | enums.WorkspaceSkuNameEnum>;
    }
