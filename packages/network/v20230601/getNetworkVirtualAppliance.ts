import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Network Virtual Appliance.
 */
export function getNetworkVirtualAppliance(args: GetNetworkVirtualApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getNetworkVirtualAppliance", {
        "expand": args.expand,
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkVirtualApplianceArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of Network Virtual Appliance.
     */
    networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * NetworkVirtualAppliance Resource.
 */
export interface GetNetworkVirtualApplianceResult {
    /**
     * Details required for Additional Network Interface.
     */
    readonly additionalNics?: types.outputs.VirtualApplianceAdditionalNicPropertiesResponse[];
    /**
     * Address Prefix.
     */
    readonly addressPrefix: string;
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    readonly bootStrapConfigurationBlobs?: string[];
    /**
     * CloudInitConfiguration string in plain text.
     */
    readonly cloudInitConfiguration?: string;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    readonly cloudInitConfigurationBlobs?: string[];
    /**
     * The delegation for the Virtual Appliance
     */
    readonly delegation?: types.outputs.DelegationPropertiesResponse;
    /**
     * The deployment type. PartnerManaged for the SaaS NVA
     */
    readonly deploymentType: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * List of references to InboundSecurityRules.
     */
    readonly inboundSecurityRules: types.outputs.SubResourceResponse[];
    /**
     * List of Resource Uri of Public IPs for Internet Ingress Scenario.
     */
    readonly internetIngressPublicIps?: types.outputs.InternetIngressPublicIpsPropertiesResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Network Virtual Appliance SKU.
     */
    readonly nvaSku?: types.outputs.VirtualApplianceSkuPropertiesResponse;
    /**
     * The delegation for the Virtual Appliance
     */
    readonly partnerManagedResource?: types.outputs.PartnerManagedResourcePropertiesResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Public key for SSH login.
     */
    readonly sshPublicKey?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported.
     */
    readonly virtualApplianceAsn?: number;
    /**
     * List of references to VirtualApplianceConnections.
     */
    readonly virtualApplianceConnections: types.outputs.SubResourceResponse[];
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    readonly virtualApplianceNics: types.outputs.VirtualApplianceNicPropertiesResponse[];
    /**
     * List of references to VirtualApplianceSite.
     */
    readonly virtualApplianceSites: types.outputs.SubResourceResponse[];
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    readonly virtualHub?: types.outputs.SubResourceResponse;
}
/**
 * Gets the specified Network Virtual Appliance.
 */
export function getNetworkVirtualApplianceOutput(args: GetNetworkVirtualApplianceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkVirtualApplianceResult> {
    return pulumi.output(args).apply((a: any) => getNetworkVirtualAppliance(a, opts))
}

export interface GetNetworkVirtualApplianceOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
