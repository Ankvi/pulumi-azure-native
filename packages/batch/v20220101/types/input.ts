import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties related to the auto-storage account.
     */
    export interface AutoStorageBasePropertiesArgs {
        /**
         * The authentication mode which the Batch service will use to manage the auto-storage account.
         */
        authenticationMode?: pulumi.Input<enums.AutoStorageAuthenticationMode>;
        /**
         * The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
         */
        nodeIdentityReference?: pulumi.Input<ComputeNodeIdentityReferenceArgs>;
        /**
         * The resource ID of the storage account to be used for auto-storage account.
         */
        storageAccountId: pulumi.Input<string>;
    }
    /**
     * autoStorageBasePropertiesArgsProvideDefaults sets the appropriate defaults for AutoStorageBasePropertiesArgs
     */
    export function autoStorageBasePropertiesArgsProvideDefaults(val: AutoStorageBasePropertiesArgs): AutoStorageBasePropertiesArgs {
        return {
            ...val,
            authenticationMode: (val.authenticationMode) ?? "StorageKeys",
        };
    }

    /**
     * The identity of the Batch account, if configured. This is used when the user specifies 'Microsoft.KeyVault' as their Batch account encryption configuration or when `ManagedIdentity` is selected as the auto-storage authentication mode.
     */
    export interface BatchAccountIdentityArgs {
        /**
         * The type of identity used for the Batch account.
         */
        type: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the Batch account.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    export interface ComputeNodeIdentityReferenceArgs {
        /**
         * The ARM resource id of the user assigned identity.
         */
        resourceId?: pulumi.Input<string>;
    }

    /**
     * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
     */
    export interface EncryptionPropertiesArgs {
        /**
         * Type of the key source.
         */
        keySource?: pulumi.Input<enums.KeySource>;
        /**
         * Additional details when using Microsoft.KeyVault
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }

    /**
     * KeyVault configuration when using an encryption KeySource of Microsoft.KeyVault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * Full path to the versioned secret. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:
         *
         *  The Batch Account has a System Assigned identity
         *  The account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissions
         *  The KeyVault has soft-delete and purge protection enabled
         */
        keyIdentifier?: pulumi.Input<string>;
    }

    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    export interface KeyVaultReferenceArgs {
        /**
         * The resource ID of the Azure key vault associated with the Batch account.
         */
        id: pulumi.Input<string>;
        /**
         * The URL of the Azure key vault associated with the Batch account.
         */
        url: pulumi.Input<string>;
    }
