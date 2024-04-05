import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the issue Comment for an API specified by its identifier.
 */
export function getApiIssueComment(args: GetApiIssueCommentArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueCommentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230501preview:getApiIssueComment", {
        "apiId": args.apiId,
        "commentId": args.commentId,
        "issueId": args.issueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiIssueCommentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
    /**
     * Comment identifier within an Issue. Must be unique in the current Issue.
     */
    commentId: string;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    issueId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Issue Comment Contract details.
 */
export interface GetApiIssueCommentResult {
    /**
     * Date and time when the comment was created.
     */
    readonly createdDate?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Comment text.
     */
    readonly text: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * A resource identifier for the user who left the comment.
     */
    readonly userId: string;
}
/**
 * Gets the details of the issue Comment for an API specified by its identifier.
 */
export function getApiIssueCommentOutput(args: GetApiIssueCommentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiIssueCommentResult> {
    return pulumi.output(args).apply((a: any) => getApiIssueComment(a, opts))
}

export interface GetApiIssueCommentOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Comment identifier within an Issue. Must be unique in the current Issue.
     */
    commentId: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    issueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}