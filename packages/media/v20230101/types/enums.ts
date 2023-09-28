export const AccountEncryptionKeyType = {
    /**
     * The Account Key is encrypted with a System Key.
     */
    SystemKey: "SystemKey",
    /**
     * The Account Key is encrypted with a Customer Key.
     */
    CustomerKey: "CustomerKey",
} as const;

/**
 * The type of key used to encrypt the Account Key.
 */
export type AccountEncryptionKeyType = (typeof AccountEncryptionKeyType)[keyof typeof AccountEncryptionKeyType];

export const AssetContainerPermission = {
    /**
     * The SAS URL will allow read access to the container.
     */
    Read: "Read",
    /**
     * The SAS URL will allow read and write access to the container.
     */
    ReadWrite: "ReadWrite",
    /**
     * The SAS URL will allow read, write and delete access to the container.
     */
    ReadWriteDelete: "ReadWriteDelete",
} as const;

/**
 * The permissions to set on the SAS URL.
 */
export type AssetContainerPermission = (typeof AssetContainerPermission)[keyof typeof AssetContainerPermission];

export const ContentKeyPolicyFairPlayRentalAndLeaseKeyType = {
    /**
     * Represents a ContentKeyPolicyFairPlayRentalAndLeaseKeyType that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * Key duration is not specified.
     */
    Undefined: "Undefined",
    /**
     * Dual expiry for offline rental.
     */
    DualExpiry: "DualExpiry",
    /**
     * Content key can be persisted with an unlimited duration
     */
    PersistentUnlimited: "PersistentUnlimited",
    /**
     * Content key can be persisted and the valid duration is limited by the Rental Duration value
     */
    PersistentLimited: "PersistentLimited",
} as const;

/**
 * The rental and lease key type.
 */
export type ContentKeyPolicyFairPlayRentalAndLeaseKeyType = (typeof ContentKeyPolicyFairPlayRentalAndLeaseKeyType)[keyof typeof ContentKeyPolicyFairPlayRentalAndLeaseKeyType];

export const ContentKeyPolicyPlayReadyContentType = {
    /**
     * Represents a ContentKeyPolicyPlayReadyContentType that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * Unspecified content type.
     */
    Unspecified: "Unspecified",
    /**
     * Ultraviolet download content type.
     */
    UltraVioletDownload: "UltraVioletDownload",
    /**
     * Ultraviolet streaming content type.
     */
    UltraVioletStreaming: "UltraVioletStreaming",
} as const;

/**
 * The PlayReady content type.
 */
export type ContentKeyPolicyPlayReadyContentType = (typeof ContentKeyPolicyPlayReadyContentType)[keyof typeof ContentKeyPolicyPlayReadyContentType];

export const ContentKeyPolicyPlayReadyLicenseType = {
    /**
     * Represents a ContentKeyPolicyPlayReadyLicenseType that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * Non persistent license.
     */
    NonPersistent: "NonPersistent",
    /**
     * Persistent license. Allows offline playback.
     */
    Persistent: "Persistent",
} as const;

/**
 * The license type.
 */
export type ContentKeyPolicyPlayReadyLicenseType = (typeof ContentKeyPolicyPlayReadyLicenseType)[keyof typeof ContentKeyPolicyPlayReadyLicenseType];

export const ContentKeyPolicyPlayReadyUnknownOutputPassingOption = {
    /**
     * Represents a ContentKeyPolicyPlayReadyUnknownOutputPassingOption that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * Passing the video portion of protected content to an Unknown Output is not allowed.
     */
    NotAllowed: "NotAllowed",
    /**
     * Passing the video portion of protected content to an Unknown Output is allowed.
     */
    Allowed: "Allowed",
    /**
     * Passing the video portion of protected content to an Unknown Output is allowed but with constrained resolution.
     */
    AllowedWithVideoConstriction: "AllowedWithVideoConstriction",
} as const;

/**
 * Configures Unknown output handling settings of the license.
 */
export type ContentKeyPolicyPlayReadyUnknownOutputPassingOption = (typeof ContentKeyPolicyPlayReadyUnknownOutputPassingOption)[keyof typeof ContentKeyPolicyPlayReadyUnknownOutputPassingOption];

export const ContentKeyPolicyRestrictionTokenType = {
    /**
     * Represents a ContentKeyPolicyRestrictionTokenType that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * Simple Web Token.
     */
    Swt: "Swt",
    /**
     * JSON Web Token.
     */
    Jwt: "Jwt",
} as const;

