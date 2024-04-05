import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 */
export function getNamespaceAuthorizationRule(args: GetNamespaceAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceAuthorizationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20231001preview:getNamespaceAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceAuthorizationRuleArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: string;
    /**
     * Namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 */
export interface GetNamespaceAuthorizationRuleResult {
    /**
     * Gets a string that describes the claim type
     */
    readonly claimType: string;
    /**
     * Gets a string that describes the claim value
     */
    readonly claimValue: string;
    /**
     * Gets the created time for this rule
     */
    readonly createdTime: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets a string that describes the authorization rule.
     */
    readonly keyName: string;
    /**
     * Deprecated - only for compatibility.
     */
    readonly location?: string;
    /**
     * Gets the last modified time for this rule
     */
    readonly modifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    readonly primaryKey?: string;
    /**
     * Gets the revision number for the rule
     */
    readonly revision: number;
    /**
     * Gets or sets the rights associated with the rule.
     */
    readonly rights: string[];
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    readonly secondaryKey?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Deprecated - only for compatibility.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 */
export function getNamespaceAuthorizationRuleOutput(args: GetNamespaceAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceAuthorizationRuleResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceAuthorizationRule(a, opts))
}

export interface GetNamespaceAuthorizationRuleOutputArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}