import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace maps {
    /**
     * Creator resource properties
     */
    export interface CreatorPropertiesArgs {
        /**
         * The storage units to be allocated. Integer values from 1 to 100, inclusive.
         */
        storageUnits: pulumi.Input<number>;
    }

    /**
     * Additional Map account properties
     */
    export interface MapsAccountPropertiesArgs {
        /**
         * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
    }
    /**
     * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
     */
    export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
        return {
            ...val,
            disableLocalAuth: (val.disableLocalAuth) ?? false,
        };
    }

    /**
     * The SKU of the Maps Account.
     */
    export interface SkuArgs {
        /**
         * The name of the SKU, in standard format (such as S0).
         */
        name: pulumi.Input<string | enums.Name>;
    }

    export namespace v20180501 {
        /**
         * The SKU of the Maps Account.
         */
        export interface SkuArgs {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: pulumi.Input<string>;
        }

    }

    export namespace v20200201preview {
    }

    export namespace v20210201 {
        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesArgs {
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: pulumi.Input<number>;
        }

        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesArgs {
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
             */
            disableLocalAuth?: pulumi.Input<boolean>;
        }
        /**
         * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
         */
        export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuArgs {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: pulumi.Input<string | enums.v20210201.Name>;
        }

    }

    export namespace v20211201preview {
        /**
         * Specifies a CORS rule for the Map Account.
         */
        export interface CorsRuleArgs {
            /**
             * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
         */
        export interface CorsRulesArgs {
            /**
             * The list of CORS rules. You can include up to five CorsRule elements in the request. 
             */
            corsRules?: pulumi.Input<pulumi.Input<v20211201preview.CorsRuleArgs>[]>;
        }

        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesArgs {
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: pulumi.Input<number>;
        }

        /**
         * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
         */
        export interface LinkedResourceArgs {
            /**
             * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
             */
            id: pulumi.Input<string>;
            /**
             * A provided name which uniquely identifies the linked resource.
             */
            uniqueName: pulumi.Input<string>;
        }

        /**
         * Identity for the resource.
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20211201preview.ResourceIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesArgs {
            /**
             * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
             */
            cors?: pulumi.Input<v20211201preview.CorsRulesArgs>;
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
             */
            disableLocalAuth?: pulumi.Input<boolean>;
            /**
             * Sets the resources to be used for Managed Identities based operations for the Map account resource.
             */
            linkedResources?: pulumi.Input<pulumi.Input<v20211201preview.LinkedResourceArgs>[]>;
        }
        /**
         * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
         */
        export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuArgs {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: pulumi.Input<string | enums.v20211201preview.Name>;
        }

    }

    export namespace v20230601 {
        /**
         * Specifies a CORS rule for the Map Account.
         */
        export interface CorsRuleArgs {
            /**
             * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
         */
        export interface CorsRulesArgs {
            /**
             * The list of CORS rules. You can include up to five CorsRule elements in the request. 
             */
            corsRules?: pulumi.Input<pulumi.Input<v20230601.CorsRuleArgs>[]>;
        }

        /**
         * Creator resource properties
         */
        export interface CreatorPropertiesArgs {
            /**
             * The storage units to be allocated. Integer values from 1 to 100, inclusive.
             */
            storageUnits: pulumi.Input<number>;
        }

        /**
         * All Customer-managed key encryption properties for the resource.
         */
        export interface CustomerManagedKeyEncryptionArgs {
            /**
             * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
             */
            keyEncryptionKeyIdentity?: pulumi.Input<v20230601.CustomerManagedKeyEncryptionKeyEncryptionKeyIdentityArgs>;
            /**
             * key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
             */
            keyEncryptionKeyUrl?: pulumi.Input<string>;
        }

        /**
         * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
         */
        export interface CustomerManagedKeyEncryptionKeyEncryptionKeyIdentityArgs {
            /**
             * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
             */
            delegatedIdentityClientId?: pulumi.Input<string>;
            /**
             * Values can be systemAssignedIdentity or userAssignedIdentity
             */
            identityType?: pulumi.Input<string | enums.v20230601.IdentityType>;
            /**
             * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity.
             */
            userAssignedIdentityResourceId?: pulumi.Input<string>;
        }

        /**
         * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
         */
        export interface EncryptionArgs {
            /**
             * All Customer-managed key encryption properties for the resource.
             */
            customerManagedKeyEncryption?: pulumi.Input<v20230601.CustomerManagedKeyEncryptionArgs>;
            /**
             * Values are enabled and disabled.
             */
            infrastructureEncryption?: pulumi.Input<string | enums.v20230601.InfrastructureEncryption>;
        }

        /**
         * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
         */
        export interface LinkedResourceArgs {
            /**
             * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
             */
            id: pulumi.Input<string>;
            /**
             * A provided name which uniquely identifies the linked resource.
             */
            uniqueName: pulumi.Input<string>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230601.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Additional Map account properties
         */
        export interface MapsAccountPropertiesArgs {
            /**
             * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
             */
            cors?: pulumi.Input<v20230601.CorsRulesArgs>;
            /**
             * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
             */
            disableLocalAuth?: pulumi.Input<boolean>;
            /**
             * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
             */
            encryption?: pulumi.Input<v20230601.EncryptionArgs>;
            /**
             * The array of associated resources to the Map account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Map Account Managed Identity(s) permissions to those resource(s).
             */
            linkedResources?: pulumi.Input<pulumi.Input<v20230601.LinkedResourceArgs>[]>;
        }
        /**
         * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
         */
        export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
            return {
                ...val,
                disableLocalAuth: (val.disableLocalAuth) ?? false,
            };
        }

        /**
         * The SKU of the Maps Account.
         */
        export interface SkuArgs {
            /**
             * The name of the SKU, in standard format (such as S0).
             */
            name: pulumi.Input<string | enums.v20230601.Name>;
        }

    }
}
