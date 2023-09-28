import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an incident comment.
 */
export function getIncidentComment(args: GetIncidentCommentArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentCommentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getIncidentComment", {
        "incidentCommentId": args.incidentCommentId,
        "incidentId": args.incidentId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentCommentArgs {
    /**
     * Incident comment ID
     */
    incidentCommentId: string;
    /**
     * Incident ID
     */
    incidentId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents an incident comment
 */
export interface GetIncidentCommentResult {
    /**
     * Describes the client that created the comment
     */
    readonly author: types.outputs.ClientInfoResponse;
    /**
     * The time the comment was created
     */
    readonly createdTimeUtc: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The time the comment was updated
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * The comment message
     */
    readonly message: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an incident comment.
 */
export function getIncidentCommentOutput(args: GetIncidentCommentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentCommentResult> {
    return pulumi.output(args).apply((a: any) => getIncidentComment(a, opts))
}

export interface GetIncidentCommentOutputArgs {
    /**
     * Incident comment ID
     */
    incidentCommentId: pulumi.Input<string>;
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
