import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an incident task.
 */
export function getIncidentTask(args: GetIncidentTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230701preview:getIncidentTask", {
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
    readonly createdBy?: types.outputs.securityinsights.v20230701preview.ClientInfoResponse;
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Information on the client (user or application) that made some action
     */
    readonly lastModifiedBy?: types.outputs.securityinsights.v20230701preview.ClientInfoResponse;
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
    readonly systemData: types.outputs.securityinsights.v20230701preview.SystemDataResponse;
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
 */
export function getIncidentTaskOutput(args: GetIncidentTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentTaskResult> {
    return pulumi.output(args).apply((a: any) => getIncidentTask(a, opts))
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
