import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified public IP address in a specified resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getPublicIPAddress(args: GetPublicIPAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPAddressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPublicIPAddress", {
        "expand": args.expand,
        "publicIpAddressName": args.publicIpAddressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicIPAddressArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the public IP address.
     */
    publicIpAddressName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Public IP address resource.
 */
export interface GetPublicIPAddressResult {
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    readonly ddosSettings?: types.outputs.DdosSettingsResponse;
    /**
     * Specify what happens to the public IP address when the VM using it is deleted
     */
    readonly deleteOption?: string;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    readonly dnsSettings?: types.outputs.PublicIPAddressDnsSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the public ip address.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The idle timeout of the public IP address.
     */
    readonly idleTimeoutInMinutes?: number;
    /**
     * The IP address associated with the public IP address resource.
     */
    readonly ipAddress?: string;
    /**
     * The IP configuration associated with the public IP address.
     */
    readonly ipConfiguration: types.outputs.IPConfigurationResponse;
    /**
     * The list of tags associated with the public IP address.
     */
    readonly ipTags?: types.outputs.IpTagResponse[];
    /**
     * The linked public IP address of the public IP address resource.
     */
    readonly linkedPublicIPAddress?: types.outputs.PublicIPAddressResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Migration phase of Public IP Address.
     */
    readonly migrationPhase?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The NatGateway for the Public IP address.
     */
    readonly natGateway?: types.outputs.NatGatewayResponse;
    /**
     * The provisioning state of the public IP address resource.
     */
    readonly provisioningState: string;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: string;
    /**
     * The public IP address allocation method.
     */
    readonly publicIPAllocationMethod?: string;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    readonly publicIPPrefix?: types.outputs.SubResourceResponse;
    /**
     * The resource GUID property of the public IP address resource.
     */
    readonly resourceGuid: string;
    /**
     * The service public IP address of the public IP address resource.
     */
    readonly servicePublicIPAddress?: types.outputs.PublicIPAddressResponse;
    /**
     * The public IP address SKU.
     */
    readonly sku?: types.outputs.PublicIPAddressSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified public IP address in a specified resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getPublicIPAddressOutput(args: GetPublicIPAddressOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPublicIPAddressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getPublicIPAddress", {
        "expand": args.expand,
        "publicIpAddressName": args.publicIpAddressName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicIPAddressOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the public IP address.
     */
    publicIpAddressName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}