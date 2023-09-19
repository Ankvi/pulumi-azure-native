import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL Server availability group listener.
 */
export class AvailabilityGroupListener extends pulumi.CustomResource {
    /**
     * Get an existing AvailabilityGroupListener resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AvailabilityGroupListener {
        return new AvailabilityGroupListener(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sqlvirtualmachine/v20220201:AvailabilityGroupListener';

    /**
     * Returns true if the given object is an instance of AvailabilityGroupListener.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AvailabilityGroupListener {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AvailabilityGroupListener.__pulumiType;
    }

    /**
     * Availability Group configuration.
     */
    public readonly availabilityGroupConfiguration!: pulumi.Output<types.outputs.AgConfigurationResponse | undefined>;
    /**
     * Name of the availability group.
     */
    public readonly availabilityGroupName!: pulumi.Output<string | undefined>;
    /**
     * Create a default availability group if it does not exist.
     */
    public readonly createDefaultAvailabilityGroupIfNotExist!: pulumi.Output<boolean | undefined>;
    /**
     * List of load balancer configurations for an availability group listener.
     */
    public readonly loadBalancerConfigurations!: pulumi.Output<types.outputs.LoadBalancerConfigurationResponse[] | undefined>;
    /**
     * List of multi subnet IP configurations for an AG listener.
     */
    public readonly multiSubnetIpConfigurations!: pulumi.Output<types.outputs.MultiSubnetIpConfigurationResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Listener port.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Provisioning state to track the async operation status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AvailabilityGroupListener resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AvailabilityGroupListenerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sqlVirtualMachineGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlVirtualMachineGroupName'");
            }
            resourceInputs["availabilityGroupConfiguration"] = args ? args.availabilityGroupConfiguration : undefined;
            resourceInputs["availabilityGroupListenerName"] = args ? args.availabilityGroupListenerName : undefined;
            resourceInputs["availabilityGroupName"] = args ? args.availabilityGroupName : undefined;
            resourceInputs["createDefaultAvailabilityGroupIfNotExist"] = args ? args.createDefaultAvailabilityGroupIfNotExist : undefined;
            resourceInputs["loadBalancerConfigurations"] = args ? args.loadBalancerConfigurations : undefined;
            resourceInputs["multiSubnetIpConfigurations"] = args ? args.multiSubnetIpConfigurations : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlVirtualMachineGroupName"] = args ? args.sqlVirtualMachineGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityGroupConfiguration"] = undefined /*out*/;
            resourceInputs["availabilityGroupName"] = undefined /*out*/;
            resourceInputs["createDefaultAvailabilityGroupIfNotExist"] = undefined /*out*/;
            resourceInputs["loadBalancerConfigurations"] = undefined /*out*/;
            resourceInputs["multiSubnetIpConfigurations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sqlvirtualmachine:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20170301preview:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20211101preview:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20220201preview:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20220701preview:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20220801preview:AvailabilityGroupListener" }, { type: "azure-native:sqlvirtualmachine/v20230101preview:AvailabilityGroupListener" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AvailabilityGroupListener.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AvailabilityGroupListener resource.
 */
export interface AvailabilityGroupListenerArgs {
    /**
     * Availability Group configuration.
     */
    availabilityGroupConfiguration?: pulumi.Input<types.inputs.AgConfigurationArgs>;
    /**
     * Name of the availability group listener.
     */
    availabilityGroupListenerName?: pulumi.Input<string>;
    /**
     * Name of the availability group.
     */
    availabilityGroupName?: pulumi.Input<string>;
    /**
     * Create a default availability group if it does not exist.
     */
    createDefaultAvailabilityGroupIfNotExist?: pulumi.Input<boolean>;
    /**
     * List of load balancer configurations for an availability group listener.
     */
    loadBalancerConfigurations?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancerConfigurationArgs>[]>;
    /**
     * List of multi subnet IP configurations for an AG listener.
     */
    multiSubnetIpConfigurations?: pulumi.Input<pulumi.Input<types.inputs.MultiSubnetIpConfigurationArgs>[]>;
    /**
     * Listener port.
     */
    port?: pulumi.Input<number>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName: pulumi.Input<string>;
}
