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
    public static readonly __pulumiType = 'azure-native:containerservice/v20230601:AgentPool';

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
     * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
     */
    public readonly creationData!: pulumi.Output<types.outputs.CreationDataResponse | undefined>;
    /**
     * If orchestratorVersion is a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion is <major.minor>, this field will contain the full <major.minor.patch> version being used.
     */
    public /*out*/ readonly currentOrchestratorVersion!: pulumi.Output<string>;
    /**
     * Whether to enable auto-scaler
     */
    public readonly enableAutoScaling!: pulumi.Output<boolean | undefined>;
    /**
     * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
     */
    public readonly enableEncryptionAtHost!: pulumi.Output<boolean | undefined>;
    /**
     * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
     */
    public readonly enableFIPS!: pulumi.Output<boolean | undefined>;
    /**
     * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
     */
    public readonly enableNodePublicIP!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable UltraSSD
     */
    public readonly enableUltraSSD!: pulumi.Output<boolean | undefined>;
    /**
     * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
     */
    public readonly gpuInstanceProfile!: pulumi.Output<string | undefined>;
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
     */
    public readonly hostGroupID!: pulumi.Output<string | undefined>;
    /**
     * The Kubelet configuration on the agent pool nodes.
     */
    public readonly kubeletConfig!: pulumi.Output<types.outputs.KubeletConfigResponse | undefined>;
    /**
     * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
     */
    public readonly kubeletDiskType!: pulumi.Output<string | undefined>;
    /**
     * The OS configuration of Linux agent nodes.
     */
    public readonly linuxOSConfig!: pulumi.Output<types.outputs.LinuxOSConfigResponse | undefined>;
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
     * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The version of node image
     */
    public /*out*/ readonly nodeImageVersion!: pulumi.Output<string>;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    public readonly nodeLabels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
     */
    public readonly nodePublicIPPrefixID!: pulumi.Output<string | undefined>;
    /**
     * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    public readonly nodeTaints!: pulumi.Output<string[] | undefined>;
    /**
     * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
     */
    public readonly orchestratorVersion!: pulumi.Output<string | undefined>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    public readonly osDiskSizeGB!: pulumi.Output<number | undefined>;
    /**
     * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
     */
    public readonly osDiskType!: pulumi.Output<string | undefined>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
     */
    public readonly osSKU!: pulumi.Output<string | undefined>;
    /**
     * The operating system type. The default is Linux.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    public readonly podSubnetID!: pulumi.Output<string | undefined>;
    /**
     * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
     */
    public readonly powerState!: pulumi.Output<types.outputs.PowerStateResponse | undefined>;
    /**
     * The current deployment or provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The ID for Proximity Placement Group.
     */
    public readonly proximityPlacementGroupID!: pulumi.Output<string | undefined>;
    /**
     * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
     */
    public readonly scaleDownMode!: pulumi.Output<string | undefined>;
    /**
     * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
     */
    public readonly scaleSetEvictionPolicy!: pulumi.Output<string | undefined>;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    public readonly scaleSetPriority!: pulumi.Output<string | undefined>;
    /**
     * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
     */
    public readonly spotMaxPrice!: pulumi.Output<number | undefined>;
    /**
     * The tags to be persisted on the agent pool virtual machine scale set.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Settings for upgrading the agentpool
     */
    public readonly upgradeSettings!: pulumi.Output<types.outputs.AgentPoolUpgradeSettingsResponse | undefined>;
    /**
     * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;
    /**
     * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    public readonly vnetSubnetID!: pulumi.Output<string | undefined>;
    /**
     * Determines the type of workload a node can run.
     */
    public readonly workloadRuntime!: pulumi.Output<string | undefined>;

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
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["enableAutoScaling"] = args ? args.enableAutoScaling : undefined;
            resourceInputs["enableEncryptionAtHost"] = args ? args.enableEncryptionAtHost : undefined;
            resourceInputs["enableFIPS"] = args ? args.enableFIPS : undefined;
            resourceInputs["enableNodePublicIP"] = args ? args.enableNodePublicIP : undefined;
            resourceInputs["enableUltraSSD"] = args ? args.enableUltraSSD : undefined;
            resourceInputs["gpuInstanceProfile"] = args ? args.gpuInstanceProfile : undefined;
            resourceInputs["hostGroupID"] = args ? args.hostGroupID : undefined;
            resourceInputs["kubeletConfig"] = args ? args.kubeletConfig : undefined;
            resourceInputs["kubeletDiskType"] = args ? args.kubeletDiskType : undefined;
            resourceInputs["linuxOSConfig"] = args ? args.linuxOSConfig : undefined;
            resourceInputs["maxCount"] = args ? args.maxCount : undefined;
            resourceInputs["maxPods"] = args ? args.maxPods : undefined;
            resourceInputs["minCount"] = args ? args.minCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["nodeLabels"] = args ? args.nodeLabels : undefined;
            resourceInputs["nodePublicIPPrefixID"] = args ? args.nodePublicIPPrefixID : undefined;
            resourceInputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            resourceInputs["orchestratorVersion"] = args ? args.orchestratorVersion : undefined;
            resourceInputs["osDiskSizeGB"] = args ? args.osDiskSizeGB : undefined;
            resourceInputs["osDiskType"] = args ? args.osDiskType : undefined;
            resourceInputs["osSKU"] = args ? args.osSKU : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["podSubnetID"] = args ? args.podSubnetID : undefined;
            resourceInputs["powerState"] = args ? args.powerState : undefined;
            resourceInputs["proximityPlacementGroupID"] = args ? args.proximityPlacementGroupID : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["scaleDownMode"] = args ? args.scaleDownMode : undefined;
            resourceInputs["scaleSetEvictionPolicy"] = args ? args.scaleSetEvictionPolicy : undefined;
            resourceInputs["scaleSetPriority"] = args ? args.scaleSetPriority : undefined;
            resourceInputs["spotMaxPrice"] = args ? args.spotMaxPrice : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["upgradeSettings"] = args ? args.upgradeSettings : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["vnetSubnetID"] = args ? args.vnetSubnetID : undefined;
            resourceInputs["workloadRuntime"] = args ? args.workloadRuntime : undefined;
            resourceInputs["currentOrchestratorVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["currentOrchestratorVersion"] = undefined /*out*/;
            resourceInputs["enableAutoScaling"] = undefined /*out*/;
            resourceInputs["enableEncryptionAtHost"] = undefined /*out*/;
            resourceInputs["enableFIPS"] = undefined /*out*/;
            resourceInputs["enableNodePublicIP"] = undefined /*out*/;
            resourceInputs["enableUltraSSD"] = undefined /*out*/;
            resourceInputs["gpuInstanceProfile"] = undefined /*out*/;
            resourceInputs["hostGroupID"] = undefined /*out*/;
            resourceInputs["kubeletConfig"] = undefined /*out*/;
            resourceInputs["kubeletDiskType"] = undefined /*out*/;
            resourceInputs["linuxOSConfig"] = undefined /*out*/;
            resourceInputs["maxCount"] = undefined /*out*/;
            resourceInputs["maxPods"] = undefined /*out*/;
            resourceInputs["minCount"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["nodeLabels"] = undefined /*out*/;
            resourceInputs["nodePublicIPPrefixID"] = undefined /*out*/;
            resourceInputs["nodeTaints"] = undefined /*out*/;
            resourceInputs["orchestratorVersion"] = undefined /*out*/;
            resourceInputs["osDiskSizeGB"] = undefined /*out*/;
            resourceInputs["osDiskType"] = undefined /*out*/;
            resourceInputs["osSKU"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["podSubnetID"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroupID"] = undefined /*out*/;
            resourceInputs["scaleDownMode"] = undefined /*out*/;
            resourceInputs["scaleSetEvictionPolicy"] = undefined /*out*/;
            resourceInputs["scaleSetPriority"] = undefined /*out*/;
            resourceInputs["spotMaxPrice"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeSettings"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
            resourceInputs["vnetSubnetID"] = undefined /*out*/;
            resourceInputs["workloadRuntime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:AgentPool" }, { type: "azure-native:containerservice/v20190201:AgentPool" }, { type: "azure-native:containerservice/v20190401:AgentPool" }, { type: "azure-native:containerservice/v20190601:AgentPool" }, { type: "azure-native:containerservice/v20190801:AgentPool" }, { type: "azure-native:containerservice/v20191001:AgentPool" }, { type: "azure-native:containerservice/v20191101:AgentPool" }, { type: "azure-native:containerservice/v20200101:AgentPool" }, { type: "azure-native:containerservice/v20200201:AgentPool" }, { type: "azure-native:containerservice/v20200301:AgentPool" }, { type: "azure-native:containerservice/v20200401:AgentPool" }, { type: "azure-native:containerservice/v20200601:AgentPool" }, { type: "azure-native:containerservice/v20200701:AgentPool" }, { type: "azure-native:containerservice/v20200901:AgentPool" }, { type: "azure-native:containerservice/v20201101:AgentPool" }, { type: "azure-native:containerservice/v20201201:AgentPool" }, { type: "azure-native:containerservice/v20210201:AgentPool" }, { type: "azure-native:containerservice/v20210301:AgentPool" }, { type: "azure-native:containerservice/v20210501:AgentPool" }, { type: "azure-native:containerservice/v20210701:AgentPool" }, { type: "azure-native:containerservice/v20210801:AgentPool" }, { type: "azure-native:containerservice/v20210901:AgentPool" }, { type: "azure-native:containerservice/v20211001:AgentPool" }, { type: "azure-native:containerservice/v20211101preview:AgentPool" }, { type: "azure-native:containerservice/v20220101:AgentPool" }, { type: "azure-native:containerservice/v20220102preview:AgentPool" }, { type: "azure-native:containerservice/v20220201:AgentPool" }, { type: "azure-native:containerservice/v20220202preview:AgentPool" }, { type: "azure-native:containerservice/v20220301:AgentPool" }, { type: "azure-native:containerservice/v20220302preview:AgentPool" }, { type: "azure-native:containerservice/v20220401:AgentPool" }, { type: "azure-native:containerservice/v20220402preview:AgentPool" }, { type: "azure-native:containerservice/v20220502preview:AgentPool" }, { type: "azure-native:containerservice/v20220601:AgentPool" }, { type: "azure-native:containerservice/v20220602preview:AgentPool" }, { type: "azure-native:containerservice/v20220701:AgentPool" }, { type: "azure-native:containerservice/v20220702preview:AgentPool" }, { type: "azure-native:containerservice/v20220802preview:AgentPool" }, { type: "azure-native:containerservice/v20220803preview:AgentPool" }, { type: "azure-native:containerservice/v20220901:AgentPool" }, { type: "azure-native:containerservice/v20220902preview:AgentPool" }, { type: "azure-native:containerservice/v20221002preview:AgentPool" }, { type: "azure-native:containerservice/v20221101:AgentPool" }, { type: "azure-native:containerservice/v20221102preview:AgentPool" }, { type: "azure-native:containerservice/v20230101:AgentPool" }, { type: "azure-native:containerservice/v20230102preview:AgentPool" }, { type: "azure-native:containerservice/v20230201:AgentPool" }, { type: "azure-native:containerservice/v20230202preview:AgentPool" }, { type: "azure-native:containerservice/v20230301:AgentPool" }, { type: "azure-native:containerservice/v20230302preview:AgentPool" }, { type: "azure-native:containerservice/v20230401:AgentPool" }, { type: "azure-native:containerservice/v20230402preview:AgentPool" }, { type: "azure-native:containerservice/v20230501:AgentPool" }, { type: "azure-native:containerservice/v20230502preview:AgentPool" }, { type: "azure-native:containerservice/v20230602preview:AgentPool" }, { type: "azure-native:containerservice/v20230701:AgentPool" }, { type: "azure-native:containerservice/v20230702preview:AgentPool" }, { type: "azure-native:containerservice/v20230801:AgentPool" }, { type: "azure-native:containerservice/v20230802preview:AgentPool" }, { type: "azure-native:containerservice/v20230901:AgentPool" }] };
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
     * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
     */
    count?: pulumi.Input<number>;
    /**
     * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
     */
    creationData?: pulumi.Input<types.inputs.CreationDataArgs>;
    /**
     * Whether to enable auto-scaler
     */
    enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
     */
    enableEncryptionAtHost?: pulumi.Input<boolean>;
    /**
     * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
     */
    enableFIPS?: pulumi.Input<boolean>;
    /**
     * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
     */
    enableNodePublicIP?: pulumi.Input<boolean>;
    /**
     * Whether to enable UltraSSD
     */
    enableUltraSSD?: pulumi.Input<boolean>;
    /**
     * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
     */
    gpuInstanceProfile?: pulumi.Input<string | types.enums.GPUInstanceProfile>;
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
     */
    hostGroupID?: pulumi.Input<string>;
    /**
     * The Kubelet configuration on the agent pool nodes.
     */
    kubeletConfig?: pulumi.Input<types.inputs.KubeletConfigArgs>;
    /**
     * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
     */
    kubeletDiskType?: pulumi.Input<string | types.enums.KubeletDiskType>;
    /**
     * The OS configuration of Linux agent nodes.
     */
    linuxOSConfig?: pulumi.Input<types.inputs.LinuxOSConfigArgs>;
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
     * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
     */
    mode?: pulumi.Input<string | types.enums.AgentPoolMode>;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
     */
    nodePublicIPPrefixID?: pulumi.Input<string>;
    /**
     * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
     */
    orchestratorVersion?: pulumi.Input<string>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    osDiskSizeGB?: pulumi.Input<number>;
    /**
     * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
     */
    osDiskType?: pulumi.Input<string | types.enums.OSDiskType>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
     */
    osSKU?: pulumi.Input<string | types.enums.OSSKU>;
    /**
     * The operating system type. The default is Linux.
     */
    osType?: pulumi.Input<string | types.enums.OSType>;
    /**
     * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    podSubnetID?: pulumi.Input<string>;
    /**
     * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
     */
    powerState?: pulumi.Input<types.inputs.PowerStateArgs>;
    /**
     * The ID for Proximity Placement Group.
     */
    proximityPlacementGroupID?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
     */
    scaleDownMode?: pulumi.Input<string | types.enums.ScaleDownMode>;
    /**
     * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
     */
    scaleSetEvictionPolicy?: pulumi.Input<string | types.enums.ScaleSetEvictionPolicy>;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    scaleSetPriority?: pulumi.Input<string | types.enums.ScaleSetPriority>;
    /**
     * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
     */
    spotMaxPrice?: pulumi.Input<number>;
    /**
     * The tags to be persisted on the agent pool virtual machine scale set.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of Agent Pool.
     */
    type?: pulumi.Input<string | types.enums.AgentPoolType>;
    /**
     * Settings for upgrading the agentpool
     */
    upgradeSettings?: pulumi.Input<types.inputs.AgentPoolUpgradeSettingsArgs>;
    /**
     * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
     */
    vmSize?: pulumi.Input<string>;
    /**
     * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    vnetSubnetID?: pulumi.Input<string>;
    /**
     * Determines the type of workload a node can run.
     */
    workloadRuntime?: pulumi.Input<string | types.enums.WorkloadRuntime>;
}
