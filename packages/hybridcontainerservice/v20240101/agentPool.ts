import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The agentPool resource definition
 */
export class AgentPool extends pulumi.CustomResource {
    /**
     * Get an existing AgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AgentPool {
        return new AgentPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice/v20240101:AgentPool';

    /**
     * Returns true if the given object is an instance of AgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AgentPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AgentPool.__pulumiType;
    }

    /**
     * Number of nodes in the agent pool. The default value is 1.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * Whether to enable auto-scaler. Default value is false
     */
    public readonly enableAutoScaling!: pulumi.Output<boolean | undefined>;
    /**
     * Extended location pointing to the underlying infrastructure
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Version of Kubernetes in use by the agent pool. This is inherited from the kubernetesVersion of the provisioned cluster.
     */
    public /*out*/ readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * The maximum number of nodes for auto-scaling
     */
    public readonly maxCount!: pulumi.Output<number | undefined>;
    /**
     * The maximum number of pods that can run on a node.
     */
    public readonly maxPods!: pulumi.Output<number | undefined>;
    /**
     * The minimum number of nodes for auto-scaling
     */
    public readonly minCount!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    public readonly nodeLabels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    public readonly nodeTaints!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    public readonly osSKU!: pulumi.Output<string | undefined>;
    /**
     * OSType to be used to specify OS type for the VMs. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The status of the latest long running operation for the agent pool.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The observed status of the agent pool.
     */
    public readonly status!: pulumi.Output<types.outputs.AgentPoolProvisioningStatusResponseStatus | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VM sku size of the agent pool node VMs.
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;

    /**
     * Create a AgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedClusterResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedClusterResourceUri'");
            }
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["connectedClusterResourceUri"] = args ? args.connectedClusterResourceUri : undefined;
            resourceInputs["count"] = (args ? args.count : undefined) ?? 1;
            resourceInputs["enableAutoScaling"] = (args ? args.enableAutoScaling : undefined) ?? false;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["maxCount"] = args ? args.maxCount : undefined;
            resourceInputs["maxPods"] = args ? args.maxPods : undefined;
            resourceInputs["minCount"] = args ? args.minCount : undefined;
            resourceInputs["nodeLabels"] = args ? args.nodeLabels : undefined;
            resourceInputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            resourceInputs["osSKU"] = args ? args.osSKU : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["enableAutoScaling"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["maxCount"] = undefined /*out*/;
            resourceInputs["maxPods"] = undefined /*out*/;
            resourceInputs["minCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeLabels"] = undefined /*out*/;
            resourceInputs["nodeTaints"] = undefined /*out*/;
            resourceInputs["osSKU"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20240101:agentPool" }, { type: "azure-native:hybridcontainerservice/v20231115preview:AgentPool" }, { type: "azure-native:hybridcontainerservice/v20231115preview:agentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
    /**
     * Number of nodes in the agent pool. The default value is 1.
     */
    count?: pulumi.Input<number>;
    /**
     * Whether to enable auto-scaler. Default value is false
     */
    enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Extended location pointing to the underlying infrastructure
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The maximum number of nodes for auto-scaling
     */
    maxCount?: pulumi.Input<number>;
    /**
     * The maximum number of pods that can run on a node.
     */
    maxPods?: pulumi.Input<number>;
    /**
     * The minimum number of nodes for auto-scaling
     */
    minCount?: pulumi.Input<number>;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    osSKU?: pulumi.Input<string | types.enums.OSSKU>;
    /**
     * OSType to be used to specify OS type for the VMs. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: pulumi.Input<string | types.enums.OsType>;
    /**
     * The observed status of the agent pool.
     */
    status?: pulumi.Input<types.inputs.AgentPoolProvisioningStatusStatusArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VM sku size of the agent pool node VMs.
     */
    vmSize?: pulumi.Input<string>;
}