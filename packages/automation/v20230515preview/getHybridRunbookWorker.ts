import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a hybrid runbook worker.
 */
export function getHybridRunbookWorker(args: GetHybridRunbookWorkerArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridRunbookWorkerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getHybridRunbookWorker", {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the registration time of the worker machine.
     */
    readonly registeredDateTime?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
