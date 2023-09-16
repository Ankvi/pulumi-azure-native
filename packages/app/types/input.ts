import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace app {
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
         * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
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
         * Optional. Max inactive revisions a Container App can have.
         */
        maxInactiveRevisions?: pulumi.Input<number>;
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
            activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
            dapr: (val.dapr ? pulumi.output(val.dapr).apply(daprArgsProvideDefaults) : undefined),
            ingress: (val.ingress ? pulumi.output(val.ingress).apply(ingressArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Storage properties
     */
    export interface ConnectedEnvironmentStoragePropertiesArgs {
        /**
         * Azure file properties
         */
        azureFile?: pulumi.Input<AzureFilePropertiesArgs>;
    }

    /**
     * Container App container definition
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
     * Cross-Origin-Resource-Sharing policy
     */
    export interface CorsPolicyArgs {
        /**
         * allow credential or not
         */
        allowCredentials?: pulumi.Input<boolean>;
        /**
         * allowed HTTP headers
         */
        allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * allowed HTTP methods
         */
        allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * allowed origins
         */
        allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * expose HTTP headers 
         */
        exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * max time client can cache the result
         */
        maxAge?: pulumi.Input<number>;
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
     * Configuration properties for apps environment custom domain
     */
    export interface CustomDomainConfigurationArgs {
        /**
         * Certificate password
         */
        certificatePassword?: pulumi.Input<string>;
        /**
         * PFX or PEM blob
         */
        certificateValue?: pulumi.Input<string>;
        /**
         * Dns suffix for the environment domain
         */
        dnsSuffix?: pulumi.Input<string>;
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
         * Enables API logging for the Dapr sidecar
         */
        enableApiLogging?: pulumi.Input<boolean>;
        /**
         * Boolean indicating if the Dapr side car is enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
         */
        httpMaxRequestSize?: pulumi.Input<number>;
        /**
         * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
         */
        httpReadBufferSize?: pulumi.Input<number>;
        /**
         * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
         */
        logLevel?: pulumi.Input<string | enums.LogLevel>;
    }
    /**
     * daprArgsProvideDefaults sets the appropriate defaults for DaprArgs
     */
    export function daprArgsProvideDefaults(val: DaprArgs): DaprArgs {
        return {
            ...val,
            appProtocol: (val.appProtocol) ?? "http",
            enabled: (val.enabled) ?? false,
        };
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
     * Managed Environment resource SKU properties.
     */
    export interface EnvironmentSkuPropertiesArgs {
        /**
         * Name of the Sku.
         */
        name: pulumi.Input<string | enums.SkuName>;
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
     * The complex type of the extended location.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
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
         * Context path
         */
        contextPath?: pulumi.Input<string>;
        /**
         * Image name
         */
        image?: pulumi.Input<string>;
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
         * Runtime version
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
     * Container App container Http scaling rule.
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
         * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
         */
        clientCertificateMode?: pulumi.Input<string | enums.IngressClientCertificateMode>;
        /**
         * CORS policy for container app
         */
        corsPolicy?: pulumi.Input<CorsPolicyArgs>;
        /**
         * custom domain bindings for Container Apps' hostnames.
         */
        customDomains?: pulumi.Input<pulumi.Input<CustomDomainArgs>[]>;
        /**
         * Exposed Port in containers for TCP traffic from ingress
         */
        exposedPort?: pulumi.Input<number>;
        /**
         * Bool indicating if app exposes an external http endpoint
         */
        external?: pulumi.Input<boolean>;
        /**
         * Rules to restrict incoming IP address.
         */
        ipSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionRuleArgs>[]>;
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
            allowInsecure: (val.allowInsecure) ?? false,
            external: (val.external) ?? false,
            transport: (val.transport) ?? "auto",
        };
    }

    /**
     * Container App init container definition
     */
    export interface InitContainerArgs {
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
         * Container resource requirements.
         */
        resources?: pulumi.Input<ContainerResourcesArgs>;
        /**
         * Container volume mounts.
         */
        volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[]>;
    }

    /**
     * Rule to restrict incoming IP address.
     */
    export interface IpSecurityRestrictionRuleArgs {
        /**
         * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
         */
        action: pulumi.Input<string | enums.Action>;
        /**
         * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
         */
        description?: pulumi.Input<string>;
        /**
         * CIDR notation to match incoming IP address
         */
        ipAddressRange: pulumi.Input<string>;
        /**
         * Name for the IP restriction rule.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Non versioned Container Apps Job configuration properties
     */
    export interface JobConfigurationArgs {
        /**
         * Trigger configuration of an event driven job.
         */
        eventTriggerConfig?: pulumi.Input<JobConfigurationEventTriggerConfigArgs>;
        /**
         * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
         */
        manualTriggerConfig?: pulumi.Input<JobConfigurationManualTriggerConfigArgs>;
        /**
         * Collection of private container registry credentials used by a Container apps job
         */
        registries?: pulumi.Input<pulumi.Input<RegistryCredentialsArgs>[]>;
        /**
         * Maximum number of retries before failing the job.
         */
        replicaRetryLimit?: pulumi.Input<number>;
        /**
         * Maximum number of seconds a replica is allowed to run.
         */
        replicaTimeout: pulumi.Input<number>;
        /**
         * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
         */
        scheduleTriggerConfig?: pulumi.Input<JobConfigurationScheduleTriggerConfigArgs>;
        /**
         * Collection of secrets used by a Container Apps Job
         */
        secrets?: pulumi.Input<pulumi.Input<SecretArgs>[]>;
        /**
         * Trigger type of the job
         */
        triggerType: pulumi.Input<string | enums.TriggerType>;
    }
    /**
     * jobConfigurationArgsProvideDefaults sets the appropriate defaults for JobConfigurationArgs
     */
    export function jobConfigurationArgsProvideDefaults(val: JobConfigurationArgs): JobConfigurationArgs {
        return {
            ...val,
            eventTriggerConfig: (val.eventTriggerConfig ? pulumi.output(val.eventTriggerConfig).apply(jobConfigurationEventTriggerConfigArgsProvideDefaults) : undefined),
            triggerType: (val.triggerType) ?? "Manual",
        };
    }

    /**
     * Trigger configuration of an event driven job.
     */
    export interface JobConfigurationEventTriggerConfigArgs {
        /**
         * Number of parallel replicas of a job that can run at a given time.
         */
        parallelism?: pulumi.Input<number>;
        /**
         * Minimum number of successful replica completions before overall job completion.
         */
        replicaCompletionCount?: pulumi.Input<number>;
        /**
         * Scaling configurations for event driven jobs.
         */
        scale?: pulumi.Input<JobScaleArgs>;
    }
    /**
     * jobConfigurationEventTriggerConfigArgsProvideDefaults sets the appropriate defaults for JobConfigurationEventTriggerConfigArgs
     */
    export function jobConfigurationEventTriggerConfigArgsProvideDefaults(val: JobConfigurationEventTriggerConfigArgs): JobConfigurationEventTriggerConfigArgs {
        return {
            ...val,
            scale: (val.scale ? pulumi.output(val.scale).apply(jobScaleArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
     */
    export interface JobConfigurationManualTriggerConfigArgs {
        /**
         * Number of parallel replicas of a job that can run at a given time.
         */
        parallelism?: pulumi.Input<number>;
        /**
         * Minimum number of successful replica completions before overall job completion.
         */
        replicaCompletionCount?: pulumi.Input<number>;
    }

    /**
     * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
     */
    export interface JobConfigurationScheduleTriggerConfigArgs {
        /**
         * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
         */
        cronExpression: pulumi.Input<string>;
        /**
         * Number of parallel replicas of a job that can run at a given time.
         */
        parallelism?: pulumi.Input<number>;
        /**
         * Minimum number of successful replica completions before overall job completion.
         */
        replicaCompletionCount?: pulumi.Input<number>;
    }

    /**
     * Scaling configurations for event driven jobs.
     */
    export interface JobScaleArgs {
        /**
         * Maximum number of job executions that are created for a trigger, default 100.
         */
        maxExecutions?: pulumi.Input<number>;
        /**
         * Minimum number of job executions that are created for a trigger, default 0
         */
        minExecutions?: pulumi.Input<number>;
        /**
         * Interval to check each event source in seconds. Defaults to 30s
         */
        pollingInterval?: pulumi.Input<number>;
        /**
         * Scaling rules.
         */
        rules?: pulumi.Input<pulumi.Input<JobScaleRuleArgs>[]>;
    }
    /**
     * jobScaleArgsProvideDefaults sets the appropriate defaults for JobScaleArgs
     */
    export function jobScaleArgsProvideDefaults(val: JobScaleArgs): JobScaleArgs {
        return {
            ...val,
            maxExecutions: (val.maxExecutions) ?? 100,
            minExecutions: (val.minExecutions) ?? 0,
        };
    }

    /**
     * Scaling rule.
     */
    export interface JobScaleRuleArgs {
        /**
         * Authentication secrets for the scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe the scale rule.
         */
        metadata?: any;
        /**
         * Scale Rule Name
         */
        name?: pulumi.Input<string>;
        /**
         * Type of the scale rule
         * eg: azure-servicebus, redis etc.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
     */
    export interface JobTemplateArgs {
        /**
         * List of container definitions for the Container App.
         */
        containers?: pulumi.Input<pulumi.Input<ContainerArgs>[]>;
        /**
         * List of specialized containers that run before app containers.
         */
        initContainers?: pulumi.Input<pulumi.Input<InitContainerArgs>[]>;
        /**
         * List of volume definitions for the Container App.
         */
        volumes?: pulumi.Input<pulumi.Input<VolumeArgs>[]>;
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
     * Certificate resource specific properties
     */
    export interface ManagedCertificatePropertiesArgs {
        /**
         * Selected type of domain control validation for managed certificates.
         */
        domainControlValidation?: pulumi.Input<string | enums.ManagedCertificateDomainControlValidation>;
        /**
         * Subject name of the certificate.
         */
        subjectName?: pulumi.Input<string>;
    }

    /**
     * Configuration used to control the Environment Egress outbound traffic
     */
    export interface ManagedEnvironmentOutboundSettingsArgs {
        /**
         * Outbound type for the cluster
         */
        outBoundType?: pulumi.Input<string | enums.ManagedEnvironmentOutBoundType>;
        /**
         * Virtual Appliance IP used as the Egress controller for the Environment
         */
        virtualNetworkApplianceIp?: pulumi.Input<string>;
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
         * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
         */
        identity?: pulumi.Input<string>;
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
        /**
         * Tcp requests based scaling.
         */
        tcp?: pulumi.Input<TcpScaleRuleArgs>;
    }

    /**
     * Auth Secrets for Scale Rule
     */
    export interface ScaleRuleAuthArgs {
        /**
         * Name of the secret from which to pull the auth params.
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
         * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
         */
        identity?: pulumi.Input<string>;
        /**
         * Azure Key Vault URL pointing to the secret referenced by the container app.
         */
        keyVaultUrl?: pulumi.Input<string>;
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
     * Secret to be added to volume.
     */
    export interface SecretVolumeItemArgs {
        /**
         * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
         */
        path?: pulumi.Input<string>;
        /**
         * Name of the Container App secret from which to pull the secret value.
         */
        secretRef?: pulumi.Input<string>;
    }

    /**
     * Container App container Tcp scaling rule.
     */
    export interface TcpScaleRuleArgs {
        /**
         * Authentication secrets for the tcp scale rule.
         */
        auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[]>;
        /**
         * Metadata properties to describe tcp scale rule.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
         * List of specialized containers that run before app containers.
         */
        initContainers?: pulumi.Input<pulumi.Input<InitContainerArgs>[]>;
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
         * Associates a traffic label with a revision
         */
        label?: pulumi.Input<string>;
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
         * Configuration used to control the Environment Egress outbound traffic
         */
        outboundSettings?: pulumi.Input<ManagedEnvironmentOutboundSettingsArgs>;
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
         * Mount options used while mounting the AzureFile. Must be a comma-separated string.
         */
        mountOptions?: pulumi.Input<string>;
        /**
         * Volume name.
         */
        name?: pulumi.Input<string>;
        /**
         * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
         */
        secrets?: pulumi.Input<pulumi.Input<SecretVolumeItemArgs>[]>;
        /**
         * Name of storage resource. No need to provide for EmptyDir and Secret.
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
         * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
         */
        subPath?: pulumi.Input<string>;
        /**
         * This must match the Name of a Volume.
         */
        volumeName?: pulumi.Input<string>;
    }

    /**
     * Workload profile to scope container app execution.
     */
    export interface WorkloadProfileArgs {
        /**
         * The maximum capacity.
         */
        maximumCount: pulumi.Input<number>;
        /**
         * The minimum capacity.
         */
        minimumCount: pulumi.Input<number>;
        /**
         * Workload profile type for the workloads to run on.
         */
        workloadProfileType: pulumi.Input<string>;
    }

    export namespace v20220101preview {
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
            logAnalyticsConfiguration?: pulumi.Input<v20220101preview.LogAnalyticsConfigurationArgs>;
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
            login?: pulumi.Input<v20220101preview.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20220101preview.AppleRegistrationArgs>;
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
            login?: pulumi.Input<v20220101preview.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20220101preview.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20220101preview.AzureActiveDirectoryValidationArgs>;
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
            defaultAuthorizationPolicy?: pulumi.Input<v20220101preview.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20220101preview.JwtClaimChecksArgs>;
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
            accessMode?: pulumi.Input<string | enums.v20220101preview.AccessMode>;
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
            registration?: pulumi.Input<v20220101preview.AzureStaticWebAppsRegistrationArgs>;
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
            activeRevisionsMode?: pulumi.Input<string | enums.v20220101preview.ActiveRevisionsMode>;
            /**
             * Dapr configuration for the Container App.
             */
            dapr?: pulumi.Input<v20220101preview.DaprArgs>;
            /**
             * Ingress configurations.
             */
            ingress?: pulumi.Input<v20220101preview.IngressArgs>;
            /**
             * Collection of private container registry credentials for containers used by the Container app
             */
            registries?: pulumi.Input<pulumi.Input<v20220101preview.RegistryCredentialsArgs>[]>;
            /**
             * Collection of secrets used by a Container app
             */
            secrets?: pulumi.Input<pulumi.Input<v20220101preview.SecretArgs>[]>;
        }
        /**
         * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
         */
        export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
            return {
                ...val,
                ingress: (val.ingress ? pulumi.output(val.ingress).apply(v20220101preview.ingressArgsProvideDefaults) : undefined),
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
            env?: pulumi.Input<pulumi.Input<v20220101preview.EnvironmentVarArgs>[]>;
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
            probes?: pulumi.Input<pulumi.Input<v20220101preview.ContainerAppProbeArgs>[]>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20220101preview.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20220101preview.VolumeMountArgs>[]>;
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
            httpGet?: pulumi.Input<v20220101preview.ContainerAppProbeHttpGetArgs>;
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
            tcpSocket?: pulumi.Input<v20220101preview.ContainerAppProbeTcpSocketArgs>;
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
            type?: pulumi.Input<string | enums.v20220101preview.Type>;
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
            httpHeaders?: pulumi.Input<pulumi.Input<v20220101preview.ContainerAppProbeHttpHeadersArgs>[]>;
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
            scheme?: pulumi.Input<string | enums.v20220101preview.Scheme>;
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
            convention?: pulumi.Input<enums.v20220101preview.CookieExpirationConvention>;
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
            bindingType?: pulumi.Input<string | enums.v20220101preview.BindingType>;
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
            login?: pulumi.Input<v20220101preview.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20220101preview.OpenIdConnectRegistrationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20220101preview.ScaleRuleAuthArgs>[]>;
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
            appProtocol?: pulumi.Input<string | enums.v20220101preview.AppProtocol>;
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
            allowedPrincipals?: pulumi.Input<v20220101preview.AllowedPrincipalsArgs>;
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
            login?: pulumi.Input<v20220101preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20220101preview.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20220101preview.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20220101preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20220101preview.ClientRegistrationArgs>;
        }

        /**
         * Configuration properties that define the mutable settings of a Container App SourceControl
         */
        export interface GithubActionConfigurationArgs {
            /**
             * AzureCredentials configurations.
             */
            azureCredentials?: pulumi.Input<v20220101preview.AzureCredentialsArgs>;
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
            registryInfo?: pulumi.Input<v20220101preview.RegistryInfoArgs>;
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
            unauthenticatedClientAction?: pulumi.Input<enums.v20220101preview.UnauthenticatedClientActionV2>;
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
            login?: pulumi.Input<v20220101preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20220101preview.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20220101preview.AllowedAudiencesValidationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20220101preview.ScaleRuleAuthArgs>[]>;
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
            forwardProxy?: pulumi.Input<v20220101preview.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20220101preview.HttpSettingsRoutesArgs>;
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
            apple?: pulumi.Input<v20220101preview.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20220101preview.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20220101preview.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20220101preview.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20220101preview.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20220101preview.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20220101preview.GoogleArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20220101preview.TwitterArgs>;
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
            customDomains?: pulumi.Input<pulumi.Input<v20220101preview.CustomDomainArgs>[]>;
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
            traffic?: pulumi.Input<pulumi.Input<v20220101preview.TrafficWeightArgs>[]>;
            /**
             * Ingress transport protocol
             */
            transport?: pulumi.Input<string | enums.v20220101preview.IngressTransportMethod>;
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
            cookieExpiration?: pulumi.Input<v20220101preview.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20220101preview.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20220101preview.LoginRoutesArgs>;
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
            azureFile?: pulumi.Input<v20220101preview.AzureFilePropertiesArgs>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20220101preview.ManagedServiceIdentityType>;
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
            method?: pulumi.Input<enums.v20220101preview.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20220101preview.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20220101preview.OpenIdConnectConfigArgs>;
        }

        /**
         * Container App container Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20220101preview.ScaleRuleAuthArgs>[]>;
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
            rules?: pulumi.Input<pulumi.Input<v20220101preview.ScaleRuleArgs>[]>;
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
            azureQueue?: pulumi.Input<v20220101preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20220101preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20220101preview.HttpScaleRuleArgs>;
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
            containers?: pulumi.Input<pulumi.Input<v20220101preview.ContainerArgs>[]>;
            /**
             * User friendly suffix that is appended to the revision name
             */
            revisionSuffix?: pulumi.Input<string>;
            /**
             * Scaling properties for the Container App.
             */
            scale?: pulumi.Input<v20220101preview.ScaleArgs>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20220101preview.VolumeArgs>[]>;
        }
        /**
         * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
         */
        export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20220101preview.scaleArgsProvideDefaults) : undefined),
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
            registration?: pulumi.Input<v20220101preview.TwitterRegistrationArgs>;
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
            storageType?: pulumi.Input<string | enums.v20220101preview.StorageType>;
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

    }

    export namespace v20221001 {
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
            logAnalyticsConfiguration?: pulumi.Input<v20221001.LogAnalyticsConfigurationArgs>;
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
            login?: pulumi.Input<v20221001.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20221001.AppleRegistrationArgs>;
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
            login?: pulumi.Input<v20221001.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20221001.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20221001.AzureActiveDirectoryValidationArgs>;
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
            defaultAuthorizationPolicy?: pulumi.Input<v20221001.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20221001.JwtClaimChecksArgs>;
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
            accessMode?: pulumi.Input<string | enums.v20221001.AccessMode>;
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
            registration?: pulumi.Input<v20221001.AzureStaticWebAppsRegistrationArgs>;
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
             * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
             */
            activeRevisionsMode?: pulumi.Input<string | enums.v20221001.ActiveRevisionsMode>;
            /**
             * Dapr configuration for the Container App.
             */
            dapr?: pulumi.Input<v20221001.DaprArgs>;
            /**
             * Ingress configurations.
             */
            ingress?: pulumi.Input<v20221001.IngressArgs>;
            /**
             * Optional. Max inactive revisions a Container App can have.
             */
            maxInactiveRevisions?: pulumi.Input<number>;
            /**
             * Collection of private container registry credentials for containers used by the Container app
             */
            registries?: pulumi.Input<pulumi.Input<v20221001.RegistryCredentialsArgs>[]>;
            /**
             * Collection of secrets used by a Container app
             */
            secrets?: pulumi.Input<pulumi.Input<v20221001.SecretArgs>[]>;
        }
        /**
         * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
         */
        export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
            return {
                ...val,
                activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
                dapr: (val.dapr ? pulumi.output(val.dapr).apply(v20221001.daprArgsProvideDefaults) : undefined),
                ingress: (val.ingress ? pulumi.output(val.ingress).apply(v20221001.ingressArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Storage properties
         */
        export interface ConnectedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20221001.AzureFilePropertiesArgs>;
        }

        /**
         * Container App container definition
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
            env?: pulumi.Input<pulumi.Input<v20221001.EnvironmentVarArgs>[]>;
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
            probes?: pulumi.Input<pulumi.Input<v20221001.ContainerAppProbeArgs>[]>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20221001.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20221001.VolumeMountArgs>[]>;
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
            httpGet?: pulumi.Input<v20221001.ContainerAppProbeHttpGetArgs>;
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
            tcpSocket?: pulumi.Input<v20221001.ContainerAppProbeTcpSocketArgs>;
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
            type?: pulumi.Input<string | enums.v20221001.Type>;
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
            httpHeaders?: pulumi.Input<pulumi.Input<v20221001.ContainerAppProbeHttpHeadersArgs>[]>;
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
            scheme?: pulumi.Input<string | enums.v20221001.Scheme>;
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
            convention?: pulumi.Input<enums.v20221001.CookieExpirationConvention>;
            /**
             * The time after the request is made when the session cookie should expire.
             */
            timeToExpiration?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin-Resource-Sharing policy
         */
        export interface CorsPolicyArgs {
            /**
             * allow credential or not
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * allowed HTTP headers
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * allowed HTTP methods
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * allowed origins
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * expose HTTP headers 
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * max time client can cache the result
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * Custom Domain of a Container App
         */
        export interface CustomDomainArgs {
            /**
             * Custom Domain binding type.
             */
            bindingType?: pulumi.Input<string | enums.v20221001.BindingType>;
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
         * Configuration properties for apps environment custom domain
         */
        export interface CustomDomainConfigurationArgs {
            /**
             * Certificate password
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * PFX or PEM blob
             */
            certificateValue?: pulumi.Input<string>;
            /**
             * Dns suffix for the environment domain
             */
            dnsSuffix?: pulumi.Input<string>;
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
            login?: pulumi.Input<v20221001.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20221001.OpenIdConnectRegistrationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20221001.ScaleRuleAuthArgs>[]>;
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
            appProtocol?: pulumi.Input<string | enums.v20221001.AppProtocol>;
            /**
             * Enables API logging for the Dapr sidecar
             */
            enableApiLogging?: pulumi.Input<boolean>;
            /**
             * Boolean indicating if the Dapr side car is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
             */
            httpMaxRequestSize?: pulumi.Input<number>;
            /**
             * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
             */
            httpReadBufferSize?: pulumi.Input<number>;
            /**
             * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
             */
            logLevel?: pulumi.Input<string | enums.v20221001.LogLevel>;
        }
        /**
         * daprArgsProvideDefaults sets the appropriate defaults for DaprArgs
         */
        export function daprArgsProvideDefaults(val: DaprArgs): DaprArgs {
            return {
                ...val,
                appProtocol: (val.appProtocol) ?? "http",
                enabled: (val.enabled) ?? false,
            };
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
            allowedPrincipals?: pulumi.Input<v20221001.AllowedPrincipalsArgs>;
        }

        /**
         * Managed Environment resource SKU properties.
         */
        export interface EnvironmentSkuPropertiesArgs {
            /**
             * Name of the Sku.
             */
            name: pulumi.Input<string | enums.v20221001.SkuName>;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationArgs {
            /**
             * The name of the extended location.
             */
            name?: pulumi.Input<string>;
            /**
             * The type of the extended location.
             */
            type?: pulumi.Input<string | enums.v20221001.ExtendedLocationTypes>;
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
            login?: pulumi.Input<v20221001.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20221001.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20221001.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20221001.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20221001.ClientRegistrationArgs>;
        }

        /**
         * Configuration properties that define the mutable settings of a Container App SourceControl
         */
        export interface GithubActionConfigurationArgs {
            /**
             * AzureCredentials configurations.
             */
            azureCredentials?: pulumi.Input<v20221001.AzureCredentialsArgs>;
            /**
             * Context path
             */
            contextPath?: pulumi.Input<string>;
            /**
             * Image name
             */
            image?: pulumi.Input<string>;
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
            registryInfo?: pulumi.Input<v20221001.RegistryInfoArgs>;
            /**
             * Runtime stack
             */
            runtimeStack?: pulumi.Input<string>;
            /**
             * Runtime version
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
            unauthenticatedClientAction?: pulumi.Input<enums.v20221001.UnauthenticatedClientActionV2>;
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
            login?: pulumi.Input<v20221001.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20221001.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20221001.AllowedAudiencesValidationArgs>;
        }

        /**
         * Container App container Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20221001.ScaleRuleAuthArgs>[]>;
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
            forwardProxy?: pulumi.Input<v20221001.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20221001.HttpSettingsRoutesArgs>;
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
            apple?: pulumi.Input<v20221001.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20221001.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20221001.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20221001.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20221001.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20221001.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20221001.GoogleArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20221001.TwitterArgs>;
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
             * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
             */
            clientCertificateMode?: pulumi.Input<string | enums.v20221001.IngressClientCertificateMode>;
            /**
             * CORS policy for container app
             */
            corsPolicy?: pulumi.Input<v20221001.CorsPolicyArgs>;
            /**
             * custom domain bindings for Container Apps' hostnames.
             */
            customDomains?: pulumi.Input<pulumi.Input<v20221001.CustomDomainArgs>[]>;
            /**
             * Exposed Port in containers for TCP traffic from ingress
             */
            exposedPort?: pulumi.Input<number>;
            /**
             * Bool indicating if app exposes an external http endpoint
             */
            external?: pulumi.Input<boolean>;
            /**
             * Rules to restrict incoming IP address.
             */
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20221001.IpSecurityRestrictionRuleArgs>[]>;
            /**
             * Target Port in containers for traffic from ingress
             */
            targetPort?: pulumi.Input<number>;
            /**
             * Traffic weights for app's revisions
             */
            traffic?: pulumi.Input<pulumi.Input<v20221001.TrafficWeightArgs>[]>;
            /**
             * Ingress transport protocol
             */
            transport?: pulumi.Input<string | enums.v20221001.IngressTransportMethod>;
        }
        /**
         * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
         */
        export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
            return {
                ...val,
                allowInsecure: (val.allowInsecure) ?? false,
                external: (val.external) ?? false,
                transport: (val.transport) ?? "auto",
            };
        }

        /**
         * Container App init container definition
         */
        export interface InitContainerArgs {
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
            env?: pulumi.Input<pulumi.Input<v20221001.EnvironmentVarArgs>[]>;
            /**
             * Container image tag.
             */
            image?: pulumi.Input<string>;
            /**
             * Custom container name.
             */
            name?: pulumi.Input<string>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20221001.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20221001.VolumeMountArgs>[]>;
        }

        /**
         * Rule to restrict incoming IP address.
         */
        export interface IpSecurityRestrictionRuleArgs {
            /**
             * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
             */
            action: pulumi.Input<string | enums.v20221001.Action>;
            /**
             * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
             */
            description?: pulumi.Input<string>;
            /**
             * CIDR notation to match incoming IP address
             */
            ipAddressRange: pulumi.Input<string>;
            /**
             * Name for the IP restriction rule.
             */
            name: pulumi.Input<string>;
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
            cookieExpiration?: pulumi.Input<v20221001.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20221001.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20221001.LoginRoutesArgs>;
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
         * Configuration used to control the Environment Egress outbound traffic
         */
        export interface ManagedEnvironmentOutboundSettingsArgs {
            /**
             * Outbound type for the cluster
             */
            outBoundType?: pulumi.Input<string | enums.v20221001.ManagedEnvironmentOutBoundType>;
            /**
             * Virtual Appliance IP used as the Egress controller for the Environment
             */
            virtualNetworkApplianceIp?: pulumi.Input<string>;
        }

        /**
         * Storage properties
         */
        export interface ManagedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20221001.AzureFilePropertiesArgs>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20221001.ManagedServiceIdentityType>;
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
            method?: pulumi.Input<enums.v20221001.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20221001.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20221001.OpenIdConnectConfigArgs>;
        }

        /**
         * Container App container Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20221001.ScaleRuleAuthArgs>[]>;
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
             * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
             */
            identity?: pulumi.Input<string>;
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
            rules?: pulumi.Input<pulumi.Input<v20221001.ScaleRuleArgs>[]>;
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
            azureQueue?: pulumi.Input<v20221001.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20221001.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20221001.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20221001.TcpScaleRuleArgs>;
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
         * Container App container Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20221001.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
            containers?: pulumi.Input<pulumi.Input<v20221001.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20221001.InitContainerArgs>[]>;
            /**
             * User friendly suffix that is appended to the revision name
             */
            revisionSuffix?: pulumi.Input<string>;
            /**
             * Scaling properties for the Container App.
             */
            scale?: pulumi.Input<v20221001.ScaleArgs>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20221001.VolumeArgs>[]>;
        }
        /**
         * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
         */
        export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20221001.scaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Traffic weight assigned to a revision
         */
        export interface TrafficWeightArgs {
            /**
             * Associates a traffic label with a revision
             */
            label?: pulumi.Input<string>;
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
            registration?: pulumi.Input<v20221001.TwitterRegistrationArgs>;
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
             * Configuration used to control the Environment Egress outbound traffic
             */
            outboundSettings?: pulumi.Input<v20221001.ManagedEnvironmentOutboundSettingsArgs>;
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
            storageType?: pulumi.Input<string | enums.v20221001.StorageType>;
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

        /**
         * Workload profile to scope container app execution.
         */
        export interface WorkloadProfileArgs {
            /**
             * The maximum capacity.
             */
            maximumCount: pulumi.Input<number>;
            /**
             * The minimum capacity.
             */
            minimumCount: pulumi.Input<number>;
            /**
             * Workload profile type for the workloads to run on.
             */
            workloadProfileType: pulumi.Input<string>;
        }

    }

    export namespace v20230401preview {
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
            logAnalyticsConfiguration?: pulumi.Input<v20230401preview.LogAnalyticsConfigurationArgs>;
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
            login?: pulumi.Input<v20230401preview.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20230401preview.AppleRegistrationArgs>;
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
            login?: pulumi.Input<v20230401preview.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20230401preview.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230401preview.AzureActiveDirectoryValidationArgs>;
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
            defaultAuthorizationPolicy?: pulumi.Input<v20230401preview.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20230401preview.JwtClaimChecksArgs>;
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
             * Kind of auth github does for deploying the template
             */
            kind?: pulumi.Input<string>;
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
            accessMode?: pulumi.Input<string | enums.v20230401preview.AccessMode>;
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
            registration?: pulumi.Input<v20230401preview.AzureStaticWebAppsRegistrationArgs>;
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
             * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
             */
            activeRevisionsMode?: pulumi.Input<string | enums.v20230401preview.ActiveRevisionsMode>;
            /**
             * Dapr configuration for the Container App.
             */
            dapr?: pulumi.Input<v20230401preview.DaprArgs>;
            /**
             * Ingress configurations.
             */
            ingress?: pulumi.Input<v20230401preview.IngressArgs>;
            /**
             * Optional. Max inactive revisions a Container App can have.
             */
            maxInactiveRevisions?: pulumi.Input<number>;
            /**
             * Collection of private container registry credentials for containers used by the Container app
             */
            registries?: pulumi.Input<pulumi.Input<v20230401preview.RegistryCredentialsArgs>[]>;
            /**
             * Collection of secrets used by a Container app
             */
            secrets?: pulumi.Input<pulumi.Input<v20230401preview.SecretArgs>[]>;
            /**
             * Container App to be a dev Container App Service
             */
            service?: pulumi.Input<v20230401preview.ServiceArgs>;
        }
        /**
         * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
         */
        export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
            return {
                ...val,
                activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
                dapr: (val.dapr ? pulumi.output(val.dapr).apply(v20230401preview.daprArgsProvideDefaults) : undefined),
                ingress: (val.ingress ? pulumi.output(val.ingress).apply(v20230401preview.ingressArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Storage properties
         */
        export interface ConnectedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230401preview.AzureFilePropertiesArgs>;
        }

        /**
         * Container App container definition
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
            env?: pulumi.Input<pulumi.Input<v20230401preview.EnvironmentVarArgs>[]>;
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
            probes?: pulumi.Input<pulumi.Input<v20230401preview.ContainerAppProbeArgs>[]>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230401preview.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230401preview.VolumeMountArgs>[]>;
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
            httpGet?: pulumi.Input<v20230401preview.ContainerAppProbeHttpGetArgs>;
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
            tcpSocket?: pulumi.Input<v20230401preview.ContainerAppProbeTcpSocketArgs>;
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
            type?: pulumi.Input<string | enums.v20230401preview.Type>;
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
            httpHeaders?: pulumi.Input<pulumi.Input<v20230401preview.ContainerAppProbeHttpHeadersArgs>[]>;
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
            scheme?: pulumi.Input<string | enums.v20230401preview.Scheme>;
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
            convention?: pulumi.Input<enums.v20230401preview.CookieExpirationConvention>;
            /**
             * The time after the request is made when the session cookie should expire.
             */
            timeToExpiration?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin-Resource-Sharing policy
         */
        export interface CorsPolicyArgs {
            /**
             * Specifies whether the resource allows credentials
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Specifies the content for the access-control-allow-headers header
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-methods header
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-origins header
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-expose-headers header 
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-max-age header
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * Custom Domain of a Container App
         */
        export interface CustomDomainArgs {
            /**
             * Custom Domain binding type.
             */
            bindingType?: pulumi.Input<string | enums.v20230401preview.BindingType>;
            /**
             * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
             */
            certificateId?: pulumi.Input<string>;
            /**
             * Hostname.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Configuration properties for apps environment custom domain
         */
        export interface CustomDomainConfigurationArgs {
            /**
             * Certificate password
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * PFX or PEM blob
             */
            certificateValue?: pulumi.Input<string>;
            /**
             * Dns suffix for the environment domain
             */
            dnsSuffix?: pulumi.Input<string>;
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
            login?: pulumi.Input<v20230401preview.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20230401preview.OpenIdConnectRegistrationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleAuthArgs>[]>;
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
            appProtocol?: pulumi.Input<string | enums.v20230401preview.AppProtocol>;
            /**
             * Enables API logging for the Dapr sidecar
             */
            enableApiLogging?: pulumi.Input<boolean>;
            /**
             * Boolean indicating if the Dapr side car is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
             */
            httpMaxRequestSize?: pulumi.Input<number>;
            /**
             * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
             */
            httpReadBufferSize?: pulumi.Input<number>;
            /**
             * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
             */
            logLevel?: pulumi.Input<string | enums.v20230401preview.LogLevel>;
        }
        /**
         * daprArgsProvideDefaults sets the appropriate defaults for DaprArgs
         */
        export function daprArgsProvideDefaults(val: DaprArgs): DaprArgs {
            return {
                ...val,
                appProtocol: (val.appProtocol) ?? "http",
                enabled: (val.enabled) ?? false,
            };
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
            allowedPrincipals?: pulumi.Input<v20230401preview.AllowedPrincipalsArgs>;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationArgs {
            /**
             * The name of the extended location.
             */
            name?: pulumi.Input<string>;
            /**
             * The type of the extended location.
             */
            type?: pulumi.Input<string | enums.v20230401preview.ExtendedLocationTypes>;
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
            login?: pulumi.Input<v20230401preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20230401preview.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20230401preview.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20230401preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20230401preview.ClientRegistrationArgs>;
        }

        /**
         * Configuration properties that define the mutable settings of a Container App SourceControl
         */
        export interface GithubActionConfigurationArgs {
            /**
             * AzureCredentials configurations.
             */
            azureCredentials?: pulumi.Input<v20230401preview.AzureCredentialsArgs>;
            /**
             * Context path
             */
            contextPath?: pulumi.Input<string>;
            /**
             * One time Github PAT to configure github environment
             */
            githubPersonalAccessToken?: pulumi.Input<string>;
            /**
             * Image name
             */
            image?: pulumi.Input<string>;
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
            registryInfo?: pulumi.Input<v20230401preview.RegistryInfoArgs>;
            /**
             * Runtime stack
             */
            runtimeStack?: pulumi.Input<string>;
            /**
             * Runtime version
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
            unauthenticatedClientAction?: pulumi.Input<enums.v20230401preview.UnauthenticatedClientActionV2>;
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
            login?: pulumi.Input<v20230401preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20230401preview.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230401preview.AllowedAudiencesValidationArgs>;
        }

        /**
         * Container App container Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleAuthArgs>[]>;
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
            forwardProxy?: pulumi.Input<v20230401preview.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20230401preview.HttpSettingsRoutesArgs>;
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
            apple?: pulumi.Input<v20230401preview.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20230401preview.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20230401preview.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20230401preview.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20230401preview.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20230401preview.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20230401preview.GoogleArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20230401preview.TwitterArgs>;
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
             * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
             */
            clientCertificateMode?: pulumi.Input<string | enums.v20230401preview.IngressClientCertificateMode>;
            /**
             * CORS policy for container app
             */
            corsPolicy?: pulumi.Input<v20230401preview.CorsPolicyArgs>;
            /**
             * custom domain bindings for Container Apps' hostnames.
             */
            customDomains?: pulumi.Input<pulumi.Input<v20230401preview.CustomDomainArgs>[]>;
            /**
             * Exposed Port in containers for TCP traffic from ingress
             */
            exposedPort?: pulumi.Input<number>;
            /**
             * Bool indicating if app exposes an external http endpoint
             */
            external?: pulumi.Input<boolean>;
            /**
             * Rules to restrict incoming IP address.
             */
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20230401preview.IpSecurityRestrictionRuleArgs>[]>;
            /**
             * Sticky Sessions for Single Revision Mode
             */
            stickySessions?: pulumi.Input<v20230401preview.IngressStickySessionsArgs>;
            /**
             * Target Port in containers for traffic from ingress
             */
            targetPort?: pulumi.Input<number>;
            /**
             * Traffic weights for app's revisions
             */
            traffic?: pulumi.Input<pulumi.Input<v20230401preview.TrafficWeightArgs>[]>;
            /**
             * Ingress transport protocol
             */
            transport?: pulumi.Input<string | enums.v20230401preview.IngressTransportMethod>;
        }
        /**
         * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
         */
        export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
            return {
                ...val,
                allowInsecure: (val.allowInsecure) ?? false,
                external: (val.external) ?? false,
                transport: (val.transport) ?? "auto",
            };
        }

        /**
         * Sticky Sessions for Single Revision Mode
         */
        export interface IngressStickySessionsArgs {
            /**
             * Sticky Session Affinity
             */
            affinity?: pulumi.Input<string | enums.v20230401preview.Affinity>;
        }

        /**
         * Container App init container definition
         */
        export interface InitContainerArgs {
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
            env?: pulumi.Input<pulumi.Input<v20230401preview.EnvironmentVarArgs>[]>;
            /**
             * Container image tag.
             */
            image?: pulumi.Input<string>;
            /**
             * Custom container name.
             */
            name?: pulumi.Input<string>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230401preview.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230401preview.VolumeMountArgs>[]>;
        }

        /**
         * Rule to restrict incoming IP address.
         */
        export interface IpSecurityRestrictionRuleArgs {
            /**
             * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
             */
            action: pulumi.Input<string | enums.v20230401preview.Action>;
            /**
             * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
             */
            description?: pulumi.Input<string>;
            /**
             * CIDR notation to match incoming IP address
             */
            ipAddressRange: pulumi.Input<string>;
            /**
             * Name for the IP restriction rule.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Non versioned Container Apps Job configuration properties
         */
        export interface JobConfigurationArgs {
            /**
             * Trigger configuration of an event driven job.
             */
            eventTriggerConfig?: pulumi.Input<v20230401preview.JobConfigurationEventTriggerConfigArgs>;
            /**
             * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
             */
            manualTriggerConfig?: pulumi.Input<v20230401preview.JobConfigurationManualTriggerConfigArgs>;
            /**
             * Collection of private container registry credentials used by a Container apps job
             */
            registries?: pulumi.Input<pulumi.Input<v20230401preview.RegistryCredentialsArgs>[]>;
            /**
             * Maximum number of retries before failing the job.
             */
            replicaRetryLimit?: pulumi.Input<number>;
            /**
             * Maximum number of seconds a replica is allowed to run.
             */
            replicaTimeout: pulumi.Input<number>;
            /**
             * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
             */
            scheduleTriggerConfig?: pulumi.Input<v20230401preview.JobConfigurationScheduleTriggerConfigArgs>;
            /**
             * Collection of secrets used by a Container Apps Job
             */
            secrets?: pulumi.Input<pulumi.Input<v20230401preview.SecretArgs>[]>;
            /**
             * Trigger type of the job
             */
            triggerType: pulumi.Input<string | enums.v20230401preview.TriggerType>;
        }
        /**
         * jobConfigurationArgsProvideDefaults sets the appropriate defaults for JobConfigurationArgs
         */
        export function jobConfigurationArgsProvideDefaults(val: JobConfigurationArgs): JobConfigurationArgs {
            return {
                ...val,
                eventTriggerConfig: (val.eventTriggerConfig ? pulumi.output(val.eventTriggerConfig).apply(v20230401preview.jobConfigurationEventTriggerConfigArgsProvideDefaults) : undefined),
                triggerType: (val.triggerType) ?? "Manual",
            };
        }

        /**
         * Trigger configuration of an event driven job.
         */
        export interface JobConfigurationEventTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
            /**
             * Scaling configurations for event driven jobs.
             */
            scale?: pulumi.Input<v20230401preview.JobScaleArgs>;
        }
        /**
         * jobConfigurationEventTriggerConfigArgsProvideDefaults sets the appropriate defaults for JobConfigurationEventTriggerConfigArgs
         */
        export function jobConfigurationEventTriggerConfigArgsProvideDefaults(val: JobConfigurationEventTriggerConfigArgs): JobConfigurationEventTriggerConfigArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230401preview.jobScaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
         */
        export interface JobConfigurationManualTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
         */
        export interface JobConfigurationScheduleTriggerConfigArgs {
            /**
             * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
             */
            cronExpression: pulumi.Input<string>;
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Scaling configurations for event driven jobs.
         */
        export interface JobScaleArgs {
            /**
             * Maximum number of job executions that are created for a trigger, default 100.
             */
            maxExecutions?: pulumi.Input<number>;
            /**
             * Minimum number of job executions that are created for a trigger, default 0
             */
            minExecutions?: pulumi.Input<number>;
            /**
             * Interval to check each event source in seconds. Defaults to 30s
             */
            pollingInterval?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230401preview.JobScaleRuleArgs>[]>;
        }
        /**
         * jobScaleArgsProvideDefaults sets the appropriate defaults for JobScaleArgs
         */
        export function jobScaleArgsProvideDefaults(val: JobScaleArgs): JobScaleArgs {
            return {
                ...val,
                maxExecutions: (val.maxExecutions) ?? 100,
                minExecutions: (val.minExecutions) ?? 0,
            };
        }

        /**
         * Scaling rule.
         */
        export interface JobScaleRuleArgs {
            /**
             * Authentication secrets for the scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe the scale rule.
             */
            metadata?: any;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Type of the scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
         */
        export interface JobTemplateArgs {
            /**
             * List of container definitions for the Container App.
             */
            containers?: pulumi.Input<pulumi.Input<v20230401preview.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230401preview.InitContainerArgs>[]>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230401preview.VolumeArgs>[]>;
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
            cookieExpiration?: pulumi.Input<v20230401preview.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20230401preview.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20230401preview.LoginRoutesArgs>;
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
         * Certificate resource specific properties
         */
        export interface ManagedCertificatePropertiesArgs {
            /**
             * Selected type of domain control validation for managed certificates.
             */
            domainControlValidation?: pulumi.Input<string | enums.v20230401preview.ManagedCertificateDomainControlValidation>;
            /**
             * Subject name of the certificate.
             */
            subjectName?: pulumi.Input<string>;
        }

        /**
         * Peer authentication settings for the Managed Environment
         */
        export interface ManagedEnvironmentPeerAuthenticationArgs {
            /**
             * Mutual TLS authentication settings for the Managed Environment
             */
            mtls?: pulumi.Input<v20230401preview.MtlsArgs>;
        }

        /**
         * Storage properties
         */
        export interface ManagedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230401preview.AzureFilePropertiesArgs>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230401preview.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Configuration properties for mutual TLS authentication
         */
        export interface MtlsArgs {
            /**
             * Boolean indicating whether the mutual TLS authentication is enabled
             */
            enabled?: pulumi.Input<boolean>;
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
            method?: pulumi.Input<enums.v20230401preview.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20230401preview.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20230401preview.OpenIdConnectConfigArgs>;
        }

        /**
         * Container App container Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleAuthArgs>[]>;
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
             * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
             */
            identity?: pulumi.Input<string>;
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
            rules?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleArgs>[]>;
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
            azureQueue?: pulumi.Input<v20230401preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230401preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230401preview.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230401preview.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the secret from which to pull the auth params.
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
             * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
             */
            identity?: pulumi.Input<string>;
            /**
             * Azure Key Vault URL pointing to the secret referenced by the container app.
             */
            keyVaultUrl?: pulumi.Input<string>;
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
         * Secret to be added to volume.
         */
        export interface SecretVolumeItemArgs {
            /**
             * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
             */
            path?: pulumi.Input<string>;
            /**
             * Name of the Container App secret from which to pull the secret value.
             */
            secretRef?: pulumi.Input<string>;
        }

        /**
         * Container App to be a dev service
         */
        export interface ServiceArgs {
            /**
             * Dev ContainerApp service type
             */
            type: pulumi.Input<string>;
        }

        /**
         * Configuration to bind a ContainerApp to a dev ContainerApp Service
         */
        export interface ServiceBindArgs {
            /**
             * Name of the service bind
             */
            name?: pulumi.Input<string>;
            /**
             * Resource id of the target service
             */
            serviceId?: pulumi.Input<string>;
        }

        /**
         * Container App container Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230401preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
            containers?: pulumi.Input<pulumi.Input<v20230401preview.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230401preview.InitContainerArgs>[]>;
            /**
             * User friendly suffix that is appended to the revision name
             */
            revisionSuffix?: pulumi.Input<string>;
            /**
             * Scaling properties for the Container App.
             */
            scale?: pulumi.Input<v20230401preview.ScaleArgs>;
            /**
             * List of container app services bound to the app
             */
            serviceBinds?: pulumi.Input<pulumi.Input<v20230401preview.ServiceBindArgs>[]>;
            /**
             * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230401preview.VolumeArgs>[]>;
        }
        /**
         * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
         */
        export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230401preview.scaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Traffic weight assigned to a revision
         */
        export interface TrafficWeightArgs {
            /**
             * Associates a traffic label with a revision
             */
            label?: pulumi.Input<string>;
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
            registration?: pulumi.Input<v20230401preview.TwitterRegistrationArgs>;
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
             * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
             */
            infrastructureSubnetId?: pulumi.Input<string>;
            /**
             * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
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
        }

        /**
         * Volume definitions for the Container App.
         */
        export interface VolumeArgs {
            /**
             * Mount options used while mounting the AzureFile. Must be a comma-separated string.
             */
            mountOptions?: pulumi.Input<string>;
            /**
             * Volume name.
             */
            name?: pulumi.Input<string>;
            /**
             * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
             */
            secrets?: pulumi.Input<pulumi.Input<v20230401preview.SecretVolumeItemArgs>[]>;
            /**
             * Name of storage resource. No need to provide for EmptyDir and Secret.
             */
            storageName?: pulumi.Input<string>;
            /**
             * Storage type for the volume. If not provided, use EmptyDir.
             */
            storageType?: pulumi.Input<string | enums.v20230401preview.StorageType>;
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
             * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
             */
            subPath?: pulumi.Input<string>;
            /**
             * This must match the Name of a Volume.
             */
            volumeName?: pulumi.Input<string>;
        }

        /**
         * Workload profile to scope container app execution.
         */
        export interface WorkloadProfileArgs {
            /**
             * The maximum capacity.
             */
            maximumCount?: pulumi.Input<number>;
            /**
             * The minimum capacity.
             */
            minimumCount?: pulumi.Input<number>;
            /**
             * Workload profile type for the workloads to run on.
             */
            name: pulumi.Input<string>;
            /**
             * Workload profile type for the workloads to run on.
             */
            workloadProfileType: pulumi.Input<string>;
        }

    }

    export namespace v20230501 {
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
            logAnalyticsConfiguration?: pulumi.Input<v20230501.LogAnalyticsConfigurationArgs>;
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
            login?: pulumi.Input<v20230501.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20230501.AppleRegistrationArgs>;
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
            login?: pulumi.Input<v20230501.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20230501.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230501.AzureActiveDirectoryValidationArgs>;
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
            defaultAuthorizationPolicy?: pulumi.Input<v20230501.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20230501.JwtClaimChecksArgs>;
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
             * Kind of auth github does for deploying the template
             */
            kind?: pulumi.Input<string>;
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
            accessMode?: pulumi.Input<string | enums.v20230501.AccessMode>;
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
            registration?: pulumi.Input<v20230501.AzureStaticWebAppsRegistrationArgs>;
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
             * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
             */
            activeRevisionsMode?: pulumi.Input<string | enums.v20230501.ActiveRevisionsMode>;
            /**
             * Dapr configuration for the Container App.
             */
            dapr?: pulumi.Input<v20230501.DaprArgs>;
            /**
             * Ingress configurations.
             */
            ingress?: pulumi.Input<v20230501.IngressArgs>;
            /**
             * Optional. Max inactive revisions a Container App can have.
             */
            maxInactiveRevisions?: pulumi.Input<number>;
            /**
             * Collection of private container registry credentials for containers used by the Container app
             */
            registries?: pulumi.Input<pulumi.Input<v20230501.RegistryCredentialsArgs>[]>;
            /**
             * Collection of secrets used by a Container app
             */
            secrets?: pulumi.Input<pulumi.Input<v20230501.SecretArgs>[]>;
            /**
             * Container App to be a dev Container App Service
             */
            service?: pulumi.Input<v20230501.ServiceArgs>;
        }
        /**
         * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
         */
        export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
            return {
                ...val,
                activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
                dapr: (val.dapr ? pulumi.output(val.dapr).apply(v20230501.daprArgsProvideDefaults) : undefined),
                ingress: (val.ingress ? pulumi.output(val.ingress).apply(v20230501.ingressArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Storage properties
         */
        export interface ConnectedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230501.AzureFilePropertiesArgs>;
        }

        /**
         * Container App container definition
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
            env?: pulumi.Input<pulumi.Input<v20230501.EnvironmentVarArgs>[]>;
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
            probes?: pulumi.Input<pulumi.Input<v20230501.ContainerAppProbeArgs>[]>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230501.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230501.VolumeMountArgs>[]>;
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
            httpGet?: pulumi.Input<v20230501.ContainerAppProbeHttpGetArgs>;
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
            tcpSocket?: pulumi.Input<v20230501.ContainerAppProbeTcpSocketArgs>;
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
            type?: pulumi.Input<string | enums.v20230501.Type>;
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
            httpHeaders?: pulumi.Input<pulumi.Input<v20230501.ContainerAppProbeHttpHeadersArgs>[]>;
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
            scheme?: pulumi.Input<string | enums.v20230501.Scheme>;
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
            convention?: pulumi.Input<enums.v20230501.CookieExpirationConvention>;
            /**
             * The time after the request is made when the session cookie should expire.
             */
            timeToExpiration?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin-Resource-Sharing policy
         */
        export interface CorsPolicyArgs {
            /**
             * Specifies whether the resource allows credentials
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Specifies the content for the access-control-allow-headers header
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-methods header
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-origins header
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-expose-headers header 
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-max-age header
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * Custom Domain of a Container App
         */
        export interface CustomDomainArgs {
            /**
             * Custom Domain binding type.
             */
            bindingType?: pulumi.Input<string | enums.v20230501.BindingType>;
            /**
             * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
             */
            certificateId?: pulumi.Input<string>;
            /**
             * Hostname.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Configuration properties for apps environment custom domain
         */
        export interface CustomDomainConfigurationArgs {
            /**
             * Certificate password
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * PFX or PEM blob
             */
            certificateValue?: pulumi.Input<string>;
            /**
             * Dns suffix for the environment domain
             */
            dnsSuffix?: pulumi.Input<string>;
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
            login?: pulumi.Input<v20230501.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20230501.OpenIdConnectRegistrationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleAuthArgs>[]>;
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
            appProtocol?: pulumi.Input<string | enums.v20230501.AppProtocol>;
            /**
             * Enables API logging for the Dapr sidecar
             */
            enableApiLogging?: pulumi.Input<boolean>;
            /**
             * Boolean indicating if the Dapr side car is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
             */
            httpMaxRequestSize?: pulumi.Input<number>;
            /**
             * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
             */
            httpReadBufferSize?: pulumi.Input<number>;
            /**
             * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
             */
            logLevel?: pulumi.Input<string | enums.v20230501.LogLevel>;
        }
        /**
         * daprArgsProvideDefaults sets the appropriate defaults for DaprArgs
         */
        export function daprArgsProvideDefaults(val: DaprArgs): DaprArgs {
            return {
                ...val,
                appProtocol: (val.appProtocol) ?? "http",
                enabled: (val.enabled) ?? false,
            };
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
            allowedPrincipals?: pulumi.Input<v20230501.AllowedPrincipalsArgs>;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationArgs {
            /**
             * The name of the extended location.
             */
            name?: pulumi.Input<string>;
            /**
             * The type of the extended location.
             */
            type?: pulumi.Input<string | enums.v20230501.ExtendedLocationTypes>;
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
            login?: pulumi.Input<v20230501.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20230501.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20230501.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20230501.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20230501.ClientRegistrationArgs>;
        }

        /**
         * Configuration properties that define the mutable settings of a Container App SourceControl
         */
        export interface GithubActionConfigurationArgs {
            /**
             * AzureCredentials configurations.
             */
            azureCredentials?: pulumi.Input<v20230501.AzureCredentialsArgs>;
            /**
             * Context path
             */
            contextPath?: pulumi.Input<string>;
            /**
             * One time Github PAT to configure github environment
             */
            githubPersonalAccessToken?: pulumi.Input<string>;
            /**
             * Image name
             */
            image?: pulumi.Input<string>;
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
            registryInfo?: pulumi.Input<v20230501.RegistryInfoArgs>;
            /**
             * Runtime stack
             */
            runtimeStack?: pulumi.Input<string>;
            /**
             * Runtime version
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
            unauthenticatedClientAction?: pulumi.Input<enums.v20230501.UnauthenticatedClientActionV2>;
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
            login?: pulumi.Input<v20230501.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20230501.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230501.AllowedAudiencesValidationArgs>;
        }

        /**
         * Container App container Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleAuthArgs>[]>;
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
            forwardProxy?: pulumi.Input<v20230501.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20230501.HttpSettingsRoutesArgs>;
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
            apple?: pulumi.Input<v20230501.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20230501.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20230501.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20230501.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20230501.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20230501.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20230501.GoogleArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20230501.TwitterArgs>;
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
             * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
             */
            clientCertificateMode?: pulumi.Input<string | enums.v20230501.IngressClientCertificateMode>;
            /**
             * CORS policy for container app
             */
            corsPolicy?: pulumi.Input<v20230501.CorsPolicyArgs>;
            /**
             * custom domain bindings for Container Apps' hostnames.
             */
            customDomains?: pulumi.Input<pulumi.Input<v20230501.CustomDomainArgs>[]>;
            /**
             * Exposed Port in containers for TCP traffic from ingress
             */
            exposedPort?: pulumi.Input<number>;
            /**
             * Bool indicating if app exposes an external http endpoint
             */
            external?: pulumi.Input<boolean>;
            /**
             * Rules to restrict incoming IP address.
             */
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20230501.IpSecurityRestrictionRuleArgs>[]>;
            /**
             * Sticky Sessions for Single Revision Mode
             */
            stickySessions?: pulumi.Input<v20230501.IngressStickySessionsArgs>;
            /**
             * Target Port in containers for traffic from ingress
             */
            targetPort?: pulumi.Input<number>;
            /**
             * Traffic weights for app's revisions
             */
            traffic?: pulumi.Input<pulumi.Input<v20230501.TrafficWeightArgs>[]>;
            /**
             * Ingress transport protocol
             */
            transport?: pulumi.Input<string | enums.v20230501.IngressTransportMethod>;
        }
        /**
         * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
         */
        export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
            return {
                ...val,
                allowInsecure: (val.allowInsecure) ?? false,
                external: (val.external) ?? false,
                transport: (val.transport) ?? "auto",
            };
        }

        /**
         * Sticky Sessions for Single Revision Mode
         */
        export interface IngressStickySessionsArgs {
            /**
             * Sticky Session Affinity
             */
            affinity?: pulumi.Input<string | enums.v20230501.Affinity>;
        }

        /**
         * Container App init container definition
         */
        export interface InitContainerArgs {
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
            env?: pulumi.Input<pulumi.Input<v20230501.EnvironmentVarArgs>[]>;
            /**
             * Container image tag.
             */
            image?: pulumi.Input<string>;
            /**
             * Custom container name.
             */
            name?: pulumi.Input<string>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230501.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230501.VolumeMountArgs>[]>;
        }

        /**
         * Rule to restrict incoming IP address.
         */
        export interface IpSecurityRestrictionRuleArgs {
            /**
             * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
             */
            action: pulumi.Input<string | enums.v20230501.Action>;
            /**
             * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
             */
            description?: pulumi.Input<string>;
            /**
             * CIDR notation to match incoming IP address
             */
            ipAddressRange: pulumi.Input<string>;
            /**
             * Name for the IP restriction rule.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Non versioned Container Apps Job configuration properties
         */
        export interface JobConfigurationArgs {
            /**
             * Trigger configuration of an event driven job.
             */
            eventTriggerConfig?: pulumi.Input<v20230501.JobConfigurationEventTriggerConfigArgs>;
            /**
             * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
             */
            manualTriggerConfig?: pulumi.Input<v20230501.JobConfigurationManualTriggerConfigArgs>;
            /**
             * Collection of private container registry credentials used by a Container apps job
             */
            registries?: pulumi.Input<pulumi.Input<v20230501.RegistryCredentialsArgs>[]>;
            /**
             * Maximum number of retries before failing the job.
             */
            replicaRetryLimit?: pulumi.Input<number>;
            /**
             * Maximum number of seconds a replica is allowed to run.
             */
            replicaTimeout: pulumi.Input<number>;
            /**
             * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
             */
            scheduleTriggerConfig?: pulumi.Input<v20230501.JobConfigurationScheduleTriggerConfigArgs>;
            /**
             * Collection of secrets used by a Container Apps Job
             */
            secrets?: pulumi.Input<pulumi.Input<v20230501.SecretArgs>[]>;
            /**
             * Trigger type of the job
             */
            triggerType: pulumi.Input<string | enums.v20230501.TriggerType>;
        }
        /**
         * jobConfigurationArgsProvideDefaults sets the appropriate defaults for JobConfigurationArgs
         */
        export function jobConfigurationArgsProvideDefaults(val: JobConfigurationArgs): JobConfigurationArgs {
            return {
                ...val,
                eventTriggerConfig: (val.eventTriggerConfig ? pulumi.output(val.eventTriggerConfig).apply(v20230501.jobConfigurationEventTriggerConfigArgsProvideDefaults) : undefined),
                triggerType: (val.triggerType) ?? "Manual",
            };
        }

        /**
         * Trigger configuration of an event driven job.
         */
        export interface JobConfigurationEventTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
            /**
             * Scaling configurations for event driven jobs.
             */
            scale?: pulumi.Input<v20230501.JobScaleArgs>;
        }
        /**
         * jobConfigurationEventTriggerConfigArgsProvideDefaults sets the appropriate defaults for JobConfigurationEventTriggerConfigArgs
         */
        export function jobConfigurationEventTriggerConfigArgsProvideDefaults(val: JobConfigurationEventTriggerConfigArgs): JobConfigurationEventTriggerConfigArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230501.jobScaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
         */
        export interface JobConfigurationManualTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
         */
        export interface JobConfigurationScheduleTriggerConfigArgs {
            /**
             * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
             */
            cronExpression: pulumi.Input<string>;
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Scaling configurations for event driven jobs.
         */
        export interface JobScaleArgs {
            /**
             * Maximum number of job executions that are created for a trigger, default 100.
             */
            maxExecutions?: pulumi.Input<number>;
            /**
             * Minimum number of job executions that are created for a trigger, default 0
             */
            minExecutions?: pulumi.Input<number>;
            /**
             * Interval to check each event source in seconds. Defaults to 30s
             */
            pollingInterval?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230501.JobScaleRuleArgs>[]>;
        }
        /**
         * jobScaleArgsProvideDefaults sets the appropriate defaults for JobScaleArgs
         */
        export function jobScaleArgsProvideDefaults(val: JobScaleArgs): JobScaleArgs {
            return {
                ...val,
                maxExecutions: (val.maxExecutions) ?? 100,
                minExecutions: (val.minExecutions) ?? 0,
            };
        }

        /**
         * Scaling rule.
         */
        export interface JobScaleRuleArgs {
            /**
             * Authentication secrets for the scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe the scale rule.
             */
            metadata?: any;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Type of the scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
         */
        export interface JobTemplateArgs {
            /**
             * List of container definitions for the Container App.
             */
            containers?: pulumi.Input<pulumi.Input<v20230501.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230501.InitContainerArgs>[]>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230501.VolumeArgs>[]>;
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
            cookieExpiration?: pulumi.Input<v20230501.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20230501.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20230501.LoginRoutesArgs>;
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
         * Certificate resource specific properties
         */
        export interface ManagedCertificatePropertiesArgs {
            /**
             * Selected type of domain control validation for managed certificates.
             */
            domainControlValidation?: pulumi.Input<string | enums.v20230501.ManagedCertificateDomainControlValidation>;
            /**
             * Subject name of the certificate.
             */
            subjectName?: pulumi.Input<string>;
        }

        /**
         * Peer authentication settings for the Managed Environment
         */
        export interface ManagedEnvironmentPeerAuthenticationArgs {
            /**
             * Mutual TLS authentication settings for the Managed Environment
             */
            mtls?: pulumi.Input<v20230501.MtlsArgs>;
        }

        /**
         * Storage properties
         */
        export interface ManagedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230501.AzureFilePropertiesArgs>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230501.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Configuration properties for mutual TLS authentication
         */
        export interface MtlsArgs {
            /**
             * Boolean indicating whether the mutual TLS authentication is enabled
             */
            enabled?: pulumi.Input<boolean>;
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
            method?: pulumi.Input<enums.v20230501.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20230501.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20230501.OpenIdConnectConfigArgs>;
        }

        /**
         * Container App container Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleAuthArgs>[]>;
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
             * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
             */
            identity?: pulumi.Input<string>;
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
            rules?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleArgs>[]>;
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
            azureQueue?: pulumi.Input<v20230501.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230501.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230501.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230501.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the secret from which to pull the auth params.
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
             * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
             */
            identity?: pulumi.Input<string>;
            /**
             * Azure Key Vault URL pointing to the secret referenced by the container app.
             */
            keyVaultUrl?: pulumi.Input<string>;
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
         * Secret to be added to volume.
         */
        export interface SecretVolumeItemArgs {
            /**
             * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
             */
            path?: pulumi.Input<string>;
            /**
             * Name of the Container App secret from which to pull the secret value.
             */
            secretRef?: pulumi.Input<string>;
        }

        /**
         * Container App to be a dev service
         */
        export interface ServiceArgs {
            /**
             * Dev ContainerApp service type
             */
            type: pulumi.Input<string>;
        }

        /**
         * Configuration to bind a ContainerApp to a dev ContainerApp Service
         */
        export interface ServiceBindArgs {
            /**
             * Name of the service bind
             */
            name?: pulumi.Input<string>;
            /**
             * Resource id of the target service
             */
            serviceId?: pulumi.Input<string>;
        }

        /**
         * Container App container Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230501.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
            containers?: pulumi.Input<pulumi.Input<v20230501.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230501.InitContainerArgs>[]>;
            /**
             * User friendly suffix that is appended to the revision name
             */
            revisionSuffix?: pulumi.Input<string>;
            /**
             * Scaling properties for the Container App.
             */
            scale?: pulumi.Input<v20230501.ScaleArgs>;
            /**
             * List of container app services bound to the app
             */
            serviceBinds?: pulumi.Input<pulumi.Input<v20230501.ServiceBindArgs>[]>;
            /**
             * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230501.VolumeArgs>[]>;
        }
        /**
         * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
         */
        export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230501.scaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Traffic weight assigned to a revision
         */
        export interface TrafficWeightArgs {
            /**
             * Associates a traffic label with a revision
             */
            label?: pulumi.Input<string>;
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
            registration?: pulumi.Input<v20230501.TwitterRegistrationArgs>;
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
             * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
             */
            infrastructureSubnetId?: pulumi.Input<string>;
            /**
             * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
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
        }

        /**
         * Volume definitions for the Container App.
         */
        export interface VolumeArgs {
            /**
             * Mount options used while mounting the AzureFile. Must be a comma-separated string.
             */
            mountOptions?: pulumi.Input<string>;
            /**
             * Volume name.
             */
            name?: pulumi.Input<string>;
            /**
             * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
             */
            secrets?: pulumi.Input<pulumi.Input<v20230501.SecretVolumeItemArgs>[]>;
            /**
             * Name of storage resource. No need to provide for EmptyDir and Secret.
             */
            storageName?: pulumi.Input<string>;
            /**
             * Storage type for the volume. If not provided, use EmptyDir.
             */
            storageType?: pulumi.Input<string | enums.v20230501.StorageType>;
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
             * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
             */
            subPath?: pulumi.Input<string>;
            /**
             * This must match the Name of a Volume.
             */
            volumeName?: pulumi.Input<string>;
        }

        /**
         * Workload profile to scope container app execution.
         */
        export interface WorkloadProfileArgs {
            /**
             * The maximum capacity.
             */
            maximumCount?: pulumi.Input<number>;
            /**
             * The minimum capacity.
             */
            minimumCount?: pulumi.Input<number>;
            /**
             * Workload profile type for the workloads to run on.
             */
            name: pulumi.Input<string>;
            /**
             * Workload profile type for the workloads to run on.
             */
            workloadProfileType: pulumi.Input<string>;
        }

    }

    export namespace v20230502preview {
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
            logAnalyticsConfiguration?: pulumi.Input<v20230502preview.LogAnalyticsConfigurationArgs>;
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
            login?: pulumi.Input<v20230502preview.LoginScopesArgs>;
            /**
             * The configuration settings of the Apple registration.
             */
            registration?: pulumi.Input<v20230502preview.AppleRegistrationArgs>;
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
            login?: pulumi.Input<v20230502preview.AzureActiveDirectoryLoginArgs>;
            /**
             * The configuration settings of the Azure Active Directory app registration.
             */
            registration?: pulumi.Input<v20230502preview.AzureActiveDirectoryRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230502preview.AzureActiveDirectoryValidationArgs>;
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
            defaultAuthorizationPolicy?: pulumi.Input<v20230502preview.DefaultAuthorizationPolicyArgs>;
            /**
             * The configuration settings of the checks that should be made while validating the JWT Claims.
             */
            jwtClaimChecks?: pulumi.Input<v20230502preview.JwtClaimChecksArgs>;
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
             * Kind of auth github does for deploying the template
             */
            kind?: pulumi.Input<string>;
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
            accessMode?: pulumi.Input<string | enums.v20230502preview.AccessMode>;
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
            registration?: pulumi.Input<v20230502preview.AzureStaticWebAppsRegistrationArgs>;
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
         * The configuration settings of the storage of the tokens if blob storage is used.
         */
        export interface BlobStorageTokenStoreArgs {
            /**
             * The name of the app secrets containing the SAS URL of the blob storage containing the tokens.
             */
            sasUrlSettingName: pulumi.Input<string>;
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
             * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
             */
            activeRevisionsMode?: pulumi.Input<string | enums.v20230502preview.ActiveRevisionsMode>;
            /**
             * Dapr configuration for the Container App.
             */
            dapr?: pulumi.Input<v20230502preview.DaprArgs>;
            /**
             * Ingress configurations.
             */
            ingress?: pulumi.Input<v20230502preview.IngressArgs>;
            /**
             * Optional. Max inactive revisions a Container App can have.
             */
            maxInactiveRevisions?: pulumi.Input<number>;
            /**
             * Collection of private container registry credentials for containers used by the Container app
             */
            registries?: pulumi.Input<pulumi.Input<v20230502preview.RegistryCredentialsArgs>[]>;
            /**
             * Collection of secrets used by a Container app
             */
            secrets?: pulumi.Input<pulumi.Input<v20230502preview.SecretArgs>[]>;
            /**
             * Container App to be a dev Container App Service
             */
            service?: pulumi.Input<v20230502preview.ServiceArgs>;
        }
        /**
         * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
         */
        export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
            return {
                ...val,
                activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
                dapr: (val.dapr ? pulumi.output(val.dapr).apply(v20230502preview.daprArgsProvideDefaults) : undefined),
                ingress: (val.ingress ? pulumi.output(val.ingress).apply(v20230502preview.ingressArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Storage properties
         */
        export interface ConnectedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230502preview.AzureFilePropertiesArgs>;
        }

        /**
         * Container App container definition
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
            env?: pulumi.Input<pulumi.Input<v20230502preview.EnvironmentVarArgs>[]>;
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
            probes?: pulumi.Input<pulumi.Input<v20230502preview.ContainerAppProbeArgs>[]>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230502preview.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230502preview.VolumeMountArgs>[]>;
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
            httpGet?: pulumi.Input<v20230502preview.ContainerAppProbeHttpGetArgs>;
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
            tcpSocket?: pulumi.Input<v20230502preview.ContainerAppProbeTcpSocketArgs>;
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
            type?: pulumi.Input<string | enums.v20230502preview.Type>;
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
            httpHeaders?: pulumi.Input<pulumi.Input<v20230502preview.ContainerAppProbeHttpHeadersArgs>[]>;
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
            scheme?: pulumi.Input<string | enums.v20230502preview.Scheme>;
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
            convention?: pulumi.Input<enums.v20230502preview.CookieExpirationConvention>;
            /**
             * The time after the request is made when the session cookie should expire.
             */
            timeToExpiration?: pulumi.Input<string>;
        }

        /**
         * Cross-Origin-Resource-Sharing policy
         */
        export interface CorsPolicyArgs {
            /**
             * Specifies whether the resource allows credentials
             */
            allowCredentials?: pulumi.Input<boolean>;
            /**
             * Specifies the content for the access-control-allow-headers header
             */
            allowedHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-methods header
             */
            allowedMethods?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-allow-origins header
             */
            allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-expose-headers header 
             */
            exposeHeaders?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specifies the content for the access-control-max-age header
             */
            maxAge?: pulumi.Input<number>;
        }

        /**
         * Custom Domain of a Container App
         */
        export interface CustomDomainArgs {
            /**
             * Custom Domain binding type.
             */
            bindingType?: pulumi.Input<string | enums.v20230502preview.BindingType>;
            /**
             * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
             */
            certificateId?: pulumi.Input<string>;
            /**
             * Hostname.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Configuration properties for apps environment custom domain
         */
        export interface CustomDomainConfigurationArgs {
            /**
             * Certificate password
             */
            certificatePassword?: pulumi.Input<string>;
            /**
             * PFX or PEM blob
             */
            certificateValue?: pulumi.Input<string>;
            /**
             * Dns suffix for the environment domain
             */
            dnsSuffix?: pulumi.Input<string>;
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
            login?: pulumi.Input<v20230502preview.OpenIdConnectLoginArgs>;
            /**
             * The configuration settings of the app registration for the custom Open ID Connect provider.
             */
            registration?: pulumi.Input<v20230502preview.OpenIdConnectRegistrationArgs>;
        }

        /**
         * Container App container Custom scaling rule.
         */
        export interface CustomScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleAuthArgs>[]>;
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
            appProtocol?: pulumi.Input<string | enums.v20230502preview.AppProtocol>;
            /**
             * Enables API logging for the Dapr sidecar
             */
            enableApiLogging?: pulumi.Input<boolean>;
            /**
             * Boolean indicating if the Dapr side car is enabled
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
             */
            httpMaxRequestSize?: pulumi.Input<number>;
            /**
             * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
             */
            httpReadBufferSize?: pulumi.Input<number>;
            /**
             * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
             */
            logLevel?: pulumi.Input<string | enums.v20230502preview.LogLevel>;
        }
        /**
         * daprArgsProvideDefaults sets the appropriate defaults for DaprArgs
         */
        export function daprArgsProvideDefaults(val: DaprArgs): DaprArgs {
            return {
                ...val,
                appProtocol: (val.appProtocol) ?? "http",
                enabled: (val.enabled) ?? false,
            };
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
            allowedPrincipals?: pulumi.Input<v20230502preview.AllowedPrincipalsArgs>;
        }

        /**
         * The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
         */
        export interface EncryptionSettingsArgs {
            /**
             * The secret name which is referenced for EncryptionKey.
             */
            containerAppAuthEncryptionSecretName?: pulumi.Input<string>;
            /**
             * The secret name which is referenced for SigningKey.
             */
            containerAppAuthSigningSecretName?: pulumi.Input<string>;
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
         * The complex type of the extended location.
         */
        export interface ExtendedLocationArgs {
            /**
             * The name of the extended location.
             */
            name?: pulumi.Input<string>;
            /**
             * The type of the extended location.
             */
            type?: pulumi.Input<string | enums.v20230502preview.ExtendedLocationTypes>;
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
            login?: pulumi.Input<v20230502preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Facebook provider.
             */
            registration?: pulumi.Input<v20230502preview.AppRegistrationArgs>;
        }

        /**
         * The configuration settings of a forward proxy used to make the requests.
         */
        export interface ForwardProxyArgs {
            /**
             * The convention used to determine the url of the request made.
             */
            convention?: pulumi.Input<enums.v20230502preview.ForwardProxyConvention>;
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
            login?: pulumi.Input<v20230502preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the GitHub provider.
             */
            registration?: pulumi.Input<v20230502preview.ClientRegistrationArgs>;
        }

        /**
         * Configuration properties that define the mutable settings of a Container App SourceControl
         */
        export interface GithubActionConfigurationArgs {
            /**
             * AzureCredentials configurations.
             */
            azureCredentials?: pulumi.Input<v20230502preview.AzureCredentialsArgs>;
            /**
             * Context path
             */
            contextPath?: pulumi.Input<string>;
            /**
             * One time Github PAT to configure github environment
             */
            githubPersonalAccessToken?: pulumi.Input<string>;
            /**
             * Image name
             */
            image?: pulumi.Input<string>;
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
            registryInfo?: pulumi.Input<v20230502preview.RegistryInfoArgs>;
            /**
             * Runtime stack
             */
            runtimeStack?: pulumi.Input<string>;
            /**
             * Runtime version
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
            unauthenticatedClientAction?: pulumi.Input<enums.v20230502preview.UnauthenticatedClientActionV2>;
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
            login?: pulumi.Input<v20230502preview.LoginScopesArgs>;
            /**
             * The configuration settings of the app registration for the Google provider.
             */
            registration?: pulumi.Input<v20230502preview.ClientRegistrationArgs>;
            /**
             * The configuration settings of the Azure Active Directory token validation flow.
             */
            validation?: pulumi.Input<v20230502preview.AllowedAudiencesValidationArgs>;
        }

        /**
         * Container App container Http scaling rule.
         */
        export interface HttpScaleRuleArgs {
            /**
             * Authentication secrets for the custom scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleAuthArgs>[]>;
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
            forwardProxy?: pulumi.Input<v20230502preview.ForwardProxyArgs>;
            /**
             * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
             */
            requireHttps?: pulumi.Input<boolean>;
            /**
             * The configuration settings of the paths HTTP requests.
             */
            routes?: pulumi.Input<v20230502preview.HttpSettingsRoutesArgs>;
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
            apple?: pulumi.Input<v20230502preview.AppleArgs>;
            /**
             * The configuration settings of the Azure Active directory provider.
             */
            azureActiveDirectory?: pulumi.Input<v20230502preview.AzureActiveDirectoryArgs>;
            /**
             * The configuration settings of the Azure Static Web Apps provider.
             */
            azureStaticWebApps?: pulumi.Input<v20230502preview.AzureStaticWebAppsArgs>;
            /**
             * The map of the name of the alias of each custom Open ID Connect provider to the
             * configuration settings of the custom Open ID Connect provider.
             */
            customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<v20230502preview.CustomOpenIdConnectProviderArgs>}>;
            /**
             * The configuration settings of the Facebook provider.
             */
            facebook?: pulumi.Input<v20230502preview.FacebookArgs>;
            /**
             * The configuration settings of the GitHub provider.
             */
            gitHub?: pulumi.Input<v20230502preview.GitHubArgs>;
            /**
             * The configuration settings of the Google provider.
             */
            google?: pulumi.Input<v20230502preview.GoogleArgs>;
            /**
             * The configuration settings of the Twitter provider.
             */
            twitter?: pulumi.Input<v20230502preview.TwitterArgs>;
        }

        /**
         * Container App Ingress configuration.
         */
        export interface IngressArgs {
            /**
             * Settings to expose additional ports on container app
             */
            additionalPortMappings?: pulumi.Input<pulumi.Input<v20230502preview.IngressPortMappingArgs>[]>;
            /**
             * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
             */
            allowInsecure?: pulumi.Input<boolean>;
            /**
             * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
             */
            clientCertificateMode?: pulumi.Input<string | enums.v20230502preview.IngressClientCertificateMode>;
            /**
             * CORS policy for container app
             */
            corsPolicy?: pulumi.Input<v20230502preview.CorsPolicyArgs>;
            /**
             * custom domain bindings for Container Apps' hostnames.
             */
            customDomains?: pulumi.Input<pulumi.Input<v20230502preview.CustomDomainArgs>[]>;
            /**
             * Exposed Port in containers for TCP traffic from ingress
             */
            exposedPort?: pulumi.Input<number>;
            /**
             * Bool indicating if app exposes an external http endpoint
             */
            external?: pulumi.Input<boolean>;
            /**
             * Rules to restrict incoming IP address.
             */
            ipSecurityRestrictions?: pulumi.Input<pulumi.Input<v20230502preview.IpSecurityRestrictionRuleArgs>[]>;
            /**
             * Sticky Sessions for Single Revision Mode
             */
            stickySessions?: pulumi.Input<v20230502preview.IngressStickySessionsArgs>;
            /**
             * Target Port in containers for traffic from ingress
             */
            targetPort?: pulumi.Input<number>;
            /**
             * Traffic weights for app's revisions
             */
            traffic?: pulumi.Input<pulumi.Input<v20230502preview.TrafficWeightArgs>[]>;
            /**
             * Ingress transport protocol
             */
            transport?: pulumi.Input<string | enums.v20230502preview.IngressTransportMethod>;
        }
        /**
         * ingressArgsProvideDefaults sets the appropriate defaults for IngressArgs
         */
        export function ingressArgsProvideDefaults(val: IngressArgs): IngressArgs {
            return {
                ...val,
                allowInsecure: (val.allowInsecure) ?? false,
                external: (val.external) ?? false,
                transport: (val.transport) ?? "auto",
            };
        }

        /**
         * Port mappings of container app ingress
         */
        export interface IngressPortMappingArgs {
            /**
             * Specifies the exposed port for the target port. If not specified, it defaults to target port
             */
            exposedPort?: pulumi.Input<number>;
            /**
             * Specifies whether the app port is accessible outside of the environment
             */
            external: pulumi.Input<boolean>;
            /**
             * Specifies the port user's container listens on
             */
            targetPort: pulumi.Input<number>;
        }

        /**
         * Sticky Sessions for Single Revision Mode
         */
        export interface IngressStickySessionsArgs {
            /**
             * Sticky Session Affinity
             */
            affinity?: pulumi.Input<string | enums.v20230502preview.Affinity>;
        }

        /**
         * Container App init container definition
         */
        export interface InitContainerArgs {
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
            env?: pulumi.Input<pulumi.Input<v20230502preview.EnvironmentVarArgs>[]>;
            /**
             * Container image tag.
             */
            image?: pulumi.Input<string>;
            /**
             * Custom container name.
             */
            name?: pulumi.Input<string>;
            /**
             * Container resource requirements.
             */
            resources?: pulumi.Input<v20230502preview.ContainerResourcesArgs>;
            /**
             * Container volume mounts.
             */
            volumeMounts?: pulumi.Input<pulumi.Input<v20230502preview.VolumeMountArgs>[]>;
        }

        /**
         * Rule to restrict incoming IP address.
         */
        export interface IpSecurityRestrictionRuleArgs {
            /**
             * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
             */
            action: pulumi.Input<string | enums.v20230502preview.Action>;
            /**
             * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
             */
            description?: pulumi.Input<string>;
            /**
             * CIDR notation to match incoming IP address
             */
            ipAddressRange: pulumi.Input<string>;
            /**
             * Name for the IP restriction rule.
             */
            name: pulumi.Input<string>;
        }

        /**
         * Non versioned Container Apps Job configuration properties
         */
        export interface JobConfigurationArgs {
            /**
             * Trigger configuration of an event driven job.
             */
            eventTriggerConfig?: pulumi.Input<v20230502preview.JobConfigurationEventTriggerConfigArgs>;
            /**
             * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
             */
            manualTriggerConfig?: pulumi.Input<v20230502preview.JobConfigurationManualTriggerConfigArgs>;
            /**
             * Collection of private container registry credentials used by a Container apps job
             */
            registries?: pulumi.Input<pulumi.Input<v20230502preview.RegistryCredentialsArgs>[]>;
            /**
             * Maximum number of retries before failing the job.
             */
            replicaRetryLimit?: pulumi.Input<number>;
            /**
             * Maximum number of seconds a replica is allowed to run.
             */
            replicaTimeout: pulumi.Input<number>;
            /**
             * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
             */
            scheduleTriggerConfig?: pulumi.Input<v20230502preview.JobConfigurationScheduleTriggerConfigArgs>;
            /**
             * Collection of secrets used by a Container Apps Job
             */
            secrets?: pulumi.Input<pulumi.Input<v20230502preview.SecretArgs>[]>;
            /**
             * Trigger type of the job
             */
            triggerType: pulumi.Input<string | enums.v20230502preview.TriggerType>;
        }
        /**
         * jobConfigurationArgsProvideDefaults sets the appropriate defaults for JobConfigurationArgs
         */
        export function jobConfigurationArgsProvideDefaults(val: JobConfigurationArgs): JobConfigurationArgs {
            return {
                ...val,
                eventTriggerConfig: (val.eventTriggerConfig ? pulumi.output(val.eventTriggerConfig).apply(v20230502preview.jobConfigurationEventTriggerConfigArgsProvideDefaults) : undefined),
                triggerType: (val.triggerType) ?? "Manual",
            };
        }

        /**
         * Trigger configuration of an event driven job.
         */
        export interface JobConfigurationEventTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
            /**
             * Scaling configurations for event driven jobs.
             */
            scale?: pulumi.Input<v20230502preview.JobScaleArgs>;
        }
        /**
         * jobConfigurationEventTriggerConfigArgsProvideDefaults sets the appropriate defaults for JobConfigurationEventTriggerConfigArgs
         */
        export function jobConfigurationEventTriggerConfigArgsProvideDefaults(val: JobConfigurationEventTriggerConfigArgs): JobConfigurationEventTriggerConfigArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230502preview.jobScaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
         */
        export interface JobConfigurationManualTriggerConfigArgs {
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
         */
        export interface JobConfigurationScheduleTriggerConfigArgs {
            /**
             * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
             */
            cronExpression: pulumi.Input<string>;
            /**
             * Number of parallel replicas of a job that can run at a given time.
             */
            parallelism?: pulumi.Input<number>;
            /**
             * Minimum number of successful replica completions before overall job completion.
             */
            replicaCompletionCount?: pulumi.Input<number>;
        }

        /**
         * Scaling configurations for event driven jobs.
         */
        export interface JobScaleArgs {
            /**
             * Maximum number of job executions that are created for a trigger, default 100.
             */
            maxExecutions?: pulumi.Input<number>;
            /**
             * Minimum number of job executions that are created for a trigger, default 0
             */
            minExecutions?: pulumi.Input<number>;
            /**
             * Interval to check each event source in seconds. Defaults to 30s
             */
            pollingInterval?: pulumi.Input<number>;
            /**
             * Scaling rules.
             */
            rules?: pulumi.Input<pulumi.Input<v20230502preview.JobScaleRuleArgs>[]>;
        }
        /**
         * jobScaleArgsProvideDefaults sets the appropriate defaults for JobScaleArgs
         */
        export function jobScaleArgsProvideDefaults(val: JobScaleArgs): JobScaleArgs {
            return {
                ...val,
                maxExecutions: (val.maxExecutions) ?? 100,
                minExecutions: (val.minExecutions) ?? 0,
            };
        }

        /**
         * Scaling rule.
         */
        export interface JobScaleRuleArgs {
            /**
             * Authentication secrets for the scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe the scale rule.
             */
            metadata?: any;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Type of the scale rule
             * eg: azure-servicebus, redis etc.
             */
            type?: pulumi.Input<string>;
        }

        /**
         * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
         */
        export interface JobTemplateArgs {
            /**
             * List of container definitions for the Container App.
             */
            containers?: pulumi.Input<pulumi.Input<v20230502preview.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230502preview.InitContainerArgs>[]>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230502preview.VolumeArgs>[]>;
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
            cookieExpiration?: pulumi.Input<v20230502preview.CookieExpirationArgs>;
            /**
             * The configuration settings of the nonce used in the login flow.
             */
            nonce?: pulumi.Input<v20230502preview.NonceArgs>;
            /**
             * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
             */
            preserveUrlFragmentsForLogins?: pulumi.Input<boolean>;
            /**
             * The routes that specify the endpoints used for login and logout requests.
             */
            routes?: pulumi.Input<v20230502preview.LoginRoutesArgs>;
            /**
             * The configuration settings of the token store.
             */
            tokenStore?: pulumi.Input<v20230502preview.TokenStoreArgs>;
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
         * Certificate resource specific properties
         */
        export interface ManagedCertificatePropertiesArgs {
            /**
             * Selected type of domain control validation for managed certificates.
             */
            domainControlValidation?: pulumi.Input<string | enums.v20230502preview.ManagedCertificateDomainControlValidation>;
            /**
             * Subject name of the certificate.
             */
            subjectName?: pulumi.Input<string>;
        }

        /**
         * Peer authentication settings for the Managed Environment
         */
        export interface ManagedEnvironmentPeerAuthenticationArgs {
            /**
             * Mutual TLS authentication settings for the Managed Environment
             */
            mtls?: pulumi.Input<v20230502preview.MtlsArgs>;
        }

        /**
         * Storage properties
         */
        export interface ManagedEnvironmentStoragePropertiesArgs {
            /**
             * Azure file properties
             */
            azureFile?: pulumi.Input<v20230502preview.AzureFilePropertiesArgs>;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230502preview.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Configuration properties for mutual TLS authentication
         */
        export interface MtlsArgs {
            /**
             * Boolean indicating whether the mutual TLS authentication is enabled
             */
            enabled?: pulumi.Input<boolean>;
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
            method?: pulumi.Input<enums.v20230502preview.ClientCredentialMethod>;
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
            clientCredential?: pulumi.Input<v20230502preview.OpenIdConnectClientCredentialArgs>;
            /**
             * The client id of the custom Open ID Connect provider.
             */
            clientId?: pulumi.Input<string>;
            /**
             * The configuration settings of the endpoints used for the custom Open ID Connect provider.
             */
            openIdConnectConfiguration?: pulumi.Input<v20230502preview.OpenIdConnectConfigArgs>;
        }

        /**
         * Container App container Azure Queue based scaling rule.
         */
        export interface QueueScaleRuleArgs {
            /**
             * Authentication secrets for the queue scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleAuthArgs>[]>;
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
             * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
             */
            identity?: pulumi.Input<string>;
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
            rules?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleArgs>[]>;
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
            azureQueue?: pulumi.Input<v20230502preview.QueueScaleRuleArgs>;
            /**
             * Custom scale rule.
             */
            custom?: pulumi.Input<v20230502preview.CustomScaleRuleArgs>;
            /**
             * HTTP requests based scaling.
             */
            http?: pulumi.Input<v20230502preview.HttpScaleRuleArgs>;
            /**
             * Scale Rule Name
             */
            name?: pulumi.Input<string>;
            /**
             * Tcp requests based scaling.
             */
            tcp?: pulumi.Input<v20230502preview.TcpScaleRuleArgs>;
        }

        /**
         * Auth Secrets for Scale Rule
         */
        export interface ScaleRuleAuthArgs {
            /**
             * Name of the secret from which to pull the auth params.
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
             * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
             */
            identity?: pulumi.Input<string>;
            /**
             * Azure Key Vault URL pointing to the secret referenced by the container app.
             */
            keyVaultUrl?: pulumi.Input<string>;
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
         * Secret to be added to volume.
         */
        export interface SecretVolumeItemArgs {
            /**
             * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
             */
            path?: pulumi.Input<string>;
            /**
             * Name of the Container App secret from which to pull the secret value.
             */
            secretRef?: pulumi.Input<string>;
        }

        /**
         * Container App to be a dev service
         */
        export interface ServiceArgs {
            /**
             * Dev ContainerApp service type
             */
            type: pulumi.Input<string>;
        }

        /**
         * Configuration to bind a ContainerApp to a dev ContainerApp Service
         */
        export interface ServiceBindArgs {
            /**
             * Name of the service bind
             */
            name?: pulumi.Input<string>;
            /**
             * Resource id of the target service
             */
            serviceId?: pulumi.Input<string>;
        }

        /**
         * Container App container Tcp scaling rule.
         */
        export interface TcpScaleRuleArgs {
            /**
             * Authentication secrets for the tcp scale rule.
             */
            auth?: pulumi.Input<pulumi.Input<v20230502preview.ScaleRuleAuthArgs>[]>;
            /**
             * Metadata properties to describe tcp scale rule.
             */
            metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
            containers?: pulumi.Input<pulumi.Input<v20230502preview.ContainerArgs>[]>;
            /**
             * List of specialized containers that run before app containers.
             */
            initContainers?: pulumi.Input<pulumi.Input<v20230502preview.InitContainerArgs>[]>;
            /**
             * User friendly suffix that is appended to the revision name
             */
            revisionSuffix?: pulumi.Input<string>;
            /**
             * Scaling properties for the Container App.
             */
            scale?: pulumi.Input<v20230502preview.ScaleArgs>;
            /**
             * List of container app services bound to the app
             */
            serviceBinds?: pulumi.Input<pulumi.Input<v20230502preview.ServiceBindArgs>[]>;
            /**
             * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * List of volume definitions for the Container App.
             */
            volumes?: pulumi.Input<pulumi.Input<v20230502preview.VolumeArgs>[]>;
        }
        /**
         * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
         */
        export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
            return {
                ...val,
                scale: (val.scale ? pulumi.output(val.scale).apply(v20230502preview.scaleArgsProvideDefaults) : undefined),
            };
        }

        /**
         * The configuration settings of the token store.
         */
        export interface TokenStoreArgs {
            /**
             * The configuration settings of the storage of the tokens if blob storage is used.
             */
            azureBlobStorage?: pulumi.Input<v20230502preview.BlobStorageTokenStoreArgs>;
            /**
             * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
             *  The default is <code>false</code>.
             */
            enabled?: pulumi.Input<boolean>;
            /**
             * The number of hours after session token expiration that a session token can be used to
             * call the token refresh API. The default is 72 hours.
             */
            tokenRefreshExtensionHours?: pulumi.Input<number>;
        }

        /**
         * Traffic weight assigned to a revision
         */
        export interface TrafficWeightArgs {
            /**
             * Associates a traffic label with a revision
             */
            label?: pulumi.Input<string>;
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
            registration?: pulumi.Input<v20230502preview.TwitterRegistrationArgs>;
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
             * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
             */
            infrastructureSubnetId?: pulumi.Input<string>;
            /**
             * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
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
        }

        /**
         * Volume definitions for the Container App.
         */
        export interface VolumeArgs {
            /**
             * Mount options used while mounting the AzureFile. Must be a comma-separated string.
             */
            mountOptions?: pulumi.Input<string>;
            /**
             * Volume name.
             */
            name?: pulumi.Input<string>;
            /**
             * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
             */
            secrets?: pulumi.Input<pulumi.Input<v20230502preview.SecretVolumeItemArgs>[]>;
            /**
             * Name of storage resource. No need to provide for EmptyDir and Secret.
             */
            storageName?: pulumi.Input<string>;
            /**
             * Storage type for the volume. If not provided, use EmptyDir.
             */
            storageType?: pulumi.Input<string | enums.v20230502preview.StorageType>;
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
             * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
             */
            subPath?: pulumi.Input<string>;
            /**
             * This must match the Name of a Volume.
             */
            volumeName?: pulumi.Input<string>;
        }

        /**
         * Workload profile to scope container app execution.
         */
        export interface WorkloadProfileArgs {
            /**
             * The maximum capacity.
             */
            maximumCount?: pulumi.Input<number>;
            /**
             * The minimum capacity.
             */
            minimumCount?: pulumi.Input<number>;
            /**
             * Workload profile type for the workloads to run on.
             */
            name: pulumi.Input<string>;
            /**
             * Workload profile type for the workloads to run on.
             */
            workloadProfileType: pulumi.Input<string>;
        }

    }
}
