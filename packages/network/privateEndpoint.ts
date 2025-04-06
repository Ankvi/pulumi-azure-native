import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Private endpoint resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpoint {
        return new PrivateEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PrivateEndpoint';

    /**
     * Returns true if the given object is an instance of PrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpoint.__pulumiType;
    }

    /**
     * Application security groups in which the private endpoint IP configuration is included.
     */
    public readonly applicationSecurityGroups!: pulumi.Output<types.outputs.ApplicationSecurityGroupResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An array of custom dns configurations.
     */
    public readonly customDnsConfigs!: pulumi.Output<types.outputs.CustomDnsConfigPropertiesFormatResponse[] | undefined>;
    /**
     * The custom name of the network interface attached to the private endpoint.
     */
    public readonly customNetworkInterfaceName!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the load balancer.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.PrivateEndpointIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    public readonly manualPrivateLinkServiceConnections!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * A grouping of information about the connection to the remote resource.
     */
    public readonly privateLinkServiceConnections!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionResponse[] | undefined>;
    /**
     * The provisioning state of the private endpoint resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    public readonly subnet!: pulumi.Output<types.outputs.SubnetResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationSecurityGroups"] = args ? args.applicationSecurityGroups : undefined;
            resourceInputs["customDnsConfigs"] = args ? args.customDnsConfigs : undefined;
            resourceInputs["customNetworkInterfaceName"] = args ? args.customNetworkInterfaceName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["manualPrivateLinkServiceConnections"] = args ? args.manualPrivateLinkServiceConnections : undefined;
            resourceInputs["privateEndpointName"] = args ? args.privateEndpointName : undefined;
            resourceInputs["privateLinkServiceConnections"] = args ? args.privateLinkServiceConnections : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnet"] = args ? (args.subnet ? pulumi.output(args.subnet).apply(types.inputs.subnetArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationSecurityGroups"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customDnsConfigs"] = undefined /*out*/;
            resourceInputs["customNetworkInterfaceName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["manualPrivateLinkServiceConnections"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:PrivateEndpoint" }, { type: "azure-native:network/v20181001:PrivateEndpoint" }, { type: "azure-native:network/v20181101:PrivateEndpoint" }, { type: "azure-native:network/v20181201:PrivateEndpoint" }, { type: "azure-native:network/v20190201:InterfaceEndpoint" }, { type: "azure-native:network/v20190201:PrivateEndpoint" }, { type: "azure-native:network/v20190401:PrivateEndpoint" }, { type: "azure-native:network/v20190601:PrivateEndpoint" }, { type: "azure-native:network/v20190701:PrivateEndpoint" }, { type: "azure-native:network/v20190801:PrivateEndpoint" }, { type: "azure-native:network/v20190901:PrivateEndpoint" }, { type: "azure-native:network/v20191101:PrivateEndpoint" }, { type: "azure-native:network/v20191201:PrivateEndpoint" }, { type: "azure-native:network/v20200301:PrivateEndpoint" }, { type: "azure-native:network/v20200401:PrivateEndpoint" }, { type: "azure-native:network/v20200501:PrivateEndpoint" }, { type: "azure-native:network/v20200601:PrivateEndpoint" }, { type: "azure-native:network/v20200701:PrivateEndpoint" }, { type: "azure-native:network/v20200801:PrivateEndpoint" }, { type: "azure-native:network/v20201101:PrivateEndpoint" }, { type: "azure-native:network/v20210201:PrivateEndpoint" }, { type: "azure-native:network/v20210301:PrivateEndpoint" }, { type: "azure-native:network/v20210501:PrivateEndpoint" }, { type: "azure-native:network/v20210801:PrivateEndpoint" }, { type: "azure-native:network/v20220101:PrivateEndpoint" }, { type: "azure-native:network/v20220501:PrivateEndpoint" }, { type: "azure-native:network/v20220701:PrivateEndpoint" }, { type: "azure-native:network/v20220901:PrivateEndpoint" }, { type: "azure-native:network/v20221101:PrivateEndpoint" }, { type: "azure-native:network/v20230201:PrivateEndpoint" }, { type: "azure-native:network/v20230401:PrivateEndpoint" }, { type: "azure-native:network/v20230501:PrivateEndpoint" }, { type: "azure-native:network/v20230601:PrivateEndpoint" }, { type: "azure-native:network/v20230901:PrivateEndpoint" }, { type: "azure-native:network/v20231101:PrivateEndpoint" }, { type: "azure-native:network/v20240101:PrivateEndpoint" }, { type: "azure-native:network/v20240301:PrivateEndpoint" }, { type: "azure-native:network/v20240501:PrivateEndpoint" }, { type: "azure-native:network:InterfaceEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpoint resource.
 */
export interface PrivateEndpointArgs {
    /**
     * Application security groups in which the private endpoint IP configuration is included.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<types.inputs.ApplicationSecurityGroupArgs>[]>;
    /**
     * An array of custom dns configurations.
     */
    customDnsConfigs?: pulumi.Input<pulumi.Input<types.inputs.CustomDnsConfigPropertiesFormatArgs>[]>;
    /**
     * The custom name of the network interface attached to the private endpoint.
     */
    customNetworkInterfaceName?: pulumi.Input<string>;
    /**
     * The extended location of the load balancer.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateLinkServiceConnectionArgs>[]>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName?: pulumi.Input<string>;
    /**
     * A grouping of information about the connection to the remote resource.
     */
    privateLinkServiceConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateLinkServiceConnectionArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    subnet?: pulumi.Input<types.inputs.SubnetArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}