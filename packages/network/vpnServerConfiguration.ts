import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnServerConfiguration Resource.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class VpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnServerConfiguration {
        return new VpnServerConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VpnServerConfiguration';

    /**
     * Returns true if the given object is an instance of VpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnServerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnServerConfiguration.__pulumiType;
    }

    /**
     * The set of aad vpn authentication parameters.
     */
    public readonly aadAuthenticationParameters!: pulumi.Output<types.outputs.AadAuthenticationParametersResponse | undefined>;
    /**
     * List of all VpnServerConfigurationPolicyGroups.
     */
    public readonly configurationPolicyGroups!: pulumi.Output<types.outputs.VpnServerConfigurationPolicyGroupResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of references to P2SVpnGateways.
     */
    public /*out*/ readonly p2SVpnGateways!: pulumi.Output<types.outputs.P2SVpnGatewayResponse[]>;
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    public readonly radiusClientRootCertificates!: pulumi.Output<types.outputs.VpnServerConfigRadiusClientRootCertificateResponse[] | undefined>;
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    public readonly radiusServerAddress!: pulumi.Output<string | undefined>;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    public readonly radiusServerRootCertificates!: pulumi.Output<types.outputs.VpnServerConfigRadiusServerRootCertificateResponse[] | undefined>;
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    public readonly radiusServerSecret!: pulumi.Output<string | undefined>;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    public readonly radiusServers!: pulumi.Output<types.outputs.RadiusServerResponse[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    public readonly vpnAuthenticationTypes!: pulumi.Output<string[] | undefined>;
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    public readonly vpnClientIpsecPolicies!: pulumi.Output<types.outputs.IpsecPolicyResponse[] | undefined>;
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    public readonly vpnClientRevokedCertificates!: pulumi.Output<types.outputs.VpnServerConfigVpnClientRevokedCertificateResponse[] | undefined>;
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    public readonly vpnClientRootCertificates!: pulumi.Output<types.outputs.VpnServerConfigVpnClientRootCertificateResponse[] | undefined>;
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    public readonly vpnProtocols!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aadAuthenticationParameters"] = args ? args.aadAuthenticationParameters : undefined;
            resourceInputs["configurationPolicyGroups"] = args ? args.configurationPolicyGroups : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["radiusClientRootCertificates"] = args ? args.radiusClientRootCertificates : undefined;
            resourceInputs["radiusServerAddress"] = args ? args.radiusServerAddress : undefined;
            resourceInputs["radiusServerRootCertificates"] = args ? args.radiusServerRootCertificates : undefined;
            resourceInputs["radiusServerSecret"] = args ? args.radiusServerSecret : undefined;
            resourceInputs["radiusServers"] = args ? args.radiusServers : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpnAuthenticationTypes"] = args ? args.vpnAuthenticationTypes : undefined;
            resourceInputs["vpnClientIpsecPolicies"] = args ? args.vpnClientIpsecPolicies : undefined;
            resourceInputs["vpnClientRevokedCertificates"] = args ? args.vpnClientRevokedCertificates : undefined;
            resourceInputs["vpnClientRootCertificates"] = args ? args.vpnClientRootCertificates : undefined;
            resourceInputs["vpnProtocols"] = args ? args.vpnProtocols : undefined;
            resourceInputs["vpnServerConfigurationName"] = args ? args.vpnServerConfigurationName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["p2SVpnGateways"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadAuthenticationParameters"] = undefined /*out*/;
            resourceInputs["configurationPolicyGroups"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["p2SVpnGateways"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["radiusClientRootCertificates"] = undefined /*out*/;
            resourceInputs["radiusServerAddress"] = undefined /*out*/;
            resourceInputs["radiusServerRootCertificates"] = undefined /*out*/;
            resourceInputs["radiusServerSecret"] = undefined /*out*/;
            resourceInputs["radiusServers"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vpnAuthenticationTypes"] = undefined /*out*/;
            resourceInputs["vpnClientIpsecPolicies"] = undefined /*out*/;
            resourceInputs["vpnClientRevokedCertificates"] = undefined /*out*/;
            resourceInputs["vpnClientRootCertificates"] = undefined /*out*/;
            resourceInputs["vpnProtocols"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190801:VpnServerConfiguration" }, { type: "azure-native:network/v20190901:VpnServerConfiguration" }, { type: "azure-native:network/v20191101:VpnServerConfiguration" }, { type: "azure-native:network/v20191201:VpnServerConfiguration" }, { type: "azure-native:network/v20200301:VpnServerConfiguration" }, { type: "azure-native:network/v20200401:VpnServerConfiguration" }, { type: "azure-native:network/v20200501:VpnServerConfiguration" }, { type: "azure-native:network/v20200601:VpnServerConfiguration" }, { type: "azure-native:network/v20200701:VpnServerConfiguration" }, { type: "azure-native:network/v20200801:VpnServerConfiguration" }, { type: "azure-native:network/v20201101:VpnServerConfiguration" }, { type: "azure-native:network/v20210201:VpnServerConfiguration" }, { type: "azure-native:network/v20210301:VpnServerConfiguration" }, { type: "azure-native:network/v20210501:VpnServerConfiguration" }, { type: "azure-native:network/v20210801:VpnServerConfiguration" }, { type: "azure-native:network/v20220101:VpnServerConfiguration" }, { type: "azure-native:network/v20220501:VpnServerConfiguration" }, { type: "azure-native:network/v20220701:VpnServerConfiguration" }, { type: "azure-native:network/v20220901:VpnServerConfiguration" }, { type: "azure-native:network/v20221101:VpnServerConfiguration" }, { type: "azure-native:network/v20230201:VpnServerConfiguration" }, { type: "azure-native:network/v20230401:VpnServerConfiguration" }, { type: "azure-native:network/v20230501:VpnServerConfiguration" }, { type: "azure-native:network/v20230601:VpnServerConfiguration" }, { type: "azure-native:network/v20230901:VpnServerConfiguration" }, { type: "azure-native:network/v20231101:VpnServerConfiguration" }, { type: "azure-native:network/v20240101:VpnServerConfiguration" }, { type: "azure-native:network/v20240301:VpnServerConfiguration" }, { type: "azure-native:network/v20240501:VpnServerConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VpnServerConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnServerConfiguration resource.
 */
export interface VpnServerConfigurationArgs {
    /**
     * The set of aad vpn authentication parameters.
     */
    aadAuthenticationParameters?: pulumi.Input<types.inputs.AadAuthenticationParametersArgs>;
    /**
     * List of all VpnServerConfigurationPolicyGroups.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    configurationPolicyGroups?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigurationPolicyGroupArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration that is unique within a resource group.
     */
    name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    radiusClientRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigRadiusClientRootCertificateArgs>[]>;
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: pulumi.Input<string>;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    radiusServerRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigRadiusServerRootCertificateArgs>[]>;
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: pulumi.Input<string>;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    radiusServers?: pulumi.Input<pulumi.Input<types.inputs.RadiusServerArgs>[]>;
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    vpnAuthenticationTypes?: pulumi.Input<pulumi.Input<string | types.enums.VpnAuthenticationType>[]>;
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<types.inputs.IpsecPolicyArgs>[]>;
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    vpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigVpnClientRevokedCertificateArgs>[]>;
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    vpnClientRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigVpnClientRootCertificateArgs>[]>;
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string | types.enums.VpnGatewayTunnelingProtocol>[]>;
    /**
     * The name of the VpnServerConfiguration being created or updated.
     */
    vpnServerConfigurationName?: pulumi.Input<string>;
}