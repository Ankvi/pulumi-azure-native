import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The agentPool resource definition
 *
 * Uses Azure REST API version 2022-09-01-preview.
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
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice:AgentPool';

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
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The underlying cloud infra provider properties.
     */
    public readonly cloudProviderProfile!: pulumi.Output<types.outputs.CloudProviderProfileResponse | undefined>;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    public readonly extendedLocation!: pulumi.Output<types.outputs.AgentPoolResponseExtendedLocation | undefined>;
    /**
     * The resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
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
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The version of node image
     */
    public readonly nodeImageVersion!: pulumi.Output<string | undefined>;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    public readonly nodeLabels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    public readonly nodeTaints!: pulumi.Output<string[] | undefined>;
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
     */
    public readonly status!: pulumi.Output<types.outputs.AgentPoolProvisioningStatusResponseStatus | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VmSize - The size of the agent pool VMs.
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["cloudProviderProfile"] = args ? args.cloudProviderProfile : undefined;
            resourceInputs["count"] = (args ? args.count : undefined) ?? 1;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxCount"] = args ? args.maxCount : undefined;
            resourceInputs["maxPods"] = args ? args.maxPods : undefined;
            resourceInputs["minCount"] = args ? args.minCount : undefined;
            resourceInputs["mode"] = (args ? args.mode : undefined) ?? "User";
            resourceInputs["nodeImageVersion"] = args ? args.nodeImageVersion : undefined;
            resourceInputs["nodeLabels"] = args ? args.nodeLabels : undefined;
            resourceInputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cloudProviderProfile"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxCount"] = undefined /*out*/;
            resourceInputs["maxPods"] = undefined /*out*/;
            resourceInputs["minCount"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["nodeLabels"] = undefined /*out*/;
            resourceInputs["nodeTaints"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20220501preview:AgentPool" }, { type: "azure-native:hybridcontainerservice/v20220901preview:AgentPool" }, { type: "azure-native:hybridcontainerservice/v20231115preview:AgentPool" }, { type: "azure-native:hybridcontainerservice/v20240101:AgentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The underlying cloud infra provider properties.
     */
    cloudProviderProfile?: pulumi.Input<types.inputs.CloudProviderProfileArgs>;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: pulumi.Input<number>;
    extendedLocation?: pulumi.Input<types.inputs.AgentPoolExtendedLocationArgs>;
    /**
     * The resource location
     */
    location?: pulumi.Input<string>;
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
     * Mode - AgentPoolMode represents mode of an agent pool. Possible values include: 'System', 'LB', 'User'. Default is 'User'
     */
    mode?: pulumi.Input<string | types.enums.Mode>;
    /**
     * The version of node image
     */
    nodeImageVersion?: pulumi.Input<string>;
    /**
     * NodeLabels - Agent pool node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * NodeTaints - Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: pulumi.Input<string | types.enums.OsType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: pulumi.Input<string>;
    /**
     * HybridAKSNodePoolStatus defines the observed state of HybridAKSNodePool
     */
    status?: pulumi.Input<types.inputs.AgentPoolProvisioningStatusStatusArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    vmSize?: pulumi.Input<string>;
}