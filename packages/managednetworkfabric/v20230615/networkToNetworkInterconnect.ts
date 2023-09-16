import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The Network To Network Interconnect resource definition.
 */
export class NetworkToNetworkInterconnect extends pulumi.CustomResource {
    /**
     * Get an existing NetworkToNetworkInterconnect resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkToNetworkInterconnect {
        return new NetworkToNetworkInterconnect(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric/v20230615:NetworkToNetworkInterconnect';

    /**
     * Returns true if the given object is an instance of NetworkToNetworkInterconnect.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkToNetworkInterconnect {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkToNetworkInterconnect.__pulumiType;
    }

    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    public readonly egressAclId!: pulumi.Output<string | undefined>;
    /**
     * Export Route Policy configuration.
     */
    public readonly exportRoutePolicy!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.ExportRoutePolicyInformationResponse | undefined>;
    /**
     * Import Route Policy configuration.
     */
    public readonly importRoutePolicy!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.ImportRoutePolicyInformationResponse | undefined>;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    public readonly ingressAclId!: pulumi.Output<string | undefined>;
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    public readonly isManagementType!: pulumi.Output<string | undefined>;
    /**
     * Common properties for Layer2 Configuration.
     */
    public readonly layer2Configuration!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.Layer2ConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    public readonly nniType!: pulumi.Output<string | undefined>;
    /**
     * NPB Static Route Configuration properties.
     */
    public readonly npbStaticRouteConfiguration!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.NpbStaticRouteConfigurationResponse | undefined>;
    /**
     * Common properties for Layer3Configuration.
     */
    public readonly optionBLayer3Configuration!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.NetworkToNetworkInterconnectPropertiesResponseOptionBLayer3Configuration | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Based on this option layer3 parameters are mandatory. Example: True/False
     */
    public readonly useOptionB!: pulumi.Output<string>;

    /**
     * Create a NetworkToNetworkInterconnect resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkToNetworkInterconnectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkFabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.useOptionB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'useOptionB'");
            }
            resourceInputs["egressAclId"] = args ? args.egressAclId : undefined;
            resourceInputs["exportRoutePolicy"] = args ? args.exportRoutePolicy : undefined;
            resourceInputs["importRoutePolicy"] = args ? args.importRoutePolicy : undefined;
            resourceInputs["ingressAclId"] = args ? args.ingressAclId : undefined;
            resourceInputs["isManagementType"] = (args ? args.isManagementType : undefined) ?? "True";
            resourceInputs["layer2Configuration"] = args ? (args.layer2Configuration ? pulumi.output(args.layer2Configuration).apply(types.inputs.managednetworkfabric.v20230615.layer2ConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["networkFabricName"] = args ? args.networkFabricName : undefined;
            resourceInputs["networkToNetworkInterconnectName"] = args ? args.networkToNetworkInterconnectName : undefined;
            resourceInputs["nniType"] = (args ? args.nniType : undefined) ?? "CE";
            resourceInputs["npbStaticRouteConfiguration"] = args ? (args.npbStaticRouteConfiguration ? pulumi.output(args.npbStaticRouteConfiguration).apply(types.inputs.managednetworkfabric.v20230615.npbStaticRouteConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["optionBLayer3Configuration"] = args ? args.optionBLayer3Configuration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["useOptionB"] = args ? args.useOptionB : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["egressAclId"] = undefined /*out*/;
            resourceInputs["exportRoutePolicy"] = undefined /*out*/;
            resourceInputs["importRoutePolicy"] = undefined /*out*/;
            resourceInputs["ingressAclId"] = undefined /*out*/;
            resourceInputs["isManagementType"] = undefined /*out*/;
            resourceInputs["layer2Configuration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nniType"] = undefined /*out*/;
            resourceInputs["npbStaticRouteConfiguration"] = undefined /*out*/;
            resourceInputs["optionBLayer3Configuration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useOptionB"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric:NetworkToNetworkInterconnect" }, { type: "azure-native:managednetworkfabric/v20230201preview:NetworkToNetworkInterconnect" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkToNetworkInterconnect.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkToNetworkInterconnect resource.
 */
export interface NetworkToNetworkInterconnectArgs {
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    egressAclId?: pulumi.Input<string>;
    /**
     * Export Route Policy configuration.
     */
    exportRoutePolicy?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.ExportRoutePolicyInformationArgs>;
    /**
     * Import Route Policy configuration.
     */
    importRoutePolicy?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.ImportRoutePolicyInformationArgs>;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    ingressAclId?: pulumi.Input<string>;
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    isManagementType?: pulumi.Input<string | types.enums.v20230615.IsManagementType>;
    /**
     * Common properties for Layer2 Configuration.
     */
    layer2Configuration?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.Layer2ConfigurationArgs>;
    /**
     * Name of the Network Fabric.
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * Name of the Network to Network Interconnect.
     */
    networkToNetworkInterconnectName?: pulumi.Input<string>;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    nniType?: pulumi.Input<string | types.enums.v20230615.NniType>;
    /**
     * NPB Static Route Configuration properties.
     */
    npbStaticRouteConfiguration?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.NpbStaticRouteConfigurationArgs>;
    /**
     * Common properties for Layer3Configuration.
     */
    optionBLayer3Configuration?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.NetworkToNetworkInterconnectPropertiesOptionBLayer3ConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Based on this option layer3 parameters are mandatory. Example: True/False
     */
    useOptionB: pulumi.Input<string | types.enums.v20230615.BooleanEnumProperty>;
}
