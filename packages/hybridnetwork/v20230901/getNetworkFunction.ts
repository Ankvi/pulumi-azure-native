import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified network function resource.
 */
export function getNetworkFunction(args: GetNetworkFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getNetworkFunction", {
        "networkFunctionName": args.networkFunctionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionArgs {
    /**
     * The name of the network function resource.
     */
    networkFunctionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Network function resource response.
 */
export interface GetNetworkFunctionResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed identity of the network function.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network function properties.
     */
    readonly properties: types.outputs.NetworkFunctionValueWithSecretsResponse | types.outputs.NetworkFunctionValueWithoutSecretsResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified network function resource.
 */
export function getNetworkFunctionOutput(args: GetNetworkFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFunctionResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFunction(a, opts))
}

export interface GetNetworkFunctionOutputArgs {
    /**
     * The name of the network function resource.
     */
    networkFunctionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}