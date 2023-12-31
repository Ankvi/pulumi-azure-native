import * as pulumi from "@pulumi/pulumi";
/**
 * The ID of the parent management group.
 */
export interface DescendantParentGroupInfoResponse {
    /**
     * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id?: string;
}

/**
 * The entity.
 */
export interface EntityInfoResponse {
    /**
     * The friendly name of the management group.
     */
    displayName?: string;
    /**
     * The fully qualified ID for the entity.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id: string;
    /**
     * The users specific permissions to this item.
     */
    inheritedPermissions?: string;
    /**
     * The name of the entity. For example, 00000000-0000-0000-0000-000000000000
     */
    name: string;
    /**
     * Number of children is the number of Groups that are exactly one level underneath the current Group.
     */
    numberOfChildGroups?: number;
    /**
     * Number of children is the number of Groups and Subscriptions that are exactly one level underneath the current Group.
     */
    numberOfChildren?: number;
    numberOfDescendants?: number;
    /**
     * (Optional) The ID of the parent management group.
     */
    parent?: EntityParentGroupInfoResponse;
    /**
     * The parent display name chain from the root group to the immediate parent
     */
    parentDisplayNameChain?: string[];
    /**
     * The parent name chain from the root group to the immediate parent
     */
    parentNameChain?: string[];
    /**
     * The users specific permissions to this item.
     */
    permissions?: string;
    /**
     * The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000
     */
    tenantId?: string;
    /**
     * The type of the resource. For example, Microsoft.Management/managementGroups
     */
    type: string;
}

/**
 * (Optional) The ID of the parent management group.
 */
export interface EntityParentGroupInfoResponse {
    /**
     * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id?: string;
}

/**
 * The child information of a management group.
 */
export interface ManagementGroupChildInfoResponse {
    /**
     * The list of children.
     */
    children?: ManagementGroupChildInfoResponse[];
    /**
     * The friendly name of the child resource.
     */
    displayName?: string;
    /**
     * The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id?: string;
    /**
     * The name of the child entity.
     */
    name?: string;
    /**
     * The fully qualified resource type which includes provider namespace (e.g. Microsoft.Management/managementGroups)
     */
    type?: string;
}

/**
 * The details of a management group.
 */
export interface ManagementGroupDetailsResponse {
    /**
     * The ancestors of the management group.
     */
    managementGroupAncestors?: string[];
    /**
     * The ancestors of the management group displayed in reversed order, from immediate parent to the root.
     */
    managementGroupAncestorsChain?: ManagementGroupPathElementResponse[];
    /**
     * (Optional) The ID of the parent management group.
     */
    parent?: ParentGroupInfoResponse;
    /**
     * The path from the root to the current group.
     */
    path?: ManagementGroupPathElementResponse[];
    /**
     * The identity of the principal or process that updated the object.
     */
    updatedBy?: string;
    /**
     * The date and time when this object was last updated.
     */
    updatedTime?: string;
    /**
     * The version number of the object.
     */
    version?: number;
}

/**
 * A path element of a management group ancestors.
 */
export interface ManagementGroupPathElementResponse {
    /**
     * The friendly name of the group.
     */
    displayName?: string;
    /**
     * The name of the group.
     */
    name?: string;
}

/**
 * (Optional) The ID of the parent management group.
 */
export interface ParentGroupInfoResponse {
    /**
     * The friendly name of the parent management group.
     */
    displayName?: string;
    /**
     * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id?: string;
    /**
     * The name of the parent management group
     */
    name?: string;
}



