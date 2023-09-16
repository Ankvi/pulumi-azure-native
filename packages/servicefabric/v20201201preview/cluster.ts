import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The cluster resource
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
    public static readonly __pulumiType = 'azure-native:servicefabric/v20201201preview:Cluster';

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
     * The list of add-on features to enable in the cluster.
     */
    public readonly addOnFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * The policy used to clean up unused versions.
     */
    public readonly applicationTypeVersionsCleanupPolicy!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ApplicationTypeVersionsCleanupPolicyResponse | undefined>;
    /**
     * The Service Fabric runtime versions available for this cluster.
     */
    public /*out*/ readonly availableClusterVersions!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ClusterVersionDetailsResponse[]>;
    /**
     * The AAD authentication settings of the cluster.
     */
    public readonly azureActiveDirectory!: pulumi.Output<types.outputs.servicefabric.v20201201preview.AzureActiveDirectoryResponse | undefined>;
    /**
     * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
     */
    public readonly certificate!: pulumi.Output<types.outputs.servicefabric.v20201201preview.CertificateDescriptionResponse | undefined>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    public readonly certificateCommonNames!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ServerCertificateCommonNamesResponse | undefined>;
    /**
     * The list of client certificates referenced by common name that are allowed to manage the cluster.
     */
    public readonly clientCertificateCommonNames!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ClientCertificateCommonNameResponse[] | undefined>;
    /**
     * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
     */
    public readonly clientCertificateThumbprints!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ClientCertificateThumbprintResponse[] | undefined>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    public readonly clusterCodeVersion!: pulumi.Output<string | undefined>;
    /**
     * The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint.
     */
    public /*out*/ readonly clusterEndpoint!: pulumi.Output<string>;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
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
    public /*out*/ readonly clusterState!: pulumi.Output<string>;
    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    public readonly diagnosticsStorageAccountConfig!: pulumi.Output<types.outputs.servicefabric.v20201201preview.DiagnosticsStorageAccountConfigResponse | undefined>;
    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Indicates if the event store service is enabled.
     */
    public readonly eventStoreServiceEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    public readonly fabricSettings!: pulumi.Output<types.outputs.servicefabric.v20201201preview.SettingsSectionDescriptionResponse[] | undefined>;
    /**
     * Azure resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The http management endpoint of the cluster.
     */
    public readonly managementEndpoint!: pulumi.Output<string>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of node types in the cluster.
     */
    public readonly nodeTypes!: pulumi.Output<types.outputs.servicefabric.v20201201preview.NodeTypeDescriptionResponse[]>;
    /**
     * The provisioning state of the cluster resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
     *
     *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
     *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
     *   - Silver - Run the System services with a target replica set count of 5.
     *   - Gold - Run the System services with a target replica set count of 7.
     *   - Platinum - Run the System services with a target replica set count of 9.
     */
    public readonly reliabilityLevel!: pulumi.Output<string | undefined>;
    /**
     * The server certificate used by reverse proxy.
     */
    public readonly reverseProxyCertificate!: pulumi.Output<types.outputs.servicefabric.v20201201preview.CertificateDescriptionResponse | undefined>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    public readonly reverseProxyCertificateCommonNames!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ServerCertificateCommonNamesResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.servicefabric.v20201201preview.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The policy to use when upgrading the cluster.
     */
    public readonly upgradeDescription!: pulumi.Output<types.outputs.servicefabric.v20201201preview.ClusterUpgradePolicyResponse | undefined>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    public readonly upgradeMode!: pulumi.Output<string | undefined>;
    /**
     * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    public readonly vmImage!: pulumi.Output<string | undefined>;

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
            if ((!args || args.managementEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementEndpoint'");
            }
            if ((!args || args.nodeTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeTypes'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addOnFeatures"] = args ? args.addOnFeatures : undefined;
            resourceInputs["applicationTypeVersionsCleanupPolicy"] = args ? args.applicationTypeVersionsCleanupPolicy : undefined;
            resourceInputs["azureActiveDirectory"] = args ? args.azureActiveDirectory : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["certificateCommonNames"] = args ? args.certificateCommonNames : undefined;
            resourceInputs["clientCertificateCommonNames"] = args ? args.clientCertificateCommonNames : undefined;
            resourceInputs["clientCertificateThumbprints"] = args ? args.clientCertificateThumbprints : undefined;
            resourceInputs["clusterCodeVersion"] = args ? args.clusterCodeVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["diagnosticsStorageAccountConfig"] = args ? args.diagnosticsStorageAccountConfig : undefined;
            resourceInputs["eventStoreServiceEnabled"] = args ? args.eventStoreServiceEnabled : undefined;
            resourceInputs["fabricSettings"] = args ? args.fabricSettings : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementEndpoint"] = args ? args.managementEndpoint : undefined;
            resourceInputs["nodeTypes"] = args ? args.nodeTypes : undefined;
            resourceInputs["reliabilityLevel"] = args ? args.reliabilityLevel : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["reverseProxyCertificate"] = args ? args.reverseProxyCertificate : undefined;
            resourceInputs["reverseProxyCertificateCommonNames"] = args ? args.reverseProxyCertificateCommonNames : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradeDescription"] = args ? (args.upgradeDescription ? pulumi.output(args.upgradeDescription).apply(types.inputs.servicefabric.v20201201preview.clusterUpgradePolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["upgradeMode"] = args ? args.upgradeMode : undefined;
            resourceInputs["vmImage"] = args ? args.vmImage : undefined;
            resourceInputs["availableClusterVersions"] = undefined /*out*/;
            resourceInputs["clusterEndpoint"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addOnFeatures"] = undefined /*out*/;
            resourceInputs["applicationTypeVersionsCleanupPolicy"] = undefined /*out*/;
            resourceInputs["availableClusterVersions"] = undefined /*out*/;
            resourceInputs["azureActiveDirectory"] = undefined /*out*/;
            resourceInputs["certificate"] = undefined /*out*/;
            resourceInputs["certificateCommonNames"] = undefined /*out*/;
            resourceInputs["clientCertificateCommonNames"] = undefined /*out*/;
            resourceInputs["clientCertificateThumbprints"] = undefined /*out*/;
            resourceInputs["clusterCodeVersion"] = undefined /*out*/;
            resourceInputs["clusterEndpoint"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterState"] = undefined /*out*/;
            resourceInputs["diagnosticsStorageAccountConfig"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventStoreServiceEnabled"] = undefined /*out*/;
            resourceInputs["fabricSettings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeTypes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reliabilityLevel"] = undefined /*out*/;
            resourceInputs["reverseProxyCertificate"] = undefined /*out*/;
            resourceInputs["reverseProxyCertificateCommonNames"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeDescription"] = undefined /*out*/;
            resourceInputs["upgradeMode"] = undefined /*out*/;
            resourceInputs["vmImage"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20160901:Cluster" }, { type: "azure-native:servicefabric/v20170701preview:Cluster" }, { type: "azure-native:servicefabric/v20180201:Cluster" }, { type: "azure-native:servicefabric/v20190301:Cluster" }, { type: "azure-native:servicefabric/v20190301preview:Cluster" }, { type: "azure-native:servicefabric/v20190601preview:Cluster" }, { type: "azure-native:servicefabric/v20191101preview:Cluster" }, { type: "azure-native:servicefabric/v20200301:Cluster" }, { type: "azure-native:servicefabric/v20210601:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The list of add-on features to enable in the cluster.
     */
    addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The policy used to clean up unused versions.
     */
    applicationTypeVersionsCleanupPolicy?: pulumi.Input<types.inputs.servicefabric.v20201201preview.ApplicationTypeVersionsCleanupPolicyArgs>;
    /**
     * The AAD authentication settings of the cluster.
     */
    azureActiveDirectory?: pulumi.Input<types.inputs.servicefabric.v20201201preview.AzureActiveDirectoryArgs>;
    /**
     * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
     */
    certificate?: pulumi.Input<types.inputs.servicefabric.v20201201preview.CertificateDescriptionArgs>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    certificateCommonNames?: pulumi.Input<types.inputs.servicefabric.v20201201preview.ServerCertificateCommonNamesArgs>;
    /**
     * The list of client certificates referenced by common name that are allowed to manage the cluster.
     */
    clientCertificateCommonNames?: pulumi.Input<pulumi.Input<types.inputs.servicefabric.v20201201preview.ClientCertificateCommonNameArgs>[]>;
    /**
     * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
     */
    clientCertificateThumbprints?: pulumi.Input<pulumi.Input<types.inputs.servicefabric.v20201201preview.ClientCertificateThumbprintArgs>[]>;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    diagnosticsStorageAccountConfig?: pulumi.Input<types.inputs.servicefabric.v20201201preview.DiagnosticsStorageAccountConfigArgs>;
    /**
     * Indicates if the event store service is enabled.
     */
    eventStoreServiceEnabled?: pulumi.Input<boolean>;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    fabricSettings?: pulumi.Input<pulumi.Input<types.inputs.servicefabric.v20201201preview.SettingsSectionDescriptionArgs>[]>;
    /**
     * Azure resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The http management endpoint of the cluster.
     */
    managementEndpoint: pulumi.Input<string>;
    /**
     * The list of node types in the cluster.
     */
    nodeTypes: pulumi.Input<pulumi.Input<types.inputs.servicefabric.v20201201preview.NodeTypeDescriptionArgs>[]>;
    /**
     * The reliability level sets the replica set size of system services. Learn about [ReliabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
     *
     *   - None - Run the System services with a target replica set count of 1. This should only be used for test clusters.
     *   - Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.
     *   - Silver - Run the System services with a target replica set count of 5.
     *   - Gold - Run the System services with a target replica set count of 7.
     *   - Platinum - Run the System services with a target replica set count of 9.
     */
    reliabilityLevel?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The server certificate used by reverse proxy.
     */
    reverseProxyCertificate?: pulumi.Input<types.inputs.servicefabric.v20201201preview.CertificateDescriptionArgs>;
    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    reverseProxyCertificateCommonNames?: pulumi.Input<types.inputs.servicefabric.v20201201preview.ServerCertificateCommonNamesArgs>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The policy to use when upgrading the cluster.
     */
    upgradeDescription?: pulumi.Input<types.inputs.servicefabric.v20201201preview.ClusterUpgradePolicyArgs>;
    /**
     * The upgrade mode of the cluster when new Service Fabric runtime version is available.
     *
     *   - Automatic - The cluster will be automatically upgraded to the latest Service Fabric runtime version as soon as it is available.
     *   - Manual - The cluster will not be automatically upgraded to the latest Service Fabric runtime version. The cluster is upgraded by setting the **clusterCodeVersion** property in the cluster resource.
     */
    upgradeMode?: pulumi.Input<string>;
    /**
     * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    vmImage?: pulumi.Input<string>;
}
