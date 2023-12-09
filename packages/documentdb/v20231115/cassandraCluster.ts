import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Representation of a managed Cassandra cluster.
 */
export class CassandraCluster extends pulumi.CustomResource {
    /**
     * Get an existing CassandraCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CassandraCluster {
        return new CassandraCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20231115:CassandraCluster';

    /**
     * Returns true if the given object is an instance of CassandraCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CassandraCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CassandraCluster.__pulumiType;
    }

    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedCassandraManagedServiceIdentityResponse | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the ARM resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of a managed Cassandra cluster.
     */
    public readonly properties!: pulumi.Output<types.outputs.ClusterResourceResponseProperties>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CassandraCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:CassandraCluster" }, { type: "azure-native:documentdb/v20210301preview:CassandraCluster" }, { type: "azure-native:documentdb/v20210401preview:CassandraCluster" }, { type: "azure-native:documentdb/v20210701preview:CassandraCluster" }, { type: "azure-native:documentdb/v20211015:CassandraCluster" }, { type: "azure-native:documentdb/v20211015preview:CassandraCluster" }, { type: "azure-native:documentdb/v20211115preview:CassandraCluster" }, { type: "azure-native:documentdb/v20220215preview:CassandraCluster" }, { type: "azure-native:documentdb/v20220515:CassandraCluster" }, { type: "azure-native:documentdb/v20220515preview:CassandraCluster" }, { type: "azure-native:documentdb/v20220815:CassandraCluster" }, { type: "azure-native:documentdb/v20220815preview:CassandraCluster" }, { type: "azure-native:documentdb/v20221115:CassandraCluster" }, { type: "azure-native:documentdb/v20221115preview:CassandraCluster" }, { type: "azure-native:documentdb/v20230301preview:CassandraCluster" }, { type: "azure-native:documentdb/v20230315:CassandraCluster" }, { type: "azure-native:documentdb/v20230315preview:CassandraCluster" }, { type: "azure-native:documentdb/v20230415:CassandraCluster" }, { type: "azure-native:documentdb/v20230915:CassandraCluster" }, { type: "azure-native:documentdb/v20230915preview:CassandraCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CassandraCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CassandraCluster resource.
 */
export interface CassandraClusterArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedCassandraManagedServiceIdentityArgs>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of a managed Cassandra cluster.
     */
    properties?: pulumi.Input<types.inputs.ClusterResourcePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
