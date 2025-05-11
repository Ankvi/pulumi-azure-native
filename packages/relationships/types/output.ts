import * as pulumi from "@pulumi/pulumi";
/**
 * dependencyOf relationship properties.
 */
export interface DependencyOfRelationshipPropertiesResponse {
    /**
     * Metadata about the relationship.
     */
    metadata: RelationshipMetadataResponse;
    /**
     * Information about the origin of the relationship.
     */
    originInformation: RelationshipOriginInformationResponse;
    /**
     * The provisioning state of the relationship.
     */
    provisioningState: string;
    /**
     * The relationship source resource id.
     */
    sourceId: string;
    /**
     * The relationship target resource id.
     */
    targetId: string;
    /**
     * The relationship target tenant id.
     */
    targetTenant?: string;
}

/**
 * Provides information about the relationship properties.
 */
export interface RelationshipMetadataResponse {
    /**
     * The type of the relationship source resource.
     */
    sourceType: string;
    /**
     * The type of the relationship target resource.
     */
    targetType: string;
}

/**
 * Provides information about the origin of a relationship.
 */
export interface RelationshipOriginInformationResponse {
    /**
     * The name of the discovery engine that created the relationship.
     */
    discoveryEngine: string;
    /**
     * Identifies the origin type of the relationship.
     */
    relationshipOriginType: string;
}

/**
 * ServiceGroupMember relationship properties.
 */
export interface ServiceGroupMemberRelationshipPropertiesResponse {
    /**
     * Metadata about the relationship.
     */
    metadata: RelationshipMetadataResponse;
    /**
     * Information about the origin of the relationship.
     */
    originInformation: RelationshipOriginInformationResponse;
    /**
     * The provisioning state of the relationship.
     */
    provisioningState: string;
    /**
     * The relationship source resource id.
     */
    sourceId: string;
    /**
     * The relationship target resource id.
     */
    targetId: string;
    /**
     * The relationship target tenant id.
     */
    targetTenant?: string;
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
