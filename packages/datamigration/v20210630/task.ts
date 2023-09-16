import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A task resource
 */
export class Task extends pulumi.CustomResource {
    /**
     * Get an existing Task resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Task {
        return new Task(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration/v20210630:Task';

    /**
     * Returns true if the given object is an instance of Task.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Task {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Task.__pulumiType;
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
    public readonly properties!: pulumi.Output<types.outputs.datamigration.v20210630.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20210630.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.datamigration.v20210630.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Task resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration:Task" }, { type: "azure-native:datamigration/v20171115preview:Task" }, { type: "azure-native:datamigration/v20180315preview:Task" }, { type: "azure-native:datamigration/v20180331preview:Task" }, { type: "azure-native:datamigration/v20180419:Task" }, { type: "azure-native:datamigration/v20180715preview:Task" }, { type: "azure-native:datamigration/v20211030preview:Task" }, { type: "azure-native:datamigration/v20220130preview:Task" }, { type: "azure-native:datamigration/v20220330preview:Task" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Task.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Task resource.
 */
export interface TaskArgs {
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the project
     */
    projectName: pulumi.Input<string>;
    /**
     * Custom task properties
     */
    properties?: pulumi.Input<types.inputs.datamigration.v20210630.ConnectToMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToSourceMySqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToSourceOracleSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToSourcePostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToSourceSqlServerSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToSourceSqlServerTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetAzureDbForMySqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetSqlDbTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetSqlMITaskPropertiesArgs | types.inputs.datamigration.v20210630.ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetTdeCertificatesSqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetUserTablesMySqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetUserTablesOracleTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetUserTablesPostgreSqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetUserTablesSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.GetUserTablesSqlTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateSqlServerSqlDbTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.v20210630.MigrateSsisTaskPropertiesArgs | types.inputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20210630.ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.v20210630.ValidateMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20210630.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName?: pulumi.Input<string>;
}
