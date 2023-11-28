import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The agentPool resource definition
 */
export class AgentPool extends pulumi.CustomResource {
    /**
     * Get an existing AgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AgentPool {
        return new AgentPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice/v20231115preview:AgentPool';

    /**
     * Returns true if the given object is an instance of AgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AgentPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AgentPool.__pulumiType;
    }

    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * Extended Location definition
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The version of node image
     */
    public readonly nodeImageVersion!: pulumi.Output<string | undefined>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    public readonly osSKU!: pulumi.Output<string | undefined>;
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines the observed state of the agent pool
     */
    public readonly status!: pulumi.Output<types.outputs.AgentPoolProvisioningStatusResponseStatus | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;

    /**
     * Create a AgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedClusterResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedClusterResourceUri'");
            }
            resourceInputs["agentPoolName"] = args ? args.agentPoolName : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["connectedClusterResourceUri"] = args ? args.connectedClusterResourceUri : undefined;
            resourceInputs["count"] = (args ? args.count : undefined) ?? 1;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["nodeImageVersion"] = args ? args.nodeImageVersion : undefined;
            resourceInputs["osSKU"] = args ? args.osSKU : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeImageVersion"] = undefined /*out*/;
            resourceInputs["osSKU"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20231115preview:agentPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AgentPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: pulumi.Input<number>;
    /**
     * Extended Location definition
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The version of node image
     */
    nodeImageVersion?: pulumi.Input<string>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    osSKU?: pulumi.Input<string | types.enums.OSSKU>;
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    osType?: pulumi.Input<string | types.enums.OsType>;
    /**
     * Defines the observed state of the agent pool
     */
    status?: pulumi.Input<types.inputs.AgentPoolProvisioningStatusStatusArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    vmSize?: pulumi.Input<string>;
}
