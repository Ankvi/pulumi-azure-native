import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified Network Manager.
 */
export function getNetworkManager(args: GetNetworkManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkManagerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:getNetworkManager", {
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkManagerArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Managed Network resource
 */
export interface GetNetworkManagerResult {
    /**
     * A description of the network manager.
     */
    readonly description?: string;
    /**
     * A friendly name for the network manager.
     */
    readonly displayName?: string;
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
     * Scope Access.
     */
    readonly networkManagerScopeAccesses: string[];
    /**
     * Scope of Network Manager.
     */
    readonly networkManagerScopes: types.outputs.network.v20210501preview.NetworkManagerPropertiesResponseNetworkManagerScopes;
    /**
     * The provisioning state of the scope assignment resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.network.v20210501preview.SystemDataResponse;
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
 * Gets the specified Network Manager.
 */
export function getNetworkManagerOutput(args: GetNetworkManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkManagerResult> {
    return pulumi.output(args).apply((a: any) => getNetworkManager(a, opts))
}

export interface GetNetworkManagerOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
