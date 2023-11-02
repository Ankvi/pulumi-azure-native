import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Describes a Private DNS zone.
 * Azure REST API version: 2020-06-01. Prior API version in Azure Native 1.x: 2020-06-01.
 */
export class PrivateZone extends pulumi.CustomResource {
    /**
     * Get an existing PrivateZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateZone {
        return new PrivateZone(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PrivateZone';

    /**
     * Returns true if the given object is an instance of PrivateZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateZone.__pulumiType;
    }

    /**
     * The ETag of the zone.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Private zone internal Id
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly maxNumberOfRecordSets!: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly maxNumberOfVirtualNetworkLinks!: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly maxNumberOfVirtualNetworkLinksWithRegistration!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly numberOfRecordSets!: pulumi.Output<number>;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly numberOfVirtualNetworkLinks!: pulumi.Output<number>;
    /**
     * The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly numberOfVirtualNetworkLinksWithRegistration!: pulumi.Output<number>;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateZoneArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateZoneName"] = args ? args.privateZoneName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordSets"] = undefined /*out*/;
            resourceInputs["maxNumberOfVirtualNetworkLinks"] = undefined /*out*/;
            resourceInputs["maxNumberOfVirtualNetworkLinksWithRegistration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfRecordSets"] = undefined /*out*/;
            resourceInputs["numberOfVirtualNetworkLinks"] = undefined /*out*/;
            resourceInputs["numberOfVirtualNetworkLinksWithRegistration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxNumberOfRecordSets"] = undefined /*out*/;
            resourceInputs["maxNumberOfVirtualNetworkLinks"] = undefined /*out*/;
            resourceInputs["maxNumberOfVirtualNetworkLinksWithRegistration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfRecordSets"] = undefined /*out*/;
            resourceInputs["numberOfVirtualNetworkLinks"] = undefined /*out*/;
            resourceInputs["numberOfVirtualNetworkLinksWithRegistration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180901:PrivateZone" }, { type: "azure-native:network/v20200101:PrivateZone" }, { type: "azure-native:network/v20200601:PrivateZone" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateZone.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateZone resource.
 */
export interface PrivateZoneArgs {
    /**
     * The Azure Region where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
