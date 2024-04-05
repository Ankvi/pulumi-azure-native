import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the configuration store.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration/v20230301:getPrivateEndpointConnection", {
        "configStoreName": args.configStoreName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * Private endpoint connection name
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * A private endpoint connection
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The resource of private endpoint.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning status of the private endpoint connection.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the configuration store.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * Private endpoint connection name
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}