import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines how the Video Analyzer account is (optionally) encrypted.
     */
    export interface AccountEncryptionArgs {
        /**
         * The Key Vault identity.
         */
        identity?: pulumi.Input<ResourceIdentityArgs>;
        /**
         * The properties of the key used to encrypt the account.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * The type of key used to encrypt the Account Key.
         */
        type: pulumi.Input<string | enums.AccountEncryptionKeyType>;
    }

    /**
     * The details for accessing the encryption keys in Key Vault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
         */
        keyIdentifier: pulumi.Input<string>;
    }

    /**
     * The user assigned managed identity to use when accessing a resource.
     */
    export interface ResourceIdentityArgs {
        /**
         * The user assigned managed identity's resource identifier to use when accessing a resource.
         */
        userAssignedIdentity: pulumi.Input<string>;
    }

    /**
     * The details about the associated storage account.
     */
    export interface StorageAccountArgs {
        /**
         * The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
         */
        id?: pulumi.Input<string>;
        /**
         * A managed identity that Video Analyzer will use to access the storage account.
         */
        identity?: pulumi.Input<ResourceIdentityArgs>;
    }

    /**
     * The managed identity for the Video Analyzer resource.
     */
    export interface VideoAnalyzerIdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<string>;
        /**
         * The User Assigned Managed Identities.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }
