import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ServiceGroupMemberRelationship
 *
 * Uses Azure REST API version 2023-09-01-preview.
 */
export function getServiceGroupMemberRelationship(args: GetServiceGroupMemberRelationshipArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceGroupMemberRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relationships:getServiceGroupMemberRelationship", {
        "name": args.name,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetServiceGroupMemberRelationshipArgs {
    /**
     * Name of ServiceGroupMember relationship.
     */
    name: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Defines a ServiceGroupMember relationship resource.
 */
export interface GetServiceGroupMemberRelationshipResult {
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
    readonly properties: types.outputs.ServiceGroupMemberRelationshipPropertiesResponse;
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
 * Get a ServiceGroupMemberRelationship
 *
 * Uses Azure REST API version 2023-09-01-preview.
 */
export function getServiceGroupMemberRelationshipOutput(args: GetServiceGroupMemberRelationshipOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceGroupMemberRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:relationships:getServiceGroupMemberRelationship", {
        "name": args.name,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetServiceGroupMemberRelationshipOutputArgs {
    /**
     * Name of ServiceGroupMember relationship.
     */
    name: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}