import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * P2SVpnGateway Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class P2sVpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing P2sVpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): P2sVpnGateway {
        return new P2sVpnGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:P2sVpnGateway';

    /**
     * Returns true if the given object is an instance of P2sVpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is P2sVpnGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === P2sVpnGateway.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of all customer specified DNS servers IP addresses.
     */
    public readonly customDnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
     */
    public readonly isRoutingPreferenceInternet!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of all p2s connection configurations of the gateway.
     */
    public readonly p2SConnectionConfigurations!: pulumi.Output<types.outputs.P2SConnectionConfigurationResponse[] | undefined>;
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VirtualHub to which the gateway belongs.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * All P2S VPN clients' connection health status.
     */
    public /*out*/ readonly vpnClientConnectionHealth!: pulumi.Output<types.outputs.VpnClientConnectionHealthResponse>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    public readonly vpnGatewayScaleUnit!: pulumi.Output<number | undefined>;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    public readonly vpnServerConfiguration!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a P2sVpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: P2sVpnGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["customDnsServers"] = args ? args.customDnsServers : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["isRoutingPreferenceInternet"] = args ? args.isRoutingPreferenceInternet : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["p2SConnectionConfigurations"] = args ? args.p2SConnectionConfigurations : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["vpnGatewayScaleUnit"] = args ? args.vpnGatewayScaleUnit : undefined;
            resourceInputs["vpnServerConfiguration"] = args ? args.vpnServerConfiguration : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vpnClientConnectionHealth"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customDnsServers"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isRoutingPreferenceInternet"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["p2SConnectionConfigurations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
            resourceInputs["vpnClientConnectionHealth"] = undefined /*out*/;
            resourceInputs["vpnGatewayScaleUnit"] = undefined /*out*/;
            resourceInputs["vpnServerConfiguration"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:P2sVpnGateway" }, { type: "azure-native:network/v20181001:P2sVpnGateway" }, { type: "azure-native:network/v20181101:P2sVpnGateway" }, { type: "azure-native:network/v20181201:P2sVpnGateway" }, { type: "azure-native:network/v20190201:P2sVpnGateway" }, { type: "azure-native:network/v20190401:P2sVpnGateway" }, { type: "azure-native:network/v20190601:P2sVpnGateway" }, { type: "azure-native:network/v20190701:P2sVpnGateway" }, { type: "azure-native:network/v20190801:P2sVpnGateway" }, { type: "azure-native:network/v20190901:P2sVpnGateway" }, { type: "azure-native:network/v20191101:P2sVpnGateway" }, { type: "azure-native:network/v20191201:P2sVpnGateway" }, { type: "azure-native:network/v20200301:P2sVpnGateway" }, { type: "azure-native:network/v20200401:P2sVpnGateway" }, { type: "azure-native:network/v20200501:P2sVpnGateway" }, { type: "azure-native:network/v20200601:P2sVpnGateway" }, { type: "azure-native:network/v20200701:P2sVpnGateway" }, { type: "azure-native:network/v20200801:P2sVpnGateway" }, { type: "azure-native:network/v20201101:P2sVpnGateway" }, { type: "azure-native:network/v20210201:P2sVpnGateway" }, { type: "azure-native:network/v20210301:P2sVpnGateway" }, { type: "azure-native:network/v20210501:P2sVpnGateway" }, { type: "azure-native:network/v20210801:P2sVpnGateway" }, { type: "azure-native:network/v20220101:P2sVpnGateway" }, { type: "azure-native:network/v20220501:P2sVpnGateway" }, { type: "azure-native:network/v20220701:P2sVpnGateway" }, { type: "azure-native:network/v20220901:P2sVpnGateway" }, { type: "azure-native:network/v20221101:P2sVpnGateway" }, { type: "azure-native:network/v20230201:P2sVpnGateway" }, { type: "azure-native:network/v20230401:P2sVpnGateway" }, { type: "azure-native:network/v20230501:P2sVpnGateway" }, { type: "azure-native:network/v20230601:P2sVpnGateway" }, { type: "azure-native:network/v20230901:P2sVpnGateway" }, { type: "azure-native:network/v20231101:P2sVpnGateway" }, { type: "azure-native:network/v20240101:P2sVpnGateway" }, { type: "azure-native:network/v20240301:P2sVpnGateway" }, { type: "azure-native:network/v20240501:P2sVpnGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(P2sVpnGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a P2sVpnGateway resource.
 */
export interface P2sVpnGatewayArgs {
    /**
     * List of all customer specified DNS servers IP addresses.
     */
    customDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the gateway.
     */
    gatewayName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
     */
    isRoutingPreferenceInternet?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * List of all p2s connection configurations of the gateway.
     */
    p2SConnectionConfigurations?: pulumi.Input<pulumi.Input<types.inputs.P2SConnectionConfigurationArgs>[]>;
    /**
     * The resource group name of the P2SVpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VirtualHub to which the gateway belongs.
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    vpnGatewayScaleUnit?: pulumi.Input<number>;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    vpnServerConfiguration?: pulumi.Input<types.inputs.SubResourceArgs>;
}