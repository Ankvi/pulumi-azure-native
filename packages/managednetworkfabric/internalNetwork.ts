import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the Internal Network resource.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class InternalNetwork extends pulumi.CustomResource {
    /**
     * Get an existing InternalNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InternalNetwork {
        return new InternalNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:InternalNetwork';

    /**
     * Returns true if the given object is an instance of InternalNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InternalNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InternalNetwork.__pulumiType;
    }

    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * BGP configuration properties.
     */
    public readonly bgpConfiguration!: pulumi.Output<types.outputs.InternalNetworkPropertiesResponseBgpConfiguration | undefined>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * List of Connected IPv4 Subnets.
     */
    public readonly connectedIPv4Subnets!: pulumi.Output<types.outputs.ConnectedSubnetResponse[] | undefined>;
    /**
     * List of connected IPv6 Subnets.
     */
    public readonly connectedIPv6Subnets!: pulumi.Output<types.outputs.ConnectedSubnetResponse[] | undefined>;
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    public readonly egressAclId!: pulumi.Output<string | undefined>;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    public readonly exportRoutePolicy!: pulumi.Output<types.outputs.ExportRoutePolicyResponse | undefined>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    public readonly exportRoutePolicyId!: pulumi.Output<string | undefined>;
    /**
     * Extension. Example: NoExtension | NPB.
     */
    public readonly extension!: pulumi.Output<string | undefined>;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    public readonly importRoutePolicy!: pulumi.Output<types.outputs.ImportRoutePolicyResponse | undefined>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    public readonly importRoutePolicyId!: pulumi.Output<string | undefined>;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    public readonly ingressAclId!: pulumi.Output<string | undefined>;
    /**
     * To check whether monitoring of internal network is enabled or not.
     */
    public readonly isMonitoringEnabled!: pulumi.Output<string | undefined>;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Static Route Configuration properties.
     */
    public readonly staticRouteConfiguration!: pulumi.Output<types.outputs.InternalNetworkPropertiesResponseStaticRouteConfiguration | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Vlan identifier. Example: 1001.
     */
    public readonly vlanId!: pulumi.Output<number>;

    /**
     * Create a InternalNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InternalNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.l3IsolationDomainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l3IsolationDomainName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanId'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["bgpConfiguration"] = args ? (args.bgpConfiguration ? pulumi.output(args.bgpConfiguration).apply(types.inputs.internalNetworkPropertiesBgpConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["connectedIPv4Subnets"] = args ? args.connectedIPv4Subnets : undefined;
            resourceInputs["connectedIPv6Subnets"] = args ? args.connectedIPv6Subnets : undefined;
            resourceInputs["egressAclId"] = args ? args.egressAclId : undefined;
            resourceInputs["exportRoutePolicy"] = args ? args.exportRoutePolicy : undefined;
            resourceInputs["exportRoutePolicyId"] = args ? args.exportRoutePolicyId : undefined;
            resourceInputs["extension"] = (args ? args.extension : undefined) ?? "NoExtension";
            resourceInputs["importRoutePolicy"] = args ? args.importRoutePolicy : undefined;
            resourceInputs["importRoutePolicyId"] = args ? args.importRoutePolicyId : undefined;
            resourceInputs["ingressAclId"] = args ? args.ingressAclId : undefined;
            resourceInputs["internalNetworkName"] = args ? args.internalNetworkName : undefined;
            resourceInputs["isMonitoringEnabled"] = (args ? args.isMonitoringEnabled : undefined) ?? "False";
            resourceInputs["l3IsolationDomainName"] = args ? args.l3IsolationDomainName : undefined;
            resourceInputs["mtu"] = (args ? args.mtu : undefined) ?? 1500;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["staticRouteConfiguration"] = args ? (args.staticRouteConfiguration ? pulumi.output(args.staticRouteConfiguration).apply(types.inputs.internalNetworkPropertiesStaticRouteConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["bgpConfiguration"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["connectedIPv4Subnets"] = undefined /*out*/;
            resourceInputs["connectedIPv6Subnets"] = undefined /*out*/;
            resourceInputs["egressAclId"] = undefined /*out*/;
            resourceInputs["exportRoutePolicy"] = undefined /*out*/;
            resourceInputs["exportRoutePolicyId"] = undefined /*out*/;
            resourceInputs["extension"] = undefined /*out*/;
            resourceInputs["importRoutePolicy"] = undefined /*out*/;
            resourceInputs["importRoutePolicyId"] = undefined /*out*/;
            resourceInputs["ingressAclId"] = undefined /*out*/;
            resourceInputs["isMonitoringEnabled"] = undefined /*out*/;
            resourceInputs["mtu"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staticRouteConfiguration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vlanId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:InternalNetwork" }, { type: "azure-native:managednetworkfabric/v20230615:InternalNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InternalNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InternalNetwork resource.
 */
export interface InternalNetworkArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * BGP configuration properties.
     */
    bgpConfiguration?: pulumi.Input<types.inputs.InternalNetworkPropertiesBgpConfigurationArgs>;
    /**
     * List of Connected IPv4 Subnets.
     */
    connectedIPv4Subnets?: pulumi.Input<pulumi.Input<types.inputs.ConnectedSubnetArgs>[]>;
    /**
     * List of connected IPv6 Subnets.
     */
    connectedIPv6Subnets?: pulumi.Input<pulumi.Input<types.inputs.ConnectedSubnetArgs>[]>;
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    egressAclId?: pulumi.Input<string>;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    exportRoutePolicy?: pulumi.Input<types.inputs.ExportRoutePolicyArgs>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    exportRoutePolicyId?: pulumi.Input<string>;
    /**
     * Extension. Example: NoExtension | NPB.
     */
    extension?: pulumi.Input<string | types.enums.Extension>;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    importRoutePolicy?: pulumi.Input<types.inputs.ImportRoutePolicyArgs>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    importRoutePolicyId?: pulumi.Input<string>;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    ingressAclId?: pulumi.Input<string>;
    /**
     * Name of the Internal Network.
     */
    internalNetworkName?: pulumi.Input<string>;
    /**
     * To check whether monitoring of internal network is enabled or not.
     */
    isMonitoringEnabled?: pulumi.Input<string | types.enums.IsMonitoringEnabled>;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    mtu?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Static Route Configuration properties.
     */
    staticRouteConfiguration?: pulumi.Input<types.inputs.InternalNetworkPropertiesStaticRouteConfigurationArgs>;
    /**
     * Vlan identifier. Example: 1001.
     */
    vlanId: pulumi.Input<number>;
}