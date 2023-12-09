import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Cloud Hsm Cluster backup information
     */
    export interface BackupPropertiesArgs {
        /**
         * Azure storage Resource Uri
         */
        azureStorageResourceUri?: pulumi.Input<string>;
    }

    /**
     * Security domain properties information for Cloud HSM cluster
     */
    export interface CloudHsmClusterSecurityDomainPropertiesArgs {
        /**
         * status of security domain activation
         */
        activationStatus?: pulumi.Input<string>;
        /**
         * FIPS state information for security domain
         */
        fipsState?: pulumi.Input<number>;
    }

    /**
     * Cloud Hsm Cluster SKU information
     */
    export interface CloudHsmClusterSkuArgs {
        /**
         * Sku capacity
         */
        capacity?: pulumi.Input<number>;
        /**
         * Sku family of the Cloud HSM Cluster
         */
        family: pulumi.Input<string | enums.CloudHsmClusterSkuFamily>;
        /**
         * Sku name of the Cloud HSM Cluster
         */
        name: pulumi.Input<enums.CloudHsmClusterSkuName>;
    }

    /**
     * The Cloud HSM Properties
     */
    export interface CloudHsmPropertiesArgs {
        /**
         * FQDN of the Cloud HSM
         */
        fqdn?: pulumi.Input<string>;
        /**
         * The Cloud HSM State
         */
        state?: pulumi.Input<string>;
        /**
         * The Cloud HSM State message
         */
        stateMessage?: pulumi.Input<string>;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The private endpoint connection resource.
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * Modified whenever there is a change in the state of private endpoint connection.
         */
        etag?: pulumi.Input<string>;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Cloud Hsm Cluster restore information
     */
    export interface RestorePropertiesArgs {
        /**
         * Azure Blob storage container Uri
         */
        azureStorageResourceUri?: pulumi.Input<string>;
        /**
         * Directory name in Azure Storage Blob where the backup is stored
         */
        foldername?: pulumi.Input<string>;
    }
