import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Network Virtual Appliance.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkVirtualAppliance(args: GetNetworkVirtualApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkVirtualAppliance", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Network Profile containing configurations for Public and Private NIC.
     */
    readonly networkProfile?: types.outputs.NetworkVirtualAppliancePropertiesFormatResponseNetworkProfile;
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkVirtualApplianceOutput(args: GetNetworkVirtualApplianceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkVirtualApplianceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkVirtualAppliance", {
        "expand": args.expand,
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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