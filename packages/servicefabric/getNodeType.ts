import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric node type of a given managed cluster.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-11-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNodeType(args: GetNodeTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetNodeTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getNodeType", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNodeTypeArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the node type.
     */
    nodeTypeName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
 */
export interface GetNodeTypeResult {
    /**
     * Additional managed data disks.
     */
    readonly additionalDataDisks?: types.outputs.VmssDataDiskResponse[];
    /**
     * Specifies the settings for any additional secondary network interfaces to attach to the node type.
     */
    readonly additionalNetworkInterfaceConfigurations?: types.outputs.AdditionalNetworkInterfaceConfigurationResponse[];
    /**
     * The range of ports from which cluster assigned port to Service Fabric applications.
     */
    readonly applicationPorts?: types.outputs.EndpointRangeDescriptionResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
     */
    readonly capacities?: {[key: string]: string};
    /**
     * Specifies the computer name prefix. Limited to 9 characters. If specified, allows for a longer name to be specified for the node type name.
     */
    readonly computerNamePrefix?: string;
    /**
     * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
     */
    readonly dataDiskLetter?: string;
    /**
     * Disk size for the managed disk attached to the vms on the node type in GBs.
     */
    readonly dataDiskSizeGB?: number;
    /**
     * Managed data disk type. Specifies the storage account type for the managed disk
     */
    readonly dataDiskType?: string;
    /**
     * Specifies the resource id of the DSCP configuration to apply to the node type network interface.
     */
    readonly dscpConfigurationId?: string;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    readonly enableAcceleratedNetworking?: boolean;
    /**
     * Enable or disable the Host Encryption for the virtual machines on the node type. This will enable the encryption for all the disks including Resource/Temp disk at host itself. Default: The Encryption at host will be disabled unless this property is set to true for the resource.
     */
    readonly enableEncryptionAtHost?: boolean;
    /**
     * Specifies whether each node is allocated its own public IPv4 address. This is only supported on secondary node types with custom Load Balancers.
     */
    readonly enableNodePublicIP?: boolean;
    /**
     * Specifies whether each node is allocated its own public IPv6 address. This is only supported on secondary node types with custom Load Balancers.
     */
    readonly enableNodePublicIPv6?: boolean;
    /**
     * Specifies whether the node type should be overprovisioned. It is only allowed for stateless node types.
     */
    readonly enableOverProvisioning?: boolean;
    /**
     * The range of ephemeral ports that nodes in this node type should be configured with.
     */
    readonly ephemeralPorts?: types.outputs.EndpointRangeDescriptionResponse;
    /**
     * Specifies the eviction policy for virtual machines in a SPOT node type. Default is Delete.
     */
    readonly evictionPolicy?: string;
    /**
     * Indicates the node type uses its own frontend configurations instead of the default one for the cluster. This setting can only be specified for non-primary node types and can not be added or removed after the node type is created.
     */
    readonly frontendConfigurations?: types.outputs.FrontendConfigurationResponse[];
    /**
     * Specifies the full host group resource Id. This property is used for deploying on azure dedicated hosts.
     */
    readonly hostGroupId?: string;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Indicates the Service Fabric system services for the cluster will run on this node type. This setting cannot be changed once the node type is created.
     */
    readonly isPrimary: boolean;
    /**
     * Indicates whether the node type will be Spot Virtual Machines. Azure will allocate the VMs if there is capacity available and the VMs can be evicted at any time.
     */
    readonly isSpotVM?: boolean;
    /**
     * Indicates if the node type can only host Stateless workloads.
     */
    readonly isStateless?: boolean;
    /**
     * Indicates if scale set associated with the node type can be composed of multiple placement groups.
     */
    readonly multiplePlacementGroups?: boolean;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Specifies the NAT configuration on default public Load Balancer for the node type. This is only supported for node types use the default public Load Balancer.
     */
    readonly natConfigurations?: types.outputs.NodeTypeNatConfigResponse[];
    /**
     * Specifies the resource id of a NAT Gateway to attach to the subnet of this node type. Node type must use custom load balancer.
     */
    readonly natGatewayId?: string;
    /**
     * The Network Security Rules for this node type. This setting can only be specified for node types that are configured with frontend configurations.
     */
    readonly networkSecurityRules?: types.outputs.NetworkSecurityRuleResponse[];
    /**
     * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
     */
    readonly placementProperties?: {[key: string]: string};
    /**
     * The provisioning state of the node type resource.
     */
    readonly provisioningState: string;
    /**
     * Specifies whether secure boot should be enabled on the nodeType. Can only be used with TrustedLaunch SecurityType
     */
    readonly secureBootEnabled?: boolean;
    /**
     * Specifies the security type of the nodeType. Only Standard and TrustedLaunch are currently supported
     */
    readonly securityType?: string;
    /**
     * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version.
     */
    readonly serviceArtifactReferenceId?: string;
    /**
     * The node type sku.
     */
    readonly sku?: types.outputs.NodeTypeSkuResponse;
    /**
     * Indicates the time duration after which the platform will not try to restore the VMSS SPOT instances specified as ISO 8601.
     */
    readonly spotRestoreTimeout?: string;
    /**
     * Indicates the resource id of the subnet for the node type.
     */
    readonly subnetId?: string;
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
     * Specifies whether the use public load balancer. If not specified and the node type doesn't have its own frontend configuration, it will be attached to the default load balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is true, then the frontend has to be an Internal Load Balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is false or not set, then the custom load balancer must include a public load balancer to provide outbound connectivity.
     */
    readonly useDefaultPublicLoadBalancer?: boolean;
    /**
     * Indicates whether to use ephemeral os disk. The sku selected on the vmSize property needs to support this feature.
     */
    readonly useEphemeralOSDisk?: boolean;
    /**
     * Specifies whether to use the temporary disk for the service fabric data root, in which case no managed data disk will be attached and the temporary disk will be used. It is only allowed for stateless node types.
     */
    readonly useTempDataDisk?: boolean;
    /**
     * Set of extensions that should be installed onto the virtual machines.
     */
    readonly vmExtensions?: types.outputs.VMSSExtensionResponse[];
    /**
     * The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
     */
    readonly vmImageOffer?: string;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
     */
    readonly vmImagePlan?: types.outputs.VmImagePlanResponse;
    /**
     * The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
     */
    readonly vmImagePublisher?: string;
    /**
     * Indicates the resource id of the vm image. This parameter is used for custom vm image.
     */
    readonly vmImageResourceId?: string;
    /**
     * The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
     */
    readonly vmImageSku?: string;
    /**
     * The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
     */
    readonly vmImageVersion?: string;
    /**
     * The number of nodes in the node type. <br /><br />**Values:** <br />-1 - Use when auto scale rules are configured or sku.capacity is defined <br /> 0 - Not supported <br /> >0 - Use for manual scale.
     */
    readonly vmInstanceCount: number;
    /**
     * Identities to assign to the virtual machine scale set under the node type.
     */
    readonly vmManagedIdentity?: types.outputs.VmManagedIdentityResponse;
    /**
     * The secrets to install in the virtual machines.
     */
    readonly vmSecrets?: types.outputs.VaultSecretGroupResponse[];
    /**
     * Specifies the actions to be performed on the vms before bootstrapping the service fabric runtime.
     */
    readonly vmSetupActions?: string[];
    /**
     * Indicates the resource id of the vm shared galleries image. This parameter is used for custom vm image.
     */
    readonly vmSharedGalleryImageId?: string;
    /**
     * The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3.
     */
    readonly vmSize?: string;
    /**
     * Specifies the availability zones where the node type would span across. If the cluster is not spanning across availability zones, initiates az migration for the cluster.
     */
    readonly zones?: string[];
}
/**
 * Get a Service Fabric node type of a given managed cluster.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-11-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNodeTypeOutput(args: GetNodeTypeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNodeTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getNodeType", {
        "clusterName": args.clusterName,
        "nodeTypeName": args.nodeTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNodeTypeOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the node type.
     */
    nodeTypeName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}