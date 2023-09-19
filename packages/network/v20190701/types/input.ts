import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
     */
    export interface AddressSpaceArgs {
        /**
         * A list of address blocks reserved for this virtual network in CIDR notation.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * An IPSec Policy configuration for a virtual network gateway connection.
     */
    export interface IpsecPolicyArgs {
        /**
         * The DH Group used in IKE Phase 1 for initial SA.
         */
        dhGroup: pulumi.Input<string | enums.DhGroup>;
        /**
         * The IKE encryption algorithm (IKE phase 2).
         */
        ikeEncryption: pulumi.Input<string | enums.IkeEncryption>;
        /**
         * The IKE integrity algorithm (IKE phase 2).
         */
        ikeIntegrity: pulumi.Input<string | enums.IkeIntegrity>;
        /**
         * The IPSec encryption algorithm (IKE phase 1).
         */
        ipsecEncryption: pulumi.Input<string | enums.IpsecEncryption>;
        /**
         * The IPSec integrity algorithm (IKE phase 1).
         */
        ipsecIntegrity: pulumi.Input<string | enums.IpsecIntegrity>;
        /**
         * The Pfs Group used in IKE Phase 2 for new child SA.
         */
        pfsGroup: pulumi.Input<string | enums.PfsGroup>;
        /**
         * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
         */
        saDataSizeKilobytes: pulumi.Input<number>;
        /**
         * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
         */
        saLifeTimeSeconds: pulumi.Input<number>;
    }

    /**
     * Define match conditions.
     */
    export interface MatchConditionArgs {
        /**
         * Match value.
         */
        matchValues: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of match variables.
         */
        matchVariables: pulumi.Input<pulumi.Input<MatchVariableArgs>[]>;
        /**
         * Describes if this is negate condition or not.
         */
        negationConditon?: pulumi.Input<boolean>;
        /**
         * Describes operator to be matched.
         */
        operator: pulumi.Input<string | enums.WebApplicationFirewallOperator>;
        /**
         * List of transforms.
         */
        transforms?: pulumi.Input<pulumi.Input<string | enums.WebApplicationFirewallTransform>[]>;
    }

    /**
     * Define match variables.
     */
    export interface MatchVariableArgs {
        /**
         * Describes field of the matchVariable collection.
         */
        selector?: pulumi.Input<string>;
        /**
         * Match Variable.
         */
        variableName: pulumi.Input<string | enums.WebApplicationFirewallMatchVariable>;
    }

    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    export interface P2SVpnServerConfigRadiusClientRootCertificateArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The Radius client root certificate thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    export interface P2SVpnServerConfigRadiusServerRootCertificateArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The certificate public data.
         */
        publicCertData: pulumi.Input<string>;
    }

    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    export interface P2SVpnServerConfigVpnClientRevokedCertificateArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The revoked VPN client certificate thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    export interface P2SVpnServerConfigVpnClientRootCertificateArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The certificate public data.
         */
        publicCertData: pulumi.Input<string>;
    }

    /**
     * P2SVpnServerConfiguration Resource.
     */
    export interface P2SVpnServerConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
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
        p2SVpnServerConfigRadiusClientRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigRadiusClientRootCertificateArgs>[]>;
        /**
         * Radius Server root certificate of P2SVpnServerConfiguration.
         */
        p2SVpnServerConfigRadiusServerRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigRadiusServerRootCertificateArgs>[]>;
        /**
         * VPN client revoked certificate of P2SVpnServerConfiguration.
         */
        p2SVpnServerConfigVpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigVpnClientRevokedCertificateArgs>[]>;
        /**
         * VPN client root certificate of P2SVpnServerConfiguration.
         */
        p2SVpnServerConfigVpnClientRootCertificates?: pulumi.Input<pulumi.Input<P2SVpnServerConfigVpnClientRootCertificateArgs>[]>;
        /**
         * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
         */
        radiusServerAddress?: pulumi.Input<string>;
        /**
         * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
         */
        radiusServerSecret?: pulumi.Input<string>;
        /**
         * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
         */
        vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
        /**
         * VPN protocols for the P2SVpnServerConfiguration.
         */
        vpnProtocols?: pulumi.Input<pulumi.Input<string | enums.VpnGatewayTunnelingProtocol>[]>;
    }

    /**
     * Defines contents of a web application firewall global configuration.
     */
    export interface PolicySettingsArgs {
        /**
         * Describes if the policy is in enabled state or disabled state.
         */
        enabledState?: pulumi.Input<string | enums.WebApplicationFirewallEnabledState>;
        /**
         * Describes if it is in detection mode or prevention mode at policy level.
         */
        mode?: pulumi.Input<string | enums.WebApplicationFirewallMode>;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Defines contents of a web application rule.
     */
    export interface WebApplicationFirewallCustomRuleArgs {
        /**
         * Type of Actions.
         */
        action: pulumi.Input<string | enums.WebApplicationFirewallAction>;
        /**
         * List of match conditions.
         */
        matchConditions: pulumi.Input<pulumi.Input<MatchConditionArgs>[]>;
        /**
         * The name of the resource that is unique within a policy. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
         */
        priority: pulumi.Input<number>;
        /**
         * Describes type of rule.
         */
        ruleType: pulumi.Input<string | enums.WebApplicationFirewallRuleType>;
    }
