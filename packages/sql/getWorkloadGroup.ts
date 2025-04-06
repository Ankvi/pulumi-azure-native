import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workload group
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkloadGroup(args: GetWorkloadGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getWorkloadGroup", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "workloadGroupName": args.workloadGroupName,
    }, opts);
}

export interface GetWorkloadGroupArgs {
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the workload group.
     */
    workloadGroupName: string;
}

/**
 * Workload group operations for a data warehouse
 */
export interface GetWorkloadGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
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
     * Resource name.
     */
    readonly name: string;
    /**
     * The workload group query execution timeout.
     */
    readonly queryExecutionTimeout?: number;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a workload group
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkloadGroupOutput(args: GetWorkloadGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getWorkloadGroup", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "workloadGroupName": args.workloadGroupName,
    }, opts);
}

export interface GetWorkloadGroupOutputArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName: pulumi.Input<string>;
}