import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a virtual network link to the specified Private DNS zone.
 *
 * Uses Azure REST API version 2024-06-01.
 *
 * Other available API versions: 2018-09-01, 2020-01-01, 2020-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native privatedns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkLink(args: GetVirtualNetworkLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:privatedns:getVirtualNetworkLink", {
        "privateZoneName": args.privateZoneName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkLinkName": args.virtualNetworkLinkName,
    }, opts);
}

export interface GetVirtualNetworkLinkArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName: string;
}

/**
 * Describes a link to virtual network for a Private DNS zone.
 */
export interface GetVirtualNetworkLinkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ETag of the virtual network link.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
     */
    readonly id: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    readonly registrationEnabled?: boolean;
    /**
     * The resolution policy on the virtual network link. Only applicable for virtual network links to privatelink zones, and for A,AAAA,CNAME queries. When set to 'NxDomainRedirect', Azure DNS resolver falls back to public resolution if private dns query resolution results in non-existent domain response.
     */
    readonly resolutionPolicy?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
    /**
     * The reference of the virtual network.
     */
    readonly virtualNetwork?: types.outputs.SubResourceResponse;
    /**
     * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly virtualNetworkLinkState: string;
}
/**
 * Gets a virtual network link to the specified Private DNS zone.
 *
 * Uses Azure REST API version 2024-06-01.
 *
 * Other available API versions: 2018-09-01, 2020-01-01, 2020-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native privatedns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkLinkOutput(args: GetVirtualNetworkLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:privatedns:getVirtualNetworkLink", {
        "privateZoneName": args.privateZoneName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkLinkName": args.virtualNetworkLinkName,
    }, opts);
}

export interface GetVirtualNetworkLinkOutputArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName: pulumi.Input<string>;
}