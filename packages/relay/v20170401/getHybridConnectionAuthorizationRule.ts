import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Hybrid connection authorization rule for a hybrid connection by name.
 */
export function getHybridConnectionAuthorizationRule(args: GetHybridConnectionAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay/v20170401:getHybridConnectionAuthorizationRule", {
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
 * Description of a namespace authorization rule.
 */
export interface GetHybridConnectionAuthorizationRuleResult {
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
 * Hybrid connection authorization rule for a hybrid connection by name.
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