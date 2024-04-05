import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The logical network resource definition.
 */
export class LogicalNetwork extends pulumi.CustomResource {
    /**
     * Get an existing LogicalNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LogicalNetwork {
        return new LogicalNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20230901preview:LogicalNetwork';

    /**
     * Returns true if the given object is an instance of LogicalNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogicalNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogicalNetwork.__pulumiType;
    }

    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
     */
    public readonly dhcpOptions!: pulumi.Output<types.outputs.LogicalNetworkPropertiesResponseDhcpOptions | undefined>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the logical network.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The observed state of logical networks
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.LogicalNetworkStatusResponse>;
    /**
     * Subnet - list of subnets under the logical network
     */
    public readonly subnets!: pulumi.Output<types.outputs.SubnetResponse[] | undefined>;
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
     * name of the network switch to be used for VMs
     */
    public readonly vmSwitchName!: pulumi.Output<string | undefined>;

    /**
     * Create a LogicalNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogicalNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dhcpOptions"] = args ? args.dhcpOptions : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logicalNetworkName"] = args ? args.logicalNetworkName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmSwitchName"] = args ? args.vmSwitchName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dhcpOptions"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSwitchName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:LogicalNetwork" }, { type: "azure-native:azurestackhci/v20240101:LogicalNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LogicalNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LogicalNetwork resource.
 */
export interface LogicalNetworkArgs {
    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
     */
    dhcpOptions?: pulumi.Input<types.inputs.LogicalNetworkPropertiesDhcpOptionsArgs>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the logical network
     */
    logicalNetworkName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subnet - list of subnets under the logical network
     */
    subnets?: pulumi.Input<pulumi.Input<types.inputs.SubnetArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * name of the network switch to be used for VMs
     */
    vmSwitchName?: pulumi.Input<string>;
}