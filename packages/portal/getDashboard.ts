import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Dashboard.
 *
 * Uses Azure REST API version 2022-12-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2020-09-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portal [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDashboard(args: GetDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getDashboard", {
        "dashboardName": args.dashboardName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardArgs {
    /**
     * The name of the dashboard.
     */
    dashboardName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The shared dashboard resource definition.
 */
export interface GetDashboardResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DashboardPropertiesWithProvisioningStateResponse;
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
 * Gets the Dashboard.
 *
 * Uses Azure REST API version 2022-12-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2020-09-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portal [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDashboardOutput(args: GetDashboardOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDashboardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:getDashboard", {
        "dashboardName": args.dashboardName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardOutputArgs {
    /**
     * The name of the dashboard.
     */
    dashboardName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}