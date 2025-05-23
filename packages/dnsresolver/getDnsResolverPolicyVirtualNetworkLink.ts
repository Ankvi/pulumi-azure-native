import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a DNS resolver policy virtual network link.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsResolverPolicyVirtualNetworkLink(args: GetDnsResolverPolicyVirtualNetworkLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResolverPolicyVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dnsresolver:getDnsResolverPolicyVirtualNetworkLink", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "dnsResolverPolicyVirtualNetworkLinkName": args.dnsResolverPolicyVirtualNetworkLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverPolicyVirtualNetworkLinkArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: string;
    /**
     * The name of the DNS resolver policy virtual network link for the DNS resolver policy.
     */
    dnsResolverPolicyVirtualNetworkLinkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS resolver policy virtual network link.
 */
export interface GetDnsResolverPolicyVirtualNetworkLinkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * ETag of the DNS resolver policy virtual network link.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the DNS resolver policy virtual network link. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
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
     * The reference to the virtual network. This cannot be changed after creation.
     */
    readonly virtualNetwork: types.outputs.SubResourceResponse;
}
/**
 * Gets properties of a DNS resolver policy virtual network link.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export function getDnsResolverPolicyVirtualNetworkLinkOutput(args: GetDnsResolverPolicyVirtualNetworkLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnsResolverPolicyVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dnsresolver:getDnsResolverPolicyVirtualNetworkLink", {
        "dnsResolverPolicyName": args.dnsResolverPolicyName,
        "dnsResolverPolicyVirtualNetworkLinkName": args.dnsResolverPolicyVirtualNetworkLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDnsResolverPolicyVirtualNetworkLinkOutputArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: pulumi.Input<string>;
    /**
     * The name of the DNS resolver policy virtual network link for the DNS resolver policy.
     */
    dnsResolverPolicyVirtualNetworkLinkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}