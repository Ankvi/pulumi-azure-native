import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getManagedInstancePrivateEndpointConnection(args: GetManagedInstancePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstancePrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedInstancePrivateEndpointConnection", {
        "managedInstanceName": args.managedInstanceName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstancePrivateEndpointConnectionArgs {
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A private endpoint connection
 */
export interface GetManagedInstancePrivateEndpointConnectionResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private endpoint which the connection belongs to.
     */
    readonly privateEndpoint?: types.outputs.ManagedInstancePrivateEndpointPropertyResponse;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * State of the Private Endpoint Connection.
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a private endpoint connection.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getManagedInstancePrivateEndpointConnectionOutput(args: GetManagedInstancePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstancePrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstancePrivateEndpointConnection(a, opts))
}

export interface GetManagedInstancePrivateEndpointConnectionOutputArgs {
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}