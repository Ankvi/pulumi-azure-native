import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Compute Fleet resource
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurefleet [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Fleet extends pulumi.CustomResource {
    /**
     * Get an existing Fleet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Fleet {
        return new Fleet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurefleet:Fleet';

    /**
     * Returns true if the given object is an instance of Fleet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Fleet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Fleet.__pulumiType;
    }

    /**
     * Represents the configuration for additional locations where Fleet resources may be deployed.
     */
    public readonly additionalLocationsProfile!: pulumi.Output<types.outputs.AdditionalLocationsProfileResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Compute Profile to use for running user's workloads.
     */
    public readonly computeProfile!: pulumi.Output<types.outputs.ComputeProfileResponse>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Details of the resource plan.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Configuration Options for Regular instances in Compute Fleet.
     */
    public readonly regularPriorityProfile!: pulumi.Output<types.outputs.RegularPriorityProfileResponse | undefined>;
    /**
     * Configuration Options for Spot instances in Compute Fleet.
     */
    public readonly spotPriorityProfile!: pulumi.Output<types.outputs.SpotPriorityProfileResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the time at which the Compute Fleet is created.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies the ID which uniquely identifies a Compute Fleet.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;
    /**
     * Attribute based Fleet.
     */
    public readonly vmAttributes!: pulumi.Output<types.outputs.VMAttributesResponse | undefined>;
    /**
     * List of VM sizes supported for Compute Fleet
     */
    public readonly vmSizesProfile!: pulumi.Output<types.outputs.VmSizeProfileResponse[]>;
    /**
     * Zones in which the Compute Fleet is available
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Fleet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FleetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.computeProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmSizesProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmSizesProfile'");
            }
            resourceInputs["additionalLocationsProfile"] = args ? args.additionalLocationsProfile : undefined;
            resourceInputs["computeProfile"] = args ? args.computeProfile : undefined;
            resourceInputs["fleetName"] = args ? args.fleetName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["regularPriorityProfile"] = args ? args.regularPriorityProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["spotPriorityProfile"] = args ? args.spotPriorityProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmAttributes"] = args ? args.vmAttributes : undefined;
            resourceInputs["vmSizesProfile"] = args ? args.vmSizesProfile : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        } else {
            resourceInputs["additionalLocationsProfile"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["computeProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["regularPriorityProfile"] = undefined /*out*/;
            resourceInputs["spotPriorityProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
            resourceInputs["vmAttributes"] = undefined /*out*/;
            resourceInputs["vmSizesProfile"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurefleet/v20231101preview:Fleet" }, { type: "azure-native:azurefleet/v20240501preview:Fleet" }, { type: "azure-native:azurefleet/v20241101:Fleet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Fleet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Fleet resource.
 */
export interface FleetArgs {
    /**
     * Represents the configuration for additional locations where Fleet resources may be deployed.
     */
    additionalLocationsProfile?: pulumi.Input<types.inputs.AdditionalLocationsProfileArgs>;
    /**
     * Compute Profile to use for running user's workloads.
     */
    computeProfile: pulumi.Input<types.inputs.ComputeProfileArgs>;
    /**
     * The name of the Compute Fleet
     */
    fleetName?: pulumi.Input<string>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Details of the resource plan.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * Configuration Options for Regular instances in Compute Fleet.
     */
    regularPriorityProfile?: pulumi.Input<types.inputs.RegularPriorityProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Configuration Options for Spot instances in Compute Fleet.
     */
    spotPriorityProfile?: pulumi.Input<types.inputs.SpotPriorityProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Attribute based Fleet.
     */
    vmAttributes?: pulumi.Input<types.inputs.VMAttributesArgs>;
    /**
     * List of VM sizes supported for Compute Fleet
     */
    vmSizesProfile: pulumi.Input<pulumi.Input<types.inputs.VmSizeProfileArgs>[]>;
    /**
     * Zones in which the Compute Fleet is available
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}