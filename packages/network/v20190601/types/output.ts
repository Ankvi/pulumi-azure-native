import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
     */
    export interface AddressSpaceResponse {
        /**
         * A list of address blocks reserved for this virtual network in CIDR notation.
         */
        addressPrefixes?: string[];
    }

    /**
     * Authentication certificates of an application gateway.
     */
    export interface ApplicationGatewayAuthenticationCertificateResponse {
        /**
         * Certificate public data.
         */
        data?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the authentication certificate that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Application Gateway autoscale configuration.
     */
    export interface ApplicationGatewayAutoscaleConfigurationResponse {
        /**
         * Upper bound on number of Application Gateway capacity.
         */
        maxCapacity?: number;
        /**
         * Lower bound on number of Application Gateway capacity.
         */
        minCapacity: number;
    }

    /**
     * Backend Address Pool of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressPoolResponse {
        /**
         * Backend addresses.
         */
        backendAddresses?: ApplicationGatewayBackendAddressResponse[];
        /**
         * Collection of references to IPs defined in network interfaces.
         */
        backendIPConfigurations?: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the backend address pool that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Backend address of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressResponse {
        /**
         * Fully qualified domain name (FQDN).
         */
        fqdn?: string;
        /**
         * IP address.
         */
        ipAddress?: string;
    }

    /**
     * Application gateway BackendHealthHttp settings.
     */
    export interface ApplicationGatewayBackendHealthHttpSettingsResponse {
        /**
         * Reference of an ApplicationGatewayBackendHttpSettings resource.
         */
        backendHttpSettings?: ApplicationGatewayBackendHttpSettingsResponse;
        /**
         * List of ApplicationGatewayBackendHealthServer resources.
         */
        servers?: ApplicationGatewayBackendHealthServerResponse[];
    }

    /**
     * Application gateway backendhealth http settings.
     */
    export interface ApplicationGatewayBackendHealthServerResponse {
        /**
         * IP address or FQDN of backend server.
         */
        address?: string;
        /**
         * Health of backend server.
         */
        health?: string;
        /**
         * Health Probe Log.
         */
        healthProbeLog?: string;
        /**
         * Reference of IP configuration of backend server.
         */
        ipConfiguration?: NetworkInterfaceIPConfigurationResponse;
    }

    /**
     * Backend address pool settings of an application gateway.
     */
    export interface ApplicationGatewayBackendHttpSettingsResponse {
        /**
         * Cookie name to use for the affinity cookie.
         */
        affinityCookieName?: string;
        /**
         * Array of references to application gateway authentication certificates.
         */
        authenticationCertificates?: SubResourceResponse[];
        /**
         * Connection draining of the backend http settings resource.
         */
        connectionDraining?: ApplicationGatewayConnectionDrainingResponse;
        /**
         * Cookie based affinity.
         */
        cookieBasedAffinity?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Host header to be sent to the backend servers.
         */
        hostName?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the backend http settings that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
         */
        path?: string;
        /**
         * Whether to pick host header should be picked from the host name of the backend server. Default value is false.
         */
        pickHostNameFromBackendAddress?: boolean;
        /**
         * The destination port on the backend.
         */
        port?: number;
        /**
         * Probe resource of an application gateway.
         */
        probe?: SubResourceResponse;
        /**
         * Whether the probe is enabled. Default value is false.
         */
        probeEnabled?: boolean;
        /**
         * The protocol used to communicate with the backend.
         */
        protocol?: string;
        /**
         * Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
         */
        requestTimeout?: number;
        /**
         * Array of references to application gateway trusted root certificates.
         */
        trustedRootCertificates?: SubResourceResponse[];
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
     */
    export interface ApplicationGatewayConnectionDrainingResponse {
        /**
         * The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
         */
        drainTimeoutInSec: number;
        /**
         * Whether connection draining is enabled or not.
         */
        enabled: boolean;
    }

    /**
     * Customer error of an application gateway.
     */
    export interface ApplicationGatewayCustomErrorResponse {
        /**
         * Error page URL of the application gateway customer error.
         */
        customErrorPageUrl?: string;
        /**
         * Status code of the application gateway customer error.
         */
        statusCode?: string;
    }

    /**
     * Allows to disable rules within a rule group or an entire rule group.
     */
    export interface ApplicationGatewayFirewallDisabledRuleGroupResponse {
        /**
         * The name of the rule group that will be disabled.
         */
        ruleGroupName: string;
        /**
         * The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
         */
        rules?: number[];
    }

    /**
     * Allow to exclude some variable satisfy the condition for the WAF check.
     */
    export interface ApplicationGatewayFirewallExclusionResponse {
        /**
         * The variable to be excluded.
         */
        matchVariable: string;
        /**
         * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
         */
        selector: string;
        /**
         * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
         */
        selectorMatchOperator: string;
    }

    /**
     * Frontend IP configuration of an application gateway.
     */
    export interface ApplicationGatewayFrontendIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the frontend IP configuration that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * PrivateIPAddress of the network interface IP Configuration.
         */
        privateIPAddress?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * Provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Reference of the PublicIP resource.
         */
        publicIPAddress?: SubResourceResponse;
        /**
         * Reference of the subnet resource.
         */
        subnet?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Frontend port of an application gateway.
     */
    export interface ApplicationGatewayFrontendPortResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the frontend port that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Frontend port.
         */
        port?: number;
        /**
         * Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Header configuration of the Actions set in Application Gateway.
     */
    export interface ApplicationGatewayHeaderConfigurationResponse {
        /**
         * Header name of the header configuration.
         */
        headerName?: string;
        /**
         * Header value of the header configuration.
         */
        headerValue?: string;
    }

    /**
     * Http listener of an application gateway.
     */
    export interface ApplicationGatewayHttpListenerResponse {
        /**
         * Custom error configurations of the HTTP listener.
         */
        customErrorConfigurations?: ApplicationGatewayCustomErrorResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Frontend IP configuration resource of an application gateway.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * Frontend port resource of an application gateway.
         */
        frontendPort?: SubResourceResponse;
        /**
         * Host name of HTTP listener.
         */
        hostName?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the HTTP listener that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Protocol of the HTTP listener.
         */
        protocol?: string;
        /**
         * Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Applicable only if protocol is https. Enables SNI for multi-hosting.
         */
        requireServerNameIndication?: boolean;
        /**
         * SSL certificate resource of an application gateway.
         */
        sslCertificate?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
     */
    export interface ApplicationGatewayIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the IP configuration that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the application gateway subnet resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Reference of the subnet resource. A subnet from where application gateway gets its private address.
         */
        subnet?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Path rule of URL path map of an application gateway.
     */
    export interface ApplicationGatewayPathRuleResponse {
        /**
         * Backend address pool resource of URL path map path rule.
         */
        backendAddressPool?: SubResourceResponse;
        /**
         * Backend http settings resource of URL path map path rule.
         */
        backendHttpSettings?: SubResourceResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the path rule that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Path rules of URL path map.
         */
        paths?: string[];
        /**
         * Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Redirect configuration resource of URL path map path rule.
         */
        redirectConfiguration?: SubResourceResponse;
        /**
         * Rewrite rule set resource of URL path map path rule.
         */
        rewriteRuleSet?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Application gateway probe health response match.
     */
    export interface ApplicationGatewayProbeHealthResponseMatchResponse {
        /**
         * Body that must be contained in the health response. Default value is empty.
         */
        body?: string;
        /**
         * Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
         */
        statusCodes?: string[];
    }

    /**
     * Probe of the application gateway.
     */
    export interface ApplicationGatewayProbeResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Host name to send the probe to.
         */
        host?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
         */
        interval?: number;
        /**
         * Criterion for classifying a healthy probe response.
         */
        match?: ApplicationGatewayProbeHealthResponseMatchResponse;
        /**
         * Minimum number of servers that are always marked healthy. Default value is 0.
         */
        minServers?: number;
        /**
         * Name of the probe that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
         */
        path?: string;
        /**
         * Whether the host header should be picked from the backend http settings. Default value is false.
         */
        pickHostNameFromBackendHttpSettings?: boolean;
        /**
         * Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
         */
        port?: number;
        /**
         * The protocol used for the probe.
         */
        protocol?: string;
        /**
         * Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
         */
        timeout?: number;
        /**
         * Type of the resource.
         */
        type?: string;
        /**
         * The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
         */
        unhealthyThreshold?: number;
    }

    /**
     * Redirect configuration of an application gateway.
     */
    export interface ApplicationGatewayRedirectConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Include path in the redirected url.
         */
        includePath?: boolean;
        /**
         * Include query string in the redirected url.
         */
        includeQueryString?: boolean;
        /**
         * Name of the redirect configuration that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Path rules specifying redirect configuration.
         */
        pathRules?: SubResourceResponse[];
        /**
         * HTTP redirection type.
         */
        redirectType?: string;
        /**
         * Request routing specifying redirect configuration.
         */
        requestRoutingRules?: SubResourceResponse[];
        /**
         * Reference to a listener to redirect the request to.
         */
        targetListener?: SubResourceResponse;
        /**
         * Url to redirect the request to.
         */
        targetUrl?: string;
        /**
         * Type of the resource.
         */
        type?: string;
        /**
         * Url path maps specifying default redirect configuration.
         */
        urlPathMaps?: SubResourceResponse[];
    }

    /**
     * Request routing rule of an application gateway.
     */
    export interface ApplicationGatewayRequestRoutingRuleResponse {
        /**
         * Backend address pool resource of the application gateway.
         */
        backendAddressPool?: SubResourceResponse;
        /**
         * Backend http settings resource of the application gateway.
         */
        backendHttpSettings?: SubResourceResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Http listener resource of the application gateway.
         */
        httpListener?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the request routing rule that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Redirect configuration resource of the application gateway.
         */
        redirectConfiguration?: SubResourceResponse;
        /**
         * Rewrite Rule Set resource in Basic rule of the application gateway.
         */
        rewriteRuleSet?: SubResourceResponse;
        /**
         * Rule type.
         */
        ruleType?: string;
        /**
         * Type of the resource.
         */
        type?: string;
        /**
         * URL path map resource of the application gateway.
         */
        urlPathMap?: SubResourceResponse;
    }

    /**
     * Set of actions in the Rewrite Rule in Application Gateway.
     */
    export interface ApplicationGatewayRewriteRuleActionSetResponse {
        /**
         * Request Header Actions in the Action Set.
         */
        requestHeaderConfigurations?: ApplicationGatewayHeaderConfigurationResponse[];
        /**
         * Response Header Actions in the Action Set.
         */
        responseHeaderConfigurations?: ApplicationGatewayHeaderConfigurationResponse[];
    }

    /**
     * Set of conditions in the Rewrite Rule in Application Gateway.
     */
    export interface ApplicationGatewayRewriteRuleConditionResponse {
        /**
         * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
         */
        ignoreCase?: boolean;
        /**
         * Setting this value as truth will force to check the negation of the condition given by the user.
         */
        negate?: boolean;
        /**
         * The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
         */
        pattern?: string;
        /**
         * The condition parameter of the RewriteRuleCondition.
         */
        variable?: string;
    }

    /**
     * Rewrite rule of an application gateway.
     */
    export interface ApplicationGatewayRewriteRuleResponse {
        /**
         * Set of actions to be done as part of the rewrite Rule.
         */
        actionSet?: ApplicationGatewayRewriteRuleActionSetResponse;
        /**
         * Conditions based on which the action set execution will be evaluated.
         */
        conditions?: ApplicationGatewayRewriteRuleConditionResponse[];
        /**
         * Name of the rewrite rule that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
         */
        ruleSequence?: number;
    }

    /**
     * Rewrite rule set of an application gateway.
     */
    export interface ApplicationGatewayRewriteRuleSetResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the rewrite rule set that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the rewrite rule set resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Rewrite rules in the rewrite rule set.
         */
        rewriteRules?: ApplicationGatewayRewriteRuleResponse[];
    }

    /**
     * SKU of an application gateway.
     */
    export interface ApplicationGatewaySkuResponse {
        /**
         * Capacity (instance count) of an application gateway.
         */
        capacity?: number;
        /**
         * Name of an application gateway SKU.
         */
        name?: string;
        /**
         * Tier of an application gateway.
         */
        tier?: string;
    }

    /**
     * SSL certificates of an application gateway.
     */
    export interface ApplicationGatewaySslCertificateResponse {
        /**
         * Base-64 encoded pfx certificate. Only applicable in PUT Request.
         */
        data?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: string;
        /**
         * Name of the SSL certificate that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Password for the pfx file specified in data. Only applicable in PUT request.
         */
        password?: string;
        /**
         * Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.
         */
        publicCertData?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Application Gateway Ssl policy.
     */
    export interface ApplicationGatewaySslPolicyResponse {
        /**
         * Ssl cipher suites to be enabled in the specified order to application gateway.
         */
        cipherSuites?: string[];
        /**
         * Ssl protocols to be disabled on application gateway.
         */
        disabledSslProtocols?: string[];
        /**
         * Minimum version of Ssl protocol to be supported on application gateway.
         */
        minProtocolVersion?: string;
        /**
         * Name of Ssl predefined policy.
         */
        policyName?: string;
        /**
         * Type of Ssl Policy.
         */
        policyType?: string;
    }

    /**
     * Trusted Root certificates of an application gateway.
     */
    export interface ApplicationGatewayTrustedRootCertificateResponse {
        /**
         * Certificate public data.
         */
        data?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: string;
        /**
         * Name of the trusted root certificate that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the trusted root certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
     */
    export interface ApplicationGatewayUrlPathMapResponse {
        /**
         * Default backend address pool resource of URL path map.
         */
        defaultBackendAddressPool?: SubResourceResponse;
        /**
         * Default backend http settings resource of URL path map.
         */
        defaultBackendHttpSettings?: SubResourceResponse;
        /**
         * Default redirect configuration resource of URL path map.
         */
        defaultRedirectConfiguration?: SubResourceResponse;
        /**
         * Default Rewrite rule set resource of URL path map.
         */
        defaultRewriteRuleSet?: SubResourceResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the URL path map that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Path rule of URL path map resource.
         */
        pathRules?: ApplicationGatewayPathRuleResponse[];
        /**
         * Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Application gateway web application firewall configuration.
     */
    export interface ApplicationGatewayWebApplicationFirewallConfigurationResponse {
        /**
         * The disabled rule groups.
         */
        disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroupResponse[];
        /**
         * Whether the web application firewall is enabled or not.
         */
        enabled: boolean;
        /**
         * The exclusion list.
         */
        exclusions?: ApplicationGatewayFirewallExclusionResponse[];
        /**
         * Maximum file upload size in Mb for WAF.
         */
        fileUploadLimitInMb?: number;
        /**
         * Web application firewall mode.
         */
        firewallMode: string;
        /**
         * Maximum request body size for WAF.
         */
        maxRequestBodySize?: number;
        /**
         * Maximum request body size in Kb for WAF.
         */
        maxRequestBodySizeInKb?: number;
        /**
         * Whether allow WAF to check request Body.
         */
        requestBodyCheck?: boolean;
        /**
         * The type of the web application firewall rule set. Possible values are: 'OWASP'.
         */
        ruleSetType: string;
        /**
         * The version of the rule set type.
         */
        ruleSetVersion: string;
    }

    /**
     * An application security group in a resource group.
     */
    export interface ApplicationSecurityGroupResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
         */
        resourceGuid: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Pool of backend IP addresses.
     */
    export interface BackendAddressPoolResponse {
        /**
         * Gets collection of references to IP addresses defined in network interfaces.
         */
        backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets load balancing rules that use this backend address pool.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * Gets name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets outbound rules that use this backend address pool.
         */
        outboundRule: SubResourceResponse;
        /**
         * Gets outbound rules that use this backend address pool.
         */
        outboundRules: SubResourceResponse[];
        /**
         * Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Contains the DDoS protection settings of the public IP.
     */
    export interface DdosSettingsResponse {
        /**
         * The DDoS custom policy associated with the public IP.
         */
        ddosCustomPolicy?: SubResourceResponse;
        /**
         * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
         */
        protectionCoverage?: string;
    }

    /**
     * Details the service to which the subnet is delegated.
     */
    export interface DelegationResponse {
        /**
         * Describes the actions permitted to the service upon delegation.
         */
        actions?: string[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
         */
        serviceName?: string;
    }

    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
     */
    export interface DhcpOptionsResponse {
        /**
         * The list of DNS servers IP addresses.
         */
        dnsServers?: string[];
    }

    /**
     * Authorization in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitAuthorizationResponse {
        /**
         * The authorization key.
         */
        authorizationKey?: string;
        /**
         * The authorization use status.
         */
        authorizationUseStatus?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The authorization key.
         */
        authorizationKey?: string;
        /**
         * Express Route Circuit connection state.
         */
        circuitConnectionStatus: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The communities of bgp peering. Specified for microsoft peering.
         */
        advertisedCommunities?: string[];
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: string[];
        /**
         * The advertised public prefix state of the Peering resource.
         */
        advertisedPublicPrefixesState?: string;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: number;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: number;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: string;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringResponse {
        /**
         * The Azure ASN.
         */
        azureASN?: number;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: ExpressRouteCircuitConnectionResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The ExpressRoute connection.
         */
        expressRouteConnection?: ExpressRouteConnectionIdResponse;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets whether the provider or the customer last modified the peering.
         */
        lastModifiedBy?: string;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The peer ASN.
         */
        peerASN?: number;
        /**
         * The list of peered circuit connections associated with Azure Private Peering for this circuit.
         */
        peeredConnections: PeerExpressRouteCircuitConnectionResponse[];
        /**
         * The peering type.
         */
        peeringType?: string;
        /**
         * The primary port.
         */
        primaryAzurePort?: string;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: SubResourceResponse;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: string;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The shared key.
         */
        sharedKey?: string;
        /**
         * The peering state.
         */
        state?: string;
        /**
         * Gets peering stats.
         */
        stats?: ExpressRouteCircuitStatsResponse;
        /**
         * Type of the resource.
         */
        type: string;
        /**
         * The VLAN ID.
         */
        vlanId?: number;
    }

    /**
     * Contains ServiceProviderProperties in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitServiceProviderPropertiesResponse {
        /**
         * The BandwidthInMbps.
         */
        bandwidthInMbps?: number;
        /**
         * The peering location.
         */
        peeringLocation?: string;
        /**
         * The serviceProviderName.
         */
        serviceProviderName?: string;
    }

    /**
     * Contains SKU in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitSkuResponse {
        /**
         * The family of the SKU.
         */
        family?: string;
        /**
         * The name of the SKU.
         */
        name?: string;
        /**
         * The tier of the SKU.
         */
        tier?: string;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsResponse {
        /**
         * Gets BytesIn of the peering.
         */
        primarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        primarybytesOut?: number;
        /**
         * Gets BytesIn of the peering.
         */
        secondarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        secondarybytesOut?: number;
    }

    /**
     * The ID of the ExpressRouteConnection.
     */
    export interface ExpressRouteConnectionIdResponse {
        /**
         * The ID of the ExpressRouteConnection.
         */
        id: string;
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Read only. Inbound pools URIs that use this frontend IP.
         */
        inboundNatPools: SubResourceResponse[];
        /**
         * Read only. Inbound rules URIs that use this frontend IP.
         */
        inboundNatRules: SubResourceResponse[];
        /**
         * Gets load balancing rules URIs that use this frontend IP.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Read only. Outbound rules URIs that use this frontend IP.
         */
        outboundRules: SubResourceResponse[];
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * It represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the Public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference of the Public IP Prefix resource.
         */
        publicIPPrefix?: SubResourceResponse;
        /**
         * The reference of the subnet resource.
         */
        subnet?: SubnetResponse;
        /**
         * Type of the resource.
         */
        type: string;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }

    /**
     * IP configuration profile child resource.
     */
    export interface IPConfigurationProfileResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * The reference of the subnet resource to create a container network interface ip configuration.
         */
        subnet?: SubnetResponse;
        /**
         * Sub Resource type.
         */
        type: string;
    }

    /**
     * IP configuration.
     */
    export interface IPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference of the subnet resource.
         */
        subnet?: SubnetResponse;
    }

    /**
     * Inbound NAT pool of the load balancer.
     */
    export interface InboundNatPoolResponse {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: number;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
         */
        frontendPortRangeEnd: number;
        /**
         * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
         */
        frontendPortRangeStart: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference to the transport protocol used by the inbound NAT pool.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Inbound NAT rule of the load balancer.
     */
    export interface InboundNatRuleResponse {
        /**
         * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
         */
        backendIPConfiguration: NetworkInterfaceIPConfigurationResponse;
        /**
         * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
         */
        backendPort?: number;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
         */
        frontendPort?: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Gets name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Contains the IpTag associated with the object.
     */
    export interface IpTagResponse {
        /**
         * Gets or sets the ipTag type: Example FirstPartyUsage.
         */
        ipTagType?: string;
        /**
         * Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc.
         */
        tag?: string;
    }

    /**
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: SubResourceResponse;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The state of peering.
         */
        state?: string;
    }

    /**
     * SKU of a load balancer.
     */
    export interface LoadBalancerSkuResponse {
        /**
         * Name of a load balancer SKU.
         */
        name?: string;
    }

    /**
     * A load balancing rule for a load balancer.
     */
    export interface LoadBalancingRuleResponse {
        /**
         * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool?: SubResourceResponse;
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
         */
        backendPort?: number;
        /**
         * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
         */
        disableOutboundSnat?: boolean;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
         */
        frontendPort: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: string;
        /**
         * The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference of the load balancer probe used by the load balancing rule.
         */
        probe?: SubResourceResponse;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
         */
        type?: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * SKU of nat gateway.
     */
    export interface NatGatewaySkuResponse {
        /**
         * Name of Nat Gateway SKU.
         */
        name?: string;
    }

    /**
     * DNS settings of a network interface.
     */
    export interface NetworkInterfaceDnsSettingsResponse {
        /**
         * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
         */
        appliedDnsServers?: string[];
        /**
         * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
         */
        dnsServers?: string[];
        /**
         * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
         */
        internalDnsNameLabel?: string;
        /**
         * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
         */
        internalDomainNameSuffix?: string;
        /**
         * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
         */
        internalFqdn?: string;
    }

    /**
     * IPConfiguration in a network interface.
     */
    export interface NetworkInterfaceIPConfigurationResponse {
        /**
         * The reference of ApplicationGatewayBackendAddressPool resource.
         */
        applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
        /**
         * Application security groups in which the IP configuration is included.
         */
        applicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The reference of LoadBalancerBackendAddressPool resource.
         */
        loadBalancerBackendAddressPools?: BackendAddressPoolResponse[];
        /**
         * A list of references of LoadBalancerInboundNatRules.
         */
        loadBalancerInboundNatRules?: InboundNatRuleResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets whether this is a primary customer address on the network interface.
         */
        primary?: boolean;
        /**
         * Private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Public IP address bound to the IP configuration.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * Subnet bound to the IP configuration.
         */
        subnet?: SubnetResponse;
        /**
         * The reference to Virtual Network Taps.
         */
        virtualNetworkTaps?: VirtualNetworkTapResponse[];
    }

    /**
     * A network interface in a resource group.
     */
    export interface NetworkInterfaceResponse {
        /**
         * The DNS settings in network interface.
         */
        dnsSettings?: NetworkInterfaceDnsSettingsResponse;
        /**
         * If the network interface is accelerated networking enabled.
         */
        enableAcceleratedNetworking?: boolean;
        /**
         * Indicates whether IP forwarding is enabled on this network interface.
         */
        enableIPForwarding?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A list of references to linked BareMetal resources.
         */
        hostedWorkloads: string[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * A list of IPConfigurations of the network interface.
         */
        ipConfigurations?: NetworkInterfaceIPConfigurationResponse[];
        /**
         * Resource location.
         */
        location?: string;
        /**
         * The MAC address of the network interface.
         */
        macAddress?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * Gets whether this is a primary network interface on a virtual machine.
         */
        primary?: boolean;
        /**
         * A reference to the private endpoint to which the network interface is linked.
         */
        privateEndpoint: PrivateEndpointResponse;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The resource GUID property of the network interface resource.
         */
        resourceGuid?: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * A list of TapConfigurations of the network interface.
         */
        tapConfigurations?: NetworkInterfaceTapConfigurationResponse[];
        /**
         * Resource type.
         */
        type: string;
        /**
         * The reference of a virtual machine.
         */
        virtualMachine: SubResourceResponse;
    }

    /**
     * Tap configuration in a Network Interface.
     */
    export interface NetworkInterfaceTapConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Sub Resource type.
         */
        type: string;
        /**
         * The reference of the Virtual Network Tap resource.
         */
        virtualNetworkTap?: VirtualNetworkTapResponse;
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupResponse {
        /**
         * The default security rules of network security group.
         */
        defaultSecurityRules?: SecurityRuleResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * A collection of references to network interfaces.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The resource GUID property of the network security group resource.
         */
        resourceGuid?: string;
        /**
         * A collection of security rules of the network security group.
         */
        securityRules?: SecurityRuleResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Outbound rule of the load balancer.
     */
    export interface OutboundRuleResponse {
        /**
         * The number of outbound ports to be used for NAT.
         */
        allocatedOutboundPorts?: number;
        /**
         * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool: SubResourceResponse;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * The Frontend IP addresses of the load balancer.
         */
        frontendIPConfigurations: SubResourceResponse[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The protocol for the outbound rule in load balancer.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface PeerExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The resource guid of the authorization used for the express route circuit connection.
         */
        authResourceGuid?: string;
        /**
         * Express Route Circuit connection state.
         */
        circuitConnectionStatus: string;
        /**
         * The name of the express route circuit connection resource.
         */
        connectionName?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the peer express route circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
         */
        manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * Resource name.
         */
        name: string;
        /**
         * Gets an array of references to the network interfaces created for this private endpoint.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * A grouping of information about the connection to the remote resource.
         */
        privateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * The provisioning state of the private endpoint.
         */
        provisioningState: string;
        /**
         * The ID of the subnet from which the private IP will be allocated.
         */
        subnet?: SubnetResponse;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * PrivateLinkServiceConnection resource.
     */
    export interface PrivateLinkServiceConnectionResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
         */
        groupIds?: string[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * A collection of read-only information about the state of the connection to the remote resource.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The resource id of private link service.
         */
        privateLinkServiceId?: string;
        /**
         * The provisioning state of the private link service connection.
         */
        provisioningState: string;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage?: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * A load balancer probe.
     */
    export interface ProbeResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
         */
        intervalInSeconds?: number;
        /**
         * The load balancer rules that use this probe.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * Gets name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
         */
        numberOfProbes?: number;
        /**
         * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
         */
        port: number;
        /**
         * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
         */
        requestPath?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Contains FQDN of the DNS record associated with the public IP address.
     */
    export interface PublicIPAddressDnsSettingsResponse {
        /**
         * Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: string;
        /**
         * Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: string;
        /**
         * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
         */
        reverseFqdn?: string;
    }

    /**
     * Public IP address resource.
     */
    export interface PublicIPAddressResponse {
        /**
         * The DDoS protection custom policy associated with the public IP address.
         */
        ddosSettings?: DdosSettingsResponse;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: PublicIPAddressDnsSettingsResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The idle timeout of the public IP address.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The IP address associated with the public IP address resource.
         */
        ipAddress?: string;
        /**
         * The IP configuration associated with the public IP address.
         */
        ipConfiguration: IPConfigurationResponse;
        /**
         * The list of tags associated with the public IP address.
         */
        ipTags?: IpTagResponse[];
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The public IP address version.
         */
        publicIPAddressVersion?: string;
        /**
         * The public IP address allocation method.
         */
        publicIPAllocationMethod?: string;
        /**
         * The Public IP Prefix this Public IP Address should be allocated from.
         */
        publicIPPrefix?: SubResourceResponse;
        /**
         * The resource GUID property of the public IP resource.
         */
        resourceGuid?: string;
        /**
         * The public IP address SKU.
         */
        sku?: PublicIPAddressSkuResponse;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }

    /**
     * SKU of a public IP address.
     */
    export interface PublicIPAddressSkuResponse {
        /**
         * Name of a public IP address SKU.
         */
        name?: string;
    }

    /**
     * SKU of a public IP prefix.
     */
    export interface PublicIPPrefixSkuResponse {
        /**
         * Name of a public IP prefix SKU.
         */
        name?: string;
    }

    /**
     * Reference to a public IP address.
     */
    export interface ReferencedPublicIpAddressResponse {
        /**
         * The PublicIPAddress Reference.
         */
        id?: string;
    }

    /**
     * ResourceNavigationLink resource.
     */
    export interface ResourceNavigationLinkResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Link to the external resource.
         */
        link?: string;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: string;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Provisioning state of the ResourceNavigationLink resource.
         */
        provisioningState: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Route resource.
     */
    export interface RouteResponse {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: string;
        /**
         * The type of Azure hop the packet should be sent to.
         */
        nextHopType: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableResponse {
        /**
         * Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: boolean;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Collection of routes contained within a route table.
         */
        routes?: RouteResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Network security rule.
     */
    export interface SecurityRuleResponse {
        /**
         * The network traffic is allowed or denied.
         */
        access: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: string;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: string[];
        /**
         * The application security group specified as destination.
         */
        destinationApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority?: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: string;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: string[];
        /**
         * The application security group specified as source.
         */
        sourceApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: string;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
    }

    /**
     * ServiceAssociationLink resource.
     */
    export interface ServiceAssociationLinkResponse {
        /**
         * If true, the resource can be deleted.
         */
        allowDelete?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Link to the external resource.
         */
        link?: string;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: string;
        /**
         * A list of locations.
         */
        locations?: string[];
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Provisioning state of the ServiceAssociationLink resource.
         */
        provisioningState: string;
        /**
         * Resource type.
         */
        type?: string;
    }

    /**
     * Service Endpoint policy definitions.
     */
    export interface ServiceEndpointPolicyDefinitionResponse {
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Service endpoint name.
         */
        service?: string;
        /**
         * A list of service resources.
         */
        serviceResources?: string[];
    }

    /**
     * Service End point policy resource.
     */
    export interface ServiceEndpointPolicyResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the service endpoint policy resource.
         */
        resourceGuid: string;
        /**
         * A collection of service endpoint policy definitions of the service endpoint policy.
         */
        serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinitionResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointPropertiesFormatResponse {
        /**
         * A list of locations.
         */
        locations?: string[];
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * The type of the endpoint service.
         */
        service?: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * Subnet in a virtual network resource.
     */
    export interface SubnetResponse {
        /**
         * The address prefix for the subnet.
         */
        addressPrefix?: string;
        /**
         * List of address prefixes for the subnet.
         */
        addressPrefixes?: string[];
        /**
         * Gets an array of references to the delegations on the subnet.
         */
        delegations?: DelegationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Array of IP configuration profiles which reference this subnet.
         */
        ipConfigurationProfiles: IPConfigurationProfileResponse[];
        /**
         * Gets an array of references to the network interface IP configurations using subnet.
         */
        ipConfigurations: IPConfigurationResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Nat gateway associated with this subnet.
         */
        natGateway?: SubResourceResponse;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: string;
        /**
         * An array of references to private endpoints.
         */
        privateEndpoints: PrivateEndpointResponse[];
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
         */
        purpose: string;
        /**
         * Gets an array of references to the external resources using subnet.
         */
        resourceNavigationLinks?: ResourceNavigationLinkResponse[];
        /**
         * The reference of the RouteTable resource.
         */
        routeTable?: RouteTableResponse;
        /**
         * Gets an array of references to services injecting into this subnet.
         */
        serviceAssociationLinks?: ServiceAssociationLinkResponse[];
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: ServiceEndpointPolicyResponse[];
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: ServiceEndpointPropertiesFormatResponse[];
    }

    /**
     * Peerings in a virtual network resource.
     */
    export interface VirtualNetworkPeeringResponse {
        /**
         * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
         */
        allowForwardedTraffic?: boolean;
        /**
         * If gateway links can be used in remote virtual networking to link to this virtual network.
         */
        allowGatewayTransit?: boolean;
        /**
         * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
         */
        allowVirtualNetworkAccess?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The status of the virtual network peering.
         */
        peeringState?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * The reference of the remote virtual network address space.
         */
        remoteAddressSpace?: AddressSpaceResponse;
        /**
         * The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
         */
        remoteVirtualNetwork?: SubResourceResponse;
        /**
         * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
         */
        useRemoteGateways?: boolean;
    }

    /**
     * Virtual Network Tap resource.
     */
    export interface VirtualNetworkTapResponse {
        /**
         * The reference to the private IP address on the internal Load Balancer that will receive the tap.
         */
        destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfigurationResponse;
        /**
         * The reference to the private IP Address of the collector nic that will receive the tap.
         */
        destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfigurationResponse;
        /**
         * The VXLAN destination port that will receive the tapped traffic.
         */
        destinationPort?: number;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
         */
        networkInterfaceTapConfigurations: NetworkInterfaceTapConfigurationResponse[];
        /**
         * The provisioning state of the virtual network tap. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resourceGuid property of the virtual network tap.
         */
        resourceGuid: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }
