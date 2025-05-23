import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:databoxedge:Device';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Type of compute roles configured.
     */
    public /*out*/ readonly configuredRoleTypes!: pulumi.Output<string[]>;
    /**
     * The Data Box Edge/Gateway device culture.
     */
    public /*out*/ readonly culture!: pulumi.Output<string>;
    /**
     * The status of the Data Box Edge/Gateway device.
     */
    public /*out*/ readonly dataBoxEdgeDeviceStatus!: pulumi.Output<string>;
    /**
     * The details of data-residency related properties for this resource
     */
    public readonly dataResidency!: pulumi.Output<types.outputs.DataResidencyResponse | undefined>;
    /**
     * The Description of the Data Box Edge/Gateway device.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The device software version number of the device (eg: 1.2.18105.6).
     */
    public /*out*/ readonly deviceHcsVersion!: pulumi.Output<string>;
    /**
     * The Data Box Edge/Gateway device local capacity in MB.
     */
    public /*out*/ readonly deviceLocalCapacity!: pulumi.Output<number>;
    /**
     * The Data Box Edge/Gateway device model.
     */
    public /*out*/ readonly deviceModel!: pulumi.Output<string>;
    /**
     * The Data Box Edge/Gateway device software version.
     */
    public /*out*/ readonly deviceSoftwareVersion!: pulumi.Output<string>;
    /**
     * The type of the Data Box Edge/Gateway device.
     */
    public /*out*/ readonly deviceType!: pulumi.Output<string>;
    /**
     * The details of Edge Profile for this resource
     */
    public /*out*/ readonly edgeProfile!: pulumi.Output<types.outputs.EdgeProfileResponse>;
    /**
     * The etag for the devices.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The Data Box Edge/Gateway device name.
     */
    public /*out*/ readonly friendlyName!: pulumi.Output<string>;
    /**
     * Msi identity of the resource
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * The kind of the device.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Kubernetes Workload Profile
     */
    public /*out*/ readonly kubernetesWorkloadProfile!: pulumi.Output<string>;
    /**
     * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The description of the Data Box Edge/Gateway device model.
     */
    public /*out*/ readonly modelDescription!: pulumi.Output<string>;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of nodes in the cluster.
     */
    public /*out*/ readonly nodeCount!: pulumi.Output<number>;
    /**
     * The details of the move operation on this resource.
     */
    public /*out*/ readonly resourceMoveDetails!: pulumi.Output<types.outputs.ResourceMoveDetailsResponse>;
    /**
     * The Serial Number of Data Box Edge/Gateway device.
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * The SKU type.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * DataBoxEdge Resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Data Box Edge/Gateway device timezone.
     */
    public /*out*/ readonly timeZone!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataResidency"] = args ? args.dataResidency : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configuredRoleTypes"] = undefined /*out*/;
            resourceInputs["culture"] = undefined /*out*/;
            resourceInputs["dataBoxEdgeDeviceStatus"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["deviceHcsVersion"] = undefined /*out*/;
            resourceInputs["deviceLocalCapacity"] = undefined /*out*/;
            resourceInputs["deviceModel"] = undefined /*out*/;
            resourceInputs["deviceSoftwareVersion"] = undefined /*out*/;
            resourceInputs["deviceType"] = undefined /*out*/;
            resourceInputs["edgeProfile"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubernetesWorkloadProfile"] = undefined /*out*/;
            resourceInputs["modelDescription"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["resourceMoveDetails"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configuredRoleTypes"] = undefined /*out*/;
            resourceInputs["culture"] = undefined /*out*/;
            resourceInputs["dataBoxEdgeDeviceStatus"] = undefined /*out*/;
            resourceInputs["dataResidency"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["deviceHcsVersion"] = undefined /*out*/;
            resourceInputs["deviceLocalCapacity"] = undefined /*out*/;
            resourceInputs["deviceModel"] = undefined /*out*/;
            resourceInputs["deviceSoftwareVersion"] = undefined /*out*/;
            resourceInputs["deviceType"] = undefined /*out*/;
            resourceInputs["edgeProfile"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubernetesWorkloadProfile"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modelDescription"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["resourceMoveDetails"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:Device" }, { type: "azure-native:databoxedge/v20190701:Device" }, { type: "azure-native:databoxedge/v20190801:Device" }, { type: "azure-native:databoxedge/v20200501preview:Device" }, { type: "azure-native:databoxedge/v20200901:Device" }, { type: "azure-native:databoxedge/v20200901preview:Device" }, { type: "azure-native:databoxedge/v20201201:Device" }, { type: "azure-native:databoxedge/v20210201:Device" }, { type: "azure-native:databoxedge/v20210201preview:Device" }, { type: "azure-native:databoxedge/v20210601:Device" }, { type: "azure-native:databoxedge/v20210601preview:Device" }, { type: "azure-native:databoxedge/v20220301:Device" }, { type: "azure-native:databoxedge/v20220401preview:Device" }, { type: "azure-native:databoxedge/v20221201preview:Device" }, { type: "azure-native:databoxedge/v20230101preview:Device" }, { type: "azure-native:databoxedge/v20230701:Device" }, { type: "azure-native:databoxedge/v20231201:Device" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Device.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    /**
     * The details of data-residency related properties for this resource
     */
    dataResidency?: pulumi.Input<types.inputs.DataResidencyArgs>;
    /**
     * The device name.
     */
    deviceName?: pulumi.Input<string>;
    /**
     * Msi identity of the resource
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU type.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}