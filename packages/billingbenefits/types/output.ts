import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Plan for the resource.
 */
export interface PlanResponse {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: string;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: string;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: string;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: string;
    /**
     * The version of the desired product/artifact.
     */
    version?: string;
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
     * The name of the SKU. E.g. P3. It is typically a letter+number code
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
