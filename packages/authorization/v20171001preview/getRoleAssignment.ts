import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the specified role assignment.
 */
export function getRoleAssignment(args: GetRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization/v20171001preview:getRoleAssignment", {
        "roleAssignmentName": args.roleAssignmentName,
        "scope": args.scope,
    }, opts);
}

export interface GetRoleAssignmentArgs {
    /**
     * The name of the role assignment to get.
     */
    roleAssignmentName: string;
    /**
     * The scope of the role assignment.
     */
    scope: string;
}

/**
 * Role Assignments
 */
export interface GetRoleAssignmentResult {
    /**
     * The Delegation flag for the role assignment
     */
    readonly canDelegate?: boolean;
    /**
     * The role assignment ID.
     */
    readonly id: string;
    /**
     * The role assignment name.
     */
    readonly name: string;
    /**
     * The principal ID.
     */
    readonly principalId?: string;
    /**
     * The role definition ID.
     */
    readonly roleDefinitionId?: string;
    /**
     * The role assignment scope.
     */
    readonly scope?: string;
    /**
     * The role assignment type.
     */
    readonly type: string;
}
/**
 * Get the specified role assignment.
 */
export function getRoleAssignmentOutput(args: GetRoleAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getRoleAssignment(a, opts))
}

export interface GetRoleAssignmentOutputArgs {
    /**
     * The name of the role assignment to get.
     */
    roleAssignmentName: pulumi.Input<string>;
    /**
     * The scope of the role assignment.
     */
    scope: pulumi.Input<string>;
}