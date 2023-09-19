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
     * The configuration settings of the platform of App Service Authentication/Authorization.
     */
    export interface AuthPlatformArgs {
        /**
         * The path of the config file containing auth settings if they come from a file.
         * If the path is relative, base will the site's root directory.
         */
        configFilePath?: pulumi.Input<string>;
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
     * The configuration settings of the storage of the tokens if blob storage is used.
     */
    export interface BlobStorageTokenStoreArgs {
        /**
         * The name of the app setting containing the SAS URL of the blob storage containing the tokens.
         */
        sasUrlSettingName?: pulumi.Input<string>;
    }

    /**
     * Describes the capabilities/features allowed for a specific SKU.
     */
    export interface CapabilityArgs {
        /**
         * Name of the SKU capability.
         */
        name?: pulumi.Input<string>;
        /**
         * Reason of the SKU capability.
         */
        reason?: pulumi.Input<string>;
        /**
         * Value of the SKU capability.
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
     * The configuration settings of the storage of the tokens if a file system is used.
     */
    export interface FileSystemTokenStoreArgs {
        /**
         * The directory in which the tokens will be stored.
         */
        directory?: pulumi.Input<string>;
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
     * The configuration settings that determines the validation flow of users using App Service Authentication/Authorization.
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
         * <code>true</code> if the authentication flow is required any request is made; otherwise, <code>false</code>.
         */
        requireAuthentication?: pulumi.Input<boolean>;
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
     * The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization.
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
     * The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization.
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
         * The configuration settings of the legacy Microsoft Account provider.
         */
        legacyMicrosoftAccount?: pulumi.Input<LegacyMicrosoftAccountArgs>;
        /**
         * The configuration settings of the Twitter provider.
         */
        twitter?: pulumi.Input<TwitterArgs>;
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
     * The configuration settings of the legacy Microsoft Account provider.
     */
    export interface LegacyMicrosoftAccountArgs {
        /**
         * <code>false</code> if the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise, <code>true</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the login flow.
         */
        login?: pulumi.Input<LoginScopesArgs>;
        /**
         * The configuration settings of the app registration for the legacy Microsoft Account provider.
         */
        registration?: pulumi.Input<ClientRegistrationArgs>;
        /**
         * The configuration settings of the legacy Microsoft Account provider token validation flow.
         */
        validation?: pulumi.Input<AllowedAudiencesValidationArgs>;
    }

    /**
     * The configuration settings of the login flow of users using App Service Authentication/Authorization.
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
        /**
         * The configuration settings of the token store.
         */
        tokenStore?: pulumi.Input<TokenStoreArgs>;
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
     * Managed service identity.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity.
         */
        type?: pulumi.Input<enums.ManagedServiceIdentityType>;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
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
     * Description of the App Service plan scale options.
     */
    export interface SkuCapacityArgs {
        /**
         * Default number of workers for this App Service plan SKU.
         */
        default?: pulumi.Input<number>;
        /**
         * Maximum number of Elastic workers for this App Service plan SKU.
         */
        elasticMaximum?: pulumi.Input<number>;
        /**
         * Maximum number of workers for this App Service plan SKU.
         */
        maximum?: pulumi.Input<number>;
        /**
         * Minimum number of workers for this App Service plan SKU.
         */
        minimum?: pulumi.Input<number>;
        /**
         * Available scale configurations for an App Service plan.
         */
        scaleType?: pulumi.Input<string>;
    }

    /**
     * Description of a SKU for a scalable resource.
     */
    export interface SkuDescriptionArgs {
        /**
         * Capabilities of the SKU, e.g., is traffic manager enabled?
         */
        capabilities?: pulumi.Input<pulumi.Input<CapabilityArgs>[]>;
        /**
         * Current number of instances assigned to the resource.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Family code of the resource SKU.
         */
        family?: pulumi.Input<string>;
        /**
         * Locations of the SKU.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the resource SKU.
         */
        name?: pulumi.Input<string>;
        /**
         * Size specifier of the resource SKU.
         */
        size?: pulumi.Input<string>;
        /**
         * Min, max, and default scale values of the SKU.
         */
        skuCapacity?: pulumi.Input<SkuCapacityArgs>;
        /**
         * Service tier of the resource SKU.
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Build properties for the static site.
     */
    export interface StaticSiteBuildPropertiesArgs {
        /**
         * A custom command to run during deployment of the Azure Functions API application.
         */
        apiBuildCommand?: pulumi.Input<string>;
        /**
         * The path to the api code within the repository.
         */
        apiLocation?: pulumi.Input<string>;
        /**
         * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
         */
        appArtifactLocation?: pulumi.Input<string>;
        /**
         * A custom command to run during deployment of the static content application.
         */
        appBuildCommand?: pulumi.Input<string>;
        /**
         * The path to the app code within the repository.
         */
        appLocation?: pulumi.Input<string>;
        /**
         * Github Action secret name override.
         */
        githubActionSecretNameOverride?: pulumi.Input<string>;
        /**
         * The output path of the app after building.
         */
        outputLocation?: pulumi.Input<string>;
        /**
         * Skip Github Action workflow generation.
         */
        skipGithubActionWorkflowGeneration?: pulumi.Input<boolean>;
    }

    /**
     * Template Options for the static site.
     */
    export interface StaticSiteTemplateOptionsArgs {
        /**
         * Description of the newly generated repository.
         */
        description?: pulumi.Input<string>;
        /**
         * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
         */
        isPrivate?: pulumi.Input<boolean>;
        /**
         * Owner of the newly generated repository.
         */
        owner?: pulumi.Input<string>;
        /**
         * Name of the newly generated repository.
         */
        repositoryName?: pulumi.Input<string>;
        /**
         * URL of the template repository. The newly generated repository will be based on this one.
         */
        templateRepositoryUrl?: pulumi.Input<string>;
    }

    /**
     * The configuration settings of the token store.
     */
    export interface TokenStoreArgs {
        /**
         * The configuration settings of the storage of the tokens if blob storage is used.
         */
        azureBlobStorage?: pulumi.Input<BlobStorageTokenStoreArgs>;
        /**
         * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
         *  The default is <code>false</code>.
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The configuration settings of the storage of the tokens if a file system is used.
         */
        fileSystem?: pulumi.Input<FileSystemTokenStoreArgs>;
        /**
         * The number of hours after session token expiration that a session token can be used to
         * call the token refresh API. The default is 72 hours.
         */
        tokenRefreshExtensionHours?: pulumi.Input<number>;
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
