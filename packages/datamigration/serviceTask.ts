import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A task resource
 *
 * Uses Azure REST API version 2023-07-15-preview. In version 2.x of the Azure Native provider, it used API version 2021-06-30.
 *
 * Other available API versions: 2021-06-30, 2021-10-30-preview, 2022-01-30-preview, 2022-03-30-preview, 2025-03-15-preview, 2025-06-30, 2025-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ServiceTask extends pulumi.CustomResource {
    /**
     * Get an existing ServiceTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceTask {
        return new ServiceTask(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration:ServiceTask';

    /**
     * Returns true if the given object is an instance of ServiceTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceTask.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Custom task properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ConnectToMongoDbTaskPropertiesResponse | types.outputs.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.GetUserTablesOracleTaskPropertiesResponse | types.outputs.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.GetUserTablesSqlTaskPropertiesResponse | types.outputs.MigrateMongoDbTaskPropertiesResponse | types.outputs.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.MigrateSsisTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.ValidateMongoDbTaskPropertiesResponse | types.outputs.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceTaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["taskName"] = args ? args.taskName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20180715preview:ServiceTask" }, { type: "azure-native:datamigration/v20210630:ServiceTask" }, { type: "azure-native:datamigration/v20211030preview:ServiceTask" }, { type: "azure-native:datamigration/v20220130preview:ServiceTask" }, { type: "azure-native:datamigration/v20220330preview:ServiceTask" }, { type: "azure-native:datamigration/v20230715preview:ServiceTask" }, { type: "azure-native:datamigration/v20250315preview:ServiceTask" }, { type: "azure-native:datamigration/v20250630:ServiceTask" }, { type: "azure-native:datamigration/v20250901preview:ServiceTask" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceTask.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceTask resource.
 */
export interface ServiceTaskArgs {
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Custom task properties
     */
    properties?: pulumi.Input<types.inputs.ConnectToMongoDbTaskPropertiesArgs | types.inputs.ConnectToSourceMySqlTaskPropertiesArgs | types.inputs.ConnectToSourceOracleSyncTaskPropertiesArgs | types.inputs.ConnectToSourcePostgreSqlSyncTaskPropertiesArgs | types.inputs.ConnectToSourceSqlServerSyncTaskPropertiesArgs | types.inputs.ConnectToSourceSqlServerTaskPropertiesArgs | types.inputs.ConnectToTargetAzureDbForMySqlTaskPropertiesArgs | types.inputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.ConnectToTargetSqlDbTaskPropertiesArgs | types.inputs.ConnectToTargetSqlMISyncTaskPropertiesArgs | types.inputs.ConnectToTargetSqlMITaskPropertiesArgs | types.inputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs | types.inputs.GetTdeCertificatesSqlTaskPropertiesArgs | types.inputs.GetUserTablesMySqlTaskPropertiesArgs | types.inputs.GetUserTablesOracleTaskPropertiesArgs | types.inputs.GetUserTablesPostgreSqlTaskPropertiesArgs | types.inputs.GetUserTablesSqlSyncTaskPropertiesArgs | types.inputs.GetUserTablesSqlTaskPropertiesArgs | types.inputs.MigrateMongoDbTaskPropertiesArgs | types.inputs.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs | types.inputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs | types.inputs.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.MigrateSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.MigrateSqlServerSqlDbTaskPropertiesArgs | types.inputs.MigrateSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.MigrateSqlServerSqlMITaskPropertiesArgs | types.inputs.MigrateSsisTaskPropertiesArgs | types.inputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs | types.inputs.ValidateMongoDbTaskPropertiesArgs | types.inputs.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName?: pulumi.Input<string>;
}