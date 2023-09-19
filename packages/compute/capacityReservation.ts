import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the capacity reservation.
 * Azure REST API version: 2023-03-01. Prior API version in Azure Native 1.x: 2021-04-01
 */
export class CapacityReservation extends pulumi.CustomResource {
    /**
     * Get an existing CapacityReservation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityReservation {
        return new CapacityReservation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:CapacityReservation';

    /**
     * Returns true if the given object is an instance of CapacityReservation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityReservation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityReservation.__pulumiType;
    }

    /**
     * The Capacity reservation instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.CapacityReservationInstanceViewResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01.
     */
    public /*out*/ readonly platformFaultDomainCount!: pulumi.Output<number>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The date time when the capacity reservation was last updated.
     */
    public /*out*/ readonly provisioningTime!: pulumi.Output<string>;
    /**
     * A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource.
     */
    public /*out*/ readonly reservationId!: pulumi.Output<string>;
    /**
     * SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of all virtual machine resource ids that are associated with the capacity reservation.
     */
    public /*out*/ readonly virtualMachinesAssociated!: pulumi.Output<types.outputs.SubResourceReadOnlyResponse[]>;
    /**
     * Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a CapacityReservation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityReservationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.capacityReservationGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'capacityReservationGroupName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["capacityReservationGroupName"] = args ? args.capacityReservationGroupName : undefined;
            resourceInputs["capacityReservationName"] = args ? args.capacityReservationName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platformFaultDomainCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningTime"] = undefined /*out*/;
            resourceInputs["reservationId"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociated"] = undefined /*out*/;
        } else {
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platformFaultDomainCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningTime"] = undefined /*out*/;
            resourceInputs["reservationId"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociated"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20210401:CapacityReservation" }, { type: "azure-native:compute/v20210701:CapacityReservation" }, { type: "azure-native:compute/v20211101:CapacityReservation" }, { type: "azure-native:compute/v20220301:CapacityReservation" }, { type: "azure-native:compute/v20220801:CapacityReservation" }, { type: "azure-native:compute/v20221101:CapacityReservation" }, { type: "azure-native:compute/v20230301:CapacityReservation" }, { type: "azure-native:compute/v20230701:CapacityReservation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CapacityReservation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CapacityReservation resource.
 */
export interface CapacityReservationArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName: pulumi.Input<string>;
    /**
     * The name of the capacity reservation.
     */
    capacityReservationName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
