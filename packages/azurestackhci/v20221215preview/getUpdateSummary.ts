import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get all Update summaries under the HCI cluster
 */
export function getUpdateSummary(args: GetUpdateSummaryArgs, opts?: pulumi.InvokeOptions): Promise<GetUpdateSummaryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20221215preview:getUpdateSummary", {
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
     * Current OEM Version.
     */
    readonly currentOemVersion?: string;
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
    readonly systemData: types.outputs.azurestackhci.v20221215preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get all Update summaries under the HCI cluster
 */
export function getUpdateSummaryOutput(args: GetUpdateSummaryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUpdateSummaryResult> {
    return pulumi.output(args).apply((a: any) => getUpdateSummary(a, opts))
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
