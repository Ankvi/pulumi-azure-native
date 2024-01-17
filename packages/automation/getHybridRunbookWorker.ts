import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a hybrid runbook worker.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getHybridRunbookWorker(args: GetHybridRunbookWorkerArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridRunbookWorkerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getHybridRunbookWorker", {
        "automationAccountName": args.automationAccountName,
        "hybridRunbookWorkerGroupName": args.hybridRunbookWorkerGroupName,
        "hybridRunbookWorkerId": args.hybridRunbookWorkerId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridRunbookWorkerArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName: string;
    /**
     * The hybrid runbook worker id
     */
    hybridRunbookWorkerId: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of hybrid runbook worker.
 */
export interface GetHybridRunbookWorkerResult {
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets the assigned machine IP address.
     */
    readonly ip?: string;
    /**
     * Last Heartbeat from the Worker
     */
    readonly lastSeenDateTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the registration time of the worker machine.
     */
    readonly registeredDateTime?: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Azure Resource Manager Id for a virtual machine.
     */
    readonly vmResourceId?: string;
    /**
     * Name of the HybridWorker.
     */
    readonly workerName?: string;
    /**
     * Type of the HybridWorker.
     */
    readonly workerType?: string;
}
/**
 * Retrieve a hybrid runbook worker.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getHybridRunbookWorkerOutput(args: GetHybridRunbookWorkerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridRunbookWorkerResult> {
    return pulumi.output(args).apply((a: any) => getHybridRunbookWorker(a, opts))
}

export interface GetHybridRunbookWorkerOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The hybrid runbook worker group name
     */
    hybridRunbookWorkerGroupName: pulumi.Input<string>;
    /**
     * The hybrid runbook worker id
     */
    hybridRunbookWorkerId: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}