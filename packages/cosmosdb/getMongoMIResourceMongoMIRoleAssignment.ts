import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB MongoMI Role Assignment with the given Id.
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getMongoMIResourceMongoMIRoleAssignment(args: GetMongoMIResourceMongoMIRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoMIResourceMongoMIRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getMongoMIResourceMongoMIRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
}

export interface GetMongoMIResourceMongoMIRoleAssignmentArgs {
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
 * Parameters to create and update an Azure Cosmos DB MongoMI Role Assignment.
 */
export interface GetMongoMIResourceMongoMIRoleAssignmentResult {
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
     * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this MongoMI Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
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
     * The data plane resource path for which access is being granted through this MongoMI Role Assignment.
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
 * Retrieves the properties of an existing Azure Cosmos DB MongoMI Role Assignment with the given Id.
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getMongoMIResourceMongoMIRoleAssignmentOutput(args: GetMongoMIResourceMongoMIRoleAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMongoMIResourceMongoMIRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getMongoMIResourceMongoMIRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
}

export interface GetMongoMIResourceMongoMIRoleAssignmentOutputArgs {
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