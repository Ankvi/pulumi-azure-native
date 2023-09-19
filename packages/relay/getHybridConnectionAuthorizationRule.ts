import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Hybrid connection authorization rule for a hybrid connection by name.
 * Azure REST API version: 2021-11-01.
 */
export function getHybridConnectionAuthorizationRule(args: GetHybridConnectionAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:getHybridConnectionAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "hybridConnectionName": args.hybridConnectionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridConnectionAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in a List or Get AuthorizationRule operation
 */
export interface GetHybridConnectionAuthorizationRuleResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The rights associated with the rule.
     */
    readonly rights: string[];
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
}
/**
 * Hybrid connection authorization rule for a hybrid connection by name.
 * Azure REST API version: 2021-11-01.
 */
export function getHybridConnectionAuthorizationRuleOutput(args: GetHybridConnectionAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridConnectionAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getHybridConnectionAuthorizationRule(a, opts))
}

export interface GetHybridConnectionAuthorizationRuleOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
