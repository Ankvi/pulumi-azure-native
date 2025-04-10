import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NetworkDevice resource definition.
 *
 * Uses Azure REST API version 2023-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class NetworkDevice extends pulumi.CustomResource {
    /**
     * Get an existing NetworkDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkDevice {
        return new NetworkDevice(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkDevice';

    /**
     * Returns true if the given object is an instance of NetworkDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkDevice.__pulumiType;
    }

    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The host Name of the device.
     */
    public readonly hostName!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * networkDeviceRole is the device role: Example: CE | ToR.
     */
    public readonly networkDeviceRole!: pulumi.Output<string>;
    /**
     * Network Device SKU name.
     */
    public readonly networkDeviceSku!: pulumi.Output<string>;
    /**
     * Reference to network rack resource id.
     */
    public /*out*/ readonly networkRackId!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * serialNumber of the format Make;Model;HardwareRevisionId;SerialNumber. Example: Arista;DCS-7280DR3-24;12.05;JPE21116969
     */
    public readonly serialNumber!: pulumi.Output<string>;
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
     * Current version of the device as defined in SKU.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a NetworkDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkDeviceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkDeviceRole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkDeviceRole'");
            }
            if ((!args || args.networkDeviceSku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkDeviceSku'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serialNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialNumber'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkDeviceName"] = args ? args.networkDeviceName : undefined;
            resourceInputs["networkDeviceRole"] = args ? args.networkDeviceRole : undefined;
            resourceInputs["networkDeviceSku"] = args ? args.networkDeviceSku : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkRackId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkDeviceRole"] = undefined /*out*/;
            resourceInputs["networkDeviceSku"] = undefined /*out*/;
            resourceInputs["networkRackId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:NetworkDevice" }, { type: "azure-native:managednetworkfabric/v20230615:NetworkDevice" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkDevice.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkDevice resource.
 */
export interface NetworkDeviceArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * The host Name of the device.
     */
    hostName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Network Device
     */
    networkDeviceName?: pulumi.Input<string>;
    /**
     * networkDeviceRole is the device role: Example: CE | ToR.
     */
    networkDeviceRole: pulumi.Input<string | types.enums.NetworkDeviceRoleTypes>;
    /**
     * Network Device SKU name.
     */
    networkDeviceSku: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * serialNumber of the format Make;Model;HardwareRevisionId;SerialNumber. Example: Arista;DCS-7280DR3-24;12.05;JPE21116969
     */
    serialNumber: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}