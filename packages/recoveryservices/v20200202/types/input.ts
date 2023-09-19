import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The details of the identity used for CMK
     */
    export interface CmkKekIdentityArgs {
        /**
         * Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field
         */
        useSystemAssignedIdentity?: pulumi.Input<boolean>;
        /**
         * The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * The properties of the Key Vault which hosts CMK
     */
    export interface CmkKeyVaultPropertiesArgs {
        /**
         * The key uri of the Customer Managed Key
         */
        keyUri?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityDataArgs {
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
         */
        type: pulumi.Input<string | enums.ResourceIdentityType>;
        /**
         * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    export interface SkuArgs {
        /**
         * The Sku name.
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * Properties of the vault.
     */
    export interface VaultPropertiesArgs {
        /**
         * Customer Managed Key details of the resource.
         */
        encryption?: pulumi.Input<VaultPropertiesEncryptionArgs>;
    }

    /**
     * Customer Managed Key details of the resource.
     */
    export interface VaultPropertiesEncryptionArgs {
        /**
         * Enabling/Disabling the Double Encryption state
         */
        infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryptionState>;
        /**
         * The details of the identity used for CMK
         */
        kekIdentity?: pulumi.Input<CmkKekIdentityArgs>;
        /**
         * The properties of the Key Vault which hosts CMK
         */
        keyVaultProperties?: pulumi.Input<CmkKeyVaultPropertiesArgs>;
    }
