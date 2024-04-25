import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IpAllocation resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01.
 */
export class IpAllocation extends pulumi.CustomResource {
    /**
     * Get an existing IpAllocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IpAllocation {
        return new IpAllocation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:IpAllocation';

    /**
     * Returns true if the given object is an instance of IpAllocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpAllocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpAllocation.__pulumiType;
    }

    /**
     * IpAllocation tags.
     */
    public readonly allocationTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The IPAM allocation ID.
     */
    public readonly ipamAllocationId!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The address prefix for the IpAllocation.
     */
    public readonly prefix!: pulumi.Output<string | undefined>;
    /**
     * The address prefix length for the IpAllocation.
     */
    public readonly prefixLength!: pulumi.Output<number | undefined>;
    /**
     * The address prefix Type for the IpAllocation.
     */
    public readonly prefixType!: pulumi.Output<string | undefined>;
    /**
     * The Subnet that using the prefix of this IpAllocation resource.
     */
    public /*out*/ readonly subnet!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    public /*out*/ readonly virtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse>;

    /**
     * Create a IpAllocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpAllocationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allocationTags"] = args ? args.allocationTags : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipAllocationName"] = args ? args.ipAllocationName : undefined;
            resourceInputs["ipamAllocationId"] = args ? args.ipamAllocationId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["prefixLength"] = (args ? args.prefixLength : undefined) ?? 0;
            resourceInputs["prefixType"] = args ? args.prefixType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
        } else {
            resourceInputs["allocationTags"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipamAllocationId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["prefix"] = undefined /*out*/;
            resourceInputs["prefixLength"] = undefined /*out*/;
            resourceInputs["prefixType"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200301:IpAllocation" }, { type: "azure-native:network/v20200401:IpAllocation" }, { type: "azure-native:network/v20200501:IpAllocation" }, { type: "azure-native:network/v20200601:IpAllocation" }, { type: "azure-native:network/v20200701:IpAllocation" }, { type: "azure-native:network/v20200801:IpAllocation" }, { type: "azure-native:network/v20201101:IpAllocation" }, { type: "azure-native:network/v20210201:IpAllocation" }, { type: "azure-native:network/v20210301:IpAllocation" }, { type: "azure-native:network/v20210501:IpAllocation" }, { type: "azure-native:network/v20210801:IpAllocation" }, { type: "azure-native:network/v20220101:IpAllocation" }, { type: "azure-native:network/v20220501:IpAllocation" }, { type: "azure-native:network/v20220701:IpAllocation" }, { type: "azure-native:network/v20220901:IpAllocation" }, { type: "azure-native:network/v20221101:IpAllocation" }, { type: "azure-native:network/v20230201:IpAllocation" }, { type: "azure-native:network/v20230401:IpAllocation" }, { type: "azure-native:network/v20230501:IpAllocation" }, { type: "azure-native:network/v20230601:IpAllocation" }, { type: "azure-native:network/v20230901:IpAllocation" }, { type: "azure-native:network/v20231101:IpAllocation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IpAllocation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IpAllocation resource.
 */
export interface IpAllocationArgs {
    /**
     * IpAllocation tags.
     */
    allocationTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the IpAllocation.
     */
    ipAllocationName?: pulumi.Input<string>;
    /**
     * The IPAM allocation ID.
     */
    ipamAllocationId?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The address prefix for the IpAllocation.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The address prefix length for the IpAllocation.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The address prefix Type for the IpAllocation.
     */
    prefixType?: pulumi.Input<string | types.enums.IPVersion>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type for the IpAllocation.
     */
    type?: pulumi.Input<string | types.enums.IpAllocationType>;
}