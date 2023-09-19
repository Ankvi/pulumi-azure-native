import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Description of a NotificationHub AdmCredential.
 */
export interface AdmCredentialPropertiesResponse {
    /**
     * Gets or sets the URL of the authorization token.
     */
    authTokenUrl: string;
    /**
     * Gets or sets the client identifier.
     */
    clientId: string;
    /**
     * Gets or sets the credential secret access key.
     */
    clientSecret: string;
}

/**
 * Description of a NotificationHub AdmCredential.
 */
export interface AdmCredentialResponse {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    properties: AdmCredentialPropertiesResponse;
}

/**
 * Description of a NotificationHub ApnsCredential.
 */
export interface ApnsCredentialPropertiesResponse {
    /**
     * Gets or sets the APNS certificate.
     */
    apnsCertificate?: string;
    /**
     * Gets or sets the issuer (iss) registered claim key, whose value is
     * your 10-character Team ID, obtained from your developer account
     */
    appId?: string;
    /**
     * Gets or sets the name of the application
     */
    appName?: string;
    /**
     * Gets or sets the certificate key.
     */
    certificateKey?: string;
    /**
     * Gets or sets the endpoint of this credential.
     */
    endpoint: string;
    /**
     * Gets or sets a 10-character key identifier (kid) key, obtained from
     * your developer account
     */
    keyId?: string;
    /**
     * Gets or sets the APNS certificate Thumbprint
     */
    thumbprint?: string;
    /**
     * Gets or sets provider Authentication Token, obtained through your
     * developer account
     */
    token?: string;
}

/**
 * Description of a NotificationHub ApnsCredential.
 */
export interface ApnsCredentialResponse {
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    properties: ApnsCredentialPropertiesResponse;
}

/**
 * Description of a NotificationHub BaiduCredential.
 */
export interface BaiduCredentialPropertiesResponse {
    /**
     * Gets or sets baidu Api Key.
     */
    baiduApiKey: string;
    /**
     * Gets or sets baidu Endpoint.
     */
    baiduEndPoint: string;
    /**
     * Gets or sets baidu Secret Key
     */
    baiduSecretKey: string;
}

/**
 * Description of a NotificationHub BaiduCredential.
 */
export interface BaiduCredentialResponse {
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    properties: BaiduCredentialPropertiesResponse;
}

/**
 * Description of a NotificationHub BrowserCredential.
 */
export interface BrowserCredentialPropertiesResponse {
    /**
     * Gets or sets web push subject.
     */
    subject: string;
    /**
     * Gets or sets VAPID private key.
     */
    vapidPrivateKey: string;
    /**
     * Gets or sets VAPID public key.
     */
    vapidPublicKey: string;
}

/**
 * Description of a NotificationHub BrowserCredential.
 */
export interface BrowserCredentialResponse {
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    properties: BrowserCredentialPropertiesResponse;
}

/**
 * Description of a NotificationHub GcmCredential.
 */
export interface GcmCredentialPropertiesResponse {
    /**
     * Gets or sets the GCM endpoint.
     */
    gcmEndpoint?: string;
    /**
     * Gets or sets the Google API key.
     */
    googleApiKey: string;
}

/**
 * Description of a NotificationHub GcmCredential.
 */
export interface GcmCredentialResponse {
    /**
     * Description of a NotificationHub GcmCredential.
     */
    properties: GcmCredentialPropertiesResponse;
}

/**
 * A network authorization rule that filters traffic based on IP address.
 */
export interface IpRuleResponse {
    /**
     * IP mask.
     */
    ipMask: string;
    /**
     * List of access rights.
     */
    rights: string[];
}

/**
 * Description of a NotificationHub MpnsCredential.
 */
export interface MpnsCredentialPropertiesResponse {
    /**
     * Gets or sets the certificate key for this credential.
     */
    certificateKey: string;
    /**
     * Gets or sets the MPNS certificate.
     */
    mpnsCertificate: string;
    /**
     * Gets or sets the MPNS certificate Thumbprint
     */
    thumbprint: string;
}

/**
 * Description of a NotificationHub MpnsCredential.
 */
