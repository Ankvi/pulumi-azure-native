import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Issue for an API specified by its identifier.
 */
export function getApiIssue(args: GetApiIssueArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getApiIssue", {
        "apiId": args.apiId,
        "expandCommentsAttachments": args.expandCommentsAttachments,
        "issueId": args.issueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiIssueArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
    /**
     * Expand the comment attachments. 
     */
    expandCommentsAttachments?: boolean;
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
 * Issue Contract details.
 */
export interface GetApiIssueResult {
    /**
     * A resource identifier for the API the issue was created for.
     */
    readonly apiId?: string;
    /**
     * Date and time when the issue was created.
     */
    readonly createdDate?: string;
    /**
     * Text describing the issue.
     */
    readonly description: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Status of the issue.
     */
    readonly state?: string;
    /**
     * The issue title.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * A resource identifier for the user created the issue.
     */
    readonly userId: string;
}
/**
 * Gets the details of the Issue for an API specified by its identifier.
 */
export function getApiIssueOutput(args: GetApiIssueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiIssueResult> {
    return pulumi.output(args).apply((a: any) => getApiIssue(a, opts))
}

export interface GetApiIssueOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Expand the comment attachments. 
     */
    expandCommentsAttachments?: pulumi.Input<boolean>;
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
