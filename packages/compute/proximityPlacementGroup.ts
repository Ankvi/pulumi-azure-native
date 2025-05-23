import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the proximity placement group.
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ProximityPlacementGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProximityPlacementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProximityPlacementGroup {
        return new ProximityPlacementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:ProximityPlacementGroup';

    /**
     * Returns true if the given object is an instance of ProximityPlacementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProximityPlacementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProximityPlacementGroup.__pulumiType;
    }

    /**
     * A list of references to all availability sets in the proximity placement group.
     */
    public /*out*/ readonly availabilitySets!: pulumi.Output<types.outputs.SubResourceWithColocationStatusResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Describes colocation status of the Proximity Placement Group.
     */
    public readonly colocationStatus!: pulumi.Output<types.outputs.InstanceViewStatusResponse | undefined>;
    /**
     * Specifies the user intent of the proximity placement group.
     */
    public readonly intent!: pulumi.Output<types.outputs.ProximityPlacementGroupPropertiesResponseIntent | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use.
     */
    public readonly proximityPlacementGroupType!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of references to all virtual machine scale sets in the proximity placement group.
     */
    public /*out*/ readonly virtualMachineScaleSets!: pulumi.Output<types.outputs.SubResourceWithColocationStatusResponse[]>;
    /**
     * A list of references to all virtual machines in the proximity placement group.
     */
    public /*out*/ readonly virtualMachines!: pulumi.Output<types.outputs.SubResourceWithColocationStatusResponse[]>;
    /**
     * Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ProximityPlacementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProximityPlacementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["colocationStatus"] = args ? args.colocationStatus : undefined;
            resourceInputs["intent"] = args ? args.intent : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["proximityPlacementGroupName"] = args ? args.proximityPlacementGroupName : undefined;
            resourceInputs["proximityPlacementGroupType"] = args ? args.proximityPlacementGroupType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["availabilitySets"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineScaleSets"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
        } else {
            resourceInputs["availabilitySets"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["colocationStatus"] = undefined /*out*/;
            resourceInputs["intent"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroupType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineScaleSets"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20180401:ProximityPlacementGroup" }, { type: "azure-native:compute/v20180601:ProximityPlacementGroup" }, { type: "azure-native:compute/v20181001:ProximityPlacementGroup" }, { type: "azure-native:compute/v20190301:ProximityPlacementGroup" }, { type: "azure-native:compute/v20190701:ProximityPlacementGroup" }, { type: "azure-native:compute/v20191201:ProximityPlacementGroup" }, { type: "azure-native:compute/v20200601:ProximityPlacementGroup" }, { type: "azure-native:compute/v20201201:ProximityPlacementGroup" }, { type: "azure-native:compute/v20210301:ProximityPlacementGroup" }, { type: "azure-native:compute/v20210401:ProximityPlacementGroup" }, { type: "azure-native:compute/v20210701:ProximityPlacementGroup" }, { type: "azure-native:compute/v20211101:ProximityPlacementGroup" }, { type: "azure-native:compute/v20220301:ProximityPlacementGroup" }, { type: "azure-native:compute/v20220801:ProximityPlacementGroup" }, { type: "azure-native:compute/v20221101:ProximityPlacementGroup" }, { type: "azure-native:compute/v20230301:ProximityPlacementGroup" }, { type: "azure-native:compute/v20230701:ProximityPlacementGroup" }, { type: "azure-native:compute/v20230901:ProximityPlacementGroup" }, { type: "azure-native:compute/v20240301:ProximityPlacementGroup" }, { type: "azure-native:compute/v20240701:ProximityPlacementGroup" }, { type: "azure-native:compute/v20241101:ProximityPlacementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProximityPlacementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProximityPlacementGroup resource.
 */
export interface ProximityPlacementGroupArgs {
    /**
     * Describes colocation status of the Proximity Placement Group.
     */
    colocationStatus?: pulumi.Input<types.inputs.InstanceViewStatusArgs>;
    /**
     * Specifies the user intent of the proximity placement group.
     */
    intent?: pulumi.Input<types.inputs.ProximityPlacementGroupPropertiesIntentArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the proximity placement group.
     */
    proximityPlacementGroupName?: pulumi.Input<string>;
    /**
     * Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use.
     */
    proximityPlacementGroupType?: pulumi.Input<string | types.enums.ProximityPlacementGroupType>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}