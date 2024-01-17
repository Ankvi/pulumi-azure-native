import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the issue Attachment for an API specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiIssueAttachment(args: GetApiIssueAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueAttachmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiIssueAttachment", {
        "apiId": args.apiId,
        "attachmentId": args.attachmentId,
        "issueId": args.issueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiIssueAttachmentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
    /**
     * Attachment identifier within an Issue. Must be unique in the current Issue.
     */
    attachmentId: string;
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
 * Issue Attachment Contract details.
 */
export interface GetApiIssueAttachmentResult {
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    readonly content: string;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    readonly contentFormat: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Filename by which the binary data will be saved.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the issue Attachment for an API specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiIssueAttachmentOutput(args: GetApiIssueAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiIssueAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getApiIssueAttachment(a, opts))
}

export interface GetApiIssueAttachmentOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Attachment identifier within an Issue. Must be unique in the current Issue.
     */
    attachmentId: pulumi.Input<string>;
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