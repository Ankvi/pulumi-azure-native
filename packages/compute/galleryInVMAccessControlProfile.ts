import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery inVMAccessControlProfile that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2024-03-03.
 */
export class GalleryInVMAccessControlProfile extends pulumi.CustomResource {
    /**
     * Get an existing GalleryInVMAccessControlProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryInVMAccessControlProfile {
        return new GalleryInVMAccessControlProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:GalleryInVMAccessControlProfile';

    /**
     * Returns true if the given object is an instance of GalleryInVMAccessControlProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryInVMAccessControlProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryInVMAccessControlProfile.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes the properties of a gallery inVMAccessControlProfile.
     */
    public readonly properties!: pulumi.Output<types.outputs.GalleryInVMAccessControlProfilePropertiesResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryInVMAccessControlProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryInVMAccessControlProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["inVMAccessControlProfileName"] = args ? args.inVMAccessControlProfileName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20240303:GalleryInVMAccessControlProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryInVMAccessControlProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryInVMAccessControlProfile resource.
 */
export interface GalleryInVMAccessControlProfileArgs {
    /**
     * The name of the Shared Image Gallery in which the InVMAccessControlProfile is to be created.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
     */
    inVMAccessControlProfileName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Describes the properties of a gallery inVMAccessControlProfile.
     */
    properties?: pulumi.Input<types.inputs.GalleryInVMAccessControlProfilePropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}