export interface MpnsCredentialResponse {
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    properties: MpnsCredentialPropertiesResponse;
}

/**
 * Represents namespace properties.
 */
export interface NamespacePropertiesResponse {
    /**
     * Time when the namespace was created.
     */
    createdAt: string;
    /**
     * Gets or sets whether or not the namespace is set as Critical.
     */
    critical: boolean;
    /**
     * Deprecated.
     */
    dataCenter?: string;
    /**
     * Gets or sets whether or not the namespace is currently enabled.
     */
    enabled: boolean;
    /**
     * Azure Insights Metrics id.
     */
    metricId: string;
    /**
     * Name of the Notification Hubs namespace. This is immutable property, set automatically 
     * by the service when the namespace is created.
     */
    name: string;
    /**
     * Defines values for NamespaceType.
     */
    namespaceType?: string;
    /**
     * A collection of network authorization rules.
     */
    networkAcls?: NetworkAclsResponse;
    /**
     * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
     */
    pnsCredentials?: PnsCredentialsResponse;
    /**
     * Private Endpoint Connections for namespace
     */
    privateEndpointConnections: PrivateEndpointConnectionResourceResponse[];
    /**
     * Defines values for OperationProvisioningState.
     */
    provisioningState?: string;
    /**
     * Type of public network access.
     */
    publicNetworkAccess?: string;
    /**
     * Region. The value is always set to the same value as Namespace.Location, so we are deprecating
     * this property.
     */
    region: string;
    /**
     * Allowed replication region
     */
    replicationRegion?: string;
    /**
     * Gets or sets scaleUnit where the namespace gets created
     */
    scaleUnit?: string;
    /**
     * Gets or sets endpoint you can use to perform NotificationHub
     * operations.
     */
    serviceBusEndpoint: string;
    /**
     * Namespace status.
     */
    status?: string;
    /**
     * Namespace subscription id.
     */
    subscriptionId: string;
    /**
     * Time when the namespace was updated.
     */
    updatedAt: string;
    /**
     * Namespace SKU name.
     */
    zoneRedundancy?: string;
}

/**
 * A collection of network authorization rules.
 */
export interface NetworkAclsResponse {
    /**
     * List of IP rules.
     */
    ipRules?: IpRuleResponse[];
    /**
     * A default (public Internet) network authorization rule, which contains rights if no other network rule matches.
     */
    publicNetworkRule?: PublicInternetAuthorizationRuleResponse;
}

/**
 * NotificationHub properties.
 */
export interface NotificationHubPropertiesResponse {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    admCredential?: AdmCredentialResponse;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    apnsCredential?: ApnsCredentialResponse;
    /**
     * Gets or sets the AuthorizationRules of the created NotificationHub
     */
    authorizationRules: SharedAccessAuthorizationRulePropertiesResponse[];
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    baiduCredential?: BaiduCredentialResponse;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    browserCredential?: BrowserCredentialResponse;
    dailyMaxActiveDevices: number;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    gcmCredential?: GcmCredentialResponse;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    mpnsCredential?: MpnsCredentialResponse;
    /**
     * Gets or sets the NotificationHub name.
     */
    name?: string;
    /**
     * Gets or sets the RegistrationTtl of the created NotificationHub
     */
    registrationTtl?: string;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    wnsCredential?: WnsCredentialResponse;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    xiaomiCredential?: XiaomiCredentialResponse;
}

/**
 * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
 */
export interface PnsCredentialsResponse {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    admCredential?: AdmCredentialResponse;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    apnsCredential?: ApnsCredentialResponse;
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    baiduCredential?: BaiduCredentialResponse;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    browserCredential?: BrowserCredentialResponse;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    gcmCredential?: GcmCredentialResponse;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    mpnsCredential?: MpnsCredentialResponse;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    wnsCredential?: WnsCredentialResponse;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    xiaomiCredential?: XiaomiCredentialResponse;
}

/**
 * Private Endpoint Connection properties.
 */
