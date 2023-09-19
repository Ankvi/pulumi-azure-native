import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an instance of a Dedicated Capacity resource.
 */
export class CapacityDetails extends pulumi.CustomResource {
    /**
     * Get an existing CapacityDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityDetails {
        return new CapacityDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:powerbidedicated/v20210101:CapacityDetails';

    /**
     * Returns true if the given object is an instance of CapacityDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityDetails.__pulumiType;
    }

    /**
     * A collection of Dedicated capacity administrators
     */
    public readonly administration!: pulumi.Output<types.outputs.DedicatedCapacityAdministratorsResponse | undefined>;
    /**
     * Capacity name
     */
    public /*out*/ readonly friendlyName!: pulumi.Output<string>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the PowerBI Dedicated resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU of the PowerBI Dedicated capacity resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.CapacitySkuResponse>;
    /**
     * The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse | undefined>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Tenant ID for the capacity. Used for creating Pro Plus capacity.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the PowerBI Dedicated resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CapacityDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["administration"] = args ? args.administration : undefined;
            resourceInputs["dedicatedCapacityName"] = args ? args.dedicatedCapacityName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["systemData"] = args ? args.systemData : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administration"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:powerbidedicated:CapacityDetails" }, { type: "azure-native:powerbidedicated/v20171001:CapacityDetails" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CapacityDetails.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CapacityDetails resource.
 */
export interface CapacityDetailsArgs {
    /**
     * A collection of Dedicated capacity administrators
     */
    administration?: pulumi.Input<types.inputs.DedicatedCapacityAdministratorsArgs>;
    /**
     * The name of the Dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    dedicatedCapacityName?: pulumi.Input<string>;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
     */
    mode?: pulumi.Input<string | types.enums.Mode>;
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the PowerBI Dedicated capacity resource.
     */
    sku: pulumi.Input<types.inputs.CapacitySkuArgs>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData?: pulumi.Input<types.inputs.SystemDataArgs>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
