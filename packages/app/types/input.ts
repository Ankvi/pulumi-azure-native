import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration for action
 */
export interface ActionConfigurationArgs {
    /**
     * The access level of the action
     */
    accessLevel?: pulumi.Input<string | enums.AgentAccessLevel | undefined>;
    /**
     * The identity used by the action
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The mode of the action
     */
    mode?: pulumi.Input<string | enums.AgentMode | undefined>;
}

/**
 * Agent Connector Properties
 */
export interface AgentConnectorPropertiesArgs {
    /**
     * The type of the data connector
     */
    dataConnectorType?: pulumi.Input<string | undefined>;
    /**
     * Data source connection string or endpoint
     */
    dataSource?: pulumi.Input<string | undefined>;
    /**
     * Endpoint of the connector
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * Additional properties for the data connector which can be used to store custom key-value pairs
     */
    extendedProperties?: any | undefined;
    /**
     * Identity used to access the data source
     */
    identity?: pulumi.Input<string | undefined>;
}

/**
 * Agent identity configuration
 */
export interface AgentIdentityArgs {
    /**
     * Initial sponsor group ID (required for agent identity)
     */
    initialSponsorGroupId: pulumi.Input<string>;
}

/**
 * Properties of the Agent
 */
export interface AgentPropertiesArgs {
    /**
     * Configuration for action
     */
    actionConfiguration?: pulumi.Input<ActionConfigurationArgs | undefined>;
    /**
     * Agent identity configuration for accessing resources
     */
    agentIdentity?: pulumi.Input<AgentIdentityArgs | undefined>;
    /**
     * The agent space ID referenced by the agent
     */
    agentSpaceId?: pulumi.Input<string | undefined>;
    /**
     * Default AI model configuration for the agent
     */
    defaultModel?: pulumi.Input<DefaultModelArgs | undefined>;
    /**
     * Incident management configurations
     */
    incidentManagementConfiguration?: pulumi.Input<IncidentManagementConfigurationArgs | undefined>;
    /**
     * Knowledge graph configuration for agent
     */
    knowledgeGraphConfiguration?: pulumi.Input<KnowledgeGraphConfigurationArgs | undefined>;
    /**
     * Log configurations
     */
    logConfiguration?: pulumi.Input<LogConfigurationArgs | undefined>;
    /**
     * The upgrade channel of the agent
     */
    upgradeChannel?: pulumi.Input<string | enums.UpgradeChannel | undefined>;
}

/**
 * Agent Space Connector Properties
 */
export interface AgentSpaceConnectorPropertiesArgs {
    /**
     * The type of the data connector
     */
    dataConnectorType?: pulumi.Input<string | undefined>;
    /**
     * Data source connection string or endpoint
     */
    dataSource?: pulumi.Input<string | undefined>;
    /**
     * Endpoint of the connector
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * Additional properties for the data connector which can be used to store custom key-value pairs
     */
    extendedProperties?: any | undefined;
    /**
     * Identity used to access the data source
     */
    identity?: pulumi.Input<string | undefined>;
}

/**
 * Policy configurations for an Agent Space
 */
export interface AgentSpacePoliciesArgs {
    /**
     * Configuration for Geneva Actions policy
     */
    genevaActionsConfiguration?: pulumi.Input<GenevaActionsPolicyArgs | undefined>;
}

/**
 * Agent Space specific properties
 */
