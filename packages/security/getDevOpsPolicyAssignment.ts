import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DevOps Policy assignment resource.
 *
 * Uses Azure REST API version 2024-05-15-preview.
 */
export function getDevOpsPolicyAssignment(args: GetDevOpsPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetDevOpsPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDevOpsPolicyAssignment", {
        "policyAssignmentId": args.policyAssignmentId,
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetDevOpsPolicyAssignmentArgs {
    /**
     * The policy assignment Id.
     */
    policyAssignmentId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * DevOps Policy assignment resource.
 */
export interface GetDevOpsPolicyAssignmentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the DevOps policy assignment resource.
     */
    readonly properties: types.outputs.DevOpsPolicyAssignmentPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * DevOps Policy assignment resource.
 *
 * Uses Azure REST API version 2024-05-15-preview.
 */
export function getDevOpsPolicyAssignmentOutput(args: GetDevOpsPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDevOpsPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getDevOpsPolicyAssignment", {
        "policyAssignmentId": args.policyAssignmentId,
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetDevOpsPolicyAssignmentOutputArgs {
    /**
     * The policy assignment Id.
     */
    policyAssignmentId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}