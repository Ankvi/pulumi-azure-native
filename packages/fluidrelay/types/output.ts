import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace fluidrelay {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    export interface CustomerManagedKeyEncryptionPropertiesResponse {
        /**
         * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
         */
        keyEncryptionKeyIdentity?: CustomerManagedKeyEncryptionPropertiesResponseKeyEncryptionKeyIdentity;
        /**
         * key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url.
         */
        keyEncryptionKeyUrl?: string;
    }

    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    export interface CustomerManagedKeyEncryptionPropertiesResponseKeyEncryptionKeyIdentity {
        /**
         * Values can be SystemAssigned or UserAssigned
         */
        identityType?: string;
        /**
         * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
         */
        userAssignedIdentityResourceId?: string;
    }

    /**
     * All encryption configuration for a resource.
     */
    export interface EncryptionPropertiesResponse {
        /**
         * All Customer-managed key encryption properties for the resource.
         */
        customerManagedKeyEncryption?: CustomerManagedKeyEncryptionPropertiesResponse;
    }

    /**
     * The Fluid Relay endpoints for this server
     */
    export interface FluidRelayEndpointsResponse {
        /**
         * The Fluid Relay Orderer endpoints.
         */
        ordererEndpoints: string[];
        /**
         * The Fluid Relay service endpoints.
         */
        serviceEndpoints: string[];
        /**
         * The Fluid Relay storage endpoints.
         */
        storageEndpoints: string[];
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
        type?: string;
        /**
         * The list of user identities associated with the resource.
         */
        userAssignedIdentities?: {[key: string]: IdentityResponseUserAssignedIdentities};
    }

    export interface IdentityResponseUserAssignedIdentities {
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

    export namespace v20210615preview {
        /**
         * The Fluid Relay endpoints for this server
         */
        export interface FluidRelayEndpointsResponse {
            /**
             * The Fluid Relay Orderer endpoints.
             */
            ordererEndpoints: string[];
            /**
             * The Fluid Relay storage endpoints.
             */
            storageEndpoints: string[];
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
            type?: string;
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

    }

    export namespace v20220601 {
        /**
         * All Customer-managed key encryption properties for the resource.
         */
        export interface CustomerManagedKeyEncryptionPropertiesResponse {
            /**
             * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
             */
            keyEncryptionKeyIdentity?: v20220601.CustomerManagedKeyEncryptionPropertiesResponseKeyEncryptionKeyIdentity;
            /**
             * key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url.
             */
            keyEncryptionKeyUrl?: string;
        }

        /**
         * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
         */
        export interface CustomerManagedKeyEncryptionPropertiesResponseKeyEncryptionKeyIdentity {
            /**
             * Values can be SystemAssigned or UserAssigned
             */
            identityType?: string;
            /**
             * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
             */
            userAssignedIdentityResourceId?: string;
        }

        /**
         * All encryption configuration for a resource.
         */
        export interface EncryptionPropertiesResponse {
            /**
             * All Customer-managed key encryption properties for the resource.
             */
            customerManagedKeyEncryption?: v20220601.CustomerManagedKeyEncryptionPropertiesResponse;
        }

        /**
         * The Fluid Relay endpoints for this server
         */
        export interface FluidRelayEndpointsResponse {
            /**
             * The Fluid Relay Orderer endpoints.
             */
            ordererEndpoints: string[];
            /**
             * The Fluid Relay service endpoints.
             */
            serviceEndpoints: string[];
            /**
             * The Fluid Relay storage endpoints.
             */
            storageEndpoints: string[];
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
            type?: string;
            /**
             * The list of user identities associated with the resource.
             */
            userAssignedIdentities?: {[key: string]: v20220601.IdentityResponseUserAssignedIdentities};
        }

        export interface IdentityResponseUserAssignedIdentities {
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

    }
}
