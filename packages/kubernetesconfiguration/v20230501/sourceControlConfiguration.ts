import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The SourceControl Configuration object returned in Get & Put response.
 */
export class SourceControlConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SourceControlConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SourceControlConfiguration {
        return new SourceControlConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesconfiguration/v20230501:SourceControlConfiguration';

    /**
     * Returns true if the given object is an instance of SourceControlConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourceControlConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourceControlConfiguration.__pulumiType;
    }

    /**
     * Compliance Status of the Configuration
     */
    public /*out*/ readonly complianceStatus!: pulumi.Output<types.outputs.kubernetesconfiguration.v20230501.ComplianceStatusResponse>;
    /**
     * Name-value pairs of protected configuration settings for the configuration
     */
    public readonly configurationProtectedSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Option to enable Helm Operator for this git configuration.
     */
    public readonly enableHelmOperator!: pulumi.Output<boolean | undefined>;
    /**
     * Properties for Helm operator.
     */
    public readonly helmOperatorProperties!: pulumi.Output<types.outputs.kubernetesconfiguration.v20230501.HelmOperatorPropertiesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Instance name of the operator - identifying the specific configuration.
     */
    public readonly operatorInstanceName!: pulumi.Output<string | undefined>;
    /**
     * The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    public readonly operatorNamespace!: pulumi.Output<string | undefined>;
    /**
     * Any Parameters for the Operator instance in string format.
     */
    public readonly operatorParams!: pulumi.Output<string | undefined>;
    /**
     * Scope at which the operator will be installed.
     */
    public readonly operatorScope!: pulumi.Output<string | undefined>;
    /**
     * Type of the operator
     */
    public readonly operatorType!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource provider.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public Key associated with this SourceControl configuration (either generated within the cluster or provided by the user).
     */
    public /*out*/ readonly repositoryPublicKey!: pulumi.Output<string>;
    /**
     * Url of the SourceControl Repository.
     */
    public readonly repositoryUrl!: pulumi.Output<string | undefined>;
    /**
     * Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances
     */
    public readonly sshKnownHostsContents!: pulumi.Output<string | undefined>;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.kubernetesconfiguration.v20230501.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SourceControlConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceControlConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterResourceName"] = args ? args.clusterResourceName : undefined;
            resourceInputs["clusterRp"] = args ? args.clusterRp : undefined;
            resourceInputs["configurationProtectedSettings"] = args ? args.configurationProtectedSettings : undefined;
            resourceInputs["enableHelmOperator"] = args ? args.enableHelmOperator : undefined;
            resourceInputs["helmOperatorProperties"] = args ? args.helmOperatorProperties : undefined;
            resourceInputs["operatorInstanceName"] = args ? args.operatorInstanceName : undefined;
            resourceInputs["operatorNamespace"] = (args ? args.operatorNamespace : undefined) ?? "default";
            resourceInputs["operatorParams"] = args ? args.operatorParams : undefined;
            resourceInputs["operatorScope"] = args ? args.operatorScope : undefined;
            resourceInputs["operatorType"] = args ? args.operatorType : undefined;
            resourceInputs["repositoryUrl"] = args ? args.repositoryUrl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceControlConfigurationName"] = args ? args.sourceControlConfigurationName : undefined;
            resourceInputs["sshKnownHostsContents"] = args ? args.sshKnownHostsContents : undefined;
            resourceInputs["complianceStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["repositoryPublicKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["complianceStatus"] = undefined /*out*/;
            resourceInputs["configurationProtectedSettings"] = undefined /*out*/;
            resourceInputs["enableHelmOperator"] = undefined /*out*/;
            resourceInputs["helmOperatorProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operatorInstanceName"] = undefined /*out*/;
            resourceInputs["operatorNamespace"] = undefined /*out*/;
            resourceInputs["operatorParams"] = undefined /*out*/;
            resourceInputs["operatorScope"] = undefined /*out*/;
            resourceInputs["operatorType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["repositoryPublicKey"] = undefined /*out*/;
            resourceInputs["repositoryUrl"] = undefined /*out*/;
            resourceInputs["sshKnownHostsContents"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesconfiguration:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20191101preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20200701preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20201001preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20210301:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20210501preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20211101preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20220101preview:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20220301:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20220701:SourceControlConfiguration" }, { type: "azure-native:kubernetesconfiguration/v20221101:SourceControlConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SourceControlConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SourceControlConfiguration resource.
 */
export interface SourceControlConfigurationArgs {
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
     * Name-value pairs of protected configuration settings for the configuration
     */
    configurationProtectedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Option to enable Helm Operator for this git configuration.
     */
    enableHelmOperator?: pulumi.Input<boolean>;
    /**
     * Properties for Helm operator.
     */
    helmOperatorProperties?: pulumi.Input<types.inputs.kubernetesconfiguration.v20230501.HelmOperatorPropertiesArgs>;
    /**
     * Instance name of the operator - identifying the specific configuration.
     */
    operatorInstanceName?: pulumi.Input<string>;
    /**
     * The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    operatorNamespace?: pulumi.Input<string>;
    /**
     * Any Parameters for the Operator instance in string format.
     */
    operatorParams?: pulumi.Input<string>;
    /**
     * Scope at which the operator will be installed.
     */
    operatorScope?: pulumi.Input<string | types.enums.v20230501.OperatorScopeType>;
    /**
     * Type of the operator
     */
    operatorType?: pulumi.Input<string | types.enums.v20230501.OperatorType>;
    /**
     * Url of the SourceControl Repository.
     */
    repositoryUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Source Control Configuration.
     */
    sourceControlConfigurationName?: pulumi.Input<string>;
    /**
     * Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances
     */
    sshKnownHostsContents?: pulumi.Input<string>;
}
