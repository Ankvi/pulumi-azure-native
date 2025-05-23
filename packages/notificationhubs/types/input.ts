import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Description of a NotificationHub AdmCredential.
 */
export interface AdmCredentialArgs {
    /**
     * Gets or sets the URL of the authorization token.
     */
    authTokenUrl: pulumi.Input<string>;
    /**
     * Gets or sets the client identifier.
     */
    clientId: pulumi.Input<string>;
    /**
     * Gets or sets the credential secret access key.
     */
    clientSecret: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub ApnsCredential.
 */
export interface ApnsCredentialArgs {
    /**
     * Gets or sets the APNS certificate.
     */
    apnsCertificate?: pulumi.Input<string>;
    /**
     * Gets or sets the issuer (iss) registered claim key, whose value is
     * your 10-character Team ID, obtained from your developer account
     */
    appId?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the application
     */
    appName?: pulumi.Input<string>;
    /**
     * Gets or sets the certificate key.
     */
    certificateKey?: pulumi.Input<string>;
    /**
     * Gets or sets the endpoint of this credential.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Gets or sets a 10-character key identifier (kid) key, obtained from
     * your developer account
     */
    keyId?: pulumi.Input<string>;
    /**
     * Gets or sets the APNS certificate Thumbprint
     */
    thumbprint?: pulumi.Input<string>;
    /**
     * Gets or sets provider Authentication Token, obtained through your
     * developer account
     */
    token?: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub BaiduCredential.
 */
export interface BaiduCredentialArgs {
    /**
     * Gets or sets baidu Api Key.
     */
    baiduApiKey: pulumi.Input<string>;
    /**
     * Gets or sets baidu Endpoint.
     */
    baiduEndPoint: pulumi.Input<string>;
    /**
     * Gets or sets baidu Secret Key
     */
    baiduSecretKey: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub BrowserCredential.
 */
export interface BrowserCredentialArgs {
    /**
     * Gets or sets web push subject.
     */
    subject: pulumi.Input<string>;
    /**
     * Gets or sets VAPID private key.
     */
    vapidPrivateKey: pulumi.Input<string>;
    /**
     * Gets or sets VAPID public key.
     */
    vapidPublicKey: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub FcmV1Credential.
 */
export interface FcmV1CredentialArgs {
    /**
     * Gets or sets client email.
     */
    clientEmail: pulumi.Input<string>;
    /**
     * Gets or sets private key.
     */
    privateKey: pulumi.Input<string>;
    /**
     * Gets or sets project id.
     */
    projectId: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub GcmCredential.
 */
export interface GcmCredentialArgs {
    /**
     * Gets or sets the GCM endpoint.
     */
    gcmEndpoint?: pulumi.Input<string>;
    /**
     * Gets or sets the Google API key.
     */
    googleApiKey: pulumi.Input<string>;
}

/**
 * A network authorization rule that filters traffic based on IP address.
 */
export interface IpRuleArgs {
    /**
     * IP mask.
     */
    ipMask: pulumi.Input<string>;
    /**
     * List of access rights.
     */
    rights: pulumi.Input<pulumi.Input<string | enums.AccessRights>[]>;
}

/**
 * Description of a NotificationHub MpnsCredential.
 */
export interface MpnsCredentialArgs {
    /**
     * Gets or sets the certificate key for this credential.
     */
    certificateKey: pulumi.Input<string>;
    /**
     * Gets or sets the MPNS certificate.
     */
    mpnsCertificate: pulumi.Input<string>;
    /**
     * Gets or sets the MPNS certificate Thumbprint
     */
    thumbprint: pulumi.Input<string>;
}

/**
 * A collection of network authorization rules.
 */
export interface NetworkAclsArgs {
    /**
     * List of IP rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<IpRuleArgs>[]>;
    /**
     * A default (public Internet) network authorization rule, which contains rights if no other network rule matches.
     */
    publicNetworkRule?: pulumi.Input<PublicInternetAuthorizationRuleArgs>;
}

/**
 * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
 */
export interface PnsCredentialsArgs {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    admCredential?: pulumi.Input<AdmCredentialArgs>;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    apnsCredential?: pulumi.Input<ApnsCredentialArgs>;
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    baiduCredential?: pulumi.Input<BaiduCredentialArgs>;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    browserCredential?: pulumi.Input<BrowserCredentialArgs>;
    /**
     * Description of a NotificationHub FcmV1Credential.
     */
    fcmV1Credential?: pulumi.Input<FcmV1CredentialArgs>;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    gcmCredential?: pulumi.Input<GcmCredentialArgs>;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    mpnsCredential?: pulumi.Input<MpnsCredentialArgs>;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    wnsCredential?: pulumi.Input<WnsCredentialArgs>;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    xiaomiCredential?: pulumi.Input<XiaomiCredentialArgs>;
}

/**
 * Private Endpoint Connection properties.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * State of the Private Link Service connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<RemotePrivateLinkServiceConnectionStateArgs>;
    /**
     * State of Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | enums.PrivateEndpointConnectionProvisioningState>;
}

/**
 * A default (public Internet) network authorization rule, which contains rights if no other network rule matches.
 */
export interface PublicInternetAuthorizationRuleArgs {
    /**
     * List of access rights.
     */
    rights: pulumi.Input<pulumi.Input<string | enums.AccessRights>[]>;
}

/**
 * State of the Private Link Service connection.
 */
export interface RemotePrivateLinkServiceConnectionStateArgs {
    /**
     * State of Private Link Connection.
     */
    status?: pulumi.Input<string | enums.PrivateLinkConnectionStatus>;
}

/**
 * The Sku description for a namespace
 */
export interface SkuArgs {
    /**
     * Gets or sets the capacity of the resource
     */
    capacity?: pulumi.Input<number>;
    /**
     * Gets or sets the Sku Family
     */
    family?: pulumi.Input<string>;
    /**
     * Namespace SKU name.
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * Gets or sets the Sku size
     */
    size?: pulumi.Input<string>;
    /**
     * Gets or sets the tier of particular sku
     */
    tier?: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub WnsCredential.
 */
export interface WnsCredentialArgs {
    /**
     * Ges or sets the WNS Certificate Key.
     */
    certificateKey?: pulumi.Input<string>;
    /**
     * Gets or sets the package ID for this credential.
     */
    packageSid?: pulumi.Input<string>;
    /**
     * Gets or sets the secret key.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * Gets or sets the Windows Live endpoint.
     */
    windowsLiveEndpoint?: pulumi.Input<string>;
    /**
     * Gets or sets the WNS Certificate.
     */
    wnsCertificate?: pulumi.Input<string>;
}

/**
 * Description of a NotificationHub XiaomiCredential.
 */
export interface XiaomiCredentialArgs {
    /**
     * Gets or sets app secret.
     */
    appSecret?: pulumi.Input<string>;
    /**
     * Gets or sets xiaomi service endpoint.
     */
    endpoint?: pulumi.Input<string>;
}
