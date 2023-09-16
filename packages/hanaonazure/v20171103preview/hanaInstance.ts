import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * HANA instance info on Azure (ARM properties and HANA properties)
 */
export class HanaInstance extends pulumi.CustomResource {
    /**
     * Get an existing HanaInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HanaInstance {
        return new HanaInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hanaonazure/v20171103preview:HanaInstance';

    /**
     * Returns true if the given object is an instance of HanaInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HanaInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HanaInstance.__pulumiType;
    }

    /**
     * Specifies the HANA instance unique ID.
     */
    public /*out*/ readonly hanaInstanceId!: pulumi.Output<string>;
    /**
     * Specifies the hardware settings for the HANA instance.
     */
    public /*out*/ readonly hardwareProfile!: pulumi.Output<types.outputs.hanaonazure.v20171103preview.HardwareProfileResponse | undefined>;
    /**
     * Hardware revision of a HANA instance
     */
    public /*out*/ readonly hwRevision!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the network settings for the HANA instance.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.hanaonazure.v20171103preview.NetworkProfileResponse | undefined>;
    /**
     * Specifies the operating system settings for the HANA instance.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.hanaonazure.v20171103preview.OSProfileResponse | undefined>;
    /**
     * ARM ID of another HanaInstance that will share a network with this HanaInstance
     */
    public readonly partnerNodeId!: pulumi.Output<string | undefined>;
    /**
     * Resource power state
     */
    public /*out*/ readonly powerState!: pulumi.Output<string>;
    /**
     * State of provisioning of the HanaInstance
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource proximity placement group
     */
    public /*out*/ readonly proximityPlacementGroup!: pulumi.Output<string>;
    /**
     * Specifies the storage settings for the HANA instance disks.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.hanaonazure.v20171103preview.StorageProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HanaInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HanaInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["hanaInstanceName"] = args ? args.hanaInstanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["partnerNodeId"] = args ? args.partnerNodeId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["hanaInstanceId"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["hwRevision"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["hanaInstanceId"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["hwRevision"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["partnerNodeId"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HanaInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HanaInstance resource.
 */
export interface HanaInstanceArgs {
    /**
     * Name of the SAP HANA on Azure instance.
     */
    hanaInstanceName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the network settings for the HANA instance.
     */
    networkProfile?: pulumi.Input<types.inputs.hanaonazure.v20171103preview.NetworkProfileArgs>;
    /**
     * Specifies the operating system settings for the HANA instance.
     */
    osProfile?: pulumi.Input<types.inputs.hanaonazure.v20171103preview.OSProfileArgs>;
    /**
     * ARM ID of another HanaInstance that will share a network with this HanaInstance
     */
    partnerNodeId?: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the storage settings for the HANA instance disks.
     */
    storageProfile?: pulumi.Input<types.inputs.hanaonazure.v20171103preview.StorageProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
