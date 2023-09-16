import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A failover group.
 */
export class FailoverGroup extends pulumi.CustomResource {
    /**
     * Get an existing FailoverGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FailoverGroup {
        return new FailoverGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230201preview:FailoverGroup';

    /**
     * Returns true if the given object is an instance of FailoverGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FailoverGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FailoverGroup.__pulumiType;
    }

    /**
     * List of databases in the failover group.
     */
    public readonly databases!: pulumi.Output<string[] | undefined>;
    /**
     * Resource location.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of partner server information for the failover group.
     */
    public readonly partnerServers!: pulumi.Output<types.outputs.sql.v20230201preview.PartnerInfoResponse[]>;
    /**
     * Read-only endpoint of the failover group instance.
     */
    public readonly readOnlyEndpoint!: pulumi.Output<types.outputs.sql.v20230201preview.FailoverGroupReadOnlyEndpointResponse | undefined>;
    /**
     * Read-write endpoint of the failover group instance.
     */
    public readonly readWriteEndpoint!: pulumi.Output<types.outputs.sql.v20230201preview.FailoverGroupReadWriteEndpointResponse>;
    /**
     * Local replication role of the failover group instance.
     */
    public /*out*/ readonly replicationRole!: pulumi.Output<string>;
    /**
     * Replication state of the failover group instance.
     */
    public /*out*/ readonly replicationState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FailoverGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FailoverGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.partnerServers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerServers'");
            }
            if ((!args || args.readWriteEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'readWriteEndpoint'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databases"] = args ? args.databases : undefined;
            resourceInputs["failoverGroupName"] = args ? args.failoverGroupName : undefined;
            resourceInputs["partnerServers"] = args ? args.partnerServers : undefined;
            resourceInputs["readOnlyEndpoint"] = args ? args.readOnlyEndpoint : undefined;
            resourceInputs["readWriteEndpoint"] = args ? args.readWriteEndpoint : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["databases"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerServers"] = undefined /*out*/;
            resourceInputs["readOnlyEndpoint"] = undefined /*out*/;
            resourceInputs["readWriteEndpoint"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:FailoverGroup" }, { type: "azure-native:sql/v20150501preview:FailoverGroup" }, { type: "azure-native:sql/v20200202preview:FailoverGroup" }, { type: "azure-native:sql/v20200801preview:FailoverGroup" }, { type: "azure-native:sql/v20201101preview:FailoverGroup" }, { type: "azure-native:sql/v20210201preview:FailoverGroup" }, { type: "azure-native:sql/v20210501preview:FailoverGroup" }, { type: "azure-native:sql/v20210801preview:FailoverGroup" }, { type: "azure-native:sql/v20211101:FailoverGroup" }, { type: "azure-native:sql/v20211101preview:FailoverGroup" }, { type: "azure-native:sql/v20220201preview:FailoverGroup" }, { type: "azure-native:sql/v20220501preview:FailoverGroup" }, { type: "azure-native:sql/v20220801preview:FailoverGroup" }, { type: "azure-native:sql/v20221101preview:FailoverGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FailoverGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FailoverGroup resource.
 */
export interface FailoverGroupArgs {
    /**
     * List of databases in the failover group.
     */
    databases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the failover group.
     */
    failoverGroupName?: pulumi.Input<string>;
    /**
     * List of partner server information for the failover group.
     */
    partnerServers: pulumi.Input<pulumi.Input<types.inputs.sql.v20230201preview.PartnerInfoArgs>[]>;
    /**
     * Read-only endpoint of the failover group instance.
     */
    readOnlyEndpoint?: pulumi.Input<types.inputs.sql.v20230201preview.FailoverGroupReadOnlyEndpointArgs>;
    /**
     * Read-write endpoint of the failover group instance.
     */
    readWriteEndpoint: pulumi.Input<types.inputs.sql.v20230201preview.FailoverGroupReadWriteEndpointArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server containing the failover group.
     */
    serverName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
