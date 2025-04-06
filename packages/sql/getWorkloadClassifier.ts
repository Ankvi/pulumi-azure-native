import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workload classifier
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkloadClassifier(args: GetWorkloadClassifierArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadClassifierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getWorkloadClassifier", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "workloadClassifierName": args.workloadClassifierName,
        "workloadGroupName": args.workloadGroupName,
    }, opts);
}

export interface GetWorkloadClassifierArgs {
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
     * The name of the workload classifier.
     */
    workloadClassifierName: string;
    /**
     * The name of the workload group from which to receive the classifier from.
     */
    workloadGroupName: string;
}

/**
 * Workload classifier operations for a data warehouse
 */
export interface GetWorkloadClassifierResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The workload classifier context.
     */
    readonly context?: string;
    /**
     * The workload classifier end time for classification.
     */
    readonly endTime?: string;
    /**
     * Resource ID.
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
     * Resource name.
     */
    readonly name: string;
    /**
     * The workload classifier start time for classification.
     */
    readonly startTime?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a workload classifier
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkloadClassifierOutput(args: GetWorkloadClassifierOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadClassifierResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getWorkloadClassifier", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "workloadClassifierName": args.workloadClassifierName,
        "workloadGroupName": args.workloadGroupName,
    }, opts);
}

export interface GetWorkloadClassifierOutputArgs {
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
     * The name of the workload classifier.
     */
    workloadClassifierName: pulumi.Input<string>;
    /**
     * The name of the workload group from which to receive the classifier from.
     */
    workloadGroupName: pulumi.Input<string>;
}