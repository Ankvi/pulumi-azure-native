import * as pulumi from "@pulumi/pulumi";
/**
 * Automanage configuration profile assignment properties.
 */
export interface ConfigurationProfileAssignmentPropertiesResponse {
    /**
     * The Automanage configurationProfile ARM Resource URI.
     */
    configurationProfile?: string;
    /**
     * The status of onboarding, which only appears in the response.
     */
    status: string;
    /**
     * The target VM resource URI
     */
    targetId: string;
}

/**
 * Automanage configuration profile properties.
 */
export interface ConfigurationProfilePropertiesResponse {
    /**
     * configuration dictionary of the configuration profile.
     */
    configuration?: any;
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
