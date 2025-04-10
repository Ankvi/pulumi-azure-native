import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a azureADMetrics instance with a given name.
 *
 * Uses Azure REST API version 2020-07-01-preview.
 */
export function getAzureADMetric(args: GetAzureADMetricArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureADMetricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aadiam:getAzureADMetric", {
        "azureADMetricsName": args.azureADMetricsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureADMetricArgs {
    /**
     * Name of the azureADMetrics instance.
     */
    azureADMetricsName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * AzureADMetrics resource.
 */
export interface GetAzureADMetricResult {
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
    readonly properties: types.outputs.AzureADMetricsPropertiesFormatResponse;
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
 * Gets a azureADMetrics instance with a given name.
 *
 * Uses Azure REST API version 2020-07-01-preview.
 */
export function getAzureADMetricOutput(args: GetAzureADMetricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureADMetricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:aadiam:getAzureADMetric", {
        "azureADMetricsName": args.azureADMetricsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureADMetricOutputArgs {
    /**
     * Name of the azureADMetrics instance.
     */
    azureADMetricsName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}