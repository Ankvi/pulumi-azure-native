import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The marketplace gallery image resource definition.
 */
export class Marketplacegalleryimage extends pulumi.CustomResource {
    /**
     * Get an existing Marketplacegalleryimage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Marketplacegalleryimage {
        return new Marketplacegalleryimage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:Marketplacegalleryimage';

    /**
     * Returns true if the given object is an instance of Marketplacegalleryimage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Marketplacegalleryimage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Marketplacegalleryimage.__pulumiType;
    }

    /**
     * Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud]
     */
    public readonly cloudInitDataSource!: pulumi.Output<string | undefined>;
    /**
     * Container Name for storage container
     */
    public readonly containerName!: pulumi.Output<string | undefined>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * This is the gallery image definition identifier.
     */
    public readonly identifier!: pulumi.Output<types.outputs.GalleryImageIdentifierResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * operating system type that the gallery image uses. Expected to be linux or windows
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the gallery image.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * name of the object to be used in moc
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * MarketplaceGalleryImageStatus defines the observed state of marketplacegalleryimages
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.MarketplaceGalleryImageStatusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Specifies information about the gallery image version that you want to create or update.
     */
    public readonly version!: pulumi.Output<types.outputs.GalleryImageVersionResponse | undefined>;

    /**
     * Create a Marketplacegalleryimage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MarketplacegalleryimageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cloudInitDataSource"] = args ? args.cloudInitDataSource : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["marketplacegalleryimagesName"] = args ? args.marketplacegalleryimagesName : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cloudInitDataSource"] = undefined /*out*/;
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hyperVGeneration"] = undefined /*out*/;
            resourceInputs["identifier"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210901preview:marketplacegalleryimage" }, { type: "azure-native:azurestackhci:Marketplacegalleryimage" }, { type: "azure-native:azurestackhci:marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20221215preview:Marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20221215preview:marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20230701preview:Marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20230701preview:marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20230901preview:Marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20230901preview:marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20240101:Marketplacegalleryimage" }, { type: "azure-native:azurestackhci/v20240101:marketplacegalleryimage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Marketplacegalleryimage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Marketplacegalleryimage resource.
 */
export interface MarketplacegalleryimageArgs {
    /**
     * Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud]
     */
    cloudInitDataSource?: pulumi.Input<string | types.enums.CloudInitDataSource>;
    /**
     * Container Name for storage container
     */
    containerName?: pulumi.Input<string>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    hyperVGeneration?: pulumi.Input<string | types.enums.HyperVGeneration>;
    /**
     * This is the gallery image definition identifier.
     */
    identifier?: pulumi.Input<types.inputs.GalleryImageIdentifierArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the marketplace gallery image
     */
    marketplacegalleryimagesName?: pulumi.Input<string>;
    /**
     * operating system type that the gallery image uses. Expected to be linux or windows
     */
    osType?: pulumi.Input<types.enums.OperatingSystemTypes>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the object to be used in moc
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies information about the gallery image version that you want to create or update.
     */
    version?: pulumi.Input<types.inputs.GalleryImageVersionArgs>;
}