import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an authorization rule for a NotificationHub by name.
 */
export function getNotificationHubAuthorizationRule(args: GetNotificationHubAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:getNotificationHubAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubAuthorizationRuleArgs {
    /**
     * authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The notification hub name.
     */
    notificationHubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Description of a Namespace AuthorizationRules.
 */
export interface GetNotificationHubAuthorizationRuleResult {
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
    readonly sku?: types.outputs.notificationhubs.v20170401.SkuResponse;
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
 * Gets an authorization rule for a NotificationHub by name.
 */
export function getNotificationHubAuthorizationRuleOutput(args: GetNotificationHubAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationHubAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getNotificationHubAuthorizationRule(a, opts))
}

export interface GetNotificationHubAuthorizationRuleOutputArgs {
    /**
     * authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The notification hub name.
     */
    notificationHubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
