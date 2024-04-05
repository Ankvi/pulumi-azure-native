import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 */
export function getSqlResourceSqlRoleAssignment(args: GetSqlResourceSqlRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlResourceSqlRoleAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20231115:getSqlResourceSqlRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
}

export interface GetSqlResourceSqlRoleAssignmentArgs {
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
 * An Azure Cosmos DB Role Assignment
 */
export interface GetSqlResourceSqlRoleAssignmentResult {
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
     */
    readonly principalId?: string;
    /**
     * The unique identifier for the associated Role Definition.
     */
    readonly roleDefinitionId?: string;
    /**
     * The data plane resource path for which access is being granted through this Role Assignment.
     */
    readonly scope?: string;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 */
export function getSqlResourceSqlRoleAssignmentOutput(args: GetSqlResourceSqlRoleAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlResourceSqlRoleAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getSqlResourceSqlRoleAssignment(a, opts))
}

export interface GetSqlResourceSqlRoleAssignmentOutputArgs {
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