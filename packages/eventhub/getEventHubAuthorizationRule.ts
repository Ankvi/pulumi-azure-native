import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an AuthorizationRule for an Event Hub by rule name.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getEventHubAuthorizationRule(args: GetEventHubAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getEventHubAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The Event Hub name
     */
    eventHubName: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in a List or Get AuthorizationRule operation
 */
export interface GetEventHubAuthorizationRuleResult {
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
 * Gets an AuthorizationRule for an Event Hub by rule name.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getEventHubAuthorizationRuleOutput(args: GetEventHubAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventHubAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getEventHubAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubAuthorizationRuleOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The Event Hub name
     */
    eventHubName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}