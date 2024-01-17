import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NetworkFabric resource definition.
 * Azure REST API version: 2023-02-01-preview. Prior API version in Azure Native 1.x: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class NetworkFabric extends pulumi.CustomResource {
    /**
     * Get an existing NetworkFabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkFabric {
        return new NetworkFabric(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkFabric';

    /**
     * Returns true if the given object is an instance of NetworkFabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkFabric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkFabric.__pulumiType;
    }

    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * ASN of CE devices for CE/PE connectivity.
     */
    public readonly fabricASN!: pulumi.Output<number>;
    /**
     * IPv4Prefix for Management Network. Example: 10.1.0.0/19.
     */
    public readonly ipv4Prefix!: pulumi.Output<string | undefined>;
    /**
     * IPv6Prefix for Management Network. Example: 3FFE:FFFF:0:CD40::/59.
     */
    public readonly ipv6Prefix!: pulumi.Output<string | undefined>;
    /**
     * List of L2IsolationDomain resource IDs under the Network Fabric.
     */
    public /*out*/ readonly l2IsolationDomains!: pulumi.Output<string[]>;
    /**
     * List of L3IsolationDomain resource IDs under the Network Fabric.
     */
    public /*out*/ readonly l3IsolationDomains!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Configuration to be used to setup the management network.
     */
    public readonly managementNetworkConfiguration!: pulumi.Output<types.outputs.ManagementNetworkConfigurationResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure resource ID for the NetworkFabricController the NetworkFabric belongs.
     */
    public readonly networkFabricControllerId!: pulumi.Output<string>;
    /**
     * Supported Network Fabric SKU.Example: Compute / Aggregate racks. Once the user chooses a particular SKU, only supported racks can be added to the Network Fabric. The SKU determines whether it is a single / multi rack Network Fabric.
     */
    public readonly networkFabricSku!: pulumi.Output<string>;
    /**
     * Gets the operational state of the resource.
     */
    public /*out*/ readonly operationalState!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Number of racks associated to Network Fabric.Possible values are from 2-8.
     */
    public readonly rackCount!: pulumi.Output<number>;
    /**
     * List of NetworkRack resource IDs under the Network Fabric. The number of racks allowed depends on the Network Fabric SKU.
     */
    public /*out*/ readonly racks!: pulumi.Output<string[]>;
    /**
     * Router Id of CE to be used for MP-BGP between PE and CE
     */
    public /*out*/ readonly routerId!: pulumi.Output<string>;
    /**
     * Number of servers.Possible values are from 1-16.
     */
    public readonly serverCountPerRack!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Network and credentials configuration currently applied to terminal server.
     */
    public readonly terminalServerConfiguration!: pulumi.Output<types.outputs.TerminalServerConfigurationResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkFabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkFabricArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricASN === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricASN'");
            }
            if ((!args || args.managementNetworkConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementNetworkConfiguration'");
            }
            if ((!args || args.networkFabricControllerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricControllerId'");
            }
            if ((!args || args.networkFabricSku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricSku'");
            }
            if ((!args || args.rackCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rackCount'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverCountPerRack === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverCountPerRack'");
            }
            if ((!args || args.terminalServerConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'terminalServerConfiguration'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["fabricASN"] = args ? args.fabricASN : undefined;
            resourceInputs["ipv4Prefix"] = args ? args.ipv4Prefix : undefined;
            resourceInputs["ipv6Prefix"] = args ? args.ipv6Prefix : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementNetworkConfiguration"] = args ? (args.managementNetworkConfiguration ? pulumi.output(args.managementNetworkConfiguration).apply(types.inputs.managementNetworkConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["networkFabricControllerId"] = args ? args.networkFabricControllerId : undefined;
            resourceInputs["networkFabricName"] = args ? args.networkFabricName : undefined;
            resourceInputs["networkFabricSku"] = args ? args.networkFabricSku : undefined;
            resourceInputs["rackCount"] = args ? args.rackCount : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverCountPerRack"] = args ? args.serverCountPerRack : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["terminalServerConfiguration"] = args ? args.terminalServerConfiguration : undefined;
            resourceInputs["l2IsolationDomains"] = undefined /*out*/;
            resourceInputs["l3IsolationDomains"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationalState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["racks"] = undefined /*out*/;
            resourceInputs["routerId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["fabricASN"] = undefined /*out*/;
            resourceInputs["ipv4Prefix"] = undefined /*out*/;
            resourceInputs["ipv6Prefix"] = undefined /*out*/;
            resourceInputs["l2IsolationDomains"] = undefined /*out*/;
            resourceInputs["l3IsolationDomains"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricControllerId"] = undefined /*out*/;
            resourceInputs["networkFabricSku"] = undefined /*out*/;
            resourceInputs["operationalState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rackCount"] = undefined /*out*/;
            resourceInputs["racks"] = undefined /*out*/;
            resourceInputs["routerId"] = undefined /*out*/;
            resourceInputs["serverCountPerRack"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["terminalServerConfiguration"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:NetworkFabric" }, { type: "azure-native:managednetworkfabric/v20230615:NetworkFabric" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkFabric.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkFabric resource.
 */
export interface NetworkFabricArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * ASN of CE devices for CE/PE connectivity.
     */
    fabricASN: pulumi.Input<number>;
    /**
     * IPv4Prefix for Management Network. Example: 10.1.0.0/19.
     */
    ipv4Prefix?: pulumi.Input<string>;
    /**
     * IPv6Prefix for Management Network. Example: 3FFE:FFFF:0:CD40::/59.
     */
    ipv6Prefix?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Configuration to be used to setup the management network.
     */
    managementNetworkConfiguration: pulumi.Input<types.inputs.ManagementNetworkConfigurationArgs>;
    /**
     * Azure resource ID for the NetworkFabricController the NetworkFabric belongs.
     */
    networkFabricControllerId: pulumi.Input<string>;
    /**
     * Name of the Network Fabric
     */
    networkFabricName?: pulumi.Input<string>;
    /**
     * Supported Network Fabric SKU.Example: Compute / Aggregate racks. Once the user chooses a particular SKU, only supported racks can be added to the Network Fabric. The SKU determines whether it is a single / multi rack Network Fabric.
     */
    networkFabricSku: pulumi.Input<string>;
    /**
     * Number of racks associated to Network Fabric.Possible values are from 2-8.
     */
    rackCount: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Number of servers.Possible values are from 1-16.
     */
    serverCountPerRack: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Network and credentials configuration currently applied to terminal server.
     */
    terminalServerConfiguration: pulumi.Input<types.inputs.TerminalServerConfigurationArgs>;
}