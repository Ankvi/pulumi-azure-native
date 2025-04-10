import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Edge device resource
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export class EdgeDevice extends pulumi.CustomResource {
    /**
     * Get an existing EdgeDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EdgeDevice {
        return new EdgeDevice(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:EdgeDevice';

    /**
     * Returns true if the given object is an instance of EdgeDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EdgeDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EdgeDevice.__pulumiType;
    }

    /**
     * Device Configuration
     */
    public readonly deviceConfiguration!: pulumi.Output<types.outputs.DeviceConfigurationResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of edgeDevice resource
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
     * Create a EdgeDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeDeviceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceConfiguration'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["deviceConfiguration"] = args ? args.deviceConfiguration : undefined;
            resourceInputs["edgeDeviceName"] = args ? args.edgeDeviceName : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deviceConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20230801preview:EdgeDevice" }, { type: "azure-native:azurestackhci/v20231101preview:EdgeDevice" }, { type: "azure-native:azurestackhci/v20240101:EdgeDevice" }, { type: "azure-native:azurestackhci/v20240215preview:EdgeDevice" }, { type: "azure-native:azurestackhci/v20240401:EdgeDevice" }, { type: "azure-native:azurestackhci/v20240901preview:EdgeDevice" }, { type: "azure-native:azurestackhci/v20241201preview:EdgeDevice" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EdgeDevice.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EdgeDevice resource.
 */
export interface EdgeDeviceArgs {
    /**
     * Device Configuration
     */
    deviceConfiguration: pulumi.Input<types.inputs.DeviceConfigurationArgs>;
    /**
     * Name of Device
     */
    edgeDeviceName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}