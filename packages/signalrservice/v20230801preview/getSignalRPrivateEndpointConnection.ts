import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified private endpoint connection
 */
export function getSignalRPrivateEndpointConnection(args: GetSignalRPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230801preview:getSignalRPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSignalRPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A private endpoint connection to an azure resource
 */
export interface GetSignalRPrivateEndpointConnectionResult {
    /**
     * Group IDs
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
     * Private endpoint
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * Connection state of the private endpoint connection
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the resource.
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
 * Get the specified private endpoint connection
 */
export function getSignalRPrivateEndpointConnectionOutput(args: GetSignalRPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignalRPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getSignalRPrivateEndpointConnection(a, opts))
}

export interface GetSignalRPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
