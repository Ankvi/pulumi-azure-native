import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The configuration settings of the Allowed Audiences validation flow.
 */
export interface AllowedAudiencesValidationResponse {
    /**
     * The configuration settings of the allowed list of audiences from which to validate the JWT token.
     */
    allowedAudiences?: string[];
}

/**
 * The configuration settings of the Azure Active Directory allowed principals.
 */
export interface AllowedPrincipalsResponse {
    /**
     * The list of the allowed groups.
     */
    groups?: string[];
    /**
     * The list of the allowed identities.
     */
    identities?: string[];
}

/**
 * Configuration of application logs
 */
export interface AppLogsConfigurationResponse {
    /**
     * Logs destination, can be 'log-analytics', 'azure-monitor' or 'none'
     */
    destination?: string;
    /**
     * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
     */
    logAnalyticsConfiguration?: LogAnalyticsConfigurationResponse;
}

/**
 * The configuration settings of the app registration for providers that have app ids and app secrets
 */
export interface AppRegistrationResponse {
    /**
     * The App ID of the app used for login.
     */
    appId?: string;
    /**
     * The app setting name that contains the app secret.
     */
    appSecretSettingName?: string;
}

/**
 * The configuration settings of the registration for the Apple provider
 */
export interface AppleRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: string;
}

/**
 * The configuration settings of the Apple provider.
 */
export interface AppleResponse {
    /**
     * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the Apple registration.
     */
    registration?: AppleRegistrationResponse;
}

/**
 * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
 */
export interface AuthPlatformResponse {
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    enabled?: boolean;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: string;
}

/**
 * The configuration settings of the Azure Active Directory login flow.
 */
export interface AzureActiveDirectoryLoginResponse {
    /**
     * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
     */
    disableWWWAuthenticate?: boolean;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    loginParameters?: string[];
}

/**
 * The configuration settings of the Azure Active Directory app registration.
 */
export interface AzureActiveDirectoryRegistrationResponse {
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientId?: string;
    /**
     * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateIssuer?: string;
    /**
     * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateSubjectAlternativeName?: string;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    clientSecretCertificateThumbprint?: string;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    clientSecretSettingName?: string;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    openIdIssuer?: string;
}

/**
 * The configuration settings of the Azure Active directory provider.
 */
export interface AzureActiveDirectoryResponse {
    /**
     * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
     * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
     * read or write to this property.
     */
    isAutoProvisioned?: boolean;
    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    login?: AzureActiveDirectoryLoginResponse;
    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    registration?: AzureActiveDirectoryRegistrationResponse;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: AzureActiveDirectoryValidationResponse;
}

/**
 * The configuration settings of the Azure Active Directory token validation flow.
 */
export interface AzureActiveDirectoryValidationResponse {
    /**
     * The list of audiences that can make successful authentication/authorization requests.
     */
    allowedAudiences?: string[];
    /**
     * The configuration settings of the default authorization policy.
     */
    defaultAuthorizationPolicy?: DefaultAuthorizationPolicyResponse;
    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    jwtClaimChecks?: JwtClaimChecksResponse;
}

/**
 * Container App credentials.
 */
export interface AzureCredentialsResponse {
    /**
     * Subscription Id.
     */
    subscriptionId?: string;
}

/**
 * Azure File Properties.
 */
export interface AzureFilePropertiesResponse {
    /**
     * Access mode for storage
     */
    accessMode?: string;
    /**
     * Storage account key for azure file.
     */
    accountKey?: string;
    /**
     * Storage account name for azure file.
     */
    accountName?: string;
    /**
     * Azure file share name.
     */
    shareName?: string;
}

/**
 * The configuration settings of the registration for the Azure Static Web Apps provider
 */
export interface AzureStaticWebAppsRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
}

/**
 * The configuration settings of the Azure Static Web Apps provider.
 */
export interface AzureStaticWebAppsResponse {
    /**
     * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the Azure Static Web Apps registration.
     */
    registration?: AzureStaticWebAppsRegistrationResponse;
}

/**
 * Certificate resource specific properties
 */
export interface CertificateResponseProperties {
    /**
     * Certificate expiration date.
     */
    expirationDate: string;
    /**
     * Certificate issue Date.
     */
    issueDate: string;
    /**
     * Certificate issuer.
     */
    issuer: string;
    /**
     * Provisioning state of the certificate.
     */
    provisioningState: string;
    /**
     * Public key hash.
     */
    publicKeyHash: string;
    /**
     * Subject alternative names the certificate applies to.
     */
    subjectAlternativeNames: string[];
    /**
     * Subject name of the certificate.
     */
    subjectName: string;
    /**
     * Certificate thumbprint.
     */
    thumbprint: string;
    /**
     * Is the certificate valid?.
     */
    valid: boolean;
}

