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
     * Authentication certificates of an application gateway.
     */
    export interface ApplicationGatewayAuthenticationCertificateArgs {
        /**
         * Certificate public data.
         */
        data?: pulumi.Input<string>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the authentication certificate that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Application Gateway autoscale configuration.
     */
    export interface ApplicationGatewayAutoscaleConfigurationArgs {
        /**
         * Upper bound on number of Application Gateway capacity.
         */
        maxCapacity?: pulumi.Input<number>;
        /**
         * Lower bound on number of Application Gateway capacity.
         */
        minCapacity: pulumi.Input<number>;
    }

    /**
     * Backend address of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressArgs {
        /**
         * Fully qualified domain name (FQDN).
         */
        fqdn?: pulumi.Input<string>;
        /**
         * IP address.
         */
        ipAddress?: pulumi.Input<string>;
    }

    /**
     * Backend Address Pool of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressPoolArgs {
        /**
         * Backend addresses.
         */
        backendAddresses?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressArgs>[]>;
        /**
         * Collection of references to IPs defined in network interfaces.
         */
        backendIPConfigurations?: pulumi.Input<pulumi.Input<NetworkInterfaceIPConfigurationArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the backend address pool that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Backend address pool settings of an application gateway.
     */
    export interface ApplicationGatewayBackendHttpSettingsArgs {
        /**
         * Cookie name to use for the affinity cookie.
         */
        affinityCookieName?: pulumi.Input<string>;
        /**
         * Array of references to application gateway authentication certificates.
         */
        authenticationCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * Connection draining of the backend http settings resource.
         */
        connectionDraining?: pulumi.Input<ApplicationGatewayConnectionDrainingArgs>;
        /**
         * Cookie based affinity.
         */
        cookieBasedAffinity?: pulumi.Input<string | enums.ApplicationGatewayCookieBasedAffinity>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Host header to be sent to the backend servers.
         */
        hostName?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the backend http settings that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
         */
        path?: pulumi.Input<string>;
        /**
         * Whether to pick host header should be picked from the host name of the backend server. Default value is false.
         */
        pickHostNameFromBackendAddress?: pulumi.Input<boolean>;
        /**
         * The destination port on the backend.
         */
        port?: pulumi.Input<number>;
        /**
         * Probe resource of an application gateway.
         */
        probe?: pulumi.Input<SubResourceArgs>;
        /**
         * Whether the probe is enabled. Default value is false.
         */
        probeEnabled?: pulumi.Input<boolean>;
        /**
         * The protocol used to communicate with the backend.
         */
        protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
        /**
         * Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
         */
        requestTimeout?: pulumi.Input<number>;
        /**
         * Array of references to application gateway trusted root certificates.
         */
        trustedRootCertificates?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
     */
    export interface ApplicationGatewayConnectionDrainingArgs {
        /**
         * The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
         */
        drainTimeoutInSec: pulumi.Input<number>;
        /**
         * Whether connection draining is enabled or not.
         */
        enabled: pulumi.Input<boolean>;
    }

    /**
     * Customer error of an application gateway.
     */
    export interface ApplicationGatewayCustomErrorArgs {
        /**
         * Error page URL of the application gateway customer error.
         */
        customErrorPageUrl?: pulumi.Input<string>;
        /**
         * Status code of the application gateway customer error.
         */
        statusCode?: pulumi.Input<string | enums.ApplicationGatewayCustomErrorStatusCode>;
    }

    /**
     * Allows to disable rules within a rule group or an entire rule group.
     */
    export interface ApplicationGatewayFirewallDisabledRuleGroupArgs {
        /**
         * The name of the rule group that will be disabled.
         */
        ruleGroupName: pulumi.Input<string>;
        /**
         * The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
         */
        rules?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * Allow to exclude some variable satisfy the condition for the WAF check.
     */
    export interface ApplicationGatewayFirewallExclusionArgs {
        /**
         * The variable to be excluded.
         */
        matchVariable: pulumi.Input<string>;
        /**
         * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
         */
        selector: pulumi.Input<string>;
        /**
         * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
         */
        selectorMatchOperator: pulumi.Input<string>;
    }

    /**
     * Frontend IP configuration of an application gateway.
     */
    export interface ApplicationGatewayFrontendIPConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the frontend IP configuration that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * PrivateIPAddress of the network interface IP Configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * Reference of the PublicIP resource.
         */
        publicIPAddress?: pulumi.Input<SubResourceArgs>;
        /**
         * Reference of the subnet resource.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Frontend port of an application gateway.
     */
    export interface ApplicationGatewayFrontendPortArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the frontend port that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Frontend port.
         */
        port?: pulumi.Input<number>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Header configuration of the Actions set in Application Gateway.
     */
    export interface ApplicationGatewayHeaderConfigurationArgs {
        /**
         * Header name of the header configuration.
         */
        headerName?: pulumi.Input<string>;
        /**
         * Header value of the header configuration.
         */
        headerValue?: pulumi.Input<string>;
    }

    /**
     * Http listener of an application gateway.
     */
    export interface ApplicationGatewayHttpListenerArgs {
        /**
         * Custom error configurations of the HTTP listener.
         */
        customErrorConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayCustomErrorArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Frontend IP configuration resource of an application gateway.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * Frontend port resource of an application gateway.
         */
        frontendPort?: pulumi.Input<SubResourceArgs>;
        /**
         * Host name of HTTP listener.
         */
        hostName?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the HTTP listener that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Protocol of the HTTP listener.
         */
        protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
        /**
         * Applicable only if protocol is https. Enables SNI for multi-hosting.
         */
        requireServerNameIndication?: pulumi.Input<boolean>;
        /**
         * SSL certificate resource of an application gateway.
         */
        sslCertificate?: pulumi.Input<SubResourceArgs>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
     */
    export interface ApplicationGatewayIPConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the IP configuration that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference of the subnet resource. A subnet from where application gateway gets its private address.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Path rule of URL path map of an application gateway.
     */
    export interface ApplicationGatewayPathRuleArgs {
        /**
         * Backend address pool resource of URL path map path rule.
         */
        backendAddressPool?: pulumi.Input<SubResourceArgs>;
        /**
         * Backend http settings resource of URL path map path rule.
         */
        backendHttpSettings?: pulumi.Input<SubResourceArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the path rule that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Path rules of URL path map.
         */
        paths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Redirect configuration resource of URL path map path rule.
         */
        redirectConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * Rewrite rule set resource of URL path map path rule.
         */
        rewriteRuleSet?: pulumi.Input<SubResourceArgs>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Probe of the application gateway.
     */
    export interface ApplicationGatewayProbeArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Host name to send the probe to.
         */
        host?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
         */
        interval?: pulumi.Input<number>;
        /**
         * Criterion for classifying a healthy probe response.
         */
        match?: pulumi.Input<ApplicationGatewayProbeHealthResponseMatchArgs>;
        /**
         * Minimum number of servers that are always marked healthy. Default value is 0.
         */
        minServers?: pulumi.Input<number>;
        /**
         * Name of the probe that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
         */
        path?: pulumi.Input<string>;
        /**
         * Whether the host header should be picked from the backend http settings. Default value is false.
         */
        pickHostNameFromBackendHttpSettings?: pulumi.Input<boolean>;
        /**
         * Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
         */
        port?: pulumi.Input<number>;
        /**
         * The protocol used for the probe.
         */
        protocol?: pulumi.Input<string | enums.ApplicationGatewayProtocol>;
        /**
         * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
         */
        timeout?: pulumi.Input<number>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
        /**
         * The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
         */
        unhealthyThreshold?: pulumi.Input<number>;
    }

    /**
     * Application gateway probe health response match.
     */
    export interface ApplicationGatewayProbeHealthResponseMatch {
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
     * Application gateway probe health response match.
     */
    export interface ApplicationGatewayProbeHealthResponseMatchArgs {
        /**
         * Body that must be contained in the health response. Default value is empty.
         */
        body?: pulumi.Input<string>;
        /**
         * Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
         */
        statusCodes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Redirect configuration of an application gateway.
     */
    export interface ApplicationGatewayRedirectConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Include path in the redirected url.
         */
        includePath?: pulumi.Input<boolean>;
        /**
         * Include query string in the redirected url.
         */
        includeQueryString?: pulumi.Input<boolean>;
        /**
         * Name of the redirect configuration that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Path rules specifying redirect configuration.
         */
        pathRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * HTTP redirection type.
         */
        redirectType?: pulumi.Input<string | enums.ApplicationGatewayRedirectType>;
        /**
         * Request routing specifying redirect configuration.
         */
        requestRoutingRules?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * Reference to a listener to redirect the request to.
         */
        targetListener?: pulumi.Input<SubResourceArgs>;
        /**
         * Url to redirect the request to.
         */
        targetUrl?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
        /**
         * Url path maps specifying default redirect configuration.
         */
        urlPathMaps?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    }

    /**
     * Request routing rule of an application gateway.
     */
    export interface ApplicationGatewayRequestRoutingRuleArgs {
        /**
         * Backend address pool resource of the application gateway.
         */
        backendAddressPool?: pulumi.Input<SubResourceArgs>;
        /**
         * Backend http settings resource of the application gateway.
         */
        backendHttpSettings?: pulumi.Input<SubResourceArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Http listener resource of the application gateway.
         */
        httpListener?: pulumi.Input<SubResourceArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the request routing rule that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the request routing rule.
         */
        priority?: pulumi.Input<number>;
        /**
         * Redirect configuration resource of the application gateway.
         */
        redirectConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * Rewrite Rule Set resource in Basic rule of the application gateway.
         */
        rewriteRuleSet?: pulumi.Input<SubResourceArgs>;
        /**
         * Rule type.
         */
        ruleType?: pulumi.Input<string | enums.ApplicationGatewayRequestRoutingRuleType>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
        /**
         * URL path map resource of the application gateway.
         */
        urlPathMap?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Rewrite rule of an application gateway.
     */
    export interface ApplicationGatewayRewriteRuleArgs {
        /**
         * Set of actions to be done as part of the rewrite Rule.
         */
        actionSet?: pulumi.Input<ApplicationGatewayRewriteRuleActionSetArgs>;
        /**
         * Conditions based on which the action set execution will be evaluated.
         */
        conditions?: pulumi.Input<pulumi.Input<ApplicationGatewayRewriteRuleConditionArgs>[]>;
        /**
         * Name of the rewrite rule that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
         */
        ruleSequence?: pulumi.Input<number>;
    }

    /**
     * Set of actions in the Rewrite Rule in Application Gateway.
     */
    export interface ApplicationGatewayRewriteRuleActionSetArgs {
        /**
         * Request Header Actions in the Action Set.
         */
        requestHeaderConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayHeaderConfigurationArgs>[]>;
        /**
         * Response Header Actions in the Action Set.
         */
        responseHeaderConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayHeaderConfigurationArgs>[]>;
    }

    /**
     * Set of conditions in the Rewrite Rule in Application Gateway.
     */
    export interface ApplicationGatewayRewriteRuleConditionArgs {
        /**
         * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
         */
        ignoreCase?: pulumi.Input<boolean>;
        /**
         * Setting this value as truth will force to check the negation of the condition given by the user.
         */
        negate?: pulumi.Input<boolean>;
        /**
         * The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
         */
        pattern?: pulumi.Input<string>;
        /**
         * The condition parameter of the RewriteRuleCondition.
         */
        variable?: pulumi.Input<string>;
    }

    /**
     * Rewrite rule set of an application gateway.
     */
    export interface ApplicationGatewayRewriteRuleSetArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the rewrite rule set that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Rewrite rules in the rewrite rule set.
         */
        rewriteRules?: pulumi.Input<pulumi.Input<ApplicationGatewayRewriteRuleArgs>[]>;
    }

    /**
     * SKU of an application gateway.
     */
    export interface ApplicationGatewaySkuArgs {
        /**
         * Capacity (instance count) of an application gateway.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Name of an application gateway SKU.
         */
        name?: pulumi.Input<string | enums.ApplicationGatewaySkuName>;
        /**
         * Tier of an application gateway.
         */
        tier?: pulumi.Input<string | enums.ApplicationGatewayTier>;
    }

    /**
     * SSL certificates of an application gateway.
     */
    export interface ApplicationGatewaySslCertificateArgs {
        /**
         * Base-64 encoded pfx certificate. Only applicable in PUT Request.
         */
        data?: pulumi.Input<string>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: pulumi.Input<string>;
        /**
         * Name of the SSL certificate that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Password for the pfx file specified in data. Only applicable in PUT request.
         */
        password?: pulumi.Input<string>;
        /**
         * Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.
         */
        publicCertData?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Application Gateway Ssl policy.
     */
    export interface ApplicationGatewaySslPolicyArgs {
        /**
         * Ssl cipher suites to be enabled in the specified order to application gateway.
         */
        cipherSuites?: pulumi.Input<pulumi.Input<string | enums.ApplicationGatewaySslCipherSuite>[]>;
        /**
         * Ssl protocols to be disabled on application gateway.
         */
        disabledSslProtocols?: pulumi.Input<pulumi.Input<string | enums.ApplicationGatewaySslProtocol>[]>;
        /**
         * Minimum version of Ssl protocol to be supported on application gateway.
         */
        minProtocolVersion?: pulumi.Input<string | enums.ApplicationGatewaySslProtocol>;
        /**
         * Name of Ssl predefined policy.
         */
        policyName?: pulumi.Input<string | enums.ApplicationGatewaySslPolicyName>;
        /**
         * Type of Ssl Policy.
         */
        policyType?: pulumi.Input<string | enums.ApplicationGatewaySslPolicyType>;
    }

    /**
     * Trusted Root certificates of an application gateway.
     */
    export interface ApplicationGatewayTrustedRootCertificateArgs {
        /**
         * Certificate public data.
         */
        data?: pulumi.Input<string>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: pulumi.Input<string>;
        /**
         * Name of the trusted root certificate that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
     */
    export interface ApplicationGatewayUrlPathMapArgs {
        /**
         * Default backend address pool resource of URL path map.
         */
        defaultBackendAddressPool?: pulumi.Input<SubResourceArgs>;
        /**
         * Default backend http settings resource of URL path map.
         */
        defaultBackendHttpSettings?: pulumi.Input<SubResourceArgs>;
        /**
         * Default redirect configuration resource of URL path map.
         */
        defaultRedirectConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * Default Rewrite rule set resource of URL path map.
         */
        defaultRewriteRuleSet?: pulumi.Input<SubResourceArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the URL path map that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Path rule of URL path map resource.
         */
        pathRules?: pulumi.Input<pulumi.Input<ApplicationGatewayPathRuleArgs>[]>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Application gateway web application firewall configuration.
     */
    export interface ApplicationGatewayWebApplicationFirewallConfigurationArgs {
        /**
         * The disabled rule groups.
         */
        disabledRuleGroups?: pulumi.Input<pulumi.Input<ApplicationGatewayFirewallDisabledRuleGroupArgs>[]>;
        /**
         * Whether the web application firewall is enabled or not.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * The exclusion list.
         */
        exclusions?: pulumi.Input<pulumi.Input<ApplicationGatewayFirewallExclusionArgs>[]>;
        /**
         * Maximum file upload size in Mb for WAF.
         */
        fileUploadLimitInMb?: pulumi.Input<number>;
        /**
         * Web application firewall mode.
         */
        firewallMode: pulumi.Input<string | enums.ApplicationGatewayFirewallMode>;
        /**
         * Maximum request body size for WAF.
         */
        maxRequestBodySize?: pulumi.Input<number>;
        /**
         * Maximum request body size in Kb for WAF.
         */
        maxRequestBodySizeInKb?: pulumi.Input<number>;
        /**
         * Whether allow WAF to check request Body.
         */
        requestBodyCheck?: pulumi.Input<boolean>;
        /**
         * The type of the web application firewall rule set. Possible values are: 'OWASP'.
         */
        ruleSetType: pulumi.Input<string>;
        /**
         * The version of the rule set type.
         */
        ruleSetVersion: pulumi.Input<string>;
    }

    /**
     * An application security group in a resource group.
     */
    export interface ApplicationSecurityGroupArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Pool of backend IP addresses.
     */
    export interface BackendAddressPoolArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * BGP settings details.
     */
    export interface BgpSettingsArgs {
        /**
         * The BGP speaker's ASN.
         */
        asn?: pulumi.Input<number>;
        /**
         * The BGP peering address and BGP identifier of this BGP speaker.
         */
        bgpPeeringAddress?: pulumi.Input<string>;
        /**
         * The weight added to routes learned from this BGP speaker.
         */
        peerWeight?: pulumi.Input<number>;
    }

    /**
     * Reference to container resource in remote resource provider.
     */
    export interface ContainerArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Container network interface child resource.
     */
    export interface ContainerNetworkInterfaceArgs {
        /**
         * Reference to the container to which this container network interface is attached.
         */
        container?: pulumi.Input<ContainerArgs>;
        /**
         * Container network interface configuration from which this container network interface is created.
         */
        containerNetworkInterfaceConfiguration?: pulumi.Input<ContainerNetworkInterfaceConfigurationArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Reference to the ip configuration on this container nic.
         */
        ipConfigurations?: pulumi.Input<pulumi.Input<ContainerNetworkInterfaceIpConfigurationArgs>[]>;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Container network interface configuration child resource.
     */
    export interface ContainerNetworkInterfaceConfigurationArgs {
        /**
         * A list of container network interfaces created from this container network interface configuration.
         */
        containerNetworkInterfaces?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * A list of ip configurations of the container network interface configuration.
         */
        ipConfigurations?: pulumi.Input<pulumi.Input<IPConfigurationProfileArgs>[]>;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The ip configuration for a container network interface.
     */
    export interface ContainerNetworkInterfaceIpConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Contains the DDoS protection settings of the public IP.
     */
    export interface DdosSettingsArgs {
        /**
         * The DDoS custom policy associated with the public IP.
         */
        ddosCustomPolicy?: pulumi.Input<SubResourceArgs>;
        /**
         * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
         */
        protectionCoverage?: pulumi.Input<string | enums.DdosSettingsProtectionCoverage>;
    }

    /**
     * Details the service to which the subnet is delegated.
     */
    export interface DelegationArgs {
        /**
         * Describes the actions permitted to the service upon delegation.
         */
        actions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
         */
        serviceName?: pulumi.Input<string>;
    }

    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
     */
    export interface DhcpOptionsArgs {
        /**
         * The list of DNS servers IP addresses.
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionArgs {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * The authorization key.
         */
        authorizationKey?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringArgs {
        /**
         * The Azure ASN.
         */
        azureASN?: pulumi.Input<number>;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: pulumi.Input<pulumi.Input<ExpressRouteCircuitConnectionArgs>[]>;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: pulumi.Input<Ipv6ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * Who was the last to modify the peering.
         */
        lastModifiedBy?: pulumi.Input<string>;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The peer ASN.
         */
        peerASN?: pulumi.Input<number>;
        /**
         * The peering type.
         */
        peeringType?: pulumi.Input<string | enums.ExpressRoutePeeringType>;
        /**
         * The primary port.
         */
        primaryAzurePort?: pulumi.Input<string>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<SubResourceArgs>;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: pulumi.Input<string>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The shared key.
         */
        sharedKey?: pulumi.Input<string>;
        /**
         * The peering state.
         */
        state?: pulumi.Input<string | enums.ExpressRoutePeeringState>;
        /**
         * The peering stats of express route circuit.
         */
        stats?: pulumi.Input<ExpressRouteCircuitStatsArgs>;
        /**
         * The VLAN ID.
         */
        vlanId?: pulumi.Input<number>;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The communities of bgp peering. Specified for microsoft peering.
         */
        advertisedCommunities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The advertised public prefix state of the Peering resource.
         */
        advertisedPublicPrefixesState?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringAdvertisedPublicPrefixState>;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: pulumi.Input<number>;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: pulumi.Input<number>;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: pulumi.Input<string>;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsArgs {
        /**
         * The Primary BytesIn of the peering.
         */
        primarybytesIn?: pulumi.Input<number>;
        /**
         * The primary BytesOut of the peering.
         */
        primarybytesOut?: pulumi.Input<number>;
        /**
         * The secondary BytesIn of the peering.
         */
        secondarybytesIn?: pulumi.Input<number>;
        /**
         * The secondary BytesOut of the peering.
         */
        secondarybytesOut?: pulumi.Input<number>;
    }

    /**
     * ExpressRouteLink child resource definition.
     */
    export interface ExpressRouteLinkArgs {
        /**
         * Administrative state of the physical port.
         */
        adminState?: pulumi.Input<string | enums.ExpressRouteLinkAdminState>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * MacSec configuration.
         */
        macSecConfig?: pulumi.Input<ExpressRouteLinkMacSecConfigArgs>;
        /**
         * Name of child port resource that is unique among child port resources of the parent.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * ExpressRouteLink Mac Security Configuration.
     */
    export interface ExpressRouteLinkMacSecConfigArgs {
        /**
         * Keyvault Secret Identifier URL containing Mac security CAK key.
         */
        cakSecretIdentifier?: pulumi.Input<string>;
        /**
         * Mac security cipher.
         */
        cipher?: pulumi.Input<string | enums.ExpressRouteLinkMacSecCipher>;
        /**
         * Keyvault Secret Identifier URL containing Mac security CKN key.
         */
        cknSecretIdentifier?: pulumi.Input<string>;
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The reference of the Public IP resource.
         */
        publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * The reference of the Public IP Prefix resource.
         */
        publicIPPrefix?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference of the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * IP configuration profile child resource.
     */
    export interface IPConfigurationProfileArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference of the subnet resource to create a container network interface ip configuration.
         */
        subnet?: pulumi.Input<SubnetArgs>;
    }

    /**
     * Inbound NAT pool of the load balancer.
     */
    export interface InboundNatPoolArgs {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: pulumi.Input<number>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
         */
        frontendPortRangeEnd: pulumi.Input<number>;
        /**
         * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
         */
        frontendPortRangeStart: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the inbound NAT pool.
         */
        protocol: pulumi.Input<string | enums.TransportProtocol>;
    }

    /**
     * Inbound NAT rule of the load balancer.
     */
    export interface InboundNatRuleArgs {
        /**
         * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
         */
        backendPort?: pulumi.Input<number>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
         */
        frontendPort?: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol?: pulumi.Input<string | enums.TransportProtocol>;
    }

    /**
     * Contains the IpTag associated with the object.
     */
    export interface IpTagArgs {
        /**
         * The IP tag type. Example: FirstPartyUsage.
         */
        ipTagType?: pulumi.Input<string>;
        /**
         * The value of the IP tag associated with the public IP. Example: SQL.
         */
        tag?: pulumi.Input<string>;
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
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<SubResourceArgs>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The state of peering.
         */
        state?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringState>;
    }

    /**
     * SKU of a load balancer.
     */
    export interface LoadBalancerSkuArgs {
        /**
         * Name of a load balancer SKU.
         */
        name?: pulumi.Input<string | enums.LoadBalancerSkuName>;
    }

    /**
     * A load balancing rule for a load balancer.
     */
    export interface LoadBalancingRuleArgs {
        /**
         * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool?: pulumi.Input<SubResourceArgs>;
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
         */
        backendPort?: pulumi.Input<number>;
        /**
         * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
         */
        disableOutboundSnat?: pulumi.Input<boolean>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
         */
        frontendPort: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: pulumi.Input<string | enums.LoadDistribution>;
        /**
         * The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference of the load balancer probe used by the load balancing rule.
         */
        probe?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: pulumi.Input<string | enums.TransportProtocol>;
    }

    /**
     * A common class for general resource information.
     */
    export interface LocalNetworkGatewayArgs {
        /**
         * Local network gateway's BGP speaker settings.
         */
        bgpSettings?: pulumi.Input<BgpSettingsArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * IP address of local network gateway.
         */
        gatewayIpAddress?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Local network site address space.
         */
        localNetworkAddressSpace?: pulumi.Input<AddressSpaceArgs>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The resource GUID property of the local network gateway resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * SKU of nat gateway.
     */
    export interface NatGatewaySkuArgs {
        /**
         * Name of Nat Gateway SKU.
         */
        name?: pulumi.Input<string | enums.NatGatewaySkuName>;
    }

    /**
     * DNS settings of a network interface.
     */
    export interface NetworkInterfaceDnsSettingsArgs {
        /**
         * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
         */
        appliedDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
         */
        internalDnsNameLabel?: pulumi.Input<string>;
        /**
         * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
         */
        internalDomainNameSuffix?: pulumi.Input<string>;
        /**
         * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
         */
        internalFqdn?: pulumi.Input<string>;
    }

    /**
     * IPConfiguration in a network interface.
     */
    export interface NetworkInterfaceIPConfigurationArgs {
        /**
         * The reference of ApplicationGatewayBackendAddressPool resource.
         */
        applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressPoolArgs>[]>;
        /**
         * Application security groups in which the IP configuration is included.
         */
        applicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The reference of LoadBalancerBackendAddressPool resource.
         */
        loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<BackendAddressPoolArgs>[]>;
        /**
         * A list of references of LoadBalancerInboundNatRules.
         */
        loadBalancerInboundNatRules?: pulumi.Input<pulumi.Input<InboundNatRuleArgs>[]>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Whether this is a primary customer address on the network interface.
         */
        primary?: pulumi.Input<boolean>;
        /**
         * Private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * Public IP address bound to the IP configuration.
         */
        publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * Subnet bound to the IP configuration.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * The reference to Virtual Network Taps.
         */
        virtualNetworkTaps?: pulumi.Input<pulumi.Input<VirtualNetworkTapArgs>[]>;
    }

    /**
     * Tap configuration in a Network Interface.
     */
    export interface NetworkInterfaceTapConfigurationArgs {
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
         * The reference of the Virtual Network Tap resource.
         */
        virtualNetworkTap?: pulumi.Input<VirtualNetworkTapArgs>;
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupArgs {
        /**
         * The default security rules of network security group.
         */
        defaultSecurityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The resource GUID property of the network security group resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * A collection of security rules of the network security group.
         */
        securityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Outbound rule of the load balancer.
     */
    export interface OutboundRuleArgs {
        /**
         * The number of outbound ports to be used for NAT.
         */
        allocatedOutboundPorts?: pulumi.Input<number>;
        /**
         * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool: pulumi.Input<SubResourceArgs>;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * The Frontend IP addresses of the load balancer.
         */
        frontendIPConfigurations: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The protocol for the outbound rule in load balancer.
         */
        protocol: pulumi.Input<string | enums.LoadBalancerOutboundRuleProtocol>;
    }

    /**
     * Private endpoint resource.
     */
    export interface PrivateEndpointArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
         */
        manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
        /**
         * A grouping of information about the connection to the remote resource.
         */
        privateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
        /**
         * The ID of the subnet from which the private IP will be allocated.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * PrivateEndpointConnection resource.
     */
    export interface PrivateEndpointConnectionArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * PrivateLinkServiceConnection resource.
     */
    export interface PrivateLinkServiceConnectionArgs {
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * A collection of read-only information about the state of the connection to the remote resource.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
        /**
         * The resource id of private link service.
         */
        privateLinkServiceId?: pulumi.Input<string>;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage?: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * The private link service ip configuration.
     */
    export interface PrivateLinkServiceIpConfigurationArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of private link service ip configuration.
         */
        name?: pulumi.Input<string>;
        /**
         * Whether the ip configuration is primary or not.
         */
        primary?: pulumi.Input<boolean>;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The reference to the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
    }

    /**
     * The auto-approval list of the private link service.
     */
    export interface PrivateLinkServicePropertiesAutoApprovalArgs {
        /**
         * The list of subscriptions.
         */
        subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The visibility list of the private link service.
     */
    export interface PrivateLinkServicePropertiesVisibilityArgs {
        /**
         * The list of subscriptions.
         */
        subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * A load balancer probe.
     */
    export interface ProbeArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
         */
        intervalInSeconds?: pulumi.Input<number>;
        /**
         * The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
         */
        numberOfProbes?: pulumi.Input<number>;
        /**
         * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
         */
        port: pulumi.Input<number>;
        /**
         * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
         */
        protocol: pulumi.Input<string | enums.ProbeProtocol>;
        /**
         * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
         */
        requestPath?: pulumi.Input<string>;
    }

    /**
     * Public IP address resource.
     */
    export interface PublicIPAddressArgs {
        /**
         * The DDoS protection custom policy associated with the public IP address.
         */
        ddosSettings?: pulumi.Input<DdosSettingsArgs>;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: pulumi.Input<PublicIPAddressDnsSettingsArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The idle timeout of the public IP address.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The IP address associated with the public IP address resource.
         */
        ipAddress?: pulumi.Input<string>;
        /**
         * The list of tags associated with the public IP address.
         */
        ipTags?: pulumi.Input<pulumi.Input<IpTagArgs>[]>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The public IP address version.
         */
        publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The public IP address allocation method.
         */
        publicIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The Public IP Prefix this Public IP Address should be allocated from.
         */
        publicIPPrefix?: pulumi.Input<SubResourceArgs>;
        /**
         * The resource GUID property of the public IP address resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * The public IP address SKU.
         */
        sku?: pulumi.Input<PublicIPAddressSkuArgs>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Contains FQDN of the DNS record associated with the public IP address.
     */
    export interface PublicIPAddressDnsSettingsArgs {
        /**
         * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: pulumi.Input<string>;
        /**
         * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: pulumi.Input<string>;
        /**
         * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
         */
        reverseFqdn?: pulumi.Input<string>;
    }

    /**
     * SKU of a public IP address.
     */
    export interface PublicIPAddressSkuArgs {
        /**
         * Name of a public IP address SKU.
         */
        name?: pulumi.Input<string | enums.PublicIPAddressSkuName>;
    }

    /**
     * SKU of a public IP prefix.
     */
    export interface PublicIPPrefixSkuArgs {
        /**
         * Name of a public IP prefix SKU.
         */
        name?: pulumi.Input<string | enums.PublicIPPrefixSkuName>;
    }

    /**
     * Reference to a public IP address.
     */
    export interface ReferencedPublicIpAddressArgs {
        /**
         * The PublicIPAddress Reference.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * ResourceNavigationLink resource.
     */
    export interface ResourceNavigationLinkArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Link to the external resource.
         */
        link?: pulumi.Input<string>;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: pulumi.Input<string>;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Route resource.
     */
    export interface RouteArgs {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: pulumi.Input<string>;
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
         * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: pulumi.Input<string>;
        /**
         * The type of Azure hop the packet should be sent to.
         */
        nextHopType: pulumi.Input<string | enums.RouteNextHopType>;
    }

    /**
     * Route Filter Rule Resource.
     */
    export interface RouteFilterRuleArgs {
        /**
         * The access type of the rule.
         */
        access: pulumi.Input<string | enums.Access>;
        /**
         * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
         */
        communities: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The rule type of the rule.
         */
        routeFilterRuleType: pulumi.Input<string | enums.RouteFilterRuleType>;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableArgs {
        /**
         * Whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Collection of routes contained within a route table.
         */
        routes?: pulumi.Input<pulumi.Input<RouteArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Network security rule.
     */
    export interface SecurityRuleArgs {
        /**
         * The network traffic is allowed or denied.
         */
        access: pulumi.Input<string | enums.SecurityRuleAccess>;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: pulumi.Input<string>;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: pulumi.Input<string>;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The application security group specified as destination.
         */
        destinationApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: pulumi.Input<string>;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction: pulumi.Input<string | enums.SecurityRuleDirection>;
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
         * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority?: pulumi.Input<number>;
        /**
         * Network protocol this rule applies to.
         */
        protocol: pulumi.Input<string | enums.SecurityRuleProtocol>;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: pulumi.Input<string>;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The application security group specified as source.
         */
        sourceApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: pulumi.Input<string>;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * ServiceAssociationLink resource.
     */
    export interface ServiceAssociationLinkArgs {
        /**
         * If true, the resource can be deleted.
         */
        allowDelete?: pulumi.Input<boolean>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Link to the external resource.
         */
        link?: pulumi.Input<string>;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: pulumi.Input<string>;
        /**
         * A list of locations.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Resource type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Service End point policy resource.
     */
    export interface ServiceEndpointPolicyArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * A collection of service endpoint policy definitions of the service endpoint policy.
         */
        serviceEndpointPolicyDefinitions?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyDefinitionArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Service Endpoint policy definitions.
     */
    export interface ServiceEndpointPolicyDefinitionArgs {
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: pulumi.Input<string>;
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
         * Service endpoint name.
         */
        service?: pulumi.Input<string>;
        /**
         * A list of service resources.
         */
        serviceResources?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointPropertiesFormatArgs {
        /**
         * A list of locations.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The type of the endpoint service.
         */
        service?: pulumi.Input<string>;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResource {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: string;
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
     * Subnet in a virtual network resource.
     */
    export interface SubnetArgs {
        /**
         * The address prefix for the subnet.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * List of address prefixes for the subnet.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * An array of references to the delegations on the subnet.
         */
        delegations?: pulumi.Input<pulumi.Input<DelegationArgs>[]>;
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
         * Nat gateway associated with this subnet.
         */
        natGateway?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArgs>;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: pulumi.Input<string>;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: pulumi.Input<string>;
        /**
         * An array of references to the external resources using subnet.
         */
        resourceNavigationLinks?: pulumi.Input<pulumi.Input<ResourceNavigationLinkArgs>[]>;
        /**
         * The reference of the RouteTable resource.
         */
        routeTable?: pulumi.Input<RouteTableArgs>;
        /**
         * An array of references to services injecting into this subnet.
         */
        serviceAssociationLinks?: pulumi.Input<pulumi.Input<ServiceAssociationLinkArgs>[]>;
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyArgs>[]>;
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: pulumi.Input<pulumi.Input<ServiceEndpointPropertiesFormatArgs>[]>;
    }

    /**
     * An traffic selector policy for a virtual network gateway connection.
     */
    export interface TrafficSelectorPolicyArgs {
        /**
         * A collection of local address spaces in CIDR format
         */
        localAddressRanges: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A collection of remote address spaces in CIDR format
         */
        remoteAddressRanges: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
     */
    export interface VirtualNetworkBgpCommunitiesArgs {
        /**
         * The BGP community associated with the virtual network
         */
        virtualNetworkCommunity: pulumi.Input<string>;
    }

    /**
     * A common class for general resource information.
     */
    export interface VirtualNetworkGatewayArgs {
        /**
         * ActiveActive flag.
         */
        activeActive?: pulumi.Input<boolean>;
        /**
         * Virtual network gateway's BGP speaker settings.
         */
        bgpSettings?: pulumi.Input<BgpSettingsArgs>;
        /**
         * The reference of the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
         */
        customRoutes?: pulumi.Input<AddressSpaceArgs>;
        /**
         * Whether BGP is enabled for this virtual network gateway or not.
         */
        enableBgp?: pulumi.Input<boolean>;
        /**
         * Whether dns forwarding is enabled or not.
         */
        enableDnsForwarding?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
         */
        gatewayDefaultSite?: pulumi.Input<SubResourceArgs>;
        /**
         * The type of this virtual network gateway.
         */
        gatewayType?: pulumi.Input<string | enums.VirtualNetworkGatewayType>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * IP configurations for virtual network gateway.
         */
        ipConfigurations?: pulumi.Input<pulumi.Input<VirtualNetworkGatewayIPConfigurationArgs>[]>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The resource GUID property of the virtual network gateway resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
         */
        sku?: pulumi.Input<VirtualNetworkGatewaySkuArgs>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
         */
        vpnClientConfiguration?: pulumi.Input<VpnClientConfigurationArgs>;
        /**
         * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
         */
        vpnGatewayGeneration?: pulumi.Input<string | enums.VpnGatewayGeneration>;
        /**
         * The type of this virtual network gateway.
         */
        vpnType?: pulumi.Input<string | enums.VpnType>;
    }

    /**
     * IP configuration for virtual network gateway.
     */
    export interface VirtualNetworkGatewayIPConfigurationArgs {
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
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The reference of the public IP resource.
         */
        publicIPAddress?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference of the subnet resource.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * VirtualNetworkGatewaySku details.
     */
    export interface VirtualNetworkGatewaySkuArgs {
        /**
         * The capacity.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Gateway SKU name.
         */
        name?: pulumi.Input<string | enums.VirtualNetworkGatewaySkuName>;
        /**
         * Gateway SKU tier.
         */
        tier?: pulumi.Input<string | enums.VirtualNetworkGatewaySkuTier>;
    }

    /**
     * Peerings in a virtual network resource.
     */
    export interface VirtualNetworkPeeringArgs {
        /**
         * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
         */
        allowForwardedTraffic?: pulumi.Input<boolean>;
        /**
         * If gateway links can be used in remote virtual networking to link to this virtual network.
         */
        allowGatewayTransit?: pulumi.Input<boolean>;
        /**
         * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
         */
        allowVirtualNetworkAccess?: pulumi.Input<boolean>;
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
         * The status of the virtual network peering.
         */
        peeringState?: pulumi.Input<string | enums.VirtualNetworkPeeringState>;
        /**
         * The reference of the remote virtual network address space.
         */
        remoteAddressSpace?: pulumi.Input<AddressSpaceArgs>;
        /**
         * The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
         */
        remoteVirtualNetwork?: pulumi.Input<SubResourceArgs>;
        /**
         * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
         */
        useRemoteGateways?: pulumi.Input<boolean>;
    }

    /**
     * Virtual Network Tap resource.
     */
    export interface VirtualNetworkTapArgs {
        /**
         * The reference to the private IP address on the internal Load Balancer that will receive the tap.
         */
        destinationLoadBalancerFrontEndIPConfiguration?: pulumi.Input<FrontendIPConfigurationArgs>;
        /**
         * The reference to the private IP Address of the collector nic that will receive the tap.
         */
        destinationNetworkInterfaceIPConfiguration?: pulumi.Input<NetworkInterfaceIPConfigurationArgs>;
        /**
         * The VXLAN destination port that will receive the tapped traffic.
         */
        destinationPort?: pulumi.Input<number>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * VpnClientConfiguration for P2S client.
     */
    export interface VpnClientConfigurationArgs {
        /**
         * The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
         */
        aadAudience?: pulumi.Input<string>;
        /**
         * The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
         */
        aadIssuer?: pulumi.Input<string>;
        /**
         * The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
         */
        aadTenant?: pulumi.Input<string>;
        /**
         * The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
         */
        radiusServerAddress?: pulumi.Input<string>;
        /**
         * The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
         */
        radiusServerSecret?: pulumi.Input<string>;
        /**
         * The reference of the address space resource which represents Address space for P2S VpnClient.
         */
        vpnClientAddressPool?: pulumi.Input<AddressSpaceArgs>;
        /**
         * VpnClientIpsecPolicies for virtual network gateway P2S client.
         */
        vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<IpsecPolicyArgs>[]>;
        /**
         * VpnClientProtocols for Virtual network gateway.
         */
        vpnClientProtocols?: pulumi.Input<pulumi.Input<string | enums.VpnClientProtocol>[]>;
        /**
         * VpnClientRevokedCertificate for Virtual network gateway.
         */
        vpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<VpnClientRevokedCertificateArgs>[]>;
        /**
         * VpnClientRootCertificate for virtual network gateway.
         */
        vpnClientRootCertificates?: pulumi.Input<pulumi.Input<VpnClientRootCertificateArgs>[]>;
    }

    /**
     * VPN client revoked certificate of virtual network gateway.
     */
    export interface VpnClientRevokedCertificateArgs {
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
     * VPN client root certificate of virtual network gateway.
     */
    export interface VpnClientRootCertificateArgs {
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
