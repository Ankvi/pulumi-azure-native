import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone.
 *
 * Uses Azure REST API version 2024-06-01.
 *
 * Other available API versions: 2018-09-01, 2020-01-01, 2020-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native privatedns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateRecordSet extends pulumi.CustomResource {
    /**
     * Get an existing PrivateRecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateRecordSet {
        return new PrivateRecordSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:privatedns:PrivateRecordSet';

    /**
     * Returns true if the given object is an instance of PrivateRecordSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateRecordSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateRecordSet.__pulumiType;
    }

    /**
     * The list of A records in the record set.
     */
    public readonly aRecords!: pulumi.Output<types.outputs.ARecordResponse[] | undefined>;
    /**
     * The list of AAAA records in the record set.
     */
    public readonly aaaaRecords!: pulumi.Output<types.outputs.AaaaRecordResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The CNAME record in the record set.
     */
    public readonly cnameRecord!: pulumi.Output<types.outputs.CnameRecordResponse | undefined>;
    /**
     * The ETag of the record set.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Fully qualified domain name of the record set.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Is the record set auto-registered in the Private DNS zone through a virtual network link?
     */
    public /*out*/ readonly isAutoRegistered!: pulumi.Output<boolean>;
    /**
     * The metadata attached to the record set.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The list of MX records in the record set.
     */
    public readonly mxRecords!: pulumi.Output<types.outputs.MxRecordResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of PTR records in the record set.
     */
    public readonly ptrRecords!: pulumi.Output<types.outputs.PtrRecordResponse[] | undefined>;
    /**
     * The SOA record in the record set.
     */
    public readonly soaRecord!: pulumi.Output<types.outputs.SoaRecordResponse | undefined>;
    /**
     * The list of SRV records in the record set.
     */
    public readonly srvRecords!: pulumi.Output<types.outputs.SrvRecordResponse[] | undefined>;
    /**
     * The TTL (time-to-live) of the records in the record set.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * The list of TXT records in the record set.
     */
    public readonly txtRecords!: pulumi.Output<types.outputs.TxtRecordResponse[] | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateRecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateRecordSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateZoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateZoneName'");
            }
            if ((!args || args.recordType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aRecords"] = args ? args.aRecords : undefined;
            resourceInputs["aaaaRecords"] = args ? args.aaaaRecords : undefined;
            resourceInputs["cnameRecord"] = args ? args.cnameRecord : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mxRecords"] = args ? args.mxRecords : undefined;
            resourceInputs["privateZoneName"] = args ? args.privateZoneName : undefined;
            resourceInputs["ptrRecords"] = args ? args.ptrRecords : undefined;
            resourceInputs["recordType"] = args ? args.recordType : undefined;
            resourceInputs["relativeRecordSetName"] = args ? args.relativeRecordSetName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["soaRecord"] = args ? args.soaRecord : undefined;
            resourceInputs["srvRecords"] = args ? args.srvRecords : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["txtRecords"] = args ? args.txtRecords : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["isAutoRegistered"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aRecords"] = undefined /*out*/;
            resourceInputs["aaaaRecords"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cnameRecord"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["isAutoRegistered"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["mxRecords"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ptrRecords"] = undefined /*out*/;
            resourceInputs["soaRecord"] = undefined /*out*/;
            resourceInputs["srvRecords"] = undefined /*out*/;
            resourceInputs["ttl"] = undefined /*out*/;
            resourceInputs["txtRecords"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200601:PrivateRecordSet" }, { type: "azure-native:network/v20240601:PrivateRecordSet" }, { type: "azure-native:network:PrivateRecordSet" }, { type: "azure-native:privatedns/v20180901:PrivateRecordSet" }, { type: "azure-native:privatedns/v20200101:PrivateRecordSet" }, { type: "azure-native:privatedns/v20200601:PrivateRecordSet" }, { type: "azure-native:privatedns/v20240601:PrivateRecordSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateRecordSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateRecordSet resource.
 */
export interface PrivateRecordSetArgs {
    /**
     * The list of A records in the record set.
     */
    aRecords?: pulumi.Input<pulumi.Input<types.inputs.ARecordArgs>[]>;
    /**
     * The list of AAAA records in the record set.
     */
    aaaaRecords?: pulumi.Input<pulumi.Input<types.inputs.AaaaRecordArgs>[]>;
    /**
     * The CNAME record in the record set.
     */
    cnameRecord?: pulumi.Input<types.inputs.CnameRecordArgs>;
    /**
     * The metadata attached to the record set.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of MX records in the record set.
     */
    mxRecords?: pulumi.Input<pulumi.Input<types.inputs.MxRecordArgs>[]>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: pulumi.Input<string>;
    /**
     * The list of PTR records in the record set.
     */
    ptrRecords?: pulumi.Input<pulumi.Input<types.inputs.PtrRecordArgs>[]>;
    /**
     * The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the Private DNS zone is created).
     */
    recordType: pulumi.Input<string>;
    /**
     * The name of the record set, relative to the name of the zone.
     */
    relativeRecordSetName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
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
     * The TTL (time-to-live) of the records in the record set.
     */
    ttl?: pulumi.Input<number>;
    /**
     * The list of TXT records in the record set.
     */
    txtRecords?: pulumi.Input<pulumi.Input<types.inputs.TxtRecordArgs>[]>;
}