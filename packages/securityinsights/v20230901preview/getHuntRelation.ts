import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hunt relation
 */
export function getHuntRelation(args: GetHuntRelationArgs, opts?: pulumi.InvokeOptions): Promise<GetHuntRelationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getHuntRelation", {
        "huntId": args.huntId,
        "huntRelationId": args.huntRelationId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetHuntRelationArgs {
    /**
     * The hunt id (GUID)
     */
    huntId: string;
    /**
     * The hunt relation id (GUID)
     */
    huntRelationId: string;
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
 * Represents a Hunt Relation in Azure Security Insights.
 */
export interface GetHuntRelationResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of labels relevant to this hunt
     */
    readonly labels?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The id of the related resource
     */
    readonly relatedResourceId: string;
    /**
     * The resource that the relation is related to
     */
    readonly relatedResourceKind: string;
    /**
     * The name of the related resource
     */
    readonly relatedResourceName: string;
    /**
     * The type of the hunt relation
     */
    readonly relationType: string;
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
 * Gets a hunt relation
 */
export function getHuntRelationOutput(args: GetHuntRelationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHuntRelationResult> {
    return pulumi.output(args).apply((a: any) => getHuntRelation(a, opts))
}

export interface GetHuntRelationOutputArgs {
    /**
     * The hunt id (GUID)
     */
    huntId: pulumi.Input<string>;
    /**
     * The hunt relation id (GUID)
     */
    huntRelationId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}