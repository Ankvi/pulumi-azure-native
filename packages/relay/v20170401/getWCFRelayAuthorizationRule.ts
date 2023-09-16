import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get authorizationRule for a WCF relay by name.
 */
export function getWCFRelayAuthorizationRule(args: GetWCFRelayAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWCFRelayAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay/v20170401:getWCFRelayAuthorizationRule", {
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
 * Description of a namespace authorization rule.
 */
export interface GetWCFRelayAuthorizationRuleResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The rights associated with the rule.
     */
    readonly rights: string[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get authorizationRule for a WCF relay by name.
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
