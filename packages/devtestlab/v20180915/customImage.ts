import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A custom image.
 */
export class CustomImage extends pulumi.CustomResource {
    /**
     * Get an existing CustomImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomImage {
        return new CustomImage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devtestlab/v20180915:CustomImage';

    /**
     * Returns true if the given object is an instance of CustomImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomImage.__pulumiType;
    }

    /**
     * The author of the custom image.
     */
    public readonly author!: pulumi.Output<string | undefined>;
    /**
     * The creation date of the custom image.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Storage information about the plan related to this custom image
     */
    public readonly customImagePlan!: pulumi.Output<types.outputs.CustomImagePropertiesFromPlanResponse | undefined>;
    /**
     * Storage information about the data disks present in the custom image
     */
    public readonly dataDiskStorageInfo!: pulumi.Output<types.outputs.DataDiskStorageTypeInfoResponse[] | undefined>;
    /**
     * The description of the custom image.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    public readonly isPlanAuthorized!: pulumi.Output<boolean | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The Managed Image Id backing the custom image.
     */
    public readonly managedImageId!: pulumi.Output<string | undefined>;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    public readonly managedSnapshotId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * The VHD from which the image is to be created.
     */
    public readonly vhd!: pulumi.Output<types.outputs.CustomImagePropertiesCustomResponse | undefined>;
    /**
     * The virtual machine from which the image is to be created.
     */
    public readonly vm!: pulumi.Output<types.outputs.CustomImagePropertiesFromVmResponse | undefined>;

    /**
     * Create a CustomImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomImageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["customImagePlan"] = args ? args.customImagePlan : undefined;
            resourceInputs["dataDiskStorageInfo"] = args ? args.dataDiskStorageInfo : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isPlanAuthorized"] = args ? args.isPlanAuthorized : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedImageId"] = args ? args.managedImageId : undefined;
            resourceInputs["managedSnapshotId"] = args ? args.managedSnapshotId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vhd"] = args ? args.vhd : undefined;
            resourceInputs["vm"] = args ? args.vm : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["customImagePlan"] = undefined /*out*/;
            resourceInputs["dataDiskStorageInfo"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["isPlanAuthorized"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedImageId"] = undefined /*out*/;
            resourceInputs["managedSnapshotId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["vhd"] = undefined /*out*/;
            resourceInputs["vm"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab:CustomImage" }, { type: "azure-native:devtestlab/v20150521preview:CustomImage" }, { type: "azure-native:devtestlab/v20160515:CustomImage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomImage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomImage resource.
 */
export interface CustomImageArgs {
    /**
     * The author of the custom image.
     */
    author?: pulumi.Input<string>;
    /**
     * Storage information about the plan related to this custom image
     */
    customImagePlan?: pulumi.Input<types.inputs.CustomImagePropertiesFromPlanArgs>;
    /**
     * Storage information about the data disks present in the custom image
     */
    dataDiskStorageInfo?: pulumi.Input<pulumi.Input<types.inputs.DataDiskStorageTypeInfoArgs>[]>;
    /**
     * The description of the custom image.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
     */
    isPlanAuthorized?: pulumi.Input<boolean>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The Managed Image Id backing the custom image.
     */
    managedImageId?: pulumi.Input<string>;
    /**
     * The Managed Snapshot Id backing the custom image.
     */
    managedSnapshotId?: pulumi.Input<string>;
    /**
     * The name of the custom image.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VHD from which the image is to be created.
     */
    vhd?: pulumi.Input<types.inputs.CustomImagePropertiesCustomArgs>;
    /**
     * The virtual machine from which the image is to be created.
     */
    vm?: pulumi.Input<types.inputs.CustomImagePropertiesFromVmArgs>;
}