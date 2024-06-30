import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a definition for a Developer Machine.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-09-01-preview.
 *
 * Other available API versions: 2022-11-11-preview, 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export class DevBoxDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DevBoxDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DevBoxDefinition {
        return new DevBoxDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:DevBoxDefinition';

    /**
     * Returns true if the given object is an instance of DevBoxDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DevBoxDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DevBoxDefinition.__pulumiType;
    }

    /**
     * Image reference information for the currently active image (only populated during updates).
     */
    public /*out*/ readonly activeImageReference!: pulumi.Output<types.outputs.ImageReferenceResponse>;
    /**
     * Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
     */
    public readonly hibernateSupport!: pulumi.Output<string | undefined>;
    /**
     * Image reference information.
     */
    public readonly imageReference!: pulumi.Output<types.outputs.ImageReferenceResponse>;
    /**
     * Details for image validator error. Populated when the image validation is not successful.
     */
    public /*out*/ readonly imageValidationErrorDetails!: pulumi.Output<types.outputs.ImageValidationErrorDetailsResponse>;
    /**
     * Validation status of the configured image.
     */
    public /*out*/ readonly imageValidationStatus!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage type used for the Operating System disk of Dev Boxes created using this definition.
     */
    public readonly osStorageType!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU for Dev Boxes created using this definition.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * Create a DevBoxDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DevBoxDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.devCenterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devCenterName'");
            }
            if ((!args || args.imageReference === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageReference'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["devBoxDefinitionName"] = args ? args.devBoxDefinitionName : undefined;
            resourceInputs["devCenterName"] = args ? args.devCenterName : undefined;
            resourceInputs["hibernateSupport"] = args ? args.hibernateSupport : undefined;
            resourceInputs["imageReference"] = args ? args.imageReference : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osStorageType"] = args ? args.osStorageType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["activeImageReference"] = undefined /*out*/;
            resourceInputs["imageValidationErrorDetails"] = undefined /*out*/;
            resourceInputs["imageValidationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activeImageReference"] = undefined /*out*/;
            resourceInputs["hibernateSupport"] = undefined /*out*/;
            resourceInputs["imageReference"] = undefined /*out*/;
            resourceInputs["imageValidationErrorDetails"] = undefined /*out*/;
            resourceInputs["imageValidationStatus"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osStorageType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20220901preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20221012preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20221111preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20230101preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20230401:DevBoxDefinition" }, { type: "azure-native:devcenter/v20230801preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20231001preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20240201:DevBoxDefinition" }, { type: "azure-native:devcenter/v20240501preview:DevBoxDefinition" }, { type: "azure-native:devcenter/v20240601preview:DevBoxDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DevBoxDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DevBoxDefinition resource.
 */
export interface DevBoxDefinitionArgs {
    /**
     * The name of the Dev Box definition.
     */
    devBoxDefinitionName?: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
     */
    hibernateSupport?: pulumi.Input<string | types.enums.HibernateSupport>;
    /**
     * Image reference information.
     */
    imageReference: pulumi.Input<types.inputs.ImageReferenceArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The storage type used for the Operating System disk of Dev Boxes created using this definition.
     */
    osStorageType?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU for Dev Boxes created using this definition.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}