import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the description for the specified rule.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getRule(args: GetRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getRule", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "subscriptionName": args.subscriptionName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetRuleArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The rule name.
     */
    ruleName: string;
    /**
     * The subscription name.
     */
    subscriptionName: string;
    /**
     * The topic name.
     */
    topicName: string;
}

/**
 * Description of Rule Resource.
 */
export interface GetRuleResult {
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    readonly action?: types.outputs.ActionResponse;
    /**
     * Properties of correlationFilter
     */
    readonly correlationFilter?: types.outputs.CorrelationFilterResponse;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    readonly filterType?: string;
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
     * Properties of sqlFilter
     */
    readonly sqlFilter?: types.outputs.SqlFilterResponse;
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
 * Retrieves the description for the specified rule.
 *
 * Uses Azure REST API version 2022-01-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getRuleOutput(args: GetRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getRule", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "subscriptionName": args.subscriptionName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetRuleOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rule name.
     */
    ruleName: pulumi.Input<string>;
    /**
     * The subscription name.
     */
    subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}