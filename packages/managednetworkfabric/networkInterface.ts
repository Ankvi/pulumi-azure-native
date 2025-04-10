import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the NetworkInterface resource.
 *
 * Uses Azure REST API version 2023-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class NetworkInterface extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterface {
        return new NetworkInterface(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkInterface';

    /**
     * Returns true if the given object is an instance of NetworkInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkInterface.__pulumiType;
    }

    /**
     * administrativeState of the network interface. Example: Enabled | Disabled.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The arm resource id of the interface or compute server its connected to.
     */
    public /*out*/ readonly connectedTo!: pulumi.Output<string>;
    /**
     * The Interface Type. Example: Management/Data
     */
    public /*out*/ readonly interfaceType!: pulumi.Output<string>;
    /**
     * ipv4Address.
     */
    public /*out*/ readonly ipv4Address!: pulumi.Output<string>;
    /**
     * ipv6Address.
     */
    public /*out*/ readonly ipv6Address!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * physicalIdentifier of the network interface.
     */
    public /*out*/ readonly physicalIdentifier!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
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
     * Create a NetworkInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkDeviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkDeviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["networkDeviceName"] = args ? args.networkDeviceName : undefined;
            resourceInputs["networkInterfaceName"] = args ? args.networkInterfaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["connectedTo"] = undefined /*out*/;
            resourceInputs["interfaceType"] = undefined /*out*/;
            resourceInputs["ipv4Address"] = undefined /*out*/;
            resourceInputs["ipv6Address"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["physicalIdentifier"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["connectedTo"] = undefined /*out*/;
            resourceInputs["interfaceType"] = undefined /*out*/;
            resourceInputs["ipv4Address"] = undefined /*out*/;
            resourceInputs["ipv6Address"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["physicalIdentifier"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:NetworkInterface" }, { type: "azure-native:managednetworkfabric/v20230615:NetworkInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Name of the NetworkDevice
     */
    networkDeviceName: pulumi.Input<string>;
    /**
     * Name of the NetworkInterface
     */
    networkInterfaceName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}