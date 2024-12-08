import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific project policy.
 * Azure REST API version: 2024-10-01-preview.
 */
export function getProjectPolicy(args: GetProjectPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectPolicy", {
        "devCenterName": args.devCenterName,
        "projectPolicyName": args.projectPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectPolicyArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the project policy.
     */
    projectPolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents an project policy resource.
 */
export interface GetProjectPolicyResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource policies that are a part of this project policy.
     */
    readonly resourcePolicies?: types.outputs.ResourcePolicyResponse[];
    /**
     * Resources that have access to the shared resources that are a part of this project policy.
     */
    readonly scopes?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a specific project policy.
 * Azure REST API version: 2024-10-01-preview.
 */
export function getProjectPolicyOutput(args: GetProjectPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getProjectPolicy", {
        "devCenterName": args.devCenterName,
        "projectPolicyName": args.projectPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectPolicyOutputArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the project policy.
     */
    projectPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}