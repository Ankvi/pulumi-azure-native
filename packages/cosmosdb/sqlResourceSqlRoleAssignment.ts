import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An Azure Cosmos DB Role Assignment
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2020-06-01-preview, 2021-03-01-preview, 2021-04-01-preview, 2021-04-15, 2021-05-15, 2021-06-15, 2021-07-01-preview, 2021-10-15, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SqlResourceSqlRoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing SqlResourceSqlRoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlResourceSqlRoleAssignment {
        return new SqlResourceSqlRoleAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:SqlResourceSqlRoleAssignment';

    /**
     * Returns true if the given object is an instance of SqlResourceSqlRoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlResourceSqlRoleAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlResourceSqlRoleAssignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
     */
    public readonly principalId!: pulumi.Output<string | undefined>;
    /**
     * The unique identifier for the associated Role Definition.
     */
    public readonly roleDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The data plane resource path for which access is being granted through this Role Assignment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlResourceSqlRoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlResourceSqlRoleAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleAssignmentId"] = args ? args.roleAssignmentId : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20200601preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210301preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210401preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210415:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210515:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210615:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20210701preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20211015:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20211015preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20211115preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20220215preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20220515:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20220515preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20220815:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20220815preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20221115:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20221115preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230301preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230315:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230315preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230415:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230915:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20230915preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20231115:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20231115preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20240215preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20240515:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20240515preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20240815:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20240901preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20241115:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20241201preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20250415:SqlResourceSqlRoleAssignment" }, { type: "azure-native:cosmosdb/v20250501preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20230415:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20230915:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20230915preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20231115:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20231115preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20240215preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20240515:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20240515preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20240815:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20240901preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20241115:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb/v20241201preview:SqlResourceSqlRoleAssignment" }, { type: "azure-native:documentdb:SqlResourceSqlRoleAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlResourceSqlRoleAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlResourceSqlRoleAssignment resource.
 */
export interface SqlResourceSqlRoleAssignmentArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
     */
    principalId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The GUID for the Role Assignment.
     */
    roleAssignmentId?: pulumi.Input<string>;
    /**
     * The unique identifier for the associated Role Definition.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The data plane resource path for which access is being granted through this Role Assignment.
     */
    scope?: pulumi.Input<string>;
}