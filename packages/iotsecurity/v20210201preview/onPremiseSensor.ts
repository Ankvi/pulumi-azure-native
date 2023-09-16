import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * On-premise IoT sensor
 */
export class OnPremiseSensor extends pulumi.CustomResource {
    /**
     * Get an existing OnPremiseSensor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OnPremiseSensor {
        return new OnPremiseSensor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotsecurity/v20210201preview:OnPremiseSensor';

    /**
     * Returns true if the given object is an instance of OnPremiseSensor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OnPremiseSensor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OnPremiseSensor.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.iotsecurity.v20210201preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OnPremiseSensor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OnPremiseSensorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["onPremiseSensorName"] = args ? args.onPremiseSensorName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotsecurity:OnPremiseSensor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OnPremiseSensor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OnPremiseSensor resource.
 */
export interface OnPremiseSensorArgs {
    /**
     * Name of the on-premise IoT sensor
     */
    onPremiseSensorName?: pulumi.Input<string>;
}
