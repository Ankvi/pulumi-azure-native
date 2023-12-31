import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an authorization rule for a namespace by name.
 */
export function getNamespaceAuthorizationRule(args: GetNamespaceAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:getNamespaceAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceAuthorizationRuleArgs {
    /**
     * Authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Description of a Namespace AuthorizationRules.
 */
export interface GetNamespaceAuthorizationRuleResult {
    /**
     * A string that describes the claim type
     */
    readonly claimType: string;
    /**
     * A string that describes the claim value
     */
    readonly claimValue: string;
    /**
     * The created time for this rule
     */
    readonly createdTime: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * A string that describes the authorization rule.
     */
    readonly keyName: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The last modified time for this rule
     */
    readonly modifiedTime: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey: string;
    /**
     * The revision number for the rule
     */
    readonly revision: number;
    /**
     * The rights associated with the rule.
     */
    readonly rights?: string[];
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey: string;
    /**
     * The sku of the created namespace
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets an authorization rule for a namespace by name.
 */
export function getNamespaceAuthorizationRuleOutput(args: GetNamespaceAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceAuthorizationRule(a, opts))
}

export interface GetNamespaceAuthorizationRuleOutputArgs {
    /**
     * Authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
