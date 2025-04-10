import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * AzureBareMetalStorageInstance info on Azure (ARM properties and AzureBareMetalStorage properties)
 *
 * Uses Azure REST API version 2023-04-06.
 *
 * Other available API versions: 2023-08-04-preview, 2023-11-01-preview, 2024-08-01-preview.
 */
export class AzureBareMetalStorageInstance extends pulumi.CustomResource {
    /**
     * Get an existing AzureBareMetalStorageInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureBareMetalStorageInstance {
        return new AzureBareMetalStorageInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:baremetalinfrastructure:AzureBareMetalStorageInstance';

    /**
     * Returns true if the given object is an instance of AzureBareMetalStorageInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureBareMetalStorageInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureBareMetalStorageInstance.__pulumiType;
    }

    /**
     * Specifies the AzureBareMetaStorageInstance unique ID.
     */
    public readonly azureBareMetalStorageInstanceUniqueIdentifier!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the storage properties for the AzureBareMetalStorage instance.
     */
    public readonly storageProperties!: pulumi.Output<types.outputs.StoragePropertiesResponse | undefined>;
    /**
     * The system metadata relating to this resource.
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
     * Create a AzureBareMetalStorageInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureBareMetalStorageInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureBareMetalStorageInstanceName"] = args ? args.azureBareMetalStorageInstanceName : undefined;
            resourceInputs["azureBareMetalStorageInstanceUniqueIdentifier"] = args ? args.azureBareMetalStorageInstanceUniqueIdentifier : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageProperties"] = args ? args.storageProperties : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureBareMetalStorageInstanceUniqueIdentifier"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageProperties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:baremetalinfrastructure/v20230406:AzureBareMetalStorageInstance" }, { type: "azure-native:baremetalinfrastructure/v20230804preview:AzureBareMetalStorageInstance" }, { type: "azure-native:baremetalinfrastructure/v20231101preview:AzureBareMetalStorageInstance" }, { type: "azure-native:baremetalinfrastructure/v20240801preview:AzureBareMetalStorageInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureBareMetalStorageInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureBareMetalStorageInstance resource.
 */
export interface AzureBareMetalStorageInstanceArgs {
    /**
     * Name of the AzureBareMetalStorage on Azure instance.
     */
    azureBareMetalStorageInstanceName?: pulumi.Input<string>;
    /**
     * Specifies the AzureBareMetaStorageInstance unique ID.
     */
    azureBareMetalStorageInstanceUniqueIdentifier?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the storage properties for the AzureBareMetalStorage instance.
     */
    storageProperties?: pulumi.Input<types.inputs.StoragePropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}