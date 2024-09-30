import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Network Manager.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01-preview, 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview, 2024-03-01.
 */
export function getNetworkManager(args: GetNetworkManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkManager", {
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
    readonly networkManagerScopes: types.outputs.NetworkManagerPropertiesResponseNetworkManagerScopes;
    /**
     * The provisioning state of the network manager resource.
     */
    readonly provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    readonly resourceGuid: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01-preview, 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview, 2024-03-01.
 */
export function getNetworkManagerOutput(args: GetNetworkManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkManager", {
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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