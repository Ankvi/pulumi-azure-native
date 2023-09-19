import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Contains information about the auto-storage account associated with a Batch account.
     */
    export interface AutoStoragePropertiesResponse {
        /**
         * The authentication mode which the Batch service will use to manage the auto-storage account.
         */
        authenticationMode?: string;
        /**
         * The UTC time at which storage keys were last synchronized with the Batch account.
         */
        lastKeySync: string;
        /**
         * The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
         */
        nodeIdentityReference?: ComputeNodeIdentityReferenceResponse;
        /**
         * The resource ID of the storage account to be used for auto-storage account.
         */
        storageAccountId: string;
    }
    /**
     * autoStoragePropertiesResponseProvideDefaults sets the appropriate defaults for AutoStoragePropertiesResponse
     */
    export function autoStoragePropertiesResponseProvideDefaults(val: AutoStoragePropertiesResponse): AutoStoragePropertiesResponse {
        return {
            ...val,
            authenticationMode: (val.authenticationMode) ?? "StorageKeys",
        };
    }

    /**
     * The identity of the Batch account, if configured. This is used when the user specifies 'Microsoft.KeyVault' as their Batch account encryption configuration or when `ManagedIdentity` is selected as the auto-storage authentication mode.
     */
    export interface BatchAccountIdentityResponse {
        /**
         * The principal id of the Batch account. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id associated with the Batch account. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the Batch account.
         */
        type: string;
        /**
         * The list of user identities associated with the Batch account.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponse};
    }

    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    export interface ComputeNodeIdentityReferenceResponse {
        /**
         * The ARM resource id of the user assigned identity.
         */
        resourceId?: string;
    }

    /**
     * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
     */
    export interface EncryptionPropertiesResponse {
        /**
         * Type of the key source.
         */
        keySource?: string;
        /**
         * Additional details when using Microsoft.KeyVault
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
    }

    /**
     * KeyVault configuration when using an encryption KeySource of Microsoft.KeyVault.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * Full path to the versioned secret. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:
         *
         *  The Batch Account has a System Assigned identity
         *  The account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissions
         *  The KeyVault has soft-delete and purge protection enabled
         */
        keyIdentifier?: string;
    }

    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    export interface KeyVaultReferenceResponse {
        /**
         * The resource ID of the Azure key vault associated with the Batch account.
         */
        id: string;
        /**
         * The URL of the Azure key vault associated with the Batch account.
         */
        url: string;
    }

    /**
     * Contains information about a private link resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The ETag of the resource, used for concurrency statements.
         */
        etag: string;
        /**
         * The ID of the resource.
         */
        id: string;
        /**
         * The name of the resource.
         */
        name: string;
        /**
         * The private endpoint of the private endpoint connection.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * The private link service connection state of the private endpoint connection
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        provisioningState: string;
        /**
         * The type of the resource.
         */
        type: string;
    }

    /**
     * The private endpoint of the private endpoint connection.
     */
    export interface PrivateEndpointResponse {
        id: string;
    }

    /**
     * The private link service connection state of the private endpoint connection
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        actionRequired: string;
        description?: string;
        status: string;
    }

    /**
     * The list of associated user identities.
     */
    export interface UserAssignedIdentitiesResponse {
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
     * A VM Family and its associated core quota for the Batch account.
     */
    export interface VirtualMachineFamilyCoreQuotaResponse {
        /**
         * The core quota for the VM family for the Batch account.
         */
        coreQuota: number;
        /**
         * The Virtual Machine family name.
         */
        name: string;
    }
