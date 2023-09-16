import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.
 * Azure REST API version: 2020-06-01.
 */
export function getPrivateZone(args: GetPrivateZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateZoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateZone", {
        "privateZoneName": args.privateZoneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateZoneArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes a Private DNS zone.
 */
export interface GetPrivateZoneResult {
    /**
     * The ETag of the zone.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
     */
    readonly id: string;
    /**
     * Private zone internal Id
     */
    readonly internalId: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfRecordSets: number;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinks: number;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfVirtualNetworkLinksWithRegistration: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfRecordSets: number;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinks: number;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfVirtualNetworkLinksWithRegistration: number;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
}
/**
 * Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.
 * Azure REST API version: 2020-06-01.
 */
export function getPrivateZoneOutput(args: GetPrivateZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateZoneResult> {
    return pulumi.output(args).apply((a: any) => getPrivateZone(a, opts))
}

export interface GetPrivateZoneOutputArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
