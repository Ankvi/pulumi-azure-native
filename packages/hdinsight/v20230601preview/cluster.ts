import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The cluster.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hdinsight/v20230601preview:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * Cluster profile.
     */
    public readonly clusterProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterProfileResponse>;
    /**
     * The type of cluster.
     */
    public readonly clusterType!: pulumi.Output<string>;
    /**
     * The compute profile.
     */
    public readonly computeProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ComputeProfileResponse>;
    /**
     * A unique id generated by the RP to identify the resource.
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Business status of the resource.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.hdinsight.v20230601preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterPoolName'");
            }
            if ((!args || args.clusterProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterProfile'");
            }
            if ((!args || args.clusterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterType'");
            }
            if ((!args || args.computeProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterPoolName"] = args ? args.clusterPoolName : undefined;
            resourceInputs["clusterProfile"] = args ? (args.clusterProfile ? pulumi.output(args.clusterProfile).apply(types.inputs.hdinsight.v20230601preview.clusterProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["clusterType"] = args ? args.clusterType : undefined;
            resourceInputs["computeProfile"] = args ? args.computeProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clusterProfile"] = undefined /*out*/;
            resourceInputs["clusterType"] = undefined /*out*/;
            resourceInputs["computeProfile"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The name of the HDInsight cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The name of the cluster pool.
     */
    clusterPoolName: pulumi.Input<string>;
    /**
     * Cluster profile.
     */
    clusterProfile: pulumi.Input<types.inputs.hdinsight.v20230601preview.ClusterProfileArgs>;
    /**
     * The type of cluster.
     */
    clusterType: pulumi.Input<string>;
    /**
     * The compute profile.
     */
    computeProfile: pulumi.Input<types.inputs.hdinsight.v20230601preview.ComputeProfileArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
