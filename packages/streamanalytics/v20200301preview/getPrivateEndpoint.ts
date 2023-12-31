import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified Private Endpoint.
 */
export function getPrivateEndpoint(args: GetPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20200301preview:getPrivateEndpoint", {
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
     * Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties associated with a private endpoint.
     */
    readonly properties: types.outputs.PrivateEndpointPropertiesResponse;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets information about the specified Private Endpoint.
 */
export function getPrivateEndpointOutput(args: GetPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpoint(a, opts))
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
