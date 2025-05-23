import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all Update summaries under the HCI cluster
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-02-01, 2023-03-01, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUpdateSummary(args: GetUpdateSummaryArgs, opts?: pulumi.InvokeOptions): Promise<GetUpdateSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getUpdateSummary", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetUpdateSummaryArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Get the update summaries for the cluster
 */
export interface GetUpdateSummaryResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Current OEM Version.
     */
    readonly currentOemVersion?: string;
    /**
     * Current Sbe version of the stamp.
     */
    readonly currentSbeVersion?: string;
    /**
     * Current Solution Bundle version of the stamp.
     */
    readonly currentVersion?: string;
    /**
     * Name of the hardware model.
     */
    readonly hardwareModel?: string;
    /**
     * Last time the package-specific checks were run.
     */
    readonly healthCheckDate?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Last time the update service successfully checked for updates
     */
    readonly lastChecked?: string;
    /**
     * Last time an update installation completed successfully.
     */
    readonly lastUpdated?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * OEM family name.
     */
    readonly oemFamily?: string;
    /**
     * Provisioning state of the UpdateSummaries proxy resource.
     */
    readonly provisioningState: string;
    /**
     * Overall update state of the stamp.
     */
    readonly state?: string;
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
 * Get all Update summaries under the HCI cluster
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-02-01, 2023-03-01, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUpdateSummaryOutput(args: GetUpdateSummaryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUpdateSummaryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getUpdateSummary", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetUpdateSummaryOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}