/**
 * The type of token.
 */
export type ContentKeyPolicyRestrictionTokenType = (typeof ContentKeyPolicyRestrictionTokenType)[keyof typeof ContentKeyPolicyRestrictionTokenType];

export const DefaultAction = {
    /**
     * All public IP addresses are allowed.
     */
    Allow: "Allow",
    /**
     * Public IP addresses are blocked.
     */
    Deny: "Deny",
} as const;

/**
 * The behavior for IP access control in Key Delivery.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const FilterTrackPropertyCompareOperation = {
    /**
     * The equal operation.
     */
    Equal: "Equal",
    /**
     * The not equal operation.
     */
    NotEqual: "NotEqual",
} as const;

/**
 * The track property condition operation.
 */
export type FilterTrackPropertyCompareOperation = (typeof FilterTrackPropertyCompareOperation)[keyof typeof FilterTrackPropertyCompareOperation];

export const FilterTrackPropertyType = {
    /**
     * The unknown track property type.
     */
    Unknown: "Unknown",
    /**
     * The type.
     */
    Type: "Type",
    /**
     * The name.
     */
    Name: "Name",
    /**
     * The language.
     */
    Language: "Language",
    /**
     * The fourCC.
     */
    FourCC: "FourCC",
    /**
     * The bitrate.
     */
    Bitrate: "Bitrate",
} as const;

/**
 * The track property type.
 */
export type FilterTrackPropertyType = (typeof FilterTrackPropertyType)[keyof typeof FilterTrackPropertyType];

export const MinimumTlsVersion = {
    /**
     * Minimum TLS version is TLS 1.0.
     */
    Tls10: "Tls10",
    /**
     * Minimum TLS version is TLS 1.1.
     */
    Tls11: "Tls11",
    /**
     * Minimum TLS version is TLS 1.2.
     */
    Tls12: "Tls12",
    /**
     * Minimum TLS version is TLS 1.3.
     */
    Tls13: "Tls13",
} as const;

/**
 * The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
 */
export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccess = {
    /**
     * Public network access is enabled.
     */
    Enabled: "Enabled",
    /**
     * Public network access is disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for resources under the Media Services account.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const SecurityLevel = {
    /**
     * Represents a SecurityLevel that is unavailable in current API version.
     */
    Unknown: "Unknown",
    /**
     * For clients under development or test. No protection against unauthorized use.
     */
    SL150: "SL150",
    /**
     * For hardened devices and applications consuming commercial content. Software or hardware protection.
     */
    SL2000: "SL2000",
    /**
     * For hardened devices only. Hardware protection.
     */
    SL3000: "SL3000",
} as const;

/**
 * The security level.
 */
export type SecurityLevel = (typeof SecurityLevel)[keyof typeof SecurityLevel];

export const StorageAccountType = {
    /**
     * The primary storage account for the Media Services account.
     */
    Primary: "Primary",
    /**
     * A secondary storage account for the Media Services account.
     */
    Secondary: "Secondary",
} as const;

/**
 * The type of the storage account.
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const StorageAuthentication = {
    /**
     * System authentication.
     */
    System: "System",
    /**
     * Managed Identity authentication.
     */
    ManagedIdentity: "ManagedIdentity",
} as const;

export type StorageAuthentication = (typeof StorageAuthentication)[keyof typeof StorageAuthentication];

export const TrackPropertyCompareOperation = {
    /**
     * Unknown track property compare operation
     */
    Unknown: "Unknown",
    /**
     * Equal operation
     */
    Equal: "Equal",
} as const;

/**
 * Track property condition operation
 */
export type TrackPropertyCompareOperation = (typeof TrackPropertyCompareOperation)[keyof typeof TrackPropertyCompareOperation];

export const TrackPropertyType = {
    /**
     * Unknown track property
     */
    Unknown: "Unknown",
    /**
     * Track FourCC
     */
    FourCC: "FourCC",
} as const;

/**
 * Track property type
 */
export type TrackPropertyType = (typeof TrackPropertyType)[keyof typeof TrackPropertyType];

export const Visibility = {
    /**
     * The track is hidden to video player.
     */
    Hidden: "Hidden",
    /**
     * The track is visible to video player.
     */
    Visible: "Visible",
} as const;

/**
 * When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
