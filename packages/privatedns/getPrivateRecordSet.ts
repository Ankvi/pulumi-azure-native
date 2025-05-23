import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a record set.
 *
 * Uses Azure REST API version 2024-06-01.
 *
 * Other available API versions: 2018-09-01, 2020-01-01, 2020-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native privatedns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateRecordSet(args: GetPrivateRecordSetArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateRecordSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:privatedns:getPrivateRecordSet", {
        "privateZoneName": args.privateZoneName,
        "recordType": args.recordType,
        "relativeRecordSetName": args.relativeRecordSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateRecordSetArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: string;
    /**
     * The type of DNS record in this record set.
     */
    recordType: string;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone.
 */
export interface GetPrivateRecordSetResult {
    /**
     * The list of A records in the record set.
     */
    readonly aRecords?: types.outputs.ARecordResponse[];
    /**
     * The list of AAAA records in the record set.
     */
    readonly aaaaRecords?: types.outputs.AaaaRecordResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The CNAME record in the record set.
     */
    readonly cnameRecord?: types.outputs.CnameRecordResponse;
    /**
     * The ETag of the record set.
     */
    readonly etag?: string;
    /**
     * Fully qualified domain name of the record set.
     */
    readonly fqdn: string;
    /**
     * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
     */
    readonly id: string;
    /**
     * Is the record set auto-registered in the Private DNS zone through a virtual network link?
     */
    readonly isAutoRegistered: boolean;
    /**
     * The metadata attached to the record set.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The list of MX records in the record set.
     */
    readonly mxRecords?: types.outputs.MxRecordResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of PTR records in the record set.
     */
    readonly ptrRecords?: types.outputs.PtrRecordResponse[];
    /**
     * The SOA record in the record set.
     */
    readonly soaRecord?: types.outputs.SoaRecordResponse;
    /**
     * The list of SRV records in the record set.
     */
    readonly srvRecords?: types.outputs.SrvRecordResponse[];
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    readonly ttl?: number;
    /**
     * The list of TXT records in the record set.
     */
    readonly txtRecords?: types.outputs.TxtRecordResponse[];
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
}
/**
 * Gets a record set.
 *
 * Uses Azure REST API version 2024-06-01.
 *
 * Other available API versions: 2018-09-01, 2020-01-01, 2020-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native privatedns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateRecordSetOutput(args: GetPrivateRecordSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateRecordSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:privatedns:getPrivateRecordSet", {
        "privateZoneName": args.privateZoneName,
        "recordType": args.recordType,
        "relativeRecordSetName": args.relativeRecordSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateRecordSetOutputArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: pulumi.Input<string>;
    /**
     * The type of DNS record in this record set.
     */
    recordType: pulumi.Input<string>;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}