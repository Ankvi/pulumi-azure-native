import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An device resource belonging to a device group resource.
 * Azure REST API version: 2022-09-01-preview. Prior API version in Azure Native 1.x: 2022-09-01-preview.
 */
export class Device extends pulumi.CustomResource {
    /**
     * Get an existing Device resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Device {
        return new Device(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azuresphere:Device';

    /**
     * Returns true if the given object is an instance of Device.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Device {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Device.__pulumiType;
    }

    /**
     * SKU of the chip
     */
    public /*out*/ readonly chipSku!: pulumi.Output<string>;
    /**
     * Device ID
     */
    public readonly deviceId!: pulumi.Output<string | undefined>;
    /**
     * OS version available for installation when update requested
     */
    public /*out*/ readonly lastAvailableOsVersion!: pulumi.Output<string>;
    /**
     * OS version running on device when update requested
     */
    public /*out*/ readonly lastInstalledOsVersion!: pulumi.Output<string>;
    /**
     * Time when update requested and new OS version available
     */
    public /*out*/ readonly lastOsUpdateUtc!: pulumi.Output<string>;
    /**
     * Time when update was last requested
     */
    public /*out*/ readonly lastUpdateRequestUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Device resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.catalogName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalogName'");
            }
            if ((!args || args.deviceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceGroupName'");
            }
            if ((!args || args.productName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["catalogName"] = args ? args.catalogName : undefined;
            resourceInputs["deviceGroupName"] = args ? args.deviceGroupName : undefined;
            resourceInputs["deviceId"] = args ? args.deviceId : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["productName"] = args ? args.productName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["chipSku"] = undefined /*out*/;
            resourceInputs["lastAvailableOsVersion"] = undefined /*out*/;
            resourceInputs["lastInstalledOsVersion"] = undefined /*out*/;
            resourceInputs["lastOsUpdateUtc"] = undefined /*out*/;
            resourceInputs["lastUpdateRequestUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["chipSku"] = undefined /*out*/;
            resourceInputs["deviceId"] = undefined /*out*/;
            resourceInputs["lastAvailableOsVersion"] = undefined /*out*/;
            resourceInputs["lastInstalledOsVersion"] = undefined /*out*/;
            resourceInputs["lastOsUpdateUtc"] = undefined /*out*/;
            resourceInputs["lastUpdateRequestUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azuresphere/v20220901preview:Device" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Device.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Name of device group.
     */
    deviceGroupName: pulumi.Input<string>;
    /**
     * Device ID
     */
    deviceId?: pulumi.Input<string>;
    /**
     * Device name
     */
    deviceName?: pulumi.Input<string>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
