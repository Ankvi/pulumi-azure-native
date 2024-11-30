import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Subnet in a virtual network resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2015-05-01-preview, 2016-03-30, 2019-02-01, 2019-06-01, 2019-08-01, 2020-06-01, 2022-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subnet {
        return new Subnet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:Subnet';

    /**
     * Returns true if the given object is an instance of Subnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subnet.__pulumiType;
    }

    /**
     * The address prefix for the subnet.
     */
    public readonly addressPrefix!: pulumi.Output<string | undefined>;
    /**
     * List of address prefixes for the subnet.
     */
    public readonly addressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * Application gateway IP configurations of virtual network resource.
     */
    public readonly applicationGatewayIPConfigurations!: pulumi.Output<types.outputs.ApplicationGatewayIPConfigurationResponse[] | undefined>;
    /**
     * An array of references to the delegations on the subnet.
     */
    public readonly delegations!: pulumi.Output<types.outputs.DelegationResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Array of IpAllocation which reference this subnet.
     */
    public readonly ipAllocations!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    public /*out*/ readonly ipConfigurationProfiles!: pulumi.Output<types.outputs.IPConfigurationProfileResponse[]>;
    /**
     * An array of references to the network interface IP configurations using subnet.
     */
    public /*out*/ readonly ipConfigurations!: pulumi.Output<types.outputs.IPConfigurationResponse[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Nat gateway associated with this subnet.
     */
    public readonly natGateway!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    public readonly networkSecurityGroup!: pulumi.Output<types.outputs.NetworkSecurityGroupResponse | undefined>;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    public readonly privateEndpointNetworkPolicies!: pulumi.Output<string | undefined>;
    /**
     * An array of references to private endpoints.
     */
    public /*out*/ readonly privateEndpoints!: pulumi.Output<types.outputs.PrivateEndpointResponse[]>;
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    public readonly privateLinkServiceNetworkPolicies!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the subnet resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    public /*out*/ readonly purpose!: pulumi.Output<string>;
    /**
     * An array of references to the external resources using subnet.
     */
    public /*out*/ readonly resourceNavigationLinks!: pulumi.Output<types.outputs.ResourceNavigationLinkResponse[]>;
    /**
     * The reference to the RouteTable resource.
     */
    public readonly routeTable!: pulumi.Output<types.outputs.RouteTableResponse | undefined>;
    /**
     * An array of references to services injecting into this subnet.
     */
    public /*out*/ readonly serviceAssociationLinks!: pulumi.Output<types.outputs.ServiceAssociationLinkResponse[]>;
    /**
     * An array of service endpoint policies.
     */
    public readonly serviceEndpointPolicies!: pulumi.Output<types.outputs.ServiceEndpointPolicyResponse[] | undefined>;
    /**
     * An array of service endpoints.
     */
    public readonly serviceEndpoints!: pulumi.Output<types.outputs.ServiceEndpointPropertiesFormatResponse[] | undefined>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["addressPrefixes"] = args ? args.addressPrefixes : undefined;
            resourceInputs["applicationGatewayIPConfigurations"] = args ? args.applicationGatewayIPConfigurations : undefined;
            resourceInputs["delegations"] = args ? args.delegations : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipAllocations"] = args ? args.ipAllocations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natGateway"] = args ? args.natGateway : undefined;
            resourceInputs["networkSecurityGroup"] = args ? args.networkSecurityGroup : undefined;
            resourceInputs["privateEndpointNetworkPolicies"] = (args ? args.privateEndpointNetworkPolicies : undefined) ?? "Disabled";
            resourceInputs["privateLinkServiceNetworkPolicies"] = (args ? args.privateLinkServiceNetworkPolicies : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeTable"] = args ? args.routeTable : undefined;
            resourceInputs["serviceEndpointPolicies"] = args ? args.serviceEndpointPolicies : undefined;
            resourceInputs["serviceEndpoints"] = args ? args.serviceEndpoints : undefined;
            resourceInputs["subnetName"] = args ? args.subnetName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipConfigurationProfiles"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["privateEndpoints"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["purpose"] = undefined /*out*/;
            resourceInputs["resourceNavigationLinks"] = undefined /*out*/;
            resourceInputs["serviceAssociationLinks"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["addressPrefixes"] = undefined /*out*/;
            resourceInputs["applicationGatewayIPConfigurations"] = undefined /*out*/;
            resourceInputs["delegations"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipAllocations"] = undefined /*out*/;
            resourceInputs["ipConfigurationProfiles"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natGateway"] = undefined /*out*/;
            resourceInputs["networkSecurityGroup"] = undefined /*out*/;
            resourceInputs["privateEndpointNetworkPolicies"] = undefined /*out*/;
            resourceInputs["privateEndpoints"] = undefined /*out*/;
            resourceInputs["privateLinkServiceNetworkPolicies"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["purpose"] = undefined /*out*/;
            resourceInputs["resourceNavigationLinks"] = undefined /*out*/;
            resourceInputs["routeTable"] = undefined /*out*/;
            resourceInputs["serviceAssociationLinks"] = undefined /*out*/;
            resourceInputs["serviceEndpointPolicies"] = undefined /*out*/;
            resourceInputs["serviceEndpoints"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150501preview:Subnet" }, { type: "azure-native:network/v20150615:Subnet" }, { type: "azure-native:network/v20160330:Subnet" }, { type: "azure-native:network/v20160601:Subnet" }, { type: "azure-native:network/v20160901:Subnet" }, { type: "azure-native:network/v20161201:Subnet" }, { type: "azure-native:network/v20170301:Subnet" }, { type: "azure-native:network/v20170601:Subnet" }, { type: "azure-native:network/v20170801:Subnet" }, { type: "azure-native:network/v20170901:Subnet" }, { type: "azure-native:network/v20171001:Subnet" }, { type: "azure-native:network/v20171101:Subnet" }, { type: "azure-native:network/v20180101:Subnet" }, { type: "azure-native:network/v20180201:Subnet" }, { type: "azure-native:network/v20180401:Subnet" }, { type: "azure-native:network/v20180601:Subnet" }, { type: "azure-native:network/v20180701:Subnet" }, { type: "azure-native:network/v20180801:Subnet" }, { type: "azure-native:network/v20181001:Subnet" }, { type: "azure-native:network/v20181101:Subnet" }, { type: "azure-native:network/v20181201:Subnet" }, { type: "azure-native:network/v20190201:Subnet" }, { type: "azure-native:network/v20190401:Subnet" }, { type: "azure-native:network/v20190601:Subnet" }, { type: "azure-native:network/v20190701:Subnet" }, { type: "azure-native:network/v20190801:Subnet" }, { type: "azure-native:network/v20190901:Subnet" }, { type: "azure-native:network/v20191101:Subnet" }, { type: "azure-native:network/v20191201:Subnet" }, { type: "azure-native:network/v20200301:Subnet" }, { type: "azure-native:network/v20200401:Subnet" }, { type: "azure-native:network/v20200501:Subnet" }, { type: "azure-native:network/v20200601:Subnet" }, { type: "azure-native:network/v20200701:Subnet" }, { type: "azure-native:network/v20200801:Subnet" }, { type: "azure-native:network/v20201101:Subnet" }, { type: "azure-native:network/v20210201:Subnet" }, { type: "azure-native:network/v20210301:Subnet" }, { type: "azure-native:network/v20210501:Subnet" }, { type: "azure-native:network/v20210801:Subnet" }, { type: "azure-native:network/v20220101:Subnet" }, { type: "azure-native:network/v20220501:Subnet" }, { type: "azure-native:network/v20220701:Subnet" }, { type: "azure-native:network/v20220901:Subnet" }, { type: "azure-native:network/v20221101:Subnet" }, { type: "azure-native:network/v20230201:Subnet" }, { type: "azure-native:network/v20230401:Subnet" }, { type: "azure-native:network/v20230501:Subnet" }, { type: "azure-native:network/v20230601:Subnet" }, { type: "azure-native:network/v20230901:Subnet" }, { type: "azure-native:network/v20231101:Subnet" }, { type: "azure-native:network/v20240101:Subnet" }, { type: "azure-native:network/v20240301:Subnet" }, { type: "azure-native:network/v20240501:Subnet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Subnet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    /**
     * The address prefix for the subnet.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * List of address prefixes for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Application gateway IP configurations of virtual network resource.
     */
    applicationGatewayIPConfigurations?: pulumi.Input<pulumi.Input<types.inputs.ApplicationGatewayIPConfigurationArgs>[]>;
    /**
     * An array of references to the delegations on the subnet.
     */
    delegations?: pulumi.Input<pulumi.Input<types.inputs.DelegationArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Array of IpAllocation which reference this subnet.
     */
    ipAllocations?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Nat gateway associated with this subnet.
     */
    natGateway?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: pulumi.Input<types.inputs.NetworkSecurityGroupArgs>;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    privateEndpointNetworkPolicies?: pulumi.Input<string | types.enums.VirtualNetworkPrivateEndpointNetworkPolicies>;
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    privateLinkServiceNetworkPolicies?: pulumi.Input<string | types.enums.VirtualNetworkPrivateLinkServiceNetworkPolicies>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the RouteTable resource.
     */
    routeTable?: pulumi.Input<types.inputs.RouteTableArgs>;
    /**
     * An array of service endpoint policies.
     */
    serviceEndpointPolicies?: pulumi.Input<pulumi.Input<types.inputs.ServiceEndpointPolicyArgs>[]>;
    /**
     * An array of service endpoints.
     */
    serviceEndpoints?: pulumi.Input<pulumi.Input<types.inputs.ServiceEndpointPropertiesFormatArgs>[]>;
    /**
     * The name of the subnet.
     */
    subnetName?: pulumi.Input<string>;
    /**
     * Resource type.
     */
    type?: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    virtualNetworkName: pulumi.Input<string>;
}