import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
 *
 * Uses Azure REST API version 2018-05-01.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export function getZone(args: GetZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetZoneResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getZone", {
        "resourceGroupName": args.resourceGroupName,
        "zoneName": args.zoneName,
    }, opts);
}

export interface GetZoneArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: string;
}

/**
 * Describes a DNS zone.
 */
export interface GetZoneResult {
    /**
     * The etag of the zone.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfRecordSets: number;
    /**
     * The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly maxNumberOfRecordsPerRecordSet: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly nameServers: string[];
    /**
     * The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly numberOfRecordSets: number;
    /**
     * A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
     */
    readonly registrationVirtualNetworks?: types.outputs.SubResourceResponse[];
    /**
     * A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
     */
    readonly resolutionVirtualNetworks?: types.outputs.SubResourceResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The type of this DNS zone (Public or Private).
     */
    readonly zoneType?: string;
}
/**
 * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
 *
 * Uses Azure REST API version 2018-05-01.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export function getZoneOutput(args: GetZoneOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetZoneResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getZone", {
        "resourceGroupName": args.resourceGroupName,
        "zoneName": args.zoneName,
    }, opts);
}

export interface GetZoneOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: pulumi.Input<string>;
}