import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified custom IP prefix in a specified resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getCustomIPPrefix(args: GetCustomIPPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomIPPrefixResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getCustomIPPrefix", {
        "customIpPrefixName": args.customIpPrefixName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomIPPrefixArgs {
    /**
     * The name of the custom IP prefix.
     */
    customIpPrefixName: string;
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Custom IP prefix resource.
 */
export interface GetCustomIPPrefixResult {
    /**
     * The ASN for CIDR advertising. Should be an integer as string.
     */
    readonly asn?: string;
    /**
     * Authorization message for WAN validation.
     */
    readonly authorizationMessage?: string;
    /**
     * The list of all Children for IPv6 /48 CustomIpPrefix.
     */
    readonly childCustomIpPrefixes: types.outputs.SubResourceResponse[];
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    readonly cidr?: string;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    readonly commissionedState?: string;
    /**
     * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
     */
    readonly customIpPrefixParent?: types.outputs.SubResourceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Whether to do express route advertise.
     */
    readonly expressRouteAdvertise?: boolean;
    /**
     * The extended location of the custom IP prefix.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The reason why resource is in failed state.
     */
    readonly failedReason: string;
    /**
     * The Geo for CIDR advertising. Should be an Geo code.
     */
    readonly geo?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Whether to Advertise the range to Internet.
     */
    readonly noInternetAdvertise?: boolean;
    /**
     * Type of custom IP prefix. Should be Singular, Parent, or Child.
     */
    readonly prefixType?: string;
    /**
     * The provisioning state of the custom IP prefix resource.
     */
    readonly provisioningState: string;
    /**
     * The list of all referenced PublicIpPrefixes.
     */
    readonly publicIpPrefixes: types.outputs.SubResourceResponse[];
    /**
     * The resource GUID property of the custom IP prefix resource.
     */
    readonly resourceGuid: string;
    /**
     * Signed message for WAN validation.
     */
    readonly signedMessage?: string;
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
 * Gets the specified custom IP prefix in a specified resource group.
 * Azure REST API version: 2023-02-01.
 */
export function getCustomIPPrefixOutput(args: GetCustomIPPrefixOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomIPPrefixResult> {
    return pulumi.output(args).apply((a: any) => getCustomIPPrefix(a, opts))
}

export interface GetCustomIPPrefixOutputArgs {
    /**
     * The name of the custom IP prefix.
     */
    customIpPrefixName: pulumi.Input<string>;
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
