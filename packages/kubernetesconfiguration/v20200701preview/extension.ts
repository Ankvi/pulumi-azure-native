import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Extension Instance object.
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
    public static readonly __pulumiType = 'azure-native:kubernetesconfiguration/v20200701preview:Extension';

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
     * Flag to note if this instance participates in auto upgrade of minor version, or not.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration settings that are sensitive, as name-value pairs for configuring this instance of the extension.
     */
    public readonly configurationProtectedSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Configuration settings, as name-value pairs for configuring this instance of the extension.
     */
    public readonly configurationSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * DateLiteral (per ISO8601) noting the time the resource was created by the client (user).
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Error information from the Agent - e.g. errors during installation.
     */
    public /*out*/ readonly errorInfo!: pulumi.Output<types.outputs.ErrorDefinitionResponse>;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    public readonly extensionType!: pulumi.Output<string | undefined>;
    /**
     * The identity of the configuration.
     */
    public readonly identity!: pulumi.Output<types.outputs.ConfigurationIdentityResponse | undefined>;
    /**
     * Status of installation of this instance of the extension.
     */
    public /*out*/ readonly installState!: pulumi.Output<string>;
    /**
     * DateLiteral (per ISO8601) noting the time the resource was modified by the client (user).
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * DateLiteral (per ISO8601) noting the time of last status from the agent.
     */
    public /*out*/ readonly lastStatusTime!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ReleaseTrain this extension instance participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    public readonly releaseTrain!: pulumi.Output<string | undefined>;
    /**
     * Scope at which the extension instance is installed.
     */
    public readonly scope!: pulumi.Output<types.outputs.ScopeResponse | undefined>;
    /**
     * Status from this instance of the extension.
     */
    public readonly statuses!: pulumi.Output<types.outputs.ExtensionStatusResponse[] | undefined>;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the extension for this extension instance, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'.
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
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterResourceName"] = args ? args.clusterResourceName : undefined;
            resourceInputs["clusterRp"] = args ? args.clusterRp : undefined;
            resourceInputs["configurationProtectedSettings"] = args ? args.configurationProtectedSettings : undefined;
            resourceInputs["configurationSettings"] = args ? args.configurationSettings : undefined;
            resourceInputs["extensionInstanceName"] = args ? args.extensionInstanceName : undefined;
            resourceInputs["extensionType"] = args ? args.extensionType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["releaseTrain"] = args ? args.releaseTrain : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["statuses"] = args ? args.statuses : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["errorInfo"] = undefined /*out*/;
            resourceInputs["installState"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["lastStatusTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoUpgradeMinorVersion"] = undefined /*out*/;
            resourceInputs["configurationProtectedSettings"] = undefined /*out*/;
            resourceInputs["configurationSettings"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["errorInfo"] = undefined /*out*/;
            resourceInputs["extensionType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["installState"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["lastStatusTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["releaseTrain"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesconfiguration:Extension" }, { type: "azure-native:kubernetesconfiguration/v20210501preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20210901:Extension" }, { type: "azure-native:kubernetesconfiguration/v20211101preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220101preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220301:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220402preview:Extension" }, { type: "azure-native:kubernetesconfiguration/v20220701:Extension" }, { type: "azure-native:kubernetesconfiguration/v20221101:Extension" }, { type: "azure-native:kubernetesconfiguration/v20230501:Extension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Extension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * Flag to note if this instance participates in auto upgrade of minor version, or not.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
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
     * Configuration settings that are sensitive, as name-value pairs for configuring this instance of the extension.
     */
    configurationProtectedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration settings, as name-value pairs for configuring this instance of the extension.
     */
    configurationSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of an instance of the Extension.
     */
    extensionInstanceName?: pulumi.Input<string>;
    /**
     * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
     */
    extensionType?: pulumi.Input<string>;
    /**
     * The identity of the configuration.
     */
    identity?: pulumi.Input<types.inputs.ConfigurationIdentityArgs>;
    /**
     * ReleaseTrain this extension instance participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
     */
    releaseTrain?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope at which the extension instance is installed.
     */
    scope?: pulumi.Input<types.inputs.ScopeArgs>;
    /**
     * Status from this instance of the extension.
     */
    statuses?: pulumi.Input<pulumi.Input<types.inputs.ExtensionStatusArgs>[]>;
    /**
     * Version of the extension for this extension instance, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'.
     */
    version?: pulumi.Input<string>;
}
