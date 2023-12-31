import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        corsRules?: CorsRuleResponse[];
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
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
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
        cors?: CorsRulesResponse;
        /**
         * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
         */
        disableLocalAuth?: boolean;
        /**
         * Sets the resources to be used for Managed Identities based operations for the Map account resource.
         */
        linkedResources?: LinkedResourceResponse[];
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
