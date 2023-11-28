import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection on application gateway.
 */
export function getApplicationGatewayPrivateEndpointConnection(args: GetApplicationGatewayPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getApplicationGatewayPrivateEndpointConnection", {
        "applicationGatewayName": args.applicationGatewayName,
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGatewayPrivateEndpointConnectionArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: string;
    /**
     * The name of the application gateway private endpoint connection.
     */
    connectionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Private Endpoint connection on an application gateway.
 */
export interface GetApplicationGatewayPrivateEndpointConnectionResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The consumer link id.
     */
    readonly linkIdentifier: string;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    readonly name?: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: types.outputs.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the application gateway private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection on application gateway.
 */
export function getApplicationGatewayPrivateEndpointConnectionOutput(args: GetApplicationGatewayPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationGatewayPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getApplicationGatewayPrivateEndpointConnection(a, opts))
}

export interface GetApplicationGatewayPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: pulumi.Input<string>;
    /**
     * The name of the application gateway private endpoint connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
