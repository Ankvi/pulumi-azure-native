import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AlertRuleResource
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAlertRuleResource(args: GetAlertRuleResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasewatcher:getAlertRuleResource", {
        "alertRuleResourceName": args.alertRuleResourceName,
        "resourceGroupName": args.resourceGroupName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetAlertRuleResourceArgs {
    /**
     * The alert rule proxy resource name.
     */
    alertRuleResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The database watcher name.
     */
    watcherName: string;
}

/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 */
export interface GetAlertRuleResourceResult {
    /**
     * The resource ID of the alert rule resource.
     */
    readonly alertRuleResourceId: string;
    /**
     * The template ID associated with alert rule resource.
     */
    readonly alertRuleTemplateId: string;
    /**
     * The alert rule template version.
     */
    readonly alertRuleTemplateVersion: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The properties with which the alert rule resource was created.
     */
    readonly createdWithProperties: string;
    /**
     * The creation time of the alert rule resource.
     */
    readonly creationTime: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the alert rule resource.
     */
    readonly provisioningState: string;
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
 * Get a AlertRuleResource
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAlertRuleResourceOutput(args: GetAlertRuleResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAlertRuleResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasewatcher:getAlertRuleResource", {
        "alertRuleResourceName": args.alertRuleResourceName,
        "resourceGroupName": args.resourceGroupName,
        "watcherName": args.watcherName,
    }, opts);
}

export interface GetAlertRuleResourceOutputArgs {
    /**
     * The alert rule proxy resource name.
     */
    alertRuleResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}