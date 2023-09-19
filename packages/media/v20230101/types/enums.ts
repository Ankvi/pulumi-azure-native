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

export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

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

export type Visibility = (typeof Visibility)[keyof typeof Visibility];
