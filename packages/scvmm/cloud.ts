import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Clouds resource definition.
 * Azure REST API version: 2022-05-21-preview. Prior API version in Azure Native 1.x: 2020-06-05-preview
 */
export class Cloud extends pulumi.CustomResource {
    /**
     * Get an existing Cloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cloud {
        return new Cloud(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scvmm:Cloud';

    /**
     * Returns true if the given object is an instance of Cloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cloud {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cloud.__pulumiType;
    }

    /**
     * Capacity of the cloud.
     */
    public /*out*/ readonly cloudCapacity!: pulumi.Output<types.outputs.scvmm.CloudCapacityResponse>;
    /**
     * Name of the cloud in VMMServer.
     */
    public readonly cloudName!: pulumi.Output<string>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.scvmm.ExtendedLocationResponse>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of QoS policies available for the cloud.
     */
    public /*out*/ readonly storageQoSPolicies!: pulumi.Output<types.outputs.scvmm.StorageQoSPolicyResponse[]>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.scvmm.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique ID of the cloud.
     */
    public readonly uuid!: pulumi.Output<string | undefined>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    public readonly vmmServerId!: pulumi.Output<string | undefined>;

    /**
     * Create a Cloud resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cloudName"] = args ? args.cloudName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vmmServerId"] = args ? args.vmmServerId : undefined;
            resourceInputs["cloudCapacity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageQoSPolicies"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cloudCapacity"] = undefined /*out*/;
            resourceInputs["cloudName"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageQoSPolicies"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vmmServerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm/v20200605preview:Cloud" }, { type: "azure-native:scvmm/v20220521preview:Cloud" }, { type: "azure-native:scvmm/v20230401preview:Cloud" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cloud.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cloud resource.
 */
export interface CloudArgs {
    /**
     * Name of the Cloud.
     */
    cloudName?: pulumi.Input<string>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.scvmm.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Unique ID of the cloud.
     */
    uuid?: pulumi.Input<string>;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    vmmServerId?: pulumi.Input<string>;
}
