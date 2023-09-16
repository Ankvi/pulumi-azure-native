import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace healthbot {
    /**
     * The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
     */
    export interface HealthBotPropertiesArgs {
        /**
         * KeyVault properties for the resource encryption.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Properties of the key vault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of the key vault key.
         */
        keyName: pulumi.Input<string>;
        /**
         * The Uri of the key vault.
         */
        keyVaultUri: pulumi.Input<string>;
        /**
         * The version of the key vault key.
         */
        keyVersion?: pulumi.Input<string>;
        /**
         * The user assigned identity (ARM resource id) that has access to the key.
         */
        userIdentity?: pulumi.Input<string>;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * The name of the Azure Health Bot SKU
         */
        name: pulumi.Input<enums.SkuName>;
    }

    export namespace v20201208preview {
        /**
         * The resource model definition representing SKU
         */
        export interface SkuArgs {
            /**
             * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
             */
            capacity?: pulumi.Input<number>;
            /**
             * If the service has different generations of hardware, for the same SKU, then that can be captured here.
             */
            family?: pulumi.Input<string>;
            /**
             * The name of the HealthBot SKU
             */
            name: pulumi.Input<enums.v20201208preview.SkuName>;
            /**
             * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
             */
            size?: pulumi.Input<string>;
            /**
             * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
             */
            tier?: pulumi.Input<enums.v20201208preview.SkuTier>;
        }

    }

    export namespace v20230501 {
        /**
         * The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
         */
        export interface HealthBotPropertiesArgs {
            /**
             * KeyVault properties for the resource encryption.
             */
            keyVaultProperties?: pulumi.Input<v20230501.KeyVaultPropertiesArgs>;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityArgs {
            /**
             * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
             */
            type?: pulumi.Input<enums.v20230501.ResourceIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Properties of the key vault.
         */
        export interface KeyVaultPropertiesArgs {
            /**
             * The name of the key vault key.
             */
            keyName: pulumi.Input<string>;
            /**
             * The Uri of the key vault.
             */
            keyVaultUri: pulumi.Input<string>;
            /**
             * The version of the key vault key.
             */
            keyVersion?: pulumi.Input<string>;
            /**
             * The user assigned identity (ARM resource id) that has access to the key.
             */
            userIdentity?: pulumi.Input<string>;
        }

        /**
         * The resource model definition representing SKU
         */
        export interface SkuArgs {
            /**
             * The name of the Azure Health Bot SKU
             */
            name: pulumi.Input<enums.v20230501.SkuName>;
        }

    }
}
