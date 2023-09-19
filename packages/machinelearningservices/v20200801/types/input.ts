import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface EncryptionPropertyArgs {
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: pulumi.Input<string | enums.EncryptionStatus>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface KeyVaultPropertiesArgs {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: pulumi.Input<string>;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: pulumi.Input<string>;
    }

    export interface SharedPrivateLinkResourceArgs {
        /**
         * The private link resource group id.
         */
        groupId?: pulumi.Input<string>;
        /**
         * Unique name of the private link.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: pulumi.Input<string>;
        /**
         * Request message.
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Sku of the resource
     */
    export interface SkuArgs {
        /**
         * Name of the sku
         */
        name?: pulumi.Input<string>;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: pulumi.Input<string>;
    }
