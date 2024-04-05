import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL Database sync group.
 */
export class SyncGroup extends pulumi.CustomResource {
    /**
     * Get an existing SyncGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SyncGroup {
        return new SyncGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230201preview:SyncGroup';

    /**
     * Returns true if the given object is an instance of SyncGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyncGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyncGroup.__pulumiType;
    }

    /**
     * Conflict logging retention period.
     */
    public readonly conflictLoggingRetentionInDays!: pulumi.Output<number | undefined>;
    /**
     * Conflict resolution policy of the sync group.
     */
    public readonly conflictResolutionPolicy!: pulumi.Output<string | undefined>;
    /**
     * If conflict logging is enabled.
     */
    public readonly enableConflictLogging!: pulumi.Output<boolean | undefined>;
    /**
     * User name for the sync group hub database credential.
     */
    public readonly hubDatabaseUserName!: pulumi.Output<string | undefined>;
    /**
     * Sync interval of the sync group.
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * Last sync time of the sync group.
     */
    public /*out*/ readonly lastSyncTime!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint name of the sync group if use private link connection is enabled.
     */
    public /*out*/ readonly privateEndpointName!: pulumi.Output<string>;
    /**
     * Sync schema of the sync group.
     */
    public readonly schema!: pulumi.Output<types.outputs.SyncGroupSchemaResponse | undefined>;
    /**
     * The name and capacity of the SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * ARM resource id of the sync database in the sync group.
     */
    public readonly syncDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * Sync state of the sync group.
     */
    public /*out*/ readonly syncState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * If use private link connection is enabled.
     */
    public readonly usePrivateLinkConnection!: pulumi.Output<boolean | undefined>;

    /**
     * Create a SyncGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["conflictLoggingRetentionInDays"] = args ? args.conflictLoggingRetentionInDays : undefined;
            resourceInputs["conflictResolutionPolicy"] = args ? args.conflictResolutionPolicy : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["enableConflictLogging"] = args ? args.enableConflictLogging : undefined;
            resourceInputs["hubDatabasePassword"] = args ? args.hubDatabasePassword : undefined;
            resourceInputs["hubDatabaseUserName"] = args ? args.hubDatabaseUserName : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["syncDatabaseId"] = args ? args.syncDatabaseId : undefined;
            resourceInputs["syncGroupName"] = args ? args.syncGroupName : undefined;
            resourceInputs["usePrivateLinkConnection"] = args ? args.usePrivateLinkConnection : undefined;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointName"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["conflictLoggingRetentionInDays"] = undefined /*out*/;
            resourceInputs["conflictResolutionPolicy"] = undefined /*out*/;
            resourceInputs["enableConflictLogging"] = undefined /*out*/;
            resourceInputs["hubDatabaseUserName"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointName"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["syncDatabaseId"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usePrivateLinkConnection"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:SyncGroup" }, { type: "azure-native:sql/v20150501preview:SyncGroup" }, { type: "azure-native:sql/v20190601preview:SyncGroup" }, { type: "azure-native:sql/v20200202preview:SyncGroup" }, { type: "azure-native:sql/v20200801preview:SyncGroup" }, { type: "azure-native:sql/v20201101preview:SyncGroup" }, { type: "azure-native:sql/v20210201preview:SyncGroup" }, { type: "azure-native:sql/v20210501preview:SyncGroup" }, { type: "azure-native:sql/v20210801preview:SyncGroup" }, { type: "azure-native:sql/v20211101:SyncGroup" }, { type: "azure-native:sql/v20211101preview:SyncGroup" }, { type: "azure-native:sql/v20220201preview:SyncGroup" }, { type: "azure-native:sql/v20220501preview:SyncGroup" }, { type: "azure-native:sql/v20220801preview:SyncGroup" }, { type: "azure-native:sql/v20221101preview:SyncGroup" }, { type: "azure-native:sql/v20230501preview:SyncGroup" }, { type: "azure-native:sql/v20230801preview:SyncGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SyncGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SyncGroup resource.
 */
export interface SyncGroupArgs {
    /**
     * Conflict logging retention period.
     */
    conflictLoggingRetentionInDays?: pulumi.Input<number>;
    /**
     * Conflict resolution policy of the sync group.
     */
    conflictResolutionPolicy?: pulumi.Input<string | types.enums.SyncConflictResolutionPolicy>;
    /**
     * The name of the database on which the sync group is hosted.
     */
    databaseName: pulumi.Input<string>;
    /**
     * If conflict logging is enabled.
     */
    enableConflictLogging?: pulumi.Input<boolean>;
    /**
     * Password for the sync group hub database credential.
     */
    hubDatabasePassword?: pulumi.Input<string>;
    /**
     * User name for the sync group hub database credential.
     */
    hubDatabaseUserName?: pulumi.Input<string>;
    /**
     * Sync interval of the sync group.
     */
    interval?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sync schema of the sync group.
     */
    schema?: pulumi.Input<types.inputs.SyncGroupSchemaArgs>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name and capacity of the SKU.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * ARM resource id of the sync database in the sync group.
     */
    syncDatabaseId?: pulumi.Input<string>;
    /**
     * The name of the sync group.
     */
    syncGroupName?: pulumi.Input<string>;
    /**
     * If use private link connection is enabled.
     */
    usePrivateLinkConnection?: pulumi.Input<boolean>;
}