import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a data export instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDataExport(args: GetDataExportArgs, opts?: pulumi.InvokeOptions): Promise<GetDataExportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getDataExport", {
        "dataExportName": args.dataExportName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDataExportArgs {
    /**
     * The data export rule name.
     */
    dataExportName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The top level data export resource container.
 */
export interface GetDataExportResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The latest data export rule modification time.
     */
    readonly createdDate?: string;
    /**
     * The data export rule ID.
     */
    readonly dataExportId?: string;
    /**
     * Active when enabled.
     */
    readonly enable?: boolean;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    readonly eventHubName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Date and time when the export was last modified.
     */
    readonly lastModifiedDate?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    readonly resourceId: string;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    readonly tableNames: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a data export instance.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDataExportOutput(args: GetDataExportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataExportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getDataExport", {
        "dataExportName": args.dataExportName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDataExportOutputArgs {
    /**
     * The data export rule name.
     */
    dataExportName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}