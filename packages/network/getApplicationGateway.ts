import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified application gateway.
 * Azure REST API version: 2023-02-01.
 */
export function getApplicationGateway(args: GetApplicationGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getApplicationGateway", {
        "applicationGatewayName": args.applicationGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGatewayArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Application gateway resource.
 */
export interface GetApplicationGatewayResult {
    /**
     * Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly authenticationCertificates?: types.outputs.network.ApplicationGatewayAuthenticationCertificateResponse[];
    /**
     * Autoscale Configuration.
     */
    readonly autoscaleConfiguration?: types.outputs.network.ApplicationGatewayAutoscaleConfigurationResponse;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendAddressPools?: types.outputs.network.ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendHttpSettingsCollection?: types.outputs.network.ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * Backend settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendSettingsCollection?: types.outputs.network.ApplicationGatewayBackendSettingsResponse[];
    /**
     * Custom error configurations of the application gateway resource.
     */
    readonly customErrorConfigurations?: types.outputs.network.ApplicationGatewayCustomErrorResponse[];
    /**
     * The default predefined SSL Policy applied on the application gateway resource.
     */
    readonly defaultPredefinedSslPolicy: string;
    /**
     * Whether FIPS is enabled on the application gateway resource.
     */
    readonly enableFips?: boolean;
    /**
     * Whether HTTP2 is enabled on the application gateway resource.
     */
    readonly enableHttp2?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Reference to the FirewallPolicy resource.
     */
    readonly firewallPolicy?: types.outputs.network.SubResourceResponse;
    /**
     * If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
     */
    readonly forceFirewallPolicyAssociation?: boolean;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendIPConfigurations?: types.outputs.network.ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendPorts?: types.outputs.network.ApplicationGatewayFrontendPortResponse[];
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly gatewayIPConfigurations?: types.outputs.network.ApplicationGatewayIPConfigurationResponse[];
    /**
     * Global Configuration.
     */
    readonly globalConfiguration?: types.outputs.network.ApplicationGatewayGlobalConfigurationResponse;
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly httpListeners?: types.outputs.network.ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of the application gateway, if configured.
     */
    readonly identity?: types.outputs.network.ManagedServiceIdentityResponse;
    /**
     * Listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly listeners?: types.outputs.network.ApplicationGatewayListenerResponse[];
    /**
     * Load distribution policies of the application gateway resource.
     */
    readonly loadDistributionPolicies?: types.outputs.network.ApplicationGatewayLoadDistributionPolicyResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Operational state of the application gateway resource.
     */
    readonly operationalState: string;
    /**
     * Private Endpoint connections on application gateway.
     */
    readonly privateEndpointConnections: types.outputs.network.ApplicationGatewayPrivateEndpointConnectionResponse[];
    /**
     * PrivateLink configurations on application gateway.
     */
    readonly privateLinkConfigurations?: types.outputs.network.ApplicationGatewayPrivateLinkConfigurationResponse[];
    /**
     * Probes of the application gateway resource.
     */
    readonly probes?: types.outputs.network.ApplicationGatewayProbeResponse[];
    /**
     * The provisioning state of the application gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly redirectConfigurations?: types.outputs.network.ApplicationGatewayRedirectConfigurationResponse[];
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules?: types.outputs.network.ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * The resource GUID property of the application gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * Rewrite rules for the application gateway resource.
     */
    readonly rewriteRuleSets?: types.outputs.network.ApplicationGatewayRewriteRuleSetResponse[];
    /**
     * Routing rules of the application gateway resource.
     */
    readonly routingRules?: types.outputs.network.ApplicationGatewayRoutingRuleResponse[];
    /**
     * SKU of the application gateway resource.
     */
    readonly sku?: types.outputs.network.ApplicationGatewaySkuResponse;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslCertificates?: types.outputs.network.ApplicationGatewaySslCertificateResponse[];
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy?: types.outputs.network.ApplicationGatewaySslPolicyResponse;
    /**
     * SSL profiles of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslProfiles?: types.outputs.network.ApplicationGatewaySslProfileResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Trusted client certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedClientCertificates?: types.outputs.network.ApplicationGatewayTrustedClientCertificateResponse[];
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedRootCertificates?: types.outputs.network.ApplicationGatewayTrustedRootCertificateResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly urlPathMaps?: types.outputs.network.ApplicationGatewayUrlPathMapResponse[];
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration?: types.outputs.network.ApplicationGatewayWebApplicationFirewallConfigurationResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified application gateway.
 * Azure REST API version: 2023-02-01.
 */
export function getApplicationGatewayOutput(args: GetApplicationGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationGatewayResult> {
    return pulumi.output(args).apply((a: any) => getApplicationGateway(a, opts))
}

export interface GetApplicationGatewayOutputArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
