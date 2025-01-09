import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network manager routing configuration rule collection.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-05-01.
 */
export function getRoutingRuleCollection(args: GetRoutingRuleCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutingRuleCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getRoutingRuleCollection", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
    }, opts);
}

export interface GetRoutingRuleCollectionArgs {
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
    /**
     * The name of the network manager routing Configuration rule collection.
     */
    ruleCollectionName: string;
}

/**
 * Defines the routing rule collection.
 */
export interface GetRoutingRuleCollectionResult {
    /**
     * Groups for configuration
     */
    readonly appliesTo: types.outputs.NetworkManagerRoutingGroupItemResponse[];
    /**
     * A description of the routing rule collection.
     */
    readonly description?: string;
    /**
     * Determines whether BGP route propagation is enabled. Defaults to true.
     */
    readonly disableBgpRoutePropagation?: string;
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
 * Gets a network manager routing configuration rule collection.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-05-01.
 */
export function getRoutingRuleCollectionOutput(args: GetRoutingRuleCollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoutingRuleCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getRoutingRuleCollection", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
    }, opts);
}

export interface GetRoutingRuleCollectionOutputArgs {
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
    /**
     * The name of the network manager routing Configuration rule collection.
     */
    ruleCollectionName: pulumi.Input<string>;
}