import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the role assignment in the hub.
 * Azure REST API version: 2017-04-26.
 */
export function getRoleAssignment(args: GetRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getRoleAssignment", {
        "assignmentName": args.assignmentName,
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRoleAssignmentArgs {
    /**
     * The name of the role assignment.
     */
    assignmentName: string;
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Role Assignment resource format.
 */
export interface GetRoleAssignmentResult {
    /**
     * The name of the metadata object.
     */
    readonly assignmentName: string;
    /**
     * Widget types set for the assignment.
     */
    readonly conflationPolicies?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Connectors set for the assignment.
     */
    readonly connectors?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Localized description for the metadata.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display names for the metadata.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Interactions set for the assignment.
     */
    readonly interactions?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Kpis set for the assignment.
     */
    readonly kpis?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Links set for the assignment.
     */
    readonly links?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The principals being assigned to.
     */
    readonly principals: types.outputs.customerinsights.AssignmentPrincipalResponse[];
    /**
     * Profiles set for the assignment.
     */
    readonly profiles?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The Role assignments set for the relationship links.
     */
    readonly relationshipLinks?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * The Role assignments set for the relationships.
     */
    readonly relationships?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Type of roles.
     */
    readonly role: string;
    /**
     * The Role assignments set for the assignment.
     */
    readonly roleAssignments?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Sas Policies set for the assignment.
     */
    readonly sasPolicies?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * The Role assignments set for the assignment.
     */
    readonly segments?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Views set for the assignment.
     */
    readonly views?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
    /**
     * Widget types set for the assignment.
     */
    readonly widgetTypes?: types.outputs.customerinsights.ResourceSetDescriptionResponse;
}
/**
 * Gets the role assignment in the hub.
 * Azure REST API version: 2017-04-26.
 */
export function getRoleAssignmentOutput(args: GetRoleAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getRoleAssignment(a, opts))
}

export interface GetRoleAssignmentOutputArgs {
    /**
     * The name of the role assignment.
     */
    assignmentName: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
