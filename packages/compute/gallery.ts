import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the Shared Image Gallery that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2022-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Gallery extends pulumi.CustomResource {
    /**
     * Get an existing Gallery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Gallery {
        return new Gallery(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:Gallery';

    /**
     * Returns true if the given object is an instance of Gallery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gallery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gallery.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The description of this Shared Image Gallery resource. This property is updatable.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Describes the gallery unique name.
     */
    public /*out*/ readonly identifier!: pulumi.Output<types.outputs.GalleryIdentifierResponse | undefined>;
    /**
     * The identity of the gallery, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.GalleryIdentityResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Profile for gallery sharing to subscription or tenant
     */
    public readonly sharingProfile!: pulumi.Output<types.outputs.SharingProfileResponse | undefined>;
    /**
     * Sharing status of current gallery.
     */
    public /*out*/ readonly sharingStatus!: pulumi.Output<types.outputs.SharingStatusResponse>;
    /**
     * Contains information about the soft deletion policy of the gallery.
     */
    public readonly softDeletePolicy!: pulumi.Output<types.outputs.SoftDeletePolicyResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Gallery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharingProfile"] = args ? args.sharingProfile : undefined;
            resourceInputs["softDeletePolicy"] = args ? args.softDeletePolicy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sharingStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["identifier"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sharingProfile"] = undefined /*out*/;
            resourceInputs["sharingStatus"] = undefined /*out*/;
            resourceInputs["softDeletePolicy"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20180601:Gallery" }, { type: "azure-native:compute/v20190301:Gallery" }, { type: "azure-native:compute/v20190701:Gallery" }, { type: "azure-native:compute/v20191201:Gallery" }, { type: "azure-native:compute/v20200930:Gallery" }, { type: "azure-native:compute/v20210701:Gallery" }, { type: "azure-native:compute/v20211001:Gallery" }, { type: "azure-native:compute/v20220103:Gallery" }, { type: "azure-native:compute/v20220303:Gallery" }, { type: "azure-native:compute/v20220803:Gallery" }, { type: "azure-native:compute/v20230703:Gallery" }, { type: "azure-native:compute/v20240303:Gallery" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gallery.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gallery resource.
 */
export interface GalleryArgs {
    /**
     * The description of this Shared Image Gallery resource. This property is updatable.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     */
    galleryName?: pulumi.Input<string>;
    /**
     * The identity of the gallery, if configured.
     */
    identity?: pulumi.Input<types.inputs.GalleryIdentityArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Profile for gallery sharing to subscription or tenant
     */
    sharingProfile?: pulumi.Input<types.inputs.SharingProfileArgs>;
    /**
     * Contains information about the soft deletion policy of the gallery.
     */
    softDeletePolicy?: pulumi.Input<types.inputs.SoftDeletePolicyArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}