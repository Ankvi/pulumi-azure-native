import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the capacity reservation group that the capacity reservations should be assigned to. Currently, a capacity reservation can only be added to a capacity reservation group at creation time. An existing capacity reservation cannot be added or moved to another capacity reservation group.
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CapacityReservationGroup extends pulumi.CustomResource {
    /**
     * Get an existing CapacityReservationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityReservationGroup {
        return new CapacityReservationGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:CapacityReservationGroup';

    /**
     * Returns true if the given object is an instance of CapacityReservationGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityReservationGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityReservationGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A list of all capacity reservation resource ids that belong to capacity reservation group.
     */
    public /*out*/ readonly capacityReservations!: pulumi.Output<types.outputs.SubResourceReadOnlyResponse[]>;
    /**
     * The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.CapacityReservationGroupInstanceViewResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. Pls. keep in mind the capacity reservation group resource generally can be shared across subscriptions belonging to a single azure AAD tenant or cross AAD tenant if there is a trust relationship established between the AAD tenants. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details.
     */
    public readonly sharingProfile!: pulumi.Output<types.outputs.ResourceSharingProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of references to all virtual machines associated to the capacity reservation group.
     */
    public /*out*/ readonly virtualMachinesAssociated!: pulumi.Output<types.outputs.SubResourceReadOnlyResponse[]>;
    /**
     * Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a CapacityReservationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityReservationGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["capacityReservationGroupName"] = args ? args.capacityReservationGroupName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharingProfile"] = args ? args.sharingProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capacityReservations"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociated"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capacityReservations"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sharingProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociated"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20210401:CapacityReservationGroup" }, { type: "azure-native:compute/v20210701:CapacityReservationGroup" }, { type: "azure-native:compute/v20211101:CapacityReservationGroup" }, { type: "azure-native:compute/v20220301:CapacityReservationGroup" }, { type: "azure-native:compute/v20220801:CapacityReservationGroup" }, { type: "azure-native:compute/v20221101:CapacityReservationGroup" }, { type: "azure-native:compute/v20230301:CapacityReservationGroup" }, { type: "azure-native:compute/v20230701:CapacityReservationGroup" }, { type: "azure-native:compute/v20230901:CapacityReservationGroup" }, { type: "azure-native:compute/v20240301:CapacityReservationGroup" }, { type: "azure-native:compute/v20240701:CapacityReservationGroup" }, { type: "azure-native:compute/v20241101:CapacityReservationGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CapacityReservationGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CapacityReservationGroup resource.
 */
export interface CapacityReservationGroupArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. Pls. keep in mind the capacity reservation group resource generally can be shared across subscriptions belonging to a single azure AAD tenant or cross AAD tenant if there is a trust relationship established between the AAD tenants. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details.
     */
    sharingProfile?: pulumi.Input<types.inputs.ResourceSharingProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}