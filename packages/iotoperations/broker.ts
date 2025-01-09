import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance broker resource
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-15-preview, 2024-09-15-preview, 2024-11-01.
 */
export class Broker extends pulumi.CustomResource {
    /**
     * Get an existing Broker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Broker {
        return new Broker(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperations:Broker';

    /**
     * Returns true if the given object is an instance of Broker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Broker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Broker.__pulumiType;
    }

    /**
     * Edge location of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource-specific properties for this resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.BrokerPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Broker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrokerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.instanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["brokerName"] = args ? args.brokerName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.brokerPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperations/v20240701preview:Broker" }, { type: "azure-native:iotoperations/v20240815preview:Broker" }, { type: "azure-native:iotoperations/v20240915preview:Broker" }, { type: "azure-native:iotoperations/v20241101:Broker" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Broker.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Broker resource.
 */
export interface BrokerArgs {
    /**
     * Name of broker.
     */
    brokerName?: pulumi.Input<string>;
    /**
     * Edge location of the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The resource-specific properties for this resource.
     */
    properties?: pulumi.Input<types.inputs.BrokerPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}