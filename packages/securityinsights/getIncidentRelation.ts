import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a relation for a given incident.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01.
 */
export function getIncidentRelation(args: GetIncidentRelationArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentRelationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getIncidentRelation", {
        "incidentId": args.incidentId,
        "relationName": args.relationName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentRelationArgs {
    /**
     * Incident ID
     */
    incidentId: string;
    /**
     * Relation Name
     */
    relationName: string;
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
 * Represents a relation between two resources
 */
export interface GetIncidentRelationResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource ID of the related resource
     */
    readonly relatedResourceId: string;
    /**
     * The resource kind of the related resource
     */
    readonly relatedResourceKind: string;
    /**
     * The name of the related resource
     */
    readonly relatedResourceName: string;
    /**
     * The resource type of the related resource
     */
    readonly relatedResourceType: string;
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
 * Gets a relation for a given incident.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01.
 */
export function getIncidentRelationOutput(args: GetIncidentRelationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentRelationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getIncidentRelation", {
        "incidentId": args.incidentId,
        "relationName": args.relationName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentRelationOutputArgs {
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * Relation Name
     */
    relationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}