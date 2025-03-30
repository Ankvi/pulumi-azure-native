import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified network function resource.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 *
 * Other available API versions: 2023-09-01, 2024-04-15.
 */
export function getNetworkFunction(args: GetNetworkFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getNetworkFunction", {
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
     * The reference to the device resource. Once set, it cannot be updated.
     */
    readonly device?: types.outputs.SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The resource URI of the managed application.
     */
    readonly managedApplication: types.outputs.SubResourceResponse;
    /**
     * The parameters for the managed application.
     */
    readonly managedApplicationParameters?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The network function container configurations from the user.
     */
    readonly networkFunctionContainerConfigurations?: any;
    /**
     * The network function configurations from the user.
     */
    readonly networkFunctionUserConfigurations?: types.outputs.NetworkFunctionUserConfigurationResponse[];
    /**
     * The provisioning state of the network function resource.
     */
    readonly provisioningState: string;
    /**
     * The service key for the network function resource.
     */
    readonly serviceKey: string;
    /**
     * The sku name for the network function. Once set, it cannot be updated.
     */
    readonly skuName?: string;
    /**
     * The sku type for the network function.
     */
    readonly skuType: string;
    /**
     * The system meta data relating to this resource.
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
    /**
     * The vendor name for the network function. Once set, it cannot be updated.
     */
    readonly vendorName?: string;
    /**
     * The vendor provisioning state for the network function resource.
     */
    readonly vendorProvisioningState: string;
}
/**
 * Gets information about the specified network function resource.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 *
 * Other available API versions: 2023-09-01, 2024-04-15.
 */
export function getNetworkFunctionOutput(args: GetNetworkFunctionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getNetworkFunction", {
        "networkFunctionName": args.networkFunctionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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