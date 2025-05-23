import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class KubernetesCluster extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KubernetesCluster {
        return new KubernetesCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:KubernetesCluster';

    /**
     * Returns true if the given object is an instance of KubernetesCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesCluster.__pulumiType;
    }

    /**
     * The Azure Active Directory Integration properties.
     */
    public readonly aadConfiguration!: pulumi.Output<types.outputs.AadConfigurationResponse | undefined>;
    /**
     * The administrative credentials that will be applied to the control plane and agent pool nodes that do not specify their own values.
     */
    public readonly administratorConfiguration!: pulumi.Output<types.outputs.AdministratorConfigurationResponse | undefined>;
    /**
     * The full list of network resource IDs that are attached to this cluster, including those attached only to specific agent pools.
     */
    public /*out*/ readonly attachedNetworkIds!: pulumi.Output<string[]>;
    /**
     * The list of versions that this Kubernetes cluster can be upgraded to.
     */
    public /*out*/ readonly availableUpgrades!: pulumi.Output<types.outputs.AvailableUpgradeResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource ID of the Network Cloud cluster.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The resource ID of the connected cluster set up when this Kubernetes cluster is created.
     */
    public /*out*/ readonly connectedClusterId!: pulumi.Output<string>;
    /**
     * The current running version of Kubernetes on the control plane.
     */
    public /*out*/ readonly controlPlaneKubernetesVersion!: pulumi.Output<string>;
    /**
     * The defining characteristics of the control plane for this Kubernetes Cluster.
     */
    public readonly controlPlaneNodeConfiguration!: pulumi.Output<types.outputs.ControlPlaneNodeConfigurationResponse>;
    /**
     * The current status of the Kubernetes cluster.
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
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The current feature settings.
     */
    public /*out*/ readonly featureStatuses!: pulumi.Output<types.outputs.FeatureStatusResponse[]>;
    /**
     * The agent pools that are created with this Kubernetes cluster for running critical system services and workloads. This data in this field is only used during creation, and the field will be empty following the creation of the Kubernetes Cluster. After creation, the management of agent pools is done using the agentPools sub-resource.
     */
    public readonly initialAgentPoolConfigurations!: pulumi.Output<types.outputs.InitialAgentPoolConfigurationResponse[]>;
    /**
     * The Kubernetes version for this cluster.
     */
    public readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedResourceGroupConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The configuration of the Kubernetes cluster networking, including the attachment of networks that span the cluster.
     */
    public readonly networkConfiguration!: pulumi.Output<types.outputs.NetworkConfigurationResponse>;
    /**
     * The details of the nodes in this cluster.
     */
    public /*out*/ readonly nodes!: pulumi.Output<types.outputs.KubernetesClusterNodeResponse[]>;
    /**
     * The provisioning state of the Kubernetes cluster resource.
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
     * Create a KubernetesCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.controlPlaneNodeConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPlaneNodeConfiguration'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.initialAgentPoolConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'initialAgentPoolConfigurations'");
            }
            if ((!args || args.kubernetesVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesVersion'");
            }
            if ((!args || args.networkConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkConfiguration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aadConfiguration"] = args ? args.aadConfiguration : undefined;
            resourceInputs["administratorConfiguration"] = args ? args.administratorConfiguration : undefined;
            resourceInputs["controlPlaneNodeConfiguration"] = args ? args.controlPlaneNodeConfiguration : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["initialAgentPoolConfigurations"] = args ? args.initialAgentPoolConfigurations : undefined;
            resourceInputs["kubernetesClusterName"] = args ? args.kubernetesClusterName : undefined;
            resourceInputs["kubernetesVersion"] = args ? args.kubernetesVersion : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["networkConfiguration"] = args ? (args.networkConfiguration ? pulumi.output(args.networkConfiguration).apply(types.inputs.networkConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["attachedNetworkIds"] = undefined /*out*/;
            resourceInputs["availableUpgrades"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["connectedClusterId"] = undefined /*out*/;
            resourceInputs["controlPlaneKubernetesVersion"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["featureStatuses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadConfiguration"] = undefined /*out*/;
            resourceInputs["administratorConfiguration"] = undefined /*out*/;
            resourceInputs["attachedNetworkIds"] = undefined /*out*/;
            resourceInputs["availableUpgrades"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["connectedClusterId"] = undefined /*out*/;
            resourceInputs["controlPlaneKubernetesVersion"] = undefined /*out*/;
            resourceInputs["controlPlaneNodeConfiguration"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["featureStatuses"] = undefined /*out*/;
            resourceInputs["initialAgentPoolConfigurations"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkConfiguration"] = undefined /*out*/;
            resourceInputs["nodes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:KubernetesCluster" }, { type: "azure-native:networkcloud/v20231001preview:KubernetesCluster" }, { type: "azure-native:networkcloud/v20240601preview:KubernetesCluster" }, { type: "azure-native:networkcloud/v20240701:KubernetesCluster" }, { type: "azure-native:networkcloud/v20241001preview:KubernetesCluster" }, { type: "azure-native:networkcloud/v20250201:KubernetesCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KubernetesCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KubernetesCluster resource.
 */
export interface KubernetesClusterArgs {
    /**
     * The Azure Active Directory Integration properties.
     */
    aadConfiguration?: pulumi.Input<types.inputs.AadConfigurationArgs>;
    /**
     * The administrative credentials that will be applied to the control plane and agent pool nodes that do not specify their own values.
     */
    administratorConfiguration?: pulumi.Input<types.inputs.AdministratorConfigurationArgs>;
    /**
     * The defining characteristics of the control plane for this Kubernetes Cluster.
     */
    controlPlaneNodeConfiguration: pulumi.Input<types.inputs.ControlPlaneNodeConfigurationArgs>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The agent pools that are created with this Kubernetes cluster for running critical system services and workloads. This data in this field is only used during creation, and the field will be empty following the creation of the Kubernetes Cluster. After creation, the management of agent pools is done using the agentPools sub-resource.
     */
    initialAgentPoolConfigurations: pulumi.Input<pulumi.Input<types.inputs.InitialAgentPoolConfigurationArgs>[]>;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName?: pulumi.Input<string>;
    /**
     * The Kubernetes version for this cluster.
     */
    kubernetesVersion: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedResourceGroupConfigurationArgs>;
    /**
     * The configuration of the Kubernetes cluster networking, including the attachment of networks that span the cluster.
     */
    networkConfiguration: pulumi.Input<types.inputs.NetworkConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}