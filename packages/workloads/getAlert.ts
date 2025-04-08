import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getAlert(args: GetAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getAlert", {
        "alertName": args.alertName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAlertArgs {
    /**
     * Name of the SAP monitor alert resource.
     */
    alertName: string;
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A alert associated with SAP monitor.
 */
export interface GetAlertResult {
    /**
     * Describes the properties of an alert.
     */
    readonly alertRuleProperties?: types.outputs.AlertRulePropertiesResponse;
    /**
     * ID of the alert rule resource created.
     */
    readonly alertRuleResourceId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Defines the alert instance errors.
     */
    readonly errors: types.outputs.ErrorDetailResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Name of provider instances associated with the alert.
     */
    readonly providerNames?: string[];
    /**
     * The provider type for alert. For example, the value can be SapHana.
     */
    readonly providerType?: string;
    /**
     * State of provisioning of the alert instance
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Name of the alert template from which it was created.
     */
    readonly templateName?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getAlertOutput(args: GetAlertOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAlertResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getAlert", {
        "alertName": args.alertName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAlertOutputArgs {
    /**
     * Name of the SAP monitor alert resource.
     */
    alertName: pulumi.Input<string>;
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}