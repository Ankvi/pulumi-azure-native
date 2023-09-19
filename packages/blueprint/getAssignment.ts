import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a blueprint assignment.
 * Azure REST API version: 2018-11-01-preview.
 */
export function getAssignment(args: GetAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getAssignment", {
        "assignmentName": args.assignmentName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetAssignmentArgs {
    /**
     * Name of the blueprint assignment.
     */
    assignmentName: string;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: string;
}

/**
 * Represents a blueprint assignment.
 */
export interface GetAssignmentResult {
    /**
     * ID of the published version of a blueprint definition.
     */
    readonly blueprintId?: string;
    /**
     * Multi-line explain this resource.
     */
    readonly description?: string;
    /**
     * One-liner string explain this resource.
     */
    readonly displayName?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Managed identity for this blueprint assignment.
     */
    readonly identity: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The location of this blueprint assignment.
     */
    readonly location: string;
    /**
     * Defines how resources deployed by a blueprint assignment are locked.
     */
    readonly locks?: types.outputs.AssignmentLockSettingsResponse;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Blueprint assignment parameter values.
     */
    readonly parameters: {[key: string]: types.outputs.ParameterValueResponse};
    /**
     * State of the blueprint assignment.
     */
    readonly provisioningState: string;
    /**
     * Names and locations of resource group placeholders.
     */
    readonly resourceGroups: {[key: string]: types.outputs.ResourceGroupValueResponse};
    /**
     * The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required.
     */
    readonly scope?: string;
    /**
     * Status of blueprint assignment. This field is readonly.
     */
    readonly status: types.outputs.AssignmentStatusResponse;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Get a blueprint assignment.
 * Azure REST API version: 2018-11-01-preview.
 */
export function getAssignmentOutput(args: GetAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getAssignment(a, opts))
}

export interface GetAssignmentOutputArgs {
    /**
     * Name of the blueprint assignment.
     */
    assignmentName: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
}
