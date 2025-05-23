import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Log Analytics workspace table.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTable(args: GetTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getTable", {
        "resourceGroupName": args.resourceGroupName,
        "tableName": args.tableName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetTableArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the table.
     */
    tableName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Workspace data table definition.
 */
export interface GetTableResult {
    /**
     * The table data archive retention in days. Calculated as (totalRetentionInDays-retentionInDays)
     */
    readonly archiveRetentionInDays: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The timestamp that table plan was last modified (UTC).
     */
    readonly lastPlanModifiedDate: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Instruct the system how to handle and charge the logs ingested to this table.
     */
    readonly plan?: string;
    /**
     * Table's current provisioning state. If set to 'updating', indicates a resource lock due to ongoing operation, forbidding any update to the table until the ongoing operation is concluded.
     */
    readonly provisioningState: string;
    /**
     * Parameters of the restore operation that initiated this table.
     */
    readonly restoredLogs?: types.outputs.RestoredLogsResponse;
    /**
     * Search job execution statistics.
     */
    readonly resultStatistics: types.outputs.ResultStatisticsResponse;
    /**
     * The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
     */
    readonly retentionInDays?: number;
    /**
     * True - Value originates from workspace retention in days, False - Customer specific.
     */
    readonly retentionInDaysAsDefault: boolean;
    /**
     * Table schema.
     */
    readonly schema?: types.outputs.SchemaResponse;
    /**
     * Parameters of the search job that initiated this table.
     */
    readonly searchResults?: types.outputs.SearchResultsResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The table total retention in days, between 4 and 4383. Setting this property to -1 will default to table retention.
     */
    readonly totalRetentionInDays?: number;
    /**
     * True - Value originates from retention in days, False - Customer specific.
     */
    readonly totalRetentionInDaysAsDefault: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Log Analytics workspace table.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTableOutput(args: GetTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getTable", {
        "resourceGroupName": args.resourceGroupName,
        "tableName": args.tableName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetTableOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}