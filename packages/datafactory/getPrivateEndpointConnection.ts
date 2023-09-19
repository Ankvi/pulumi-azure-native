import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection
 * Azure REST API version: 2018-06-01.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getPrivateEndpointConnection", {
        "factoryName": args.factoryName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The private endpoint connection name.
     */
    privateEndpointConnectionName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Private Endpoint Connection ARM resource.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Core resource properties
     */
    readonly properties: types.outputs.RemotePrivateEndpointConnectionResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a private endpoint connection
 * Azure REST API version: 2018-06-01.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The private endpoint connection name.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
