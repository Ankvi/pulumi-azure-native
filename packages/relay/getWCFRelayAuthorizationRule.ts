import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get authorizationRule for a WCF relay by name.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2017-04-01.
 */
export function getWCFRelayAuthorizationRule(args: GetWCFRelayAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWCFRelayAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:getWCFRelayAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWCFRelayAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The relay name.
     */
    relayName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in a List or Get AuthorizationRule operation
 */
export interface GetWCFRelayAuthorizationRuleResult {
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
 * Get authorizationRule for a WCF relay by name.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2017-04-01.
 */
export function getWCFRelayAuthorizationRuleOutput(args: GetWCFRelayAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWCFRelayAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getWCFRelayAuthorizationRule(a, opts))
}

export interface GetWCFRelayAuthorizationRuleOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}