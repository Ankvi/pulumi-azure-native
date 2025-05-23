import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lab Plans act as a permission container for creating labs via labs.azure.com. Additionally, they can provide a set of default configurations that will apply at the time of creating a lab, but these defaults can still be overwritten.
 *
 * Uses Azure REST API version 2023-06-07. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LabPlan extends pulumi.CustomResource {
    /**
     * Get an existing LabPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LabPlan {
        return new LabPlan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices:LabPlan';

    /**
     * Returns true if the given object is an instance of LabPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LabPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LabPlan.__pulumiType;
    }

    /**
     * The allowed regions for the lab creator to use when creating labs using this lab plan.
     */
    public readonly allowedRegions!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
     */
    public readonly defaultAutoShutdownProfile!: pulumi.Output<types.outputs.AutoShutdownProfileResponse | undefined>;
    /**
     * The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
     */
    public readonly defaultConnectionProfile!: pulumi.Output<types.outputs.ConnectionProfileResponse | undefined>;
    /**
     * The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
     */
    public readonly defaultNetworkProfile!: pulumi.Output<types.outputs.LabPlanNetworkProfileResponse | undefined>;
    /**
     * Managed Identity Information
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Base Url of the lms instance this lab plan can link lab rosters against.
     */
    public readonly linkedLmsInstance!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Current provisioning state of the lab plan.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Error details of last operation done on lab plan.
     */
    public /*out*/ readonly resourceOperationError!: pulumi.Output<types.outputs.ResourceOperationErrorResponse>;
    /**
     * Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
     */
    public readonly sharedGalleryId!: pulumi.Output<string | undefined>;
    /**
     * Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.
     */
    public readonly supportInfo!: pulumi.Output<types.outputs.SupportInfoResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the lab plan.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LabPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabPlanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowedRegions"] = args ? args.allowedRegions : undefined;
            resourceInputs["defaultAutoShutdownProfile"] = args ? (args.defaultAutoShutdownProfile ? pulumi.output(args.defaultAutoShutdownProfile).apply(types.inputs.autoShutdownProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["defaultConnectionProfile"] = args ? (args.defaultConnectionProfile ? pulumi.output(args.defaultConnectionProfile).apply(types.inputs.connectionProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["defaultNetworkProfile"] = args ? args.defaultNetworkProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["labPlanName"] = args ? args.labPlanName : undefined;
            resourceInputs["linkedLmsInstance"] = args ? args.linkedLmsInstance : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedGalleryId"] = args ? args.sharedGalleryId : undefined;
            resourceInputs["supportInfo"] = args ? args.supportInfo : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowedRegions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultAutoShutdownProfile"] = undefined /*out*/;
            resourceInputs["defaultConnectionProfile"] = undefined /*out*/;
            resourceInputs["defaultNetworkProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["linkedLmsInstance"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["sharedGalleryId"] = undefined /*out*/;
            resourceInputs["supportInfo"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20211001preview:LabPlan" }, { type: "azure-native:labservices/v20211115preview:LabPlan" }, { type: "azure-native:labservices/v20220801:LabPlan" }, { type: "azure-native:labservices/v20230607:LabPlan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LabPlan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LabPlan resource.
 */
export interface LabPlanArgs {
    /**
     * The allowed regions for the lab creator to use when creating labs using this lab plan.
     */
    allowedRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
     */
    defaultAutoShutdownProfile?: pulumi.Input<types.inputs.AutoShutdownProfileArgs>;
    /**
     * The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
     */
    defaultConnectionProfile?: pulumi.Input<types.inputs.ConnectionProfileArgs>;
    /**
     * The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
     */
    defaultNetworkProfile?: pulumi.Input<types.inputs.LabPlanNetworkProfileArgs>;
    /**
     * Managed Identity Information
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
     */
    labPlanName?: pulumi.Input<string>;
    /**
     * Base Url of the lms instance this lab plan can link lab rosters against.
     */
    linkedLmsInstance?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
     */
    sharedGalleryId?: pulumi.Input<string>;
    /**
     * Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.
     */
    supportInfo?: pulumi.Input<types.inputs.SupportInfoArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}