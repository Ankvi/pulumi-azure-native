import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Authorization rule for a namespace by name.
 */
export function getNamespaceAuthorizationRule(args: GetNamespaceAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay/v20170401:getNamespaceAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
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
export interface GetNamespaceAuthorizationRuleResult {
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
 * Authorization rule for a namespace by name.
 */
export function getNamespaceAuthorizationRuleOutput(args: GetNamespaceAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceAuthorizationRule(a, opts))
}

export interface GetNamespaceAuthorizationRuleOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}