import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of the Source Control Configuration.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-07-01, 2022-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetesconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControlConfiguration(args: GetSourceControlConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceControlConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesconfiguration:getSourceControlConfiguration", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlConfigurationName": args.sourceControlConfigurationName,
    }, opts);
}

export interface GetSourceControlConfigurationArgs {
    /**
     * The name of the kubernetes cluster.
     */
    clusterName: string;
    /**
     * The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
     */
    clusterResourceName: string;
    /**
     * The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
     */
    clusterRp: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Source Control Configuration.
     */
    sourceControlConfigurationName: string;
}

/**
 * The SourceControl Configuration object returned in Get & Put response.
 */
export interface GetSourceControlConfigurationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Compliance Status of the Configuration
     */
    readonly complianceStatus: types.outputs.ComplianceStatusResponse;
    /**
     * Name-value pairs of protected configuration settings for the configuration
     */
    readonly configurationProtectedSettings?: {[key: string]: string};
    /**
     * Option to enable Helm Operator for this git configuration.
     */
    readonly enableHelmOperator?: boolean;
    /**
     * Properties for Helm operator.
     */
    readonly helmOperatorProperties?: types.outputs.HelmOperatorPropertiesResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Instance name of the operator - identifying the specific configuration.
     */
    readonly operatorInstanceName?: string;
    /**
     * The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
     */
    readonly operatorNamespace?: string;
    /**
     * Any Parameters for the Operator instance in string format.
     */
    readonly operatorParams?: string;
    /**
     * Scope at which the operator will be installed.
     */
    readonly operatorScope?: string;
    /**
     * Type of the operator
     */
    readonly operatorType?: string;
    /**
     * The provisioning state of the resource provider.
     */
    readonly provisioningState: string;
    /**
     * Public Key associated with this SourceControl configuration (either generated within the cluster or provided by the user).
     */
    readonly repositoryPublicKey: string;
    /**
     * Url of the SourceControl Repository.
     */
    readonly repositoryUrl?: string;
    /**
     * Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances
     */
    readonly sshKnownHostsContents?: string;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details of the Source Control Configuration.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2022-07-01, 2022-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kubernetesconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControlConfigurationOutput(args: GetSourceControlConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceControlConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetesconfiguration:getSourceControlConfiguration", {
        "clusterName": args.clusterName,
        "clusterResourceName": args.clusterResourceName,
        "clusterRp": args.clusterRp,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlConfigurationName": args.sourceControlConfigurationName,
    }, opts);
}

export interface GetSourceControlConfigurationOutputArgs {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Source Control Configuration.
     */
    sourceControlConfigurationName: pulumi.Input<string>;
}