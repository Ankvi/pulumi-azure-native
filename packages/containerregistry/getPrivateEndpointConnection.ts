import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified private endpoint connection associated with the container registry.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a private endpoint connection for a container registry.
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
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the specified private endpoint connection associated with the container registry.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}