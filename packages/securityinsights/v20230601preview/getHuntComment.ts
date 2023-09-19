import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hunt comment
 */
export function getHuntComment(args: GetHuntCommentArgs, opts?: pulumi.InvokeOptions): Promise<GetHuntCommentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getHuntComment", {
        "huntCommentId": args.huntCommentId,
        "huntId": args.huntId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetHuntCommentArgs {
    /**
     * The hunt comment id (GUID)
     */
    huntCommentId: string;
    /**
     * The hunt id (GUID)
     */
    huntId: string;
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
 * Represents a Hunt Comment in Azure Security Insights
 */
export interface GetHuntCommentResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The message for the comment
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
 * Gets a hunt comment
 */
export function getHuntCommentOutput(args: GetHuntCommentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHuntCommentResult> {
    return pulumi.output(args).apply((a: any) => getHuntComment(a, opts))
}

export interface GetHuntCommentOutputArgs {
    /**
     * The hunt comment id (GUID)
     */
    huntCommentId: pulumi.Input<string>;
    /**
     * The hunt id (GUID)
     */
    huntId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
