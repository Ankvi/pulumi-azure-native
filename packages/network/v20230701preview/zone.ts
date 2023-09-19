import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a DNS zone.
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Zone {
        return new Zone(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230701preview:Zone';

    /**
     * Returns true if the given object is an instance of Zone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Zone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Zone.__pulumiType;
    }

    /**
     * The etag of the zone.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly maxNumberOfRecordSets!: pulumi.Output<number>;
    /**
     * The maximum number of records per record set that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly maxNumberOfRecordsPerRecordSet!: pulumi.Output<number>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly nameServers!: pulumi.Output<string[]>;
    /**
     * The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly numberOfRecordSets!: pulumi.Output<number>;
    /**
     * A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
     */
    public readonly registrationVirtualNetworks!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
     */
    public readonly resolutionVirtualNetworks!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * The list of signing keys.
     */
    public /*out*/ readonly signingKeys!: pulumi.Output<types.outputs.SigningKeyResponse[]>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The type of this DNS zone (Public or Private).
     */
    public readonly zoneType!: pulumi.Output<string | undefined>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registrationVirtualNetworks"] = args ? args.registrationVirtualNetworks : undefined;
            resourceInputs["resolutionVirtualNetworks"] = args ? args.resolutionVirtualNetworks : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
            resourceInputs["zoneType"] = (args ? args.zoneType : undefined) ?? "Public";
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordSets"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordsPerRecordSet"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nameServers"] = undefined /*out*/;
            resourceInputs["numberOfRecordSets"] = undefined /*out*/;
            resourceInputs["signingKeys"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordSets"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordsPerRecordSet"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nameServers"] = undefined /*out*/;
            resourceInputs["numberOfRecordSets"] = undefined /*out*/;
            resourceInputs["registrationVirtualNetworks"] = undefined /*out*/;
            resourceInputs["resolutionVirtualNetworks"] = undefined /*out*/;
            resourceInputs["signingKeys"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:Zone" }, { type: "azure-native:network/v20150504preview:Zone" }, { type: "azure-native:network/v20160401:Zone" }, { type: "azure-native:network/v20170901:Zone" }, { type: "azure-native:network/v20171001:Zone" }, { type: "azure-native:network/v20180301preview:Zone" }, { type: "azure-native:network/v20180501:Zone" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Zone.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private.
     */
    registrationVirtualNetworks?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private.
     */
    resolutionVirtualNetworks?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the DNS zone (without a terminating dot).
     */
    zoneName?: pulumi.Input<string>;
    /**
     * The type of this DNS zone (Public or Private).
     */
    zoneType?: pulumi.Input<types.enums.ZoneType>;
}
