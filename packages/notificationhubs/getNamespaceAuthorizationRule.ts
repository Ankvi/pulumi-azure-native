import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function getNamespaceAuthorizationRule(args: GetNamespaceAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs:getNamespaceAuthorizationRule", {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Deprecated - only for compatibility.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * SharedAccessAuthorizationRule properties.
     */
    readonly properties: types.outputs.SharedAccessAuthorizationRulePropertiesResponse;
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
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function getNamespaceAuthorizationRuleOutput(args: GetNamespaceAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:notificationhubs:getNamespaceAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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