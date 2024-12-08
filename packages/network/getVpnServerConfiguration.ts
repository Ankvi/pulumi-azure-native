import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VpnServerConfiguration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVpnServerConfiguration(args: GetVpnServerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVpnServerConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "vpnServerConfigurationName": args.vpnServerConfigurationName,
    }, opts);
}

export interface GetVpnServerConfigurationArgs {
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: string;
    /**
     * The name of the VpnServerConfiguration being retrieved.
     */
    vpnServerConfigurationName: string;
}

/**
 * VpnServerConfiguration Resource.
 */
export interface GetVpnServerConfigurationResult {
    /**
     * The set of aad vpn authentication parameters.
     */
    readonly aadAuthenticationParameters?: types.outputs.AadAuthenticationParametersResponse;
    /**
     * List of all VpnServerConfigurationPolicyGroups.
     */
    readonly configurationPolicyGroups?: types.outputs.VpnServerConfigurationPolicyGroupResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: types.outputs.P2SVpnGatewayResponse[];
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    readonly radiusClientRootCertificates?: types.outputs.VpnServerConfigRadiusClientRootCertificateResponse[];
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress?: string;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    readonly radiusServerRootCertificates?: types.outputs.VpnServerConfigRadiusServerRootCertificateResponse[];
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret?: string;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    readonly radiusServers?: types.outputs.RadiusServerResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    readonly vpnAuthenticationTypes?: string[];
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies?: types.outputs.IpsecPolicyResponse[];
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    readonly vpnClientRevokedCertificates?: types.outputs.VpnServerConfigVpnClientRevokedCertificateResponse[];
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    readonly vpnClientRootCertificates?: types.outputs.VpnServerConfigVpnClientRootCertificateResponse[];
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    readonly vpnProtocols?: string[];
}
/**
 * Retrieves the details of a VpnServerConfiguration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getVpnServerConfigurationOutput(args: GetVpnServerConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVpnServerConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVpnServerConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "vpnServerConfigurationName": args.vpnServerConfigurationName,
    }, opts);
}

export interface GetVpnServerConfigurationOutputArgs {
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration being retrieved.
     */
    vpnServerConfigurationName: pulumi.Input<string>;
}