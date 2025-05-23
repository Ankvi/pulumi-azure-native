import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Extension object.
 *
 * Uses Azure REST API version 2023-05-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2022-04-02-preview, 2022-07-01, 2022-11-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetesconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Extension extends pulumi.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Extension {
        return new Extension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesconfiguration:Extension';

    /**
     * Returns true if the given object is an instance of Extension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Extension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Extension.__pulumiType;
    }

    /**
     * Identity of the Extension resource in an AKS cluster
     */
    public readonly aksAssignedIdentity!: pulumi.Output<types.outputs.ExtensionResponseAksAssignedIdentity | undefined>;
    /**
     * Flag to note if this extension participates in auto upgrade of minor version, or not.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration settings that are sensitive, as name-value pairs for configuring this extension.
     */
    public readonly configurationProtectedSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Configuration settings, as name-value pairs for configuring this extension.
     */
    public readonly configurationSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Currently installed version of the extension.
     */
    public /*out*/ readonly currentVersion!: pulumi.Output<string>;
    /**
     * Custom Location settings properties.
     */
    public /*out*/ readonly customLocationSettings!: pulumi.Output<{[key: string]: string}>;
    /**
     * Error information from the Agent - e.g. errors during installation.
     */
    public /*out*/ readonly errorInfo!: pulumi.Output<types.outputs.ErrorDetailResponse>;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    public readonly extensionType!: pulumi.Output<string | undefined>;
    /**
     * Identity of the Extension resource
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Flag to note if this extension is a system extension
     */
    public /*out*/ readonly isSystemExtension!: pulumi.Output<boolean>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Uri of the Helm package
     */
    public /*out*/ readonly packageUri!: pulumi.Output<string>;
    /**
     * The plan information.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * Status of installation of this extension.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    public readonly releaseTrain!: pulumi.Output<string | undefined>;
    /**
     * Scope at which the extension is installed.
     */
    public readonly scope!: pulumi.Output<types.outputs.ScopeResponse | undefined>;
    /**
     * Status from this extension.
     */
    public readonly statuses!: pulumi.Output<types.outputs.ExtensionStatusResponse[] | undefined>;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtensionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["aksAssignedIdentity"] = args ? args.aksAssignedIdentity : undefined;
            resourceInputs["autoUpgradeMinorVersion"] = (args ? args.autoUpgradeMinorVersion : undefined) ?? true;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterResourceName"] = args ? args.clusterResourceName : undefined;
            resourceInputs["clusterRp"] = args ? args.clusterRp : undefined;
            resourceInputs["configurationProtectedSettings"] = args ? args.configurationProtectedSettings : undefined;
            resourceInputs["configurationSettings"] = args ? args.configurationSettings : undefined;
            resourceInputs["extensionName"] = args ? args.extensionName : undefined;
            resourceInputs["extensionType"] = args ? args.extensionType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["releaseTrain"] = (args ? args.releaseTrain : undefined) ?? "Stable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["statuses"] = args ? args.statuses : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["currentVersion"] = undefined /*out*/;
            resourceInputs["customLocationSettings"] = undefined /*out*/;
            resourceInputs["errorInfo"] = undefined /*out*/;
            resourceInputs["isSystemExtension"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageUri"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aksAssignedIdentity"] = undefined /*out*/;
            resourceInputs["autoUpgradeMinorVersion"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationProtectedSettings"] = undefined /*out*/;
            resourceInputs["configurationSettings"] = undefined /*out*/;
            resourceInputs["currentVersion"] = undefined /*out*/;
            resourceInputs["customLocationSettings"] = undefined /*out*/;
            resourceInputs["errorInfo"] = undefined /*out*/;
            resourceInputs["extensionType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["isSystemExtension"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageUri"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["releaseTrain"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesconfiguration/v20200701preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20210501preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20210901:Extension" }, { type: "azure-native:kubernetesconfiguration/v20211101preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220101preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220301:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220402preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220701:Extension" }, { type: "azure-native:kubernetesconfiguration/v20221101:Extension" }, { type: "azure-native:kubernetesconfiguration/v20230501:Extension" }, { type: "azure-native:kubernetesconfiguration/v20241101:Extension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Extension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * Identity of the Extension resource in an AKS cluster
     */
    aksAssignedIdentity?: pulumi.Input<types.inputs.ExtensionAksAssignedIdentityArgs>;
    /**
     * Flag to note if this extension participates in auto upgrade of minor version, or not.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: pulumi.Input<string>;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
     */
    clusterRp: pulumi.Input<string>;
    /**
     * Configuration settings that are sensitive, as name-value pairs for configuring this extension.
     */
    configurationProtectedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration settings, as name-value pairs for configuring this extension.
     */
    configurationSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Extension.
     */
    extensionName?: pulumi.Input<string>;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    extensionType?: pulumi.Input<string>;
    /**
     * Identity of the Extension resource
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The plan information.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    releaseTrain?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope at which the extension is installed.
     */
    scope?: pulumi.Input<types.inputs.ScopeArgs>;
    /**
     * Status from this extension.
     */
    statuses?: pulumi.Input<pulumi.Input<types.inputs.ExtensionStatusArgs>[]>;
    /**
     * User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'.
     */
    version?: pulumi.Input<string>;
}