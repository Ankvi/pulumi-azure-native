import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NetworkPacketBroker resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-06-15.
 */
export class NetworkPacketBroker extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPacketBroker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkPacketBroker {
        return new NetworkPacketBroker(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkPacketBroker';

    /**
     * Returns true if the given object is an instance of NetworkPacketBroker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkPacketBroker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkPacketBroker.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of neighbor group IDs configured on NPB.
     */
    public /*out*/ readonly neighborGroupIds!: pulumi.Output<string[]>;
    /**
     * List of ARM resource IDs of Network Devices [NPB].
     */
    public /*out*/ readonly networkDeviceIds!: pulumi.Output<string[]>;
    /**
     * ARM resource ID of the Network Fabric.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * List of network Tap IDs configured on NPB.
     */
    public /*out*/ readonly networkTapIds!: pulumi.Output<string[]>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of network interfaces across NPB devices that are used to mirror source traffic.
     */
    public /*out*/ readonly sourceInterfaceIds!: pulumi.Output<string[]>;
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
     * Create a NetworkPacketBroker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPacketBrokerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkFabricId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["networkPacketBrokerName"] = args ? args.networkPacketBrokerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["neighborGroupIds"] = undefined /*out*/;
            resourceInputs["networkDeviceIds"] = undefined /*out*/;
            resourceInputs["networkTapIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceInterfaceIds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["neighborGroupIds"] = undefined /*out*/;
            resourceInputs["networkDeviceIds"] = undefined /*out*/;
            resourceInputs["networkFabricId"] = undefined /*out*/;
            resourceInputs["networkTapIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceInterfaceIds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230615:NetworkPacketBroker" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkPacketBroker.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkPacketBroker resource.
 */
export interface NetworkPacketBrokerArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * ARM resource ID of the Network Fabric.
     */
    networkFabricId: pulumi.Input<string>;
    /**
     * Name of the Network Packet Broker.
     */
    networkPacketBrokerName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}