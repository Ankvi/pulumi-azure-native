import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified rule from a route filter.
 */
export function getRouteFilterRule(args: GetRouteFilterRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getRouteFilterRule", {
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
 */
export function getRouteFilterRuleOutput(args: GetRouteFilterRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteFilterRuleResult> {
    return pulumi.output(args).apply((a: any) => getRouteFilterRule(a, opts))
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