/**
 * The configuration settings of the app registration for providers that have client ids and client secrets
 */
export interface ClientRegistrationResponse {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: string;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: string;
}

/**
 * Non versioned Container App configuration properties that define the mutable settings of a Container app
 */
export interface ConfigurationResponse {
    /**
     * ActiveRevisionsMode controls how active revisions are handled for the Container app:
     * <list><item>Multiple: multiple revisions can be active.</item><item>Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.</item></list>
     */
    activeRevisionsMode?: string;
    /**
     * Dapr configuration for the Container App.
     */
    dapr?: DaprResponse;
    /**
     * Ingress configurations.
     */
    ingress?: IngressResponse;
    /**
     * Optional. Max inactive revisions a Container App can have.
     */
    maxInactiveRevisions?: number;
    /**
     * Collection of private container registry credentials for containers used by the Container app
     */
    registries?: RegistryCredentialsResponse[];
    /**
     * Collection of secrets used by a Container app
     */
    secrets?: SecretResponse[];
}
/**
 * configurationResponseProvideDefaults sets the appropriate defaults for ConfigurationResponse
 */
export function configurationResponseProvideDefaults(val: ConfigurationResponse): ConfigurationResponse {
    return {
        ...val,
        activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
        dapr: (val.dapr ? daprResponseProvideDefaults(val.dapr) : undefined),
        ingress: (val.ingress ? ingressResponseProvideDefaults(val.ingress) : undefined),
    };
}

/**
 * Storage properties
 */
