import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery Application Version that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2022-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GalleryApplicationVersion extends pulumi.CustomResource {
    /**
     * Get an existing GalleryApplicationVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryApplicationVersion {
        return new GalleryApplicationVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:GalleryApplicationVersion';

    /**
     * Returns true if the given object is an instance of GalleryApplicationVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryApplicationVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryApplicationVersion.__pulumiType;
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
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The publishing profile of a gallery image version.
     */
    public readonly publishingProfile!: pulumi.Output<types.outputs.GalleryApplicationVersionPublishingProfileResponse>;
    /**
     * This is the replication status of the gallery image version.
     */
    public /*out*/ readonly replicationStatus!: pulumi.Output<types.outputs.ReplicationStatusResponse>;
    /**
     * The safety profile of the Gallery Application Version.
     */
    public readonly safetyProfile!: pulumi.Output<types.outputs.GalleryApplicationVersionSafetyProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryApplicationVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryApplicationVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.galleryApplicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryApplicationName'");
            }
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.publishingProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publishingProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["galleryApplicationName"] = args ? args.galleryApplicationName : undefined;
            resourceInputs["galleryApplicationVersionName"] = args ? args.galleryApplicationVersionName : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publishingProfile"] = args ? args.publishingProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["safetyProfile"] = args ? args.safetyProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishingProfile"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["safetyProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20190301:GalleryApplicationVersion" }, { type: "azure-native:compute/v20190701:GalleryApplicationVersion" }, { type: "azure-native:compute/v20191201:GalleryApplicationVersion" }, { type: "azure-native:compute/v20200930:GalleryApplicationVersion" }, { type: "azure-native:compute/v20210701:GalleryApplicationVersion" }, { type: "azure-native:compute/v20211001:GalleryApplicationVersion" }, { type: "azure-native:compute/v20220103:GalleryApplicationVersion" }, { type: "azure-native:compute/v20220303:GalleryApplicationVersion" }, { type: "azure-native:compute/v20220803:GalleryApplicationVersion" }, { type: "azure-native:compute/v20230703:GalleryApplicationVersion" }, { type: "azure-native:compute/v20240303:GalleryApplicationVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryApplicationVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryApplicationVersion resource.
 */
export interface GalleryApplicationVersionArgs {
    /**
     * The name of the gallery Application Definition in which the Application Version is to be created.
     */
    galleryApplicationName: pulumi.Input<string>;
    /**
     * The name of the gallery Application Version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     */
    galleryApplicationVersionName?: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery in which the Application Definition resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The publishing profile of a gallery image version.
     */
    publishingProfile: pulumi.Input<types.inputs.GalleryApplicationVersionPublishingProfileArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The safety profile of the Gallery Application Version.
     */
    safetyProfile?: pulumi.Input<types.inputs.GalleryApplicationVersionSafetyProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}