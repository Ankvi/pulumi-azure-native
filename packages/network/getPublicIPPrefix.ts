import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified public IP prefix in a specified resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getPublicIPPrefix(args: GetPublicIPPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPPrefixResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPublicIPPrefix", {
        "expand": args.expand,
        "publicIpPrefixName": args.publicIpPrefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPublicIPPrefixArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the public IP prefix.
     */
    publicIpPrefixName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Public IP prefix resource.
 */
export interface GetPublicIPPrefixResult {
    /**
     * The customIpPrefix that this prefix is associated with.
     */
    readonly customIPPrefix?: types.outputs.network.SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the public ip address.
     */
    readonly extendedLocation?: types.outputs.network.ExtendedLocationResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The allocated Prefix.
     */
    readonly ipPrefix: string;
    /**
     * The list of tags associated with the public IP prefix.
     */
    readonly ipTags?: types.outputs.network.IpTagResponse[];
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    readonly loadBalancerFrontendIpConfiguration: types.outputs.network.SubResourceResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * NatGateway of Public IP Prefix.
     */
    readonly natGateway?: types.outputs.network.NatGatewayResponse;
    /**
     * The Length of the Public IP Prefix.
     */
    readonly prefixLength?: number;
    /**
     * The provisioning state of the public IP prefix resource.
     */
    readonly provisioningState: string;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: string;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    readonly publicIPAddresses: types.outputs.network.ReferencedPublicIpAddressResponse[];
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    readonly resourceGuid: string;
    /**
     * The public IP prefix SKU.
     */
    readonly sku?: types.outputs.network.PublicIPPrefixSkuResponse;
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
 * Gets the specified public IP prefix in a specified resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getPublicIPPrefixOutput(args: GetPublicIPPrefixOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPublicIPPrefixResult> {
    return pulumi.output(args).apply((a: any) => getPublicIPPrefix(a, opts))
}

export interface GetPublicIPPrefixOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the public IP prefix.
     */
    publicIpPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