export interface PrivateEndpointConnectionPropertiesResponse {
    /**
     * List of group ids. For Notification Hubs, it always contains a single "namespace" element.
     */
    groupIds: string[];
    /**
     * Represents a Private Endpoint that is connected to Notification Hubs namespace using Private Endpoint Connection.
     */
    privateEndpoint?: RemotePrivateEndpointConnectionResponse;
    /**
     * State of the Private Link Service connection.
     */
    privateLinkServiceConnectionState?: RemotePrivateLinkServiceConnectionStateResponse;
    /**
     * State of Private Endpoint Connection.
     */
    provisioningState?: string;
}

/**
 * Represents a Private Endpoint Connection ARM resource - a sub-resource of Notification Hubs namespace.
 */
export interface PrivateEndpointConnectionResourceResponse {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Private Endpoint Connection properties.
     */
    properties?: PrivateEndpointConnectionPropertiesResponse;
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
 * A default (public Internet) network authorization rule, which contains rights if no other network rule matches.
 */
export interface PublicInternetAuthorizationRuleResponse {
    /**
     * List of access rights.
     */
    rights: string[];
}

/**
 * Represents a Private Endpoint that is connected to Notification Hubs namespace using Private Endpoint Connection.
 */
export interface RemotePrivateEndpointConnectionResponse {
    /**
     * ARM resource ID of the Private Endpoint. This may belong to different subscription and resource group than a Notification Hubs namespace.
     */
    id: string;
}

/**
 * State of the Private Link Service connection.
 */
export interface RemotePrivateLinkServiceConnectionStateResponse {
    /**
     * Human-friendly description of required actions.
     */
    actionsRequired: string;
    /**
     * Human-friendly description.
     */
    description: string;
    /**
     * State of Private Link Connection.
     */
    status?: string;
}

/**
 * SharedAccessAuthorizationRule properties.
 */
export interface SharedAccessAuthorizationRulePropertiesResponse {
    /**
     * Gets a string that describes the claim type
     */
    claimType: string;
    /**
     * Gets a string that describes the claim value
     */
    claimValue: string;
    /**
     * Gets the created time for this rule
     */
    createdTime: string;
    /**
     * Gets a string that describes the authorization rule.
     */
    keyName: string;
    /**
     * Gets the last modified time for this rule
     */
    modifiedTime: string;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    primaryKey?: string;
    /**
     * Gets the revision number for the rule
     */
    revision: number;
    /**
     * Gets or sets the rights associated with the rule.
     */
    rights: string[];
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    secondaryKey?: string;
}

/**
 * The Sku description for a namespace
 */
export interface SkuResponse {
    /**
     * Gets or sets the capacity of the resource
     */
    capacity?: number;
    /**
     * Gets or sets the Sku Family
     */
    family?: string;
    /**
     * Namespace SKU name.
     */
    name: string;
    /**
     * Gets or sets the Sku size
     */
    size?: string;
    /**
     * Gets or sets the tier of particular sku
     */
    tier?: string;
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
 * Description of a NotificationHub WnsCredential.
 */
export interface WnsCredentialPropertiesResponse {
    /**
     * Ges or sets the WNS Certificate Key.
     */
    certificateKey?: string;
    /**
     * Gets or sets the package ID for this credential.
     */
    packageSid?: string;
    /**
     * Gets or sets the secret key.
     */
    secretKey?: string;
    /**
     * Gets or sets the Windows Live endpoint.
     */
    windowsLiveEndpoint?: string;
    /**
     * Gets or sets the WNS Certificate.
     */
    wnsCertificate?: string;
}

/**
 * Description of a NotificationHub WnsCredential.
 */
export interface WnsCredentialResponse {
    /**
     * Description of a NotificationHub WnsCredential.
     */
    properties: WnsCredentialPropertiesResponse;
}

/**
 * Description of a NotificationHub XiaomiCredentialProperties.
 */
export interface XiaomiCredentialPropertiesResponse {
    /**
     * Gets or sets app secret.
     */
    appSecret?: string;
    /**
     * Gets or sets xiaomi service endpoint.
     */
    endpoint?: string;
}

/**
 * Description of a NotificationHub XiaomiCredential.
 */
export interface XiaomiCredentialResponse {
    /**
     * Description of a NotificationHub XiaomiCredentialProperties.
     */
    properties: XiaomiCredentialPropertiesResponse;
}


