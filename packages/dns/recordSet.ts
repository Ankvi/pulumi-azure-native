import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a DNS record set (a collection of DNS records with the same name and type).
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2015-05-04-preview, 2016-04-01, 2017-09-01, 2017-10-01, 2018-03-01-preview, 2018-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RecordSet extends pulumi.CustomResource {
    /**
     * Get an existing RecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RecordSet {
        return new RecordSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dns:RecordSet';

    /**
     * Returns true if the given object is an instance of RecordSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecordSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecordSet.__pulumiType;
    }

    /**
     * The list of A records in the record set.
     */
    declare public readonly aRecords: pulumi.Output<types.outputs.ARecordResponse[] | undefined>;
    /**
     * The list of AAAA records in the record set.
     */
    declare public readonly aaaaRecords: pulumi.Output<types.outputs.AaaaRecordResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The list of CAA records in the record set.
     */
    declare public readonly caaRecords: pulumi.Output<types.outputs.CaaRecordResponse[] | undefined>;
    /**
     * The CNAME record in the  record set.
     */
    declare public readonly cnameRecord: pulumi.Output<types.outputs.CnameRecordResponse | undefined>;
    /**
     * The list of DS records in the record set.
     */
    declare public readonly dsRecords: pulumi.Output<types.outputs.DsRecordResponse[] | undefined>;
    /**
     * The etag of the record set.
     */
    declare public /*out*/ readonly etag: pulumi.Output<string | undefined>;
    /**
     * Fully qualified domain name of the record set.
     */
    declare public /*out*/ readonly fqdn: pulumi.Output<string>;
    /**
     * The metadata attached to the record set.
     */
    declare public readonly metadata: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The list of MX records in the record set.
     */
    declare public readonly mxRecords: pulumi.Output<types.outputs.MxRecordResponse[] | undefined>;
    /**
     * The name of the resource
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The list of NAPTR records in the record set.
     */
    declare public readonly naptrRecords: pulumi.Output<types.outputs.NaptrRecordResponse[] | undefined>;
    /**
     * The list of NS records in the record set.
     */
    declare public readonly nsRecords: pulumi.Output<types.outputs.NsRecordResponse[] | undefined>;
    /**
     * provisioning State of the record set.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * The list of PTR records in the record set.
     */
    declare public readonly ptrRecords: pulumi.Output<types.outputs.PtrRecordResponse[] | undefined>;
    /**
     * The SOA record in the record set.
     */
    declare public readonly soaRecord: pulumi.Output<types.outputs.SoaRecordResponse | undefined>;
    /**
     * The list of SRV records in the record set.
     */
    declare public readonly srvRecords: pulumi.Output<types.outputs.SrvRecordResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * A reference to an azure resource from where the dns resource value is taken.
     */
    declare public readonly targetResource: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The list of TLSA records in the record set.
     */
    declare public readonly tlsaRecords: pulumi.Output<types.outputs.TlsaRecordResponse[] | undefined>;
    /**
     * A reference to an azure traffic manager profile resource from where the dns resource value is taken.
     */
    declare public readonly trafficManagementProfile: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    declare public readonly ttl: pulumi.Output<number | undefined>;
    /**
     * The list of TXT records in the record set.
     */
    declare public readonly txtRecords: pulumi.Output<types.outputs.TxtRecordResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a RecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.recordType === undefined && !opts.urn) {
                throw new Error("Missing required property 'recordType'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (args?.zoneName === undefined && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["aRecords"] = args?.aRecords;
            resourceInputs["aaaaRecords"] = args?.aaaaRecords;
            resourceInputs["caaRecords"] = args?.caaRecords;
            resourceInputs["cnameRecord"] = args?.cnameRecord;
            resourceInputs["dsRecords"] = args?.dsRecords;
            resourceInputs["metadata"] = args?.metadata;
            resourceInputs["mxRecords"] = args?.mxRecords;
            resourceInputs["naptrRecords"] = args?.naptrRecords;
            resourceInputs["nsRecords"] = args?.nsRecords;
            resourceInputs["ptrRecords"] = args?.ptrRecords;
            resourceInputs["recordType"] = args?.recordType;
            resourceInputs["relativeRecordSetName"] = args?.relativeRecordSetName;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["soaRecord"] = args?.soaRecord;
            resourceInputs["srvRecords"] = args?.srvRecords;
            resourceInputs["targetResource"] = args?.targetResource;
            resourceInputs["tlsaRecords"] = args?.tlsaRecords;
            resourceInputs["trafficManagementProfile"] = args?.trafficManagementProfile;
            resourceInputs["ttl"] = args?.ttl;
            resourceInputs["txtRecords"] = args?.txtRecords;
            resourceInputs["zoneName"] = args?.zoneName;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aRecords"] = undefined /*out*/;
            resourceInputs["aaaaRecords"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["caaRecords"] = undefined /*out*/;
            resourceInputs["cnameRecord"] = undefined /*out*/;
            resourceInputs["dsRecords"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["mxRecords"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["naptrRecords"] = undefined /*out*/;
            resourceInputs["nsRecords"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ptrRecords"] = undefined /*out*/;
            resourceInputs["soaRecord"] = undefined /*out*/;
            resourceInputs["srvRecords"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetResource"] = undefined /*out*/;
            resourceInputs["tlsaRecords"] = undefined /*out*/;
            resourceInputs["trafficManagementProfile"] = undefined /*out*/;
            resourceInputs["ttl"] = undefined /*out*/;
            resourceInputs["txtRecords"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dns/v20150504preview:RecordSet" }, { type: "azure-native:dns/v20160401:RecordSet" }, { type: "azure-native:dns/v20170901:RecordSet" }, { type: "azure-native:dns/v20171001:RecordSet" }, { type: "azure-native:dns/v20180301preview:RecordSet" }, { type: "azure-native:dns/v20180501:RecordSet" }, { type: "azure-native:dns/v20230701preview:RecordSet" }, { type: "azure-native:network/v20180501:RecordSet" }, { type: "azure-native:network/v20230701preview:RecordSet" }, { type: "azure-native:network:RecordSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RecordSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RecordSet resource.
 */
export interface RecordSetArgs {
    /**
     * The list of A records in the record set.
     */
    aRecords?: pulumi.Input<pulumi.Input<types.inputs.ARecordArgs>[]>;
    /**
     * The list of AAAA records in the record set.
     */
    aaaaRecords?: pulumi.Input<pulumi.Input<types.inputs.AaaaRecordArgs>[]>;
    /**
     * The list of CAA records in the record set.
     */
    caaRecords?: pulumi.Input<pulumi.Input<types.inputs.CaaRecordArgs>[]>;
    /**
     * The CNAME record in the  record set.
     */
    cnameRecord?: pulumi.Input<types.inputs.CnameRecordArgs>;
    /**
     * The list of DS records in the record set.
     */
    dsRecords?: pulumi.Input<pulumi.Input<types.inputs.DsRecordArgs>[]>;
    /**
     * The metadata attached to the record set.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of MX records in the record set.
     */
    mxRecords?: pulumi.Input<pulumi.Input<types.inputs.MxRecordArgs>[]>;
    /**
     * The list of NAPTR records in the record set.
     */
    naptrRecords?: pulumi.Input<pulumi.Input<types.inputs.NaptrRecordArgs>[]>;
    /**
     * The list of NS records in the record set.
     */
    nsRecords?: pulumi.Input<pulumi.Input<types.inputs.NsRecordArgs>[]>;
    /**
     * The list of PTR records in the record set.
     */
    ptrRecords?: pulumi.Input<pulumi.Input<types.inputs.PtrRecordArgs>[]>;
    /**
     * The type of DNS record in this record set.
     */
    recordType: pulumi.Input<string>;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SOA record in the record set.
     */
    soaRecord?: pulumi.Input<types.inputs.SoaRecordArgs>;
    /**
     * The list of SRV records in the record set.
     */
    srvRecords?: pulumi.Input<pulumi.Input<types.inputs.SrvRecordArgs>[]>;
    /**
     * A reference to an azure resource from where the dns resource value is taken.
     */
    targetResource?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The list of TLSA records in the record set.
     */
    tlsaRecords?: pulumi.Input<pulumi.Input<types.inputs.TlsaRecordArgs>[]>;
    /**
     * A reference to an azure traffic manager profile resource from where the dns resource value is taken.
     */
    trafficManagementProfile?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    ttl?: pulumi.Input<number>;
    /**
     * The list of TXT records in the record set.
     */
    txtRecords?: pulumi.Input<pulumi.Input<types.inputs.TxtRecordArgs>[]>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName: pulumi.Input<string>;
}