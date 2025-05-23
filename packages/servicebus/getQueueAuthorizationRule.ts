import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an authorization rule for a queue by rule name.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQueueAuthorizationRule(args: GetQueueAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetQueueAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getQueueAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "queueName": args.queueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueueAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The queue name.
     */
    queueName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Description of a namespace authorization rule.
 */
export interface GetQueueAuthorizationRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Gets an authorization rule for a queue by rule name.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQueueAuthorizationRuleOutput(args: GetQueueAuthorizationRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQueueAuthorizationRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getQueueAuthorizationRule", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "queueName": args.queueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueueAuthorizationRuleOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The queue name.
     */
    queueName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}