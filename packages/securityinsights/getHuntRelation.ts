import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hunt relation
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHuntRelation(args: GetHuntRelationArgs, opts?: pulumi.InvokeOptions): Promise<GetHuntRelationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getHuntRelation", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHuntRelationOutput(args: GetHuntRelationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHuntRelationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getHuntRelation", {
        "huntId": args.huntId,
        "huntRelationId": args.huntRelationId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
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