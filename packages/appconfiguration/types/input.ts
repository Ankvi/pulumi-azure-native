import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace appconfiguration {
    /**
     * The encryption settings for a configuration store.
     */
    export interface EncryptionPropertiesArgs {
        /**
         * Key vault properties.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }

    /**
     * Settings concerning key vault encryption for a configuration store.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The client id of the identity which will be used to access key vault.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * The URI of the key vault key used to encrypt data.
         */
        keyIdentifier?: pulumi.Input<string>;
    }

    /**
     * Private endpoint which a connection belongs to.
     */
    export interface PrivateEndpointArgs {
        /**
         * The resource Id for private endpoint
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * The private link service connection description.
         */
        description?: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status?: pulumi.Input<string | enums.ConnectionStatus>;
    }

    /**
     * An identity that can be associated with a resource.
     */
    export interface ResourceIdentityArgs {
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
         */
        type?: pulumi.Input<string | enums.IdentityType>;
        /**
         * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes a configuration store SKU.
     */
    export interface SkuArgs {
        /**
         * The SKU name of the configuration store.
         */
        name: pulumi.Input<string>;
    }

    export namespace v20230301 {
        /**
         * The encryption settings for a configuration store.
         */
        export interface EncryptionPropertiesArgs {
            /**
             * Key vault properties.
             */
            keyVaultProperties?: pulumi.Input<v20230301.KeyVaultPropertiesArgs>;
        }

        /**
         * Settings concerning key vault encryption for a configuration store.
         */
        export interface KeyVaultPropertiesArgs {
            /**
             * The client id of the identity which will be used to access key vault.
             */
            identityClientId?: pulumi.Input<string>;
            /**
             * The URI of the key vault key used to encrypt data.
             */
            keyIdentifier?: pulumi.Input<string>;
        }

        /**
         * Private endpoint which a connection belongs to.
         */
        export interface PrivateEndpointArgs {
            /**
             * The resource Id for private endpoint
             */
            id?: pulumi.Input<string>;
        }

        /**
         * The state of a private link service connection.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The private link service connection description.
             */
            description?: pulumi.Input<string>;
            /**
             * The private link service connection status.
             */
            status?: pulumi.Input<string | enums.v20230301.ConnectionStatus>;
        }

        /**
         * An identity that can be associated with a resource.
         */
        export interface ResourceIdentityArgs {
            /**
             * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
             */
            type?: pulumi.Input<string | enums.v20230301.IdentityType>;
            /**
             * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Describes a configuration store SKU.
         */
        export interface SkuArgs {
            /**
             * The SKU name of the configuration store.
             */
            name: pulumi.Input<string>;
        }

    }
}
