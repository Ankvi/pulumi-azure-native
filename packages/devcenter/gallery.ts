import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a gallery.
 *
 * Uses Azure REST API version 2023-04-01. In version 1.x of the Azure Native provider, it used API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01.
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
    public static readonly __pulumiType = 'azure-native:devcenter:Gallery';

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
     * The resource ID of the backing Azure Compute Gallery.
     */
    public readonly galleryResourceId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.devCenterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devCenterName'");
            }
            if ((!args || args.galleryResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["devCenterName"] = args ? args.devCenterName : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["galleryResourceId"] = args ? args.galleryResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["galleryResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:Gallery" }, { type: "azure-native:devcenter/v20220901preview:Gallery" }, { type: "azure-native:devcenter/v20221012preview:Gallery" }, { type: "azure-native:devcenter/v20221111preview:Gallery" }, { type: "azure-native:devcenter/v20230101preview:Gallery" }, { type: "azure-native:devcenter/v20230401:Gallery" }, { type: "azure-native:devcenter/v20230801preview:Gallery" }, { type: "azure-native:devcenter/v20231001preview:Gallery" }, { type: "azure-native:devcenter/v20240201:Gallery" }, { type: "azure-native:devcenter/v20240501preview:Gallery" }, { type: "azure-native:devcenter/v20240601preview:Gallery" }, { type: "azure-native:devcenter/v20240701preview:Gallery" }, { type: "azure-native:devcenter/v20240801preview:Gallery" }, { type: "azure-native:devcenter/v20241001preview:Gallery" }, { type: "azure-native:devcenter/v20250201:Gallery" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gallery.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gallery resource.
 */
export interface GalleryArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the gallery.
     */
    galleryName?: pulumi.Input<string>;
    /**
     * The resource ID of the backing Azure Compute Gallery.
     */
    galleryResourceId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}