import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Large Instance info on Azure (ARM properties and AzureLargeInstance
 * properties)
 *
 * Uses Azure REST API version 2024-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-08-01-preview.
 */
export class AzureLargeInstance extends pulumi.CustomResource {
    /**
     * Get an existing AzureLargeInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureLargeInstance {
        return new AzureLargeInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurelargeinstance:AzureLargeInstance';

    /**
     * Returns true if the given object is an instance of AzureLargeInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureLargeInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureLargeInstance.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the Azure Large Instance unique ID.
     */
    public readonly azureLargeInstanceId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the hardware settings for the Azure Large Instance.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.HardwareProfileResponse | undefined>;
    /**
     * Hardware revision of an Azure Large Instance
     */
    public readonly hwRevision!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the network settings for the Azure Large Instance.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * Specifies the operating system settings for the Azure Large Instance.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OsProfileResponse | undefined>;
    /**
     * Resource power state
     */
    public readonly powerState!: pulumi.Output<string | undefined>;
    /**
     * State of provisioning of the AzureLargeInstance
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource proximity placement group
     */
    public readonly proximityPlacementGroup!: pulumi.Output<string | undefined>;
    /**
     * Specifies the storage settings for the Azure Large Instance disks.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
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
     * Create a AzureLargeInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureLargeInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureLargeInstanceId"] = args ? args.azureLargeInstanceId : undefined;
            resourceInputs["azureLargeInstanceName"] = args ? args.azureLargeInstanceName : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["hwRevision"] = args ? args.hwRevision : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["powerState"] = args ? args.powerState : undefined;
            resourceInputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureLargeInstanceId"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["hwRevision"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurelargeinstance/v20240801preview:AzureLargeInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureLargeInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureLargeInstance resource.
 */
export interface AzureLargeInstanceArgs {
    /**
     * Specifies the Azure Large Instance unique ID.
     */
    azureLargeInstanceId?: pulumi.Input<string>;
    /**
     * Name of the AzureLargeInstance.
     */
    azureLargeInstanceName?: pulumi.Input<string>;
    /**
     * Specifies the hardware settings for the Azure Large Instance.
     */
    hardwareProfile?: pulumi.Input<types.inputs.HardwareProfileArgs>;
    /**
     * Hardware revision of an Azure Large Instance
     */
    hwRevision?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the network settings for the Azure Large Instance.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * Specifies the operating system settings for the Azure Large Instance.
     */
    osProfile?: pulumi.Input<types.inputs.OsProfileArgs>;
    /**
     * Resource power state
     */
    powerState?: pulumi.Input<string | types.enums.AzureLargeInstancePowerStateEnum>;
    /**
     * Resource proximity placement group
     */
    proximityPlacementGroup?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the storage settings for the Azure Large Instance disks.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}