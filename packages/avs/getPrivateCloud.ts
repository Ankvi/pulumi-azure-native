import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PrivateCloud
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateCloud(args: GetPrivateCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getPrivateCloud", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateCloudArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A private cloud resource
 */
export interface GetPrivateCloudResult {
    /**
     * Properties describing how the cloud is distributed across availability zones
     */
    readonly availability?: types.outputs.AvailabilityPropertiesResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * An ExpressRoute Circuit
     */
    readonly circuit?: types.outputs.CircuitResponse;
    /**
     * The type of DNS zone to use.
     */
    readonly dnsZoneType?: string;
    /**
     * Customer managed key encryption, can be enabled or disabled
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * The endpoints
     */
    readonly endpoints: types.outputs.EndpointsResponse;
    /**
     * Array of additional networks noncontiguous with networkBlock. Networks must be
     * unique and non-overlapping across VNet in your subscription, on-premise, and
     * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
     * (A.B.C.D/X).
     */
    readonly extendedNetworkBlocks?: string[];
    /**
     * Array of cloud link IDs from other clouds that connect to this one
     */
    readonly externalCloudLinks: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * vCenter Single Sign On Identity Sources
     */
    readonly identitySources?: types.outputs.IdentitySourceResponse[];
    /**
     * Connectivity to internet is enabled or disabled
     */
    readonly internet?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The default cluster used for management
     */
    readonly managementCluster: types.outputs.ManagementClusterResponse;
    /**
     * Network used to access vCenter Server and NSX-T Manager
     */
    readonly managementNetwork: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The block of addresses should be unique across VNet in your subscription as
     * well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
     * A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    readonly networkBlock: string;
    /**
     * Flag to indicate whether the private cloud has the quota for provisioned NSX
     * Public IP count raised from 64 to 1024
     */
    readonly nsxPublicIpQuotaRaised: string;
    /**
     * Thumbprint of the NSX-T Manager SSL certificate
     */
    readonly nsxtCertificateThumbprint: string;
    /**
     * Optionally, set the NSX-T Manager password when the private cloud is created
     */
    readonly nsxtPassword?: string;
    /**
     * Used for virtual machine cold migration, cloning, and snapshot migration
     */
    readonly provisioningNetwork: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * A secondary expressRoute circuit from a separate AZ. Only present in a
     * stretched private cloud
     */
    readonly secondaryCircuit?: types.outputs.CircuitResponse;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Thumbprint of the vCenter Server SSL certificate
     */
    readonly vcenterCertificateThumbprint: string;
    /**
     * Optionally, set the vCenter admin password when the private cloud is created
     */
    readonly vcenterPassword?: string;
    /**
     * Azure resource ID of the virtual network
     */
    readonly virtualNetworkId?: string;
    /**
     * Used for live migration of virtual machines
     */
    readonly vmotionNetwork: string;
}
/**
 * Get a PrivateCloud
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateCloudOutput(args: GetPrivateCloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getPrivateCloud", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateCloudOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}