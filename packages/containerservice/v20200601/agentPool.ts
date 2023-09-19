import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Agent Pool.
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
    public static readonly __pulumiType = 'azure-native:containerservice/v20200601:AgentPool';

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
     * Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * Whether to enable auto-scaler
     */
    public readonly enableAutoScaling!: pulumi.Output<boolean | undefined>;
    /**
     * Enable public IP for nodes
     */
    public readonly enableNodePublicIP!: pulumi.Output<boolean | undefined>;
    /**
     * Maximum number of nodes for auto-scaling
     */
    public readonly maxCount!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of pods that can run on a node.
     */
    public readonly maxPods!: pulumi.Output<number | undefined>;
    /**
     * Minimum number of nodes for auto-scaling
     */
    public readonly minCount!: pulumi.Output<number | undefined>;
    /**
     * AgentPoolMode represents mode of an agent pool
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Version of node image
     */
    public readonly nodeImageVersion!: pulumi.Output<string | undefined>;
    /**
     * Agent pool node labels to be persisted across all nodes in agent pool.
     */
    public readonly nodeLabels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    public readonly nodeTaints!: pulumi.Output<string[] | undefined>;
    /**
     * Version of orchestrator specified when creating the managed cluster.
     */
    public readonly orchestratorVersion!: pulumi.Output<string | undefined>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    public readonly osDiskSizeGB!: pulumi.Output<number | undefined>;
    /**
     * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The ID for Proximity Placement Group.
     */
    public readonly proximityPlacementGroupID!: pulumi.Output<string | undefined>;
    /**
     * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
     */
    public readonly scaleSetEvictionPolicy!: pulumi.Output<string | undefined>;
    /**
     * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
     */
    public readonly scaleSetPriority!: pulumi.Output<string | undefined>;
    /**
     * SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
     */
    public readonly spotMaxPrice!: pulumi.Output<number | undefined>;
    /**
     * Agent pool tags to be persisted on the agent pool virtual machine scale set.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * AgentPoolType represents types of an agent pool
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Settings for upgrading the agentpool
     */
    public readonly upgradeSettings!: pulumi.Output<types.outputs.AgentPoolUpgradeSettingsResponse | undefined>;
    /**
     * Size of agent VMs.
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;
    /**
     * VNet SubnetID specifies the VNet's subnet identifier.
     */
    public readonly vnetSubnetID!: pulumi.Output<string | undefined>;

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
            resourceInputs["count"] = args ? args.count : undefined;
            resourceInputs["enableAutoScaling"] = args ? args.enableAutoScaling : undefined;
            resourceInputs["enableNodePublicIP"] = args ? args.enableNodePublicIP : undefined;
            resourceInputs["maxCount"] = args ? args.maxCount : undefined;
            resourceInputs["maxPods"] = args ? args.maxPods : undefined;
            resourceInputs["minCount"] = args ? args.minCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["nodeImageVersion"] = args ? args.nodeImageVersion : undefined;
            resourceInputs["nodeLabels"] = args ? args.nodeLabels : undefined;
            resourceInputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            resourceInputs["orchestratorVersion"] = args ? args.orchestratorVersion : undefined;
            resourceInputs["osDiskSizeGB"] = args ? args.osDiskSizeGB : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["proximityPlacementGroupID"] = args ? args.proximityPlacementGroupID : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["scaleSetEvictionPolicy"] = args ? args.scaleSetEvictionPolicy : undefined;
            resourceInputs["scaleSetPriority"] = args ? args.scaleSetPriority : undefined;
            resourceInputs["spotMaxPrice"] = args ? args.spotMaxPrice : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["upgradeSettings"] = args ? args.upgradeSettings : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["vnetSubnetID"] = args ? args.vnetSubnetID : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["enableAutoScaling"] = undefined /*out*/;
            resourceInputs["enableNodePublicIP"] = undefined /*out*/;
            resourceInputs["maxCount"] = undefined /*out*/;
            resourceInputs["maxPods"] = undefined /*out*/;
            resourceInputs["minCount"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["nodeLabels"] = undefined /*out*/;
            resourceInputs["nodeTaints"] = undefined /*out*/;
            resourceInputs["orchestratorVersion"] = undefined /*out*/;
            resourceInputs["osDiskSizeGB"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroupID"] = undefined /*out*/;
            resourceInputs["scaleSetEvictionPolicy"] = undefined /*out*/;
            resourceInputs["scaleSetPriority"] = undefined /*out*/;
            resourceInputs["spotMaxPrice"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeSettings"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
            resourceInputs["vnetSubnetID"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:AgentPool" }, { type: "azure-native:containerservice/v20190201:AgentPool" }, { type: "azure-native:containerservice/v20190401:AgentPool" }, { type: "azure-native:containerservice/v20190601:AgentPool" }, { type: "azure-native:containerservice/v20190801:AgentPool" }, { type: "azure-native:containerservice/v20191001:AgentPool" }, { type: "azure-native:containerservice/v20191101:AgentPool" }, { type: "azure-native:containerservice/v20200101:AgentPool" }, { type: "azure-native:containerservice/v20200201:AgentPool" }, { type: "azure-native:containerservice/v20200301:AgentPool" }, { type: "azure-native:containerservice/v20200401:AgentPool" }, { type: "azure-native:containerservice/v20200701:AgentPool" }, { type: "azure-native:containerservice/v20200901:AgentPool" }, { type: "azure-native:containerservice/v20201101:AgentPool" }, { type: "azure-native:containerservice/v20201201:AgentPool" }, { type: "azure-native:containerservice/v20210201:AgentPool" }, { type: "azure-native:containerservice/v20210301:AgentPool" }, { type: "azure-native:containerservice/v20210501:AgentPool" }, { type: "azure-native:containerservice/v20210701:AgentPool" }, { type: "azure-native:containerservice/v20210801:AgentPool" }, { type: "azure-native:containerservice/v20210901:AgentPool" }, { type: "azure-native:containerservice/v20211001:AgentPool" }, { type: "azure-native:containerservice/v20211101preview:AgentPool" }, { type: "azure-native:containerservice/v20220101:AgentPool" }, { type: "azure-native:containerservice/v20220102preview:AgentPool" }, { type: "azure-native:containerservice/v20220201:AgentPool" }, { type: "azure-native:containerservice/v20220202preview:AgentPool" }, { type: "azure-native:containerservice/v20220301:AgentPool" }, { type: "azure-native:containerservice/v20220302preview:AgentPool" }, { type: "azure-native:containerservice/v20220401:AgentPool" }, { type: "azure-native:containerservice/v20220402preview:AgentPool" }, { type: "azure-native:containerservice/v20220502preview:AgentPool" }, { type: "azure-native:containerservice/v20220601:AgentPool" }, { type: "azure-native:containerservice/v20220602preview:AgentPool" }, { type: "azure-native:containerservice/v20220701:AgentPool" }, { type: "azure-native:containerservice/v20220702preview:AgentPool" }, { type: "azure-native:containerservice/v20220802preview:AgentPool" }, { type: "azure-native:containerservice/v20220803preview:AgentPool" }, { type: "azure-native:containerservice/v20220901:AgentPool" }, { type: "azure-native:containerservice/v20220902preview:AgentPool" }, { type: "azure-native:containerservice/v20221002preview:AgentPool" }, { type: "azure-native:containerservice/v20221101:AgentPool" }, { type: "azure-native:containerservice/v20221102preview:AgentPool" }, { type: "azure-native:containerservice/v20230101:AgentPool" }, { type: "azure-native:containerservice/v20230102preview:AgentPool" }, { type: "azure-native:containerservice/v20230201:AgentPool" }, { type: "azure-native:containerservice/v20230202preview:AgentPool" }, { type: "azure-native:containerservice/v20230301:AgentPool" }, { type: "azure-native:containerservice/v20230302preview:AgentPool" }, { type: "azure-native:containerservice/v20230401:AgentPool" }, { type: "azure-native:containerservice/v20230402preview:AgentPool" }, { type: "azure-native:containerservice/v20230501:AgentPool" }, { type: "azure-native:containerservice/v20230502preview:AgentPool" }, { type: "azure-native:containerservice/v20230601:AgentPool" }, { type: "azure-native:containerservice/v20230602preview:AgentPool" }, { type: "azure-native:containerservice/v20230701:AgentPool" }, { type: "azure-native:containerservice/v20230702preview:AgentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
     */
    count?: pulumi.Input<number>;
    /**
     * Whether to enable auto-scaler
     */
    enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Enable public IP for nodes
     */
    enableNodePublicIP?: pulumi.Input<boolean>;
    /**
     * Maximum number of nodes for auto-scaling
     */
    maxCount?: pulumi.Input<number>;
    /**
     * Maximum number of pods that can run on a node.
     */
    maxPods?: pulumi.Input<number>;
    /**
     * Minimum number of nodes for auto-scaling
     */
    minCount?: pulumi.Input<number>;
    /**
     * AgentPoolMode represents mode of an agent pool
     */
    mode?: pulumi.Input<string | types.enums.AgentPoolMode>;
    /**
     * Version of node image
     */
    nodeImageVersion?: pulumi.Input<string>;
    /**
     * Agent pool node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of orchestrator specified when creating the managed cluster.
     */
    orchestratorVersion?: pulumi.Input<string>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    osDiskSizeGB?: pulumi.Input<number>;
    /**
     * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
     */
    osType?: pulumi.Input<string | types.enums.OSType>;
    /**
     * The ID for Proximity Placement Group.
     */
    proximityPlacementGroupID?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
     */
    scaleSetEvictionPolicy?: pulumi.Input<string | types.enums.ScaleSetEvictionPolicy>;
    /**
     * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
     */
    scaleSetPriority?: pulumi.Input<string | types.enums.ScaleSetPriority>;
    /**
     * SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
     */
    spotMaxPrice?: pulumi.Input<number>;
    /**
     * Agent pool tags to be persisted on the agent pool virtual machine scale set.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * AgentPoolType represents types of an agent pool
     */
    type?: pulumi.Input<string | types.enums.AgentPoolType>;
    /**
     * Settings for upgrading the agentpool
     */
    upgradeSettings?: pulumi.Input<types.inputs.AgentPoolUpgradeSettingsArgs>;
    /**
     * Size of agent VMs.
     */
    vmSize?: pulumi.Input<string | types.enums.ContainerServiceVMSizeTypes>;
    /**
     * VNet SubnetID specifies the VNet's subnet identifier.
     */
    vnetSubnetID?: pulumi.Input<string>;
}
