import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specified authorization rule.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2014-09-01, 2015-08-01, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getTopicAuthorizationRule(args: GetTopicAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getTopicAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicAuthorizationRuleArgs {
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
    /**
     * The topic name.
     */
    topicName: string;
}

/**
 * Description of a namespace authorization rule.
 */
export interface GetTopicAuthorizationRuleResult {
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
 * Returns the specified authorization rule.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2014-09-01, 2015-08-01, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getTopicAuthorizationRuleOutput(args: GetTopicAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTopicAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getTopicAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicAuthorizationRuleOutputArgs {
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
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}