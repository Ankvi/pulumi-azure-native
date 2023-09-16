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
    public readonly properties!: pulumi.Output<types.outputs.datamigration.v20220330preview.ConnectToMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceOracleSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceSqlServerSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToSourceSqlServerTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetTdeCertificatesSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesMySqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesOracleTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesPostgreSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.GetUserTablesSqlTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.MigrateSsisTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateMongoDbTaskPropertiesResponse | types.outputs.datamigration.v20220330preview.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.datamigration.v20220330preview.SystemDataResponse>;
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
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration:Task" }, { type: "azure-native:datamigration/v20171115preview:Task" }, { type: "azure-native:datamigration/v20180315preview:Task" }, { type: "azure-native:datamigration/v20180331preview:Task" }, { type: "azure-native:datamigration/v20180419:Task" }, { type: "azure-native:datamigration/v20180715preview:Task" }, { type: "azure-native:datamigration/v20210630:Task" }, { type: "azure-native:datamigration/v20211030preview:Task" }, { type: "azure-native:datamigration/v20220130preview:Task" }] };
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
    properties?: pulumi.Input<types.inputs.datamigration.v20220330preview.ConnectToMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToSourceMySqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToSourceOracleSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToSourcePostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToSourceSqlServerSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToSourceSqlServerTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetAzureDbForMySqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetSqlDbTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetSqlMITaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetTdeCertificatesSqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetUserTablesMySqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetUserTablesOracleTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetUserTablesPostgreSqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetUserTablesSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.GetUserTablesSqlTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlOfflineTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateSqlServerSqlDbTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.v20220330preview.MigrateSsisTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ValidateMongoDbTaskPropertiesArgs | types.inputs.datamigration.v20220330preview.ValidateOracleAzureDbForPostgreSqlSyncTaskPropertiesArgs>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    taskName?: pulumi.Input<string>;
}