export interface ConnectedEnvironmentStorageResponseProperties {
    /**
     * Azure file properties
     */
    azureFile?: AzureFilePropertiesResponse;
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export interface ContainerAppProbeResponse {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
     */
    failureThreshold?: number;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: ContainerAppProbeResponseHttpGet;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
     */
    initialDelaySeconds?: number;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
     */
    periodSeconds?: number;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
     */
    successThreshold?: number;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
     */
    tcpSocket?: ContainerAppProbeResponseTcpSocket;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
     */
    terminationGracePeriodSeconds?: number;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
     */
    timeoutSeconds?: number;
    /**
     * The type of probe.
     */
    type?: string;
}

/**
 * HTTPGet specifies the http request to perform.
 */
export interface ContainerAppProbeResponseHttpGet {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: ContainerAppProbeResponseHttpHeaders[];
    /**
     * Path to access on the HTTP server.
     */
    path?: string;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port: number;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: string;
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface ContainerAppProbeResponseHttpHeaders {
    /**
     * The header field name
     */
    name: string;
    /**
     * The header field value
     */
    value: string;
}

/**
 * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
 */
export interface ContainerAppProbeResponseTcpSocket {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     */
    host?: string;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port: number;
}

/**
 * Container App Secret.
 */
export interface ContainerAppSecretResponse {
    /**
     * Secret Name.
     */
    name: string;
    /**
     * Secret Value.
     */
    value: string;
}

/**
 * Container App container resource requirements.
 */
export interface ContainerResourcesResponse {
    /**
     * Required CPU in cores, e.g. 0.5
     */
    cpu?: number;
    /**
     * Ephemeral Storage, e.g. "1Gi"
     */
    ephemeralStorage: string;
    /**
     * Required memory, e.g. "250Mb"
     */
    memory?: string;
}

/**
 * Container App container definition
 */
export interface ContainerResponse {
    /**
     * Container start command arguments.
     */
    args?: string[];
    /**
     * Container start command.
     */
    command?: string[];
    /**
     * Container environment variables.
     */
    env?: EnvironmentVarResponse[];
    /**
     * Container image tag.
     */
    image?: string;
    /**
     * Custom container name.
     */
    name?: string;
    /**
     * List of probes for the container.
     */
    probes?: ContainerAppProbeResponse[];
    /**
     * Container resource requirements.
     */
    resources?: ContainerResourcesResponse;
    /**
     * Container volume mounts.
     */
    volumeMounts?: VolumeMountResponse[];
}

/**
 * The configuration settings of the session cookie's expiration.
 */
export interface CookieExpirationResponse {
    /**
     * The convention used when determining the session cookie's expiration.
     */
    convention?: string;
    /**
     * The time after the request is made when the session cookie should expire.
     */
    timeToExpiration?: string;
}

/**
 * Cross-Origin-Resource-Sharing policy
 */
export interface CorsPolicyResponse {
    /**
     * allow credential or not
     */
    allowCredentials?: boolean;
    /**
     * allowed HTTP headers
     */
    allowedHeaders?: string[];
    /**
     * allowed HTTP methods
     */
    allowedMethods?: string[];
    /**
     * allowed origins
     */
    allowedOrigins: string[];
    /**
     * expose HTTP headers 
     */
    exposeHeaders?: string[];
    /**
     * max time client can cache the result
     */
    maxAge?: number;
}

/**
 * Configuration properties for apps environment custom domain
 */
export interface CustomDomainConfigurationResponse {
    /**
     * Certificate password
     */
    certificatePassword?: string;
    /**
     * PFX or PEM blob
     */
    certificateValue?: string;
    /**
     * Id used to verify domain name ownership
     */
    customDomainVerificationId: string;
    /**
     * Dns suffix for the environment domain
     */
    dnsSuffix?: string;
    /**
     * Certificate expiration date.
     */
    expirationDate: string;
    /**
     * Subject name of the certificate.
     */
    subjectName: string;
    /**
     * Certificate thumbprint.
     */
    thumbprint: string;
}

/**
 * Custom Domain of a Container App
 */
export interface CustomDomainResponse {
    /**
     * Custom Domain binding type.
     */
    bindingType?: string;
    /**
     * Resource Id of the Certificate to be bound to this hostname.
     */
    certificateId?: string;
    /**
     * Hostname.
     */
    name: string;
}

/**
 * Raw failure information if DNS verification fails.
 */
export interface CustomHostnameAnalysisResultResponseCustomDomainVerificationFailureInfo {
    /**
     * Standardized string to programmatically identify the error.
     */
    code: string;
    /**
     * Details or the error
     */
    details?: CustomHostnameAnalysisResultResponseDetails[];
    /**
     * Detailed error description and debugging information.
     */
    message: string;
    /**
     * Detailed error description and debugging information.
     */
    target: string;
}

/**
 * Detailed errors.
 */
export interface CustomHostnameAnalysisResultResponseDetails {
    /**
     * Standardized string to programmatically identify the error.
     */
    code: string;
    /**
     * Detailed error description and debugging information.
     */
    message: string;
    /**
     * Detailed error description and debugging information.
     */
    target: string;
}

/**
 * The configuration settings of the custom Open ID Connect provider.
 */
export interface CustomOpenIdConnectProviderResponse {
    /**
     * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    login?: OpenIdConnectLoginResponse;
    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    registration?: OpenIdConnectRegistrationResponse;
}

/**
 * Container App container Custom scaling rule.
 */
export interface CustomScaleRuleResponse {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe custom scale rule.
     */
    metadata?: {[key: string]: string};
    /**
     * Type of the custom scale rule
     * eg: azure-servicebus, redis etc.
     */
    type?: string;
}

/**
 * Dapr component metadata.
 */
export interface DaprMetadataResponse {
    /**
     * Metadata property name.
     */
    name?: string;
    /**
     * Name of the Dapr Component secret from which to pull the metadata property value.
     */
    secretRef?: string;
    /**
     * Metadata property value.
     */
    value?: string;
}

/**
 * Container App Dapr configuration.
 */
export interface DaprResponse {
    /**
     * Dapr application identifier
     */
    appId?: string;
    /**
     * Tells Dapr which port your application is listening on
     */
    appPort?: number;
    /**
     * Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
     */
    appProtocol?: string;
    /**
     * Enables API logging for the Dapr sidecar
     */
    enableApiLogging?: boolean;
    /**
     * Boolean indicating if the Dapr side car is enabled
     */
    enabled?: boolean;
    /**
     * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
     */
    httpMaxRequestSize?: number;
    /**
     * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
     */
    httpReadBufferSize?: number;
    /**
     * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
     */
    logLevel?: string;
}
/**
 * daprResponseProvideDefaults sets the appropriate defaults for DaprResponse
 */
export function daprResponseProvideDefaults(val: DaprResponse): DaprResponse {
    return {
        ...val,
        appProtocol: (val.appProtocol) ?? "http",
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Dapr component Secret for ListSecrets Action
 */
export interface DaprSecretResponse {
    /**
     * Secret Name.
     */
    name: string;
    /**
     * Secret Value.
     */
    value: string;
}

/**
 * The configuration settings of the Azure Active Directory default authorization policy.
 */
export interface DefaultAuthorizationPolicyResponse {
    /**
     * The configuration settings of the Azure Active Directory allowed applications.
     */
    allowedApplications?: string[];
    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    allowedPrincipals?: AllowedPrincipalsResponse;
}

/**
 * Managed Environment resource SKU properties.
 */
export interface EnvironmentSkuPropertiesResponse {
    /**
     * Name of the Sku.
     */
    name: string;
}

/**
 * Container App container environment variable.
 */
export interface EnvironmentVarResponse {
    /**
     * Environment variable name.
     */
    name?: string;
    /**
     * Name of the Container App secret from which to pull the environment variable value.
     */
    secretRef?: string;
    /**
     * Non-secret environment variable value.
     */
    value?: string;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name?: string;
    /**
     * The type of the extended location.
     */
    type?: string;
}

/**
 * The configuration settings of the Facebook provider.
 */
export interface FacebookResponse {
    /**
     * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The version of the Facebook api to be used while logging in.
     */
    graphApiVersion?: string;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the Facebook provider.
     */
    registration?: AppRegistrationResponse;
}

/**
 * The configuration settings of a forward proxy used to make the requests.
 */
export interface ForwardProxyResponse {
    /**
     * The convention used to determine the url of the request made.
     */
    convention?: string;
    /**
     * The name of the header containing the host of the request.
     */
    customHostHeaderName?: string;
    /**
     * The name of the header containing the scheme of the request.
     */
    customProtoHeaderName?: string;
}

/**
 * The configuration settings of the GitHub provider.
 */
export interface GitHubResponse {
    /**
     * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the GitHub provider.
     */
    registration?: ClientRegistrationResponse;
}

/**
 * Configuration properties that define the mutable settings of a Container App SourceControl
 */
export interface GithubActionConfigurationResponse {
    /**
     * AzureCredentials configurations.
     */
    azureCredentials?: AzureCredentialsResponse;
    /**
     * Context path
     */
    contextPath?: string;
    /**
     * Image name
     */
    image?: string;
    /**
     * Operation system
     */
    os?: string;
    /**
     * Code or Image
     */
    publishType?: string;
    /**
     * Registry configurations.
     */
    registryInfo?: RegistryInfoResponse;
    /**
     * Runtime stack
     */
    runtimeStack?: string;
    /**
     * Runtime version
     */
    runtimeVersion?: string;
}

/**
 * The configuration settings that determines the validation flow of users using ContainerApp Service Authentication/Authorization.
 */
export interface GlobalValidationResponse {
    /**
     * The paths for which unauthenticated flow would not be redirected to the login page.
     */
    excludedPaths?: string[];
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    redirectToProvider?: string;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    unauthenticatedClientAction?: string;
}

/**
 * The configuration settings of the Google provider.
 */
export interface GoogleResponse {
    /**
     * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the login flow.
     */
    login?: LoginScopesResponse;
    /**
     * The configuration settings of the app registration for the Google provider.
     */
    registration?: ClientRegistrationResponse;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: AllowedAudiencesValidationResponse;
}

/**
 * Container App container Http scaling rule.
 */
export interface HttpScaleRuleResponse {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe http scale rule.
     */
    metadata?: {[key: string]: string};
}

/**
 * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
 */
export interface HttpSettingsResponse {
    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    forwardProxy?: ForwardProxyResponse;
    /**
     * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
     */
    requireHttps?: boolean;
    /**
     * The configuration settings of the paths HTTP requests.
     */
    routes?: HttpSettingsRoutesResponse;
}

/**
 * The configuration settings of the paths HTTP requests.
 */
export interface HttpSettingsRoutesResponse {
    /**
     * The prefix that should precede all the authentication/authorization paths.
     */
    apiPrefix?: string;
}

/**
 * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
 */
export interface IdentityProvidersResponse {
    /**
     * The configuration settings of the Apple provider.
     */
    apple?: AppleResponse;
    /**
     * The configuration settings of the Azure Active directory provider.
     */
    azureActiveDirectory?: AzureActiveDirectoryResponse;
    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    azureStaticWebApps?: AzureStaticWebAppsResponse;
    /**
     * The map of the name of the alias of each custom Open ID Connect provider to the
     * configuration settings of the custom Open ID Connect provider.
     */
    customOpenIdConnectProviders?: {[key: string]: CustomOpenIdConnectProviderResponse};
    /**
     * The configuration settings of the Facebook provider.
     */
    facebook?: FacebookResponse;
    /**
     * The configuration settings of the GitHub provider.
     */
    gitHub?: GitHubResponse;
    /**
     * The configuration settings of the Google provider.
     */
    google?: GoogleResponse;
    /**
     * The configuration settings of the Twitter provider.
     */
    twitter?: TwitterResponse;
}

/**
 * Container App Ingress configuration.
 */
export interface IngressResponse {
    /**
     * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
     */
    allowInsecure?: boolean;
    /**
     * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
     */
    clientCertificateMode?: string;
    /**
     * CORS policy for container app
     */
    corsPolicy?: CorsPolicyResponse;
    /**
     * custom domain bindings for Container Apps' hostnames.
     */
    customDomains?: CustomDomainResponse[];
    /**
     * Exposed Port in containers for TCP traffic from ingress
     */
    exposedPort?: number;
    /**
     * Bool indicating if app exposes an external http endpoint
     */
    external?: boolean;
    /**
     * Hostname.
     */
    fqdn: string;
    /**
     * Rules to restrict incoming IP address.
     */
    ipSecurityRestrictions?: IpSecurityRestrictionRuleResponse[];
    /**
     * Target Port in containers for traffic from ingress
     */
    targetPort?: number;
    /**
     * Traffic weights for app's revisions
     */
    traffic?: TrafficWeightResponse[];
    /**
     * Ingress transport protocol
     */
    transport?: string;
}
/**
 * ingressResponseProvideDefaults sets the appropriate defaults for IngressResponse
 */
export function ingressResponseProvideDefaults(val: IngressResponse): IngressResponse {
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
export interface InitContainerResponse {
    /**
     * Container start command arguments.
     */
    args?: string[];
    /**
     * Container start command.
     */
    command?: string[];
    /**
     * Container environment variables.
     */
    env?: EnvironmentVarResponse[];
    /**
     * Container image tag.
     */
    image?: string;
    /**
     * Custom container name.
     */
    name?: string;
    /**
     * Container resource requirements.
     */
    resources?: ContainerResourcesResponse;
    /**
     * Container volume mounts.
     */
    volumeMounts?: VolumeMountResponse[];
}

/**
 * Rule to restrict incoming IP address.
 */
export interface IpSecurityRestrictionRuleResponse {
    /**
     * Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny
     */
    action: string;
    /**
     * Describe the IP restriction rule that is being sent to the container-app. This is an optional field.
     */
    description?: string;
    /**
     * CIDR notation to match incoming IP address
     */
    ipAddressRange: string;
    /**
     * Name for the IP restriction rule.
     */
    name: string;
}

/**
 * Non versioned Container Apps Job configuration properties
 */
export interface JobConfigurationResponse {
    /**
     * Trigger configuration of an event driven job.
     */
    eventTriggerConfig?: JobConfigurationResponseEventTriggerConfig;
    /**
     * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
     */
    manualTriggerConfig?: JobConfigurationResponseManualTriggerConfig;
    /**
     * Collection of private container registry credentials used by a Container apps job
     */
    registries?: RegistryCredentialsResponse[];
    /**
     * Maximum number of retries before failing the job.
     */
    replicaRetryLimit?: number;
    /**
     * Maximum number of seconds a replica is allowed to run.
     */
    replicaTimeout: number;
    /**
     * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
     */
    scheduleTriggerConfig?: JobConfigurationResponseScheduleTriggerConfig;
    /**
     * Collection of secrets used by a Container Apps Job
     */
    secrets?: SecretResponse[];
    /**
     * Trigger type of the job
     */
    triggerType: string;
}
/**
 * jobConfigurationResponseProvideDefaults sets the appropriate defaults for JobConfigurationResponse
 */
export function jobConfigurationResponseProvideDefaults(val: JobConfigurationResponse): JobConfigurationResponse {
    return {
        ...val,
        eventTriggerConfig: (val.eventTriggerConfig ? jobConfigurationResponseEventTriggerConfigProvideDefaults(val.eventTriggerConfig) : undefined),
        triggerType: (val.triggerType) ?? "Manual",
    };
}

/**
 * Trigger configuration of an event driven job.
 */
export interface JobConfigurationResponseEventTriggerConfig {
    /**
     * Number of parallel replicas of a job that can run at a given time.
     */
    parallelism?: number;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: number;
    /**
     * Scaling configurations for event driven jobs.
     */
    scale?: JobScaleResponse;
}
/**
 * jobConfigurationResponseEventTriggerConfigProvideDefaults sets the appropriate defaults for JobConfigurationResponseEventTriggerConfig
 */
export function jobConfigurationResponseEventTriggerConfigProvideDefaults(val: JobConfigurationResponseEventTriggerConfig): JobConfigurationResponseEventTriggerConfig {
    return {
        ...val,
        scale: (val.scale ? jobScaleResponseProvideDefaults(val.scale) : undefined),
    };
}

/**
 * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
 */
export interface JobConfigurationResponseManualTriggerConfig {
    /**
     * Number of parallel replicas of a job that can run at a given time.
     */
    parallelism?: number;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: number;
}

/**
 * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
 */
export interface JobConfigurationResponseScheduleTriggerConfig {
    /**
     * Cron formatted repeating schedule ("* * * * *") of a Cron Job.
     */
    cronExpression: string;
    /**
     * Number of parallel replicas of a job that can run at a given time.
     */
    parallelism?: number;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: number;
}

/**
 * Scaling configurations for event driven jobs.
 */
export interface JobScaleResponse {
    /**
     * Maximum number of job executions that are created for a trigger, default 100.
     */
    maxExecutions?: number;
    /**
     * Minimum number of job executions that are created for a trigger, default 0
     */
    minExecutions?: number;
    /**
     * Interval to check each event source in seconds. Defaults to 30s
     */
    pollingInterval?: number;
    /**
     * Scaling rules.
     */
    rules?: JobScaleRuleResponse[];
}
/**
 * jobScaleResponseProvideDefaults sets the appropriate defaults for JobScaleResponse
 */
export function jobScaleResponseProvideDefaults(val: JobScaleResponse): JobScaleResponse {
    return {
        ...val,
        maxExecutions: (val.maxExecutions) ?? 100,
        minExecutions: (val.minExecutions) ?? 0,
    };
}

/**
 * Scaling rule.
 */
export interface JobScaleRuleResponse {
    /**
     * Authentication secrets for the scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe the scale rule.
     */
    metadata?: any;
    /**
     * Scale Rule Name
     */
    name?: string;
    /**
     * Type of the scale rule
     * eg: azure-servicebus, redis etc.
     */
    type?: string;
}

/**
 * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
 */
export interface JobTemplateResponse {
    /**
     * List of container definitions for the Container App.
     */
    containers?: ContainerResponse[];
    /**
     * List of specialized containers that run before app containers.
     */
    initContainers?: InitContainerResponse[];
    /**
     * List of volume definitions for the Container App.
     */
    volumes?: VolumeResponse[];
}

/**
 * The configuration settings of the checks that should be made while validating the JWT Claims.
 */
export interface JwtClaimChecksResponse {
    /**
     * The list of the allowed client applications.
     */
    allowedClientApplications?: string[];
    /**
     * The list of the allowed groups.
     */
    allowedGroups?: string[];
}

/**
 * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
 */
export interface LogAnalyticsConfigurationResponse {
    /**
     * Log analytics customer id
     */
    customerId?: string;
}

/**
 * The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization.
 */
export interface LoginResponse {
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    allowedExternalRedirectUrls?: string[];
    /**
     * The configuration settings of the session cookie's expiration.
     */
    cookieExpiration?: CookieExpirationResponse;
    /**
     * The configuration settings of the nonce used in the login flow.
     */
    nonce?: NonceResponse;
    /**
     * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
     */
    preserveUrlFragmentsForLogins?: boolean;
    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    routes?: LoginRoutesResponse;
}

/**
 * The routes that specify the endpoints used for login and logout requests.
 */
export interface LoginRoutesResponse {
    /**
     * The endpoint at which a logout request should be made.
     */
    logoutEndpoint?: string;
}

/**
 * The configuration settings of the login flow, including the scopes that should be requested.
 */
export interface LoginScopesResponse {
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: string[];
}

/**
 * Certificate resource specific properties
 */
export interface ManagedCertificateResponseProperties {
    /**
     * Selected type of domain control validation for managed certificates.
     */
    domainControlValidation?: string;
    /**
     * Any error occurred during the certificate provision.
     */
    error: string;
    /**
     * Provisioning state of the certificate.
     */
    provisioningState: string;
    /**
     * Subject name of the certificate.
     */
    subjectName?: string;
    /**
     * A TXT token used for DNS TXT domain control validation when issuing this type of managed certificates.
     */
    validationToken: string;
}

/**
 * Configuration used to control the Environment Egress outbound traffic
 */
export interface ManagedEnvironmentOutboundSettingsResponse {
    /**
     * Outbound type for the cluster
     */
    outBoundType?: string;
    /**
     * Virtual Appliance IP used as the Egress controller for the Environment
     */
    virtualNetworkApplianceIp?: string;
}

/**
 * Storage properties
 */
export interface ManagedEnvironmentStorageResponseProperties {
    /**
     * Azure file properties
     */
    azureFile?: AzureFilePropertiesResponse;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The configuration settings of the nonce used in the login flow.
 */
export interface NonceResponse {
    /**
     * The time after the request is made when the nonce should expire.
     */
    nonceExpirationInterval?: string;
    /**
     * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
     */
    validateNonce?: boolean;
}

/**
 * The authentication client credentials of the custom Open ID Connect provider.
 */
export interface OpenIdConnectClientCredentialResponse {
    /**
     * The app setting that contains the client secret for the custom Open ID Connect provider.
     */
    clientSecretSettingName?: string;
    /**
     * The method that should be used to authenticate the user.
     */
    method?: string;
}

/**
 * The configuration settings of the endpoints used for the custom Open ID Connect provider.
 */
export interface OpenIdConnectConfigResponse {
    /**
     * The endpoint to be used to make an authorization request.
     */
    authorizationEndpoint?: string;
    /**
     * The endpoint that provides the keys necessary to validate the token.
     */
    certificationUri?: string;
    /**
     * The endpoint that issues the token.
     */
    issuer?: string;
    /**
     * The endpoint to be used to request a token.
     */
    tokenEndpoint?: string;
    /**
     * The endpoint that contains all the configuration endpoints for the provider.
     */
    wellKnownOpenIdConfiguration?: string;
}

/**
 * The configuration settings of the login flow of the custom Open ID Connect provider.
 */
export interface OpenIdConnectLoginResponse {
    /**
     * The name of the claim that contains the users name.
     */
    nameClaimType?: string;
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: string[];
}

/**
 * The configuration settings of the app registration for the custom Open ID Connect provider.
 */
export interface OpenIdConnectRegistrationResponse {
    /**
     * The authentication credentials of the custom Open ID Connect provider.
     */
    clientCredential?: OpenIdConnectClientCredentialResponse;
    /**
     * The client id of the custom Open ID Connect provider.
     */
    clientId?: string;
    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    openIdConnectConfiguration?: OpenIdConnectConfigResponse;
}

/**
 * Container App container Azure Queue based scaling rule.
 */
export interface QueueScaleRuleResponse {
    /**
     * Authentication secrets for the queue scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Queue length.
     */
    queueLength?: number;
    /**
     * Queue name.
     */
    queueName?: string;
}

/**
 * Container App Private Registry
 */
export interface RegistryCredentialsResponse {
    /**
     * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
     */
    identity?: string;
    /**
     * The name of the Secret that contains the registry login password
     */
    passwordSecretRef?: string;
    /**
     * Container Registry Server
     */
    server?: string;
    /**
     * Container Registry Username
     */
    username?: string;
}

/**
 * Container App registry information.
 */
export interface RegistryInfoResponse {
    /**
     * registry server Url.
     */
    registryUrl?: string;
    /**
     * registry username.
     */
    registryUserName?: string;
}

/**
 * Container App scaling configurations.
 */
export interface ScaleResponse {
    /**
     * Optional. Maximum number of container replicas. Defaults to 10 if not set.
     */
    maxReplicas?: number;
    /**
     * Optional. Minimum number of container replicas.
     */
    minReplicas?: number;
    /**
     * Scaling rules.
     */
    rules?: ScaleRuleResponse[];
}
/**
 * scaleResponseProvideDefaults sets the appropriate defaults for ScaleResponse
 */
export function scaleResponseProvideDefaults(val: ScaleResponse): ScaleResponse {
    return {
        ...val,
        maxReplicas: (val.maxReplicas) ?? 10,
    };
}

/**
 * Auth Secrets for Scale Rule
 */
export interface ScaleRuleAuthResponse {
    /**
     * Name of the secret from which to pull the auth params.
     */
    secretRef?: string;
    /**
     * Trigger Parameter that uses the secret
     */
    triggerParameter?: string;
}

/**
 * Container App container scaling rule.
 */
export interface ScaleRuleResponse {
    /**
     * Azure Queue based scaling.
     */
    azureQueue?: QueueScaleRuleResponse;
    /**
     * Custom scale rule.
     */
    custom?: CustomScaleRuleResponse;
    /**
     * HTTP requests based scaling.
     */
    http?: HttpScaleRuleResponse;
    /**
     * Scale Rule Name
     */
    name?: string;
    /**
     * Tcp requests based scaling.
     */
    tcp?: TcpScaleRuleResponse;
}

/**
 * Secret definition.
 */
export interface SecretResponse {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: string;
    /**
     * Azure Key Vault URL pointing to the secret referenced by the container app.
     */
    keyVaultUrl?: string;
    /**
     * Secret Name.
     */
    name?: string;
}

/**
 * Secret to be added to volume.
 */
export interface SecretVolumeItemResponse {
    /**
     * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
     */
    path?: string;
    /**
     * Name of the Container App secret from which to pull the secret value.
     */
    secretRef?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Container App container Tcp scaling rule.
 */
export interface TcpScaleRuleResponse {
    /**
     * Authentication secrets for the tcp scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * Metadata properties to describe tcp scale rule.
     */
    metadata?: {[key: string]: string};
}

/**
 * Container App versioned application definition.
 * Defines the desired state of an immutable revision.
 * Any changes to this section Will result in a new revision being created
 */
export interface TemplateResponse {
    /**
     * List of container definitions for the Container App.
     */
    containers?: ContainerResponse[];
    /**
     * List of specialized containers that run before app containers.
     */
    initContainers?: InitContainerResponse[];
    /**
     * User friendly suffix that is appended to the revision name
     */
    revisionSuffix?: string;
    /**
     * Scaling properties for the Container App.
     */
    scale?: ScaleResponse;
    /**
     * List of volume definitions for the Container App.
     */
    volumes?: VolumeResponse[];
}
/**
 * templateResponseProvideDefaults sets the appropriate defaults for TemplateResponse
 */
export function templateResponseProvideDefaults(val: TemplateResponse): TemplateResponse {
    return {
        ...val,
        scale: (val.scale ? scaleResponseProvideDefaults(val.scale) : undefined),
    };
}

/**
 * Traffic weight assigned to a revision
 */
export interface TrafficWeightResponse {
    /**
     * Associates a traffic label with a revision
     */
    label?: string;
    /**
     * Indicates that the traffic weight belongs to a latest stable revision
     */
    latestRevision?: boolean;
    /**
     * Name of a revision
     */
    revisionName?: string;
    /**
     * Traffic weight assigned to a revision
     */
    weight?: number;
}
/**
 * trafficWeightResponseProvideDefaults sets the appropriate defaults for TrafficWeightResponse
 */
export function trafficWeightResponseProvideDefaults(val: TrafficWeightResponse): TrafficWeightResponse {
    return {
        ...val,
        latestRevision: (val.latestRevision) ?? false,
    };
}

/**
 * The configuration settings of the app registration for the Twitter provider.
 */
export interface TwitterRegistrationResponse {
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    consumerKey?: string;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    consumerSecretSettingName?: string;
}

/**
 * The configuration settings of the Twitter provider.
 */
export interface TwitterResponse {
    /**
     * <code>false</code> if the Twitter provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: boolean;
    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    registration?: TwitterRegistrationResponse;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * Configuration properties for apps environment to join a Virtual Network
 */
export interface VnetConfigurationResponse {
    /**
     * CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges.
     */
    dockerBridgeCidr?: string;
    /**
     * Resource ID of a subnet for infrastructure components. This subnet must be in the same VNET as the subnet defined in runtimeSubnetId. Must not overlap with any other provided IP ranges.
     */
    infrastructureSubnetId?: string;
    /**
     * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide runtimeSubnetId and infrastructureSubnetId if enabling this property
     */
    internal?: boolean;
    /**
     * Configuration used to control the Environment Egress outbound traffic
     */
    outboundSettings?: ManagedEnvironmentOutboundSettingsResponse;
    /**
     * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
     */
    platformReservedCidr?: string;
    /**
     *  An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.
     */
    platformReservedDnsIP?: string;
    /**
     * This field is deprecated and not used. If you wish to provide your own subnet that Container App containers are injected into, then you should leverage the infrastructureSubnetId.
     */
    runtimeSubnetId?: string;
}

/**
 * Volume mount for the Container App.
 */
export interface VolumeMountResponse {
    /**
     * Path within the container at which the volume should be mounted.Must not contain ':'.
     */
    mountPath?: string;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: string;
    /**
     * This must match the Name of a Volume.
     */
    volumeName?: string;
}

/**
 * Volume definitions for the Container App.
 */
export interface VolumeResponse {
    /**
     * Mount options used while mounting the AzureFile. Must be a comma-separated string.
     */
    mountOptions?: string;
    /**
     * Volume name.
     */
    name?: string;
    /**
     * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
     */
    secrets?: SecretVolumeItemResponse[];
    /**
     * Name of storage resource. No need to provide for EmptyDir and Secret.
     */
    storageName?: string;
    /**
     * Storage type for the volume. If not provided, use EmptyDir.
     */
    storageType?: string;
}

/**
 * Workload profile to scope container app execution.
 */
export interface WorkloadProfileResponse {
    /**
     * The maximum capacity.
     */
    maximumCount: number;
    /**
     * The minimum capacity.
     */
    minimumCount: number;
    /**
     * Workload profile type for the workloads to run on.
     */
    workloadProfileType: string;
}




