import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a workload classifier of Sql pool's workload group.
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getSqlPoolWorkloadClassifier(args: GetSqlPoolWorkloadClassifierArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolWorkloadClassifierResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getSqlPoolWorkloadClassifier", {
        "resourceGroupName": args.resourceGroupName,
        "sqlPoolName": args.sqlPoolName,
        "workloadClassifierName": args.workloadClassifierName,
        "workloadGroupName": args.workloadGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolWorkloadClassifierArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * SQL pool name
     */
    sqlPoolName: string;
    /**
     * The name of the workload classifier.
     */
    workloadClassifierName: string;
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
 * Workload classifier operations for a data warehouse
 */
export interface GetSqlPoolWorkloadClassifierResult {
    /**
     * The workload classifier context.
     */
    readonly context?: string;
    /**
     * The workload classifier end time for classification.
     */
    readonly endTime?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The workload classifier importance.
     */
    readonly importance?: string;
    /**
     * The workload classifier label.
     */
    readonly label?: string;
    /**
     * The workload classifier member name.
     */
    readonly memberName: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The workload classifier start time for classification.
     */
    readonly startTime?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a workload classifier of Sql pool's workload group.
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getSqlPoolWorkloadClassifierOutput(args: GetSqlPoolWorkloadClassifierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlPoolWorkloadClassifierResult> {
    return pulumi.output(args).apply((a: any) => getSqlPoolWorkloadClassifier(a, opts))
}

export interface GetSqlPoolWorkloadClassifierOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the workload classifier.
     */
    workloadClassifierName: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
