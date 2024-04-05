import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the connected registry.
 */
export function getConnectedRegistry(args: GetConnectedRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20231101preview:getConnectedRegistry", {
        "connectedRegistryName": args.connectedRegistryName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedRegistryArgs {
    /**
     * The name of the connected registry.
     */
    connectedRegistryName: string;
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
 * An object that represents a connected registry for a container registry.
 */
export interface GetConnectedRegistryResult {
    /**
     * The activation properties of the connected registry.
     */
    readonly activation: types.outputs.ActivationPropertiesResponse;
    /**
     * The list of the ACR token resource IDs used to authenticate clients to the connected registry.
     */
    readonly clientTokenIds?: string[];
    /**
     * The current connection state of the connected registry.
     */
    readonly connectionState: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The last activity time of the connected registry.
     */
    readonly lastActivityTime: string;
    /**
     * The logging properties of the connected registry.
     */
    readonly logging?: types.outputs.LoggingPropertiesResponse;
    /**
     * The login server properties of the connected registry.
     */
    readonly loginServer?: types.outputs.LoginServerPropertiesResponse;
    /**
     * The mode of the connected registry resource that indicates the permissions of the registry.
     */
    readonly mode: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The list of notifications subscription information for the connected registry.
     */
    readonly notificationsList?: string[];
    /**
     * The parent of the connected registry.
     */
    readonly parent: types.outputs.ParentPropertiesResponse;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The list of current statuses of the connected registry.
     */
    readonly statusDetails: types.outputs.StatusDetailPropertiesResponse[];
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The current version of ACR runtime on the connected registry.
     */
    readonly version: string;
}
/**
 * Gets the properties of the connected registry.
 */
export function getConnectedRegistryOutput(args: GetConnectedRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedRegistryResult> {
    return pulumi.output(args).apply((a: any) => getConnectedRegistry(a, opts))
}

export interface GetConnectedRegistryOutputArgs {
    /**
     * The name of the connected registry.
     */
    connectedRegistryName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}