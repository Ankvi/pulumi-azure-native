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
 * Configuration of the build.
 */
export interface BuildConfigurationArgs {
    /**
     * Base OS used to build and run the app.
     */
    baseOs?: pulumi.Input<string>;
    /**
     * List of environment variables to be passed to the build and application runtime.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[]>;
    /**
     * Platform to be used to build and run the app.
     */
    platform?: pulumi.Input<string>;
    /**
     * Platform version to be used to build and run the app.
     */
    platformVersion?: pulumi.Input<string>;
    /**
     * List of steps to perform before the build.
     */
    preBuildSteps?: pulumi.Input<pulumi.Input<PreBuildStepArgs>[]>;
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
 * Policy that defines circuit breaker conditions
 */
export interface CircuitBreakerPolicyArgs {
    /**
     * Number of consecutive errors before the circuit breaker opens
     */
    consecutiveErrors?: pulumi.Input<number>;
    /**
     * The time interval, in seconds, between endpoint checks. This can result in opening the circuit breaker if the check fails as well as closing the circuit breaker if the check succeeds. Defaults to 10s.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * Maximum percentage of hosts that will be ejected after failure threshold has been met
     */
    maxEjectionPercent?: pulumi.Input<number>;
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
 * Model representing a mapping from a container registry to the identity used to connect to it.
 */
export interface ContainerRegistryArgs {
    /**
     * Login server of the container registry.
     */
    containerRegistryServer: pulumi.Input<string>;
    /**
     * Resource ID of the managed identity.
     */
    identityResourceId: pulumi.Input<string>;
}

/**
 * Container registry that the final image will be uploaded to.
 */
export interface ContainerRegistryWithCustomImageArgs {
    /**
     * Full name that the final image should be uploaded as, including both image name and tag.
     */
    image?: pulumi.Input<string>;
    /**
     * Login server of the container registry that the final image should be uploaded to. Builder resource needs to have this container registry defined along with an identity to use to access it.
     */
    server: pulumi.Input<string>;
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
 * Dapr Component Resiliency Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyConfigurationArgs {
    /**
     * The optional HTTP retry policy configuration
     */
    httpRetryPolicy?: pulumi.Input<DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationArgs>;
    /**
     * The optional timeout policy configuration
     */
    timeoutPolicy?: pulumi.Input<DaprComponentResiliencyPolicyTimeoutPolicyConfigurationArgs>;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Backoff Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationArgs {
    /**
     * The optional initial delay in milliseconds before an operation is retried
     */
    initialDelayInMilliseconds?: pulumi.Input<number>;
    /**
     * The optional maximum time interval in milliseconds between retry attempts
     */
    maxIntervalInMilliseconds?: pulumi.Input<number>;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationArgs {
    /**
     * The optional maximum number of retries
     */
    maxRetries?: pulumi.Input<number>;
    /**
     * The optional retry backoff configuration
     */
    retryBackOff?: pulumi.Input<DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationArgs>;
}

/**
 * Dapr Component Resiliency Policy Timeout Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyTimeoutPolicyConfigurationArgs {
    /**
     * The optional response timeout in seconds
     */
    responseTimeoutInSeconds?: pulumi.Input<number>;
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
 * Dapr PubSub Bulk Subscription Options.
 */
export interface DaprSubscriptionBulkSubscribeOptionsArgs {
    /**
     * Enable bulk subscription
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Maximum duration in milliseconds to wait before a bulk message is sent to the app.
     */
    maxAwaitDurationMs?: pulumi.Input<number>;
    /**
     * Maximum number of messages to deliver in a bulk message.
     */
    maxMessagesCount?: pulumi.Input<number>;
}
/**
 * daprSubscriptionBulkSubscribeOptionsArgsProvideDefaults sets the appropriate defaults for DaprSubscriptionBulkSubscribeOptionsArgs
 */
export function daprSubscriptionBulkSubscribeOptionsArgsProvideDefaults(val: DaprSubscriptionBulkSubscribeOptionsArgs): DaprSubscriptionBulkSubscribeOptionsArgs {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Dapr Pubsub Event Subscription Route Rule is used to specify the condition for sending a message to a specific path.
 */
export interface DaprSubscriptionRouteRuleArgs {
    /**
     * The optional CEL expression used to match the event. If the match is not specified, then the route is considered the default. The rules are tested in the order specified, so they should be define from most-to-least specific. The default route should appear last in the list.
     */
    match?: pulumi.Input<string>;
    /**
     * The path for events that match this rule
     */
    path?: pulumi.Input<string>;
}

/**
 * Dapr PubSub Event Subscription Routes configuration.
 */
export interface DaprSubscriptionRoutesArgs {
    /**
     * The default path to deliver events that do not match any of the rules.
     */
    default?: pulumi.Input<string>;
    /**
     * The list of Dapr PubSub Event Subscription Route Rules.
     */
    rules?: pulumi.Input<pulumi.Input<DaprSubscriptionRouteRuleArgs>[]>;
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
 * Model representing an environment variable.
 */
export interface EnvironmentVariableArgs {
    /**
     * Environment variable name.
     */
    name: pulumi.Input<string>;
    /**
     * Environment variable value.
     */
    value: pulumi.Input<string>;
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
 * Conditions required to match a header
 */
export interface HeaderMatchArgs {
    /**
     * Exact value of the header
     */
    exactMatch?: pulumi.Input<string>;
    /**
     * Name of the header
     */
    header?: pulumi.Input<string>;
    /**
     * Prefix value of the header
     */
    prefixMatch?: pulumi.Input<string>;
    /**
     * Regex value of the header
     */
    regexMatch?: pulumi.Input<string>;
    /**
     * Suffix value of the header
     */
    suffixMatch?: pulumi.Input<string>;
}

/**
 * Defines parameters for http connection pooling
 */
export interface HttpConnectionPoolArgs {
    /**
     * Maximum number of pending http1 requests allowed
     */
    http1MaxPendingRequests?: pulumi.Input<number>;
    /**
     * Maximum number of http2 requests allowed
     */
    http2MaxRequests?: pulumi.Input<number>;
}

/**
 * Model representing a http get request.
 */
export interface HttpGetArgs {
    /**
     * Name of the file that the request should be saved to.
     */
    fileName?: pulumi.Input<string>;
    /**
     * List of headers to send with the request.
     */
    headers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL to make HTTP GET request against.
     */
    url: pulumi.Input<string>;
}

/**
 * Policy that defines http request retry conditions
 */
export interface HttpRetryPolicyArgs {
    /**
     * Errors that can trigger a retry
     */
    errors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Headers that must be present for a request to be retried
     */
    headers?: pulumi.Input<pulumi.Input<HeaderMatchArgs>[]>;
    /**
     * Additional http status codes that can trigger a retry
     */
    httpStatusCodes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Initial delay, in milliseconds, before retrying a request
     */
    initialDelayInMilliseconds?: pulumi.Input<number>;
    /**
     * Maximum interval, in milliseconds, between retries
     */
    maxIntervalInMilliseconds?: pulumi.Input<number>;
    /**
     * Maximum number of times a request will retry
     */
    maxRetries?: pulumi.Input<number>;
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
 * Model representing a pre-build step.
 */
export interface PreBuildStepArgs {
    /**
     * Description of the pre-build step.
     */
    description?: pulumi.Input<string>;
    /**
     * Http get request to send before the build.
     */
    httpGet?: pulumi.Input<HttpGetArgs>;
    /**
     * List of custom commands to run.
     */
    scripts?: pulumi.Input<pulumi.Input<string>[]>;
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
 * Defines parameters for tcp connection pooling
 */
export interface TcpConnectionPoolArgs {
    /**
     * Maximum number of tcp connections allowed
     */
    maxConnections?: pulumi.Input<number>;
}

/**
 * Policy that defines tcp request retry conditions
 */
export interface TcpRetryPolicyArgs {
    /**
     * Maximum number of attempts to connect to the tcp service
     */
    maxConnectAttempts?: pulumi.Input<number>;
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
 * Policy to set request timeouts
 */
export interface TimeoutPolicyArgs {
    /**
     * Timeout, in seconds, for a request to initiate a connection
     */
    connectionTimeoutInSeconds?: pulumi.Input<number>;
    /**
     * Timeout, in seconds, for a request to respond
     */
    responseTimeoutInSeconds?: pulumi.Input<number>;
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





