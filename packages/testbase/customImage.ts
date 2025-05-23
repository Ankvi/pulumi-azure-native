import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The test base custom image resource.
 *
 * Uses Azure REST API version 2023-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-11-01-preview.
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
    public static readonly __pulumiType = 'azure-native:testbase:CustomImage';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The UTC timestamp when the custom image was published.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Image definition name.
     */
    public readonly definitionName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This property indicates the size of the VHD to be created.
     */
    public /*out*/ readonly osDiskImageSizeInGB!: pulumi.Output<number>;
    /**
     * Product of the custom image.
     */
    public /*out*/ readonly product!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Release of the custom image OS.
     */
    public /*out*/ readonly release!: pulumi.Output<string>;
    /**
     * The release version date of the release of the custom image OS.
     */
    public /*out*/ readonly releaseVersionDate!: pulumi.Output<string>;
    /**
     * Custom image source type.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * Status of the custom image.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The validation result of the custom image.
     */
    public /*out*/ readonly validationResults!: pulumi.Output<types.outputs.ImageValidationResultsResponse>;
    /**
     * Image version name.
     */
    public readonly versionName!: pulumi.Output<string>;
    /**
     * The file name of the associated VHD resource.
     */
    public /*out*/ readonly vhdFileName!: pulumi.Output<string>;
    /**
     * The Id of the associated VHD resource.
     */
    public readonly vhdId!: pulumi.Output<string | undefined>;

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
            if ((!args || args.definitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definitionName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            if ((!args || args.versionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versionName'");
            }
            resourceInputs["customImageName"] = args ? args.customImageName : undefined;
            resourceInputs["definitionName"] = args ? args.definitionName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = (args ? args.source : undefined) ?? "VHD";
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["versionName"] = args ? args.versionName : undefined;
            resourceInputs["vhdId"] = args ? args.vhdId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osDiskImageSizeInGB"] = undefined /*out*/;
            resourceInputs["product"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["release"] = undefined /*out*/;
            resourceInputs["releaseVersionDate"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationResults"] = undefined /*out*/;
            resourceInputs["vhdFileName"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["definitionName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osDiskImageSizeInGB"] = undefined /*out*/;
            resourceInputs["product"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["release"] = undefined /*out*/;
            resourceInputs["releaseVersionDate"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationResults"] = undefined /*out*/;
            resourceInputs["versionName"] = undefined /*out*/;
            resourceInputs["vhdFileName"] = undefined /*out*/;
            resourceInputs["vhdId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase/v20231101preview:CustomImage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomImage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomImage resource.
 */
export interface CustomImageArgs {
    /**
     * The resource name of the test base custom image.
     */
    customImageName?: pulumi.Input<string>;
    /**
     * Image definition name.
     */
    definitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Custom image source type.
     */
    source: pulumi.Input<string | types.enums.ImageSource>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
    /**
     * Image version name.
     */
    versionName: pulumi.Input<string>;
    /**
     * The Id of the associated VHD resource.
     */
    vhdId?: pulumi.Input<string>;
}