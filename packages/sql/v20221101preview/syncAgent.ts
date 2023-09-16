import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An Azure SQL Database sync agent.
 */
export class SyncAgent extends pulumi.CustomResource {
    /**
     * Get an existing SyncAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SyncAgent {
        return new SyncAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:SyncAgent';

    /**
     * Returns true if the given object is an instance of SyncAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyncAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyncAgent.__pulumiType;
    }

    /**
     * Expiration time of the sync agent version.
     */
    public /*out*/ readonly expiryTime!: pulumi.Output<string>;
    /**
     * If the sync agent version is up to date.
     */
    public /*out*/ readonly isUpToDate!: pulumi.Output<boolean>;
    /**
     * Last alive time of the sync agent.
     */
    public /*out*/ readonly lastAliveTime!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the sync agent.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * ARM resource id of the sync database in the sync agent.
     */
    public readonly syncDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the sync agent.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a SyncAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["syncAgentName"] = args ? args.syncAgentName : undefined;
            resourceInputs["syncDatabaseId"] = args ? args.syncDatabaseId : undefined;
            resourceInputs["expiryTime"] = undefined /*out*/;
            resourceInputs["isUpToDate"] = undefined /*out*/;
            resourceInputs["lastAliveTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["expiryTime"] = undefined /*out*/;
            resourceInputs["isUpToDate"] = undefined /*out*/;
            resourceInputs["lastAliveTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["syncDatabaseId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:SyncAgent" }, { type: "azure-native:sql/v20150501preview:SyncAgent" }, { type: "azure-native:sql/v20200202preview:SyncAgent" }, { type: "azure-native:sql/v20200801preview:SyncAgent" }, { type: "azure-native:sql/v20201101preview:SyncAgent" }, { type: "azure-native:sql/v20210201preview:SyncAgent" }, { type: "azure-native:sql/v20210501preview:SyncAgent" }, { type: "azure-native:sql/v20210801preview:SyncAgent" }, { type: "azure-native:sql/v20211101:SyncAgent" }, { type: "azure-native:sql/v20211101preview:SyncAgent" }, { type: "azure-native:sql/v20220201preview:SyncAgent" }, { type: "azure-native:sql/v20220501preview:SyncAgent" }, { type: "azure-native:sql/v20220801preview:SyncAgent" }, { type: "azure-native:sql/v20230201preview:SyncAgent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SyncAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SyncAgent resource.
 */
export interface SyncAgentArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server on which the sync agent is hosted.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the sync agent.
     */
    syncAgentName?: pulumi.Input<string>;
    /**
     * ARM resource id of the sync database in the sync agent.
     */
    syncDatabaseId?: pulumi.Input<string>;
}
