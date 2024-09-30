import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the private endpoint connection for the Cloud Hsm Cluster.
 * Azure REST API version: 2022-08-31-preview.
 *
 * Other available API versions: 2023-12-10-preview, 2024-06-30-preview.
 */
export function getCloudHsmClusterPrivateEndpointConnection(args: GetCloudHsmClusterPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudHsmClusterPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hardwaresecuritymodules:getCloudHsmClusterPrivateEndpointConnection", {
        "cloudHsmClusterName": args.cloudHsmClusterName,
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudHsmClusterPrivateEndpointConnectionArgs {
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 24 characters in length.
     */
    cloudHsmClusterName: string;
    /**
     * Name of the private endpoint connection associated with the Cloud HSM Cluster.
     */
    peConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The private endpoint connection resource.
 */
export interface GetCloudHsmClusterPrivateEndpointConnectionResult {
    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    readonly etag?: string;
    /**
     * The group ids for the private endpoint resource.
     */
    readonly groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The private endpoint resource.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
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
 * Gets the private endpoint connection for the Cloud Hsm Cluster.
 * Azure REST API version: 2022-08-31-preview.
 *
 * Other available API versions: 2023-12-10-preview, 2024-06-30-preview.
 */
export function getCloudHsmClusterPrivateEndpointConnectionOutput(args: GetCloudHsmClusterPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudHsmClusterPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hardwaresecuritymodules:getCloudHsmClusterPrivateEndpointConnection", {
        "cloudHsmClusterName": args.cloudHsmClusterName,
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudHsmClusterPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 24 characters in length.
     */
    cloudHsmClusterName: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection associated with the Cloud HSM Cluster.
     */
    peConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}