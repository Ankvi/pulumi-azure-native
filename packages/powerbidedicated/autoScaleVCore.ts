import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an instance of an auto scale v-core resource.
 * Azure REST API version: 2021-01-01. Prior API version in Azure Native 1.x: 2021-01-01
 */
export class AutoScaleVCore extends pulumi.CustomResource {
    /**
     * Get an existing AutoScaleVCore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AutoScaleVCore {
        return new AutoScaleVCore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:powerbidedicated:AutoScaleVCore';

    /**
     * Returns true if the given object is an instance of AutoScaleVCore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoScaleVCore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoScaleVCore.__pulumiType;
    }

    /**
     * The maximum capacity of an auto scale v-core resource.
     */
    public readonly capacityLimit!: pulumi.Output<number | undefined>;
    /**
     * The object ID of the capacity resource associated with the auto scale v-core resource.
     */
    public readonly capacityObjectId!: pulumi.Output<string | undefined>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the PowerBI Dedicated resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of an auto scale v-core resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU of the auto scale v-core resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.AutoScaleVCoreSkuResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse | undefined>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the PowerBI Dedicated resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AutoScaleVCore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoScaleVCoreArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["capacityLimit"] = args ? args.capacityLimit : undefined;
            resourceInputs["capacityObjectId"] = args ? args.capacityObjectId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["systemData"] = args ? args.systemData : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vcoreName"] = args ? args.vcoreName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["capacityLimit"] = undefined /*out*/;
            resourceInputs["capacityObjectId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:powerbidedicated/v20210101:AutoScaleVCore" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AutoScaleVCore.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AutoScaleVCore resource.
 */
export interface AutoScaleVCoreArgs {
    /**
     * The maximum capacity of an auto scale v-core resource.
     */
    capacityLimit?: pulumi.Input<number>;
    /**
     * The object ID of the capacity resource associated with the auto scale v-core resource.
     */
    capacityObjectId?: pulumi.Input<string>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the auto scale v-core resource.
     */
    sku: pulumi.Input<types.inputs.AutoScaleVCoreSkuArgs>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData?: pulumi.Input<types.inputs.SystemDataArgs>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
     */
    vcoreName?: pulumi.Input<string>;
}
