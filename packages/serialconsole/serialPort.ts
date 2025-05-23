import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents the serial port of the parent resource.
 *
 * Uses Azure REST API version 2018-05-01. In version 2.x of the Azure Native provider, it used API version 2018-05-01.
 */
export class SerialPort extends pulumi.CustomResource {
    /**
     * Get an existing SerialPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SerialPort {
        return new SerialPort(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:serialconsole:SerialPort';

    /**
     * Returns true if the given object is an instance of SerialPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SerialPort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SerialPort.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies whether the port is enabled for a serial console connection.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SerialPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SerialPortArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.parentResource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResource'");
            }
            if ((!args || args.parentResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResourceType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceProviderNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceProviderNamespace'");
            }
            resourceInputs["parentResource"] = args ? args.parentResource : undefined;
            resourceInputs["parentResourceType"] = args ? args.parentResourceType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceProviderNamespace"] = args ? args.resourceProviderNamespace : undefined;
            resourceInputs["serialPort"] = args ? args.serialPort : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:serialconsole/v20180501:SerialPort" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SerialPort.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SerialPort resource.
 */
export interface SerialPortArgs {
    /**
     * The resource name, or subordinate path, for the parent of the serial port. For example: the name of the virtual machine.
     */
    parentResource: pulumi.Input<string>;
    /**
     * The resource type of the parent resource.  For example: 'virtualMachines' or 'virtualMachineScaleSets'
     */
    parentResourceType: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The name of the serial port to create.
     */
    serialPort?: pulumi.Input<string>;
    /**
     * Specifies whether the port is enabled for a serial console connection.
     */
    state?: pulumi.Input<types.enums.SerialPortState>;
}