import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration settings for the Azure App Service Authentication / Authorization feature.
 */
export class WebAppAuthSettings extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAuthSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppAuthSettings {
        return new WebAppAuthSettings(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20230101:WebAppAuthSettings';

    /**
     * Returns true if the given object is an instance of WebAppAuthSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAuthSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAuthSettings.__pulumiType;
    }

    /**
     * Gets a JSON string containing the Azure AD Acl settings.
     */
    public readonly aadClaimsAuthorization!: pulumi.Output<string | undefined>;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    public readonly additionalLoginParams!: pulumi.Output<string[] | undefined>;
    /**
     * Allowed audience values to consider when validating JSON Web Tokens issued by 
     * Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
     * allowed audience, regardless of this setting.
     */
    public readonly allowedAudiences!: pulumi.Output<string[] | undefined>;
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    public readonly allowedExternalRedirectUrls!: pulumi.Output<string[] | undefined>;
    /**
     * The path of the config file containing auth settings.
     * If the path is relative, base will the site's root directory.
     */
    public readonly authFilePath!: pulumi.Output<string | undefined>;
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
     * This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
     * Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
     * a replacement for the Client Secret. It is also optional.
     */
    public readonly clientSecretCertificateThumbprint!: pulumi.Output<string | undefined>;
    /**
     * The app setting name that contains the client secret of the relying party application.
     */
    public readonly clientSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * The ConfigVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of the control plane for Authentication / Authorization.
     */
    public readonly configVersion!: pulumi.Output<string | undefined>;
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    public readonly defaultProvider!: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The App ID of the Facebook app used for login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    public readonly facebookAppId!: pulumi.Output<string | undefined>;
    /**
     * The App Secret of the Facebook app used for Facebook Login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    public readonly facebookAppSecret!: pulumi.Output<string | undefined>;
    /**
     * The app setting name that contains the app secret used for Facebook Login.
     */
    public readonly facebookAppSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
     * This setting is optional.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    public readonly facebookOAuthScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The Client Id of the GitHub app used for login.
     * This setting is required for enabling Github login
     */
    public readonly gitHubClientId!: pulumi.Output<string | undefined>;
    /**
     * The Client Secret of the GitHub app used for Github Login.
     * This setting is required for enabling Github login.
     */
    public readonly gitHubClientSecret!: pulumi.Output<string | undefined>;
    /**
     * The app setting name that contains the client secret of the Github
     * app used for GitHub Login.
     */
    public readonly gitHubClientSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
     * This setting is optional
     */
    public readonly gitHubOAuthScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The OpenID Connect Client ID for the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    public readonly googleClientId!: pulumi.Output<string | undefined>;
    /**
     * The client secret associated with the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    public readonly googleClientSecret!: pulumi.Output<string | undefined>;
    /**
     * The app setting name that contains the client secret associated with 
     * the Google web application.
     */
    public readonly googleClientSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
     * This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    public readonly googleOAuthScopes!: pulumi.Output<string[] | undefined>;
    /**
     * "true" if the auth config settings should be read from a file,
     * "false" otherwise
     */
    public readonly isAuthFromFile!: pulumi.Output<string | undefined>;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    public readonly issuer!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 client ID that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    public readonly microsoftAccountClientId!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 client secret that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    public readonly microsoftAccountClientSecret!: pulumi.Output<string | undefined>;
    /**
     * The app setting name containing the OAuth 2.0 client secret that was created for the
     * app used for authentication.
     */
    public readonly microsoftAccountClientSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
     * This setting is optional. If not specified, "wl.basic" is used as the default scope.
     * Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
     */
    public readonly microsoftAccountOAuthScopes!: pulumi.Output<string[] | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    public readonly runtimeVersion!: pulumi.Output<string | undefined>;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    public readonly tokenRefreshExtensionHours!: pulumi.Output<number | undefined>;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    public readonly tokenStoreEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    public readonly twitterConsumerKey!: pulumi.Output<string | undefined>;
    /**
     * The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    public readonly twitterConsumerSecret!: pulumi.Output<string | undefined>;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    public readonly twitterConsumerSecretSettingName!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    public readonly unauthenticatedClientAction!: pulumi.Output<string | undefined>;
    /**
     * Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
     */
    public readonly validateIssuer!: pulumi.Output<boolean | undefined>;

    /**
     * Create a WebAppAuthSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAuthSettingsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aadClaimsAuthorization"] = args ? args.aadClaimsAuthorization : undefined;
            resourceInputs["additionalLoginParams"] = args ? args.additionalLoginParams : undefined;
            resourceInputs["allowedAudiences"] = args ? args.allowedAudiences : undefined;
            resourceInputs["allowedExternalRedirectUrls"] = args ? args.allowedExternalRedirectUrls : undefined;
            resourceInputs["authFilePath"] = args ? args.authFilePath : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args ? args.clientSecret : undefined;
            resourceInputs["clientSecretCertificateThumbprint"] = args ? args.clientSecretCertificateThumbprint : undefined;
            resourceInputs["clientSecretSettingName"] = args ? args.clientSecretSettingName : undefined;
            resourceInputs["configVersion"] = args ? args.configVersion : undefined;
            resourceInputs["defaultProvider"] = args ? args.defaultProvider : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["facebookAppId"] = args ? args.facebookAppId : undefined;
            resourceInputs["facebookAppSecret"] = args ? args.facebookAppSecret : undefined;
            resourceInputs["facebookAppSecretSettingName"] = args ? args.facebookAppSecretSettingName : undefined;
            resourceInputs["facebookOAuthScopes"] = args ? args.facebookOAuthScopes : undefined;
            resourceInputs["gitHubClientId"] = args ? args.gitHubClientId : undefined;
            resourceInputs["gitHubClientSecret"] = args ? args.gitHubClientSecret : undefined;
            resourceInputs["gitHubClientSecretSettingName"] = args ? args.gitHubClientSecretSettingName : undefined;
            resourceInputs["gitHubOAuthScopes"] = args ? args.gitHubOAuthScopes : undefined;
            resourceInputs["googleClientId"] = args ? args.googleClientId : undefined;
            resourceInputs["googleClientSecret"] = args ? args.googleClientSecret : undefined;
            resourceInputs["googleClientSecretSettingName"] = args ? args.googleClientSecretSettingName : undefined;
            resourceInputs["googleOAuthScopes"] = args ? args.googleOAuthScopes : undefined;
            resourceInputs["isAuthFromFile"] = args ? args.isAuthFromFile : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["microsoftAccountClientId"] = args ? args.microsoftAccountClientId : undefined;
            resourceInputs["microsoftAccountClientSecret"] = args ? args.microsoftAccountClientSecret : undefined;
            resourceInputs["microsoftAccountClientSecretSettingName"] = args ? args.microsoftAccountClientSecretSettingName : undefined;
            resourceInputs["microsoftAccountOAuthScopes"] = args ? args.microsoftAccountOAuthScopes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runtimeVersion"] = args ? args.runtimeVersion : undefined;
            resourceInputs["tokenRefreshExtensionHours"] = args ? args.tokenRefreshExtensionHours : undefined;
            resourceInputs["tokenStoreEnabled"] = args ? args.tokenStoreEnabled : undefined;
            resourceInputs["twitterConsumerKey"] = args ? args.twitterConsumerKey : undefined;
            resourceInputs["twitterConsumerSecret"] = args ? args.twitterConsumerSecret : undefined;
            resourceInputs["twitterConsumerSecretSettingName"] = args ? args.twitterConsumerSecretSettingName : undefined;
            resourceInputs["unauthenticatedClientAction"] = args ? args.unauthenticatedClientAction : undefined;
            resourceInputs["validateIssuer"] = args ? args.validateIssuer : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadClaimsAuthorization"] = undefined /*out*/;
            resourceInputs["additionalLoginParams"] = undefined /*out*/;
            resourceInputs["allowedAudiences"] = undefined /*out*/;
            resourceInputs["allowedExternalRedirectUrls"] = undefined /*out*/;
            resourceInputs["authFilePath"] = undefined /*out*/;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["clientSecret"] = undefined /*out*/;
            resourceInputs["clientSecretCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["clientSecretSettingName"] = undefined /*out*/;
            resourceInputs["configVersion"] = undefined /*out*/;
            resourceInputs["defaultProvider"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["facebookAppId"] = undefined /*out*/;
            resourceInputs["facebookAppSecret"] = undefined /*out*/;
            resourceInputs["facebookAppSecretSettingName"] = undefined /*out*/;
            resourceInputs["facebookOAuthScopes"] = undefined /*out*/;
            resourceInputs["gitHubClientId"] = undefined /*out*/;
            resourceInputs["gitHubClientSecret"] = undefined /*out*/;
            resourceInputs["gitHubClientSecretSettingName"] = undefined /*out*/;
            resourceInputs["gitHubOAuthScopes"] = undefined /*out*/;
            resourceInputs["googleClientId"] = undefined /*out*/;
            resourceInputs["googleClientSecret"] = undefined /*out*/;
            resourceInputs["googleClientSecretSettingName"] = undefined /*out*/;
            resourceInputs["googleOAuthScopes"] = undefined /*out*/;
            resourceInputs["isAuthFromFile"] = undefined /*out*/;
            resourceInputs["issuer"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["microsoftAccountClientId"] = undefined /*out*/;
            resourceInputs["microsoftAccountClientSecret"] = undefined /*out*/;
            resourceInputs["microsoftAccountClientSecretSettingName"] = undefined /*out*/;
            resourceInputs["microsoftAccountOAuthScopes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["runtimeVersion"] = undefined /*out*/;
            resourceInputs["tokenRefreshExtensionHours"] = undefined /*out*/;
            resourceInputs["tokenStoreEnabled"] = undefined /*out*/;
            resourceInputs["twitterConsumerKey"] = undefined /*out*/;
            resourceInputs["twitterConsumerSecret"] = undefined /*out*/;
            resourceInputs["twitterConsumerSecretSettingName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unauthenticatedClientAction"] = undefined /*out*/;
            resourceInputs["validateIssuer"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppAuthSettings" }, { type: "azure-native:web/v20150801:WebAppAuthSettings" }, { type: "azure-native:web/v20160801:WebAppAuthSettings" }, { type: "azure-native:web/v20180201:WebAppAuthSettings" }, { type: "azure-native:web/v20181101:WebAppAuthSettings" }, { type: "azure-native:web/v20190801:WebAppAuthSettings" }, { type: "azure-native:web/v20200601:WebAppAuthSettings" }, { type: "azure-native:web/v20200901:WebAppAuthSettings" }, { type: "azure-native:web/v20201001:WebAppAuthSettings" }, { type: "azure-native:web/v20201201:WebAppAuthSettings" }, { type: "azure-native:web/v20210101:WebAppAuthSettings" }, { type: "azure-native:web/v20210115:WebAppAuthSettings" }, { type: "azure-native:web/v20210201:WebAppAuthSettings" }, { type: "azure-native:web/v20210301:WebAppAuthSettings" }, { type: "azure-native:web/v20220301:WebAppAuthSettings" }, { type: "azure-native:web/v20220901:WebAppAuthSettings" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppAuthSettings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppAuthSettings resource.
 */
export interface WebAppAuthSettingsArgs {
    /**
     * Gets a JSON string containing the Azure AD Acl settings.
     */
    aadClaimsAuthorization?: pulumi.Input<string>;
    /**
     * Login parameters to send to the OpenID Connect authorization endpoint when
     * a user logs in. Each parameter must be in the form "key=value".
     */
    additionalLoginParams?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allowed audience values to consider when validating JSON Web Tokens issued by 
     * Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
     * allowed audience, regardless of this setting.
     */
    allowedAudiences?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
     * This is an advanced setting typically only needed by Windows Store application backends.
     * Note that URLs within the current domain are always implicitly allowed.
     */
    allowedExternalRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The path of the config file containing auth settings.
     * If the path is relative, base will the site's root directory.
     */
    authFilePath?: pulumi.Input<string>;
    /**
     * The Client ID of this relying party application, known as the client_id.
     * This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
     * other 3rd party OpenID Connect providers.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
     * This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
     * Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
     * More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
     */
    clientSecret?: pulumi.Input<string>;
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
     * The ConfigVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of the control plane for Authentication / Authorization.
     */
    configVersion?: pulumi.Input<string>;
    /**
     * The default authentication provider to use when multiple providers are configured.
     * This setting is only needed if multiple providers are configured and the unauthenticated client
     * action is set to "RedirectToLoginPage".
     */
    defaultProvider?: pulumi.Input<types.enums.BuiltInAuthenticationProvider>;
    /**
     * <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The App ID of the Facebook app used for login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookAppId?: pulumi.Input<string>;
    /**
     * The App Secret of the Facebook app used for Facebook Login.
     * This setting is required for enabling Facebook Login.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookAppSecret?: pulumi.Input<string>;
    /**
     * The app setting name that contains the app secret used for Facebook Login.
     */
    facebookAppSecretSettingName?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
     * This setting is optional.
     * Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
     */
    facebookOAuthScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Client Id of the GitHub app used for login.
     * This setting is required for enabling Github login
     */
    gitHubClientId?: pulumi.Input<string>;
    /**
     * The Client Secret of the GitHub app used for Github Login.
     * This setting is required for enabling Github login.
     */
    gitHubClientSecret?: pulumi.Input<string>;
    /**
     * The app setting name that contains the client secret of the Github
     * app used for GitHub Login.
     */
    gitHubClientSecretSettingName?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
     * This setting is optional
     */
    gitHubOAuthScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The OpenID Connect Client ID for the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleClientId?: pulumi.Input<string>;
    /**
     * The client secret associated with the Google web application.
     * This setting is required for enabling Google Sign-In.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleClientSecret?: pulumi.Input<string>;
    /**
     * The app setting name that contains the client secret associated with 
     * the Google web application.
     */
    googleClientSecretSettingName?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
     * This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
     * Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
     */
    googleOAuthScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * "true" if the auth config settings should be read from a file,
     * "false" otherwise
     */
    isAuthFromFile?: pulumi.Input<string>;
    /**
     * The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
     * When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
     * This URI is a case-sensitive identifier for the token issuer.
     * More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
     */
    issuer?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 client ID that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    microsoftAccountClientId?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 client secret that was created for the app used for authentication.
     * This setting is required for enabling Microsoft Account authentication.
     * Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
     */
    microsoftAccountClientSecret?: pulumi.Input<string>;
    /**
     * The app setting name containing the OAuth 2.0 client secret that was created for the
     * app used for authentication.
     */
    microsoftAccountClientSecretSettingName?: pulumi.Input<string>;
    /**
     * The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
     * This setting is optional. If not specified, "wl.basic" is used as the default scope.
     * Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
     */
    microsoftAccountOAuthScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of web app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
     * The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
     */
    runtimeVersion?: pulumi.Input<string>;
    /**
     * The number of hours after session token expiration that a session token can be used to
     * call the token refresh API. The default is 72 hours.
     */
    tokenRefreshExtensionHours?: pulumi.Input<number>;
    /**
     * <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
     *  The default is <code>false</code>.
     */
    tokenStoreEnabled?: pulumi.Input<boolean>;
    /**
     * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    twitterConsumerKey?: pulumi.Input<string>;
    /**
     * The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
     * This setting is required for enabling Twitter Sign-In.
     * Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
     */
    twitterConsumerSecret?: pulumi.Input<string>;
    /**
     * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
     * application used for sign-in.
     */
    twitterConsumerSecretSettingName?: pulumi.Input<string>;
    /**
     * The action to take when an unauthenticated client attempts to access the app.
     */
    unauthenticatedClientAction?: pulumi.Input<types.enums.UnauthenticatedClientAction>;
    /**
     * Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
     */
    validateIssuer?: pulumi.Input<boolean>;
}