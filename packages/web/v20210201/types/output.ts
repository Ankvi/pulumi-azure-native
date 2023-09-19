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
     * A wrapper for an ARM resource id
     */
    export interface ArmIdWrapperResponse {
        id: string;
    }

    /**
     * The plan object in Azure Resource Manager, represents a marketplace plan.
     */
    export interface ArmPlanResponse {
        /**
         * The name.
         */
        name?: string;
        /**
         * The product.
         */
        product?: string;
        /**
         * The promotion code.
         */
        promotionCode?: string;
        /**
         * The publisher.
         */
        publisher?: string;
        /**
         * Version of product.
         */
        version?: string;
    }

    /**
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    export interface AuthPlatformResponse {
        /**
         * The path of the config file containing auth settings if they come from a file.
         * If the path is relative, base will the site's root directory.
         */
        configFilePath?: string;
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
         * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
         */
        sasUrlSettingName?: string;
    }

    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityResponse {
        /**
         * Name of the SKU capability.
         */
        name?: string;
        /**
         * Reason of the SKU capability.
         */
        reason?: string;
        /**
         * Value of the SKU capability.
         */
        value?: string;
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
     * The configuration settings of the storage of the tokens if a file system is used.
     */
    export interface FileSystemTokenStoreResponse {
        /**
         * The directory in which the tokens will be stored.
         */
        directory?: string;
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
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
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
         * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
         */
        requireAuthentication?: boolean;
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
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
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
     * A domain specific resource identifier.
     */
    export interface IdentifierResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * Resource type.
         */
        type: string;
        /**
         * String representation of the identity.
         */
        value?: string;
    }

    /**
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
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
         * The configuration settings of the legacy Microsoft Account provider.
         */
        legacyMicrosoftAccount?: LegacyMicrosoftAccountResponse;
        /**
         * The configuration settings of the Twitter provider.
         */
        twitter?: TwitterResponse;
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
     * The configuration settings of the legacy Microsoft Account provider.
     */
    export interface LegacyMicrosoftAccountResponse {
        /**
         * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: boolean;
        /**
         * The configuration settings of the login flow.
         */
        login?: LoginScopesResponse;
        /**
         * The configuration settings of the app registration for the legacy Microsoft Account provider.
         */
        registration?: ClientRegistrationResponse;
        /**
         * The configuration settings of the legacy Microsoft Account provider token validation flow.
         */
        validation?: AllowedAudiencesValidationResponse;
    }

    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
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
     * Managed service identity.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * Principal Id of managed service identity.
         */
        principalId: string;
        /**
         * Tenant of managed service identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity.
         */
        type?: string;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
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
     * The state of a private link connection
     */
    export interface PrivateLinkConnectionStateResponse {
        /**
         * ActionsRequired for a private link connection
         */
        actionsRequired?: string;
        /**
         * Description of a private link connection
         */
        description?: string;
        /**
         * Status of a private link connection
         */
        status?: string;
    }

    /**
     * A remote private endpoint connection
     */
    export interface RemotePrivateEndpointConnectionResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Private IPAddresses mapped to the remote private endpoint
         */
        ipAddresses?: string[];
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * PrivateEndpoint of a remote private endpoint connection
         */
        privateEndpoint?: ArmIdWrapperResponse;
        /**
         * The state of a private link connection
         */
        privateLinkServiceConnectionState?: PrivateLinkConnectionStateResponse;
        provisioningState: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Message envelope that contains the common Azure resource manager properties and the resource provider specific content.
     */
    export interface ResponseMessageEnvelopeRemotePrivateEndpointConnectionResponse {
        /**
         * Azure-AsyncOperation Error info.
         */
        error?: ErrorEntityResponse;
        /**
         * Resource Id. Typically ID is populated only for responses to GET requests. Caller is responsible for passing in this
         * value for GET requests only.
         * For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}
         */
        id?: string;
        /**
         * MSI resource
         */
        identity?: ManagedServiceIdentityResponse;
        /**
         * Geographical region resource belongs to e.g. SouthCentralUS, SouthEastAsia.
         */
        location?: string;
        /**
         * Name of resource.
         */
        name?: string;
        /**
         * Azure resource manager plan.
         */
        plan?: ArmPlanResponse;
        /**
         * Resource specific properties.
         */
        properties?: RemotePrivateEndpointConnectionResponse;
        /**
         * SKU description of the resource.
         */
        sku?: SkuDescriptionResponse;
        /**
         * Azure-AsyncOperation Status info.
         */
        status?: string;
        /**
         * Tags associated with resource.
         */
        tags?: {[key: string]: string};
        /**
         * Type of resource e.g "Microsoft.Web/sites".
         */
        type?: string;
        /**
         * Logical Availability Zones the service is hosted in
         */
        zones?: string[];
    }

    /**
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityResponse {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: number;
        /**
         * Maximum number of Elastic workers for this App Service plan SKU.
         */
        elasticMaximum?: number;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: number;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: number;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: string;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionResponse {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: CapabilityResponse[];
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: number;
        /**
         * Family code of the resource SKU.
         */
        family?: string;
        /**
         * Locations of the SKU.
         */
        locations?: string[];
        /**
         * Name of the resource SKU.
         */
        name?: string;
        /**
         * Size specifier of the resource SKU.
         */
        size?: string;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: SkuCapacityResponse;
        /**
         * Service tier of the resource SKU.
         */
        tier?: string;
    }

    /**
     * Build properties for the static site.
     */
    export interface StaticSiteBuildPropertiesResponse {
        /**
         * A custom command to run during deployment of the Azure Functions API application.
         */
        apiBuildCommand?: string;
        /**
         * The path to the api code within the repository.
         */
        apiLocation?: string;
        /**
         * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
         */
        appArtifactLocation?: string;
        /**
         * A custom command to run during deployment of the static content application.
         */
        appBuildCommand?: string;
        /**
         * The path to the app code within the repository.
         */
        appLocation?: string;
        /**
         * Github Action secret name override.
         */
        githubActionSecretNameOverride?: string;
        /**
         * The output path of the app after building.
         */
        outputLocation?: string;
        /**
         * Skip Github Action workflow generation.
         */
        skipGithubActionWorkflowGeneration?: boolean;
    }

    /**
     * Template Options for the static site.
     */
    export interface StaticSiteTemplateOptionsResponse {
        /**
         * Description of the newly generated repository.
         */
        description?: string;
        /**
         * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
         */
        isPrivate?: boolean;
        /**
         * Owner of the newly generated repository.
         */
        owner?: string;
        /**
         * Name of the newly generated repository.
         */
        repositoryName?: string;
        /**
         * URL of the template repository. The newly generated repository will be based on this one.
         */
        templateRepositoryUrl?: string;
    }

    /**
     * Static Site User ARM resource.
     */
    export interface StaticSiteUserARMResourceResponse {
        /**
         * The display name for the static site user.
         */
        displayName: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * The identity provider for the static site user.
         */
        provider: string;
        /**
         * The roles for the static site user, in free-form string format
         */
        roles?: string;
        /**
         * Resource type.
         */
        type: string;
        /**
         * The user id for the static site user.
         */
        userId: string;
    }

    /**
     * A static site user provided function.
     */
    export interface StaticSiteUserProvidedFunctionAppResponse {
        /**
         * The date and time on which the function app was registered with the static site.
         */
        createdOn: string;
        /**
         * The region of the function app registered with the static site
         */
        functionAppRegion?: string;
        /**
         * The resource id of the function app registered with the static site
         */
        functionAppResourceId?: string;
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * Resource type.
         */
        type: string;
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
         * The configuration settings of the storage of the tokens if a file system is used.
         */
        fileSystem?: FileSystemTokenStoreResponse;
        /**
         * The number of hours after session token expiration that a session token can be used to
         * call the token refresh API. The default is 72 hours.
         */
        tokenRefreshExtensionHours?: number;
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
     * User Assigned identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client Id of user assigned identity
         */
        clientId: string;
        /**
         * Principal Id of user assigned identity
         */
        principalId: string;
    }
