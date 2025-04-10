import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an incident task.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01.
 */
export function getIncidentTask(args: GetIncidentTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getIncidentTask", {
        "incidentId": args.incidentId,
        "incidentTaskId": args.incidentTaskId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentTaskArgs {
    /**
     * Incident ID
     */
    incidentId: string;
    /**
     * Incident task ID
     */
    incidentTaskId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

export interface GetIncidentTaskResult {
    /**
     * Information on the client (user or application) that made some action
     */
    readonly createdBy?: types.outputs.ClientInfoResponse;
    /**
     * The time the task was created
     */
    readonly createdTimeUtc: string;
    /**
     * The description of the task
     */
    readonly description?: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Information on the client (user or application) that made some action
     */
    readonly lastModifiedBy?: types.outputs.ClientInfoResponse;
    /**
     * The last time the task was updated
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The title of the task
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an incident task.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01.
 */
export function getIncidentTaskOutput(args: GetIncidentTaskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIncidentTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getIncidentTask", {
        "incidentId": args.incidentId,
        "incidentTaskId": args.incidentTaskId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentTaskOutputArgs {
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * Incident task ID
     */
    incidentTaskId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}