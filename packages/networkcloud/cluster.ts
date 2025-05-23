import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:networkcloud:Cluster';

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
     * The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster.
     */
    public readonly aggregatorOrSingleRackDefinition!: pulumi.Output<types.outputs.RackDefinitionResponse>;
    /**
     * The settings for the log analytics workspace used for output of logs from this cluster.
     */
    public readonly analyticsOutputSettings!: pulumi.Output<types.outputs.AnalyticsOutputSettingsResponse | undefined>;
    /**
     * Field Deprecated. The resource ID of the Log Analytics Workspace that will be used for storing relevant logs.
     */
    public readonly analyticsWorkspaceId!: pulumi.Output<string | undefined>;
    /**
     * The list of cluster runtime version upgrades available for this cluster.
     */
    public /*out*/ readonly availableUpgradeVersions!: pulumi.Output<types.outputs.ClusterAvailableUpgradeVersionResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The capacity supported by this cluster.
     */
    public /*out*/ readonly clusterCapacity!: pulumi.Output<types.outputs.ClusterCapacityResponse>;
    /**
     * The latest heartbeat status between the cluster manager and the cluster.
     */
    public /*out*/ readonly clusterConnectionStatus!: pulumi.Output<string>;
    /**
     * The extended location (custom location) that represents the cluster's control plane location. This extended location is used to route the requests of child objects of the cluster that are handled by the platform operator.
     */
    public /*out*/ readonly clusterExtendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The customer-provided location information to identify where the cluster resides.
     */
    public readonly clusterLocation!: pulumi.Output<string | undefined>;
    /**
     * The latest connectivity status between cluster manager and the cluster.
     */
    public /*out*/ readonly clusterManagerConnectionStatus!: pulumi.Output<string>;
    /**
     * The resource ID of the cluster manager that manages this cluster. This is set by the Cluster Manager when the cluster is created.
     */
    public /*out*/ readonly clusterManagerId!: pulumi.Output<string>;
    /**
     * The service principal to be used by the cluster during Arc Appliance installation.
     */
    public readonly clusterServicePrincipal!: pulumi.Output<types.outputs.ServicePrincipalInformationResponse | undefined>;
    /**
     * The type of rack configuration for the cluster.
     */
    public readonly clusterType!: pulumi.Output<string>;
    /**
     * The current runtime version of the cluster.
     */
    public readonly clusterVersion!: pulumi.Output<string>;
    /**
     * The settings for commands run in this cluster, such as bare metal machine run read only commands and data extracts.
     */
    public readonly commandOutputSettings!: pulumi.Output<types.outputs.CommandOutputSettingsResponse | undefined>;
    /**
     * The validation threshold indicating the allowable failures of compute machines during environment validation and deployment.
     */
    public readonly computeDeploymentThreshold!: pulumi.Output<types.outputs.ValidationThresholdResponse | undefined>;
    /**
     * The list of rack definitions for the compute racks in a multi-rack
     * cluster, or an empty list in a single-rack cluster.
     */
    public readonly computeRackDefinitions!: pulumi.Output<types.outputs.RackDefinitionResponse[] | undefined>;
    /**
     * The current detailed status of the cluster.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the cluster manager associated with the cluster.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Field Deprecated. This field will not be populated in an upcoming version. The extended location (custom location) that represents the Hybrid AKS control plane location. This extended location is used when creating provisioned clusters (Hybrid AKS clusters).
     */
    public /*out*/ readonly hybridAksExtendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedResourceGroupConfigurationResponse | undefined>;
    /**
     * The count of Manual Action Taken (MAT) events that have not been validated.
     */
    public /*out*/ readonly manualActionCount!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the Network Fabric associated with the cluster.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * The provisioning state of the cluster.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The settings for cluster runtime protection.
     */
    public readonly runtimeProtectionConfiguration!: pulumi.Output<types.outputs.RuntimeProtectionConfigurationResponse | undefined>;
    /**
     * The configuration for use of a key vault to store secrets for later retrieval by the operator.
     */
    public readonly secretArchive!: pulumi.Output<types.outputs.ClusterSecretArchiveResponse | undefined>;
    /**
     * The settings for the secret archive used to hold credentials for the cluster.
     */
    public readonly secretArchiveSettings!: pulumi.Output<types.outputs.SecretArchiveSettingsResponse | undefined>;
    /**
     * The support end date of the runtime version of the cluster.
     */
    public /*out*/ readonly supportExpiryDate!: pulumi.Output<string>;
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
     * The strategy for updating the cluster.
     */
    public readonly updateStrategy!: pulumi.Output<types.outputs.ClusterUpdateStrategyResponse | undefined>;
    /**
     * The settings for how security vulnerability scanning is applied to the cluster.
     */
    public readonly vulnerabilityScanningSettings!: pulumi.Output<types.outputs.VulnerabilityScanningSettingsResponse | undefined>;
    /**
     * The list of workload resource IDs that are hosted within this cluster.
     */
    public /*out*/ readonly workloadResourceIds!: pulumi.Output<string[]>;

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
            if ((!args || args.aggregatorOrSingleRackDefinition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aggregatorOrSingleRackDefinition'");
            }
            if ((!args || args.clusterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterType'");
            }
            if ((!args || args.clusterVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterVersion'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.networkFabricId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aggregatorOrSingleRackDefinition"] = args ? args.aggregatorOrSingleRackDefinition : undefined;
            resourceInputs["analyticsOutputSettings"] = args ? args.analyticsOutputSettings : undefined;
            resourceInputs["analyticsWorkspaceId"] = args ? args.analyticsWorkspaceId : undefined;
            resourceInputs["clusterLocation"] = args ? args.clusterLocation : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterServicePrincipal"] = args ? args.clusterServicePrincipal : undefined;
            resourceInputs["clusterType"] = args ? args.clusterType : undefined;
            resourceInputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            resourceInputs["commandOutputSettings"] = args ? args.commandOutputSettings : undefined;
            resourceInputs["computeDeploymentThreshold"] = args ? args.computeDeploymentThreshold : undefined;
            resourceInputs["computeRackDefinitions"] = args ? args.computeRackDefinitions : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runtimeProtectionConfiguration"] = args ? (args.runtimeProtectionConfiguration ? pulumi.output(args.runtimeProtectionConfiguration).apply(types.inputs.runtimeProtectionConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["secretArchive"] = args ? (args.secretArchive ? pulumi.output(args.secretArchive).apply(types.inputs.clusterSecretArchiveArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["secretArchiveSettings"] = args ? args.secretArchiveSettings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["updateStrategy"] = args ? (args.updateStrategy ? pulumi.output(args.updateStrategy).apply(types.inputs.clusterUpdateStrategyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["vulnerabilityScanningSettings"] = args ? (args.vulnerabilityScanningSettings ? pulumi.output(args.vulnerabilityScanningSettings).apply(types.inputs.vulnerabilityScanningSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["availableUpgradeVersions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterCapacity"] = undefined /*out*/;
            resourceInputs["clusterConnectionStatus"] = undefined /*out*/;
            resourceInputs["clusterExtendedLocation"] = undefined /*out*/;
            resourceInputs["clusterManagerConnectionStatus"] = undefined /*out*/;
            resourceInputs["clusterManagerId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hybridAksExtendedLocation"] = undefined /*out*/;
            resourceInputs["manualActionCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["supportExpiryDate"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workloadResourceIds"] = undefined /*out*/;
        } else {
            resourceInputs["aggregatorOrSingleRackDefinition"] = undefined /*out*/;
            resourceInputs["analyticsOutputSettings"] = undefined /*out*/;
            resourceInputs["analyticsWorkspaceId"] = undefined /*out*/;
            resourceInputs["availableUpgradeVersions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterCapacity"] = undefined /*out*/;
            resourceInputs["clusterConnectionStatus"] = undefined /*out*/;
            resourceInputs["clusterExtendedLocation"] = undefined /*out*/;
            resourceInputs["clusterLocation"] = undefined /*out*/;
            resourceInputs["clusterManagerConnectionStatus"] = undefined /*out*/;
            resourceInputs["clusterManagerId"] = undefined /*out*/;
            resourceInputs["clusterServicePrincipal"] = undefined /*out*/;
            resourceInputs["clusterType"] = undefined /*out*/;
            resourceInputs["clusterVersion"] = undefined /*out*/;
            resourceInputs["commandOutputSettings"] = undefined /*out*/;
            resourceInputs["computeDeploymentThreshold"] = undefined /*out*/;
            resourceInputs["computeRackDefinitions"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hybridAksExtendedLocation"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["manualActionCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runtimeProtectionConfiguration"] = undefined /*out*/;
            resourceInputs["secretArchive"] = undefined /*out*/;
            resourceInputs["secretArchiveSettings"] = undefined /*out*/;
            resourceInputs["supportExpiryDate"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateStrategy"] = undefined /*out*/;
            resourceInputs["vulnerabilityScanningSettings"] = undefined /*out*/;
            resourceInputs["workloadResourceIds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:Cluster" }, { type: "azure-native:networkcloud/v20231001preview:Cluster" }, { type: "azure-native:networkcloud/v20240601preview:Cluster" }, { type: "azure-native:networkcloud/v20240701:Cluster" }, { type: "azure-native:networkcloud/v20241001preview:Cluster" }, { type: "azure-native:networkcloud/v20250201:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster.
     */
    aggregatorOrSingleRackDefinition: pulumi.Input<types.inputs.RackDefinitionArgs>;
    /**
     * The settings for the log analytics workspace used for output of logs from this cluster.
     */
    analyticsOutputSettings?: pulumi.Input<types.inputs.AnalyticsOutputSettingsArgs>;
    /**
     * Field Deprecated. The resource ID of the Log Analytics Workspace that will be used for storing relevant logs.
     */
    analyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The customer-provided location information to identify where the cluster resides.
     */
    clusterLocation?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The service principal to be used by the cluster during Arc Appliance installation.
     */
    clusterServicePrincipal?: pulumi.Input<types.inputs.ServicePrincipalInformationArgs>;
    /**
     * The type of rack configuration for the cluster.
     */
    clusterType: pulumi.Input<string | types.enums.ClusterType>;
    /**
     * The current runtime version of the cluster.
     */
    clusterVersion: pulumi.Input<string>;
    /**
     * The settings for commands run in this cluster, such as bare metal machine run read only commands and data extracts.
     */
    commandOutputSettings?: pulumi.Input<types.inputs.CommandOutputSettingsArgs>;
    /**
     * The validation threshold indicating the allowable failures of compute machines during environment validation and deployment.
     */
    computeDeploymentThreshold?: pulumi.Input<types.inputs.ValidationThresholdArgs>;
    /**
     * The list of rack definitions for the compute racks in a multi-rack
     * cluster, or an empty list in a single-rack cluster.
     */
    computeRackDefinitions?: pulumi.Input<pulumi.Input<types.inputs.RackDefinitionArgs>[]>;
    /**
     * The extended location of the cluster manager associated with the cluster.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedResourceGroupConfigurationArgs>;
    /**
     * The resource ID of the Network Fabric associated with the cluster.
     */
    networkFabricId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The settings for cluster runtime protection.
     */
    runtimeProtectionConfiguration?: pulumi.Input<types.inputs.RuntimeProtectionConfigurationArgs>;
    /**
     * The configuration for use of a key vault to store secrets for later retrieval by the operator.
     */
    secretArchive?: pulumi.Input<types.inputs.ClusterSecretArchiveArgs>;
    /**
     * The settings for the secret archive used to hold credentials for the cluster.
     */
    secretArchiveSettings?: pulumi.Input<types.inputs.SecretArchiveSettingsArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The strategy for updating the cluster.
     */
    updateStrategy?: pulumi.Input<types.inputs.ClusterUpdateStrategyArgs>;
    /**
     * The settings for how security vulnerability scanning is applied to the cluster.
     */
    vulnerabilityScanningSettings?: pulumi.Input<types.inputs.VulnerabilityScanningSettingsArgs>;
}