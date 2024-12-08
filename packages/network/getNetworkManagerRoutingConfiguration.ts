import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a network manager routing configuration.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-05-01.
 */
export function getNetworkManagerRoutingConfiguration(args: GetNetworkManagerRoutingConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkManagerRoutingConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkManagerRoutingConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkManagerRoutingConfigurationArgs {
    /**
     * The name of the network manager Routing Configuration.
     */
    configurationName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the routing configuration
 */
export interface GetNetworkManagerRoutingConfigurationResult {
    /**
     * A description of the routing configuration.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves a network manager routing configuration.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-05-01.
 */
export function getNetworkManagerRoutingConfigurationOutput(args: GetNetworkManagerRoutingConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkManagerRoutingConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkManagerRoutingConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkManagerRoutingConfigurationOutputArgs {
    /**
     * The name of the network manager Routing Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}