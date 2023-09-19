import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specific private end point connection by specific private link service in the resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getPrivateLinkServicePrivateEndpointConnection(args: GetPrivateLinkServicePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicePrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateLinkServicePrivateEndpointConnection", {
        "expand": args.expand,
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPrivateLinkServicePrivateEndpointConnectionArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the private end point connection.
     */
    peConnectionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the private link service.
     */
    serviceName: string;
}

/**
 * PrivateEndpointConnection resource.
 */
export interface GetPrivateLinkServicePrivateEndpointConnectionResult {
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
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: types.outputs.PrivateEndpointResponse;
    /**
     * The location of the private endpoint.
     */
    readonly privateEndpointLocation: string;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the specific private end point connection by specific private link service in the resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getPrivateLinkServicePrivateEndpointConnectionOutput(args: GetPrivateLinkServicePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkServicePrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkServicePrivateEndpointConnection(a, opts))
}

export interface GetPrivateLinkServicePrivateEndpointConnectionOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the private end point connection.
     */
    peConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    serviceName: pulumi.Input<string>;
}
