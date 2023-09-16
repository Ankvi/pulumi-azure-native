import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workload classifier
 * Azure REST API version: 2021-11-01.
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
 * Azure REST API version: 2021-11-01.
 */
export function getWorkloadClassifierOutput(args: GetWorkloadClassifierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadClassifierResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadClassifier(a, opts))
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
