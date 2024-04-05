import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified application gateway.
 */
export function getApplicationGateway(args: GetApplicationGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getApplicationGateway", {
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
    readonly authenticationCertificates?: types.outputs.ApplicationGatewayAuthenticationCertificateResponse[];
    /**
     * Autoscale Configuration.
     */
    readonly autoscaleConfiguration?: types.outputs.ApplicationGatewayAutoscaleConfigurationResponse;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendAddressPools?: types.outputs.ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendHttpSettingsCollection?: types.outputs.ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * Backend settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendSettingsCollection?: types.outputs.ApplicationGatewayBackendSettingsResponse[];
    /**
     * Custom error configurations of the application gateway resource.
     */
    readonly customErrorConfigurations?: types.outputs.ApplicationGatewayCustomErrorResponse[];
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
    readonly firewallPolicy?: types.outputs.SubResourceResponse;
    /**
     * If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
     */
    readonly forceFirewallPolicyAssociation?: boolean;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendIPConfigurations?: types.outputs.ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendPorts?: types.outputs.ApplicationGatewayFrontendPortResponse[];
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly gatewayIPConfigurations?: types.outputs.ApplicationGatewayIPConfigurationResponse[];
    /**
     * Global Configuration.
     */
    readonly globalConfiguration?: types.outputs.ApplicationGatewayGlobalConfigurationResponse;
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly httpListeners?: types.outputs.ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of the application gateway, if configured.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly listeners?: types.outputs.ApplicationGatewayListenerResponse[];
    /**
     * Load distribution policies of the application gateway resource.
     */
    readonly loadDistributionPolicies?: types.outputs.ApplicationGatewayLoadDistributionPolicyResponse[];
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
    readonly privateEndpointConnections: types.outputs.ApplicationGatewayPrivateEndpointConnectionResponse[];
    /**
     * PrivateLink configurations on application gateway.
     */
    readonly privateLinkConfigurations?: types.outputs.ApplicationGatewayPrivateLinkConfigurationResponse[];
    /**
     * Probes of the application gateway resource.
     */
    readonly probes?: types.outputs.ApplicationGatewayProbeResponse[];
    /**
     * The provisioning state of the application gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly redirectConfigurations?: types.outputs.ApplicationGatewayRedirectConfigurationResponse[];
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules?: types.outputs.ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * The resource GUID property of the application gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * Rewrite rules for the application gateway resource.
     */
    readonly rewriteRuleSets?: types.outputs.ApplicationGatewayRewriteRuleSetResponse[];
    /**
     * Routing rules of the application gateway resource.
     */
    readonly routingRules?: types.outputs.ApplicationGatewayRoutingRuleResponse[];
    /**
     * SKU of the application gateway resource.
     */
    readonly sku?: types.outputs.ApplicationGatewaySkuResponse;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslCertificates?: types.outputs.ApplicationGatewaySslCertificateResponse[];
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy?: types.outputs.ApplicationGatewaySslPolicyResponse;
    /**
     * SSL profiles of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslProfiles?: types.outputs.ApplicationGatewaySslProfileResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Trusted client certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedClientCertificates?: types.outputs.ApplicationGatewayTrustedClientCertificateResponse[];
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedRootCertificates?: types.outputs.ApplicationGatewayTrustedRootCertificateResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly urlPathMaps?: types.outputs.ApplicationGatewayUrlPathMapResponse[];
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration?: types.outputs.ApplicationGatewayWebApplicationFirewallConfigurationResponse;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified application gateway.
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