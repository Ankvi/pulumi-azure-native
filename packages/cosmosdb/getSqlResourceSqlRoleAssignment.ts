import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2020-06-01-preview, 2021-03-01-preview, 2021-04-01-preview, 2021-04-15, 2021-05-15, 2021-06-15, 2021-07-01-preview, 2021-10-15, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlResourceSqlRoleAssignment(args: GetSqlResourceSqlRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlResourceSqlRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getSqlResourceSqlRoleAssignment", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2020-06-01-preview, 2021-03-01-preview, 2021-04-01-preview, 2021-04-15, 2021-05-15, 2021-06-15, 2021-07-01-preview, 2021-10-15, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlResourceSqlRoleAssignmentOutput(args: GetSqlResourceSqlRoleAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlResourceSqlRoleAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getSqlResourceSqlRoleAssignment", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "roleAssignmentId": args.roleAssignmentId,
    }, opts);
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