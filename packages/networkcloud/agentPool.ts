import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:networkcloud:AgentPool';

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
     * The administrator credentials to be used for the nodes in this agent pool.
     */
    public readonly administratorConfiguration!: pulumi.Output<types.outputs.AdministratorConfigurationResponse | undefined>;
    /**
     * The configurations that will be applied to each agent in this agent pool.
     */
    public readonly agentOptions!: pulumi.Output<types.outputs.AgentOptionsResponse | undefined>;
    /**
     * The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
     */
    public readonly attachedNetworkConfiguration!: pulumi.Output<types.outputs.AttachedNetworkConfigurationResponse | undefined>;
    /**
     * The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The number of virtual machines that use this configuration.
     */
    public readonly count!: pulumi.Output<number>;
    /**
     * The current status of the agent pool.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The Kubernetes version running in this agent pool.
     */
    public /*out*/ readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * The labels applied to the nodes in this agent pool.
     */
    public readonly labels!: pulumi.Output<types.outputs.KubernetesLabelResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the agent pool.
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
     * The taints applied to the nodes in this agent pool.
     */
    public readonly taints!: pulumi.Output<types.outputs.KubernetesLabelResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The configuration of the agent pool.
     */
    public readonly upgradeSettings!: pulumi.Output<types.outputs.AgentPoolUpgradeSettingsResponse | undefined>;
    /**
     * The name of the VM SKU that determines the size of resources allocated for node VMs.
     */
    public readonly vmSkuName!: pulumi.Output<string>;

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
            if ((!args || args.count === undefined) && !opts.urn) {
                throw new Error("Missing required property 'count'");
            }
            if ((!args || args.kubernetesClusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesClusterName'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmSkuName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmSkuName'");
            }
            resourceInputs["administratorConfiguration"] = args ? args.administratorConfiguration : undefined;
            resourceInputs["agentOptions"] = args ? (args.agentOptions ? pulumi.output(args.agentOptions).apply(types.inputs.agentOptionsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["attachedNetworkConfiguration"] = args ? args.attachedNetworkConfiguration : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["count"] = args ? args.count : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["kubernetesClusterName"] = args ? args.kubernetesClusterName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["taints"] = args ? args.taints : undefined;
            resourceInputs["upgradeSettings"] = args ? args.upgradeSettings : undefined;
            resourceInputs["vmSkuName"] = args ? args.vmSkuName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorConfiguration"] = undefined /*out*/;
            resourceInputs["agentOptions"] = undefined /*out*/;
            resourceInputs["attachedNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["taints"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeSettings"] = undefined /*out*/;
            resourceInputs["vmSkuName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:AgentPool" }, { type: "azure-native:networkcloud/v20231001preview:AgentPool" }, { type: "azure-native:networkcloud/v20240601preview:AgentPool" }, { type: "azure-native:networkcloud/v20240701:AgentPool" }, { type: "azure-native:networkcloud/v20241001preview:AgentPool" }, { type: "azure-native:networkcloud/v20250201:AgentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * The administrator credentials to be used for the nodes in this agent pool.
     */
    administratorConfiguration?: pulumi.Input<types.inputs.AdministratorConfigurationArgs>;
    /**
     * The configurations that will be applied to each agent in this agent pool.
     */
    agentOptions?: pulumi.Input<types.inputs.AgentOptionsArgs>;
    /**
     * The name of the Kubernetes cluster agent pool.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster.
     */
    attachedNetworkConfiguration?: pulumi.Input<types.inputs.AttachedNetworkConfigurationArgs>;
    /**
     * The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of virtual machines that use this configuration.
     */
    count: pulumi.Input<number>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: pulumi.Input<string>;
    /**
     * The labels applied to the nodes in this agent pool.
     */
    labels?: pulumi.Input<pulumi.Input<types.inputs.KubernetesLabelArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node.
     */
    mode: pulumi.Input<string | types.enums.AgentPoolMode>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The taints applied to the nodes in this agent pool.
     */
    taints?: pulumi.Input<pulumi.Input<types.inputs.KubernetesLabelArgs>[]>;
    /**
     * The configuration of the agent pool.
     */
    upgradeSettings?: pulumi.Input<types.inputs.AgentPoolUpgradeSettingsArgs>;
    /**
     * The name of the VM SKU that determines the size of resources allocated for node VMs.
     */
    vmSkuName: pulumi.Input<string>;
}