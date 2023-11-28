import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a migration resource.
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
    public static readonly __pulumiType = 'azure-native:dbforpostgresql/v20220501preview:Migration';

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
     * To trigger cancel for entire migration we need to send this flag as true
     */
    public readonly cancel!: pulumi.Output<boolean | undefined>;
    /**
     * Migration status.
     */
    public /*out*/ readonly currentStatus!: pulumi.Output<types.outputs.MigrationStatusResponse>;
    /**
     * When you want to trigger cancel for specific databases send triggerCutover flag as true and database names in this array
     */
    public readonly dBsToCancelMigrationOn!: pulumi.Output<string[] | undefined>;
    public readonly dBsToMigrate!: pulumi.Output<string[] | undefined>;
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as true and database names in this array
     */
    public readonly dBsToTiggerCutoverOn!: pulumi.Output<string[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Migration details level.
     */
    public /*out*/ readonly migrationDetailsLevel!: pulumi.Output<string>;
    public /*out*/ readonly migrationId!: pulumi.Output<string>;
    /**
     * There are two types of migration modes Online and Offline
     */
    public readonly migrationMode!: pulumi.Output<string | undefined>;
    public readonly migrationWindowStartTimeInUtc!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly overwriteDBsInTarget!: pulumi.Output<boolean | undefined>;
    public readonly setupLogicalReplicationOnSourceDBIfNeeded!: pulumi.Output<boolean | undefined>;
    public readonly sourceDBServerFullyQualifiedDomainName!: pulumi.Output<string | undefined>;
    /**
     * Database server metadata.
     */
    public /*out*/ readonly sourceDBServerMetadata!: pulumi.Output<types.outputs.DBServerMetadataResponse>;
    public readonly sourceDBServerResourceId!: pulumi.Output<string | undefined>;
    public readonly startDataMigration!: pulumi.Output<boolean | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly targetDBServerFullyQualifiedDomainName!: pulumi.Output<string | undefined>;
    /**
     * Database server metadata.
     */
    public /*out*/ readonly targetDBServerMetadata!: pulumi.Output<types.outputs.DBServerMetadataResponse>;
    public /*out*/ readonly targetDBServerResourceId!: pulumi.Output<string>;
    /**
     * To trigger cutover for entire migration we need to send this flag as true
     */
    public readonly triggerCutover!: pulumi.Output<boolean | undefined>;
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
            if ((!args || args.targetDBServerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetDBServerName'");
            }
            resourceInputs["cancel"] = args ? args.cancel : undefined;
            resourceInputs["dBsToCancelMigrationOn"] = args ? args.dBsToCancelMigrationOn : undefined;
            resourceInputs["dBsToMigrate"] = args ? args.dBsToMigrate : undefined;
            resourceInputs["dBsToTiggerCutoverOn"] = args ? args.dBsToTiggerCutoverOn : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrationMode"] = args ? args.migrationMode : undefined;
            resourceInputs["migrationName"] = args ? args.migrationName : undefined;
            resourceInputs["migrationWindowStartTimeInUtc"] = args ? args.migrationWindowStartTimeInUtc : undefined;
            resourceInputs["overwriteDBsInTarget"] = args ? args.overwriteDBsInTarget : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secretParameters"] = args ? args.secretParameters : undefined;
            resourceInputs["setupLogicalReplicationOnSourceDBIfNeeded"] = args ? args.setupLogicalReplicationOnSourceDBIfNeeded : undefined;
            resourceInputs["sourceDBServerFullyQualifiedDomainName"] = args ? args.sourceDBServerFullyQualifiedDomainName : undefined;
            resourceInputs["sourceDBServerResourceId"] = args ? args.sourceDBServerResourceId : undefined;
            resourceInputs["startDataMigration"] = args ? args.startDataMigration : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetDBServerFullyQualifiedDomainName"] = args ? args.targetDBServerFullyQualifiedDomainName : undefined;
            resourceInputs["targetDBServerName"] = args ? args.targetDBServerName : undefined;
            resourceInputs["triggerCutover"] = args ? args.triggerCutover : undefined;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["migrationDetailsLevel"] = undefined /*out*/;
            resourceInputs["migrationId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceDBServerMetadata"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetDBServerMetadata"] = undefined /*out*/;
            resourceInputs["targetDBServerResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cancel"] = undefined /*out*/;
            resourceInputs["currentStatus"] = undefined /*out*/;
            resourceInputs["dBsToCancelMigrationOn"] = undefined /*out*/;
            resourceInputs["dBsToMigrate"] = undefined /*out*/;
            resourceInputs["dBsToTiggerCutoverOn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationDetailsLevel"] = undefined /*out*/;
            resourceInputs["migrationId"] = undefined /*out*/;
            resourceInputs["migrationMode"] = undefined /*out*/;
            resourceInputs["migrationWindowStartTimeInUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["overwriteDBsInTarget"] = undefined /*out*/;
            resourceInputs["setupLogicalReplicationOnSourceDBIfNeeded"] = undefined /*out*/;
            resourceInputs["sourceDBServerFullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["sourceDBServerMetadata"] = undefined /*out*/;
            resourceInputs["sourceDBServerResourceId"] = undefined /*out*/;
            resourceInputs["startDataMigration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetDBServerFullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["targetDBServerMetadata"] = undefined /*out*/;
            resourceInputs["targetDBServerResourceId"] = undefined /*out*/;
            resourceInputs["triggerCutover"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql:Migration" }, { type: "azure-native:dbforpostgresql/v20210615privatepreview:Migration" }, { type: "azure-native:dbforpostgresql/v20230301preview:Migration" }, { type: "azure-native:dbforpostgresql/v20230601preview:Migration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Migration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Migration resource.
 */
export interface MigrationArgs {
    /**
     * To trigger cancel for entire migration we need to send this flag as true
     */
    cancel?: pulumi.Input<boolean>;
    /**
     * When you want to trigger cancel for specific databases send triggerCutover flag as true and database names in this array
     */
    dBsToCancelMigrationOn?: pulumi.Input<pulumi.Input<string>[]>;
    dBsToMigrate?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as true and database names in this array
     */
    dBsToTiggerCutoverOn?: pulumi.Input<pulumi.Input<string>[]>;
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
    migrationWindowStartTimeInUtc?: pulumi.Input<string>;
    overwriteDBsInTarget?: pulumi.Input<boolean>;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Migration secret parameters.
     */
    secretParameters?: pulumi.Input<types.inputs.MigrationSecretParametersArgs>;
    setupLogicalReplicationOnSourceDBIfNeeded?: pulumi.Input<boolean>;
    sourceDBServerFullyQualifiedDomainName?: pulumi.Input<string>;
    sourceDBServerResourceId?: pulumi.Input<string>;
    startDataMigration?: pulumi.Input<boolean>;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetDBServerFullyQualifiedDomainName?: pulumi.Input<string>;
    /**
     * The name of the target database server.
     */
    targetDBServerName: pulumi.Input<string>;
    /**
     * To trigger cutover for entire migration we need to send this flag as true
     */
    triggerCutover?: pulumi.Input<boolean>;
}
