import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a virtual network link to a DNS forwarding ruleset.
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-07-01-preview.
 */
export function getPrivateResolverVirtualNetworkLink(args: GetPrivateResolverVirtualNetworkLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateResolverVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateResolverVirtualNetworkLink", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkLinkName": args.virtualNetworkLinkName,
    }, opts);
}

export interface GetPrivateResolverVirtualNetworkLinkArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName: string;
}

/**
 * Describes a virtual network link.
 */
export interface GetPrivateResolverVirtualNetworkLinkResult {
    /**
     * ETag of the virtual network link.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Metadata attached to the virtual network link.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the virtual network link. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Gets properties of a virtual network link to a DNS forwarding ruleset.
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-07-01-preview.
 */
export function getPrivateResolverVirtualNetworkLinkOutput(args: GetPrivateResolverVirtualNetworkLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateResolverVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getPrivateResolverVirtualNetworkLink", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkLinkName": args.virtualNetworkLinkName,
    }, opts);
}

export interface GetPrivateResolverVirtualNetworkLinkOutputArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName: pulumi.Input<string>;
}