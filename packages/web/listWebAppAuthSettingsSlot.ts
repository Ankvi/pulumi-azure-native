import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the Authentication/Authorization settings of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppAuthSettingsSlot(args: ListWebAppAuthSettingsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppAuthSettingsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppAuthSettingsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppAuthSettingsSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
     */
    slot: string;
}

/**
 * Configuration settings for the Azure App Service Authentication / Authorization feature.
 */
export interface ListWebAppAuthSettingsSlotResult {
    /**
     * Gets a JSON string containing the Azure AD Acl settings.
     */
    readonly aadClaimsAuthorization?: string;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    readonly additionalLoginParams?: string[];
    /**
     * Allowed audience values to consider when validating JSON Web Tokens issued by 
     * Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
     * allowed audience, regardless of this setting.
     */
    readonly allowedAudiences?: string[];
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    readonly allowedExternalRedirectUrls?: string[];
    /**
     * The path of the config file containing auth settings.
     * If the path is relative, base will the site's root directory.
     */
    readonly authFilePath?: string;
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    readonly clientId?: string;
    /**
     * The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
     * This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
     * Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    readonly clientSecret?: string;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    readonly clientSecretCertificateThumbprint?: string;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    readonly clientSecretSettingName?: string;
    /**
     * The ConfigVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of the control plane for Authentication / Authorization.
     */
    readonly configVersion?: string;
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    readonly defaultProvider?: string;
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    readonly enabled?: boolean;
    /**
     * The App ID of the Facebook app used for login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    readonly facebookAppId?: string;
    /**
     * The App Secret of the Facebook app used for Facebook Login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    readonly facebookAppSecret?: string;
    /**
     * The app setting name that contains the app secret used for Facebook Login.
     */
    readonly facebookAppSecretSettingName?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
     * This setting is optional.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    readonly facebookOAuthScopes?: string[];
    /**
     * The Client Id of the GitHub app used for login.
     * This setting is required for enabling Github login
     */
    readonly gitHubClientId?: string;
    /**
     * The Client Secret of the GitHub app used for Github Login.
     * This setting is required for enabling Github login.
     */
    readonly gitHubClientSecret?: string;
    /**
     * The app setting name that contains the client secret of the Github
     * app used for GitHub Login.
     */
    readonly gitHubClientSecretSettingName?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
     * This setting is optional
     */
    readonly gitHubOAuthScopes?: string[];
    /**
     * The OpenID Connect Client ID for the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    readonly googleClientId?: string;
    /**
     * The client secret associated with the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    readonly googleClientSecret?: string;
    /**
     * The app setting name that contains the client secret associated with 
     * the Google web application.
     */
    readonly googleClientSecretSettingName?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
     * This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    readonly googleOAuthScopes?: string[];
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * "true" if the auth config settings should be read from a file,
     * "false" otherwise
     */
    readonly isAuthFromFile?: string;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. `https://sts.windows.net/{tenant-guid}/`.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    readonly issuer?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * The OAuth 2.0 client ID that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    readonly microsoftAccountClientId?: string;
    /**
     * The OAuth 2.0 client secret that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    readonly microsoftAccountClientSecret?: string;
    /**
     * The app setting name containing the OAuth 2.0 client secret that was created for the
     * app used for authentication.
     */
    readonly microsoftAccountClientSecretSettingName?: string;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
     * This setting is optional. If not specified, "wl.basic" is used as the default scope.
     * Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
     */
    readonly microsoftAccountOAuthScopes?: string[];
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    readonly runtimeVersion?: string;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    readonly tokenRefreshExtensionHours?: number;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    readonly tokenStoreEnabled?: boolean;
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    readonly twitterConsumerKey?: string;
    /**
     * The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    readonly twitterConsumerSecret?: string;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    readonly twitterConsumerSecretSettingName?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    readonly unauthenticatedClientAction?: string;
    /**
     * Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
     */
    readonly validateIssuer?: boolean;
}
/**
 * Description for Gets the Authentication/Authorization settings of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppAuthSettingsSlotOutput(args: ListWebAppAuthSettingsSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppAuthSettingsSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppAuthSettingsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppAuthSettingsSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
     */
    slot: pulumi.Input<string>;
}