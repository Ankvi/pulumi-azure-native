import * as pulumi from "@pulumi/pulumi";
/**
 * dependencyOf relationship properties.
 */
export interface DependencyOfRelationshipPropertiesArgs {
    /**
     * The relationship target resource id.
     */
    targetId: pulumi.Input<string>;
    /**
     * The relationship target tenant id.
     */
    targetTenant?: pulumi.Input<string>;
}

/**
 * ServiceGroupMember relationship properties.
 */
export interface ServiceGroupMemberRelationshipPropertiesArgs {
    /**
     * The relationship target resource id.
     */
    targetId: pulumi.Input<string>;
    /**
     * The relationship target tenant id.
     */
    targetTenant?: pulumi.Input<string>;
}
