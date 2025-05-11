import * as pulumi from "@pulumi/pulumi";
/**
 * The details of a management group used during creation.
 */
export interface CreateManagementGroupDetailsArgs {
    /**
     * (Optional) The ID of the parent management group used during creation.
     */
    parent?: pulumi.Input<CreateParentGroupInfoArgs>;
}

/**
 * (Optional) The ID of the parent management group used during creation.
 */
export interface CreateParentGroupInfoArgs {
    /**
     * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    id?: pulumi.Input<string>;
}

/**
 * The details of the parent serviceGroup.
 */
export interface ParentServiceGroupPropertiesArgs {
    /**
     * The fully qualified ID of the parent serviceGroup.  For example, '/providers/Microsoft.Management/serviceGroups/TestServiceGroup'
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * ServiceGroup creation request body parameters.
 */
export interface ServiceGroupPropertiesArgs {
    /**
     * The display name of the serviceGroup. For example, ServiceGroupTest1
     */
    displayName?: pulumi.Input<string>;
    /**
     * The details of the parent serviceGroup.
     */
    parent?: pulumi.Input<ParentServiceGroupPropertiesArgs>;
}
