import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a network manager routing configuration routing rule.
 * Azure REST API version: 2024-03-01.
 */
export function getRoutingRule(args: GetRoutingRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutingRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getRoutingRule", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRoutingRuleArgs {
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
    /**
     * The name of the rule.
     */
    ruleName: string;
}

/**
 * Network routing rule.
 */
export interface GetRoutingRuleResult {
    /**
     * A description for this rule.
     */
    readonly description?: string;
    /**
     * Indicates the destination for this particular rule.
     */
    readonly destination: types.outputs.RoutingRuleRouteDestinationResponse;
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
     * Indicates the next hop for this particular rule.
     */
    readonly nextHop: types.outputs.RoutingRuleNextHopResponse;
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
 * Gets a network manager routing configuration routing rule.
 * Azure REST API version: 2024-03-01.
 */
export function getRoutingRuleOutput(args: GetRoutingRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoutingRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getRoutingRule", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRoutingRuleOutputArgs {
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
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
}