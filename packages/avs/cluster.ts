import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A cluster resource
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2022-05-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:avs:Cluster';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The identity
     */
    public /*out*/ readonly clusterId!: pulumi.Output<number>;
    /**
     * The cluster size
     */
    public readonly clusterSize!: pulumi.Output<number | undefined>;
    /**
     * The hosts
     */
    public readonly hosts!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The state of the cluster provisioning
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    public readonly vsanDatastoreName!: pulumi.Output<string | undefined>;

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
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterSize"] = args ? args.clusterSize : undefined;
            resourceInputs["hosts"] = args ? args.hosts : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["vsanDatastoreName"] = args ? args.vsanDatastoreName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterSize"] = undefined /*out*/;
            resourceInputs["hosts"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vsanDatastoreName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200320:Cluster" }, { type: "azure-native:avs/v20200717preview:Cluster" }, { type: "azure-native:avs/v20210101preview:Cluster" }, { type: "azure-native:avs/v20210601:Cluster" }, { type: "azure-native:avs/v20211201:Cluster" }, { type: "azure-native:avs/v20220501:Cluster" }, { type: "azure-native:avs/v20230301:Cluster" }, { type: "azure-native:avs/v20230901:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Name of the cluster
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The cluster size
     */
    clusterSize?: pulumi.Input<number>;
    /**
     * The hosts
     */
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    vsanDatastoreName?: pulumi.Input<string>;
}