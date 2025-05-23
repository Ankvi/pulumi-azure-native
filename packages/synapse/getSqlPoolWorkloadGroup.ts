import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a Sql pool's workload group.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlPoolWorkloadGroup(args: GetSqlPoolWorkloadGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolWorkloadGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getSqlPoolWorkloadGroup", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "workloadGroupName": args.workloadGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolWorkloadGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SQL pool name
     */
    sqlPoolName: string;
    /**
     * The name of the workload group.
     */
    workloadGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Workload group operations for a sql pool
 */
export interface GetSqlPoolWorkloadGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The workload group importance level.
     */
    readonly importance?: string;
    /**
     * The workload group cap percentage resource.
     */
    readonly maxResourcePercent: number;
    /**
     * The workload group request maximum grant percentage.
     */
    readonly maxResourcePercentPerRequest?: number;
    /**
     * The workload group minimum percentage resource.
     */
    readonly minResourcePercent: number;
    /**
     * The workload group request minimum grant percentage.
     */
    readonly minResourcePercentPerRequest: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The workload group query execution timeout.
     */
    readonly queryExecutionTimeout?: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Sql pool's workload group.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlPoolWorkloadGroupOutput(args: GetSqlPoolWorkloadGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlPoolWorkloadGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getSqlPoolWorkloadGroup", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "workloadGroupName": args.workloadGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolWorkloadGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}