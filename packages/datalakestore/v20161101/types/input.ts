import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The parameters used to create a new firewall rule while creating a new Data Lake Store account.
     */
    export interface CreateFirewallRuleWithAccountParametersArgs {
        /**
         * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        endIpAddress: pulumi.Input<string>;
        /**
         * The unique name of the firewall rule to create.
         */
        name: pulumi.Input<string>;
        /**
         * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        startIpAddress: pulumi.Input<string>;
    }

    /**
     * The parameters used to create a new trusted identity provider while creating a new Data Lake Store account.
     */
    export interface CreateTrustedIdProviderWithAccountParametersArgs {
        /**
         * The URL of this trusted identity provider.
         */
        idProvider: pulumi.Input<string>;
        /**
         * The unique name of the trusted identity provider to create.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The parameters used to create a new virtual network rule while creating a new Data Lake Store account.
     */
    export interface CreateVirtualNetworkRuleWithAccountParametersArgs {
        /**
         * The unique name of the virtual network rule to create.
         */
        name: pulumi.Input<string>;
        /**
         * The resource identifier for the subnet.
         */
        subnetId: pulumi.Input<string>;
    }

    /**
     * The encryption configuration for the account.
     */
    export interface EncryptionConfigArgs {
        /**
         * The Key Vault information for connecting to user managed encryption keys.
         */
        keyVaultMetaInfo?: pulumi.Input<KeyVaultMetaInfoArgs>;
        /**
         * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
         */
        type: pulumi.Input<enums.EncryptionConfigType>;
    }

    /**
     * The encryption identity properties.
     */
    export interface EncryptionIdentityArgs {
        /**
         * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
         */
        type: pulumi.Input<enums.EncryptionIdentityType>;
    }

    /**
     * Metadata information used by account encryption.
     */
    export interface KeyVaultMetaInfoArgs {
        /**
         * The name of the user managed encryption key.
         */
        encryptionKeyName: pulumi.Input<string>;
        /**
         * The version of the user managed encryption key.
         */
        encryptionKeyVersion: pulumi.Input<string>;
        /**
         * The resource identifier for the user managed Key Vault being used to encrypt.
         */
        keyVaultResourceId: pulumi.Input<string>;
    }
