import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a policy fragment.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getPolicyFragment(args: GetPolicyFragmentArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyFragmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getPolicyFragment", {
        "format": args.format,
        "id": args.id,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPolicyFragmentArgs {
    /**
     * Policy fragment content format.
     */
    format?: string;
    /**
     * A resource identifier.
     */
    id: string;
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
 * Policy fragment contract details.
 */
export interface GetPolicyFragmentResult {
    /**
     * Policy fragment description.
     */
    readonly description?: string;
    /**
     * Format of the policy fragment content.
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
     * Contents of the policy fragment.
     */
    readonly value: string;
}
/**
 * Gets a policy fragment.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getPolicyFragmentOutput(args: GetPolicyFragmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyFragmentResult> {
    return pulumi.output(args).apply((a: any) => getPolicyFragment(a, opts))
}

export interface GetPolicyFragmentOutputArgs {
    /**
     * Policy fragment content format.
     */
    format?: pulumi.Input<string>;
    /**
     * A resource identifier.
     */
    id: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}