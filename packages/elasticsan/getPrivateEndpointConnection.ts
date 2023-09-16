import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the Elastic San
 * Azure REST API version: 2022-12-01-preview.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getPrivateEndpointConnection", {
        "elasticSanName": args.elasticSanName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the Private Endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 *  Response for PrivateEndpoint Connection object
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     *  List of resources private endpoint is mapped
     */
    readonly groupIds?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Private Endpoint resource
     */
    readonly privateEndpoint?: types.outputs.elasticsan.PrivateEndpointResponse;
    /**
     * Private Link Service Connection State.
     */
    readonly privateLinkServiceConnectionState: types.outputs.elasticsan.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning State of Private Endpoint connection resource
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.elasticsan.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the Elastic San
 * Azure REST API version: 2022-12-01-preview.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the Private Endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
