import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve a hybrid runbook worker.
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2021-06-22, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2021-06-22, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHybridRunbookWorkerOutput(args: GetHybridRunbookWorkerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHybridRunbookWorkerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getHybridRunbookWorker", {
        "automationAccountName": args.automationAccountName,
        "hybridRunbookWorkerGroupName": args.hybridRunbookWorkerGroupName,
        "hybridRunbookWorkerId": args.hybridRunbookWorkerId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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