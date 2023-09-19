import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A managed Cassandra data center.
 */
export class CassandraDataCenter extends pulumi.CustomResource {
    /**
     * Get an existing CassandraDataCenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CassandraDataCenter {
        return new CassandraDataCenter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20230415:CassandraDataCenter';

    /**
     * Returns true if the given object is an instance of CassandraDataCenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CassandraDataCenter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CassandraDataCenter.__pulumiType;
    }

    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of a managed Cassandra data center.
     */
    public readonly properties!: pulumi.Output<types.outputs.DataCenterResourceResponseProperties>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CassandraDataCenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraDataCenterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["dataCenterName"] = args ? args.dataCenterName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:CassandraDataCenter" }, { type: "azure-native:documentdb/v20210301preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20210401preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20210701preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20211015:CassandraDataCenter" }, { type: "azure-native:documentdb/v20211015preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20211115preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20220215preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20220515:CassandraDataCenter" }, { type: "azure-native:documentdb/v20220515preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20220815:CassandraDataCenter" }, { type: "azure-native:documentdb/v20220815preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20221115:CassandraDataCenter" }, { type: "azure-native:documentdb/v20221115preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20230301preview:CassandraDataCenter" }, { type: "azure-native:documentdb/v20230315:CassandraDataCenter" }, { type: "azure-native:documentdb/v20230315preview:CassandraDataCenter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CassandraDataCenter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CassandraDataCenter resource.
 */
export interface CassandraDataCenterArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Data center name in a managed Cassandra cluster.
     */
    dataCenterName?: pulumi.Input<string>;
    /**
     * Properties of a managed Cassandra data center.
     */
    properties?: pulumi.Input<types.inputs.DataCenterResourcePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
