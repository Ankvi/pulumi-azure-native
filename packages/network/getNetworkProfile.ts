import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified network profile in a specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01.
 */
export function getNetworkProfile(args: GetNetworkProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkProfile", {
        "expand": args.expand,
        "networkProfileName": args.networkProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkProfileArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the public IP prefix.
     */
    networkProfileName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Network profile resource.
 */
export interface GetNetworkProfileResult {
    /**
     * List of chid container network interface configurations.
     */
    readonly containerNetworkInterfaceConfigurations?: types.outputs.ContainerNetworkInterfaceConfigurationResponse[];
    /**
     * List of child container network interfaces.
     */
    readonly containerNetworkInterfaces: types.outputs.ContainerNetworkInterfaceResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the network profile resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the network profile resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified network profile in a specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01.
 */
export function getNetworkProfileOutput(args: GetNetworkProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkProfileResult> {
    return pulumi.output(args).apply((a: any) => getNetworkProfile(a, opts))
}

export interface GetNetworkProfileOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the public IP prefix.
     */
    networkProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
