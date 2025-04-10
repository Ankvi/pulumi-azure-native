import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an image from the Azure Marketplace
 *
 * Uses Azure REST API version 2018-10-15. In version 1.x of the Azure Native provider, it used API version 2018-10-15.
 */
export class GalleryImage extends pulumi.CustomResource {
    /**
     * Get an existing GalleryImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryImage {
        return new GalleryImage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices:GalleryImage';

    /**
     * Returns true if the given object is an instance of GalleryImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryImage.__pulumiType;
    }

    /**
     * The author of the gallery image.
     */
    public /*out*/ readonly author!: pulumi.Output<string>;
    /**
     * The creation date of the gallery image.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The description of the gallery image.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The icon of the gallery image.
     */
    public /*out*/ readonly icon!: pulumi.Output<string>;
    /**
     * The image reference of the gallery image.
     */
    public /*out*/ readonly imageReference!: pulumi.Output<types.outputs.GalleryImageReferenceResponse>;
    /**
     * Indicates whether this gallery image is enabled.
     */
    public readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether this gallery has been overridden for this lab account
     */
    public readonly isOverride!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the plan has been authorized for programmatic deployment.
     */
    public readonly isPlanAuthorized!: pulumi.Output<boolean | undefined>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<types.outputs.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The third party plan that applies to this image
     */
    public /*out*/ readonly planId!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;

    /**
     * Create a GalleryImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryImageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["galleryImageName"] = args ? args.galleryImageName : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["isOverride"] = args ? args.isOverride : undefined;
            resourceInputs["isPlanAuthorized"] = args ? args.isPlanAuthorized : undefined;
            resourceInputs["labAccountName"] = args ? args.labAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["imageReference"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["planId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["imageReference"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["isOverride"] = undefined /*out*/;
            resourceInputs["isPlanAuthorized"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["planId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20181015:GalleryImage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryImage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryImage resource.
 */
export interface GalleryImageArgs {
    /**
     * The name of the gallery Image.
     */
    galleryImageName?: pulumi.Input<string>;
    /**
     * Indicates whether this gallery image is enabled.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether this gallery has been overridden for this lab account
     */
    isOverride?: pulumi.Input<boolean>;
    /**
     * Indicates if the plan has been authorized for programmatic deployment.
     */
    isPlanAuthorized?: pulumi.Input<boolean>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier?: pulumi.Input<string>;
}