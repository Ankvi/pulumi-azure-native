import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines binding between a resource and role
 * Azure REST API version: 2023-05-02-preview.
 *
 * Other available API versions: 2023-06-02-preview, 2023-07-02-preview, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview.
 */
export function getTrustedAccessRoleBinding(args: GetTrustedAccessRoleBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustedAccessRoleBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getTrustedAccessRoleBinding", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "trustedAccessRoleBindingName": args.trustedAccessRoleBindingName,
    }, opts);
}

export interface GetTrustedAccessRoleBindingArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
    /**
     * The name of trusted access role binding.
     */
    trustedAccessRoleBindingName: string;
}

/**
 * Defines binding between a resource and role
 */
export interface GetTrustedAccessRoleBindingResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of trusted access role binding.
     */
    readonly provisioningState: string;
    /**
     * A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
     */
    readonly roles: string[];
    /**
     * The ARM resource ID of source resource that trusted access is configured for.
     */
    readonly sourceResourceId: string;
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
 * Defines binding between a resource and role
 * Azure REST API version: 2023-05-02-preview.
 *
 * Other available API versions: 2023-06-02-preview, 2023-07-02-preview, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview.
 */
export function getTrustedAccessRoleBindingOutput(args: GetTrustedAccessRoleBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrustedAccessRoleBindingResult> {
    return pulumi.output(args).apply((a: any) => getTrustedAccessRoleBinding(a, opts))
}

export interface GetTrustedAccessRoleBindingOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of trusted access role binding.
     */
    trustedAccessRoleBindingName: pulumi.Input<string>;
}