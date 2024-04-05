import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Arc-enabled edge device with HCI OS.
 */
export class HciEdgeDevice extends pulumi.CustomResource {
    /**
     * Get an existing HciEdgeDevice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HciEdgeDevice {
        return new HciEdgeDevice(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20240215preview:HciEdgeDevice';

    /**
     * Returns true if the given object is an instance of HciEdgeDevice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HciEdgeDevice {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HciEdgeDevice.__pulumiType;
    }

    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    public readonly kind!: pulumi.Output<"HCI">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * properties for Arc-enabled edge device with HCI OS.
     */
    public readonly properties!: pulumi.Output<types.outputs.HciEdgeDevicePropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HciEdgeDevice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HciEdgeDeviceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["edgeDeviceName"] = args ? args.edgeDeviceName : undefined;
            resourceInputs["kind"] = "HCI";
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:HciEdgeDevice" }, { type: "azure-native:azurestackhci/v20230801preview:HciEdgeDevice" }, { type: "azure-native:azurestackhci/v20231101preview:HciEdgeDevice" }, { type: "azure-native:azurestackhci/v20240101:HciEdgeDevice" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HciEdgeDevice.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HciEdgeDevice resource.
 */
export interface HciEdgeDeviceArgs {
    /**
     * Name of Device
     */
    edgeDeviceName?: pulumi.Input<string>;
    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    kind: pulumi.Input<"HCI">;
    /**
     * properties for Arc-enabled edge device with HCI OS.
     */
    properties?: pulumi.Input<types.inputs.HciEdgeDevicePropertiesArgs>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}