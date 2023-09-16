import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified application gateway.
 */
export function getApplicationGateway(args: GetApplicationGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190801:getApplicationGateway", {
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
    readonly authenticationCertificates?: types.outputs.network.v20190801.ApplicationGatewayAuthenticationCertificateResponse[];
    /**
     * Autoscale Configuration.
     */
    readonly autoscaleConfiguration?: types.outputs.network.v20190801.ApplicationGatewayAutoscaleConfigurationResponse;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendAddressPools?: types.outputs.network.v20190801.ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendHttpSettingsCollection?: types.outputs.network.v20190801.ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * Custom error configurations of the application gateway resource.
     */
    readonly customErrorConfigurations?: types.outputs.network.v20190801.ApplicationGatewayCustomErrorResponse[];
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
    readonly etag?: string;
    /**
     * Reference of the FirewallPolicy resource.
     */
    readonly firewallPolicy?: types.outputs.network.v20190801.SubResourceResponse;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendIPConfigurations?: types.outputs.network.v20190801.ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendPorts?: types.outputs.network.v20190801.ApplicationGatewayFrontendPortResponse[];
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly gatewayIPConfigurations?: types.outputs.network.v20190801.ApplicationGatewayIPConfigurationResponse[];
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly httpListeners?: types.outputs.network.v20190801.ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of the application gateway, if configured.
     */
    readonly identity?: types.outputs.network.v20190801.ManagedServiceIdentityResponse;
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
     * Probes of the application gateway resource.
     */
    readonly probes?: types.outputs.network.v20190801.ApplicationGatewayProbeResponse[];
    /**
     * The provisioning state of the application gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly redirectConfigurations?: types.outputs.network.v20190801.ApplicationGatewayRedirectConfigurationResponse[];
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules?: types.outputs.network.v20190801.ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * The resource GUID property of the application gateway resource.
     */
    readonly resourceGuid?: string;
    /**
     * Rewrite rules for the application gateway resource.
     */
    readonly rewriteRuleSets?: types.outputs.network.v20190801.ApplicationGatewayRewriteRuleSetResponse[];
    /**
     * SKU of the application gateway resource.
     */
    readonly sku?: types.outputs.network.v20190801.ApplicationGatewaySkuResponse;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslCertificates?: types.outputs.network.v20190801.ApplicationGatewaySslCertificateResponse[];
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy?: types.outputs.network.v20190801.ApplicationGatewaySslPolicyResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedRootCertificates?: types.outputs.network.v20190801.ApplicationGatewayTrustedRootCertificateResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly urlPathMaps?: types.outputs.network.v20190801.ApplicationGatewayUrlPathMapResponse[];
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration?: types.outputs.network.v20190801.ApplicationGatewayWebApplicationFirewallConfigurationResponse;
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
