import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a migration resource.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2021-06-15-privatepreview, 2022-05-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-08-01, 2024-11-01-preview.
 */
export class Migration extends pulumi.CustomResource {
    /**
     * Get an existing Migration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Migration {
        return new Migration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:Migration';

    /**
     * Returns true if the given object is an instance of Migration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Migration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Migration.__pulumiType;
    }

    /**
     * To trigger cancel for entire migration we need to send this flag as True
     */
    public readonly cancel!: pulumi.Output<string | undefined>;
    /**
     * Current status of migration
     */
    public /*out*/ readonly currentStatus!: pulumi.Output<types.outputs.MigrationStatusResponse>;
    /**
     * When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
     */
    public readonly dbsToCancelMigrationOn!: pulumi.Output<string[] | undefined>;
    /**
     * Number of databases to migrate
     */
    public readonly dbsToMigrate!: pulumi.Output<string[] | undefined>;
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
     */
    public readonly dbsToTriggerCutoverOn!: pulumi.Output<string[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * ID for migration, a GUID.
     */
    public /*out*/ readonly migrationId!: pulumi.Output<string>;
    /**
     * There are two types of migration modes Online and Offline
     */
    public readonly migrationMode!: pulumi.Output<string | undefined>;
    /**
     * End time in UTC for migration window
     */
    public readonly migrationWindowEndTimeInUtc!: pulumi.Output<string | undefined>;
    /**
     * Start time in UTC for migration window
     */
    public readonly migrationWindowStartTimeInUtc!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
     */
    public readonly overwriteDbsInTarget!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
     */
    public readonly setupLogicalReplicationOnSourceDbIfNeeded!: pulumi.Output<string | undefined>;
    /**
     * Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    public readonly sourceDbServerFullyQualifiedDomainName!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the source database server
     */
    public /*out*/ readonly sourceDbServerMetadata!: pulumi.Output<types.outputs.DbServerMetadataResponse>;
    /**
     * ResourceId of the source database server
     */
    public readonly sourceDbServerResourceId!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the data migration should start right away
     */
    public readonly startDataMigration!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    public readonly targetDbServerFullyQualifiedDomainName!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the target database server
     */
    public /*out*/ readonly targetDbServerMetadata!: pulumi.Output<types.outputs.DbServerMetadataResponse>;
    /**
     * ResourceId of the source database server
     */
    public /*out*/ readonly targetDbServerResourceId!: pulumi.Output<string>;
    /**
     * To trigger cutover for entire migration we need to send this flag as True
     */
    public readonly triggerCutover!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Migration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetDbServerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetDbServerName'");
            }
            resourceInputs["cancel"] = args ? args.cancel : undefined;
            resourceInputs["dbsToCancelMigrationOn"] = args ? args.dbsToCancelMigrationOn : undefined;
            resourceInputs["dbsToMigrate"] = args ? args.dbsToMigrate : undefined;
            resourceInputs["dbsToTriggerCutoverOn"] = args ? args.dbsToTriggerCutoverOn : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrationMode"] = args ? args.migrationMode : undefined;
            resourceInputs["migrationName"] = args ? args.migrationName : undefined;
            resourceInputs["migrationWindowEndTimeInUtc"] = args ? args.migrationWindowEndTimeInUtc : undefined;
            resourceInputs["migrationWindowStartTimeInUtc"] = args ? args.migrationWindowStartTimeInUtc : undefined;
            resourceInputs["overwriteDbsInTarget"] = args ? args.overwriteDbsInTarget : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secretParameters"] = args ? args.secretParameters : undefined;
            resourceInputs["setupLogicalReplicationOnSourceDbIfNeeded"] = args ? args.setupLogicalReplicationOnSourceDbIfNeeded : undefined;
            resourceInputs["sourceDbServerFullyQualifiedDomainName"] = args ? args.sourceDbServerFullyQualifiedDomainName : undefined;
            resourceInputs["sourceDbServerResourceId"] = args ? args.sourceDbServerResourceId : undefined;
            resourceInputs["startDataMigration"] = args ? args.startDataMigration : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetDbServerFullyQualifiedDomainName"] = args ? args.targetDbServerFullyQualifiedDomainName : undefined;
            resourceInputs["targetDbServerName"] = args ? args.targetDbServerName : undefined;
            resourceInputs["triggerCutover"] = args ? args.triggerCutover : undefined;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["migrationId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceDbServerMetadata"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetDbServerMetadata"] = undefined /*out*/;
            resourceInputs["targetDbServerResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cancel"] = undefined /*out*/;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["dbsToCancelMigrationOn"] = undefined /*out*/;
            resourceInputs["dbsToMigrate"] = undefined /*out*/;
            resourceInputs["dbsToTriggerCutoverOn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationId"] = undefined /*out*/;
            resourceInputs["migrationMode"] = undefined /*out*/;
            resourceInputs["migrationWindowEndTimeInUtc"] = undefined /*out*/;
            resourceInputs["migrationWindowStartTimeInUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["overwriteDbsInTarget"] = undefined /*out*/;
            resourceInputs["setupLogicalReplicationOnSourceDbIfNeeded"] = undefined /*out*/;
            resourceInputs["sourceDbServerFullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["sourceDbServerMetadata"] = undefined /*out*/;
            resourceInputs["sourceDbServerResourceId"] = undefined /*out*/;
            resourceInputs["startDataMigration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetDbServerFullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["targetDbServerMetadata"] = undefined /*out*/;
            resourceInputs["targetDbServerResourceId"] = undefined /*out*/;
            resourceInputs["triggerCutover"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20210615privatepreview:Migration" }, { type: "azure-native:dbforpostgresql/v20220501preview:Migration" }, { type: "azure-native:dbforpostgresql/v20230301preview:Migration" }, { type: "azure-native:dbforpostgresql/v20230601preview:Migration" }, { type: "azure-native:dbforpostgresql/v20231201preview:Migration" }, { type: "azure-native:dbforpostgresql/v20240301preview:Migration" }, { type: "azure-native:dbforpostgresql/v20240801:Migration" }, { type: "azure-native:dbforpostgresql/v20241101preview:Migration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Migration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Migration resource.
 */
export interface MigrationArgs {
    /**
     * To trigger cancel for entire migration we need to send this flag as True
     */
    cancel?: pulumi.Input<string | types.enums.CancelEnum>;
    /**
     * When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
     */
    dbsToCancelMigrationOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Number of databases to migrate
     */
    dbsToMigrate?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
     */
    dbsToTriggerCutoverOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * There are two types of migration modes Online and Offline
     */
    migrationMode?: pulumi.Input<string | types.enums.MigrationMode>;
    /**
     * The name of the migration.
     */
    migrationName?: pulumi.Input<string>;
    /**
     * End time in UTC for migration window
     */
    migrationWindowEndTimeInUtc?: pulumi.Input<string>;
    /**
     * Start time in UTC for migration window
     */
    migrationWindowStartTimeInUtc?: pulumi.Input<string>;
    /**
     * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
     */
    overwriteDbsInTarget?: pulumi.Input<string | types.enums.OverwriteDbsInTargetEnum>;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Migration secret parameters
     */
    secretParameters?: pulumi.Input<types.inputs.MigrationSecretParametersArgs>;
    /**
     * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
     */
    setupLogicalReplicationOnSourceDbIfNeeded?: pulumi.Input<string | types.enums.LogicalReplicationOnSourceDbEnum>;
    /**
     * Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    sourceDbServerFullyQualifiedDomainName?: pulumi.Input<string>;
    /**
     * ResourceId of the source database server
     */
    sourceDbServerResourceId?: pulumi.Input<string>;
    /**
     * Indicates whether the data migration should start right away
     */
    startDataMigration?: pulumi.Input<string | types.enums.StartDataMigrationEnum>;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
     */
    targetDbServerFullyQualifiedDomainName?: pulumi.Input<string>;
    /**
     * The name of the target database server.
     */
    targetDbServerName: pulumi.Input<string>;
    /**
     * To trigger cutover for entire migration we need to send this flag as True
     */
    triggerCutover?: pulumi.Input<string | types.enums.TriggerCutoverEnum>;
}