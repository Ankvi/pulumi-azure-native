import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified rule from a route filter.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRouteFilterRule(args: GetRouteFilterRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getRouteFilterRule", {
        "resourceGroupName": args.resourceGroupName,
        "routeFilterName": args.routeFilterName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRouteFilterRuleArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the route filter.
     */
    routeFilterName: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
}

/**
 * Route Filter Rule Resource.
 */
export interface GetRouteFilterRuleResult {
    /**
     * The access type of the rule.
     */
    readonly access: string;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    readonly communities: string[];
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
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the route filter rule resource.
     */
    readonly provisioningState: string;
    /**
     * The rule type of the rule.
     */
    readonly routeFilterRuleType: string;
}
/**
 * Gets the specified rule from a route filter.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRouteFilterRuleOutput(args: GetRouteFilterRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRouteFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getRouteFilterRule", {
        "resourceGroupName": args.resourceGroupName,
        "routeFilterName": args.routeFilterName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRouteFilterRuleOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route filter.
     */
    routeFilterName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
}