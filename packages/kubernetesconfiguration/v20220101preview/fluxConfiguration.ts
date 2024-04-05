import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Flux Configuration object returned in Get & Put response.
 */
export class FluxConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing FluxConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FluxConfiguration {
        return new FluxConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesconfiguration/v20220101preview:FluxConfiguration';

    /**
     * Returns true if the given object is an instance of FluxConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FluxConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FluxConfiguration.__pulumiType;
    }

    /**
     * Parameters to reconcile to the Bucket source kind type.
     */
    public readonly bucket!: pulumi.Output<types.outputs.BucketDefinitionResponse | undefined>;
    /**
     * Combined status of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects.
     */
    public /*out*/ readonly complianceState!: pulumi.Output<string>;
    /**
     * Key-value pairs of protected configuration settings for the configuration
     */
    public readonly configurationProtectedSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Error message returned to the user in the case of provisioning failure.
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * Parameters to reconcile to the GitRepository source kind type.
     */
    public readonly gitRepository!: pulumi.Output<types.outputs.GitRepositoryDefinitionResponse | undefined>;
    /**
     * Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
     */
    public readonly kustomizations!: pulumi.Output<{[key: string]: types.outputs.KustomizationDefinitionResponse} | undefined>;
    /**
     * Datetime the fluxConfiguration last synced its source on the cluster.
     */
    public /*out*/ readonly lastSourceUpdatedAt!: pulumi.Output<string>;
    /**
     * Branch and SHA of the last source commit synced with the cluster.
     */
    public /*out*/ readonly lastSourceUpdatedCommitId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Status of the creation of the fluxConfiguration.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public Key associated with this fluxConfiguration (either generated within the cluster or provided by the user).
     */
    public /*out*/ readonly repositoryPublicKey!: pulumi.Output<string>;
    /**
     * Scope at which the operator will be installed.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Source Kind to pull the configuration data from.
     */
    public readonly sourceKind!: pulumi.Output<string | undefined>;
    /**
     * Statuses of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects provisioned by the fluxConfiguration.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ObjectStatusDefinitionResponse[]>;
    /**
     * Whether this configuration should suspend its reconciliation of its kustomizations and sources.
     */
    public readonly suspend!: pulumi.Output<boolean | undefined>;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FluxConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FluxConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.clusterResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterResourceName'");
            }
            if ((!args || args.clusterRp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterRp'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bucket"] = args ? (args.bucket ? pulumi.output(args.bucket).apply(types.inputs.bucketDefinitionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterResourceName"] = args ? args.clusterResourceName : undefined;
            resourceInputs["clusterRp"] = args ? args.clusterRp : undefined;
            resourceInputs["configurationProtectedSettings"] = args ? args.configurationProtectedSettings : undefined;
            resourceInputs["fluxConfigurationName"] = args ? args.fluxConfigurationName : undefined;
            resourceInputs["gitRepository"] = args ? (args.gitRepository ? pulumi.output(args.gitRepository).apply(types.inputs.gitRepositoryDefinitionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["kustomizations"] = args ? args.kustomizations : undefined;
            resourceInputs["namespace"] = (args ? args.namespace : undefined) ?? "default";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sourceKind"] = (args ? args.sourceKind : undefined) ?? "GitRepository";
            resourceInputs["suspend"] = (args ? args.suspend : undefined) ?? false;
            resourceInputs["complianceState"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["lastSourceUpdatedAt"] = undefined /*out*/;
            resourceInputs["lastSourceUpdatedCommitId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["repositoryPublicKey"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["bucket"] = undefined /*out*/;
            resourceInputs["complianceState"] = undefined /*out*/;
            resourceInputs["configurationProtectedSettings"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["gitRepository"] = undefined /*out*/;
            resourceInputs["kustomizations"] = undefined /*out*/;
            resourceInputs["lastSourceUpdatedAt"] = undefined /*out*/;
            resourceInputs["lastSourceUpdatedCommitId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["repositoryPublicKey"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["sourceKind"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["suspend"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesconfiguration:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20211101preview:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20220301:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20220701:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20221101:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20230501:FluxConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20240401preview:FluxConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FluxConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FluxConfiguration resource.
 */
export interface FluxConfigurationArgs {
    /**
     * Parameters to reconcile to the Bucket source kind type.
     */
    bucket?: pulumi.Input<types.inputs.BucketDefinitionArgs>;
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster resource name - either managedClusters (for AKS clusters) or connectedClusters (for OnPrem K8S clusters).
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters).
     */
    clusterRp: pulumi.Input<string>;
    /**
     * Key-value pairs of protected configuration settings for the configuration
     */
    configurationProtectedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Flux Configuration.
     */
    fluxConfigurationName?: pulumi.Input<string>;
    /**
     * Parameters to reconcile to the GitRepository source kind type.
     */
    gitRepository?: pulumi.Input<types.inputs.GitRepositoryDefinitionArgs>;
    /**
     * Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
     */
    kustomizations?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.KustomizationDefinitionArgs>}>;
    /**
     * The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope at which the operator will be installed.
     */
    scope?: pulumi.Input<string | types.enums.ScopeType>;
    /**
     * Source Kind to pull the configuration data from.
     */
    sourceKind?: pulumi.Input<string | types.enums.SourceKindType>;
    /**
     * Whether this configuration should suspend its reconciliation of its kustomizations and sources.
     */
    suspend?: pulumi.Input<boolean>;
}