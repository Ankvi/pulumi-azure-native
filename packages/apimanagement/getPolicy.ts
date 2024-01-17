import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the Global policy definition of the Api Management service.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getPolicy", {
        "format": args.format,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPolicyArgs {
    /**
     * Policy Export Format.
     */
    format?: string;
    /**
     * The identifier of the Policy.
     */
    policyId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Policy Contract details.
 */
export interface GetPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly format?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Contents of the Policy as defined by the format.
     */
    readonly value: string;
}
/**
 * Get the Global policy definition of the Api Management service.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPolicy(a, opts))
}

export interface GetPolicyOutputArgs {
    /**
     * Policy Export Format.
     */
    format?: pulumi.Input<string>;
    /**
     * The identifier of the Policy.
     */
    policyId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
