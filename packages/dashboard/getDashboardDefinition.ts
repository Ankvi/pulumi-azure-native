import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a specific dashboard definition.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getDashboardDefinition(args: GetDashboardDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dashboard:getDashboardDefinition", {
        "dashboardName": args.dashboardName,
        "definitionName": args.definitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardDefinitionArgs {
    /**
     * The name of the Azure Managed Dashboard.
     */
    dashboardName: string;
    /**
     * The name of the Dashboard Definition.
     */
    definitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The dashboard definition resource type.
 */
export interface GetDashboardDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties specific to the dashboard definition resource.
     */
    readonly properties: types.outputs.DashboardDefinitionPropertiesResponse;
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
 * Get the properties of a specific dashboard definition.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getDashboardDefinitionOutput(args: GetDashboardDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDashboardDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dashboard:getDashboardDefinition", {
        "dashboardName": args.dashboardName,
        "definitionName": args.definitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardDefinitionOutputArgs {
    /**
     * The name of the Azure Managed Dashboard.
     */
    dashboardName: pulumi.Input<string>;
    /**
     * The name of the Dashboard Definition.
     */
    definitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}