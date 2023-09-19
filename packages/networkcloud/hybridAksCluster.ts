import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The details are specific to the Network Cloud use of the Hybrid AKS cluster.
 * Azure REST API version: 2022-12-12-preview. Prior API version in Azure Native 1.x: 2022-12-12-preview
 */
export class HybridAksCluster extends pulumi.CustomResource {
    /**
     * Get an existing HybridAksCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridAksCluster {
        return new HybridAksCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:HybridAksCluster';

    /**
     * Returns true if the given object is an instance of HybridAksCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HybridAksCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HybridAksCluster.__pulumiType;
    }

    /**
     * The list of resource IDs for the workload networks associated with the Hybrid AKS cluster. It can be any of l2Networks, l3Networks, or trunkedNetworks resources. This field will also contain one cloudServicesNetwork and one defaultCniNetwork.
     */
    public readonly associatedNetworkIds!: pulumi.Output<string[]>;
    /**
     * The resource ID of the associated cloud services network.
     */
    public /*out*/ readonly cloudServicesNetworkId!: pulumi.Output<string>;
    /**
     * The resource ID of the Network Cloud cluster hosting the Hybrid AKS cluster.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The number of control plane node VMs.
     */
    public readonly controlPlaneCount!: pulumi.Output<number>;
    /**
     * The list of node configurations detailing associated VMs that are part of the control plane nodes of this Hybrid AKS cluster.
     */
    public /*out*/ readonly controlPlaneNodes!: pulumi.Output<types.outputs.NodeConfigurationResponse[]>;
    /**
     * The resource ID of the associated default CNI network.
     */
    public /*out*/ readonly defaultCniNetworkId!: pulumi.Output<string>;
    /**
     * The more detailed status of this Hybrid AKS cluster.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The resource ID of the Hybrid AKS cluster that this additional information is for.
     */
    public readonly hybridAksProvisionedClusterId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the Hybrid AKS cluster resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The resource IDs of volumes that are attached to the Hybrid AKS cluster.
     */
    public /*out*/ readonly volumes!: pulumi.Output<string[]>;
    /**
     * The number of worker node VMs.
     */
    public readonly workerCount!: pulumi.Output<number>;
    /**
     * The list of node configurations detailing associated VMs that are part of the worker nodes of this Hybrid AKS cluster.
     */
    public /*out*/ readonly workerNodes!: pulumi.Output<types.outputs.NodeConfigurationResponse[]>;

    /**
     * Create a HybridAksCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridAksClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.associatedNetworkIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'associatedNetworkIds'");
            }
            if ((!args || args.controlPlaneCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneCount'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.hybridAksProvisionedClusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hybridAksProvisionedClusterId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workerCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workerCount'");
            }
            resourceInputs["associatedNetworkIds"] = args ? args.associatedNetworkIds : undefined;
            resourceInputs["controlPlaneCount"] = args ? args.controlPlaneCount : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hybridAksClusterName"] = args ? args.hybridAksClusterName : undefined;
            resourceInputs["hybridAksProvisionedClusterId"] = args ? args.hybridAksProvisionedClusterId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workerCount"] = args ? args.workerCount : undefined;
            resourceInputs["cloudServicesNetworkId"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["controlPlaneNodes"] = undefined /*out*/;
            resourceInputs["defaultCniNetworkId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
            resourceInputs["workerNodes"] = undefined /*out*/;
        } else {
            resourceInputs["associatedNetworkIds"] = undefined /*out*/;
            resourceInputs["cloudServicesNetworkId"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["controlPlaneCount"] = undefined /*out*/;
            resourceInputs["controlPlaneNodes"] = undefined /*out*/;
            resourceInputs["defaultCniNetworkId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hybridAksProvisionedClusterId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
            resourceInputs["workerCount"] = undefined /*out*/;
            resourceInputs["workerNodes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20221212preview:HybridAksCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridAksCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridAksCluster resource.
 */
export interface HybridAksClusterArgs {
    /**
     * The list of resource IDs for the workload networks associated with the Hybrid AKS cluster. It can be any of l2Networks, l3Networks, or trunkedNetworks resources. This field will also contain one cloudServicesNetwork and one defaultCniNetwork.
     */
    associatedNetworkIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of control plane node VMs.
     */
    controlPlaneCount: pulumi.Input<number>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The name of the Hybrid AKS cluster.
     */
    hybridAksClusterName?: pulumi.Input<string>;
    /**
     * The resource ID of the Hybrid AKS cluster that this additional information is for.
     */
    hybridAksProvisionedClusterId: pulumi.Input<string>;
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
    /**
     * The number of worker node VMs.
     */
    workerCount: pulumi.Input<number>;
}
