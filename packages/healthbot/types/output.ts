import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace healthbot {
    /**
     * An entry of HealthBotKeysResponse
     */
    export interface HealthBotKeyResponse {
        /**
         * The name of the key.
         */
        keyName?: string;
        /**
         * The value of the key.
         */
        value?: string;
    }

    /**
     * The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
     */
    export interface HealthBotPropertiesResponse {
        /**
         * The link.
         */
        botManagementPortalLink: string;
        /**
         * KeyVault properties for the resource encryption.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
        /**
         * The provisioning state of the Azure Health Bot resource.
         */
        provisioningState: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Properties of the key vault.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The name of the key vault key.
         */
        keyName: string;
        /**
         * The Uri of the key vault.
         */
        keyVaultUri: string;
        /**
         * The version of the key vault key.
         */
        keyVersion?: string;
        /**
         * The user assigned identity (ARM resource id) that has access to the key.
         */
        userIdentity?: string;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * The name of the Azure Health Bot SKU
         */
        name: string;
    }

    /**
     * Read only system data
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC)
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource
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
         * The type of identity that last modified the resource
         */
        lastModifiedByType?: string;
    }

    /**
     * The details of the user assigned managed identity used by the Video Analyzer resource.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of user assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of user assigned identity.
         */
        principalId: string;
    }

    export namespace v20201208preview {
        /**
         * The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
         */
        export interface HealthBotPropertiesResponse {
            /**
             * The link.
             */
            botManagementPortalLink: string;
            /**
             * The provisioning state of the Healthcare bot resource.
             */
            provisioningState: string;
        }

        /**
         * The resource model definition representing SKU
         */
        export interface SkuResponse {
            /**
             * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
             */
            capacity?: number;
            /**
             * If the service has different generations of hardware, for the same SKU, then that can be captured here.
             */
            family?: string;
            /**
             * The name of the HealthBot SKU
             */
            name: string;
            /**
             * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
             */
            size?: string;
            /**
             * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
             */
            tier?: string;
        }

        /**
         * Read only system data
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC)
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource
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
             * The type of identity that last modified the resource
             */
            lastModifiedByType?: string;
        }

    }

    export namespace v20230501 {
        /**
         * An entry of HealthBotKeysResponse
         */
        export interface HealthBotKeyResponse {
            /**
             * The name of the key.
             */
            keyName?: string;
            /**
             * The value of the key.
             */
            value?: string;
        }

        /**
         * The properties of a Azure Health Bot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
         */
        export interface HealthBotPropertiesResponse {
            /**
             * The link.
             */
            botManagementPortalLink: string;
            /**
             * KeyVault properties for the resource encryption.
             */
            keyVaultProperties?: v20230501.KeyVaultPropertiesResponse;
            /**
             * The provisioning state of the Azure Health Bot resource.
             */
            provisioningState: string;
        }

        /**
         * Identity for the resource.
         */
        export interface IdentityResponse {
            /**
             * The principal ID of resource identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of resource. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
             */
            type?: string;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20230501.UserAssignedIdentityResponse};
        }

        /**
         * Properties of the key vault.
         */
        export interface KeyVaultPropertiesResponse {
            /**
             * The name of the key vault key.
             */
            keyName: string;
            /**
             * The Uri of the key vault.
             */
            keyVaultUri: string;
            /**
             * The version of the key vault key.
             */
            keyVersion?: string;
            /**
             * The user assigned identity (ARM resource id) that has access to the key.
             */
            userIdentity?: string;
        }

        /**
         * The resource model definition representing SKU
         */
        export interface SkuResponse {
            /**
             * The name of the Azure Health Bot SKU
             */
            name: string;
        }

        /**
         * Read only system data
         */
        export interface SystemDataResponse {
            /**
             * The timestamp of resource creation (UTC)
             */
            createdAt?: string;
            /**
             * The identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource
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
             * The type of identity that last modified the resource
             */
            lastModifiedByType?: string;
        }

        /**
         * The details of the user assigned managed identity used by the Video Analyzer resource.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of user assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of user assigned identity.
             */
            principalId: string;
        }

    }
}
