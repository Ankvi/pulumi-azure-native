import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines binding between a resource and role
 */
export function getTrustedAccessRoleBinding(args: GetTrustedAccessRoleBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustedAccessRoleBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230602preview:getTrustedAccessRoleBinding", {
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
