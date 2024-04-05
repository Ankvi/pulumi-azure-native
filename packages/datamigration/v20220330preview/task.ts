import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:datamigration/v20220330preview:Task';

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
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration:Task" }, { type: "azure-native:datamigration/v20171115preview:Task" }, { type: "azure-native:datamigration/v20180315preview:Task" }, { type: "azure-native:datamigration/v20180331preview:Task" }, { type: "azure-native:datamigration/v20180419:Task" }, { type: "azure-native:datamigration/v20180715preview:Task" }, { type: "azure-native:datamigration/v20210630:Task" }, { type: "azure-native:datamigration/v20211030preview:Task" }, { type: "azure-native:datamigration/v20220130preview:Task" }, { type: "azure-native:datamigration/v20230715preview:Task" }] };
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