export interface AgentSpacePropertiesArgs {
    /**
     * Description of the Agent Space
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Maximum number of agents allowed in the Agent Space
     */
    maxAgentCount?: pulumi.Input<number | undefined>;
    /**
     * Policy configurations for the Agent Space
     */
    policies?: pulumi.Input<AgentSpacePoliciesArgs | undefined>;
    /**
     * Universal unique ID (UUID) of the Service Tree associated with this Agent Space
     */
    serviceTreeId?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Allowed Audiences validation flow.
 */
export interface AllowedAudiencesValidationArgs {
    /**
     * The configuration settings of the allowed list of audiences from which to validate the JWT token.
     */
    allowedAudiences?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory allowed principals.
 */
export interface AllowedPrincipalsArgs {
    /**
     * The list of the allowed groups.
     */
    groups?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of the allowed identities.
     */
    identities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Configuration of Application Insights
 */
export interface AppInsightsConfigurationArgs {
    /**
     * Application Insights connection string
     */
    connectionString?: pulumi.Input<string | undefined>;
}

/**
 * Configuration of application logs
 */
export interface AppLogsConfigurationArgs {
    /**
     * Logs destination, can be 'log-analytics', 'azure-monitor' or 'none'
     */
    destination?: pulumi.Input<string | undefined>;
    /**
     * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
     */
    logAnalyticsConfiguration?: pulumi.Input<LogAnalyticsConfigurationArgs | undefined>;
}

/**
 * The configuration settings of the app registration for providers that have app ids and app secrets
 */
export interface AppRegistrationArgs {
    /**
     * The App ID of the app used for login.
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the app secret.
     */
    appSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Apple provider.
 */
export interface AppleArgs {
    /**
     * <code>false</code> if the Apple provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the Apple registration.
     */
    registration?: pulumi.Input<AppleRegistrationArgs | undefined>;
}

/**
 * The configuration settings of the registration for the Apple provider
 */
export interface AppleRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Application Insights Configuration
 */
export interface ApplicationInsightsConfigurationArgs {
    /**
     * The Application ID for the Application Insights resource
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * The connection string for the Application Insights resource
     */
    connectionString?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the platform of ContainerApp Service Authentication/Authorization.
 */
export interface AuthPlatformArgs {
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Active directory provider.
 */
export interface AzureActiveDirectoryArgs {
    /**
     * <code>false</code> if the Azure Active Directory provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.
     * This is an internal flag primarily intended to support the Azure Management Portal. Users should not
     * read or write to this property.
     */
    isAutoProvisioned?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the Azure Active Directory login flow.
     */
    login?: pulumi.Input<AzureActiveDirectoryLoginArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory app registration.
     */
    registration?: pulumi.Input<AzureActiveDirectoryRegistrationArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: pulumi.Input<AzureActiveDirectoryValidationArgs | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory login flow.
 */
export interface AzureActiveDirectoryLoginArgs {
    /**
     * <code>true</code> if the www-authenticate provider should be omitted from the request; otherwise, <code>false</code>.
     */
    disableWWWAuthenticate?: pulumi.Input<boolean | undefined>;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    loginParameters?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    clientId?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateIssuer?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret Certificate Thumbprint. It is also optional.
     */
    clientSecretCertificateSubjectAlternativeName?: pulumi.Input<string | undefined>;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    clientSecretCertificateThumbprint?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://login.microsoftonline.com/v2.0/{tenant-guid}/.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    openIdIssuer?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory token validation flow.
 */
export interface AzureActiveDirectoryValidationArgs {
    /**
     * The list of audiences that can make successful authentication/authorization requests.
     */
    allowedAudiences?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the default authorization policy.
     */
    defaultAuthorizationPolicy?: pulumi.Input<DefaultAuthorizationPolicyArgs | undefined>;
    /**
     * The configuration settings of the checks that should be made while validating the JWT Claims.
     */
    jwtClaimChecks?: pulumi.Input<JwtClaimChecksArgs | undefined>;
}

/**
 * Container App credentials.
 */
export interface AzureCredentialsArgs {
    /**
     * Client Id.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Client Secret.
     */
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * Kind of auth github does for deploying the template
     */
    kind?: pulumi.Input<string | undefined>;
    /**
     * Subscription Id.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Tenant Id.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Azure File Properties.
 */
export interface AzureFilePropertiesArgs {
    /**
     * Access mode for storage
     */
    accessMode?: pulumi.Input<string | enums.AccessMode | undefined>;
    /**
     * Storage account key for azure file.
     */
    accountKey?: pulumi.Input<string | undefined>;
    /**
     * Storage account key stored as an Azure Key Vault secret.
     */
    accountKeyVaultProperties?: pulumi.Input<SecretKeyVaultPropertiesArgs | undefined>;
    /**
     * Storage account name for azure file.
     */
    accountName?: pulumi.Input<string | undefined>;
    /**
     * Azure file share name.
     */
    shareName?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Static Web Apps provider.
 */
export interface AzureStaticWebAppsArgs {
    /**
     * <code>false</code> if the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the Azure Static Web Apps registration.
     */
    registration?: pulumi.Input<AzureStaticWebAppsRegistrationArgs | undefined>;
}

/**
 * The configuration settings of the registration for the Azure Static Web Apps provider
 */
export interface AzureStaticWebAppsRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the storage of the tokens if blob storage is used.
 */
export interface BlobStorageTokenStoreArgs {
    /**
     * The URI of the blob storage containing the tokens. Should not be used along with sasUrlSettingName.
     */
    blobContainerUri?: pulumi.Input<string | undefined>;
    /**
     * The Client ID of a User-Assigned Managed Identity. Should not be used along with managedIdentityResourceId.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The Resource ID of a User-Assigned Managed Identity. Should not be used along with clientId.
     */
    managedIdentityResourceId?: pulumi.Input<string | undefined>;
    /**
     * The name of the app secrets containing the SAS URL of the blob storage containing the tokens. Should not be used along with blobContainerUri.
     */
    sasUrlSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Configuration of the build.
 */
export interface BuildConfigurationArgs {
    /**
     * Base OS used to build and run the app.
     */
    baseOs?: pulumi.Input<string | undefined>;
    /**
     * List of environment variables to be passed to the build, secrets should not be used in environment variable.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[] | undefined>;
    /**
     * Platform to be used to build and run the app.
     */
    platform?: pulumi.Input<string | undefined>;
    /**
     * Platform version to be used to build and run the app.
     */
    platformVersion?: pulumi.Input<string | undefined>;
    /**
     * List of steps to perform before the build.
     */
    preBuildSteps?: pulumi.Input<pulumi.Input<PreBuildStepArgs>[] | undefined>;
}

/**
 * Properties for a certificate stored in a Key Vault.
 */
export interface CertificateKeyVaultPropertiesArgs {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * URL pointing to the Azure Key Vault secret that holds the certificate.
     */
    keyVaultUrl?: pulumi.Input<string | undefined>;
}

/**
 * Certificate resource specific properties
 */
export interface CertificatePropertiesArgs {
    /**
     * Properties for a certificate stored in a Key Vault.
     */
    certificateKeyVaultProperties?: pulumi.Input<CertificateKeyVaultPropertiesArgs | undefined>;
    /**
     * The type of the certificate. Allowed values are `ServerSSLCertificate` and `ImagePullTrustedCA`
     */
    certificateType?: pulumi.Input<string | enums.CertificateType | undefined>;
    /**
     * Certificate password.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * PFX or PEM blob
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Policy that defines circuit breaker conditions
 */
export interface CircuitBreakerPolicyArgs {
    /**
     * Number of consecutive errors before the circuit breaker opens
     */
    consecutiveErrors?: pulumi.Input<number | undefined>;
    /**
     * The time interval, in seconds, between endpoint checks. This can result in opening the circuit breaker if the check fails as well as closing the circuit breaker if the check succeeds. Defaults to 10s.
     */
    intervalInSeconds?: pulumi.Input<number | undefined>;
    /**
     * Maximum percentage of hosts that will be ejected after failure threshold has been met
     */
    maxEjectionPercent?: pulumi.Input<number | undefined>;
}

/**
 * The configuration settings of the app registration for providers that have client ids and client secrets
 */
export interface ClientRegistrationArgs {
    /**
     * The Client ID of the app used for login.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the client secret.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Non versioned Container App configuration properties that define the mutable settings of a Container app
 */
export interface ConfigurationArgs {
    /**
     * ActiveRevisionsMode controls how active revisions are handled for the Container app:
     * <list><item>Single: Only one revision can be active at a time. Traffic weights cannot be used. This is the default.</item><item>Multiple: Multiple revisions can be active, including optional traffic weights and labels.</item><item>Labels: Only revisions with labels are active. Traffic weights can be applied to labels.</item></list>
     */
    activeRevisionsMode?: pulumi.Input<string | enums.ActiveRevisionsMode | undefined>;
    /**
     * Dapr configuration for the Container App.
     */
    dapr?: pulumi.Input<DaprArgs | undefined>;
    /**
     * Optional settings for Managed Identities that are assigned to the Container App. If a Managed Identity is not specified here, default settings will be used.
     */
    identitySettings?: pulumi.Input<pulumi.Input<IdentitySettingsArgs>[] | undefined>;
    /**
     * Ingress configurations.
     */
    ingress?: pulumi.Input<IngressArgs | undefined>;
    /**
     * Optional. Max inactive revisions a Container App can have.
     */
    maxInactiveRevisions?: pulumi.Input<number | undefined>;
    /**
     * Collection of private container registry credentials for containers used by the Container app
     */
    registries?: pulumi.Input<pulumi.Input<RegistryCredentialsArgs>[] | undefined>;
    /**
     * Optional. The percent of the total number of replicas that must be brought up before revision transition occurs. Defaults to 100 when none is given. Value must be greater than 0 and less than or equal to 100.
     */
    revisionTransitionThreshold?: pulumi.Input<number | undefined>;
    /**
     * App runtime configuration for the Container App.
     */
    runtime?: pulumi.Input<RuntimeArgs | undefined>;
    /**
     * Collection of secrets used by a Container app
     */
    secrets?: pulumi.Input<pulumi.Input<SecretArgs>[] | undefined>;
    /**
     * Container App to be a dev Container App Service
     */
    service?: pulumi.Input<ServiceArgs | undefined>;
    /**
     * Required in labels revisions mode. Label to apply to newly created revision.
     */
    targetLabel?: pulumi.Input<string | undefined>;
}
/**
 * configurationArgsProvideDefaults sets the appropriate defaults for ConfigurationArgs
 */
export function configurationArgsProvideDefaults(val: ConfigurationArgs): ConfigurationArgs {
    return {
        ...val,
        activeRevisionsMode: (val.activeRevisionsMode) ?? "Single",
        dapr: pulumi.output(val.dapr).apply(v => v === undefined ? undefined : daprArgsProvideDefaults(v)),
        ingress: pulumi.output(val.ingress).apply(v => v === undefined ? undefined : ingressArgsProvideDefaults(v)),
    };
}

/**
 * Storage properties
 */
export interface ConnectedEnvironmentStoragePropertiesArgs {
    /**
     * Azure file properties
     */
    azureFile?: pulumi.Input<AzureFilePropertiesArgs | undefined>;
    /**
     * SMB storage properties
     */
    smb?: pulumi.Input<SmbStorageArgs | undefined>;
}

/**
 * Container App container definition
 */
export interface ContainerArgs {
    /**
     * Container start command arguments.
     */
    args?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container start command.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container environment variables.
     */
    env?: pulumi.Input<pulumi.Input<EnvironmentVarArgs>[] | undefined>;
    /**
     * Container image tag.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
     */
    imageType?: pulumi.Input<string | enums.ImageType | undefined>;
    /**
     * Custom container name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * List of probes for the container.
     */
    probes?: pulumi.Input<pulumi.Input<ContainerAppProbeArgs>[] | undefined>;
    /**
     * Container resource requirements.
     */
    resources?: pulumi.Input<ContainerResourcesArgs | undefined>;
    /**
     * Container volume mounts.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[] | undefined>;
}

/**
 * Container App auto patch configuration.
 */
export interface ContainerAppPatchingConfigurationArgs {
    /**
     * Patching mode for the container app. Null or default in this field will be interpreted as Automatic by RP. Automatic mode will automatically apply available patches. Manual mode will require the user to manually apply patches. Disabled mode will stop patch detection and auto patching.
     */
    patchingMode?: pulumi.Input<string | enums.PatchingMode | undefined>;
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export interface ContainerAppProbeArgs {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
     */
    failureThreshold?: pulumi.Input<number | undefined>;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: pulumi.Input<ContainerAppProbeHttpGetArgs | undefined>;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
     */
    initialDelaySeconds?: pulumi.Input<number | undefined>;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
     */
    periodSeconds?: pulumi.Input<number | undefined>;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
     */
    successThreshold?: pulumi.Input<number | undefined>;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
     */
    tcpSocket?: pulumi.Input<ContainerAppProbeTcpSocketArgs | undefined>;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
     */
    terminationGracePeriodSeconds?: pulumi.Input<number | undefined>;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
     */
    timeoutSeconds?: pulumi.Input<number | undefined>;
    /**
     * The type of probe.
     */
    type?: pulumi.Input<string | enums.Type | undefined>;
}

/**
 * HTTPGet specifies the http request to perform.
 */
export interface ContainerAppProbeHttpGetArgs {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: pulumi.Input<string | undefined>;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: pulumi.Input<pulumi.Input<ContainerAppProbeHttpHeadersArgs>[] | undefined>;
    /**
     * Path to access on the HTTP server.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port: pulumi.Input<number>;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: pulumi.Input<string | enums.Scheme | undefined>;
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
    host?: pulumi.Input<string | undefined>;
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
    image?: pulumi.Input<string | undefined>;
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
    cpu?: pulumi.Input<number | undefined>;
    /**
     * Required GPU in cores for GPU based app, e.g. 1.0
     */
    gpu?: pulumi.Input<number | undefined>;
    /**
     * Required memory, e.g. "250Mb"
     */
    memory?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the session cookie's expiration.
 */
export interface CookieExpirationArgs {
    /**
     * The convention used when determining the session cookie's expiration.
     */
    convention?: pulumi.Input<enums.CookieExpirationConvention | undefined>;
    /**
     * The time after the request is made when the session cookie should expire.
     */
    timeToExpiration?: pulumi.Input<string | undefined>;
}

/**
 * Cross-Origin-Resource-Sharing policy
 */
export interface CorsPolicyArgs {
    /**
     * Specifies whether the resource allows credentials
     */
    allowCredentials?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the content for the access-control-allow-headers header
     */
    allowedHeaders?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Specifies the content for the access-control-allow-methods header
     */
    allowedMethods?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Specifies the content for the access-control-allow-origins header
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the content for the access-control-expose-headers header
     */
    exposeHeaders?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Specifies the content for the access-control-max-age header
     */
    maxAge?: pulumi.Input<number | undefined>;
}

/**
 * Custom container configuration.
 */
export interface CustomContainerTemplateArgs {
    /**
     * List of container definitions for the sessions of the session pool.
     */
    containers?: pulumi.Input<pulumi.Input<SessionContainerArgs>[] | undefined>;
    /**
     * Session pool ingress configuration.
     */
    ingress?: pulumi.Input<SessionIngressArgs | undefined>;
    /**
     * Private container registry credentials for containers used by the sessions of the session pool.
     */
    registryCredentials?: pulumi.Input<SessionRegistryCredentialsArgs | undefined>;
}

/**
 * Custom Domain of a Container App
 */
export interface CustomDomainArgs {
    /**
     * Custom Domain binding type.
     */
    bindingType?: pulumi.Input<string | enums.BindingType | undefined>;
    /**
     * Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment.
     */
    certificateId?: pulumi.Input<string | undefined>;
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
     * Certificate stored in Azure Key Vault.
     */
    certificateKeyVaultProperties?: pulumi.Input<CertificateKeyVaultPropertiesArgs | undefined>;
    /**
     * Certificate password
     */
    certificatePassword?: pulumi.Input<string | undefined>;
    /**
     * PFX or PEM blob
     */
    certificateValue?: pulumi.Input<string | undefined>;
    /**
     * Dns suffix for the environment domain
     */
    dnsSuffix?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the custom Open ID Connect provider.
 */
export interface CustomOpenIdConnectProviderArgs {
    /**
     * <code>false</code> if the custom Open ID provider provider should not be enabled; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow of the custom Open ID Connect provider.
     */
    login?: pulumi.Input<OpenIdConnectLoginArgs | undefined>;
    /**
     * The configuration settings of the app registration for the custom Open ID Connect provider.
     */
    registration?: pulumi.Input<OpenIdConnectRegistrationArgs | undefined>;
}

/**
 * Container App container Custom scaling rule.
 */
export interface CustomScaleRuleArgs {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[] | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Metadata properties to describe custom scale rule.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Type of the custom scale rule
     * eg: azure-servicebus, redis etc.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Container App Dapr configuration.
 */
export interface DaprArgs {
    /**
     * Dapr application health check configuration
     */
    appHealth?: pulumi.Input<DaprAppHealthArgs | undefined>;
    /**
     * Dapr application identifier
     */
    appId?: pulumi.Input<string | undefined>;
    /**
     * Tells Dapr which port your application is listening on
     */
    appPort?: pulumi.Input<number | undefined>;
    /**
     * Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http
     */
    appProtocol?: pulumi.Input<string | enums.AppProtocol | undefined>;
    /**
     * Enables API logging for the Dapr sidecar
     */
    enableApiLogging?: pulumi.Input<boolean | undefined>;
    /**
     * Boolean indicating if the Dapr side car is enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB.
     */
    httpMaxRequestSize?: pulumi.Input<number | undefined>;
    /**
     * Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB.
     */
    httpReadBufferSize?: pulumi.Input<number | undefined>;
    /**
     * Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info.
     */
    logLevel?: pulumi.Input<string | enums.LogLevel | undefined>;
    /**
     * Maximum number of concurrent requests, events handled by the Dapr sidecar
     */
    maxConcurrency?: pulumi.Input<number | undefined>;
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
 * Dapr application health check configuration
 */
export interface DaprAppHealthArgs {
    /**
     * Boolean indicating if the health probe is enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Path for the health probe
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Interval for the health probe in seconds
     */
    probeIntervalSeconds?: pulumi.Input<number | undefined>;
    /**
     * Timeout for the health probe in milliseconds
     */
    probeTimeoutMilliseconds?: pulumi.Input<number | undefined>;
    /**
     * Threshold for the health probe
     */
    threshold?: pulumi.Input<number | undefined>;
}

/**
 * Dapr Component Resiliency Policy Circuit Breaker Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyCircuitBreakerPolicyConfigurationArgs {
    /**
     * The number of consecutive errors before the circuit is opened.
     */
    consecutiveErrors?: pulumi.Input<number | undefined>;
    /**
     * The optional interval in seconds after which the error count resets to 0. An interval of 0 will never reset. If not specified, the timeoutInSeconds value will be used.
     */
    intervalInSeconds?: pulumi.Input<number | undefined>;
    /**
     * The interval in seconds until a retry attempt is made after the circuit is opened.
     */
    timeoutInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * Dapr Component Resiliency Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyConfigurationArgs {
    /**
     * The optional circuit breaker policy configuration
     */
    circuitBreakerPolicy?: pulumi.Input<DaprComponentResiliencyPolicyCircuitBreakerPolicyConfigurationArgs | undefined>;
    /**
     * The optional HTTP retry policy configuration
     */
    httpRetryPolicy?: pulumi.Input<DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationArgs | undefined>;
    /**
     * The optional timeout policy configuration
     */
    timeoutPolicy?: pulumi.Input<DaprComponentResiliencyPolicyTimeoutPolicyConfigurationArgs | undefined>;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Backoff Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationArgs {
    /**
     * The optional initial delay in milliseconds before an operation is retried
     */
    initialDelayInMilliseconds?: pulumi.Input<number | undefined>;
    /**
     * The optional maximum time interval in milliseconds between retry attempts
     */
    maxIntervalInMilliseconds?: pulumi.Input<number | undefined>;
}

/**
 * Dapr Component Resiliency Policy HTTP Retry Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyHttpRetryPolicyConfigurationArgs {
    /**
     * The optional maximum number of retries
     */
    maxRetries?: pulumi.Input<number | undefined>;
    /**
     * The optional retry backoff configuration
     */
    retryBackOff?: pulumi.Input<DaprComponentResiliencyPolicyHttpRetryBackOffConfigurationArgs | undefined>;
}

/**
 * Dapr Component Resiliency Policy Timeout Policy Configuration.
 */
export interface DaprComponentResiliencyPolicyTimeoutPolicyConfigurationArgs {
    /**
     * The optional response timeout in seconds
     */
    responseTimeoutInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * Configuration to bind a Dapr Component to a dev ContainerApp Service
 */
export interface DaprComponentServiceBindingArgs {
    /**
     * Service bind metadata
     */
    metadata?: pulumi.Input<DaprServiceBindMetadataArgs | undefined>;
    /**
     * Name of the service bind
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Resource id of the target service
     */
    serviceId?: pulumi.Input<string | undefined>;
}

/**
 * Dapr component metadata.
 */
export interface DaprMetadataArgs {
    /**
     * Metadata property name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Name of the Dapr Component secret from which to pull the metadata property value.
     */
    secretRef?: pulumi.Input<string | undefined>;
    /**
     * Metadata property value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Dapr component metadata.
 */
export interface DaprServiceBindMetadataArgs {
    /**
     * Service bind metadata property name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Service bind metadata property value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Dapr PubSub Bulk Subscription Options.
 */
export interface DaprSubscriptionBulkSubscribeOptionsArgs {
    /**
     * Enable bulk subscription
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Maximum duration in milliseconds to wait before a bulk message is sent to the app.
     */
    maxAwaitDurationMs?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of messages to deliver in a bulk message.
     */
    maxMessagesCount?: pulumi.Input<number | undefined>;
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
    match?: pulumi.Input<string | undefined>;
    /**
     * The path for events that match this rule
     */
    path?: pulumi.Input<string | undefined>;
}

/**
 * Dapr PubSub Event Subscription Routes configuration.
 */
export interface DaprSubscriptionRoutesArgs {
    /**
     * The default path to deliver events that do not match any of the rules.
     */
    default?: pulumi.Input<string | undefined>;
    /**
     * The list of Dapr PubSub Event Subscription Route Rules.
     */
    rules?: pulumi.Input<pulumi.Input<DaprSubscriptionRouteRuleArgs>[] | undefined>;
}

/**
 * Configuration of datadog
 */
export interface DataDogConfigurationArgs {
    /**
     * The data dog api key
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * The data dog site
     */
    site?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the Azure Active Directory default authorization policy.
 */
export interface DefaultAuthorizationPolicyArgs {
    /**
     * The configuration settings of the Azure Active Directory allowed applications.
     */
    allowedApplications?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the Azure Active Directory allowed principals.
     */
    allowedPrincipals?: pulumi.Input<AllowedPrincipalsArgs | undefined>;
}

/**
 * Default AI model configuration
 */
export interface DefaultModelArgs {
    /**
     * Model name (e.g., gpt-5, claude-opus-4-5, claude-sonnet-4-5)
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * AI provider name (e.g., MicrosoftFoundry, Anthropic)
     */
    provider?: pulumi.Input<string | undefined>;
}

/**
 * Configuration of Open Telemetry destinations
 */
export interface DestinationsConfigurationArgs {
    /**
     * Open telemetry datadog destination configuration
     */
    dataDogConfiguration?: pulumi.Input<DataDogConfigurationArgs | undefined>;
    /**
     * Open telemetry otlp configurations
     */
    otlpConfigurations?: pulumi.Input<pulumi.Input<OtlpConfigurationArgs>[] | undefined>;
}

/**
 * Configuration properties for disk encryption
 */
export interface DiskEncryptionConfigurationArgs {
    /**
     * The Key Vault that contains your key to use for disk encryption. The Key Vault must be in the same region as the Managed Environment.
     */
    keyVaultConfiguration?: pulumi.Input<DiskEncryptionConfigurationKeyVaultConfigurationArgs | undefined>;
}

/**
 * Configuration properties for the authentication to the Key Vault
 */
export interface DiskEncryptionConfigurationAuthArgs {
    /**
     * Resource ID of a user-assigned managed identity to authenticate to the Key Vault. The identity must be assigned to the managed environment, in the same tenant as the Key Vault, and it must have the following key permissions on the Key Vault: wrapkey, unwrapkey, get.
     */
    identity?: pulumi.Input<string | undefined>;
}

/**
 * The Key Vault that contains your key to use for disk encryption. The Key Vault must be in the same region as the Managed Environment.
 */
export interface DiskEncryptionConfigurationKeyVaultConfigurationArgs {
    /**
     * Configuration properties for the authentication to the Key Vault
     */
    auth?: pulumi.Input<DiskEncryptionConfigurationAuthArgs | undefined>;
    /**
     * Key URL pointing to a key in KeyVault. Version segment of the Url is required.
     */
    keyUrl?: pulumi.Input<string | undefined>;
}

/**
 * Configuration properties for a .NET Component
 */
export interface DotNetComponentConfigurationPropertyArgs {
    /**
     * The name of the property
     */
    propertyName?: pulumi.Input<string | undefined>;
    /**
     * The value of the property
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Configuration to bind a .NET Component to another .NET Component
 */
export interface DotNetComponentServiceBindArgs {
    /**
     * Name of the service bind
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Resource id of the target service
     */
    serviceId?: pulumi.Input<string | undefined>;
}

/**
 * Dynamic pool configuration.
 */
export interface DynamicPoolConfigurationArgs {
    /**
     * The lifecycle configuration of a session in the dynamic session pool
     */
    lifecycleConfiguration?: pulumi.Input<LifecycleConfigurationArgs | undefined>;
}

/**
 * The configuration settings of the secrets references of encryption key and signing key for ContainerApp Service Authentication/Authorization.
 */
export interface EncryptionSettingsArgs {
    /**
     * The secret name which is referenced for EncryptionKey.
     */
    containerAppAuthEncryptionSecretName?: pulumi.Input<string | undefined>;
    /**
     * The secret name which is referenced for SigningKey.
     */
    containerAppAuthSigningSecretName?: pulumi.Input<string | undefined>;
}

/**
 * Container App container environment variable.
 */
export interface EnvironmentVarArgs {
    /**
     * Environment variable name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Name of the Container App secret from which to pull the environment variable value.
     */
    secretRef?: pulumi.Input<string | undefined>;
    /**
     * Non-secret environment variable value.
     */
    value?: pulumi.Input<string | undefined>;
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
    name?: pulumi.Input<string | undefined>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes | undefined>;
}

/**
 * The configuration settings of the Facebook provider.
 */
export interface FacebookArgs {
    /**
     * <code>false</code> if the Facebook provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The version of the Facebook api to be used while logging in.
     */
    graphApiVersion?: pulumi.Input<string | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the Facebook provider.
     */
    registration?: pulumi.Input<AppRegistrationArgs | undefined>;
}

/**
 * The configuration settings of a forward proxy used to make the requests.
 */
export interface ForwardProxyArgs {
    /**
     * The convention used to determine the url of the request made.
     */
    convention?: pulumi.Input<enums.ForwardProxyConvention | undefined>;
    /**
     * The name of the header containing the host of the request.
     */
    customHostHeaderName?: pulumi.Input<string | undefined>;
    /**
     * The name of the header containing the scheme of the request.
     */
    customProtoHeaderName?: pulumi.Input<string | undefined>;
}

/**
 * Configuration for a Geneva action
 */
export interface GenevaActionConfigArgs {
    /**
     * Name of the Geneva action
     */
    actionName?: pulumi.Input<string | undefined>;
    /**
     * Parameters for the Geneva action
     */
    actionParameters?: pulumi.Input<pulumi.Input<GenevaActionParameterArgs>[] | undefined>;
    /**
     * Indicates whether approval is required for this action
     */
    approvalRequired?: pulumi.Input<boolean | undefined>;
    /**
     * Extension associated with the action
     */
    extension?: pulumi.Input<string | undefined>;
}

/**
 * Parameter for a Geneva action
 */
export interface GenevaActionParameterArgs {
    /**
     * Name of the parameter
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Type of the parameter
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Geneva Actions policy configuration for Agent Space
 */
export interface GenevaActionsPolicyArgs {
    /**
     * ACIS (Azure Container Instance Service) endpoint URL
     */
    acisEndpoint?: pulumi.Input<string | undefined>;
    /**
     * Collection of allowed Geneva actions
     */
    allowedActions?: pulumi.Input<pulumi.Input<GenevaActionConfigArgs>[] | undefined>;
    /**
     * Authentication mode for Geneva Actions
     */
    authenticationMode?: pulumi.Input<string | enums.GenevaActionAuthenticationMode | undefined>;
    /**
     * Subject name of the certificate used for authentication
     */
    certificateSubjectName?: pulumi.Input<string | undefined>;
    /**
     * Client ID for authentication
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Name of the Geneva extension
     */
    extensionName: pulumi.Input<string>;
}

/**
 * The configuration settings of the GitHub provider.
 */
export interface GitHubArgs {
    /**
     * <code>false</code> if the GitHub provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the GitHub provider.
     */
    registration?: pulumi.Input<ClientRegistrationArgs | undefined>;
}

/**
 * Configuration properties that define the mutable settings of a Container App SourceControl
 */
export interface GithubActionConfigurationArgs {
    /**
     * AzureCredentials configurations.
     */
    azureCredentials?: pulumi.Input<AzureCredentialsArgs | undefined>;
    /**
     * List of environment variables to be passed to the build.
     */
    buildEnvironmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[] | undefined>;
    /**
     * Context path
     */
    contextPath?: pulumi.Input<string | undefined>;
    /**
     * Dockerfile path
     */
    dockerfilePath?: pulumi.Input<string | undefined>;
    /**
     * One time Github PAT to configure github environment
     */
    githubPersonalAccessToken?: pulumi.Input<string | undefined>;
    /**
     * Image name
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * Operation system
     */
    os?: pulumi.Input<string | undefined>;
    /**
     * Code or Image
     */
    publishType?: pulumi.Input<string | undefined>;
    /**
     * Registry configurations.
     */
    registryInfo?: pulumi.Input<RegistryInfoArgs | undefined>;
    /**
     * Runtime stack
     */
    runtimeStack?: pulumi.Input<string | undefined>;
    /**
     * Runtime version
     */
    runtimeVersion?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings that determines the validation flow of users using ContainerApp Service Authentication/Authorization.
 */
export interface GlobalValidationArgs {
    /**
     * The paths for which unauthenticated flow would not be redirected to the login page.
     */
    excludedPaths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    redirectToProvider?: pulumi.Input<string | undefined>;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    unauthenticatedClientAction?: pulumi.Input<enums.UnauthenticatedClientActionV2 | undefined>;
}

/**
 * The configuration settings of the Google provider.
 */
export interface GoogleArgs {
    /**
     * <code>false</code> if the Google provider should not be enabled despite the set registration; otherwise, <code>true</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the login flow.
     */
    login?: pulumi.Input<LoginScopesArgs | undefined>;
    /**
     * The configuration settings of the app registration for the Google provider.
     */
    registration?: pulumi.Input<ClientRegistrationArgs | undefined>;
    /**
     * The configuration settings of the Azure Active Directory token validation flow.
     */
    validation?: pulumi.Input<AllowedAudiencesValidationArgs | undefined>;
}

/**
 * Header of otlp configuration
 */
export interface HeaderArgs {
    /**
     * The key of otlp configuration header
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * The value of otlp configuration header
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Conditions required to match a header
 */
export interface HeaderMatchArgs {
    /**
     * Exact value of the header
     */
    exactMatch?: pulumi.Input<string | undefined>;
    /**
     * Name of the header
     */
    header?: pulumi.Input<string | undefined>;
    /**
     * Prefix value of the header
     */
    prefixMatch?: pulumi.Input<string | undefined>;
    /**
     * Regex value of the header
     */
    regexMatch?: pulumi.Input<string | undefined>;
    /**
     * Suffix value of the header
     */
    suffixMatch?: pulumi.Input<string | undefined>;
}

/**
 * Defines parameters for http connection pooling
 */
export interface HttpConnectionPoolArgs {
    /**
     * Maximum number of pending http1 requests allowed
     */
    http1MaxPendingRequests?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of http2 requests allowed
     */
    http2MaxRequests?: pulumi.Input<number | undefined>;
}

/**
 * Model representing a http get request.
 */
export interface HttpGetArgs {
    /**
     * Name of the file that the request should be saved to.
     */
    fileName?: pulumi.Input<string | undefined>;
    /**
     * List of headers to send with the request.
     */
    headers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    errors?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Headers that must be present for a request to be retried
     */
    headers?: pulumi.Input<pulumi.Input<HeaderMatchArgs>[] | undefined>;
    /**
     * Additional http status codes that can trigger a retry
     */
    httpStatusCodes?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * Initial delay, in milliseconds, before retrying a request
     */
    initialDelayInMilliseconds?: pulumi.Input<number | undefined>;
    /**
     * Maximum interval, in milliseconds, between retries
     */
    maxIntervalInMilliseconds?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of times a request will retry
     */
    maxRetries?: pulumi.Input<number | undefined>;
}

/**
 * Http Routes configuration, including paths to match on and whether or not rewrites are to be done.
 */
export interface HttpRouteArgs {
    /**
     * Once route is matched, what is the desired action
     */
    action?: pulumi.Input<HttpRouteActionArgs | undefined>;
    /**
     * Conditions route will match on
     */
    match?: pulumi.Input<HttpRouteMatchArgs | undefined>;
}

/**
 * Action to perform once matching of routes is done
 */
export interface HttpRouteActionArgs {
    /**
     * Rewrite prefix, default is no rewrites
     */
    prefixRewrite?: pulumi.Input<string | undefined>;
}

/**
 * Http Route Config properties
 */
export interface HttpRouteConfigPropertiesArgs {
    /**
     * Custom domain bindings for http Routes' hostnames.
     */
    customDomains?: pulumi.Input<pulumi.Input<CustomDomainArgs>[] | undefined>;
    /**
     * Routing Rules for http route resource.
     */
    rules?: pulumi.Input<pulumi.Input<HttpRouteRuleArgs>[] | undefined>;
}

/**
 * Criteria to match on
 */
export interface HttpRouteMatchArgs {
    /**
     * path case sensitive, default is true
     */
    caseSensitive?: pulumi.Input<boolean | undefined>;
    /**
     * match on exact path
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * match on all prefix's. Not exact
     */
    pathSeparatedPrefix?: pulumi.Input<string | undefined>;
    /**
     * match on all prefix's. Not exact
     */
    prefix?: pulumi.Input<string | undefined>;
}

/**
 * Http Route rule.
 */
export interface HttpRouteRuleArgs {
    /**
     * Description of rule. Optional.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Routing configuration that will allow matches on specific paths/headers.
     */
    routes?: pulumi.Input<pulumi.Input<HttpRouteArgs>[] | undefined>;
    /**
     * Targets- container apps, revisions, labels
     */
    targets?: pulumi.Input<pulumi.Input<HttpRouteTargetArgs>[] | undefined>;
}

/**
 * Targets - Container App Names, Revision Names, Labels.
 */
export interface HttpRouteTargetArgs {
    /**
     * Container App Name to route requests to
     */
    containerApp: pulumi.Input<string>;
    /**
     * Label/Revision to route requests to
     */
    label?: pulumi.Input<string | undefined>;
    /**
     * Revision to route requests to
     */
    revision?: pulumi.Input<string | undefined>;
    /**
     * Weighted routing
     */
    weight?: pulumi.Input<number | undefined>;
}

/**
 * Container App container Http scaling rule.
 */
export interface HttpScaleRuleArgs {
    /**
     * Authentication secrets for the custom scale rule.
     */
    auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[] | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Metadata properties to describe http scale rule.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization.
 */
export interface HttpSettingsArgs {
    /**
     * The configuration settings of a forward proxy used to make the requests.
     */
    forwardProxy?: pulumi.Input<ForwardProxyArgs | undefined>;
    /**
     * <code>false</code> if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, <code>true</code>.
     */
    requireHttps?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the paths HTTP requests.
     */
    routes?: pulumi.Input<HttpSettingsRoutesArgs | undefined>;
}

/**
 * The configuration settings of the paths HTTP requests.
 */
export interface HttpSettingsRoutesArgs {
    /**
     * The prefix that should precede all the authentication/authorization paths.
     */
    apiPrefix?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization.
 */
export interface IdentityProvidersArgs {
    /**
     * The configuration settings of the Apple provider.
     */
    apple?: pulumi.Input<AppleArgs | undefined>;
    /**
     * The configuration settings of the Azure Active directory provider.
     */
    azureActiveDirectory?: pulumi.Input<AzureActiveDirectoryArgs | undefined>;
    /**
     * The configuration settings of the Azure Static Web Apps provider.
     */
    azureStaticWebApps?: pulumi.Input<AzureStaticWebAppsArgs | undefined>;
    /**
     * The map of the name of the alias of each custom Open ID Connect provider to the
     * configuration settings of the custom Open ID Connect provider.
     */
    customOpenIdConnectProviders?: pulumi.Input<{[key: string]: pulumi.Input<CustomOpenIdConnectProviderArgs>} | undefined>;
    /**
     * The configuration settings of the Facebook provider.
     */
    facebook?: pulumi.Input<FacebookArgs | undefined>;
    /**
     * The configuration settings of the GitHub provider.
     */
    gitHub?: pulumi.Input<GitHubArgs | undefined>;
    /**
     * The configuration settings of the Google provider.
     */
    google?: pulumi.Input<GoogleArgs | undefined>;
    /**
     * The configuration settings of the Twitter provider.
     */
    twitter?: pulumi.Input<TwitterArgs | undefined>;
}

/**
 * Optional settings for a Managed Identity that is assigned to the Container App.
 */
export interface IdentitySettingsArgs {
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity: pulumi.Input<string>;
    /**
     * Use to select the lifecycle stages of a Container App during which the Managed Identity should be available.
     */
    lifecycle?: pulumi.Input<string | enums.IdentitySettingsLifeCycle | undefined>;
}
/**
 * identitySettingsArgsProvideDefaults sets the appropriate defaults for IdentitySettingsArgs
 */
export function identitySettingsArgsProvideDefaults(val: IdentitySettingsArgs): IdentitySettingsArgs {
    return {
        ...val,
        lifecycle: (val.lifecycle) ?? "All",
    };
}

/**
 * Incident Management Configurations
 */
export interface IncidentManagementConfigurationArgs {
    /**
     * The key for the connection
     */
    connectionKey?: pulumi.Input<string | undefined>;
    /**
     * The name of the connection
     */
    connectionName?: pulumi.Input<string | undefined>;
    /**
     * The URL of the connection
     */
    connectionUrl?: pulumi.Input<string | undefined>;
    /**
     * The user for the connection
     */
    oboUser?: pulumi.Input<string | undefined>;
    /**
     * The type of incident management system
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Container App Ingress configuration.
 */
export interface IngressArgs {
    /**
     * Settings to expose additional ports on container app
     */
    additionalPortMappings?: pulumi.Input<pulumi.Input<IngressPortMappingArgs>[] | undefined>;
    /**
     * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
     */
    allowInsecure?: pulumi.Input<boolean | undefined>;
    /**
     * Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate.
     */
    clientCertificateMode?: pulumi.Input<string | enums.IngressClientCertificateMode | undefined>;
    /**
     * CORS policy for container app
     */
    corsPolicy?: pulumi.Input<CorsPolicyArgs | undefined>;
    /**
     * custom domain bindings for Container Apps' hostnames.
     */
    customDomains?: pulumi.Input<pulumi.Input<CustomDomainArgs>[] | undefined>;
    /**
     * Exposed Port in containers for TCP traffic from ingress
     */
    exposedPort?: pulumi.Input<number | undefined>;
    /**
     * Bool indicating if app exposes an external http endpoint
     */
    external?: pulumi.Input<boolean | undefined>;
    /**
     * Rules to restrict incoming IP address.
     */
    ipSecurityRestrictions?: pulumi.Input<pulumi.Input<IpSecurityRestrictionRuleArgs>[] | undefined>;
    /**
     * Sticky Sessions for Single Revision Mode
     */
    stickySessions?: pulumi.Input<IngressStickySessionsArgs | undefined>;
    /**
     * Target Port in containers for traffic from ingress
     */
    targetPort?: pulumi.Input<number | undefined>;
    /**
     * Whether an http app listens on http or https
     */
    targetPortHttpScheme?: pulumi.Input<string | enums.IngressTargetPortHttpScheme | undefined>;
    /**
     * Traffic weights for app's revisions
     */
    traffic?: pulumi.Input<pulumi.Input<TrafficWeightArgs>[] | undefined>;
    /**
     * Ingress transport protocol
     */
    transport?: pulumi.Input<string | enums.IngressTransportMethod | undefined>;
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
 * Settings for the ingress component, including workload profile, scaling, and connection handling.
 */
export interface IngressConfigurationArgs {
    /**
     * Maximum number of headers per request allowed by the ingress. Must be at least 1. Defaults to 100.
     */
    headerCountLimit?: pulumi.Input<number | undefined>;
    /**
     * Duration (in minutes) before idle requests are timed out. Must be at least 1 minute. Defaults to 4 minutes.
     */
    requestIdleTimeout?: pulumi.Input<number | undefined>;
    /**
     * Scaling configuration for the ingress component. Required.
     */
    scale?: pulumi.Input<IngressConfigurationScaleArgs | undefined>;
    /**
     * Time (in seconds) to allow active connections to complete on termination. Must be between 0 and 3600. Defaults to 480 seconds.
     */
    terminationGracePeriodSeconds?: pulumi.Input<number | undefined>;
    /**
     * Name of the workload profile used by the ingress component. Required.
     */
    workloadProfileName?: pulumi.Input<string | undefined>;
}

/**
 * Scaling configuration for the ingress component. Required.
 */
export interface IngressConfigurationScaleArgs {
    /**
     * Maximum number of ingress replicas. Must be greater than or equal to minReplicas.
     */
    maxReplicas?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of ingress replicas. Must be at least 2. Required.
     */
    minReplicas?: pulumi.Input<number | undefined>;
}

/**
 * Port mappings of container app ingress
 */
export interface IngressPortMappingArgs {
    /**
     * Specifies the exposed port for the target port. If not specified, it defaults to target port
     */
    exposedPort?: pulumi.Input<number | undefined>;
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
    affinity?: pulumi.Input<string | enums.Affinity | undefined>;
}

/**
 * Container App init container definition
 */
export interface InitContainerArgs {
    /**
     * Container start command arguments.
     */
    args?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container start command.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container environment variables.
     */
    env?: pulumi.Input<pulumi.Input<EnvironmentVarArgs>[] | undefined>;
    /**
     * Container image tag.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * The type of the image. Set to CloudBuild to let the system manages the image, where user will not be able to update image through image field. Set to ContainerImage for user provided image.
     */
    imageType?: pulumi.Input<string | enums.ImageType | undefined>;
    /**
     * Custom container name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Container resource requirements.
     */
    resources?: pulumi.Input<ContainerResourcesArgs | undefined>;
    /**
     * Container volume mounts.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[] | undefined>;
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
    description?: pulumi.Input<string | undefined>;
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
 * Configuration properties for a Java Component
 */
export interface JavaComponentConfigurationPropertyArgs {
    /**
     * The name of the property
     */
    propertyName?: pulumi.Input<string | undefined>;
    /**
     * The value of the property
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Java component scaling configurations
 */
export interface JavaComponentPropertiesScaleArgs {
    /**
     * Optional. Maximum number of Java component replicas
     */
    maxReplicas?: pulumi.Input<number | undefined>;
    /**
     * Optional. Minimum number of Java component replicas. Defaults to 1 if not set
     */
    minReplicas?: pulumi.Input<number | undefined>;
}

/**
 * Configuration to bind a Java Component to another Java Component
 */
export interface JavaComponentServiceBindArgs {
    /**
     * Name of the service bind
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Resource id of the target service
     */
    serviceId?: pulumi.Input<string | undefined>;
}

/**
 * Non versioned Container Apps Job configuration properties
 */
export interface JobConfigurationArgs {
    /**
     * Trigger configuration of an event driven job.
     */
    eventTriggerConfig?: pulumi.Input<JobConfigurationEventTriggerConfigArgs | undefined>;
    /**
     * Optional settings for Managed Identities that are assigned to the Container App Job. If a Managed Identity is not specified here, default settings will be used.
     */
    identitySettings?: pulumi.Input<pulumi.Input<IdentitySettingsArgs>[] | undefined>;
    /**
     * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
     */
    manualTriggerConfig?: pulumi.Input<JobConfigurationManualTriggerConfigArgs | undefined>;
    /**
     * Collection of private container registry credentials used by a Container apps job
     */
    registries?: pulumi.Input<pulumi.Input<RegistryCredentialsArgs>[] | undefined>;
    /**
     * Maximum number of retries before failing the job.
     */
    replicaRetryLimit?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of seconds a replica is allowed to run.
     */
    replicaTimeout: pulumi.Input<number>;
    /**
     * Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default
     */
    scheduleTriggerConfig?: pulumi.Input<JobConfigurationScheduleTriggerConfigArgs | undefined>;
    /**
     * Collection of secrets used by a Container Apps Job
     */
    secrets?: pulumi.Input<pulumi.Input<SecretArgs>[] | undefined>;
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
        eventTriggerConfig: pulumi.output(val.eventTriggerConfig).apply(v => v === undefined ? undefined : jobConfigurationEventTriggerConfigArgsProvideDefaults(v)),
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
    parallelism?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: pulumi.Input<number | undefined>;
    /**
     * Scaling configurations for event driven jobs.
     */
    scale?: pulumi.Input<JobScaleArgs | undefined>;
}
/**
 * jobConfigurationEventTriggerConfigArgsProvideDefaults sets the appropriate defaults for JobConfigurationEventTriggerConfigArgs
 */
export function jobConfigurationEventTriggerConfigArgsProvideDefaults(val: JobConfigurationEventTriggerConfigArgs): JobConfigurationEventTriggerConfigArgs {
    return {
        ...val,
        scale: pulumi.output(val.scale).apply(v => v === undefined ? undefined : jobScaleArgsProvideDefaults(v)),
    };
}

/**
 * Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default
 */
export interface JobConfigurationManualTriggerConfigArgs {
    /**
     * Number of parallel replicas of a job that can run at a given time.
     */
    parallelism?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: pulumi.Input<number | undefined>;
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
    parallelism?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of successful replica completions before overall job completion.
     */
    replicaCompletionCount?: pulumi.Input<number | undefined>;
}

/**
 * Scaling configurations for event driven jobs.
 */
export interface JobScaleArgs {
    /**
     * Maximum number of job executions that are created for a trigger, default 100.
     */
    maxExecutions?: pulumi.Input<number | undefined>;
    /**
     * Minimum number of job executions that are created for a trigger, default 0
     */
    minExecutions?: pulumi.Input<number | undefined>;
    /**
     * Interval to check each event source in seconds. Defaults to 30s
     */
    pollingInterval?: pulumi.Input<number | undefined>;
    /**
     * Scaling rules.
     */
    rules?: pulumi.Input<pulumi.Input<JobScaleRuleArgs>[] | undefined>;
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
    auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[] | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the job, or 'system' for system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Metadata properties to describe the scale rule.
     */
    metadata?: any | undefined;
    /**
     * Scale Rule Name
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Type of the scale rule
     * eg: azure-servicebus, redis etc.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Container Apps Job versioned application definition. Defines the desired state of an immutable revision. Any changes to this section Will result in a new revision being created
 */
export interface JobTemplateArgs {
    /**
     * List of container definitions for the Container App.
     */
    containers?: pulumi.Input<pulumi.Input<ContainerArgs>[] | undefined>;
    /**
     * List of specialized containers that run before app containers.
     */
    initContainers?: pulumi.Input<pulumi.Input<InitContainerArgs>[] | undefined>;
    /**
     * List of volume definitions for the Container App.
     */
    volumes?: pulumi.Input<pulumi.Input<VolumeArgs>[] | undefined>;
}

/**
 * The configuration settings of the checks that should be made while validating the JWT Claims.
 */
export interface JwtClaimChecksArgs {
    /**
     * The list of the allowed client applications.
     */
    allowedClientApplications?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of the allowed groups.
     */
    allowedGroups?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Knowledge graph configuration for agent
 */
export interface KnowledgeGraphConfigurationArgs {
    /**
     * The identity used to access the knowledge graph
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The list of resources managed by agent
     */
    managedResources?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The lifecycle configuration properties of a session in the dynamic session pool
 */
export interface LifecycleConfigurationArgs {
    /**
     * The cooldown period of a session in seconds when the lifecycle type is 'Timed'.
     */
    cooldownPeriodInSeconds?: pulumi.Input<number | undefined>;
    /**
     * The lifecycle type of the session pool.
     */
    lifecycleType?: pulumi.Input<string | enums.LifecycleType | undefined>;
    /**
     * The maximum alive period of a session in seconds when the lifecycle type is 'OnContainerExit'.
     */
    maxAlivePeriodInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
 */
export interface LogAnalyticsConfigurationArgs {
    /**
     * Log analytics customer id
     */
    customerId?: pulumi.Input<string | undefined>;
    /**
     * Boolean indicating whether to parse json string log into dynamic json columns
     */
    dynamicJsonColumns?: pulumi.Input<boolean | undefined>;
    /**
     * Log analytics customer key
     */
    sharedKey?: pulumi.Input<string | undefined>;
}

/**
 * Log Configurations
 */
export interface LogConfigurationArgs {
    /**
     * Application Insights Configuration
     */
    applicationInsightsConfiguration?: pulumi.Input<ApplicationInsightsConfigurationArgs | undefined>;
}

/**
 * Logger settings for java workloads.
 */
export interface LoggerSettingArgs {
    /**
     * The specified logger's log level.
     */
    level: pulumi.Input<string | enums.Level>;
    /**
     * Logger name.
     */
    logger: pulumi.Input<string>;
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
    allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The configuration settings of the session cookie's expiration.
     */
    cookieExpiration?: pulumi.Input<CookieExpirationArgs | undefined>;
    /**
     * The configuration settings of the nonce used in the login flow.
     */
    nonce?: pulumi.Input<NonceArgs | undefined>;
    /**
     * <code>true</code> if the fragments from the request are preserved after the login request is made; otherwise, <code>false</code>.
     */
    preserveUrlFragmentsForLogins?: pulumi.Input<boolean | undefined>;
    /**
     * The routes that specify the endpoints used for login and logout requests.
     */
    routes?: pulumi.Input<LoginRoutesArgs | undefined>;
    /**
     * The configuration settings of the token store.
     */
    tokenStore?: pulumi.Input<TokenStoreArgs | undefined>;
}

/**
 * The routes that specify the endpoints used for login and logout requests.
 */
export interface LoginRoutesArgs {
    /**
     * The endpoint at which a logout request should be made.
     */
    logoutEndpoint?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the login flow, including the scopes that should be requested.
 */
export interface LoginScopesArgs {
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Configuration of Open Telemetry logs
 */
export interface LogsConfigurationArgs {
    /**
     * Open telemetry logs destinations
     */
    destinations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Certificate resource specific properties
 */
export interface ManagedCertificatePropertiesArgs {
    /**
     * Selected type of domain control validation for managed certificates.
     */
    domainControlValidation?: pulumi.Input<string | enums.ManagedCertificateDomainControlValidation | undefined>;
    /**
     * Subject name of the certificate.
     */
    subjectName?: pulumi.Input<string | undefined>;
}

/**
 * Peer traffic encryption settings for the Managed Environment
 */
export interface ManagedEnvironmentEncryptionArgs {
    /**
     * Boolean indicating whether the peer traffic encryption is enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Peer authentication settings for the Managed Environment
 */
export interface ManagedEnvironmentPeerAuthenticationArgs {
    /**
     * Mutual TLS authentication settings for the Managed Environment
     */
    mtls?: pulumi.Input<MtlsArgs | undefined>;
}

/**
 * Peer traffic settings for the Managed Environment
 */
export interface ManagedEnvironmentPeerTrafficConfigurationArgs {
    /**
     * Peer traffic encryption settings for the Managed Environment
     */
    encryption?: pulumi.Input<ManagedEnvironmentEncryptionArgs | undefined>;
}

/**
 * Storage properties
 */
export interface ManagedEnvironmentStoragePropertiesArgs {
    /**
     * Azure file properties
     */
    azureFile?: pulumi.Input<AzureFilePropertiesArgs | undefined>;
    /**
     * NFS Azure file properties
     */
    nfsAzureFile?: pulumi.Input<NfsAzureFilePropertiesArgs | undefined>;
}

/**
 * Optional settings for a Managed Identity that is assigned to the Session pool.
 */
export interface ManagedIdentitySettingArgs {
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Session Pool, or 'system' for system-assigned identity.
     */
    identity: pulumi.Input<string>;
    /**
     * Use to select the lifecycle stages of a Session Pool during which the Managed Identity should be available.
     */
    lifecycle?: pulumi.Input<string | enums.IdentitySettingsLifeCycle | undefined>;
}
/**
 * managedIdentitySettingArgsProvideDefaults sets the appropriate defaults for ManagedIdentitySettingArgs
 */
export function managedIdentitySettingArgsProvideDefaults(val: ManagedIdentitySettingArgs): ManagedIdentitySettingArgs {
    return {
        ...val,
        lifecycle: (val.lifecycle) ?? "None",
    };
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Configuration of Open Telemetry metrics
 */
export interface MetricsConfigurationArgs {
    /**
     * Open telemetry metrics destinations
     */
    destinations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Boolean indicating if including keda metrics
     */
    includeKeda?: pulumi.Input<boolean | undefined>;
}

/**
 * Configuration properties for mutual TLS authentication
 */
export interface MtlsArgs {
    /**
     * Boolean indicating whether the mutual TLS authentication is enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Nacos properties.
 */
export interface NacosComponentArgs {
    /**
     * Type of the Java Component.
     * Expected value is 'Nacos'.
     */
    componentType: pulumi.Input<"Nacos">;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<JavaComponentConfigurationPropertyArgs>[] | undefined>;
    /**
     * Java component scaling configurations
     */
    scale?: pulumi.Input<JavaComponentPropertiesScaleArgs | undefined>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<JavaComponentServiceBindArgs>[] | undefined>;
}

/**
 * NFS Azure File Properties.
 */
export interface NfsAzureFilePropertiesArgs {
    /**
     * Access mode for storage
     */
    accessMode?: pulumi.Input<string | enums.AccessMode | undefined>;
    /**
     * Server for NFS azure file.
     */
    server?: pulumi.Input<string | undefined>;
    /**
     * NFS Azure file share name.
     */
    shareName?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the nonce used in the login flow.
 */
export interface NonceArgs {
    /**
     * The time after the request is made when the nonce should expire.
     */
    nonceExpirationInterval?: pulumi.Input<string | undefined>;
    /**
     * <code>false</code> if the nonce should not be validated while completing the login flow; otherwise, <code>true</code>.
     */
    validateNonce?: pulumi.Input<boolean | undefined>;
}

/**
 * The authentication client credentials of the custom Open ID Connect provider.
 */
export interface OpenIdConnectClientCredentialArgs {
    /**
     * The app setting that contains the client secret for the custom Open ID Connect provider.
     */
    clientSecretSettingName?: pulumi.Input<string | undefined>;
    /**
     * The method that should be used to authenticate the user.
     */
    method?: pulumi.Input<enums.ClientCredentialMethod | undefined>;
}

/**
 * The configuration settings of the endpoints used for the custom Open ID Connect provider.
 */
export interface OpenIdConnectConfigArgs {
    /**
     * The endpoint to be used to make an authorization request.
     */
    authorizationEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that provides the keys necessary to validate the token.
     */
    certificationUri?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that issues the token.
     */
    issuer?: pulumi.Input<string | undefined>;
    /**
     * The endpoint to be used to request a token.
     */
    tokenEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The endpoint that contains all the configuration endpoints for the provider.
     */
    wellKnownOpenIdConfiguration?: pulumi.Input<string | undefined>;
}

/**
 * The configuration settings of the login flow of the custom Open ID Connect provider.
 */
export interface OpenIdConnectLoginArgs {
    /**
     * The name of the claim that contains the users name.
     */
    nameClaimType?: pulumi.Input<string | undefined>;
    /**
     * A list of the scopes that should be requested while authenticating.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The configuration settings of the app registration for the custom Open ID Connect provider.
 */
export interface OpenIdConnectRegistrationArgs {
    /**
     * The authentication credentials of the custom Open ID Connect provider.
     */
    clientCredential?: pulumi.Input<OpenIdConnectClientCredentialArgs | undefined>;
    /**
     * The client id of the custom Open ID Connect provider.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The configuration settings of the endpoints used for the custom Open ID Connect provider.
     */
    openIdConnectConfiguration?: pulumi.Input<OpenIdConnectConfigArgs | undefined>;
}

/**
 * Configuration of Open Telemetry
 */
export interface OpenTelemetryConfigurationArgs {
    /**
     * Open telemetry destinations configuration
     */
    destinationsConfiguration?: pulumi.Input<DestinationsConfigurationArgs | undefined>;
    /**
     * Open telemetry logs configuration
     */
    logsConfiguration?: pulumi.Input<LogsConfigurationArgs | undefined>;
    /**
     * Open telemetry metrics configuration
     */
    metricsConfiguration?: pulumi.Input<MetricsConfigurationArgs | undefined>;
    /**
     * Open telemetry trace configuration
     */
    tracesConfiguration?: pulumi.Input<TracesConfigurationArgs | undefined>;
}

/**
 * Configuration of otlp
 */
export interface OtlpConfigurationArgs {
    /**
     * The endpoint of otlp configuration
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * Headers of otlp configurations
     */
    headers?: pulumi.Input<pulumi.Input<HeaderArgs>[] | undefined>;
    /**
     * Boolean indicating if otlp configuration is insecure
     */
    insecure?: pulumi.Input<boolean | undefined>;
    /**
     * The name of otlp configuration
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Model representing a pre-build step.
 */
export interface PreBuildStepArgs {
    /**
     * Description of the pre-build step.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Http get request to send before the build.
     */
    httpGet?: pulumi.Input<HttpGetArgs | undefined>;
    /**
     * List of custom commands to run.
     */
    scripts?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * Container App container Azure Queue based scaling rule.
 */
export interface QueueScaleRuleArgs {
    /**
     * Storage account name. required if using managed identity to authenticate
     */
    accountName?: pulumi.Input<string | undefined>;
    /**
     * Authentication secrets for the queue scale rule.
     */
    auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[] | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Queue length.
     */
    queueLength?: pulumi.Input<number | undefined>;
    /**
     * Queue name.
     */
    queueName?: pulumi.Input<string | undefined>;
}

/**
 * Container App Private Registry
 */
export interface RegistryCredentialsArgs {
    /**
     * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The name of the Secret that contains the registry login password
     */
    passwordSecretRef?: pulumi.Input<string | undefined>;
    /**
     * Container Registry Server
     */
    server?: pulumi.Input<string | undefined>;
    /**
     * Container Registry Username
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * Container App registry information.
 */
export interface RegistryInfoArgs {
    /**
     * registry secret.
     */
    registryPassword?: pulumi.Input<string | undefined>;
    /**
     * registry server Url.
     */
    registryUrl?: pulumi.Input<string | undefined>;
    /**
     * registry username.
     */
    registryUserName?: pulumi.Input<string | undefined>;
}

/**
 * Container App Runtime configuration.
 */
export interface RuntimeArgs {
    /**
     * .NET app configuration
     */
    dotnet?: pulumi.Input<RuntimeDotnetArgs | undefined>;
    /**
     * Java app configuration
     */
    java?: pulumi.Input<RuntimeJavaArgs | undefined>;
}

/**
 * .NET app configuration
 */
export interface RuntimeDotnetArgs {
    /**
     * Auto configure the ASP.NET Core Data Protection feature
     */
    autoConfigureDataProtection?: pulumi.Input<boolean | undefined>;
}

/**
 * Java app configuration
 */
export interface RuntimeJavaArgs {
    /**
     * Enable jmx core metrics for the java app
     */
    enableMetrics?: pulumi.Input<boolean | undefined>;
    /**
     * Diagnostic capabilities achieved by java agent
     */
    javaAgent?: pulumi.Input<RuntimeJavaAgentArgs | undefined>;
}

/**
 * Diagnostic capabilities achieved by java agent
 */
export interface RuntimeJavaAgentArgs {
    /**
     * Enable java agent injection for the java app.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Capabilities on the java logging scenario.
     */
    logging?: pulumi.Input<RuntimeLoggingArgs | undefined>;
}

/**
 * Capabilities on the java logging scenario.
 */
export interface RuntimeLoggingArgs {
    /**
     * Settings of the logger for the java app.
     */
    loggerSettings?: pulumi.Input<pulumi.Input<LoggerSettingArgs>[] | undefined>;
}

/**
 * Container App scaling configurations.
 */
export interface ScaleArgs {
    /**
     * Optional. KEDA Cooldown Period. Defaults to 300 seconds if not set.
     */
    cooldownPeriod?: pulumi.Input<number | undefined>;
    /**
     * Optional. Maximum number of container replicas. Defaults to 10 if not set.
     */
    maxReplicas?: pulumi.Input<number | undefined>;
    /**
     * Optional. Minimum number of container replicas.
     */
    minReplicas?: pulumi.Input<number | undefined>;
    /**
     * Optional. KEDA Polling Interval. Defaults to 30 seconds if not set.
     */
    pollingInterval?: pulumi.Input<number | undefined>;
    /**
     * Scaling rules.
     */
    rules?: pulumi.Input<pulumi.Input<ScaleRuleArgs>[] | undefined>;
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
 * Scale configuration.
 */
export interface ScaleConfigurationArgs {
    /**
     * The maximum count of sessions at the same time.
     */
    maxConcurrentSessions?: pulumi.Input<number | undefined>;
    /**
     * The minimum count of ready session instances.
     */
    readySessionInstances?: pulumi.Input<number | undefined>;
}

/**
 * Container App container scaling rule.
 */
export interface ScaleRuleArgs {
    /**
     * Azure Queue based scaling.
     */
    azureQueue?: pulumi.Input<QueueScaleRuleArgs | undefined>;
    /**
     * Custom scale rule.
     */
    custom?: pulumi.Input<CustomScaleRuleArgs | undefined>;
    /**
     * HTTP requests based scaling.
     */
    http?: pulumi.Input<HttpScaleRuleArgs | undefined>;
    /**
     * Scale Rule Name
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Tcp requests based scaling.
     */
    tcp?: pulumi.Input<TcpScaleRuleArgs | undefined>;
}

/**
 * Auth Secrets for Scale Rule
 */
export interface ScaleRuleAuthArgs {
    /**
     * Name of the secret from which to pull the auth params.
     */
    secretRef?: pulumi.Input<string | undefined>;
    /**
     * Trigger Parameter that uses the secret
     */
    triggerParameter?: pulumi.Input<string | undefined>;
}

/**
 * Spring Cloud Gateway route definition
 */
export interface ScgRouteArgs {
    /**
     * Filters of the route
     */
    filters?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Id of the route
     */
    id: pulumi.Input<string>;
    /**
     * Order of the route
     */
    order?: pulumi.Input<number | undefined>;
    /**
     * Predicates of the route
     */
    predicates?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Uri of the route
     */
    uri: pulumi.Input<string>;
}

/**
 * Maintenance schedule entry for a managed environment.
 */
export interface ScheduledEntryArgs {
    /**
     * Length of maintenance window range from 8 to 24 hours.
     */
    durationHours: pulumi.Input<number>;
    /**
     * Start hour after which managed environment maintenance can start from 0 to 23 hour.
     */
    startHourUtc: pulumi.Input<number>;
    /**
     * Day of the week when a managed environment can be patched.
     */
    weekDay: pulumi.Input<enums.WeekDay>;
}

/**
 * Secret definition.
 */
export interface SecretArgs {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Azure Key Vault URL pointing to the secret referenced by the container app.
     */
    keyVaultUrl?: pulumi.Input<string | undefined>;
    /**
     * Secret Name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Secret Value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Properties for a secret stored in a Key Vault.
 */
export interface SecretKeyVaultPropertiesArgs {
    /**
     * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * URL pointing to the Azure Key Vault secret.
     */
    keyVaultUrl?: pulumi.Input<string | undefined>;
}

/**
 * Secret to be added to volume.
 */
export interface SecretVolumeItemArgs {
    /**
     * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Name of the Container App secret from which to pull the secret value.
     */
    secretRef?: pulumi.Input<string | undefined>;
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
     * Type of the client to be used to connect to the service
     */
    clientType?: pulumi.Input<string | undefined>;
    /**
     * Customized keys for customizing injected values to the app
     */
    customizedKeys?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Name of the service bind
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Resource id of the target service
     */
    serviceId?: pulumi.Input<string | undefined>;
}

/**
 * Container definitions for the sessions of the session pool.
 */
export interface SessionContainerArgs {
    /**
     * Container start command arguments.
     */
    args?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container start command.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Container environment variables.
     */
    env?: pulumi.Input<pulumi.Input<EnvironmentVarArgs>[] | undefined>;
    /**
     * Container image tag.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * Custom container name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * List of probes for the container.
     */
    probes?: pulumi.Input<pulumi.Input<SessionProbeArgs>[] | undefined>;
    /**
     * Container resource requirements.
     */
    resources?: pulumi.Input<SessionContainerResourcesArgs | undefined>;
}

/**
 * Container resource requirements for sessions of the session pool.
 */
export interface SessionContainerResourcesArgs {
    /**
     * Required CPU in cores, e.g. 0.5
     */
    cpu?: pulumi.Input<number | undefined>;
    /**
     * Required memory, e.g. "250Mb"
     */
    memory?: pulumi.Input<string | undefined>;
}

/**
 * Session pool ingress configuration.
 */
export interface SessionIngressArgs {
    /**
     * Target port in containers for traffic from ingress
     */
    targetPort?: pulumi.Input<number | undefined>;
}

/**
 * Session network configuration.
 */
export interface SessionNetworkConfigurationArgs {
    /**
     * Network status for the sessions.
     */
    status?: pulumi.Input<string | enums.SessionNetworkStatus | undefined>;
}

/**
 * Secret definition.
 */
export interface SessionPoolSecretArgs {
    /**
     * Secret Name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Secret Value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Session probe configuration.
 */
export interface SessionProbeArgs {
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10.
     */
    failureThreshold?: pulumi.Input<number | undefined>;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: pulumi.Input<SessionProbeHttpGetArgs | undefined>;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60.
     */
    initialDelaySeconds?: pulumi.Input<number | undefined>;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.
     */
    periodSeconds?: pulumi.Input<number | undefined>;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10.
     */
    successThreshold?: pulumi.Input<number | undefined>;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported.
     */
    tcpSocket?: pulumi.Input<SessionProbeTcpSocketArgs | undefined>;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
     */
    terminationGracePeriodSeconds?: pulumi.Input<number | undefined>;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240.
     */
    timeoutSeconds?: pulumi.Input<number | undefined>;
    /**
     * Denotes the type of probe. Can be Liveness or Startup, Readiness probe is not supported in sessions. Type must be unique for each probe within the context of a list of probes (SessionProbes).
     */
    type?: pulumi.Input<string | enums.SessionProbeType | undefined>;
}

/**
 * HTTPGet specifies the http request to perform.
 */
export interface SessionProbeHttpGetArgs {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: pulumi.Input<string | undefined>;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: pulumi.Input<pulumi.Input<SessionProbeHttpHeadersArgs>[] | undefined>;
    /**
     * Path to access on the HTTP server.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port: pulumi.Input<number>;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: pulumi.Input<string | enums.Scheme | undefined>;
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface SessionProbeHttpHeadersArgs {
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
export interface SessionProbeTcpSocketArgs {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     */
    host?: pulumi.Input<string | undefined>;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port: pulumi.Input<number>;
}

/**
 * Session pool private registry credentials.
 */
export interface SessionRegistryCredentialsArgs {
    /**
     * A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system'
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The name of the secret that contains the registry login password
     */
    passwordSecretRef?: pulumi.Input<string | undefined>;
    /**
     * Container registry server.
     */
    server?: pulumi.Input<string | undefined>;
    /**
     * Container registry username.
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * SMB storage properties
 */
export interface SmbStorageArgs {
    /**
     * Access mode for storage
     */
    accessMode?: pulumi.Input<string | enums.AccessMode | undefined>;
    /**
     * The domain name for the user.
     */
    domain?: pulumi.Input<string | undefined>;
    /**
     * The host name or IP address of the SMB server.
     */
    host?: pulumi.Input<string | undefined>;
    /**
     * The password for the user.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * The path to the SMB shared folder.
     */
    shareName?: pulumi.Input<string | undefined>;
    /**
     * The user to log on to the SMB server.
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * Spring Boot Admin properties.
 */
export interface SpringBootAdminComponentArgs {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringBootAdmin'.
     */
    componentType: pulumi.Input<"SpringBootAdmin">;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<JavaComponentConfigurationPropertyArgs>[] | undefined>;
    /**
     * Java component scaling configurations
     */
    scale?: pulumi.Input<JavaComponentPropertiesScaleArgs | undefined>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<JavaComponentServiceBindArgs>[] | undefined>;
}

/**
 * Spring Cloud Config properties.
 */
export interface SpringCloudConfigComponentArgs {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudConfig'.
     */
    componentType: pulumi.Input<"SpringCloudConfig">;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<JavaComponentConfigurationPropertyArgs>[] | undefined>;
    /**
     * Java component scaling configurations
     */
    scale?: pulumi.Input<JavaComponentPropertiesScaleArgs | undefined>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<JavaComponentServiceBindArgs>[] | undefined>;
}

/**
 * Spring Cloud Eureka properties.
 */
export interface SpringCloudEurekaComponentArgs {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudEureka'.
     */
    componentType: pulumi.Input<"SpringCloudEureka">;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<JavaComponentConfigurationPropertyArgs>[] | undefined>;
    /**
     * Java component scaling configurations
     */
    scale?: pulumi.Input<JavaComponentPropertiesScaleArgs | undefined>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<JavaComponentServiceBindArgs>[] | undefined>;
}

/**
 * Spring Cloud Gateway properties.
 */
export interface SpringCloudGatewayComponentArgs {
    /**
     * Type of the Java Component.
     * Expected value is 'SpringCloudGateway'.
     */
    componentType: pulumi.Input<"SpringCloudGateway">;
    /**
     * List of Java Components configuration properties
     */
    configurations?: pulumi.Input<pulumi.Input<JavaComponentConfigurationPropertyArgs>[] | undefined>;
    /**
     * Java component scaling configurations
     */
    scale?: pulumi.Input<JavaComponentPropertiesScaleArgs | undefined>;
    /**
     * List of Java Components that are bound to the Java component
     */
    serviceBinds?: pulumi.Input<pulumi.Input<JavaComponentServiceBindArgs>[] | undefined>;
    /**
     * Gateway route definition
     */
    springCloudGatewayRoutes?: pulumi.Input<pulumi.Input<ScgRouteArgs>[] | undefined>;
}

/**
 * Defines parameters for tcp connection pooling
 */
export interface TcpConnectionPoolArgs {
    /**
     * Maximum number of tcp connections allowed
     */
    maxConnections?: pulumi.Input<number | undefined>;
}

/**
 * Policy that defines tcp request retry conditions
 */
export interface TcpRetryPolicyArgs {
    /**
     * Maximum number of attempts to connect to the tcp service
     */
    maxConnectAttempts?: pulumi.Input<number | undefined>;
}

/**
 * Container App container Tcp scaling rule.
 */
export interface TcpScaleRuleArgs {
    /**
     * Authentication secrets for the tcp scale rule.
     */
    auth?: pulumi.Input<pulumi.Input<ScaleRuleAuthArgs>[] | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that is assigned to the Container App, or 'system' for system-assigned identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * Metadata properties to describe tcp scale rule.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
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
    containers?: pulumi.Input<pulumi.Input<ContainerArgs>[] | undefined>;
    /**
     * List of specialized containers that run before app containers.
     */
    initContainers?: pulumi.Input<pulumi.Input<InitContainerArgs>[] | undefined>;
    /**
     * User friendly suffix that is appended to the revision name
     */
    revisionSuffix?: pulumi.Input<string | undefined>;
    /**
     * Scaling properties for the Container App.
     */
    scale?: pulumi.Input<ScaleArgs | undefined>;
    /**
     * List of container app services bound to the app
     */
    serviceBinds?: pulumi.Input<pulumi.Input<ServiceBindArgs>[] | undefined>;
    /**
     * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
     */
    terminationGracePeriodSeconds?: pulumi.Input<number | undefined>;
    /**
     * List of volume definitions for the Container App.
     */
    volumes?: pulumi.Input<pulumi.Input<VolumeArgs>[] | undefined>;
}
/**
 * templateArgsProvideDefaults sets the appropriate defaults for TemplateArgs
 */
export function templateArgsProvideDefaults(val: TemplateArgs): TemplateArgs {
    return {
        ...val,
        scale: pulumi.output(val.scale).apply(v => v === undefined ? undefined : scaleArgsProvideDefaults(v)),
    };
}

/**
 * Policy to set request timeouts
 */
export interface TimeoutPolicyArgs {
    /**
     * Timeout, in seconds, for a request to initiate a connection
     */
    connectionTimeoutInSeconds?: pulumi.Input<number | undefined>;
    /**
     * Timeout, in seconds, for a request to respond
     */
    responseTimeoutInSeconds?: pulumi.Input<number | undefined>;
}

/**
 * The configuration settings of the token store.
 */
export interface TokenStoreArgs {
    /**
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    azureBlobStorage?: pulumi.Input<BlobStorageTokenStoreArgs | undefined>;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: pulumi.Input<number | undefined>;
}

/**
 * Configuration of Open Telemetry traces
 */
export interface TracesConfigurationArgs {
    /**
     * Open telemetry traces destinations
     */
    destinations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Boolean indicating if including dapr traces
     */
    includeDapr?: pulumi.Input<boolean | undefined>;
}

/**
 * Traffic weight assigned to a revision
 */
export interface TrafficWeightArgs {
    /**
     * Associates a traffic label with a revision
     */
    label?: pulumi.Input<string | undefined>;
    /**
     * Indicates that the traffic weight belongs to a latest stable revision
     */
    latestRevision?: pulumi.Input<boolean | undefined>;
    /**
     * Name of a revision
     */
    revisionName?: pulumi.Input<string | undefined>;
    /**
     * Traffic weight assigned to a revision
     */
    weight?: pulumi.Input<number | undefined>;
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
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The configuration settings of the app registration for the Twitter provider.
     */
    registration?: pulumi.Input<TwitterRegistrationArgs | undefined>;
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
    consumerKey?: pulumi.Input<string | undefined>;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    consumerSecretSettingName?: pulumi.Input<string | undefined>;
}

/**
 * Configuration properties for apps environment to join a Virtual Network
 */
export interface VnetConfigurationArgs {
    /**
     * CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges.
     */
    dockerBridgeCidr?: pulumi.Input<string | undefined>;
    /**
     * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
     */
    infrastructureSubnetId?: pulumi.Input<string | undefined>;
    /**
     * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
     */
    internal?: pulumi.Input<boolean | undefined>;
    /**
     * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
     */
    platformReservedCidr?: pulumi.Input<string | undefined>;
    /**
     *  An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.
     */
    platformReservedDnsIP?: pulumi.Input<string | undefined>;
}

/**
 * Volume definitions for the Container App.
 */
export interface VolumeArgs {
    /**
     * Mount options used while mounting the Azure file share or NFS Azure file share. Must be a comma-separated string.
     */
    mountOptions?: pulumi.Input<string | undefined>;
    /**
     * Volume name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume.
     */
    secrets?: pulumi.Input<pulumi.Input<SecretVolumeItemArgs>[] | undefined>;
    /**
     * Name of storage resource. No need to provide for EmptyDir and Secret.
     */
    storageName?: pulumi.Input<string | undefined>;
    /**
     * Storage type for the volume. If not provided, use EmptyDir.
     */
    storageType?: pulumi.Input<string | enums.StorageType | undefined>;
}

/**
 * Volume mount for the Container App.
 */
export interface VolumeMountArgs {
    /**
     * Path within the container at which the volume should be mounted.Must not contain ':'.
     */
    mountPath?: pulumi.Input<string | undefined>;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: pulumi.Input<string | undefined>;
    /**
     * This must match the Name of a Volume.
     */
    volumeName?: pulumi.Input<string | undefined>;
}

/**
 * Workload profile to scope container app execution.
 */
export interface WorkloadProfileArgs {
    /**
     * Whether to use a FIPS-enabled OS. Supported only for dedicated workload profiles.
     */
    enableFips?: pulumi.Input<boolean | undefined>;
    /**
     * The maximum capacity.
     */
    maximumCount?: pulumi.Input<number | undefined>;
    /**
     * The minimum capacity.
     */
    minimumCount?: pulumi.Input<number | undefined>;
    /**
     * Workload profile type for the workloads to run on.
     */
    name: pulumi.Input<string>;
    /**
     * Workload profile type for the workloads to run on.
     */
    workloadProfileType: pulumi.Input<string>;
}
/**
 * workloadProfileArgsProvideDefaults sets the appropriate defaults for WorkloadProfileArgs
 */
export function workloadProfileArgsProvideDefaults(val: WorkloadProfileArgs): WorkloadProfileArgs {
    return {
        ...val,
        enableFips: (val.enableFips) ?? false,
    };
}
