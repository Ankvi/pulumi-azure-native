import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a vpn connection.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVpnConnection(args: GetVpnConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVpnConnection", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnConnectionArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: string;
    /**
     * The name of the gateway.
     */
    gatewayName: string;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: string;
}

/**
 * VpnConnection Resource.
 */
export interface GetVpnConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Expected bandwidth in MBPS.
     */
    readonly connectionBandwidth?: number;
    /**
     * The connection status.
     */
    readonly connectionStatus: string;
    /**
     * DPD timeout in seconds for vpn connection.
     */
    readonly dpdTimeoutSeconds?: number;
    /**
     * Egress bytes transferred.
     */
    readonly egressBytesTransferred: number;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp?: boolean;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * EnableBgp flag.
     */
    readonly enableRateLimiting?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Ingress bytes transferred.
     */
    readonly ingressBytesTransferred: number;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: types.outputs.IpsecPolicyResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the VPN connection resource.
     */
    readonly provisioningState: string;
    /**
     * Id of the connected vpn site.
     */
    readonly remoteVpnSite?: types.outputs.SubResourceResponse;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: types.outputs.RoutingConfigurationResponse;
    /**
     * Routing weight for vpn connection.
     */
    readonly routingWeight?: number;
    /**
     * SharedKey for the vpn connection.
     */
    readonly sharedKey?: string;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    readonly trafficSelectorPolicies?: types.outputs.TrafficSelectorPolicyResponse[];
    /**
     * Use local azure ip to initiate connection.
     */
    readonly useLocalAzureIpAddress?: boolean;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors?: boolean;
    /**
     * Connection protocol used for this connection.
     */
    readonly vpnConnectionProtocolType?: string;
    /**
     * List of all vpn site link connections to the gateway.
     */
    readonly vpnLinkConnections?: types.outputs.VpnSiteLinkConnectionResponse[];
}
/**
 * Retrieves the details of a vpn connection.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVpnConnectionOutput(args: GetVpnConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVpnConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVpnConnection", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnConnectionOutputArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
}