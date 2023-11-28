import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the service.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis/v20230906:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    resourceName: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource of private end point.
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the service.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}
