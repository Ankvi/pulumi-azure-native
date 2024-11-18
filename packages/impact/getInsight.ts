import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Insight resources by workloadImpactName and insightName
 * Azure REST API version: 2024-05-01-preview.
 */
export function getInsight(args: GetInsightArgs, opts?: pulumi.InvokeOptions): Promise<GetInsightResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:impact:getInsight", {
        "insightName": args.insightName,
        "workloadImpactName": args.workloadImpactName,
    }, opts);
}

export interface GetInsightArgs {
    /**
     * Name of the insight
     */
    insightName: string;
    /**
     * workloadImpact resource 
     */
    workloadImpactName: string;
}

/**
 * Insight resource
 */
export interface GetInsightResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.InsightPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Insight resources by workloadImpactName and insightName
 * Azure REST API version: 2024-05-01-preview.
 */
export function getInsightOutput(args: GetInsightOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInsightResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:impact:getInsight", {
        "insightName": args.insightName,
        "workloadImpactName": args.workloadImpactName,
    }, opts);
}

export interface GetInsightOutputArgs {
    /**
     * Name of the insight
     */
    insightName: pulumi.Input<string>;
    /**
     * workloadImpact resource 
     */
    workloadImpactName: pulumi.Input<string>;
}