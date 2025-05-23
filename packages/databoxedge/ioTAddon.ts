import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IoT Addon.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class IoTAddon extends pulumi.CustomResource {
    /**
     * Get an existing IoTAddon resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IoTAddon {
        return new IoTAddon(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:IoTAddon';

    /**
     * Returns true if the given object is an instance of IoTAddon.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IoTAddon {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IoTAddon.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Host OS supported by the IoT addon.
     */
    public /*out*/ readonly hostPlatform!: pulumi.Output<string>;
    /**
     * Platform where the runtime is hosted.
     */
    public /*out*/ readonly hostPlatformType!: pulumi.Output<string>;
    /**
     * IoT device metadata to which appliance needs to be connected.
     */
    public readonly ioTDeviceDetails!: pulumi.Output<types.outputs.IoTDeviceInfoResponse>;
    /**
     * IoT edge device to which the IoT Addon needs to be configured.
     */
    public readonly ioTEdgeDeviceDetails!: pulumi.Output<types.outputs.IoTDeviceInfoResponse>;
    /**
     * Addon type.
     * Expected value is 'IotEdge'.
     */
    public readonly kind!: pulumi.Output<"IotEdge">;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Addon Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Addon
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of IoT running on the appliance.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a IoTAddon resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoTAddonArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.ioTDeviceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ioTDeviceDetails'");
            }
            if ((!args || args.ioTEdgeDeviceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ioTEdgeDeviceDetails'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            resourceInputs["addonName"] = args ? args.addonName : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["ioTDeviceDetails"] = args ? args.ioTDeviceDetails : undefined;
            resourceInputs["ioTEdgeDeviceDetails"] = args ? args.ioTEdgeDeviceDetails : undefined;
            resourceInputs["kind"] = "IotEdge";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["ioTDeviceDetails"] = undefined /*out*/;
            resourceInputs["ioTEdgeDeviceDetails"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20200901:IoTAddon" }, { type: "azure-native:databoxedge/v20200901preview:IoTAddon" }, { type: "azure-native:databoxedge/v20201201:IoTAddon" }, { type: "azure-native:databoxedge/v20210201:IoTAddon" }, { type: "azure-native:databoxedge/v20210201preview:IoTAddon" }, { type: "azure-native:databoxedge/v20210601:IoTAddon" }, { type: "azure-native:databoxedge/v20210601preview:IoTAddon" }, { type: "azure-native:databoxedge/v20220301:IoTAddon" }, { type: "azure-native:databoxedge/v20220401preview:IoTAddon" }, { type: "azure-native:databoxedge/v20221201preview:IoTAddon" }, { type: "azure-native:databoxedge/v20230101preview:ArcAddon" }, { type: "azure-native:databoxedge/v20230101preview:IoTAddon" }, { type: "azure-native:databoxedge/v20230701:ArcAddon" }, { type: "azure-native:databoxedge/v20230701:IoTAddon" }, { type: "azure-native:databoxedge/v20231201:ArcAddon" }, { type: "azure-native:databoxedge/v20231201:IoTAddon" }, { type: "azure-native:databoxedge:ArcAddon" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IoTAddon.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IoTAddon resource.
 */
export interface IoTAddonArgs {
    /**
     * The addon name.
     */
    addonName?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * IoT device metadata to which appliance needs to be connected.
     */
    ioTDeviceDetails: pulumi.Input<types.inputs.IoTDeviceInfoArgs>;
    /**
     * IoT edge device to which the IoT Addon needs to be configured.
     */
    ioTEdgeDeviceDetails: pulumi.Input<types.inputs.IoTDeviceInfoArgs>;
    /**
     * Addon type.
     * Expected value is 'IotEdge'.
     */
    kind: pulumi.Input<"IotEdge">;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName: pulumi.Input<string>;
}