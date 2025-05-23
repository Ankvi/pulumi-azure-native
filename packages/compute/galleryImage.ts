import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery image definition that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2022-03-03.
 *
 * Other available API versions: 2022-03-03, 2022-08-03, 2023-07-03. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:compute:GalleryImage';

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
     * Optional. Must be set to true if the gallery image features are being updated.
     */
    public readonly allowUpdateImage!: pulumi.Output<boolean | undefined>;
    /**
     * The architecture of the image. Applicable to OS disks only.
     */
    public readonly architecture!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The description of this gallery image definition resource. This property is updatable.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Describes the disallowed disk types.
     */
    public readonly disallowed!: pulumi.Output<types.outputs.DisallowedResponse | undefined>;
    /**
     * The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    public readonly endOfLifeDate!: pulumi.Output<string | undefined>;
    /**
     * The Eula agreement for the gallery image definition.
     */
    public readonly eula!: pulumi.Output<string | undefined>;
    /**
     * A list of gallery image features.
     */
    public readonly features!: pulumi.Output<types.outputs.GalleryImageFeatureResponse[] | undefined>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * This is the gallery image definition identifier.
     */
    public readonly identifier!: pulumi.Output<types.outputs.GalleryImageIdentifierResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
     */
    public readonly osState!: pulumi.Output<string>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.**
     */
    public readonly osType!: pulumi.Output<string>;
    /**
     * The privacy statement uri.
     */
    public readonly privacyStatementUri!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Describes the gallery image definition purchase plan. This is used by marketplace images.
     */
    public readonly purchasePlan!: pulumi.Output<types.outputs.ImagePurchasePlanResponse | undefined>;
    /**
     * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
     */
    public readonly recommended!: pulumi.Output<types.outputs.RecommendedMachineConfigurationResponse | undefined>;
    /**
     * The release note uri.
     */
    public readonly releaseNoteUri!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            if ((!args || args.osState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osState'");
            }
            if ((!args || args.osType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowUpdateImage"] = args ? args.allowUpdateImage : undefined;
            resourceInputs["architecture"] = args ? args.architecture : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disallowed"] = args ? args.disallowed : undefined;
            resourceInputs["endOfLifeDate"] = args ? args.endOfLifeDate : undefined;
            resourceInputs["eula"] = args ? args.eula : undefined;
            resourceInputs["features"] = args ? args.features : undefined;
            resourceInputs["galleryImageName"] = args ? args.galleryImageName : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osState"] = args ? args.osState : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["privacyStatementUri"] = args ? args.privacyStatementUri : undefined;
            resourceInputs["purchasePlan"] = args ? args.purchasePlan : undefined;
            resourceInputs["recommended"] = args ? args.recommended : undefined;
            resourceInputs["releaseNoteUri"] = args ? args.releaseNoteUri : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowUpdateImage"] = undefined /*out*/;
            resourceInputs["architecture"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["disallowed"] = undefined /*out*/;
            resourceInputs["endOfLifeDate"] = undefined /*out*/;
            resourceInputs["eula"] = undefined /*out*/;
            resourceInputs["features"] = undefined /*out*/;
            resourceInputs["hyperVGeneration"] = undefined /*out*/;
            resourceInputs["identifier"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osState"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["privacyStatementUri"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["purchasePlan"] = undefined /*out*/;
            resourceInputs["recommended"] = undefined /*out*/;
            resourceInputs["releaseNoteUri"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20180601:GalleryImage" }, { type: "azure-native:compute/v20190301:GalleryImage" }, { type: "azure-native:compute/v20190701:GalleryImage" }, { type: "azure-native:compute/v20191201:GalleryImage" }, { type: "azure-native:compute/v20200930:GalleryImage" }, { type: "azure-native:compute/v20210701:GalleryImage" }, { type: "azure-native:compute/v20211001:GalleryImage" }, { type: "azure-native:compute/v20220103:GalleryImage" }, { type: "azure-native:compute/v20220303:GalleryImage" }, { type: "azure-native:compute/v20220803:GalleryImage" }, { type: "azure-native:compute/v20230703:GalleryImage" }, { type: "azure-native:compute/v20240303:GalleryImage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryImage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryImage resource.
 */
export interface GalleryImageArgs {
    /**
     * Optional. Must be set to true if the gallery image features are being updated.
     */
    allowUpdateImage?: pulumi.Input<boolean>;
    /**
     * The architecture of the image. Applicable to OS disks only.
     */
    architecture?: pulumi.Input<string | types.enums.Architecture>;
    /**
     * The description of this gallery image definition resource. This property is updatable.
     */
    description?: pulumi.Input<string>;
    /**
     * Describes the disallowed disk types.
     */
    disallowed?: pulumi.Input<types.inputs.DisallowedArgs>;
    /**
     * The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate?: pulumi.Input<string>;
    /**
     * The Eula agreement for the gallery image definition.
     */
    eula?: pulumi.Input<string>;
    /**
     * A list of gallery image features.
     */
    features?: pulumi.Input<pulumi.Input<types.inputs.GalleryImageFeatureArgs>[]>;
    /**
     * The name of the gallery image definition to be created or updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The maximum length is 80 characters.
     */
    galleryImageName?: pulumi.Input<string>;
    /**
     * The name of the Shared Image Gallery in which the Image Definition is to be created.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    hyperVGeneration?: pulumi.Input<string | types.enums.HyperVGeneration>;
    /**
     * This is the gallery image definition identifier.
     */
    identifier: pulumi.Input<types.inputs.GalleryImageIdentifierArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
     */
    osState: pulumi.Input<types.enums.OperatingSystemStateTypes>;
    /**
     * This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. Possible values are: **Windows,** **Linux.**
     */
    osType: pulumi.Input<types.enums.OperatingSystemTypes>;
    /**
     * The privacy statement uri.
     */
    privacyStatementUri?: pulumi.Input<string>;
    /**
     * Describes the gallery image definition purchase plan. This is used by marketplace images.
     */
    purchasePlan?: pulumi.Input<types.inputs.ImagePurchasePlanArgs>;
    /**
     * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
     */
    recommended?: pulumi.Input<types.inputs.RecommendedMachineConfigurationArgs>;
    /**
     * The release note uri.
     */
    releaseNoteUri?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}