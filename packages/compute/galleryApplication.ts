import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery Application Definition that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2022-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GalleryApplication extends pulumi.CustomResource {
    /**
     * Get an existing GalleryApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryApplication {
        return new GalleryApplication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:GalleryApplication';

    /**
     * Returns true if the given object is an instance of GalleryApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryApplication.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application.
     */
    public readonly customActions!: pulumi.Output<types.outputs.GalleryApplicationCustomActionResponse[] | undefined>;
    /**
     * The description of this gallery Application Definition resource. This property is updatable.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    public readonly endOfLifeDate!: pulumi.Output<string | undefined>;
    /**
     * The Eula agreement for the gallery Application Definition.
     */
    public readonly eula!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The privacy statement uri.
     */
    public readonly privacyStatementUri!: pulumi.Output<string | undefined>;
    /**
     * The release note uri.
     */
    public readonly releaseNoteUri!: pulumi.Output<string | undefined>;
    /**
     * This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.**
     */
    public readonly supportedOSType!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.supportedOSType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'supportedOSType'");
            }
            resourceInputs["customActions"] = args ? args.customActions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["endOfLifeDate"] = args ? args.endOfLifeDate : undefined;
            resourceInputs["eula"] = args ? args.eula : undefined;
            resourceInputs["galleryApplicationName"] = args ? args.galleryApplicationName : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privacyStatementUri"] = args ? args.privacyStatementUri : undefined;
            resourceInputs["releaseNoteUri"] = args ? args.releaseNoteUri : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["supportedOSType"] = args ? args.supportedOSType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customActions"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["endOfLifeDate"] = undefined /*out*/;
            resourceInputs["eula"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privacyStatementUri"] = undefined /*out*/;
            resourceInputs["releaseNoteUri"] = undefined /*out*/;
            resourceInputs["supportedOSType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20190301:GalleryApplication" }, { type: "azure-native:compute/v20190701:GalleryApplication" }, { type: "azure-native:compute/v20191201:GalleryApplication" }, { type: "azure-native:compute/v20200930:GalleryApplication" }, { type: "azure-native:compute/v20210701:GalleryApplication" }, { type: "azure-native:compute/v20211001:GalleryApplication" }, { type: "azure-native:compute/v20220103:GalleryApplication" }, { type: "azure-native:compute/v20220303:GalleryApplication" }, { type: "azure-native:compute/v20220803:GalleryApplication" }, { type: "azure-native:compute/v20230703:GalleryApplication" }, { type: "azure-native:compute/v20240303:GalleryApplication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryApplication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryApplication resource.
 */
export interface GalleryApplicationArgs {
    /**
     * A list of custom actions that can be performed with all of the Gallery Application Versions within this Gallery Application.
     */
    customActions?: pulumi.Input<pulumi.Input<types.inputs.GalleryApplicationCustomActionArgs>[]>;
    /**
     * The description of this gallery Application Definition resource. This property is updatable.
     */
    description?: pulumi.Input<string>;
    /**
     * The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: pulumi.Input<string>;
    /**
     * The Eula agreement for the gallery Application Definition.
     */
    eula?: pulumi.Input<string>;
    /**
     * The name of the gallery Application Definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
     */
    galleryApplicationName?: pulumi.Input<string>;
    /**
     * The name of the Shared Application Gallery in which the Application Definition is to be created.
     */
    galleryName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The privacy statement uri.
     */
    privacyStatementUri?: pulumi.Input<string>;
    /**
     * The release note uri.
     */
    releaseNoteUri?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * This property allows you to specify the supported type of the OS that application is built for. Possible values are: **Windows,** **Linux.**
     */
    supportedOSType: pulumi.Input<types.enums.OperatingSystemTypes>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}