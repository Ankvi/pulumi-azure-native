import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Relationship
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getRelationship(args: GetRelationshipArgs, opts?: pulumi.InvokeOptions): Promise<GetRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudhealth:getRelationship", {
        "healthModelName": args.healthModelName,
        "relationshipName": args.relationshipName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipArgs {
    /**
     * Name of health model resource
     */
    healthModelName: string;
    /**
     * Name of the relationship. Must be unique within a health model. For example, a concatenation of parentEntityName and childEntityName can be used as the name.
     */
    relationshipName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A relationship (aka edge) between two entities in a health model
 */
export interface GetRelationshipResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.RelationshipPropertiesResponse;
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
 * Get a Relationship
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getRelationshipOutput(args: GetRelationshipOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudhealth:getRelationship", {
        "healthModelName": args.healthModelName,
        "relationshipName": args.relationshipName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipOutputArgs {
    /**
     * Name of health model resource
     */
    healthModelName: pulumi.Input<string>;
    /**
     * Name of the relationship. Must be unique within a health model. For example, a concatenation of parentEntityName and childEntityName can be used as the name.
     */
    relationshipName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}