import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified Private Endpoint.
 *
 * Uses Azure REST API version 2020-03-01.
 */
export function getPrivateEndpoint(args: GetPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics:getPrivateEndpoint", {
        "clusterName": args.clusterName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Complete information about the private endpoint.
 */
export interface GetPrivateEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The date when this private endpoint was created.
     */
    readonly createdDate: string;
    /**
     * Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A list of connections to the remote resource. Immutable after it is set.
     */
    readonly manualPrivateLinkServiceConnections?: types.outputs.PrivateLinkServiceConnectionResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets information about the specified Private Endpoint.
 *
 * Uses Azure REST API version 2020-03-01.
 */
export function getPrivateEndpointOutput(args: GetPrivateEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:streamanalytics:getPrivateEndpoint", {
        "clusterName": args.clusterName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}