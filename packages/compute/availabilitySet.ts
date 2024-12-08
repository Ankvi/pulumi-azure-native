import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Availability sets overview](https://docs.microsoft.com/azure/virtual-machines/availability-set-overview). For more information on Azure planned maintenance, see [Maintenance and updates for Virtual Machines in Azure](https://docs.microsoft.com/azure/virtual-machines/maintenance-and-updates). Currently, a VM can only be added to an availability set at creation time. An existing VM cannot be added to an availability set.
 * Azure REST API version: 2023-03-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01.
 */
export class AvailabilitySet extends pulumi.CustomResource {
    /**
     * Get an existing AvailabilitySet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AvailabilitySet {
        return new AvailabilitySet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:AvailabilitySet';

    /**
     * Returns true if the given object is an instance of AvailabilitySet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AvailabilitySet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AvailabilitySet.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Fault Domain count.
     */
    public readonly platformFaultDomainCount!: pulumi.Output<number | undefined>;
    /**
     * Update Domain count.
     */
    public readonly platformUpdateDomainCount!: pulumi.Output<number | undefined>;
    /**
     * Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01.
     */
    public readonly proximityPlacementGroup!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.InstanceViewStatusResponse[]>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of references to all virtual machines in the availability set.
     */
    public readonly virtualMachines!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;

    /**
     * Create a AvailabilitySet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AvailabilitySetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["availabilitySetName"] = args ? args.availabilitySetName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["platformFaultDomainCount"] = args ? args.platformFaultDomainCount : undefined;
            resourceInputs["platformUpdateDomainCount"] = args ? args.platformUpdateDomainCount : undefined;
            resourceInputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachines"] = args ? args.virtualMachines : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platformFaultDomainCount"] = undefined /*out*/;
            resourceInputs["platformUpdateDomainCount"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20150615:AvailabilitySet" }, { type: "azure-native:compute/v20160330:AvailabilitySet" }, { type: "azure-native:compute/v20160430preview:AvailabilitySet" }, { type: "azure-native:compute/v20170330:AvailabilitySet" }, { type: "azure-native:compute/v20171201:AvailabilitySet" }, { type: "azure-native:compute/v20180401:AvailabilitySet" }, { type: "azure-native:compute/v20180601:AvailabilitySet" }, { type: "azure-native:compute/v20181001:AvailabilitySet" }, { type: "azure-native:compute/v20190301:AvailabilitySet" }, { type: "azure-native:compute/v20190701:AvailabilitySet" }, { type: "azure-native:compute/v20191201:AvailabilitySet" }, { type: "azure-native:compute/v20200601:AvailabilitySet" }, { type: "azure-native:compute/v20201201:AvailabilitySet" }, { type: "azure-native:compute/v20210301:AvailabilitySet" }, { type: "azure-native:compute/v20210401:AvailabilitySet" }, { type: "azure-native:compute/v20210701:AvailabilitySet" }, { type: "azure-native:compute/v20211101:AvailabilitySet" }, { type: "azure-native:compute/v20220301:AvailabilitySet" }, { type: "azure-native:compute/v20220801:AvailabilitySet" }, { type: "azure-native:compute/v20221101:AvailabilitySet" }, { type: "azure-native:compute/v20230301:AvailabilitySet" }, { type: "azure-native:compute/v20230701:AvailabilitySet" }, { type: "azure-native:compute/v20230901:AvailabilitySet" }, { type: "azure-native:compute/v20240301:AvailabilitySet" }, { type: "azure-native:compute/v20240701:AvailabilitySet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AvailabilitySet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AvailabilitySet resource.
 */
export interface AvailabilitySetArgs {
    /**
     * The name of the availability set.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Fault Domain count.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * Update Domain count.
     */
    platformUpdateDomainCount?: pulumi.Input<number>;
    /**
     * Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of references to all virtual machines in the availability set.
     */
    virtualMachines?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
}