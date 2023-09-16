import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace maps {
    /**
     * Creator resource properties
     */
    export interface CreatorPropertiesResponse {
        /**
         * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
         */
        provisioningState: string;
        /**
         * The storage units to be allocated. Integer values from 1 to 100, inclusive.
         */
        storageUnits: number;
    }

    /**
     * Additional Map account properties
     */
    export interface MapsAccountPropertiesResponse {
        /**
         * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
         */
        disableLocalAuth?: boolean;
        /**
         * the state of the provisioning.
         */
        provisioningState: string;
        /**
         * A unique identifier for the maps account
         */
        uniqueId: string;
    }
    /**
     * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
     */
    export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
        return {
            ...val,
            disableLocalAuth: (val.disableLocalAuth) ?? false,
        };
    }

    /**
     * Private Atlas resource properties
     */
    export interface PrivateAtlasPropertiesResponse {
        /**
         * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
         */
        provisioningState?: string;
    }

    /**
     * The SKU of the Maps Account.
     */
    export interface SkuResponse {
        /**
         * The name of the SKU, in standard format (such as S0).
         */
        name: string;
        /**
         * Gets the sku tier. This is based on the SKU name.
         */
        tier: string;
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

    export namespace v20180501 {
        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesResponse {
            /**
             * A unique identifier for the maps account
             */
            xMsClientId?: string;
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuResponse {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: string;
            /**
             * Gets the sku tier. This is based on the SKU name.
             */
            tier: string;
        }

    }

    export namespace v20200201preview {
        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesResponse {
            /**
             * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
             */
            provisioningState?: string;
        }

        /**
         * Private Atlas resource properties
         */
        export interface PrivateAtlasPropertiesResponse {
            /**
             * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
             */
            provisioningState?: string;
        }

    }

    export namespace v20210201 {
        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesResponse {
            /**
             * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
             */
            provisioningState: string;
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: number;
        }

        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesResponse {
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
             */
            disableLocalAuth?: boolean;
            /**
             * the state of the provisioning.
             */
            provisioningState: string;
            /**
             * A unique identifier for the maps account
             */
            uniqueId: string;
        }
        /**
         * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
         */
        export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuResponse {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: string;
            /**
             * Gets the sku tier. This is based on the SKU name.
             */
            tier: string;
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

    export namespace v20211201preview {
        /**
         * Specifies a CORS rule for the Map Account.
         */
        export interface CorsRuleResponse {
            /**
             * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
             */
            allowedOrigins: string[];
        }

        /**
         * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
         */
        export interface CorsRulesResponse {
            /**
             * The list of CORS rules. You can include up to five CorsRule elements in the request. 
             */
            corsRules?: v20211201preview.CorsRuleResponse[];
        }

        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesResponse {
            /**
             * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
             */
            provisioningState: string;
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: number;
        }

        /**
         * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
         */
        export interface LinkedResourceResponse {
            /**
             * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
             */
            id: string;
            /**
             * A provided name which uniquely identifies the linked resource.
             */
            uniqueName: string;
        }

        /**
         * Identity for the resource.
         */
        export interface ManagedServiceIdentityResponse {
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
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: {[key: string]: v20211201preview.ManagedServiceIdentityResponseUserAssignedIdentities};
        }

        export interface ManagedServiceIdentityResponseUserAssignedIdentities {
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
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesResponse {
            /**
             * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
             */
            cors?: v20211201preview.CorsRulesResponse;
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
             */
            disableLocalAuth?: boolean;
            /**
             * Sets the resources to be used for Managed Identities based operations for the Map account resource.
             */
            linkedResources?: v20211201preview.LinkedResourceResponse[];
            /**
             * The provisioning state of the Map account resource.
             */
            provisioningState: string;
            /**
             * A unique identifier for the maps account
             */
            uniqueId: string;
        }
        /**
         * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
         */
        export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuResponse {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: string;
            /**
             * Gets the sku tier. This is based on the SKU name.
             */
            tier: string;
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

    export namespace v20230601 {
        /**
         * Specifies a CORS rule for the Map Account.
         */
        export interface CorsRuleResponse {
            /**
             * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
             */
            allowedOrigins: string[];
        }

        /**
         * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
         */
        export interface CorsRulesResponse {
            /**
             * The list of CORS rules. You can include up to five CorsRule elements in the request. 
             */
            corsRules?: v20230601.CorsRuleResponse[];
        }

        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesResponse {
            /**
             * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
             */
            provisioningState: string;
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: number;
        }

        /**
         * All Customer-managed key encryption properties for the resource.
         */
        export interface CustomerManagedKeyEncryptionResponse {
            /**
             * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
             */
            keyEncryptionKeyIdentity?: v20230601.CustomerManagedKeyEncryptionResponseKeyEncryptionKeyIdentity;
            /**
             * key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
             */
            keyEncryptionKeyUrl?: string;
        }

        /**
         * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
         */
        export interface CustomerManagedKeyEncryptionResponseKeyEncryptionKeyIdentity {
            /**
             * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
             */
            delegatedIdentityClientId?: string;
            /**
             * Values can be systemAssignedIdentity or userAssignedIdentity
             */
            identityType?: string;
            /**
             * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity.
             */
            userAssignedIdentityResourceId?: string;
        }

        /**
         * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
         */
        export interface EncryptionResponse {
            /**
             * All Customer-managed key encryption properties for the resource.
             */
            customerManagedKeyEncryption?: v20230601.CustomerManagedKeyEncryptionResponse;
            /**
             * Values are enabled and disabled.
             */
            infrastructureEncryption?: string;
        }

        /**
         * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
         */
        export interface LinkedResourceResponse {
            /**
             * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
             */
            id: string;
            /**
             * A provided name which uniquely identifies the linked resource.
             */
            uniqueName: string;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: string;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: {[key: string]: v20230601.UserAssignedIdentityResponse};
        }

        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesResponse {
            /**
             * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
             */
            cors?: v20230601.CorsRulesResponse;
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
             */
            disableLocalAuth?: boolean;
            /**
             * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
             */
            encryption?: v20230601.EncryptionResponse;
            /**
             * The array of associated resources to the Map account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Map Account Managed Identity(s) permissions to those resource(s).
             */
            linkedResources?: v20230601.LinkedResourceResponse[];
            /**
             * The provisioning state of the Map account resource, Account updates can only be performed on terminal states. Terminal states: `Succeeded` and `Failed`
             */
            provisioningState: string;
            /**
             * A unique identifier for the maps account
             */
            uniqueId: string;
        }
        /**
         * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
         */
        export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuResponse {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: string;
            /**
             * Gets the sku tier. This is based on the SKU name.
             */
            tier: string;
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

        /**
         * User assigned identity properties
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of the assigned identity.
             */
            principalId: string;
        }

    }
}
