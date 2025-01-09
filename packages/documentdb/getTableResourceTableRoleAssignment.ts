import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Assignment with the given Id.
 * Azure REST API version: 2024-12-01-preview.
 */
export function getTableResourceTableRoleAssignment(args: GetTableResourceTableRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResourceTableRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getTableResourceTableRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
}

export interface GetTableResourceTableRoleAssignmentArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The GUID for the Role Assignment.
     */
    roleAssignmentId: string;
}

/**
 * Parameters to create and update an Azure Cosmos DB Table Role Assignment.
 */
export interface GetTableResourceTableRoleAssignmentResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Table Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
     */
    readonly principalId?: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The unique identifier for the associated Role Definition.
     */
    readonly roleDefinitionId?: string;
    /**
     * The data plane resource path for which access is being granted through this Table Role Assignment.
     */
    readonly scope?: string;
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
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Assignment with the given Id.
 * Azure REST API version: 2024-12-01-preview.
 */
export function getTableResourceTableRoleAssignmentOutput(args: GetTableResourceTableRoleAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTableResourceTableRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getTableResourceTableRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
}

export interface GetTableResourceTableRoleAssignmentOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The GUID for the Role Assignment.
     */
    roleAssignmentId: pulumi.Input<string>;
}