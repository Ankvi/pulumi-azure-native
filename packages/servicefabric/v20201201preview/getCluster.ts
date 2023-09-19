import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20201201preview:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The cluster resource
 */
export interface GetClusterResult {
    /**
     * The list of add-on features to enable in the cluster.
     */
    readonly addOnFeatures?: string[];
    /**
     * The policy used to clean up unused versions.
     */
    readonly applicationTypeVersionsCleanupPolicy?: types.outputs.ApplicationTypeVersionsCleanupPolicyResponse;
    /**
     * The Service Fabric runtime versions available for this cluster.
     */
    readonly availableClusterVersions: types.outputs.ClusterVersionDetailsResponse[];
    /**
     * The AAD authentication settings of the cluster.
     */
    readonly azureActiveDirectory?: types.outputs.AzureActiveDirectoryResponse;
    /**
     * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
     */
    readonly certificate?: types.outputs.CertificateDescriptionResponse;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly certificateCommonNames?: types.outputs.ServerCertificateCommonNamesResponse;
    /**
     * The list of client certificates referenced by common name that are allowed to manage the cluster.
     */
    readonly clientCertificateCommonNames?: types.outputs.ClientCertificateCommonNameResponse[];
    /**
     * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
     */
    readonly clientCertificateThumbprints?: types.outputs.ClientCertificateThumbprintResponse[];
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion?: string;
    /**
     * The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
     */
    readonly clusterEndpoint: string;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    readonly clusterId: string;
    /**
     * The current state of the cluster.
     *
     *   - WaitingForNodes - Indicates that the cluster resource is created and the resource provider is waiting for Service Fabric VM extension to boot up and report to it.
     *   - Deploying - Indicates that the Service Fabric runtime is being installed on the VMs. Cluster resource will be in this state until the cluster boots up and system services are up.
     *   - BaselineUpgrade - Indicates that the cluster is upgrading to establishes the cluster version. This upgrade is automatically initiated when the cluster boots up for the first time.
     *   - UpdatingUserConfiguration - Indicates that the cluster is being upgraded with the user provided configuration.
     *   - UpdatingUserCertificate - Indicates that the cluster is being upgraded with the user provided certificate.
     *   - UpdatingInfrastructure - Indicates that the cluster is being upgraded with the latest Service Fabric runtime version. This happens only when the **upgradeMode** is set to 'Automatic'.
     *   - EnforcingClusterVersion - Indicates that cluster is on a different version than expected and the cluster is being upgraded to the expected version.
     *   - UpgradeServiceUnreachable - Indicates that the system service in the cluster is no longer polling the Resource Provider. Clusters in this state cannot be managed by the Resource Provider.
     *   - AutoScale - Indicates that the ReliabilityLevel of the cluster is being adjusted.
     *   - Ready - Indicates that the cluster is in a stable state.
     */
    readonly clusterState: string;
    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    readonly diagnosticsStorageAccountConfig?: types.outputs.DiagnosticsStorageAccountConfigResponse;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * Indicates if the event store service is enabled.
     */
    readonly eventStoreServiceEnabled?: boolean;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: types.outputs.SettingsSectionDescriptionResponse[];
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Azure resource location.
     */
    readonly location: string;
    /**
     * The http management endpoint of the cluster.
     */
    readonly managementEndpoint: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The list of node types in the cluster.
     */
    readonly nodeTypes: types.outputs.NodeTypeDescriptionResponse[];
    /**
     * The provisioning state of the cluster resource.
     */
    readonly provisioningState: string;
    /**
     * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
     *
     *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
     *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
     *   - Silver - Run the System services with a target replica set count of 5.
     *   - Gold - Run the System services with a target replica set count of 7.
     *   - Platinum - Run the System services with a target replica set count of 9.
     */
    readonly reliabilityLevel?: string;
    /**
     * The server certificate used by reverse proxy.
     */
    readonly reverseProxyCertificate?: types.outputs.CertificateDescriptionResponse;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    readonly reverseProxyCertificateCommonNames?: types.outputs.ServerCertificateCommonNamesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription?: types.outputs.ClusterUpgradePolicyResponse;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    readonly upgradeMode?: string;
    /**
     * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage?: string;
}
/**
 * Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

export interface GetClusterOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
