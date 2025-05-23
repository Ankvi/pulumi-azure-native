import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a connected cluster.
 *
 * Uses Azure REST API version 2024-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-10-01, 2022-05-01-preview, 2022-10-01-preview, 2023-11-01-preview, 2024-01-01, 2024-06-01-preview, 2024-07-01-preview, 2024-07-15-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetes [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConnectedCluster extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedCluster {
        return new ConnectedCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetes:ConnectedCluster';

    /**
     * Returns true if the given object is an instance of ConnectedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedCluster.__pulumiType;
    }

    /**
     * AAD profile for the connected cluster.
     */
    public readonly aadProfile!: pulumi.Output<types.outputs.AadProfileResponse | undefined>;
    /**
     * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
     */
    public readonly agentPublicKeyCertificate!: pulumi.Output<string>;
    /**
     * Version of the agent running on the connected cluster resource
     */
    public /*out*/ readonly agentVersion!: pulumi.Output<string>;
    /**
     * Arc agentry configuration for the provisioned cluster.
     */
    public readonly arcAgentProfile!: pulumi.Output<types.outputs.ArcAgentProfileResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Indicates whether Azure Hybrid Benefit is opted in
     */
    public readonly azureHybridBenefit!: pulumi.Output<string | undefined>;
    /**
     * Represents the connectivity status of the connected cluster.
     */
    public /*out*/ readonly connectivityStatus!: pulumi.Output<string>;
    /**
     * The Kubernetes distribution running on this connected cluster.
     */
    public readonly distribution!: pulumi.Output<string | undefined>;
    /**
     * The Kubernetes distribution version on this connected cluster.
     */
    public readonly distributionVersion!: pulumi.Output<string | undefined>;
    /**
     * The identity of the connected cluster.
     */
    public readonly identity!: pulumi.Output<types.outputs.ConnectedClusterIdentityResponse>;
    /**
     * The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
     */
    public readonly infrastructure!: pulumi.Output<string | undefined>;
    /**
     * The kind of connected cluster.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The Kubernetes version of the connected cluster resource
     */
    public /*out*/ readonly kubernetesVersion!: pulumi.Output<string>;
    /**
     * Time representing the last instance when heart beat was received from the cluster
     */
    public /*out*/ readonly lastConnectivityTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Expiration time of the managed identity certificate
     */
    public /*out*/ readonly managedIdentityCertificateExpirationTime!: pulumi.Output<string>;
    /**
     * More properties related to the Connected Cluster
     */
    public /*out*/ readonly miscellaneousProperties!: pulumi.Output<{[key: string]: string}>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Connected cluster offering
     */
    public /*out*/ readonly offering!: pulumi.Output<string>;
    /**
     * The resource id of the private link scope this connected cluster is assigned to, if any.
     */
    public readonly privateLinkScopeResourceId!: pulumi.Output<string | undefined>;
    /**
     * Property which describes the state of private link on a connected cluster resource.
     */
    public readonly privateLinkState!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the connected cluster resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Number of CPU cores present in the connected cluster resource
     */
    public /*out*/ readonly totalCoreCount!: pulumi.Output<number>;
    /**
     * Number of nodes present in the connected cluster resource
     */
    public /*out*/ readonly totalNodeCount!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.agentPublicKeyCertificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentPublicKeyCertificate'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aadProfile"] = args ? args.aadProfile : undefined;
            resourceInputs["agentPublicKeyCertificate"] = args ? args.agentPublicKeyCertificate : undefined;
            resourceInputs["arcAgentProfile"] = args ? (args.arcAgentProfile ? pulumi.output(args.arcAgentProfile).apply(types.inputs.arcAgentProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["azureHybridBenefit"] = (args ? args.azureHybridBenefit : undefined) ?? "NotApplicable";
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["distribution"] = args ? args.distribution : undefined;
            resourceInputs["distributionVersion"] = args ? args.distributionVersion : undefined;
            resourceInputs["identity"] = args ? (args.identity ? pulumi.output(args.identity).apply(types.inputs.connectedClusterIdentityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["infrastructure"] = args ? args.infrastructure : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateLinkScopeResourceId"] = args ? args.privateLinkScopeResourceId : undefined;
            resourceInputs["privateLinkState"] = (args ? args.privateLinkState : undefined) ?? "Disabled";
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectivityStatus"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["lastConnectivityTime"] = undefined /*out*/;
            resourceInputs["managedIdentityCertificateExpirationTime"] = undefined /*out*/;
            resourceInputs["miscellaneousProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offering"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalCoreCount"] = undefined /*out*/;
            resourceInputs["totalNodeCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadProfile"] = undefined /*out*/;
            resourceInputs["agentPublicKeyCertificate"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["arcAgentProfile"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureHybridBenefit"] = undefined /*out*/;
            resourceInputs["connectivityStatus"] = undefined /*out*/;
            resourceInputs["distribution"] = undefined /*out*/;
            resourceInputs["distributionVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["infrastructure"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["lastConnectivityTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentityCertificateExpirationTime"] = undefined /*out*/;
            resourceInputs["miscellaneousProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offering"] = undefined /*out*/;
            resourceInputs["privateLinkScopeResourceId"] = undefined /*out*/;
            resourceInputs["privateLinkState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalCoreCount"] = undefined /*out*/;
            resourceInputs["totalNodeCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetes/v20200101preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20210301:ConnectedCluster" }, { type: "azure-native:kubernetes/v20210401preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20211001:ConnectedCluster" }, { type: "azure-native:kubernetes/v20220501preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20221001preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20231101preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20240101:ConnectedCluster" }, { type: "azure-native:kubernetes/v20240201preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20240601preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20240701preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20240715preview:ConnectedCluster" }, { type: "azure-native:kubernetes/v20241201preview:ConnectedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedCluster resource.
 */
export interface ConnectedClusterArgs {
    /**
     * AAD profile for the connected cluster.
     */
    aadProfile?: pulumi.Input<types.inputs.AadProfileArgs>;
    /**
     * Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
     */
    agentPublicKeyCertificate: pulumi.Input<string>;
    /**
     * Arc agentry configuration for the provisioned cluster.
     */
    arcAgentProfile?: pulumi.Input<types.inputs.ArcAgentProfileArgs>;
    /**
     * Indicates whether Azure Hybrid Benefit is opted in
     */
    azureHybridBenefit?: pulumi.Input<string | types.enums.AzureHybridBenefit>;
    /**
     * The name of the Kubernetes cluster on which get is called.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The Kubernetes distribution running on this connected cluster.
     */
    distribution?: pulumi.Input<string>;
    /**
     * The Kubernetes distribution version on this connected cluster.
     */
    distributionVersion?: pulumi.Input<string>;
    /**
     * The identity of the connected cluster.
     */
    identity: pulumi.Input<types.inputs.ConnectedClusterIdentityArgs>;
    /**
     * The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
     */
    infrastructure?: pulumi.Input<string>;
    /**
     * The kind of connected cluster.
     */
    kind?: pulumi.Input<string | types.enums.ConnectedClusterKind>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The resource id of the private link scope this connected cluster is assigned to, if any.
     */
    privateLinkScopeResourceId?: pulumi.Input<string>;
    /**
     * Property which describes the state of private link on a connected cluster resource.
     */
    privateLinkState?: pulumi.Input<string | types.enums.PrivateLinkState>;
    /**
     * Provisioning state of the connected cluster resource.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}