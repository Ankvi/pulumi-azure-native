import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class TrunkedNetwork extends pulumi.CustomResource {
    /**
     * Get an existing TrunkedNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrunkedNetwork {
        return new TrunkedNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud/v20231001preview:TrunkedNetwork';

    /**
     * Returns true if the given object is an instance of TrunkedNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrunkedNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrunkedNetwork.__pulumiType;
    }

    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    public /*out*/ readonly associatedResourceIds!: pulumi.Output<string[]>;
    /**
     * The resource ID of the Network Cloud cluster this trunked network is associated with.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The more detailed status of the trunked network.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this trunked network.
     */
    public /*out*/ readonly hybridAksClustersAssociatedIds!: pulumi.Output<string[]>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    public readonly hybridAksPluginType!: pulumi.Output<string | undefined>;
    /**
     * The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    public readonly interfaceName!: pulumi.Output<string | undefined>;
    /**
     * The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources.
     */
    public readonly isolationDomainIds!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the trunked network.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this trunked network.
     */
    public /*out*/ readonly virtualMachinesAssociatedIds!: pulumi.Output<string[]>;
    /**
     * The list of vlans that are selected from the isolation domains for trunking.
     */
    public readonly vlans!: pulumi.Output<number[]>;

    /**
     * Create a TrunkedNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrunkedNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.isolationDomainIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isolationDomainIds'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vlans === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlans'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hybridAksPluginType"] = (args ? args.hybridAksPluginType : undefined) ?? "SRIOV";
            resourceInputs["interfaceName"] = args ? args.interfaceName : undefined;
            resourceInputs["isolationDomainIds"] = args ? args.isolationDomainIds : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trunkedNetworkName"] = args ? args.trunkedNetworkName : undefined;
            resourceInputs["vlans"] = args ? args.vlans : undefined;
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
        } else {
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["hybridAksPluginType"] = undefined /*out*/;
            resourceInputs["interfaceName"] = undefined /*out*/;
            resourceInputs["isolationDomainIds"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
            resourceInputs["vlans"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud:TrunkedNetwork" }, { type: "azure-native:networkcloud/v20230501preview:TrunkedNetwork" }, { type: "azure-native:networkcloud/v20230701:TrunkedNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TrunkedNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TrunkedNetwork resource.
 */
export interface TrunkedNetworkArgs {
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Field Deprecated. The field was previously optional, now it will have no defined behavior and will be ignored. The network plugin type for Hybrid AKS.
     */
    hybridAksPluginType?: pulumi.Input<string | types.enums.HybridAksPluginType>;
    /**
     * The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine.
     */
    interfaceName?: pulumi.Input<string>;
    /**
     * The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources.
     */
    isolationDomainIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the trunked network.
     */
    trunkedNetworkName?: pulumi.Input<string>;
    /**
     * The list of vlans that are selected from the isolation domains for trunking.
     */
    vlans: pulumi.Input<pulumi.Input<number>[]>;
}