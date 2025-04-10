import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private cloud resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
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
     * An ExpressRoute Circuit
     */
    readonly circuit?: types.outputs.CircuitResponse;
    /**
     * Customer managed key encryption, can be enabled or disabled
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * The endpoints
     */
    readonly endpoints: types.outputs.EndpointsResponse;
    /**
     * Array of cloud link IDs from other clouds that connect to this one
     */
    readonly externalCloudLinks: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The identity of the private cloud, if configured.
     */
    readonly identity?: types.outputs.PrivateCloudIdentityResponse;
    /**
     * vCenter Single Sign On Identity Sources
     */
    readonly identitySources?: types.outputs.IdentitySourceResponse[];
    /**
     * Connectivity to internet is enabled or disabled
     */
    readonly internet?: string;
    /**
     * Resource location
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
     * Resource name.
     */
    readonly name: string;
    /**
     * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    readonly networkBlock: string;
    /**
     * Flag to indicate whether the private cloud has the quota for provisioned NSX Public IP count raised from 64 to 1024
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
     * A secondary expressRoute circuit from a separate AZ. Only present in a stretched private cloud
     */
    readonly secondaryCircuit?: types.outputs.CircuitResponse;
    /**
     * The private cloud SKU
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
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
     * Used for live migration of virtual machines
     */
    readonly vmotionNetwork: string;
}
/**
 * A private cloud resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
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