import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AccessControlArgs {
        /**
         * The behavior for IP access control in Key Delivery.
         */
        defaultAction?: pulumi.Input<string | enums.DefaultAction>;
        /**
         * The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.
         */
        ipAllowList?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface AccountEncryptionArgs {
        /**
         * The Key Vault identity.
         */
        identity?: pulumi.Input<ResourceIdentityArgs>;
        /**
         * The properties of the key used to encrypt the account.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * The type of key used to encrypt the Account Key.
         */
        type: pulumi.Input<string | enums.AccountEncryptionKeyType>;
    }

    /**
     * Represents an audio track in the asset.
     */
    export interface AudioTrackArgs {
        /**
         * The DASH specific setting for the audio track.
         */
        dashSettings?: pulumi.Input<DashSettingsArgs>;
        /**
         * The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The file name to the source file. This file is located in the storage container of the asset.
         */
        fileName?: pulumi.Input<string>;
        /**
         * The HLS specific setting for the audio track.
         */
        hlsSettings?: pulumi.Input<HlsSettingsArgs>;
        /**
         * The RFC5646 language code for the audio track.
         */
        languageCode?: pulumi.Input<string>;
        /**
         * The MPEG-4 audio track ID for the audio track.
         */
        mpeg4TrackId?: pulumi.Input<number>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AudioTrack'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.AudioTrack">;
    }

    /**
     * Class to specify DRM configurations of CommonEncryptionCbcs scheme in Streaming Policy
     */
    export interface CbcsDrmConfigurationArgs {
        /**
         * FairPlay configurations
         */
        fairPlay?: pulumi.Input<StreamingPolicyFairPlayConfigurationArgs>;
        /**
         * PlayReady configurations
         */
        playReady?: pulumi.Input<StreamingPolicyPlayReadyConfigurationArgs>;
        /**
         * Widevine configurations
         */
        widevine?: pulumi.Input<StreamingPolicyWidevineConfigurationArgs>;
    }

    /**
     * Class to specify DRM configurations of CommonEncryptionCenc scheme in Streaming Policy
     */
    export interface CencDrmConfigurationArgs {
        /**
         * PlayReady configurations
         */
        playReady?: pulumi.Input<StreamingPolicyPlayReadyConfigurationArgs>;
        /**
         * Widevine configurations
         */
        widevine?: pulumi.Input<StreamingPolicyWidevineConfigurationArgs>;
    }

    /**
     * Class to specify ClearKey configuration of common encryption schemes in Streaming Policy
     */
    export interface ClearKeyEncryptionConfigurationArgs {
        /**
         * Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId.
         */
        customKeysAcquisitionUrlTemplate?: pulumi.Input<string>;
    }

    /**
     * Class for CommonEncryptionCbcs encryption scheme
     */
    export interface CommonEncryptionCbcsArgs {
        /**
         * Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme.
         */
        clearKeyEncryptionConfiguration?: pulumi.Input<ClearKeyEncryptionConfigurationArgs>;
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: pulumi.Input<pulumi.Input<TrackSelectionArgs>[]>;
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: pulumi.Input<StreamingPolicyContentKeysArgs>;
        /**
         * Configuration of DRMs for current encryption scheme
         */
        drm?: pulumi.Input<CbcsDrmConfigurationArgs>;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: pulumi.Input<EnabledProtocolsArgs>;
    }

    /**
     * Class for envelope encryption scheme
     */
    export interface CommonEncryptionCencArgs {
        /**
         * Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme.
         */
        clearKeyEncryptionConfiguration?: pulumi.Input<ClearKeyEncryptionConfigurationArgs>;
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: pulumi.Input<pulumi.Input<TrackSelectionArgs>[]>;
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: pulumi.Input<StreamingPolicyContentKeysArgs>;
        /**
         * Configuration of DRMs for CommonEncryptionCenc encryption scheme
         */
        drm?: pulumi.Input<CencDrmConfigurationArgs>;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: pulumi.Input<EnabledProtocolsArgs>;
    }

    /**
     * Represents a configuration for non-DRM keys.
     */
    export interface ContentKeyPolicyClearKeyConfigurationArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration">;
    }

    /**
     * Specifies a configuration for FairPlay licenses.
     */
    export interface ContentKeyPolicyFairPlayConfigurationArgs {
        /**
         * The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded.
         */
        ask: pulumi.Input<string>;
        /**
         * The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
         */
        fairPlayPfx: pulumi.Input<string>;
        /**
         * The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
         */
        fairPlayPfxPassword: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration">;
        /**
         * Offline rental policy
         */
        offlineRentalConfiguration?: pulumi.Input<ContentKeyPolicyFairPlayOfflineRentalConfigurationArgs>;
        /**
         * The rental and lease key type.
         */
        rentalAndLeaseKeyType: pulumi.Input<string | enums.ContentKeyPolicyFairPlayRentalAndLeaseKeyType>;
        /**
         * The rental duration. Must be greater than or equal to 0.
         */
        rentalDuration: pulumi.Input<number>;
    }

    export interface ContentKeyPolicyFairPlayOfflineRentalConfigurationArgs {
        /**
         * Playback duration
         */
        playbackDurationSeconds: pulumi.Input<number>;
        /**
         * Storage duration
         */
        storageDurationSeconds: pulumi.Input<number>;
    }

    /**
     * Represents an open restriction. License or key will be delivered on every request.
     */
    export interface ContentKeyPolicyOpenRestrictionArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyOpenRestriction'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyOpenRestriction">;
    }

    /**
     * Represents a policy option.
     */
    export interface ContentKeyPolicyOptionArgs {
        /**
         * The key delivery configuration.
         */
        configuration: pulumi.Input<ContentKeyPolicyClearKeyConfigurationArgs | ContentKeyPolicyFairPlayConfigurationArgs | ContentKeyPolicyPlayReadyConfigurationArgs | ContentKeyPolicyUnknownConfigurationArgs | ContentKeyPolicyWidevineConfigurationArgs>;
        /**
         * The Policy Option description.
         */
        name?: pulumi.Input<string>;
        /**
         * The requirements that must be met to deliver keys with this configuration
         */
        restriction: pulumi.Input<ContentKeyPolicyOpenRestrictionArgs | ContentKeyPolicyTokenRestrictionArgs | ContentKeyPolicyUnknownRestrictionArgs>;
    }

    /**
     * Specifies a configuration for PlayReady licenses.
     */
    export interface ContentKeyPolicyPlayReadyConfigurationArgs {
        /**
         * The PlayReady licenses.
         */
        licenses: pulumi.Input<pulumi.Input<ContentKeyPolicyPlayReadyLicenseArgs>[]>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration">;
        /**
         * The custom response data.
         */
        responseCustomData?: pulumi.Input<string>;
    }

    /**
     * Specifies that the content key ID is in the PlayReady header.
     */
    export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader">;
    }

    /**
     * Specifies that the content key ID is specified in the PlayReady configuration.
     */
    export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierArgs {
        /**
         * The content key ID.
         */
        keyId: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier">;
    }

    /**
     * Configures the Explicit Analog Television Output Restriction control bits. For further details see the PlayReady Compliance Rules.
     */
    export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionArgs {
        /**
         * Indicates whether this restriction is enforced on a Best Effort basis.
         */
        bestEffort: pulumi.Input<boolean>;
        /**
         * Configures the restriction control bits. Must be between 0 and 3 inclusive.
         */
        configurationData: pulumi.Input<number>;
    }

    /**
     * The PlayReady license
     */
    export interface ContentKeyPolicyPlayReadyLicenseArgs {
        /**
         * A flag indicating whether test devices can use the license.
         */
        allowTestDevices: pulumi.Input<boolean>;
        /**
         * The begin date of license
         */
        beginDate?: pulumi.Input<string>;
        /**
         * The content key location.
         */
        contentKeyLocation: pulumi.Input<ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderArgs | ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierArgs>;
        /**
         * The PlayReady content type.
         */
        contentType: pulumi.Input<string | enums.ContentKeyPolicyPlayReadyContentType>;
        /**
         * The expiration date of license.
         */
        expirationDate?: pulumi.Input<string>;
        /**
         * The grace period of license.
         */
        gracePeriod?: pulumi.Input<string>;
        /**
         * The license type.
         */
        licenseType: pulumi.Input<string | enums.ContentKeyPolicyPlayReadyLicenseType>;
        /**
         * The license PlayRight
         */
        playRight?: pulumi.Input<ContentKeyPolicyPlayReadyPlayRightArgs>;
        /**
         * The relative begin date of license.
         */
        relativeBeginDate?: pulumi.Input<string>;
        /**
         * The relative expiration date of license.
         */
        relativeExpirationDate?: pulumi.Input<string>;
        /**
         * The security level.
         */
        securityLevel?: pulumi.Input<string | enums.SecurityLevel>;
    }

    /**
     * Configures the Play Right in the PlayReady license.
     */
    export interface ContentKeyPolicyPlayReadyPlayRightArgs {
        /**
         * Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
         */
        agcAndColorStripeRestriction?: pulumi.Input<number>;
        /**
         * Configures Unknown output handling settings of the license.
         */
        allowPassingVideoContentToUnknownOutput: pulumi.Input<string | enums.ContentKeyPolicyPlayReadyUnknownOutputPassingOption>;
        /**
         * Specifies the output protection level for compressed digital audio.
         */
        analogVideoOpl?: pulumi.Input<number>;
        /**
         * Specifies the output protection level for compressed digital audio.
         */
        compressedDigitalAudioOpl?: pulumi.Input<number>;
        /**
         * Specifies the output protection level for compressed digital video.
         */
        compressedDigitalVideoOpl?: pulumi.Input<number>;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        digitalVideoOnlyContentRestriction: pulumi.Input<boolean>;
        /**
         * Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive.
         */
        explicitAnalogTelevisionOutputRestriction?: pulumi.Input<ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionArgs>;
        /**
         * The amount of time that the license is valid after the license is first used to play content.
         */
        firstPlayExpiration?: pulumi.Input<string>;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        imageConstraintForAnalogComponentVideoRestriction: pulumi.Input<boolean>;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        imageConstraintForAnalogComputerMonitorRestriction: pulumi.Input<boolean>;
        /**
         * Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
         */
        scmsRestriction?: pulumi.Input<number>;
        /**
         * Specifies the output protection level for uncompressed digital audio.
         */
        uncompressedDigitalAudioOpl?: pulumi.Input<number>;
        /**
         * Specifies the output protection level for uncompressed digital video.
         */
        uncompressedDigitalVideoOpl?: pulumi.Input<number>;
    }

    /**
     * Specifies a RSA key for token validation
     */
    export interface ContentKeyPolicyRsaTokenKeyArgs {
        /**
         * The RSA Parameter exponent
         */
        exponent: pulumi.Input<string>;
        /**
         * The RSA Parameter modulus
         */
        modulus: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyRsaTokenKey'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyRsaTokenKey">;
    }

    /**
     * Specifies a symmetric key for token validation.
     */
    export interface ContentKeyPolicySymmetricTokenKeyArgs {
        /**
         * The key value of the key
         */
        keyValue: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicySymmetricTokenKey">;
    }

    /**
     * Represents a token claim.
     */
    export interface ContentKeyPolicyTokenClaimArgs {
        /**
         * Token claim type.
         */
        claimType?: pulumi.Input<string>;
        /**
         * Token claim value.
         */
        claimValue?: pulumi.Input<string>;
    }

    /**
     * Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
     */
    export interface ContentKeyPolicyTokenRestrictionArgs {
        /**
         * A list of alternative verification keys.
         */
        alternateVerificationKeys?: pulumi.Input<pulumi.Input<ContentKeyPolicyRsaTokenKeyArgs | ContentKeyPolicySymmetricTokenKeyArgs | ContentKeyPolicyX509CertificateTokenKeyArgs>[]>;
        /**
         * The audience for the token.
         */
        audience: pulumi.Input<string>;
        /**
         * The token issuer.
         */
        issuer: pulumi.Input<string>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyTokenRestriction'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyTokenRestriction">;
        /**
         * The OpenID connect discovery document.
         */
        openIdConnectDiscoveryDocument?: pulumi.Input<string>;
        /**
         * The primary verification key.
         */
        primaryVerificationKey: pulumi.Input<ContentKeyPolicyRsaTokenKeyArgs | ContentKeyPolicySymmetricTokenKeyArgs | ContentKeyPolicyX509CertificateTokenKeyArgs>;
        /**
         * A list of required token claims.
         */
        requiredClaims?: pulumi.Input<pulumi.Input<ContentKeyPolicyTokenClaimArgs>[]>;
        /**
         * The type of token.
         */
        restrictionTokenType: pulumi.Input<string | enums.ContentKeyPolicyRestrictionTokenType>;
    }

    /**
     * Represents a ContentKeyPolicyConfiguration that is unavailable in the current API version.
     */
    export interface ContentKeyPolicyUnknownConfigurationArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyUnknownConfiguration">;
    }

    /**
     * Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.
     */
    export interface ContentKeyPolicyUnknownRestrictionArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownRestriction'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyUnknownRestriction">;
    }

    /**
     * Specifies a configuration for Widevine licenses.
     */
    export interface ContentKeyPolicyWidevineConfigurationArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyWidevineConfiguration">;
        /**
         * The Widevine template.
         */
        widevineTemplate: pulumi.Input<string>;
    }

    /**
     * Specifies a certificate for token validation.
     */
    export interface ContentKeyPolicyX509CertificateTokenKeyArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey">;
        /**
         * The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)
         */
        rawBody: pulumi.Input<string>;
    }

    /**
     * The DASH setting for a track.
     */
    export interface DashSettingsArgs {
        /**
         * The role for the DASH setting.
         */
        role?: pulumi.Input<string>;
    }

    /**
     * Class to specify properties of default content key for each encryption scheme
     */
    export interface DefaultKeyArgs {
        /**
         * Label can be used to specify Content Key when creating a Streaming Locator
         */
        label?: pulumi.Input<string>;
        /**
         * Policy used by Default Key
         */
        policyName?: pulumi.Input<string>;
    }

    /**
     * Class to specify which protocols are enabled
     */
    export interface EnabledProtocolsArgs {
        /**
         * Enable DASH protocol or not
         */
        dash: pulumi.Input<boolean>;
        /**
         * Enable Download protocol or not
         */
        download: pulumi.Input<boolean>;
        /**
         * Enable HLS protocol or not
         */
        hls: pulumi.Input<boolean>;
        /**
         * Enable SmoothStreaming protocol or not
         */
        smoothStreaming: pulumi.Input<boolean>;
    }

    /**
     * Class for EnvelopeEncryption encryption scheme
     */
    export interface EnvelopeEncryptionArgs {
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: pulumi.Input<pulumi.Input<TrackSelectionArgs>[]>;
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: pulumi.Input<StreamingPolicyContentKeysArgs>;
        /**
         * Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customKeyAcquisitionUrlTemplate?: pulumi.Input<string>;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: pulumi.Input<EnabledProtocolsArgs>;
    }

    /**
     * The class to specify one track property condition.
     */
    export interface FilterTrackPropertyConditionArgs {
        /**
         * The track property condition operation.
         */
        operation: pulumi.Input<string | enums.FilterTrackPropertyCompareOperation>;
        /**
         * The track property type.
         */
        property: pulumi.Input<string | enums.FilterTrackPropertyType>;
        /**
         * The track property value.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Representing a list of FilterTrackPropertyConditions to select a track.  The filters are combined using a logical AND operation.
     */
    export interface FilterTrackSelectionArgs {
        /**
         * The track selections.
         */
        trackSelections: pulumi.Input<pulumi.Input<FilterTrackPropertyConditionArgs>[]>;
    }

    /**
     * Filter First Quality
     */
    export interface FirstQualityArgs {
        /**
         * The first quality bitrate.
         */
        bitrate: pulumi.Input<number>;
    }

    /**
     * The HLS setting for a track.
     */
    export interface HlsSettingsArgs {
        /**
         * The characteristics for the HLS setting.
         */
        characteristics?: pulumi.Input<string>;
        /**
         * The default for the HLS setting.
         */
        default?: pulumi.Input<boolean>;
        /**
         * The forced for the HLS setting.
         */
        forced?: pulumi.Input<boolean>;
    }

    export interface KeyDeliveryArgs {
        /**
         * The access control properties for Key Delivery.
         */
        accessControl?: pulumi.Input<AccessControlArgs>;
    }

    export interface KeyVaultPropertiesArgs {
        /**
         * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
         */
        keyIdentifier?: pulumi.Input<string>;
    }

    export interface MediaServiceIdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<string>;
        /**
         * The user assigned managed identities.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Class for NoEncryption scheme
     */
    export interface NoEncryptionArgs {
        /**
         * Representing supported protocols
         */
        enabledProtocols?: pulumi.Input<EnabledProtocolsArgs>;
    }

    /**
     * The presentation time range, this is asset related and not recommended for Account Filter.
     */
    export interface PresentationTimeRangeArgs {
        /**
         * The absolute end time boundary.
         */
        endTimestamp?: pulumi.Input<number>;
        /**
         * The indicator of forcing existing of end time stamp.
         */
        forceEndTimestamp?: pulumi.Input<boolean>;
        /**
         * The relative to end right edge.
         */
        liveBackoffDuration?: pulumi.Input<number>;
        /**
         * The relative to end sliding window.
         */
        presentationWindowDuration?: pulumi.Input<number>;
        /**
         * The absolute start time boundary.
         */
        startTimestamp?: pulumi.Input<number>;
        /**
         * The time scale of time stamps.
         */
        timescale?: pulumi.Input<number>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    export interface ResourceIdentityArgs {
        /**
         * Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.
         */
        useSystemAssignedIdentity: pulumi.Input<boolean>;
        /**
         * The user assigned managed identity's ARM ID to use when accessing a resource.
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * The storage account details.
     */
    export interface StorageAccountArgs {
        /**
         * The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
         */
        id?: pulumi.Input<string>;
        /**
         * The storage account identity.
         */
        identity?: pulumi.Input<ResourceIdentityArgs>;
        /**
         * The type of the storage account.
         */
        type: pulumi.Input<string | enums.StorageAccountType>;
    }

    /**
     * Class for content key in Streaming Locator
     */
    export interface StreamingLocatorContentKeyArgs {
        /**
         * ID of Content Key
         */
        id: pulumi.Input<string>;
        /**
         * Label of Content Key as specified in the Streaming Policy
         */
        labelReferenceInStreamingPolicy?: pulumi.Input<string>;
        /**
         * Value of Content Key
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Class to specify properties of content key
     */
    export interface StreamingPolicyContentKeyArgs {
        /**
         * Label can be used to specify Content Key when creating a Streaming Locator
         */
        label?: pulumi.Input<string>;
        /**
         * Policy used by Content Key
         */
        policyName?: pulumi.Input<string>;
        /**
         * Tracks which use this content key
         */
        tracks?: pulumi.Input<pulumi.Input<TrackSelectionArgs>[]>;
    }

    /**
     * Class to specify properties of all content keys in Streaming Policy
     */
    export interface StreamingPolicyContentKeysArgs {
        /**
         * Default content key for an encryption scheme
         */
        defaultKey?: pulumi.Input<DefaultKeyArgs>;
        /**
         * Representing tracks needs separate content key
         */
        keyToTrackMappings?: pulumi.Input<pulumi.Input<StreamingPolicyContentKeyArgs>[]>;
    }

    /**
     * Class to specify configurations of FairPlay in Streaming Policy
     */
    export interface StreamingPolicyFairPlayConfigurationArgs {
        /**
         * All license to be persistent or not
         */
        allowPersistentLicense: pulumi.Input<boolean>;
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: pulumi.Input<string>;
    }

    /**
     * Class to specify configurations of PlayReady in Streaming Policy
     */
    export interface StreamingPolicyPlayReadyConfigurationArgs {
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: pulumi.Input<string>;
        /**
         * Custom attributes for PlayReady
         */
        playReadyCustomAttributes?: pulumi.Input<string>;
    }

    /**
     * Class to specify configurations of Widevine in Streaming Policy
     */
    export interface StreamingPolicyWidevineConfigurationArgs {
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: pulumi.Input<string>;
    }

    /**
     * Represents a text track in an asset. A text track is usually used for sparse data related to the audio or video tracks.
     */
    export interface TextTrackArgs {
        /**
         * The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
         */
        displayName?: pulumi.Input<string>;
        /**
         * The file name to the source file. This file is located in the storage container of the asset.
         */
        fileName?: pulumi.Input<string>;
        /**
         * The HLS specific setting for the text track.
         */
        hlsSettings?: pulumi.Input<HlsSettingsArgs>;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.TextTrack'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.TextTrack">;
        /**
         * When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".
         */
        playerVisibility?: pulumi.Input<string | enums.Visibility>;
    }

    /**
     * Class to specify one track property condition
     */
    export interface TrackPropertyConditionArgs {
        /**
         * Track property condition operation
         */
        operation: pulumi.Input<string | enums.TrackPropertyCompareOperation>;
        /**
         * Track property type
         */
        property: pulumi.Input<string | enums.TrackPropertyType>;
        /**
         * Track property value
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Class to select a track
     */
    export interface TrackSelectionArgs {
        /**
         * TrackSelections is a track property condition list which can specify track(s)
         */
        trackSelections?: pulumi.Input<pulumi.Input<TrackPropertyConditionArgs>[]>;
    }

    /**
     * Represents a video track in the asset.
     */
    export interface VideoTrackArgs {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.VideoTrack'.
         */
        odataType: pulumi.Input<"#Microsoft.Media.VideoTrack">;
    }
