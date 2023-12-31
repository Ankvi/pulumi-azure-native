import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The configuration settings of the Allowed Audiences validation flow.
     */
    export interface AllowedAudiencesValidationArgs {
        /**
         * The configuration settings of the allowed list of audiences from which to validate the JWT token.
         */
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    export interface AllowedPrincipalsArgs {
        /**
         * The list of the allowed groups.
         */
        groups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The list of the allowed identities.
         */
        identities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Configuration of application logs
     */
    export interface AppLogsConfigurationArgs {
        /**
         * Logs destination, can be 'log-analytics', 'azure-monitor' or 'none'
         */
        destination?: pulumi.Input<string>;
        /**
         * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
         */
        logAnalyticsConfiguration?: pulumi.Input<LogAnalyticsConfigurationArgs>;
    }

    /**
     * The configuration settings of the app registration for providers that have app ids and app secrets
     */
    export interface AppRegistrationArgs {
        /**
         * The App ID of the app used for login.
         */
        appId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the app secret.
         */
        appSecretSettingName?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Apple provider.
     */
    export interface AppleArgs {
        /**
         * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the Apple registration.
         */
        registration?: pulumi.Input<AppleRegistrationArgs>;
    }

    /**
     * The configuration settings of the registration for the Apple provider
     */
    export interface AppleRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret.
         */
        clientSecretSettingName?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
     */
    export interface AuthPlatformArgs {
        /**
         * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
         * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
         */
        runtimeVersion?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Azure Active directory provider.
     */
    export interface AzureActiveDirectoryArgs {
        /**
         * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
         * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
         * read or write to this property.
         */
        isAutoProvisioned?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the Azure Active Directory login flow.
         */
        login?: pulumi.Input<AzureActiveDirectoryLoginArgs>;
        /**
         * The configuration settings of the Azure Active Directory app registration.
         */
        registration?: pulumi.Input<AzureActiveDirectoryRegistrationArgs>;
        /**
         * The configuration settings of the Azure Active Directory token validation flow.
         */
        validation?: pulumi.Input<AzureActiveDirectoryValidationArgs>;
    }

    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    export interface AzureActiveDirectoryLoginArgs {
        /**
         * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
         */
        disableWWWAuthenticate?: pulumi.Input<boolean>;
        /**
         * Login parameters to send to the OpenID Connect authorization endpoint when
         * a user logs in. Each parameter must be in the form "key=value".
         */
        loginParameters?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    export interface AzureActiveDirectoryRegistrationArgs {
        /**
         * The Client ID of this relying party application, known as the client_id.
         * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
         * other 3rd party OpenID Connect providers.
         * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
         */
        clientId?: pulumi.Input<string>;
        /**
         * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
         */
        clientSecretCertificateIssuer?: pulumi.Input<string>;
        /**
         * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
         */
        clientSecretCertificateSubjectAlternativeName?: pulumi.Input<string>;
        /**
         * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
         * a replacement for the Client Secret. It is also optional.
         */
        clientSecretCertificateThumbprint?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret of the relying party application.
         */
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
         * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
         * This URI is a case-sensitive identifier for the token issuer.
         * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
         */
        openIdIssuer?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    export interface AzureActiveDirectoryValidationArgs {
        /**
         * The list of audiences that can make successful authentication/authorization requests.
         */
        allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the default authorization policy.
         */
        defaultAuthorizationPolicy?: pulumi.Input<DefaultAuthorizationPolicyArgs>;
        /**
         * The configuration settings of the checks that should be made while validating the JWT Claims.
         */
        jwtClaimChecks?: pulumi.Input<JwtClaimChecksArgs>;
    }

    /**
     * Container App credentials.
     */
    export interface AzureCredentialsArgs {
        /**
         * Client Id.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Client Secret.
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * Subscription Id.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * Tenant Id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Azure File Properties.
     */
    export interface AzureFilePropertiesArgs {
        /**
         * Access mode for storage
         */
        accessMode?: pulumi.Input<string | enums.AccessMode>;
        /**
         * Storage account key for azure file.
         */
        accountKey?: pulumi.Input<string>;
        /**
         * Storage account name for azure file.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Azure file share name.
         */
        shareName?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    export interface AzureStaticWebAppsArgs {
        /**
         * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the Azure Static Web Apps registration.
         */
        registration?: pulumi.Input<AzureStaticWebAppsRegistrationArgs>;
    }

    /**
     * The configuration settings of the registration for the Azure Static Web Apps provider
     */
    export interface AzureStaticWebAppsRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
    }

    /**
     * Certificate resource specific properties
     */
    export interface CertificatePropertiesArgs {
        /**
         * Certificate password.
         */
        password?: pulumi.Input<string>;
        /**
         * PFX or PEM blob
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the app registration for providers that have client ids and client secrets
     */
    export interface ClientRegistrationArgs {
        /**
         * The Client ID of the app used for login.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The app setting name that contains the client secret.
         */
        clientSecretSettingName?: pulumi.Input<string>;
    }

    /**
     * Non versioned Container App configuration properties that define the mutable settings of a Container app
     */
    export interface ConfigurationArgs {
        /**
         * ActiveRevisionsMode controls how active revisions are handled for the Container app:
         * <list><item>Multiple: multiple revisions can be active. If no value if provided, this is the default</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode</item></list>
         */
        activeRevisionsMode?: pulumi.Input<string | enums.ActiveRevisionsMode>;
        /**
         * Dapr configuration for the Container App.
         */
        dapr?: pulumi.Input<DaprArgs>;
        /**
         * Ingress configurations.
         */
        ingress?: pulumi.Input<IngressArgs>;
        /**
         * Collection of private container registry credentials for containers used by the Container app
         */
        registries?: pulumi.Input<pulumi.Input<RegistryCredentialsArgs>[]>;
        /**
         * Collection of secrets used by a Container app
         */
        secrets?: pulumi.Input<pulumi.Input<SecretArgs>[]>;
    }
    /**
     * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
     */
    export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
        return {
            ...val,
            ingress: (val.ingress ? pulumi.output(val.ingress).apply(ingressArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Container App container definition.
     */
    export interface ContainerArgs {
        /**
         * Container start command arguments.
         */
        args?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Container start command.
         */
        command?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Container environment variables.
         */
        env?: pulumi.Input<pulumi.Input<EnvironmentVarArgs>[]>;
        /**
         * Container image tag.
         */
        image?: pulumi.Input<string>;
        /**
         * Custom container name.
         */
        name?: pulumi.Input<string>;
        /**
         * List of probes for the container.
         */
        probes?: pulumi.Input<pulumi.Input<ContainerAppProbeArgs>[]>;
        /**
         * Container resource requirements.
         */
        resources?: pulumi.Input<ContainerResourcesArgs>;
        /**
         * Container volume mounts.
         */
        volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[]>;
    }

    /**
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     */
    export interface ContainerAppProbeArgs {
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
         */
        failureThreshold?: pulumi.Input<number>;
        /**
         * HTTPGet specifies the http request to perform.
         */
        httpGet?: pulumi.Input<ContainerAppProbeHttpGetArgs>;
        /**
         * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
         */
        initialDelaySeconds?: pulumi.Input<number>;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
         */
        periodSeconds?: pulumi.Input<number>;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
         */
        successThreshold?: pulumi.Input<number>;
        /**
         * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
         */
        tcpSocket?: pulumi.Input<ContainerAppProbeTcpSocketArgs>;
        /**
         * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
         */
        terminationGracePeriodSeconds?: pulumi.Input<number>;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
         */
        timeoutSeconds?: pulumi.Input<number>;
        /**
         * The type of probe.
         */
        type?: pulumi.Input<string | enums.Type>;
    }

    /**
     * HTTPGet specifies the http request to perform.
     */
    export interface ContainerAppProbeHttpGetArgs {
        /**
         * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
         */
        host?: pulumi.Input<string>;
        /**
         * Custom headers to set in the request. HTTP allows repeated headers.
         */
        httpHeaders?: pulumi.Input<pulumi.Input<ContainerAppProbeHttpHeadersArgs>[]>;
        /**
         * Path to access on the HTTP server.
         */
        path?: pulumi.Input<string>;
        /**
         * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        port: pulumi.Input<number>;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP.
         */
        scheme?: pulumi.Input<string | enums.Scheme>;
    }

    /**
     * HTTPHeader describes a custom header to be used in HTTP probes
     */
    export interface ContainerAppProbeHttpHeadersArgs {
        /**
         * The header field name
         */
        name: pulumi.Input<string>;
        /**
         * The header field value
         */
        value: pulumi.Input<string>;
    }

    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
     */
    export interface ContainerAppProbeTcpSocketArgs {
        /**
         * Optional: Host name to connect to, defaults to the pod IP.
         */
        host?: pulumi.Input<string>;
        /**
         * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        port: pulumi.Input<number>;
    }

    /**
     * Container App container resource requirements.
     */
    export interface ContainerResourcesArgs {
        /**
         * Required CPU in cores, e.g. 0.5
         */
        cpu?: pulumi.Input<number>;
        /**
         * Required memory, e.g. "250Mb"
         */
        memory?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the session cookie's expiration.
     */
    export interface CookieExpirationArgs {
        /**
         * The convention used when determining the session cookie's expiration.
         */
        convention?: pulumi.Input<enums.CookieExpirationConvention>;
        /**
         * The time after the request is made when the session cookie should expire.
         */
        timeToExpiration?: pulumi.Input<string>;
    }

    /**
     * Custom Domain of a Container App
     */
    export interface CustomDomainArgs {
        /**
         * Custom Domain binding type.
         */
        bindingType?: pulumi.Input<string | enums.BindingType>;
        /**
         * Resource Id of the Certificate to be bound to this hostname.
         */
        certificateId?: pulumi.Input<string>;
        /**
         * Hostname.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the custom Open ID Connect provider.
     */
    export interface CustomOpenIdConnectProviderArgs {
        /**
         * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow of the custom Open ID Connect provider.
         */
        login?: pulumi.Input<OpenIdConnectLoginArgs>;
        /**
         * The configuration settings of the app registration for the custom Open ID Connect provider.
         */
        registration?: pulumi.Input<OpenIdConnectRegistrationArgs>;
    }

    /**
     * Container App container Custom scaling rule.
     */
    export interface CustomScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe custom scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Type of the custom scale rule
         * eg: azure-servicebus, redis etc.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Container App Dapr configuration.
     */
    export interface DaprArgs {
        /**
         * Dapr application identifier
         */
        appId?: pulumi.Input<string>;
        /**
         * Tells Dapr which port your application is listening on
         */
        appPort?: pulumi.Input<number>;
        /**
         * Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
         */
        appProtocol?: pulumi.Input<string | enums.AppProtocol>;
        /**
         * Boolean indicating if the Dapr side car is enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Dapr component metadata.
     */
    export interface DaprMetadataArgs {
        /**
         * Metadata property name.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of the Dapr Component secret from which to pull the metadata property value.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Metadata property value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Azure Active Directory default authorization policy.
     */
    export interface DefaultAuthorizationPolicyArgs {
        /**
         * The configuration settings of the Azure Active Directory allowed applications.
         */
        allowedApplications?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the Azure Active Directory allowed principals.
         */
        allowedPrincipals?: pulumi.Input<AllowedPrincipalsArgs>;
    }

    /**
     * Container App container environment variable.
     */
    export interface EnvironmentVarArgs {
        /**
         * Environment variable name.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of the Container App secret from which to pull the environment variable value.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Non-secret environment variable value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the Facebook provider.
     */
    export interface FacebookArgs {
        /**
         * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The version of the Facebook api to be used while logging in.
         */
        graphApiVersion?: pulumi.Input<string>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the Facebook provider.
         */
        registration?: pulumi.Input<AppRegistrationArgs>;
    }

    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    export interface ForwardProxyArgs {
        /**
         * The convention used to determine the url of the request made.
         */
        convention?: pulumi.Input<enums.ForwardProxyConvention>;
        /**
         * The name of the header containing the host of the request.
         */
        customHostHeaderName?: pulumi.Input<string>;
        /**
         * The name of the header containing the scheme of the request.
         */
        customProtoHeaderName?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the GitHub provider.
     */
    export interface GitHubArgs {
        /**
         * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the GitHub provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
    }

    /**
     * Configuration properties that define the mutable settings of a Container App SourceControl
     */
    export interface GithubActionConfigurationArgs {
        /**
         * AzureCredentials configurations.
         */
        azureCredentials?: pulumi.Input<AzureCredentialsArgs>;
        /**
         * Docker file path
         */
        dockerfilePath?: pulumi.Input<string>;
        /**
         * Operation system
         */
        os?: pulumi.Input<string>;
        /**
         * Code or Image
         */
        publishType?: pulumi.Input<string>;
        /**
         * Registry configurations.
         */
        registryInfo?: pulumi.Input<RegistryInfoArgs>;
        /**
         * Runtime stack
         */
        runtimeStack?: pulumi.Input<string>;
        /**
         * Runtime Version
         */
        runtimeVersion?: pulumi.Input<string>;
    }

    /**
     * The configuration settings that determines the validation flow of users using ContainerApp Service Authentication/Authorization.
     */
    export interface GlobalValidationArgs {
        /**
         * The paths for which unauthenticated flow would not be redirected to the login page.
         */
        excludedPaths?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The default authentication provider to use when multiple providers are configured.
         * This setting is only needed if multiple providers are configured and the unauthenticated client
         * action is set to "RedirectToLoginPage".
         */
        redirectToProvider?: pulumi.Input<string>;
        /**
         * The action to take when an unauthenticated client attempts to access the app.
         */
        unauthenticatedClientAction?: pulumi.Input<enums.UnauthenticatedClientActionV2>;
    }

    /**
     * The configuration settings of the Google provider.
     */
    export interface GoogleArgs {
        /**
         * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the Google provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
        /**
         * The configuration settings of the Azure Active Directory token validation flow.
         */
        validation?: pulumi.Input<AllowedAudiencesValidationArgs>;
    }

    /**
     * Container App container Custom scaling rule.
     */
    export interface HttpScaleRuleArgs {
        /**
         * Authentication secrets for the custom scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe http scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
     */
    export interface HttpSettingsArgs {
        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        forwardProxy?: pulumi.Input<ForwardProxyArgs>;
        /**
         * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
         */
        requireHttps?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the paths HTTP requests.
         */
        routes?: pulumi.Input<HttpSettingsRoutesArgs>;
    }

    /**
     * The configuration settings of the paths HTTP requests.
     */
    export interface HttpSettingsRoutesArgs {
        /**
         * The prefix that should precede all the authentication/authorization paths.
         */
        apiPrefix?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
     */
    export interface IdentityProvidersArgs {
        /**
         * The configuration settings of the Apple provider.
         */
        apple?: pulumi.Input<AppleArgs>;
        /**
         * The configuration settings of the Azure Active directory provider.
         */
        azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs>;
        /**
         * The configuration settings of the Azure Static Web Apps provider.
         */
        azureStaticWebApps?: pulumi.Input<AzureStaticWebAppsArgs>;
        /**
         * The map of the name of the alias of each custom Open ID Connect provider to the
         * configuration settings of the custom Open ID Connect provider.
         */
        customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderArgs>}>;
        /**
         * The configuration settings of the Facebook provider.
         */
        facebook?: pulumi.Input<FacebookArgs>;
        /**
         * The configuration settings of the GitHub provider.
         */
        gitHub?: pulumi.Input<GitHubArgs>;
        /**
         * The configuration settings of the Google provider.
         */
        google?: pulumi.Input<GoogleArgs>;
        /**
         * The configuration settings of the Twitter provider.
         */
        twitter?: pulumi.Input<TwitterArgs>;
    }

    /**
     * Container App Ingress configuration.
     */
    export interface IngressArgs {
        /**
         * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
         */
        allowInsecure?: pulumi.Input<boolean>;
        /**
         * custom domain bindings for Container Apps' hostnames.
         */
        customDomains?: pulumi.Input<pulumi.Input<CustomDomainArgs>[]>;
        /**
         * Bool indicating if app exposes an external http endpoint
         */
        external?: pulumi.Input<boolean>;
        /**
         * Target Port in containers for traffic from ingress
         */
        targetPort?: pulumi.Input<number>;
        /**
         * Traffic weights for app's revisions
         */
        traffic?: pulumi.Input<pulumi.Input<TrafficWeightArgs>[]>;
        /**
         * Ingress transport protocol
         */
        transport?: pulumi.Input<string | enums.IngressTransportMethod>;
    }
    /**
     * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
     */
    export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
        return {
            ...val,
            external: (val.external) ?? false,
        };
    }

    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    export interface JwtClaimChecksArgs {
        /**
         * The list of the allowed client applications.
         */
        allowedClientApplications?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The list of the allowed groups.
         */
        allowedGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
     */
    export interface LogAnalyticsConfigurationArgs {
        /**
         * Log analytics customer id
         */
        customerId?: pulumi.Input<string>;
        /**
         * Log analytics customer key
         */
        sharedKey?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
     */
    export interface LoginArgs {
        /**
         * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
         * This is an advanced setting typically only needed by Windows Store application backends.
         * Note that URLs within the current domain are always implicitly allowed.
         */
        allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The configuration settings of the session cookie's expiration.
         */
        cookieExpiration?: pulumi.Input<CookieExpirationArgs>;
        /**
         * The configuration settings of the nonce used in the login flow.
         */
        nonce?: pulumi.Input<NonceArgs>;
        /**
         * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
         */
        preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
        /**
         * The routes that specify the endpoints used for login and logout requests.
         */
        routes?: pulumi.Input<LoginRoutesArgs>;
    }

    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    export interface LoginRoutesArgs {
        /**
         * The endpoint at which a logout request should be made.
         */
        logoutEndpoint?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow, including the scopes that should be requested.
     */
    export interface LoginScopesArgs {
        /**
         * A list of the scopes that should be requested while authenticating.
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Storage properties
     */
    export interface ManagedEnvironmentStoragePropertiesArgs {
        /**
         * Azure file properties
         */
        azureFile?: pulumi.Input<AzureFilePropertiesArgs>;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the nonce used in the login flow.
     */
    export interface NonceArgs {
        /**
         * The time after the request is made when the nonce should expire.
         */
        nonceExpirationInterval?: pulumi.Input<string>;
        /**
         * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
         */
        validateNonce?: pulumi.Input<boolean>;
    }

    /**
     * The authentication client credentials of the custom Open ID Connect provider.
     */
    export interface OpenIdConnectClientCredentialArgs {
        /**
         * The app setting that contains the client secret for the custom Open ID Connect provider.
         */
        clientSecretSettingName?: pulumi.Input<string>;
        /**
         * The method that should be used to authenticate the user.
         */
        method?: pulumi.Input<enums.ClientCredentialMethod>;
    }

    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    export interface OpenIdConnectConfigArgs {
        /**
         * The endpoint to be used to make an authorization request.
         */
        authorizationEndpoint?: pulumi.Input<string>;
        /**
         * The endpoint that provides the keys necessary to validate the token.
         */
        certificationUri?: pulumi.Input<string>;
        /**
         * The endpoint that issues the token.
         */
        issuer?: pulumi.Input<string>;
        /**
         * The endpoint to be used to request a token.
         */
        tokenEndpoint?: pulumi.Input<string>;
        /**
         * The endpoint that contains all the configuration endpoints for the provider.
         */
        wellKnownOpenIdConfiguration?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    export interface OpenIdConnectLoginArgs {
        /**
         * The name of the claim that contains the users name.
         */
        nameClaimType?: pulumi.Input<string>;
        /**
         * A list of the scopes that should be requested while authenticating.
         */
        scopes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    export interface OpenIdConnectRegistrationArgs {
        /**
         * The authentication credentials of the custom Open ID Connect provider.
         */
        clientCredential?: pulumi.Input<OpenIdConnectClientCredentialArgs>;
        /**
         * The client id of the custom Open ID Connect provider.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The configuration settings of the endpoints used for the custom Open ID Connect provider.
         */
        openIdConnectConfiguration?: pulumi.Input<OpenIdConnectConfigArgs>;
    }

    /**
     * Container App container Azure Queue based scaling rule.
     */
    export interface QueueScaleRuleArgs {
        /**
         * Authentication secrets for the queue scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Queue length.
         */
        queueLength?: pulumi.Input<number>;
        /**
         * Queue name.
         */
        queueName?: pulumi.Input<string>;
    }

    /**
     * Container App Private Registry
     */
    export interface RegistryCredentialsArgs {
        /**
         * The name of the Secret that contains the registry login password
         */
        passwordSecretRef?: pulumi.Input<string>;
        /**
         * Container Registry Server
         */
        server?: pulumi.Input<string>;
        /**
         * Container Registry Username
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Container App registry information.
     */
    export interface RegistryInfoArgs {
        /**
         * registry secret.
         */
        registryPassword?: pulumi.Input<string>;
        /**
         * registry server Url.
         */
        registryUrl?: pulumi.Input<string>;
        /**
         * registry username.
         */
        registryUserName?: pulumi.Input<string>;
    }

    /**
     * Container App scaling configurations.
     */
    export interface ScaleArgs {
        /**
         * Optional. Maximum number of container replicas. Defaults to 10 if not set.
         */
        maxReplicas?: pulumi.Input<number>;
        /**
         * Optional. Minimum number of container replicas.
         */
        minReplicas?: pulumi.Input<number>;
        /**
         * Scaling rules.
         */
        rules?: pulumi.Input<pulumi.Input<ScaleRuleArgs>[]>;
    }
    /**
     * scaleArgsProvideDefaults sets the appropriate defaults for ScaleArgs
     */
    export function scaleArgsProvideDefaults(val: ScaleArgs): ScaleArgs {
        return {
            ...val,
            maxReplicas: (val.maxReplicas) ?? 10,
        };
    }

    /**
     * Container App container scaling rule.
     */
    export interface ScaleRuleArgs {
        /**
         * Azure Queue based scaling.
         */
        azureQueue?: pulumi.Input<QueueScaleRuleArgs>;
        /**
         * Custom scale rule.
         */
        custom?: pulumi.Input<CustomScaleRuleArgs>;
        /**
         * HTTP requests based scaling.
         */
        http?: pulumi.Input<HttpScaleRuleArgs>;
        /**
         * Scale Rule Name
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Auth Secrets for Container App Scale Rule
     */
    export interface ScaleRuleAuthArgs {
        /**
         * Name of the Container App secret from which to pull the auth params.
         */
        secretRef?: pulumi.Input<string>;
        /**
         * Trigger Parameter that uses the secret
         */
        triggerParameter?: pulumi.Input<string>;
    }

    /**
     * Secret definition.
     */
    export interface SecretArgs {
        /**
         * Secret Name.
         */
        name?: pulumi.Input<string>;
        /**
         * Secret Value.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Container App versioned application definition.
     * Defines the desired state of an immutable revision.
     * Any changes to this section Will result in a new revision being created
     */
    export interface TemplateArgs {
        /**
         * List of container definitions for the Container App.
         */
        containers?: pulumi.Input<pulumi.Input<ContainerArgs>[]>;
        /**
         * User friendly suffix that is appended to the revision name
         */
        revisionSuffix?: pulumi.Input<string>;
        /**
         * Scaling properties for the Container App.
         */
        scale?: pulumi.Input<ScaleArgs>;
        /**
         * List of volume definitions for the Container App.
         */
        volumes?: pulumi.Input<pulumi.Input<VolumeArgs>[]>;
    }
    /**
     * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
     */
    export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
        return {
            ...val,
            scale: (val.scale ? pulumi.output(val.scale).apply(scaleArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Traffic weight assigned to a revision
     */
    export interface TrafficWeightArgs {
        /**
         * Indicates that the traffic weight belongs to a latest stable revision
         */
        latestRevision?: pulumi.Input<boolean>;
        /**
         * Name of a revision
         */
        revisionName?: pulumi.Input<string>;
        /**
         * Traffic weight assigned to a revision
         */
        weight?: pulumi.Input<number>;
    }
    /**
     * trafficWeightArgsProvideDefaults sets the appropriate defaults for TrafficWeightArgs
     */
    export function trafficWeightArgsProvideDefaults(val: TrafficWeightArgs): TrafficWeightArgs {
        return {
            ...val,
            latestRevision: (val.latestRevision) ?? false,
        };
    }

    /**
     * The configuration settings of the Twitter provider.
     */
    export interface TwitterArgs {
        /**
         * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the app registration for the Twitter provider.
         */
        registration?: pulumi.Input<TwitterRegistrationArgs>;
    }

    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    export interface TwitterRegistrationArgs {
        /**
         * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
         * This setting is required for enabling Twitter Sign-In.
         * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
         */
        consumerKey?: pulumi.Input<string>;
        /**
         * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
         * application used for sign-in.
         */
        consumerSecretSettingName?: pulumi.Input<string>;
    }

    /**
     * Configuration properties for apps environment to join a Virtual Network
     */
    export interface VnetConfigurationArgs {
        /**
         * CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges.
         */
        dockerBridgeCidr?: pulumi.Input<string>;
        /**
         * Resource ID of a subnet for infrastructure components. This subnet must be in the same VNET as the subnet defined in runtimeSubnetId. Must not overlap with any other provided IP ranges.
         */
        infrastructureSubnetId?: pulumi.Input<string>;
        /**
         * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide runtimeSubnetId and infrastructureSubnetId if enabling this property
         */
        internal?: pulumi.Input<boolean>;
        /**
         * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
         */
        platformReservedCidr?: pulumi.Input<string>;
        /**
         *  An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.
         */
        platformReservedDnsIP?: pulumi.Input<string>;
        /**
         * This field is deprecated and not used. If you wish to provide your own subnet that Container App containers are injected into, then you should leverage the infrastructureSubnetId.
         */
        runtimeSubnetId?: pulumi.Input<string>;
    }

    /**
     * Volume definitions for the Container App.
     */
    export interface VolumeArgs {
        /**
         * Volume name.
         */
        name?: pulumi.Input<string>;
        /**
         * Name of storage resource. No need to provide for EmptyDir.
         */
        storageName?: pulumi.Input<string>;
        /**
         * Storage type for the volume. If not provided, use EmptyDir.
         */
        storageType?: pulumi.Input<string | enums.StorageType>;
    }

    /**
     * Volume mount for the Container App.
     */
    export interface VolumeMountArgs {
        /**
         * Path within the container at which the volume should be mounted.Must not contain ':'.
         */
        mountPath?: pulumi.Input<string>;
        /**
         * This must match the Name of a Volume.
         */
        volumeName?: pulumi.Input<string>;
    }
