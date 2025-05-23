import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Network Device resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * The host name of the device.
     */
    public readonly hostName!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Management IPv4 Address.
     */
    public /*out*/ readonly managementIpv4Address!: pulumi.Output<string>;
    /**
     * Management IPv6 Address.
     */
    public /*out*/ readonly managementIpv6Address!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * NetworkDeviceRole is the device role: Example: CE | ToR.
     */
    public /*out*/ readonly networkDeviceRole!: pulumi.Output<string>;
    /**
     * Network Device SKU name.
     */
    public readonly networkDeviceSku!: pulumi.Output<string | undefined>;
    /**
     * Reference to network rack resource id.
     */
    public /*out*/ readonly networkRackId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Serial number of the device. Format of serial Number - Make;Model;HardwareRevisionId;SerialNumber.
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
            resourceInputs["networkDeviceSku"] = args ? args.networkDeviceSku : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["managementIpv4Address"] = undefined /*out*/;
            resourceInputs["managementIpv6Address"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkDeviceRole"] = undefined /*out*/;
            resourceInputs["networkRackId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementIpv4Address"] = undefined /*out*/;
            resourceInputs["managementIpv6Address"] = undefined /*out*/;
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
     * The host name of the device.
     */
    hostName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Network Device.
     */
    networkDeviceName?: pulumi.Input<string>;
    /**
     * Network Device SKU name.
     */
    networkDeviceSku?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Serial number of the device. Format of serial Number - Make;Model;HardwareRevisionId;SerialNumber.
     */
    serialNumber: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}