import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A replication link.
 */
export class ReplicationLink extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationLink {
        return new ReplicationLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230801preview:ReplicationLink';

    /**
     * Returns true if the given object is an instance of ReplicationLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationLink.__pulumiType;
    }

    /**
     * Whether the user is currently allowed to terminate the link.
     */
    public /*out*/ readonly isTerminationAllowed!: pulumi.Output<boolean>;
    /**
     * Link type (GEO, NAMED, STANDBY). Update operation does not support NAMED.
     */
    public readonly linkType!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource partner database.
     */
    public /*out*/ readonly partnerDatabase!: pulumi.Output<string>;
    /**
     * Resource partner database Id.
     */
    public /*out*/ readonly partnerDatabaseId!: pulumi.Output<string>;
    /**
     * Resource partner location.
     */
    public /*out*/ readonly partnerLocation!: pulumi.Output<string>;
    /**
     * Partner replication role.
     */
    public /*out*/ readonly partnerRole!: pulumi.Output<string>;
    /**
     * Resource partner server.
     */
    public /*out*/ readonly partnerServer!: pulumi.Output<string>;
    /**
     * Seeding completion percentage for the link.
     */
    public /*out*/ readonly percentComplete!: pulumi.Output<number>;
    /**
     * Replication mode.
     */
    public /*out*/ readonly replicationMode!: pulumi.Output<string>;
    /**
     * Replication state (PENDING, SEEDING, CATCHUP, SUSPENDED).
     */
    public /*out*/ readonly replicationState!: pulumi.Output<string>;
    /**
     * Local replication role.
     */
    public /*out*/ readonly role!: pulumi.Output<string>;
    /**
     * Time at which the link was created.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationLinkArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["linkId"] = args ? args.linkId : undefined;
            resourceInputs["linkType"] = args ? args.linkType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["isTerminationAllowed"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerDatabase"] = undefined /*out*/;
            resourceInputs["partnerDatabaseId"] = undefined /*out*/;
            resourceInputs["partnerLocation"] = undefined /*out*/;
            resourceInputs["partnerRole"] = undefined /*out*/;
            resourceInputs["partnerServer"] = undefined /*out*/;
            resourceInputs["percentComplete"] = undefined /*out*/;
            resourceInputs["replicationMode"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["isTerminationAllowed"] = undefined /*out*/;
            resourceInputs["linkType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerDatabase"] = undefined /*out*/;
            resourceInputs["partnerDatabaseId"] = undefined /*out*/;
            resourceInputs["partnerLocation"] = undefined /*out*/;
            resourceInputs["partnerRole"] = undefined /*out*/;
            resourceInputs["partnerServer"] = undefined /*out*/;
            resourceInputs["percentComplete"] = undefined /*out*/;
            resourceInputs["replicationMode"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ReplicationLink" }, { type: "azure-native:sql/v20230501preview:ReplicationLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationLink resource.
 */
export interface ReplicationLinkArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    linkId?: pulumi.Input<string>;
    /**
     * Link type (GEO, NAMED, STANDBY). Update operation does not support NAMED.
     */
    linkType?: pulumi.Input<string | types.enums.ReplicationLinkType>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}