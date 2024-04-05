import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an incident relation.
 */
export function getIncidentRelation(args: GetIncidentRelationArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentRelationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20231201preview:getIncidentRelation", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
 * Gets an incident relation.
 */
export function getIncidentRelationOutput(args: GetIncidentRelationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentRelationResult> {
    return pulumi.output(args).apply((a: any) => getIncidentRelation(a, opts))
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