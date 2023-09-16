import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A task resource
 * Azure REST API version: 2021-06-30.
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
    public readonly properties!: pulumi.Output<types.outputs.datamigration.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.datamigration.SystemDataResponse>;
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
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20180715preview:ServiceTask" }, { type: "azure-native:datamigration/v20210630:ServiceTask" }, { type: "azure-native:datamigration/v20211030preview:ServiceTask" }, { type: "azure-native:datamigration/v20220130preview:ServiceTask" }, { type: "azure-native:datamigration/v20220330preview:ServiceTask" }] };
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
    properties?: pulumi.Input<types.inputs.datamigration.ConnectToMongoDbTaskPropertiesArgs | types.inputs.datamigration.ConnectToSourceMySqlTaskPropertiesArgs | types.inputs.datamigration.ConnectToSourceOracleSyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToSourcePostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToSourceSqlServerSyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToSourceSqlServerTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetAzureDbForMySqlTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetSqlDbTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetSqlMITaskPropertiesArgs | types.inputs.datamigration.ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.GetTdeCertificatesSqlTaskPropertiesArgs | types.inputs.datamigration.GetUserTablesMySqlTaskPropertiesArgs | types.inputs.datamigration.GetUserTablesOracleTaskPropertiesArgs | types.inputs.datamigration.GetUserTablesPostgreSqlTaskPropertiesArgs | types.inputs.datamigration.GetUserTablesSqlSyncTaskPropertiesArgs | types.inputs.datamigration.GetUserTablesSqlTaskPropertiesArgs | types.inputs.datamigration.MigrateMongoDbTaskPropertiesArgs | types.inputs.datamigration.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs | types.inputs.datamigration.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs | types.inputs.datamigration.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.MigrateSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.MigrateSqlServerSqlDbTaskPropertiesArgs | types.inputs.datamigration.MigrateSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.MigrateSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.MigrateSsisTaskPropertiesArgs | types.inputs.datamigration.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.ValidateMongoDbTaskPropertiesArgs | types.inputs.datamigration.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName?: pulumi.Input<string>;
}
