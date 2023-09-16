import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IoT sensor model
 * Azure REST API version: 2021-02-01-preview. Prior API version in Azure Native 1.x: 2021-02-01-preview
 */
export class Sensor extends pulumi.CustomResource {
    /**
     * Get an existing Sensor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Sensor {
        return new Sensor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotsecurity:Sensor';

    /**
     * Returns true if the given object is an instance of Sensor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Sensor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Sensor.__pulumiType;
    }

    /**
     * Last connectivity time of the IoT sensor
     */
    public /*out*/ readonly connectivityTime!: pulumi.Output<string>;
    /**
     * Dynamic mode status of the IoT sensor
     */
    public /*out*/ readonly dynamicLearning!: pulumi.Output<boolean>;
    /**
     * Learning mode status of the IoT sensor
     */
    public /*out*/ readonly learningMode!: pulumi.Output<boolean>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Status of the IoT sensor
     */
    public /*out*/ readonly sensorStatus!: pulumi.Output<string>;
    /**
     * Type of sensor
     */
    public readonly sensorType!: pulumi.Output<string | undefined>;
    /**
     * Version of the IoT sensor
     */
    public /*out*/ readonly sensorVersion!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.iotsecurity.SystemDataResponse>;
    /**
     * TI Automatic mode status of the IoT sensor
     */
    public readonly tiAutomaticUpdates!: pulumi.Output<boolean | undefined>;
    /**
     * TI Status of the IoT sensor
     */
    public /*out*/ readonly tiStatus!: pulumi.Output<string>;
    /**
     * TI Version of the IoT sensor
     */
    public /*out*/ readonly tiVersion!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Zone of the IoT sensor
     */
    public readonly zone!: pulumi.Output<string | undefined>;

    /**
     * Create a Sensor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SensorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sensorName"] = args ? args.sensorName : undefined;
            resourceInputs["sensorType"] = args ? args.sensorType : undefined;
            resourceInputs["tiAutomaticUpdates"] = args ? args.tiAutomaticUpdates : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["connectivityTime"] = undefined /*out*/;
            resourceInputs["dynamicLearning"] = undefined /*out*/;
            resourceInputs["learningMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sensorStatus"] = undefined /*out*/;
            resourceInputs["sensorVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tiStatus"] = undefined /*out*/;
            resourceInputs["tiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectivityTime"] = undefined /*out*/;
            resourceInputs["dynamicLearning"] = undefined /*out*/;
            resourceInputs["learningMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sensorStatus"] = undefined /*out*/;
            resourceInputs["sensorType"] = undefined /*out*/;
            resourceInputs["sensorVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tiAutomaticUpdates"] = undefined /*out*/;
            resourceInputs["tiStatus"] = undefined /*out*/;
            resourceInputs["tiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zone"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotsecurity/v20210201preview:Sensor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Sensor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Sensor resource.
 */
export interface SensorArgs {
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: pulumi.Input<string>;
    /**
     * Name of the IoT sensor
     */
    sensorName?: pulumi.Input<string>;
    /**
     * Type of sensor
     */
    sensorType?: pulumi.Input<string | types.enums.SensorType>;
    /**
     * TI Automatic mode status of the IoT sensor
     */
    tiAutomaticUpdates?: pulumi.Input<boolean>;
    /**
     * Zone of the IoT sensor
     */
    zone?: pulumi.Input<string>;
}
