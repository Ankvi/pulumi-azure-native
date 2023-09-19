import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a managed private endpoint.
 */
export function getManagedPrivateEndpoint(args: GetManagedPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getManagedPrivateEndpoint", {
        "factoryName": args.factoryName,
        "managedPrivateEndpointName": args.managedPrivateEndpointName,
        "managedVirtualNetworkName": args.managedVirtualNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedPrivateEndpointArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * Managed private endpoint name
     */
    managedPrivateEndpointName: string;
    /**
     * Managed virtual network name
     */
    managedVirtualNetworkName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Managed private endpoint resource type.
 */
export interface GetManagedPrivateEndpointResult {
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
     * Managed private endpoint properties.
     */
    readonly properties: types.outputs.ManagedPrivateEndpointResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a managed private endpoint.
 */
export function getManagedPrivateEndpointOutput(args: GetManagedPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getManagedPrivateEndpoint(a, opts))
}

export interface GetManagedPrivateEndpointOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * Managed private endpoint name
     */
    managedPrivateEndpointName: pulumi.Input<string>;
    /**
     * Managed virtual network name
     */
    managedVirtualNetworkName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
