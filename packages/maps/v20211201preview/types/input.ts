import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        corsRules?: pulumi.Input<pulumi.Input<CorsRuleArgs>[]>;
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
        type?: pulumi.Input<enums.ResourceIdentityType>;
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
        cors?: pulumi.Input<CorsRulesArgs>;
        /**
         * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
         */
        disableLocalAuth?: pulumi.Input<boolean>;
        /**
         * Sets the resources to be used for Managed Identities based operations for the Map account resource.
         */
        linkedResources?: pulumi.Input<pulumi.Input<LinkedResourceArgs>[]>;
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
