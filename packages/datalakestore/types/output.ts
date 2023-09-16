import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace datalakestore {
    /**
     * The encryption configuration for the account.
     */
    export interface EncryptionConfigResponse {
        /**
         * The Key Vault information for connecting to user managed encryption keys.
         */
        keyVaultMetaInfo?: KeyVaultMetaInfoResponse;
        /**
         * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
         */
        type: string;
    }

    /**
     * The encryption identity properties.
     */
    export interface EncryptionIdentityResponse {
        /**
         * The principal identifier associated with the encryption.
         */
        principalId: string;
        /**
         * The tenant identifier associated with the encryption.
         */
        tenantId: string;
        /**
         * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
         */
        type: string;
    }

    /**
     * Data Lake Store firewall rule information.
     */
    export interface FirewallRuleResponse {
        /**
         * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        endIpAddress: string;
        /**
         * The resource identifier.
         */
        id: string;
        /**
         * The resource name.
         */
        name: string;
        /**
         * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        startIpAddress: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * Metadata information used by account encryption.
     */
    export interface KeyVaultMetaInfoResponse {
        /**
         * The name of the user managed encryption key.
         */
        encryptionKeyName: string;
        /**
         * The version of the user managed encryption key.
         */
        encryptionKeyVersion: string;
        /**
         * The resource identifier for the user managed Key Vault being used to encrypt.
         */
        keyVaultResourceId: string;
    }

    /**
     * Data Lake Store trusted identity provider information.
     */
    export interface TrustedIdProviderResponse {
        /**
         * The resource identifier.
         */
        id: string;
        /**
         * The URL of this trusted identity provider.
         */
        idProvider: string;
        /**
         * The resource name.
         */
        name: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * Data Lake Store virtual network rule information.
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * The resource identifier.
         */
        id: string;
        /**
         * The resource name.
         */
        name: string;
        /**
         * The resource identifier for the subnet.
         */
        subnetId: string;
        /**
         * The resource type.
         */
        type: string;
    }

    export namespace v20161101 {
        /**
         * The encryption configuration for the account.
         */
        export interface EncryptionConfigResponse {
            /**
             * The Key Vault information for connecting to user managed encryption keys.
             */
            keyVaultMetaInfo?: v20161101.KeyVaultMetaInfoResponse;
            /**
             * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
             */
            type: string;
        }

        /**
         * The encryption identity properties.
         */
        export interface EncryptionIdentityResponse {
            /**
             * The principal identifier associated with the encryption.
             */
            principalId: string;
            /**
             * The tenant identifier associated with the encryption.
             */
            tenantId: string;
            /**
             * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
             */
            type: string;
        }

        /**
         * Data Lake Store firewall rule information.
         */
        export interface FirewallRuleResponse {
            /**
             * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
             */
            endIpAddress: string;
            /**
             * The resource identifier.
             */
            id: string;
            /**
             * The resource name.
             */
            name: string;
            /**
             * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
             */
            startIpAddress: string;
            /**
             * The resource type.
             */
            type: string;
        }

        /**
         * Metadata information used by account encryption.
         */
        export interface KeyVaultMetaInfoResponse {
            /**
             * The name of the user managed encryption key.
             */
            encryptionKeyName: string;
            /**
             * The version of the user managed encryption key.
             */
            encryptionKeyVersion: string;
            /**
             * The resource identifier for the user managed Key Vault being used to encrypt.
             */
            keyVaultResourceId: string;
        }

        /**
         * Data Lake Store trusted identity provider information.
         */
        export interface TrustedIdProviderResponse {
            /**
             * The resource identifier.
             */
            id: string;
            /**
             * The URL of this trusted identity provider.
             */
            idProvider: string;
            /**
             * The resource name.
             */
            name: string;
            /**
             * The resource type.
             */
            type: string;
        }

        /**
         * Data Lake Store virtual network rule information.
         */
        export interface VirtualNetworkRuleResponse {
            /**
             * The resource identifier.
             */
            id: string;
            /**
             * The resource name.
             */
            name: string;
            /**
             * The resource identifier for the subnet.
             */
            subnetId: string;
            /**
             * The resource type.
             */
            type: string;
        }

    }
}
