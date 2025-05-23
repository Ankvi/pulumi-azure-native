import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The AvailabilitySets resource definition.
 *
 * Uses Azure REST API version 2023-04-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-21-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:scvmm:AvailabilitySet';

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
     * Name of the availability set.
     */
    public readonly availabilitySetName!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    public readonly vmmServerId!: pulumi.Output<string | undefined>;

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
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmmServerId"] = args ? args.vmmServerId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availabilitySetName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmmServerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm/v20200605preview:AvailabilitySet" }, { type: "azure-native:scvmm/v20220521preview:AvailabilitySet" }, { type: "azure-native:scvmm/v20230401preview:AvailabilitySet" }, { type: "azure-native:scvmm/v20231007:AvailabilitySet" }, { type: "azure-native:scvmm/v20240601:AvailabilitySet" }, { type: "azure-native:scvmm/v20250313:AvailabilitySet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AvailabilitySet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AvailabilitySet resource.
 */
export interface AvailabilitySetArgs {
    /**
     * Name of the availability set.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * The extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: pulumi.Input<string>;
}