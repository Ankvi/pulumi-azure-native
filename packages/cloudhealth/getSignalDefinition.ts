import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SignalDefinition
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getSignalDefinition(args: GetSignalDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudhealth:getSignalDefinition", {
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
        "signalDefinitionName": args.signalDefinitionName,
    }, opts);
}

export interface GetSignalDefinitionArgs {
    /**
     * Name of health model resource
     */
    healthModelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the signal definition. Must be unique within a health model.
     */
    signalDefinitionName: string;
}

/**
 * A signal definition in a health model
 */
export interface GetSignalDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.LogAnalyticsQuerySignalDefinitionPropertiesResponse | types.outputs.PrometheusMetricsSignalDefinitionPropertiesResponse | types.outputs.ResourceMetricSignalDefinitionPropertiesResponse;
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
 * Get a SignalDefinition
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getSignalDefinitionOutput(args: GetSignalDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSignalDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudhealth:getSignalDefinition", {
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
        "signalDefinitionName": args.signalDefinitionName,
    }, opts);
}

export interface GetSignalDefinitionOutputArgs {
    /**
     * Name of health model resource
     */
    healthModelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the signal definition. Must be unique within a health model.
     */
    signalDefinitionName: pulumi.Input<string>;
}