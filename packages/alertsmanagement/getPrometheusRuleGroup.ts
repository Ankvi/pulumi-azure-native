import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a Prometheus rule group definition.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2021-07-22-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native alertsmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrometheusRuleGroup(args: GetPrometheusRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPrometheusRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:getPrometheusRuleGroup", {
        "resourceGroupName": args.resourceGroupName,
        "ruleGroupName": args.ruleGroupName,
    }, opts);
}

export interface GetPrometheusRuleGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the rule group.
     */
    ruleGroupName: string;
}

/**
 * The Prometheus rule group resource.
 */
export interface GetPrometheusRuleGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Apply rule to data from a specific cluster.
     */
    readonly clusterName?: string;
    /**
     * Rule group description.
     */
    readonly description?: string;
    /**
     * Enable/disable rule group.
     */
    readonly enabled?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
     */
    readonly interval?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the rules in the Prometheus rule group.
     */
    readonly rules: types.outputs.PrometheusRuleResponse[];
    /**
     * Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future.
     */
    readonly scopes: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieve a Prometheus rule group definition.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2021-07-22-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native alertsmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrometheusRuleGroupOutput(args: GetPrometheusRuleGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrometheusRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:alertsmanagement:getPrometheusRuleGroup", {
        "resourceGroupName": args.resourceGroupName,
        "ruleGroupName": args.ruleGroupName,
    }, opts);
}

export interface GetPrometheusRuleGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule group.
     */
    ruleGroupName: pulumi.Input<string>;
}