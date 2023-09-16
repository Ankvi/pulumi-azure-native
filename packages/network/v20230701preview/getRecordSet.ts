import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a record set.
 */
export function getRecordSet(args: GetRecordSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRecordSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230701preview:getRecordSet", {
        "recordType": args.recordType,
        "relativeRecordSetName": args.relativeRecordSetName,
        "resourceGroupName": args.resourceGroupName,
        "zoneName": args.zoneName,
    }, opts);
}

export interface GetRecordSetArgs {
    /**
     * The type of DNS record in this record set.
     */
    recordType: string;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: string;
}

/**
 * Describes a DNS record set (a collection of DNS records with the same name and type).
 */
export interface GetRecordSetResult {
    /**
     * The list of A records in the record set.
     */
    readonly aRecords?: types.outputs.network.v20230701preview.ARecordResponse[];
    /**
     * The list of AAAA records in the record set.
     */
    readonly aaaaRecords?: types.outputs.network.v20230701preview.AaaaRecordResponse[];
    /**
     * The list of CAA records in the record set.
     */
    readonly caaRecords?: types.outputs.network.v20230701preview.CaaRecordResponse[];
    /**
     * The CNAME record in the  record set.
     */
    readonly cnameRecord?: types.outputs.network.v20230701preview.CnameRecordResponse;
    /**
     * The list of DS records in the record set.
     */
    readonly dsRecords?: types.outputs.network.v20230701preview.DsRecordResponse[];
    /**
     * The etag of the record set.
     */
    readonly etag?: string;
    /**
     * Fully qualified domain name of the record set.
     */
    readonly fqdn: string;
    /**
     * The ID of the record set.
     */
    readonly id: string;
    /**
     * The metadata attached to the record set.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The list of MX records in the record set.
     */
    readonly mxRecords?: types.outputs.network.v20230701preview.MxRecordResponse[];
    /**
     * The name of the record set.
     */
    readonly name: string;
    /**
     * The list of NAPTR records in the record set.
     */
    readonly naptrRecords?: types.outputs.network.v20230701preview.NaptrRecordResponse[];
    /**
     * The list of NS records in the record set.
     */
    readonly nsRecords?: types.outputs.network.v20230701preview.NsRecordResponse[];
    /**
     * provisioning State of the record set.
     */
    readonly provisioningState: string;
    /**
     * The list of PTR records in the record set.
     */
    readonly ptrRecords?: types.outputs.network.v20230701preview.PtrRecordResponse[];
    /**
     * The SOA record in the record set.
     */
    readonly soaRecord?: types.outputs.network.v20230701preview.SoaRecordResponse;
    /**
     * The list of SRV records in the record set.
     */
    readonly srvRecords?: types.outputs.network.v20230701preview.SrvRecordResponse[];
    /**
     * A reference to an azure resource from where the dns resource value is taken.
     */
    readonly targetResource?: types.outputs.network.v20230701preview.SubResourceResponse;
    /**
     * The list of TLSA records in the record set.
     */
    readonly tlsaRecords?: types.outputs.network.v20230701preview.TlsaRecordResponse[];
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    readonly ttl?: number;
    /**
     * The list of TXT records in the record set.
     */
    readonly txtRecords?: types.outputs.network.v20230701preview.TxtRecordResponse[];
    /**
     * The type of the record set.
     */
    readonly type: string;
}
/**
 * Gets a record set.
 */
export function getRecordSetOutput(args: GetRecordSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecordSetResult> {
    return pulumi.output(args).apply((a: any) => getRecordSet(a, opts))
}

export interface GetRecordSetOutputArgs {
    /**
     * The type of DNS record in this record set.
     */
    recordType: pulumi.Input<string>;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: pulumi.Input<string>;
}
