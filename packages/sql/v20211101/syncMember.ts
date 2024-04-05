import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL Database sync member.
 */
export class SyncMember extends pulumi.CustomResource {
    /**
     * Get an existing SyncMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SyncMember {
        return new SyncMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20211101:SyncMember';

    /**
     * Returns true if the given object is an instance of SyncMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyncMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyncMember.__pulumiType;
    }

    /**
     * Database name of the member database in the sync member.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * Database type of the sync member.
     */
    public readonly databaseType!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint name of the sync member if use private link connection is enabled, for sync members in Azure.
     */
    public /*out*/ readonly privateEndpointName!: pulumi.Output<string>;
    /**
     * Server name of the member database in the sync member
     */
    public readonly serverName!: pulumi.Output<string | undefined>;
    /**
     * SQL Server database id of the sync member.
     */
    public readonly sqlServerDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * ARM resource id of the sync agent in the sync member.
     */
    public readonly syncAgentId!: pulumi.Output<string | undefined>;
    /**
     * Sync direction of the sync member.
     */
    public readonly syncDirection!: pulumi.Output<string | undefined>;
    /**
     * ARM resource id of the sync member logical database, for sync members in Azure.
     */
    public readonly syncMemberAzureDatabaseResourceId!: pulumi.Output<string | undefined>;
    /**
     * Sync state of the sync member.
     */
    public /*out*/ readonly syncState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether to use private link connection.
     */
    public readonly usePrivateLinkConnection!: pulumi.Output<boolean | undefined>;
    /**
     * User name of the member database in the sync member.
     */
    public readonly userName!: pulumi.Output<string | undefined>;

    /**
     * Create a SyncMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncMemberArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.syncGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'syncGroupName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseType"] = args ? args.databaseType : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sqlServerDatabaseId"] = args ? args.sqlServerDatabaseId : undefined;
            resourceInputs["syncAgentId"] = args ? args.syncAgentId : undefined;
            resourceInputs["syncDirection"] = args ? args.syncDirection : undefined;
            resourceInputs["syncGroupName"] = args ? args.syncGroupName : undefined;
            resourceInputs["syncMemberAzureDatabaseResourceId"] = args ? args.syncMemberAzureDatabaseResourceId : undefined;
            resourceInputs["syncMemberName"] = args ? args.syncMemberName : undefined;
            resourceInputs["usePrivateLinkConnection"] = args ? args.usePrivateLinkConnection : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointName"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["databaseType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointName"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["sqlServerDatabaseId"] = undefined /*out*/;
            resourceInputs["syncAgentId"] = undefined /*out*/;
            resourceInputs["syncDirection"] = undefined /*out*/;
            resourceInputs["syncMemberAzureDatabaseResourceId"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usePrivateLinkConnection"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:SyncMember" }, { type: "azure-native:sql/v20150501preview:SyncMember" }, { type: "azure-native:sql/v20190601preview:SyncMember" }, { type: "azure-native:sql/v20200202preview:SyncMember" }, { type: "azure-native:sql/v20200801preview:SyncMember" }, { type: "azure-native:sql/v20201101preview:SyncMember" }, { type: "azure-native:sql/v20210201preview:SyncMember" }, { type: "azure-native:sql/v20210501preview:SyncMember" }, { type: "azure-native:sql/v20210801preview:SyncMember" }, { type: "azure-native:sql/v20211101preview:SyncMember" }, { type: "azure-native:sql/v20220201preview:SyncMember" }, { type: "azure-native:sql/v20220501preview:SyncMember" }, { type: "azure-native:sql/v20220801preview:SyncMember" }, { type: "azure-native:sql/v20221101preview:SyncMember" }, { type: "azure-native:sql/v20230201preview:SyncMember" }, { type: "azure-native:sql/v20230501preview:SyncMember" }, { type: "azure-native:sql/v20230801preview:SyncMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SyncMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SyncMember resource.
 */
export interface SyncMemberArgs {
    /**
     * Database name of the member database in the sync member.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Database type of the sync member.
     */
    databaseType?: pulumi.Input<string | types.enums.SyncMemberDbType>;
    /**
     * Password of the member database in the sync member.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Server name of the member database in the sync member
     */
    serverName: pulumi.Input<string>;
    /**
     * SQL Server database id of the sync member.
     */
    sqlServerDatabaseId?: pulumi.Input<string>;
    /**
     * ARM resource id of the sync agent in the sync member.
     */
    syncAgentId?: pulumi.Input<string>;
    /**
     * Sync direction of the sync member.
     */
    syncDirection?: pulumi.Input<string | types.enums.SyncDirection>;
    /**
     * The name of the sync group on which the sync member is hosted.
     */
    syncGroupName: pulumi.Input<string>;
    /**
     * ARM resource id of the sync member logical database, for sync members in Azure.
     */
    syncMemberAzureDatabaseResourceId?: pulumi.Input<string>;
    /**
     * The name of the sync member.
     */
    syncMemberName?: pulumi.Input<string>;
    /**
     * Whether to use private link connection.
     */
    usePrivateLinkConnection?: pulumi.Input<boolean>;
    /**
     * User name of the member database in the sync member.
     */
    userName?: pulumi.Input<string>;
}