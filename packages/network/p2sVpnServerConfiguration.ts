import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * P2SVpnServerConfiguration Resource.
 *
 * Uses Azure REST API version 2019-07-01. In version 1.x of the Azure Native provider, it used API version 2019-07-01.
 */
export class P2sVpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing P2sVpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): P2sVpnServerConfiguration {
        return new P2sVpnServerConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:P2sVpnServerConfiguration';

    /**
     * Returns true if the given object is an instance of P2sVpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is P2sVpnServerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === P2sVpnServerConfiguration.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * List of references to P2SVpnGateways.
     */
    public /*out*/ readonly p2SVpnGateways!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    public readonly p2SVpnServerConfigRadiusClientRootCertificates!: pulumi.Output<types.outputs.P2SVpnServerConfigRadiusClientRootCertificateResponse[] | undefined>;
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    public readonly p2SVpnServerConfigRadiusServerRootCertificates!: pulumi.Output<types.outputs.P2SVpnServerConfigRadiusServerRootCertificateResponse[] | undefined>;
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    public readonly p2SVpnServerConfigVpnClientRevokedCertificates!: pulumi.Output<types.outputs.P2SVpnServerConfigVpnClientRevokedCertificateResponse[] | undefined>;
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    public readonly p2SVpnServerConfigVpnClientRootCertificates!: pulumi.Output<types.outputs.P2SVpnServerConfigVpnClientRootCertificateResponse[] | undefined>;
    /**
     * The provisioning state of the P2S VPN server configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    public readonly radiusServerAddress!: pulumi.Output<string | undefined>;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    public readonly radiusServerSecret!: pulumi.Output<string | undefined>;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    public readonly vpnClientIpsecPolicies!: pulumi.Output<types.outputs.IpsecPolicyResponse[] | undefined>;
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    public readonly vpnProtocols!: pulumi.Output<string[] | undefined>;

    /**
     * Create a P2sVpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: P2sVpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualWanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualWanName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["p2SVpnServerConfigRadiusClientRootCertificates"] = args ? args.p2SVpnServerConfigRadiusClientRootCertificates : undefined;
            resourceInputs["p2SVpnServerConfigRadiusServerRootCertificates"] = args ? args.p2SVpnServerConfigRadiusServerRootCertificates : undefined;
            resourceInputs["p2SVpnServerConfigVpnClientRevokedCertificates"] = args ? args.p2SVpnServerConfigVpnClientRevokedCertificates : undefined;
            resourceInputs["p2SVpnServerConfigVpnClientRootCertificates"] = args ? args.p2SVpnServerConfigVpnClientRootCertificates : undefined;
            resourceInputs["p2SVpnServerConfigurationName"] = args ? args.p2SVpnServerConfigurationName : undefined;
            resourceInputs["radiusServerAddress"] = args ? args.radiusServerAddress : undefined;
            resourceInputs["radiusServerSecret"] = args ? args.radiusServerSecret : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualWanName"] = args ? args.virtualWanName : undefined;
            resourceInputs["vpnClientIpsecPolicies"] = args ? args.vpnClientIpsecPolicies : undefined;
            resourceInputs["vpnProtocols"] = args ? args.vpnProtocols : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["p2SVpnGateways"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["p2SVpnGateways"] = undefined /*out*/;
            resourceInputs["p2SVpnServerConfigRadiusClientRootCertificates"] = undefined /*out*/;
            resourceInputs["p2SVpnServerConfigRadiusServerRootCertificates"] = undefined /*out*/;
            resourceInputs["p2SVpnServerConfigVpnClientRevokedCertificates"] = undefined /*out*/;
            resourceInputs["p2SVpnServerConfigVpnClientRootCertificates"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["radiusServerAddress"] = undefined /*out*/;
            resourceInputs["radiusServerSecret"] = undefined /*out*/;
            resourceInputs["vpnClientIpsecPolicies"] = undefined /*out*/;
            resourceInputs["vpnProtocols"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181001:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181101:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20181201:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190201:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190401:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190601:P2sVpnServerConfiguration" }, { type: "azure-native:network/v20190701:P2sVpnServerConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(P2sVpnServerConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a P2sVpnServerConfiguration resource.
 */
export interface P2sVpnServerConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusClientRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.P2SVpnServerConfigRadiusClientRootCertificateArgs>[]>;
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigRadiusServerRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.P2SVpnServerConfigRadiusServerRootCertificateArgs>[]>;
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<types.inputs.P2SVpnServerConfigVpnClientRevokedCertificateArgs>[]>;
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigVpnClientRootCertificates?: pulumi.Input<pulumi.Input<types.inputs.P2SVpnServerConfigVpnClientRootCertificateArgs>[]>;
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    p2SVpnServerConfigurationName?: pulumi.Input<string>;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerAddress?: pulumi.Input<string>;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    radiusServerSecret?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWan.
     */
    virtualWanName: pulumi.Input<string>;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<types.inputs.IpsecPolicyArgs>[]>;
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string | types.enums.VpnGatewayTunnelingProtocol>[]>;
}