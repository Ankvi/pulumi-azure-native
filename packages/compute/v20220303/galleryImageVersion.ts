import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery image version that you want to create or update.
 */
export class GalleryImageVersion extends pulumi.CustomResource {
    /**
     * Get an existing GalleryImageVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryImageVersion {
        return new GalleryImageVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20220303:GalleryImageVersion';

    /**
     * Returns true if the given object is an instance of GalleryImageVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryImageVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryImageVersion.__pulumiType;
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
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The publishing profile of a gallery image Version.
     */
    public readonly publishingProfile!: pulumi.Output<types.outputs.GalleryImageVersionPublishingProfileResponse | undefined>;
    /**
     * This is the replication status of the gallery image version.
     */
    public /*out*/ readonly replicationStatus!: pulumi.Output<types.outputs.ReplicationStatusResponse>;
    /**
     * This is the safety profile of the Gallery Image Version.
     */
    public readonly safetyProfile!: pulumi.Output<types.outputs.GalleryImageVersionSafetyProfileResponse | undefined>;
    /**
     * This is the storage profile of a Gallery Image Version.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.GalleryImageVersionStorageProfileResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryImageVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryImageVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.galleryImageName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryImageName'");
            }
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageProfile'");
            }
            resourceInputs["galleryImageName"] = args ? args.galleryImageName : undefined;
            resourceInputs["galleryImageVersionName"] = args ? args.galleryImageVersionName : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publishingProfile"] = args ? args.publishingProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["safetyProfile"] = args ? args.safetyProfile : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishingProfile"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["safetyProfile"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:GalleryImageVersion" }, { type: "azure-native:compute/v20180601:GalleryImageVersion" }, { type: "azure-native:compute/v20190301:GalleryImageVersion" }, { type: "azure-native:compute/v20190701:GalleryImageVersion" }, { type: "azure-native:compute/v20191201:GalleryImageVersion" }, { type: "azure-native:compute/v20200930:GalleryImageVersion" }, { type: "azure-native:compute/v20210701:GalleryImageVersion" }, { type: "azure-native:compute/v20211001:GalleryImageVersion" }, { type: "azure-native:compute/v20220103:GalleryImageVersion" }, { type: "azure-native:compute/v20220803:GalleryImageVersion" }, { type: "azure-native:compute/v20230703:GalleryImageVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryImageVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryImageVersion resource.
 */
export interface GalleryImageVersionArgs {
    /**
     * The name of the gallery image definition in which the Image Version is to be created.
     */
    galleryImageName: pulumi.Input<string>;
    /**
     * The name of the gallery image version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     */
    galleryImageVersionName?: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery in which the Image Definition resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The publishing profile of a gallery image Version.
     */
    publishingProfile?: pulumi.Input<types.inputs.GalleryImageVersionPublishingProfileArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * This is the safety profile of the Gallery Image Version.
     */
    safetyProfile?: pulumi.Input<types.inputs.GalleryImageVersionSafetyProfileArgs>;
    /**
     * This is the storage profile of a Gallery Image Version.
     */
    storageProfile: pulumi.Input<types.inputs.GalleryImageVersionStorageProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}