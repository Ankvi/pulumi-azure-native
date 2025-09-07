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
 * Configuration of Application Insights 
 */
export interface AppInsightsConfigurationResponse {
    /**
     * Application Insights connection string
     */
    connectionString?: string;
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
     * Storage account key stored as an Azure Key Vault secret.
     */
    accountKeyVaultProperties?: SecretKeyVaultPropertiesResponse;
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
 * The configuration settings of the storage of the tokens if blob storage is used.
 */
export interface BlobStorageTokenStoreResponse {
    /**
     * The URI of the blob storage containing the tokens. Should not be used along with sasUrlSettingName.
     */
    blobContainerUri?: string;
    /**
     * The Client ID of a User-Assigned Managed Identity. Should not be used along with managedIdentityResourceId.
     */
    clientId?: string;
    /**
     * The Resource ID of a User-Assigned Managed Identity. Should not be used along with clientId.
     */
    managedIdentityResourceId?: string;
    /**
     * The name of the app secrets containing the SAS URL of the blob storage containing the tokens. Should not be used along with blobContainerUri.
     */
    sasUrlSettingName?: string;
}

/**
 * Configuration of the build.
 */
export interface BuildConfigurationResponse {
    /**
     * Base OS used to build and run the app.
     */
    baseOs?: string;
    /**
     * List of environment variables to be passed to the build, secrets should not be used in environment variable.
     */
    environmentVariables?: EnvironmentVariableResponse[];
    /**
     * Platform to be used to build and run the app.
     */
    platform?: string;
    /**
     * Platform version to be used to build and run the app.
     */
    platformVersion?: string;
    /**
     * List of steps to perform before the build.
     */
    preBuildSteps?: PreBuildStepResponse[];
}

/**
 * Properties for a certificate stored in a Key Vault.
 */
export interface CertificateKeyVaultPropertiesResponse {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: string;
    /**
     * URL pointing to the Azure Key Vault secret that holds the certificate.
     */
    keyVaultUrl?: string;
}

/**
 * Certificate resource specific properties
 */
export interface CertificateResponseProperties {
    /**
     * Properties for a certificate stored in a Key Vault.
     */
    certificateKeyVaultProperties?: CertificateKeyVaultPropertiesResponse;
    /**
     * The type of the certificate. Allowed values are `ServerSSLCertificate` and `ImagePullTrustedCA`
     */
    certificateType?: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    deploymentErrors: string;
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
 * Policy that defines circuit breaker conditions
 */
export interface CircuitBreakerPolicyResponse {
    /**
     * Number of consecutive errors before the circuit breaker opens
     */
    consecutiveErrors?: number;
    /**
     * The time interval, in seconds, between endpoint checks. This can result in opening the circuit breaker if the check fails as well as closing the circuit breaker if the check succeeds. Defaults to 10s.
     */
    intervalInSeconds?: number;
    /**
     * Maximum percentage of hosts that will be ejected after failure threshold has been met
     */
    maxEjectionPercent?: number;
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
     * <list><item>Single: Only one revision can be active at a time. Traffic weights cannot be used. This is the default.</item><item>Multiple: Multiple revisions can be active, including optional traffic weights and labels.</item><item>Labels: Only revisions with labels are active. Traffic weights can be applied to labels.</item></list>
     */
    activeRevisionsMode?: string;
    /**
     * Dapr configuration for the Container App.
     */
    dapr?: DaprResponse;
    /**
     * Optional settings for Managed Identities that are assigned to the Container App. If a Managed Identity is not specified here, default settings will be used.
     */
    identitySettings?: IdentitySettingsResponse[];
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
     * Optional. The percent of the total number of replicas that must be brought up before revision transition occurs. Defaults to 100 when none is given. Value must be greater than 0 and less than or equal to 100.
     */
    revisionTransitionThreshold?: number;
    /**
     * App runtime configuration for the Container App.
     */
    runtime?: RuntimeResponse;
    /**
     * Collection of secrets used by a Container app
     */
    secrets?: SecretResponse[];
    /**
     * Container App to be a dev Container App Service
     */
    service?: ServiceResponse;
    /**
     * Required in labels revisions mode. Label to apply to newly created revision.
     */
    targetLabel?: string;
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
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    deploymentErrors: string;
    /**
     * Provisioning state of the storage.
     */
    provisioningState: string;
    /**
     * SMB storage properties
     */
    smb?: SmbStorageResponse;
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
 * Container App auto patch configuration.
 */
export interface ContainerAppResponsePatchingConfiguration {
    /**
     * Patching mode for the container app. Null or default in this field will be interpreted as Automatic by RP. Automatic mode will automatically apply available patches. Manual mode will require the user to manually apply patches. Disabled mode will stop patch detection and auto patching.
     */
    patchingMode?: string;
}

/**
 * Container App Secret.
 */
export interface ContainerAppSecretResponse {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity: string;
    /**
     * Azure Key Vault URL pointing to the secret referenced by the container app.
     */
    keyVaultUrl: string;
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
 * Model representing a mapping from a container registry to the identity used to connect to it.
 */
export interface ContainerRegistryResponse {
    /**
     * Login server of the container registry.
     */
    containerRegistryServer: string;
    /**
     * Resource ID of the managed identity.
     */
    identityResourceId: string;
}

/**
 * Container registry that the final image will be uploaded to.
 */
export interface ContainerRegistryWithCustomImageResponse {
    /**
     * Full name that the final image should be uploaded as, including both image name and tag.
     */
    image?: string;
    /**
     * Login server of the container registry that the final image should be uploaded to. Builder resource needs to have this container registry defined along with an identity to use to access it.
     */
    server: string;
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
     * Required GPU in cores for GPU based app, e.g. 1.0
     */
    gpu?: number;
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
     * The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
     */
    imageType?: string;
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
     * Specifies whether the resource allows credentials
     */
    allowCredentials?: boolean;
    /**
     * Specifies the content for the access-control-allow-headers header
     */
    allowedHeaders?: string[];
    /**
     * Specifies the content for the access-control-allow-methods header
     */
    allowedMethods?: string[];
    /**
     * Specifies the content for the access-control-allow-origins header
     */
    allowedOrigins: string[];
    /**
     * Specifies the content for the access-control-expose-headers header 
     */
    exposeHeaders?: string[];
    /**
     * Specifies the content for the access-control-max-age header
     */
    maxAge?: number;
}

/**
 * Custom container configuration.
 */
export interface CustomContainerTemplateResponse {
    /**
     * List of container definitions for the sessions of the session pool.
     */
    containers?: SessionContainerResponse[];
    /**
     * Session pool ingress configuration.
     */
    ingress?: SessionIngressResponse;
    /**
     * Private container registry credentials for containers used by the sessions of the session pool.
     */
    registryCredentials?: SessionRegistryCredentialsResponse;
}

/**
 * Configuration properties for apps environment custom domain
 */
export interface CustomDomainConfigurationResponse {
    /**
     * Certificate stored in Azure Key Vault.
     */
    certificateKeyVaultProperties?: CertificateKeyVaultPropertiesResponse;
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
     * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
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
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: string;
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
 * Dapr Component Resiliency Policy Circuit Breaker Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyCircuitBreakerPolicyConfigurationResponse {
    /**
     * The number of consecutive errors before the circuit is opened.
     */
    consecutiveErrors?: number;
    /**
     * The optional interval in seconds after which the error count resets to 0. An interval of 0 will never reset. If not specified, the timeoutInSeconds value will be used.
     */
    intervalInSeconds?: number;
    /**
     * The interval in seconds until a retry attempt is made after the circuit is opened.
     */
    timeoutInSeconds?: number;
}

/**
 * Dapr Component Resiliency Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyConfigurationResponse {
    /**
     * The optional circuit breaker policy configuration
     */
    circuitBreakerPolicy?: DaprComponentResiliencyPolicyCircuitBreakerPolicyConfigurationResponse;
    /**
     * The optional HTTP retry policy configuration
     */
    httpRetryPolicy?: DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationResponse;
    /**
     * The optional timeout policy configuration
     */
    timeoutPolicy?: DaprComponentResiliencyPolicyTimeoutPolicyConfigurationResponse;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Backoff Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationResponse {
    /**
     * The optional initial delay in milliseconds before an operation is retried
     */
    initialDelayInMilliseconds?: number;
    /**
     * The optional maximum time interval in milliseconds between retry attempts
     */
    maxIntervalInMilliseconds?: number;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationResponse {
    /**
     * The optional maximum number of retries
     */
    maxRetries?: number;
    /**
     * The optional retry backoff configuration
     */
    retryBackOff?: DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationResponse;
}

/**
 * Dapr Component Resiliency Policy Timeout Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyTimeoutPolicyConfigurationResponse {
    /**
     * The optional response timeout in seconds
     */
    responseTimeoutInSeconds?: number;
}

/**
 * Configuration to bind a Dapr Component to a dev ContainerApp Service
 */
export interface DaprComponentServiceBindingResponse {
    /**
     * Service bind metadata
     */
    metadata?: DaprServiceBindMetadataResponse;
    /**
     * Name of the service bind
     */
    name?: string;
    /**
     * Resource id of the target service
     */
    serviceId?: string;
}

/**
 * Configuration properties Dapr component
 */
export interface DaprConfigurationResponse {
    /**
     * The version of Dapr
     */
    version: string;
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
     * Dapr application health check configuration
     */
    appHealth?: DaprResponseAppHealth;
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
    /**
     * Maximum number of concurrent requests, events handled by the Dapr sidecar
     */
    maxConcurrency?: number;
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
 * Dapr application health check configuration
 */
export interface DaprResponseAppHealth {
    /**
     * Boolean indicating if the health probe is enabled
     */
    enabled?: boolean;
    /**
     * Path for the health probe
     */
    path?: string;
    /**
     * Interval for the health probe in seconds
     */
    probeIntervalSeconds?: number;
    /**
     * Timeout for the health probe in milliseconds
     */
    probeTimeoutMilliseconds?: number;
    /**
     * Threshold for the health probe
     */
    threshold?: number;
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
 * Dapr component metadata.
 */
export interface DaprServiceBindMetadataResponse {
    /**
     * Service bind metadata property name.
     */
    name?: string;
    /**
     * Service bind metadata property value.
     */
    value?: string;
}

/**
 * Dapr PubSub Bulk Subscription Options.
 */
export interface DaprSubscriptionBulkSubscribeOptionsResponse {
    /**
     * Enable bulk subscription
     */
    enabled?: boolean;
    /**
     * Maximum duration in milliseconds to wait before a bulk message is sent to the app.
     */
    maxAwaitDurationMs?: number;
    /**
     * Maximum number of messages to deliver in a bulk message.
     */
    maxMessagesCount?: number;
}
/**
 * daprSubscriptionBulkSubscribeOptionsResponseProvideDefaults sets the appropriate defaults for DaprSubscriptionBulkSubscribeOptionsResponse
 */
export function daprSubscriptionBulkSubscribeOptionsResponseProvideDefaults(val: DaprSubscriptionBulkSubscribeOptionsResponse): DaprSubscriptionBulkSubscribeOptionsResponse {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * Dapr Pubsub Event Subscription Route Rule is used to specify the condition for sending a message to a specific path.
 */
export interface DaprSubscriptionRouteRuleResponse {
    /**
     * The optional CEL expression used to match the event. If the match is not specified, then the route is considered the default. The rules are tested in the order specified, so they should be define from most-to-least specific. The default route should appear last in the list.
     */
    match?: string;
    /**
     * The path for events that match this rule
     */
    path?: string;
}

/**
 * Dapr PubSub Event Subscription Routes configuration.
 */
export interface DaprSubscriptionRoutesResponse {
    /**
     * The default path to deliver events that do not match any of the rules.
     */
    default?: string;
    /**
     * The list of Dapr PubSub Event Subscription Route Rules.
     */
    rules?: DaprSubscriptionRouteRuleResponse[];
}

/**
 * Configuration of datadog 
 */
export interface DataDogConfigurationResponse {
    /**
     * The data dog api key
     */
    key?: string;
    /**
     * The data dog site
     */
    site?: string;
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
 * Configuration of Open Telemetry destinations
 */
export interface DestinationsConfigurationResponse {
    /**
     * Open telemetry datadog destination configuration
     */
    dataDogConfiguration?: DataDogConfigurationResponse;
    /**
     * Open telemetry otlp configurations
     */
    otlpConfigurations?: OtlpConfigurationResponse[];
}

/**
 * Configuration properties for disk encryption
 */
export interface DiskEncryptionConfigurationResponse {
    /**
     * The Key Vault that contains your key to use for disk encryption. The Key Vault must be in the same region as the Managed Environment.
     */
    keyVaultConfiguration?: DiskEncryptionConfigurationResponseKeyVaultConfiguration;
}

/**
 * Configuration properties for the authentication to the Key Vault
 */
export interface DiskEncryptionConfigurationResponseAuth {
    /**
     * Resource ID of a user-assigned managed identity to authenticate to the Key Vault. The identity must be assigned to the managed environment, in the same tenant as the Key Vault, and it must have the following key permissions on the Key Vault: wrapkey, unwrapkey, get.
     */
    identity?: string;
}

/**
 * The Key Vault that contains your key to use for disk encryption. The Key Vault must be in the same region as the Managed Environment.
 */
export interface DiskEncryptionConfigurationResponseKeyVaultConfiguration {
    /**
     * Configuration properties for the authentication to the Key Vault
     */
    auth?: DiskEncryptionConfigurationResponseAuth;
    /**
     * Key URL pointing to a key in KeyVault. Version segment of the Url is required.
     */
    keyUrl?: string;
}

/**
 * Configuration properties for a .NET Component
 */
export interface DotNetComponentConfigurationPropertyResponse {
    /**
     * The name of the property
     */
    propertyName?: string;
    /**
     * The value of the property
     */
    value?: string;
}

/**
 * Configuration to bind a .NET Component to another .NET Component
 */
export interface DotNetComponentServiceBindResponse {
    /**
     * Name of the service bind
     */
    name?: string;
    /**
     * Resource id of the target service
     */
    serviceId?: string;
}

/**
 * Dynamic pool configuration.
 */
export interface DynamicPoolConfigurationResponse {
    /**
     * The lifecycle configuration of a session in the dynamic session pool
     */
    lifecycleConfiguration?: LifecycleConfigurationResponse;
}

/**
 * The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
 */
export interface EncryptionSettingsResponse {
    /**
     * The secret name which is referenced for EncryptionKey.
     */
    containerAppAuthEncryptionSecretName?: string;
    /**
     * The secret name which is referenced for SigningKey.
     */
    containerAppAuthSigningSecretName?: string;
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
 * Model representing an environment variable.
 */
export interface EnvironmentVariableResponse {
    /**
     * Environment variable name.
     */
    name: string;
    /**
     * Environment variable value.
     */
    value: string;
}

/**
 * Body of the error response returned from the API.
 */
export interface ErrorEntityResponse {
    /**
     * Basic error code.
     */
    code?: string;
    /**
     * Error Details.
     */
    details?: ErrorEntityResponse[];
    /**
     * Type of error.
     */
    extendedCode?: string;
    /**
     * Inner errors.
     */
    innerErrors?: ErrorEntityResponse[];
    /**
     * Any details of the error.
     */
    message?: string;
    /**
     * Message template.
     */
    messageTemplate?: string;
    /**
     * Parameters for the template.
     */
    parameters?: string[];
    /**
     * The error target.
     */
    target?: string;
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
     * List of environment variables to be passed to the build.
     */
    buildEnvironmentVariables?: EnvironmentVariableResponse[];
    /**
     * Context path
     */
    contextPath?: string;
    /**
     * Dockerfile path
     */
    dockerfilePath?: string;
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
 * Conditions required to match a header
 */
export interface HeaderMatchResponse {
    /**
     * Exact value of the header
     */
    exactMatch?: string;
    /**
     * Name of the header
     */
    header?: string;
    /**
     * Prefix value of the header
     */
    prefixMatch?: string;
    /**
     * Regex value of the header
     */
    regexMatch?: string;
    /**
     * Suffix value of the header
     */
    suffixMatch?: string;
}

/**
 * Header of otlp configuration
 */
export interface HeaderResponse {
    /**
     * The key of otlp configuration header
     */
    key?: string;
    /**
     * The value of otlp configuration header
     */
    value?: string;
}

/**
 * Defines parameters for http connection pooling
 */
export interface HttpConnectionPoolResponse {
    /**
     * Maximum number of pending http1 requests allowed
     */
    http1MaxPendingRequests?: number;
    /**
     * Maximum number of http2 requests allowed
     */
    http2MaxRequests?: number;
}

/**
 * Model representing a http get request.
 */
export interface HttpGetResponse {
    /**
     * Name of the file that the request should be saved to.
     */
    fileName?: string;
    /**
     * List of headers to send with the request.
     */
    headers?: string[];
    /**
     * URL to make HTTP GET request against.
     */
    url: string;
}

/**
 * Policy that defines http request retry conditions
 */
export interface HttpRetryPolicyResponse {
    /**
     * Errors that can trigger a retry
     */
    errors?: string[];
    /**
     * Headers that must be present for a request to be retried
     */
    headers?: HeaderMatchResponse[];
    /**
     * Additional http status codes that can trigger a retry
     */
    httpStatusCodes?: number[];
    /**
     * Initial delay, in milliseconds, before retrying a request
     */
    initialDelayInMilliseconds?: number;
    /**
     * Maximum interval, in milliseconds, between retries
     */
    maxIntervalInMilliseconds?: number;
    /**
     * Maximum number of times a request will retry
     */
    maxRetries?: number;
}

/**
 * Action to perform once matching of routes is done
 */
export interface HttpRouteActionResponse {
    /**
     * Rewrite prefix, default is no rewrites
     */
    prefixRewrite?: string;
}

/**
 * Http Route Config properties
 */
export interface HttpRouteConfigResponseProperties {
    /**
     * Custom domain bindings for http Routes' hostnames.
     */
    customDomains?: CustomDomainResponse[];
    /**
     * FQDN of the route resource.
     */
    fqdn: string;
    /**
     * List of errors when trying to reconcile http routes
     */
    provisioningErrors: HttpRouteProvisioningErrorsResponse[];
    /**
     * The provisioning state of the Http Route Config in cluster
     */
    provisioningState: string;
    /**
     * Routing Rules for http route resource.
     */
    rules?: HttpRouteRuleResponse[];
}

/**
 * Criteria to match on
 */
export interface HttpRouteMatchResponse {
    /**
     * path case sensitive, default is true
     */
    caseSensitive?: boolean;
    /**
     * match on exact path
     */
    path?: string;
    /**
     * match on all prefix's. Not exact
     */
    pathSeparatedPrefix?: string;
    /**
     * match on all prefix's. Not exact
     */
    prefix?: string;
}

/**
 * List of provisioning errors for a http route config object
 */
export interface HttpRouteProvisioningErrorsResponse {
    /**
     * Description or error message
     */
    message: string;
    /**
     * Timestamp error occured at
     */
    timestamp: string;
}

/**
 * Http Routes configuration, including paths to match on and whether or not rewrites are to be done.
 */
export interface HttpRouteResponse {
    /**
     * Once route is matched, what is the desired action
     */
    action?: HttpRouteActionResponse;
    /**
     * Conditions route will match on
     */
    match?: HttpRouteMatchResponse;
}

/**
 * Http Route rule.
 */
export interface HttpRouteRuleResponse {
    /**
     * Description of rule. Optional.
     */
    description?: string;
    /**
     * Routing configuration that will allow matches on specific paths/headers.
     */
    routes?: HttpRouteResponse[];
    /**
     * Targets- container apps, revisions, labels
     */
    targets?: HttpRouteTargetResponse[];
}

/**
 * Targets - Container App Names, Revision Names, Labels.
 */
export interface HttpRouteTargetResponse {
    /**
     * Container App Name to route requests to
     */
    containerApp: string;
    /**
     * Label/Revision to route requests to
     */
    label?: string;
    /**
     * Revision to route requests to
     */
    revision?: string;
    /**
     * Weighted routing
     */
    weight?: number;
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
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: string;
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
 * Optional settings for a Managed Identity that is assigned to the Container App.
 */
export interface IdentitySettingsResponse {
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity: string;
    /**
     * Use to select the lifecycle stages of a Container App during which the Managed Identity should be available.
     */
    lifecycle?: string;
}
/**
 * identitySettingsResponseProvideDefaults sets the appropriate defaults for IdentitySettingsResponse
 */
export function identitySettingsResponseProvideDefaults(val: IdentitySettingsResponse): IdentitySettingsResponse {
    return {
        ...val,
        lifecycle: (val.lifecycle) ?? "All",
    };
}

/**
 * Settings for the ingress component, including workload profile, scaling, and connection handling.
 */
export interface IngressConfigurationResponse {
    /**
     * Maximum number of headers per request allowed by the ingress. Must be at least 1. Defaults to 100.
     */
    headerCountLimit?: number;
    /**
     * Duration (in minutes) before idle requests are timed out. Must be at least 1 minute. Defaults to 4 minutes.
     */
    requestIdleTimeout?: number;
    /**
     * Scaling configuration for the ingress component. Required.
     */
    scale?: IngressConfigurationResponseScale;
    /**
     * Time (in seconds) to allow active connections to complete on termination. Must be between 0 and 3600. Defaults to 480 seconds.
     */
    terminationGracePeriodSeconds?: number;
    /**
     * Name of the workload profile used by the ingress component. Required.
     */
    workloadProfileName?: string;
}

/**
 * Scaling configuration for the ingress component. Required.
 */
export interface IngressConfigurationResponseScale {
    /**
     * Maximum number of ingress replicas. Must be greater than or equal to minReplicas.
     */
    maxReplicas?: number;
    /**
     * Minimum number of ingress replicas. Must be at least 2. Required.
     */
    minReplicas?: number;
}

/**
 * Port mappings of container app ingress
 */
export interface IngressPortMappingResponse {
    /**
     * Specifies the exposed port for the target port. If not specified, it defaults to target port
     */
    exposedPort?: number;
    /**
     * Specifies whether the app port is accessible outside of the environment
     */
    external: boolean;
    /**
     * Specifies the port user's container listens on
     */
    targetPort: number;
}

/**
 * Container App Ingress configuration.
 */
export interface IngressResponse {
    /**
     * Settings to expose additional ports on container app
     */
    additionalPortMappings?: IngressPortMappingResponse[];
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
     * Sticky Sessions for Single Revision Mode
     */
    stickySessions?: IngressResponseStickySessions;
    /**
     * Target Port in containers for traffic from ingress
     */
    targetPort?: number;
    /**
     * Whether an http app listens on http or https
     */
    targetPortHttpScheme?: string;
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
 * Sticky Sessions for Single Revision Mode
 */
export interface IngressResponseStickySessions {
    /**
     * Sticky Session Affinity
     */
    affinity?: string;
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
     * The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
     */
    imageType?: string;
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
 * Configuration properties for a Java Component
 */
export interface JavaComponentConfigurationPropertyResponse {
    /**
     * The name of the property
     */
    propertyName?: string;
    /**
     * The value of the property
     */
    value?: string;
}

/**
 * Container App Ingress configuration.
 */
export interface JavaComponentIngressResponse {
    /**
     * Hostname of the Java Component endpoint
     */
    fqdn: string;
}

/**
 * Java component scaling configurations
 */
export interface JavaComponentPropertiesResponseScale {
    /**
     * Optional. Maximum number of Java component replicas
     */
    maxReplicas?: number;
    /**
     * Optional. Minimum number of Java component replicas. Defaults to 1 if not set
     */
    minReplicas?: number;
}

/**
 * Configuration to bind a Java Component to another Java Component
 */
export interface JavaComponentServiceBindResponse {
    /**
     * Name of the service bind
     */
    name?: string;
    /**
     * Resource id of the target service
     */
    serviceId?: string;
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
     * Optional settings for Managed Identities that are assigned to the Container App Job. If a Managed Identity is not specified here, default settings will be used.
     */
    identitySettings?: IdentitySettingsResponse[];
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
     * The resource ID of a user-assigned managed identity that is assigned to the job, or 'system' for system-assigned identity.
     */
    identity?: string;
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
 * Configuration properties Keda component
 */
export interface KedaConfigurationResponse {
    /**
     * The version of Keda
     */
    version: string;
}

/**
 * The lifecycle configuration properties of a session in the dynamic session pool
 */
export interface LifecycleConfigurationResponse {
    /**
     * The cooldown period of a session in seconds when the lifecycle type is 'Timed'.
     */
    cooldownPeriodInSeconds?: number;
    /**
     * The lifecycle type of the session pool.
     */
    lifecycleType?: string;
    /**
     * The maximum alive period of a session in seconds when the lifecycle type is 'OnContainerExit'.
     */
    maxAlivePeriodInSeconds?: number;
}

/**
 * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
 */
export interface LogAnalyticsConfigurationResponse {
    /**
     * Log analytics customer id
     */
    customerId?: string;
    /**
     * Boolean indicating whether to parse json string log into dynamic json columns
     */
    dynamicJsonColumns?: boolean;
}

/**
 * Logger settings for java workloads.
 */
export interface LoggerSettingResponse {
    /**
     * The specified logger's log level.
     */
    level: string;
    /**
     * Logger name.
     */
    logger: string;
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
    /**
     * The configuration settings of the token store.
     */
    tokenStore?: TokenStoreResponse;
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
 * Configuration of Open Telemetry logs
 */
export interface LogsConfigurationResponse {
    /**
     * Open telemetry logs destinations
     */
    destinations?: string[];
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
 * Peer traffic encryption settings for the Managed Environment
 */
export interface ManagedEnvironmentResponseEncryption {
    /**
     * Boolean indicating whether the peer traffic encryption is enabled
     */
    enabled?: boolean;
}

/**
 * Peer authentication settings for the Managed Environment
 */
export interface ManagedEnvironmentResponsePeerAuthentication {
    /**
     * Mutual TLS authentication settings for the Managed Environment
     */
    mtls?: MtlsResponse;
}

/**
 * Peer traffic settings for the Managed Environment
 */
export interface ManagedEnvironmentResponsePeerTrafficConfiguration {
    /**
     * Peer traffic encryption settings for the Managed Environment
     */
    encryption?: ManagedEnvironmentResponseEncryption;
}

/**
 * Storage properties
 */
export interface ManagedEnvironmentStorageResponseProperties {
    /**
     * Azure file properties
     */
    azureFile?: AzureFilePropertiesResponse;
    /**
     * NFS Azure file properties
     */
    nfsAzureFile?: NfsAzureFilePropertiesResponse;
}

/**
 * Optional settings for a Managed Identity that is assigned to the Session pool.
 */
export interface ManagedIdentitySettingResponse {
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Session Pool, or 'system' for system-assigned identity.
     */
    identity: string;
    /**
     * Use to select the lifecycle stages of a Session Pool during which the Managed Identity should be available.
     */
    lifecycle?: string;
}
/**
 * managedIdentitySettingResponseProvideDefaults sets the appropriate defaults for ManagedIdentitySettingResponse
 */
export function managedIdentitySettingResponseProvideDefaults(val: ManagedIdentitySettingResponse): ManagedIdentitySettingResponse {
    return {
        ...val,
        lifecycle: (val.lifecycle) ?? "None",
    };
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
 * Configuration of Open Telemetry metrics
 */
export interface MetricsConfigurationResponse {
    /**
     * Open telemetry metrics destinations
     */
    destinations?: string[];
    /**
     * Boolean indicating if including keda metrics
     */
    includeKeda?: boolean;
}

/**
 * Configuration properties for mutual TLS authentication
 */
export interface MtlsResponse {
    /**
     * Boolean indicating whether the mutual TLS authentication is enabled
     */
    enabled?: boolean;
}

/**
 * Nacos properties.
 */
export interface NacosComponentResponse {
    /**
     * Type of the Java Component.
     * Expected value is 'Nacos'.
     */
    componentType: "Nacos";
    /**
     * List of Java Components configuration properties
     */
    configurations?: JavaComponentConfigurationPropertyResponse[];
    /**
     * Java Component Ingress configurations.
     */
    ingress?: JavaComponentIngressResponse;
    /**
     * Provisioning state of the Java Component.
     */
    provisioningState: string;
    /**
     * Java component scaling configurations
     */
    scale?: JavaComponentPropertiesResponseScale;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: JavaComponentServiceBindResponse[];
}

/**
 * NFS Azure File Properties.
 */
export interface NfsAzureFilePropertiesResponse {
    /**
     * Access mode for storage
     */
    accessMode?: string;
    /**
     * Server for NFS azure file.
     */
    server?: string;
    /**
     * NFS Azure file share name.
     */
    shareName?: string;
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
 * Configuration of Open Telemetry
 */
export interface OpenTelemetryConfigurationResponse {
    /**
     * Open telemetry destinations configuration
     */
    destinationsConfiguration?: DestinationsConfigurationResponse;
    /**
     * Open telemetry logs configuration
     */
    logsConfiguration?: LogsConfigurationResponse;
    /**
     * Open telemetry metrics configuration
     */
    metricsConfiguration?: MetricsConfigurationResponse;
    /**
     * Open telemetry trace configuration
     */
    tracesConfiguration?: TracesConfigurationResponse;
}

/**
 * Configuration of otlp 
 */
export interface OtlpConfigurationResponse {
    /**
     * The endpoint of otlp configuration
     */
    endpoint?: string;
    /**
     * Headers of otlp configurations
     */
    headers?: HeaderResponse[];
    /**
     * Boolean indicating if otlp configuration is insecure
     */
    insecure?: boolean;
    /**
     * The name of otlp configuration
     */
    name?: string;
}

/**
 * Model representing a pre-build step.
 */
export interface PreBuildStepResponse {
    /**
     * Description of the pre-build step.
     */
    description?: string;
    /**
     * Http get request to send before the build.
     */
    httpGet?: HttpGetResponse;
    /**
     * List of custom commands to run.
     */
    scripts?: string[];
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The resource of private end point.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
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
 * Container App container Azure Queue based scaling rule.
 */
export interface QueueScaleRuleResponse {
    /**
     * Storage account name. required if using managed identity to authenticate
     */
    accountName?: string;
    /**
     * Authentication secrets for the queue scale rule.
     */
    auth?: ScaleRuleAuthResponse[];
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: string;
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
 * Container App Runtime configuration.
 */
export interface RuntimeResponse {
    /**
     * .NET app configuration
     */
    dotnet?: RuntimeResponseDotnet;
    /**
     * Java app configuration
     */
    java?: RuntimeResponseJava;
}

/**
 * .NET app configuration
 */
export interface RuntimeResponseDotnet {
    /**
     * Auto configure the ASP.NET Core Data Protection feature
     */
    autoConfigureDataProtection?: boolean;
}

/**
 * Java app configuration
 */
export interface RuntimeResponseJava {
    /**
     * Enable jmx core metrics for the java app
     */
    enableMetrics?: boolean;
    /**
     * Diagnostic capabilities achieved by java agent
     */
    javaAgent?: RuntimeResponseJavaAgent;
}

/**
 * Diagnostic capabilities achieved by java agent
 */
export interface RuntimeResponseJavaAgent {
    /**
     * Enable java agent injection for the java app.
     */
    enabled?: boolean;
    /**
     * Capabilities on the java logging scenario.
     */
    logging?: RuntimeResponseLogging;
}

/**
 * Capabilities on the java logging scenario.
 */
export interface RuntimeResponseLogging {
    /**
     * Settings of the logger for the java app.
     */
    loggerSettings?: LoggerSettingResponse[];
}

/**
 * Scale configuration.
 */
export interface ScaleConfigurationResponse {
    /**
     * The maximum count of sessions at the same time.
     */
    maxConcurrentSessions?: number;
    /**
     * The minimum count of ready session instances.
     */
    readySessionInstances?: number;
}

/**
 * Container App scaling configurations.
 */
export interface ScaleResponse {
    /**
     * Optional. KEDA Cooldown Period. Defaults to 300 seconds if not set.
     */
    cooldownPeriod?: number;
    /**
     * Optional. Maximum number of container replicas. Defaults to 10 if not set.
     */
    maxReplicas?: number;
    /**
     * Optional. Minimum number of container replicas.
     */
    minReplicas?: number;
    /**
     * Optional. KEDA Polling Interval. Defaults to 30 seconds if not set.
     */
    pollingInterval?: number;
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
 * Spring Cloud Gateway route definition
 */
export interface ScgRouteResponse {
    /**
     * Filters of the route
     */
    filters?: string[];
    /**
     * Id of the route
     */
    id: string;
    /**
     * Order of the route
     */
    order?: number;
    /**
     * Predicates of the route
     */
    predicates?: string[];
    /**
     * Uri of the route
     */
    uri: string;
}

/**
 * Maintenance schedule entry for a managed environment.
 */
export interface ScheduledEntryResponse {
    /**
     * Length of maintenance window range from 8 to 24 hours.
     */
    durationHours: number;
    /**
     * Start hour after which managed environment maintenance can start from 0 to 23 hour.
     */
    startHourUtc: number;
    /**
     * Day of the week when a managed environment can be patched.
     */
    weekDay: string;
}

/**
 * Properties for a secret stored in a Key Vault.
 */
export interface SecretKeyVaultPropertiesResponse {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: string;
    /**
     * URL pointing to the Azure Key Vault secret.
     */
    keyVaultUrl?: string;
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
 * Configuration to bind a ContainerApp to a dev ContainerApp Service
 */
export interface ServiceBindResponse {
    /**
     * Type of the client to be used to connect to the service
     */
    clientType?: string;
    /**
     * Customized keys for customizing injected values to the app
     */
    customizedKeys?: {[key: string]: string};
    /**
     * Name of the service bind
     */
    name?: string;
    /**
     * Resource id of the target service
     */
    serviceId?: string;
}

/**
 * Container App to be a dev service
 */
export interface ServiceResponse {
    /**
     * Dev ContainerApp service type
     */
    type: string;
}

/**
 * Container resource requirements for sessions of the session pool.
 */
export interface SessionContainerResourcesResponse {
    /**
     * Required CPU in cores, e.g. 0.5
     */
    cpu?: number;
    /**
     * Required memory, e.g. "250Mb"
     */
    memory?: string;
}

/**
 * Container definitions for the sessions of the session pool.
 */
export interface SessionContainerResponse {
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
    probes?: SessionProbeResponse[];
    /**
     * Container resource requirements.
     */
    resources?: SessionContainerResourcesResponse;
}

/**
 * Session pool ingress configuration.
 */
export interface SessionIngressResponse {
    /**
     * Target port in containers for traffic from ingress
     */
    targetPort?: number;
}

/**
 * Session network configuration.
 */
export interface SessionNetworkConfigurationResponse {
    /**
     * Network status for the sessions.
     */
    status?: string;
}

/**
 * Secret definition.
 */
export interface SessionPoolSecretResponse {
    /**
     * Secret Name.
     */
    name?: string;
}

/**
 * Session probe configuration.
 */
export interface SessionProbeResponse {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
     */
    failureThreshold?: number;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: SessionProbeResponseHttpGet;
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
    tcpSocket?: SessionProbeResponseTcpSocket;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
     */
    terminationGracePeriodSeconds?: number;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
     */
    timeoutSeconds?: number;
    /**
     * Denotes the type of probe. Can be Liveness or Startup, Readiness probe is not supported in sessions. Type must be unique for each probe within the context of a list of probes (SessionProbes).
     */
    type?: string;
}

/**
 * HTTPGet specifies the http request to perform.
 */
export interface SessionProbeResponseHttpGet {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: SessionProbeResponseHttpHeaders[];
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
export interface SessionProbeResponseHttpHeaders {
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
export interface SessionProbeResponseTcpSocket {
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
 * Session pool private registry credentials.
 */
export interface SessionRegistryCredentialsResponse {
    /**
     * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
     */
    identity?: string;
    /**
     * The name of the secret that contains the registry login password
     */
    passwordSecretRef?: string;
    /**
     * Container registry server.
     */
    server?: string;
    /**
     * Container registry username.
     */
    username?: string;
}

/**
 * SMB storage properties
 */
export interface SmbStorageResponse {
    /**
     * Access mode for storage
     */
    accessMode?: string;
    /**
     * The domain name for the user.
     */
    domain?: string;
    /**
     * The host name or IP address of the SMB server.
     */
    host?: string;
    /**
     * The password for the user.
     */
    password?: string;
    /**
     * The path to the SMB shared folder.
     */
    shareName?: string;
    /**
     * The user to log on to the SMB server.
     */
    username?: string;
}

/**
 * Spring Boot Admin properties.
 */
export interface SpringBootAdminComponentResponse {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringBootAdmin'.
     */
    componentType: "SpringBootAdmin";
    /**
     * List of Java Components configuration properties
     */
    configurations?: JavaComponentConfigurationPropertyResponse[];
    /**
     * Java Component Ingress configurations.
     */
    ingress?: JavaComponentIngressResponse;
    /**
     * Provisioning state of the Java Component.
     */
    provisioningState: string;
    /**
     * Java component scaling configurations
     */
    scale?: JavaComponentPropertiesResponseScale;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: JavaComponentServiceBindResponse[];
}

/**
 * Spring Cloud Config properties.
 */
export interface SpringCloudConfigComponentResponse {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudConfig'.
     */
    componentType: "SpringCloudConfig";
    /**
     * List of Java Components configuration properties
     */
    configurations?: JavaComponentConfigurationPropertyResponse[];
    /**
     * Provisioning state of the Java Component.
     */
    provisioningState: string;
    /**
     * Java component scaling configurations
     */
    scale?: JavaComponentPropertiesResponseScale;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: JavaComponentServiceBindResponse[];
}

/**
 * Spring Cloud Eureka properties.
 */
export interface SpringCloudEurekaComponentResponse {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudEureka'.
     */
    componentType: "SpringCloudEureka";
    /**
     * List of Java Components configuration properties
     */
    configurations?: JavaComponentConfigurationPropertyResponse[];
    /**
     * Java Component Ingress configurations.
     */
    ingress?: JavaComponentIngressResponse;
    /**
     * Provisioning state of the Java Component.
     */
    provisioningState: string;
    /**
     * Java component scaling configurations
     */
    scale?: JavaComponentPropertiesResponseScale;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: JavaComponentServiceBindResponse[];
}

/**
 * Spring Cloud Gateway properties.
 */
export interface SpringCloudGatewayComponentResponse {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudGateway'.
     */
    componentType: "SpringCloudGateway";
    /**
     * List of Java Components configuration properties
     */
    configurations?: JavaComponentConfigurationPropertyResponse[];
    /**
     * Java Component Ingress configurations.
     */
    ingress?: JavaComponentIngressResponse;
    /**
     * Provisioning state of the Java Component.
     */
    provisioningState: string;
    /**
     * Java component scaling configurations
     */
    scale?: JavaComponentPropertiesResponseScale;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: JavaComponentServiceBindResponse[];
    /**
     * Gateway route definition
     */
    springCloudGatewayRoutes?: ScgRouteResponse[];
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
 * Defines parameters for tcp connection pooling
 */
export interface TcpConnectionPoolResponse {
    /**
     * Maximum number of tcp connections allowed
     */
    maxConnections?: number;
}

/**
 * Policy that defines tcp request retry conditions
 */
export interface TcpRetryPolicyResponse {
    /**
     * Maximum number of attempts to connect to the tcp service
     */
    maxConnectAttempts?: number;
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
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: string;
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
     * List of container app services bound to the app
     */
    serviceBinds?: ServiceBindResponse[];
    /**
     * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
     */
    terminationGracePeriodSeconds?: number;
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
 * Policy to set request timeouts
 */
export interface TimeoutPolicyResponse {
    /**
     * Timeout, in seconds, for a request to initiate a connection
     */
    connectionTimeoutInSeconds?: number;
    /**
     * Timeout, in seconds, for a request to respond
     */
    responseTimeoutInSeconds?: number;
}

/**
 * The configuration settings of the token store.
 */
export interface TokenStoreResponse {
    /**
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    azureBlobStorage?: BlobStorageTokenStoreResponse;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    enabled?: boolean;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: number;
}

/**
 * Configuration of Open Telemetry traces
 */
export interface TracesConfigurationResponse {
    /**
     * Open telemetry traces destinations
     */
    destinations?: string[];
    /**
     * Boolean indicating if including dapr traces
     */
    includeDapr?: boolean;
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
     * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
     */
    infrastructureSubnetId?: string;
    /**
     * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
     */
    internal?: boolean;
    /**
     * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
     */
    platformReservedCidr?: string;
    /**
     *  An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.
     */
    platformReservedDnsIP?: string;
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
     * Mount options used while mounting the Azure file share or NFS Azure file share. Must be a comma-separated string.
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
 * Additional workflow properties.
 */
export interface WorkflowEnvelopeResponseProperties {
    /**
     * Gets or sets the files.
     */
    files?: any;
    /**
     * Gets or sets the state of the workflow.
     */
    flowState?: string;
    /**
     * Gets or sets workflow health.
     */
    health?: WorkflowHealthResponse;
}

/**
 * Represents the workflow health.
 */
export interface WorkflowHealthResponse {
    /**
     * Gets or sets the workflow error.
     */
    error?: ErrorEntityResponse;
    /**
     * Gets or sets the workflow health state.
     */
    state: string;
}

/**
 * Workload profile to scope container app execution.
 */
export interface WorkloadProfileResponse {
    /**
     * Whether to use a FIPS-enabled OS. Supported only for dedicated workload profiles.
     */
    enableFips?: boolean;
    /**
     * The maximum capacity.
     */
    maximumCount?: number;
    /**
     * The minimum capacity.
     */
    minimumCount?: number;
    /**
     * Workload profile type for the workloads to run on.
     */
    name: string;
    /**
     * Workload profile type for the workloads to run on.
     */
    workloadProfileType: string;
}
/**
 * workloadProfileResponseProvideDefaults sets the appropriate defaults for WorkloadProfileResponse
 */
export function workloadProfileResponseProvideDefaults(val: WorkloadProfileResponse): WorkloadProfileResponse {
    return {
        ...val,
        enableFips: (val.enableFips) ?? false,
    };
}
