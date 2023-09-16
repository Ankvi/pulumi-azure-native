import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace media {
    /**
     * Describes Advanced Audio Codec (AAC) audio encoding settings.
     */
    export interface AacAudioResponse {
        /**
         * The bitrate, in bits per second, of the output encoded audio.
         */
        bitrate?: number;
        /**
         * The number of channels in the audio.
         */
        channels?: number;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AacAudio'.
         */
        odataType: "#Microsoft.Media.AacAudio";
        /**
         * The encoding profile to be used when encoding audio with AAC.
         */
        profile?: string;
        /**
         * The sampling rate to use for encoding in hertz.
         */
        samplingRate?: number;
    }

    /**
     * Specifies the clip time as an absolute time position in the media file.  The absolute time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
     */
    export interface AbsoluteClipTimeResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AbsoluteClipTime'.
         */
        odataType: "#Microsoft.Media.AbsoluteClipTime";
        /**
         * The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.
         */
        time: string;
    }

    export interface AccessControlResponse {
        /**
         * The behavior for IP access control in Key Delivery.
         */
        defaultAction?: string;
        /**
         * The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.
         */
        ipAllowList?: string[];
    }

    export interface AccountEncryptionResponse {
        /**
         * The Key Vault identity.
         */
        identity?: ResourceIdentityResponse;
        /**
         * The properties of the key used to encrypt the account.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
        /**
         * The current status of the Key Vault mapping.
         */
        status: string;
        /**
         * The type of key used to encrypt the Account Key.
         */
        type: string;
    }

    /**
     * Akamai access control
     */
    export interface AkamaiAccessControlResponse {
        /**
         * authentication key list
         */
        akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKeyResponse[];
    }

    /**
     * Akamai Signature Header authentication key.
     */
    export interface AkamaiSignatureHeaderAuthenticationKeyResponse {
        /**
         * authentication key
         */
        base64Key?: string;
        /**
         * The expiration time of the authentication key.
         */
        expiration?: string;
        /**
         * identifier of the key
         */
        identifier?: string;
    }

    /**
     * The streaming endpoint current sku.
     */
    export interface ArmStreamingEndpointCurrentSkuResponse {
        /**
         * The streaming endpoint sku capacity.
         */
        capacity?: number;
        /**
         * The streaming endpoint sku name.
         */
        name: string;
    }

    /**
     * The Asset File Storage encryption metadata.
     */
    export interface AssetFileEncryptionMetadataResponse {
        /**
         * The Asset File Id.
         */
        assetFileId: string;
        /**
         * The Asset File name.
         */
        assetFileName?: string;
        /**
         * The Asset File initialization vector.
         */
        initializationVector?: string;
    }

    /**
     * Properties of the Streaming Locator.
     */
    export interface AssetStreamingLocatorResponse {
        /**
         * Asset Name.
         */
        assetName: string;
        /**
         * The creation time of the Streaming Locator.
         */
        created: string;
        /**
         * Name of the default ContentKeyPolicy used by this Streaming Locator.
         */
        defaultContentKeyPolicyName: string;
        /**
         * The end time of the Streaming Locator.
         */
        endTime: string;
        /**
         * Streaming Locator name.
         */
        name: string;
        /**
         * The start time of the Streaming Locator.
         */
        startTime: string;
        /**
         * StreamingLocatorId of the Streaming Locator.
         */
        streamingLocatorId: string;
        /**
         * Name of the Streaming Policy used by this Streaming Locator.
         */
        streamingPolicyName: string;
    }

    /**
     * The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
     */
    export interface AudioAnalyzerPresetResponse {
        /**
         * The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
         */
        audioLanguage?: string;
        /**
         * Dictionary containing key value pairs for parameters not exposed in the preset itself
         */
        experimentalOptions?: {[key: string]: string};
        /**
         * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
         */
        mode?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AudioAnalyzerPreset'.
         */
        odataType: "#Microsoft.Media.AudioAnalyzerPreset";
    }

    /**
     * Describes the properties of an audio overlay.
     */
    export interface AudioOverlayResponse {
        /**
         * The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
         */
        audioGainLevel?: number;
        /**
         * The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
         */
        end?: string;
        /**
         * The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
         */
        fadeInDuration?: string;
        /**
         * The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
         */
        fadeOutDuration?: string;
        /**
         * The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
         */
        inputLabel: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AudioOverlay'.
         */
        odataType: "#Microsoft.Media.AudioOverlay";
        /**
         * The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
         */
        start?: string;
    }

    /**
     * Defines the common properties for all audio codecs.
     */
    export interface AudioResponse {
        /**
         * The bitrate, in bits per second, of the output encoded audio.
         */
        bitrate?: number;
        /**
         * The number of channels in the audio.
         */
        channels?: number;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.Audio'.
         */
        odataType: "#Microsoft.Media.Audio";
        /**
         * The sampling rate to use for encoding in hertz.
         */
        samplingRate?: number;
    }

    /**
     * A TrackSelection to select audio tracks.
     */
    export interface AudioTrackDescriptorResponse {
        /**
         * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
         */
        channelMapping?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AudioTrackDescriptor'.
         */
        odataType: "#Microsoft.Media.AudioTrackDescriptor";
    }

    /**
     * Represents an audio track in the asset.
     */
    export interface AudioTrackResponse {
        /**
         * The stream bit rate for the audio track.
         */
        bitRate: number;
        /**
         * The DASH specific setting for the audio track.
         */
        dashSettings?: DashSettingsResponse;
        /**
         * The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
         */
        displayName?: string;
        /**
         * The file name to the source file. This file is located in the storage container of the asset.
         */
        fileName?: string;
        /**
         * The HLS specific setting for the audio track.
         */
        hlsSettings?: HlsSettingsResponse;
        /**
         * The RFC5646 language code for the audio track.
         */
        languageCode?: string;
        /**
         * The MPEG-4 audio track ID for the audio track.
         */
        mpeg4TrackId?: number;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.AudioTrack'.
         */
        odataType: "#Microsoft.Media.AudioTrack";
    }

    /**
     * Describes a built-in preset for encoding the input video with the Standard Encoder.
     */
    export interface BuiltInStandardEncoderPresetResponse {
        /**
         * Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset.
         */
        configurations?: PresetConfigurationsResponse;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.BuiltInStandardEncoderPreset'.
         */
        odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset";
        /**
         * The built-in preset to be used for encoding videos.
         */
        presetName: string;
    }

    /**
     * Class to specify DRM configurations of CommonEncryptionCbcs scheme in Streaming Policy
     */
    export interface CbcsDrmConfigurationResponse {
        /**
         * FairPlay configurations
         */
        fairPlay?: StreamingPolicyFairPlayConfigurationResponse;
        /**
         * PlayReady configurations
         */
        playReady?: StreamingPolicyPlayReadyConfigurationResponse;
        /**
         * Widevine configurations
         */
        widevine?: StreamingPolicyWidevineConfigurationResponse;
    }

    /**
     * Class to specify DRM configurations of CommonEncryptionCenc scheme in Streaming Policy
     */
    export interface CencDrmConfigurationResponse {
        /**
         * PlayReady configurations
         */
        playReady?: StreamingPolicyPlayReadyConfigurationResponse;
        /**
         * Widevine configurations
         */
        widevine?: StreamingPolicyWidevineConfigurationResponse;
    }

    /**
     * Class to specify ClearKey configuration of common encryption schemes in Streaming Policy
     */
    export interface ClearKeyEncryptionConfigurationResponse {
        /**
         * Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId.
         */
        customKeysAcquisitionUrlTemplate?: string;
    }

    /**
     * Class for CommonEncryptionCbcs encryption scheme
     */
    export interface CommonEncryptionCbcsResponse {
        /**
         * Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme.
         */
        clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfigurationResponse;
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: TrackSelectionResponse[];
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: StreamingPolicyContentKeysResponse;
        /**
         * Configuration of DRMs for current encryption scheme
         */
        drm?: CbcsDrmConfigurationResponse;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: EnabledProtocolsResponse;
    }

    /**
     * Class for envelope encryption scheme
     */
    export interface CommonEncryptionCencResponse {
        /**
         * Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme.
         */
        clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfigurationResponse;
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: TrackSelectionResponse[];
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: StreamingPolicyContentKeysResponse;
        /**
         * Configuration of DRMs for CommonEncryptionCenc encryption scheme
         */
        drm?: CencDrmConfigurationResponse;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: EnabledProtocolsResponse;
    }

    /**
     * Represents a configuration for non-DRM keys.
     */
    export interface ContentKeyPolicyClearKeyConfigurationResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration";
    }

    /**
     * Specifies a configuration for FairPlay licenses.
     */
    export interface ContentKeyPolicyFairPlayConfigurationResponse {
        /**
         * The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded.
         */
        ask: string;
        /**
         * The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
         */
        fairPlayPfx: string;
        /**
         * The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
         */
        fairPlayPfxPassword: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration";
        /**
         * Offline rental policy
         */
        offlineRentalConfiguration?: ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse;
        /**
         * The rental and lease key type.
         */
        rentalAndLeaseKeyType: string;
        /**
         * The rental duration. Must be greater than or equal to 0.
         */
        rentalDuration: number;
    }

    export interface ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse {
        /**
         * Playback duration
         */
        playbackDurationSeconds: number;
        /**
         * Storage duration
         */
        storageDurationSeconds: number;
    }

    /**
     * Represents an open restriction. License or key will be delivered on every request.
     */
    export interface ContentKeyPolicyOpenRestrictionResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyOpenRestriction'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyOpenRestriction";
    }

    /**
     * Represents a policy option.
     */
    export interface ContentKeyPolicyOptionResponse {
        /**
         * The key delivery configuration.
         */
        configuration: ContentKeyPolicyClearKeyConfigurationResponse | ContentKeyPolicyFairPlayConfigurationResponse | ContentKeyPolicyPlayReadyConfigurationResponse | ContentKeyPolicyUnknownConfigurationResponse | ContentKeyPolicyWidevineConfigurationResponse;
        /**
         * The Policy Option description.
         */
        name?: string;
        /**
         * The legacy Policy Option ID.
         */
        policyOptionId: string;
        /**
         * The requirements that must be met to deliver keys with this configuration
         */
        restriction: ContentKeyPolicyOpenRestrictionResponse | ContentKeyPolicyTokenRestrictionResponse | ContentKeyPolicyUnknownRestrictionResponse;
    }

    /**
     * Specifies a configuration for PlayReady licenses.
     */
    export interface ContentKeyPolicyPlayReadyConfigurationResponse {
        /**
         * The PlayReady licenses.
         */
        licenses: ContentKeyPolicyPlayReadyLicenseResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration";
        /**
         * The custom response data.
         */
        responseCustomData?: string;
    }

    /**
     * Specifies that the content key ID is in the PlayReady header.
     */
    export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader";
    }

    /**
     * Specifies that the content key ID is specified in the PlayReady configuration.
     */
    export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse {
        /**
         * The content key ID.
         */
        keyId: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier";
    }

    /**
     * Configures the Explicit Analog Television Output Restriction control bits. For further details see the PlayReady Compliance Rules.
     */
    export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionResponse {
        /**
         * Indicates whether this restriction is enforced on a Best Effort basis.
         */
        bestEffort: boolean;
        /**
         * Configures the restriction control bits. Must be between 0 and 3 inclusive.
         */
        configurationData: number;
    }

    /**
     * The PlayReady license
     */
    export interface ContentKeyPolicyPlayReadyLicenseResponse {
        /**
         * A flag indicating whether test devices can use the license.
         */
        allowTestDevices: boolean;
        /**
         * The begin date of license
         */
        beginDate?: string;
        /**
         * The content key location.
         */
        contentKeyLocation: ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderResponse | ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse;
        /**
         * The PlayReady content type.
         */
        contentType: string;
        /**
         * The expiration date of license.
         */
        expirationDate?: string;
        /**
         * The grace period of license.
         */
        gracePeriod?: string;
        /**
         * The license type.
         */
        licenseType: string;
        /**
         * The license PlayRight
         */
        playRight?: ContentKeyPolicyPlayReadyPlayRightResponse;
        /**
         * The relative begin date of license.
         */
        relativeBeginDate?: string;
        /**
         * The relative expiration date of license.
         */
        relativeExpirationDate?: string;
        /**
         * The security level.
         */
        securityLevel?: string;
    }

    /**
     * Configures the Play Right in the PlayReady license.
     */
    export interface ContentKeyPolicyPlayReadyPlayRightResponse {
        /**
         * Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
         */
        agcAndColorStripeRestriction?: number;
        /**
         * Configures Unknown output handling settings of the license.
         */
        allowPassingVideoContentToUnknownOutput: string;
        /**
         * Specifies the output protection level for compressed digital audio.
         */
        analogVideoOpl?: number;
        /**
         * Specifies the output protection level for compressed digital audio.
         */
        compressedDigitalAudioOpl?: number;
        /**
         * Specifies the output protection level for compressed digital video.
         */
        compressedDigitalVideoOpl?: number;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        digitalVideoOnlyContentRestriction: boolean;
        /**
         * Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive.
         */
        explicitAnalogTelevisionOutputRestriction?: ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionResponse;
        /**
         * The amount of time that the license is valid after the license is first used to play content.
         */
        firstPlayExpiration?: string;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        imageConstraintForAnalogComponentVideoRestriction: boolean;
        /**
         * Enables the Image Constraint For Analog Component Video Restriction in the license.
         */
        imageConstraintForAnalogComputerMonitorRestriction: boolean;
        /**
         * Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
         */
        scmsRestriction?: number;
        /**
         * Specifies the output protection level for uncompressed digital audio.
         */
        uncompressedDigitalAudioOpl?: number;
        /**
         * Specifies the output protection level for uncompressed digital video.
         */
        uncompressedDigitalVideoOpl?: number;
    }

    /**
     * Specifies a RSA key for token validation
     */
    export interface ContentKeyPolicyRsaTokenKeyResponse {
        /**
         * The RSA Parameter exponent
         */
        exponent: string;
        /**
         * The RSA Parameter modulus
         */
        modulus: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyRsaTokenKey'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyRsaTokenKey";
    }

    /**
     * Specifies a symmetric key for token validation.
     */
    export interface ContentKeyPolicySymmetricTokenKeyResponse {
        /**
         * The key value of the key
         */
        keyValue: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicySymmetricTokenKey";
    }

    /**
     * Represents a token claim.
     */
    export interface ContentKeyPolicyTokenClaimResponse {
        /**
         * Token claim type.
         */
        claimType?: string;
        /**
         * Token claim value.
         */
        claimValue?: string;
    }

    /**
     * Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
     */
    export interface ContentKeyPolicyTokenRestrictionResponse {
        /**
         * A list of alternative verification keys.
         */
        alternateVerificationKeys?: (ContentKeyPolicyRsaTokenKeyResponse | ContentKeyPolicySymmetricTokenKeyResponse | ContentKeyPolicyX509CertificateTokenKeyResponse)[];
        /**
         * The audience for the token.
         */
        audience: string;
        /**
         * The token issuer.
         */
        issuer: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyTokenRestriction'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyTokenRestriction";
        /**
         * The OpenID connect discovery document.
         */
        openIdConnectDiscoveryDocument?: string;
        /**
         * The primary verification key.
         */
        primaryVerificationKey: ContentKeyPolicyRsaTokenKeyResponse | ContentKeyPolicySymmetricTokenKeyResponse | ContentKeyPolicyX509CertificateTokenKeyResponse;
        /**
         * A list of required token claims.
         */
        requiredClaims?: ContentKeyPolicyTokenClaimResponse[];
        /**
         * The type of token.
         */
        restrictionTokenType: string;
    }

    /**
     * Represents a ContentKeyPolicyConfiguration that is unavailable in the current API version.
     */
    export interface ContentKeyPolicyUnknownConfigurationResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyUnknownConfiguration";
    }

    /**
     * Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.
     */
    export interface ContentKeyPolicyUnknownRestrictionResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownRestriction'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyUnknownRestriction";
    }

    /**
     * Specifies a configuration for Widevine licenses.
     */
    export interface ContentKeyPolicyWidevineConfigurationResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyWidevineConfiguration";
        /**
         * The Widevine template.
         */
        widevineTemplate: string;
    }

    /**
     * Specifies a certificate for token validation.
     */
    export interface ContentKeyPolicyX509CertificateTokenKeyResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey'.
         */
        odataType: "#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey";
        /**
         * The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)
         */
        rawBody: string;
    }

    /**
     * A codec flag, which tells the encoder to copy the input audio bitstream.
     */
    export interface CopyAudioResponse {
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.CopyAudio'.
         */
        odataType: "#Microsoft.Media.CopyAudio";
    }

    /**
     * A codec flag, which tells the encoder to copy the input video bitstream without re-encoding.
     */
    export interface CopyVideoResponse {
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.CopyVideo'.
         */
        odataType: "#Microsoft.Media.CopyVideo";
    }

    /**
     * The client access policy.
     */
    export interface CrossSiteAccessPoliciesResponse {
        /**
         * The content of clientaccesspolicy.xml used by Silverlight.
         */
        clientAccessPolicy?: string;
        /**
         * The content of crossdomain.xml used by Silverlight.
         */
        crossDomainPolicy?: string;
    }

    /**
     * Describes Dolby Digital Audio Codec (AC3) audio encoding settings. The current implementation for Dolby Digital Audio support are: Audio channel numbers at 1((mono), 2(stereo), 6(5.1side); Audio sampling frequency rates at: 32K/44.1K/48K Hz; Audio bitrate values as AC3 specification supports: 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000, 384000, 448000, 512000, 576000, 640000 bps.
     */
    export interface DDAudioResponse {
        /**
         * The bitrate, in bits per second, of the output encoded audio.
         */
        bitrate?: number;
        /**
         * The number of channels in the audio.
         */
        channels?: number;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.DDAudio'.
         */
        odataType: "#Microsoft.Media.DDAudio";
        /**
         * The sampling rate to use for encoding in hertz.
         */
        samplingRate?: number;
    }

    /**
     * The DASH setting for a track.
     */
    export interface DashSettingsResponse {
        /**
         * The role for the DASH setting.
         */
        role?: string;
    }

    /**
     * Class to specify properties of default content key for each encryption scheme
     */
    export interface DefaultKeyResponse {
        /**
         * Label can be used to specify Content Key when creating a Streaming Locator
         */
        label?: string;
        /**
         * Policy used by Default Key
         */
        policyName?: string;
    }

    /**
     * Describes the de-interlacing settings.
     */
    export interface DeinterlaceResponse {
        /**
         * The deinterlacing mode. Defaults to AutoPixelAdaptive.
         */
        mode?: string;
        /**
         * The field parity for de-interlacing, defaults to Auto.
         */
        parity?: string;
    }

    export interface EdgeUsageDataCollectionPolicyResponse {
        /**
         * Usage data collection frequency in ISO 8601 duration format e.g. PT10M , PT5H.
         */
        dataCollectionFrequency?: string;
        /**
         * Usage data reporting frequency in ISO 8601 duration format e.g. PT10M , PT5H.
         */
        dataReportingFrequency?: string;
        /**
         * Details of Event Hub where the usage will be reported.
         */
        eventHubDetails?: EdgeUsageDataEventHubResponse;
        /**
         * Maximum time for which the functionality of the device will not be hampered for not reporting the usage data.
         */
        maxAllowedUnreportedUsageDuration?: string;
    }

    export interface EdgeUsageDataEventHubResponse {
        /**
         * Name of the Event Hub where usage will be reported.
         */
        name?: string;
        /**
         * Namespace of the Event Hub where usage will be reported.
         */
        namespace?: string;
        /**
         * SAS token needed to interact with Event Hub.
         */
        token?: string;
    }

    /**
     * Class to specify which protocols are enabled
     */
    export interface EnabledProtocolsResponse {
        /**
         * Enable DASH protocol or not
         */
        dash: boolean;
        /**
         * Enable Download protocol or not
         */
        download: boolean;
        /**
         * Enable HLS protocol or not
         */
        hls: boolean;
        /**
         * Enable SmoothStreaming protocol or not
         */
        smoothStreaming: boolean;
    }

    /**
     * Class for EnvelopeEncryption encryption scheme
     */
    export interface EnvelopeEncryptionResponse {
        /**
         * Representing which tracks should not be encrypted
         */
        clearTracks?: TrackSelectionResponse[];
        /**
         * Representing default content key for each encryption scheme and separate content keys for specific tracks
         */
        contentKeys?: StreamingPolicyContentKeysResponse;
        /**
         * Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customKeyAcquisitionUrlTemplate?: string;
        /**
         * Representing supported protocols
         */
        enabledProtocols?: EnabledProtocolsResponse;
    }

    /**
     * Describes all the settings to be used when analyzing a video in order to detect (and optionally redact) all the faces present.
     */
    export interface FaceDetectorPresetResponse {
        /**
         * Blur type
         */
        blurType?: string;
        /**
         * Dictionary containing key value pairs for parameters not exposed in the preset itself
         */
        experimentalOptions?: {[key: string]: string};
        /**
         * This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
         */
        mode?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.FaceDetectorPreset'.
         */
        odataType: "#Microsoft.Media.FaceDetectorPreset";
        /**
         * Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.
         */
        resolution?: string;
    }

    /**
     * Describes the properties of a Fade effect applied to the input media.
     */
    export interface FadeResponse {
        /**
         * The Duration of the fade effect in the video. The value can be in ISO 8601 format (For example, PT05S to fade In/Out a color during 5 seconds), or a frame count (For example, 10 to fade 10 frames from the start time), or a relative value to stream duration (For example, 10% to fade 10% of stream duration)
         */
        duration: string;
        /**
         * The Color for the fade In/Out. it can be on the CSS Level1 colors https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color_keywords or an RGB/hex value: e.g: rgb(255,0,0), 0xFF0000 or #FF0000
         */
        fadeColor: string;
        /**
         * The position in the input video from where to start fade. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Default is 0
         */
        start?: string;
    }

    /**
     * The class to specify one track property condition.
     */
    export interface FilterTrackPropertyConditionResponse {
        /**
         * The track property condition operation.
         */
        operation: string;
        /**
         * The track property type.
         */
        property: string;
        /**
         * The track property value.
         */
        value: string;
    }

    /**
     * Representing a list of FilterTrackPropertyConditions to select a track.  The filters are combined using a logical AND operation.
     */
    export interface FilterTrackSelectionResponse {
        /**
         * The track selections.
         */
        trackSelections: FilterTrackPropertyConditionResponse[];
    }

    /**
     * Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
     */
    export interface FiltersResponse {
        /**
         * The parameters for the rectangular window with which to crop the input video.
         */
        crop?: RectangleResponse;
        /**
         * The de-interlacing settings.
         */
        deinterlace?: DeinterlaceResponse;
        /**
         * Describes the properties of a Fade effect applied to the input media.
         */
        fadeIn?: FadeResponse;
        /**
         * Describes the properties of a Fade effect applied to the input media.
         */
        fadeOut?: FadeResponse;
        /**
         * The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
         */
        overlays?: (AudioOverlayResponse | VideoOverlayResponse)[];
        /**
         * The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto
         */
        rotation?: string;
    }

    /**
     * Filter First Quality
     */
    export interface FirstQualityResponse {
        /**
         * The first quality bitrate.
         */
        bitrate: number;
    }

    /**
     * An InputDefinition that looks across all of the files provided to select tracks specified by the IncludedTracks property. Generally used with the AudioTrackByAttribute and VideoTrackByAttribute to allow selection of a single track across a set of input files.
     */
    export interface FromAllInputFileResponse {
        /**
         * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
         */
        includedTracks?: (AudioTrackDescriptorResponse | SelectAudioTrackByAttributeResponse | SelectAudioTrackByIdResponse | SelectVideoTrackByAttributeResponse | SelectVideoTrackByIdResponse | VideoTrackDescriptorResponse)[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.FromAllInputFile'.
         */
        odataType: "#Microsoft.Media.FromAllInputFile";
    }

    /**
     * An InputDefinition that looks at each input file provided to select tracks specified by the IncludedTracks property. Generally used with the AudioTrackByAttribute and VideoTrackByAttribute to select tracks from each file given.
     */
    export interface FromEachInputFileResponse {
        /**
         * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
         */
        includedTracks?: (AudioTrackDescriptorResponse | SelectAudioTrackByAttributeResponse | SelectAudioTrackByIdResponse | SelectVideoTrackByAttributeResponse | SelectVideoTrackByIdResponse | VideoTrackDescriptorResponse)[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.FromEachInputFile'.
         */
        odataType: "#Microsoft.Media.FromEachInputFile";
    }

    /**
     * Describes the settings to be used when encoding the input video into a desired output bitrate layer with the H.264 video codec.
     */
    export interface H264LayerResponse {
        /**
         * Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
         */
        adaptiveBFrame?: boolean;
        /**
         * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
         */
        bFrames?: number;
        /**
         * The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field.
         */
        bitrate: number;
        /**
         * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
         */
        bufferWindow?: string;
        /**
         * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23.
         */
        crf?: number;
        /**
         * The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
         */
        entropyMode?: string;
        /**
         * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
         */
        frameRate?: string;
        /**
         * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
         */
        height?: string;
        /**
         * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
         */
        label?: string;
        /**
         * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
         */
        level?: string;
        /**
         * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
         */
        maxBitrate?: number;
        /**
         * We currently support Baseline, Main, High, High422, High444. Default is Auto.
         */
        profile?: string;
        /**
         * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
         */
        referenceFrames?: number;
        /**
         * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
         */
        slices?: number;
        /**
         * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
         */
        width?: string;
    }

    /**
     * Describes all the properties for encoding a video with the H.264 codec.
     */
    export interface H264VideoResponse {
        /**
         * Tells the encoder how to choose its encoding settings. The default value is Balanced.
         */
        complexity?: string;
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The collection of output H.264 layers to be produced by the encoder.
         */
        layers?: H264LayerResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.H264Video'.
         */
        odataType: "#Microsoft.Media.H264Video";
        /**
         * The video rate control mode
         */
        rateControlMode?: string;
        /**
         * Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
         */
        sceneChangeDetection?: boolean;
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * Describes the settings to be used when encoding the input video into a desired output bitrate layer with the H.265 video codec.
     */
    export interface H265LayerResponse {
        /**
         * Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
         */
        adaptiveBFrame?: boolean;
        /**
         * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
         */
        bFrames?: number;
        /**
         * The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field.
         */
        bitrate: number;
        /**
         * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
         */
        bufferWindow?: string;
        /**
         * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28.
         */
        crf?: number;
        /**
         * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
         */
        frameRate?: string;
        /**
         * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
         */
        height?: string;
        /**
         * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
         */
        label?: string;
        /**
         * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
         */
        level?: string;
        /**
         * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
         */
        maxBitrate?: number;
        /**
         * We currently support Main. Default is Auto.
         */
        profile?: string;
        /**
         * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
         */
        referenceFrames?: number;
        /**
         * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
         */
        slices?: number;
        /**
         * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
         */
        width?: string;
    }

    /**
     * Describes all the properties for encoding a video with the H.265 codec.
     */
    export interface H265VideoResponse {
        /**
         * Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
         */
        complexity?: string;
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The collection of output H.265 layers to be produced by the encoder.
         */
        layers?: H265LayerResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.H265Video'.
         */
        odataType: "#Microsoft.Media.H265Video";
        /**
         * Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
         */
        sceneChangeDetection?: boolean;
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    export interface HlsResponse {
        /**
         * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.
         */
        fragmentsPerTsSegment?: number;
    }

    /**
     * The HLS setting for a track.
     */
    export interface HlsSettingsResponse {
        /**
         * The characteristics for the HLS setting.
         */
        characteristics?: string;
        /**
         * The default for the HLS setting.
         */
        default?: boolean;
        /**
         * The forced for the HLS setting.
         */
        forced?: boolean;
    }

    /**
     * The IP access control.
     */
    export interface IPAccessControlResponse {
        /**
         * The IP allow list.
         */
        allow?: IPRangeResponse[];
    }

    /**
     * The IP address range in the CIDR scheme.
     */
    export interface IPRangeResponse {
        /**
         * The IP address.
         */
        address?: string;
        /**
         * The friendly name for the IP address range.
         */
        name?: string;
        /**
         * The subnet mask prefix length (see CIDR notation).
         */
        subnetPrefixLength?: number;
    }

    /**
     * Describes the properties for an output image file.
     */
    export interface ImageFormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.ImageFormat'.
         */
        odataType: "#Microsoft.Media.ImageFormat";
    }

    /**
     * Describes the basic properties for generating thumbnails from the input video
     */
    export interface ImageResponse {
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.Image'.
         */
        odataType: "#Microsoft.Media.Image";
        /**
         * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
         */
        range?: string;
        /**
         * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
         */
        start: string;
        /**
         * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
         */
        step?: string;
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * An InputDefinition for a single file.  TrackSelections are scoped to the file specified.
     */
    export interface InputFileResponse {
        /**
         * Name of the file that this input definition applies to.
         */
        filename?: string;
        /**
         * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
         */
        includedTracks?: (AudioTrackDescriptorResponse | SelectAudioTrackByAttributeResponse | SelectAudioTrackByIdResponse | SelectVideoTrackByAttributeResponse | SelectVideoTrackByIdResponse | VideoTrackDescriptorResponse)[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.InputFile'.
         */
        odataType: "#Microsoft.Media.InputFile";
    }

    /**
     * Details of JobOutput errors.
     */
    export interface JobErrorDetailResponse {
        /**
         * Code describing the error detail.
         */
        code: string;
        /**
         * A human-readable representation of the error.
         */
        message: string;
    }

    /**
     * Details of JobOutput errors.
     */
    export interface JobErrorResponse {
        /**
         * Helps with categorization of errors.
         */
        category: string;
        /**
         * Error code describing the error.
         */
        code: string;
        /**
         * An array of details about specific errors that led to this reported error.
         */
        details: JobErrorDetailResponse[];
        /**
         * A human-readable language-dependent representation of the error.
         */
        message: string;
        /**
         * Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal.
         */
        retry: string;
    }

    /**
     * Represents an Asset for input into a Job.
     */
    export interface JobInputAssetResponse {
        /**
         * The name of the input Asset.
         */
        assetName: string;
        /**
         * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
         */
        end?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
        /**
         * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
         */
        files?: string[];
        /**
         * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
         */
        inputDefinitions?: (FromAllInputFileResponse | FromEachInputFileResponse | InputFileResponse)[];
        /**
         * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobInputAsset'.
         */
        odataType: "#Microsoft.Media.JobInputAsset";
        /**
         * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
         */
        start?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
    }

    /**
     * Represents input files for a Job.
     */
    export interface JobInputClipResponse {
        /**
         * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
         */
        end?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
        /**
         * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
         */
        files?: string[];
        /**
         * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
         */
        inputDefinitions?: (FromAllInputFileResponse | FromEachInputFileResponse | InputFileResponse)[];
        /**
         * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobInputClip'.
         */
        odataType: "#Microsoft.Media.JobInputClip";
        /**
         * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
         */
        start?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
    }

    /**
     * Represents HTTPS job input.
     */
    export interface JobInputHttpResponse {
        /**
         * Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. The query strings will not be returned in service responses to prevent sensitive data exposure.
         */
        baseUri?: string;
        /**
         * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
         */
        end?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
        /**
         * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
         */
        files?: string[];
        /**
         * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
         */
        inputDefinitions?: (FromAllInputFileResponse | FromEachInputFileResponse | InputFileResponse)[];
        /**
         * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobInputHttp'.
         */
        odataType: "#Microsoft.Media.JobInputHttp";
        /**
         * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
         */
        start?: AbsoluteClipTimeResponse | UtcClipTimeResponse;
    }

    /**
     * A Sequence contains an ordered list of Clips where each clip is a JobInput.  The Sequence will be treated as a single input.
     */
    export interface JobInputSequenceResponse {
        /**
         * JobInputs that make up the timeline.
         */
        inputs?: JobInputClipResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobInputSequence'.
         */
        odataType: "#Microsoft.Media.JobInputSequence";
    }

    /**
     * Describes a list of inputs to a Job.
     */
    export interface JobInputsResponse {
        /**
         * List of inputs to a Job.
         */
        inputs?: (JobInputAssetResponse | JobInputClipResponse | JobInputHttpResponse | JobInputSequenceResponse | JobInputsResponse)[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobInputs'.
         */
        odataType: "#Microsoft.Media.JobInputs";
    }

    /**
     * Represents an Asset used as a JobOutput.
     */
    export interface JobOutputAssetResponse {
        /**
         * The name of the output Asset.
         */
        assetName: string;
        /**
         * The UTC date and time at which this Job Output finished processing.
         */
        endTime: string;
        /**
         * If the JobOutput is in the Error state, it contains the details of the error.
         */
        error: JobErrorResponse;
        /**
         * A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JobOutputAsset'.
         */
        odataType: "#Microsoft.Media.JobOutputAsset";
        /**
         * A preset used to override the preset in the corresponding transform output.
         */
        presetOverride?: AudioAnalyzerPresetResponse | BuiltInStandardEncoderPresetResponse | FaceDetectorPresetResponse | StandardEncoderPresetResponse | VideoAnalyzerPresetResponse;
        /**
         * If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
         */
        progress: number;
        /**
         * The UTC date and time at which this Job Output began processing.
         */
        startTime: string;
        /**
         * Describes the state of the JobOutput.
         */
        state: string;
    }

    /**
     * Describes the settings for producing JPEG thumbnails.
     */
    export interface JpgFormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JpgFormat'.
         */
        odataType: "#Microsoft.Media.JpgFormat";
    }

    /**
     * Describes the properties for producing a series of JPEG images from the input video.
     */
    export interface JpgImageResponse {
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * A collection of output JPEG image layers to be produced by the encoder.
         */
        layers?: JpgLayerResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.JpgImage'.
         */
        odataType: "#Microsoft.Media.JpgImage";
        /**
         * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
         */
        range?: string;
        /**
         * Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535.
         */
        spriteColumn?: number;
        /**
         * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
         */
        start: string;
        /**
         * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
         */
        step?: string;
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * Describes the settings to produce a JPEG image from the input video.
     */
    export interface JpgLayerResponse {
        /**
         * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
         */
        height?: string;
        /**
         * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
         */
        label?: string;
        /**
         * The compression quality of the JPEG output. Range is from 0-100 and the default is 70.
         */
        quality?: number;
        /**
         * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
         */
        width?: string;
    }

    export interface KeyDeliveryResponse {
        /**
         * The access control properties for Key Delivery.
         */
        accessControl?: AccessControlResponse;
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * The current key used to encrypt the Media Services account, including the key version.
         */
        currentKeyIdentifier: string;
        /**
         * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
         */
        keyIdentifier?: string;
    }

    /**
     * Specifies the live event type and optional encoding settings for encoding live events.
     */
    export interface LiveEventEncodingResponse {
        /**
         * Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
         */
        encodingType?: string;
        /**
         * Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
         */
        keyFrameInterval?: string;
        /**
         * The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is ‘Default720p’. Else if the encodingType is set to Premium1080p, the default preset is ‘Default1080p’.
         */
        presetName?: string;
        /**
         * Specifies how the input video will be resized to fit the desired output resolution(s). Default is None
         */
        stretchMode?: string;
    }

    /**
     * The live event endpoint.
     */
    export interface LiveEventEndpointResponse {
        /**
         * The endpoint protocol.
         */
        protocol?: string;
        /**
         * The endpoint URL.
         */
        url?: string;
    }

    /**
     * The live event ingest interruption data.
     */
    export interface LiveEventIngestInterruptionResponse {
        /**
         * UTC time of interruption start, encoder disconnected.
         */
        begin?: string;
        /**
         * Duration of interruption in ISO 8601 time. For example, use PT1H30M to indicate 1 hour and 30 minutes.
         */
        duration?: string;
        /**
         * UTC time of interruption end, encoder re-connected.
         */
        end?: string;
        /**
         * Interruption reason.
         */
        reason?: string;
    }

    /**
     * The live event ingestion telemetry data.
     */
    export interface LiveEventIngestionResponse {
        /**
         * Ingestion begin time in UTC.
         */
        begin?: string;
        /**
         * Ingestion end time in UTC. Empty if it's not stopped yet.
         */
        end?: string;
        /**
         * Reason why ingestion stops. Empty if it's not stopped yet. E.g) Service Stopped. No Ingestion.
         */
        endReason?: string;
        /**
         * IngestInterruption entry list.
         */
        ingestInterruptions?: LiveEventIngestInterruptionResponse[];
        /**
         * Ingestion stream name.
         */
        streamName?: string;
    }

    /**
     * The IP access control for live event input.
     */
    export interface LiveEventInputAccessControlResponse {
        /**
         * The IP access control properties.
         */
        ip?: IPAccessControlResponse;
    }

    /**
     * The live event input.
     */
    export interface LiveEventInputResponse {
        /**
         * Access control for live event input.
         */
        accessControl?: LiveEventInputAccessControlResponse;
        /**
         * A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
         */
        accessToken?: string;
        /**
         * The input endpoints for the live event.
         */
        endpoints?: LiveEventEndpointResponse[];
        /**
         * ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
         */
        keyFrameIntervalDuration?: string;
        /**
         * The input protocol for the live event. This is specified at creation time and cannot be updated.
         */
        streamingProtocol: string;
        /**
         * The metadata endpoints for the live event.
         */
        timedMetadataEndpoints?: LiveEventTimedMetadataEndpointResponse[];
    }

    /**
     * A track selection condition. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventInputTrackSelectionResponse {
        /**
         * Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
         */
        operation?: string;
        /**
         * Property name to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        property?: string;
        /**
         * Property value to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        value?: string;
    }

    /**
     * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventOutputTranscriptionTrackResponse {
        /**
         * The output track name. This property is reserved for future use, any value set on this property will be ignored.
         */
        trackName: string;
    }

    /**
     * The IP access control for the live event preview endpoint.
     */
    export interface LiveEventPreviewAccessControlResponse {
        /**
         * The IP access control properties.
         */
        ip?: IPAccessControlResponse;
    }

    /**
     * Live event preview settings.
     */
    export interface LiveEventPreviewResponse {
        /**
         * The access control for live event preview.
         */
        accessControl?: LiveEventPreviewAccessControlResponse;
        /**
         * An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: string;
        /**
         * The endpoints for preview. Do not share the preview URL with the live event audience.
         */
        endpoints?: LiveEventEndpointResponse[];
        /**
         * The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
         */
        previewLocator?: string;
        /**
         * The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.
         */
        streamingPolicyName?: string;
    }

    /**
     * The live event status.
     */
    export interface LiveEventStatusResponse {
        /**
         * List of strings justifying the health status.
         */
        healthDescriptions?: string[];
        /**
         * Health status of last 20 seconds.
         */
        healthStatus?: string;
        /**
         * Live event ingestion entry.
         */
        ingestion?: LiveEventIngestionResponse;
        /**
         * Last updated UTC time of this status.
         */
        lastUpdatedTime?: string;
        /**
         * Current state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
         */
        state?: string;
        /**
         * Track entry list.
         */
        trackStatus?: LiveEventTrackStatusResponse[];
    }

    /**
     * The live event stream event data.
     */
    export interface LiveEventStreamEventDataResponse {
        /**
         * Bitrate of the track.
         */
        bitrate?: number;
        /**
         * Current fragment timestamp in timescale.
         */
        currentFragmentTimestamp?: string;
        /**
         * Length of the discontinuity gap in timescale.
         */
        discontinuityGap?: number;
        /**
         * Fragment duration.
         */
        duration?: string;
        /**
         * Reason the fragment was dropped.
         */
        fragmentDropReason?: string;
        /**
         * Duration of first fragment used to make a comparison, in timescale.
         */
        fragmentOneDuration?: string;
        /**
         * Timestamp of first fragment used to make a comparison, in timescale.
         */
        fragmentOneTimestamp?: string;
        /**
         * Duration of second fragment used to make a comparison, in timescale.
         */
        fragmentTwoDuration?: string;
        /**
         * Timestamp of second fragment used to make a comparison, in timescale.
         */
        fragmentTwoTimestamp?: string;
        /**
         * The larger timestamp of the two fragments compared.
         */
        maxTime?: string;
        /**
         * The media type of the larger timestamp of two fragments compared.
         */
        maxTimeMediaType?: string;
        /**
         * Fragment timestamp in timescale.
         */
        mediaTimestamp?: string;
        /**
         * Type of the track.
         */
        mediaType?: string;
        /**
         * The smaller timestamp of the two fragments compared.
         */
        minTime?: string;
        /**
         * The media type of the smaller timestamp of two fragments compared.
         */
        minTimeMediaType?: string;
        /**
         * Previous fragment duration in timescale.
         */
        previousFragmentDuration?: string;
        /**
         * Previous fragment timestamp in timescale.
         */
        previousFragmentTimestamp?: string;
        /**
         * Truncated IP of the encoder.
         */
        remoteIp?: string;
        /**
         * Port of the encoder.
         */
        remotePort?: string;
        /**
         * Width x Height for video, null otherwise.
         */
        resolution?: string;
        /**
         * Result code.
         */
        resultCode?: string;
        /**
         * Result message.
         */
        resultMessage?: string;
        /**
         * Stream ID in the format "trackName_bitrate"
         */
        streamId?: string;
        /**
         * Identifier of the stream or connection. Encoder or customer is responsible to add this ID in the ingest URL.
         */
        streamName?: string;
        /**
         * Timescale in which timestamps are expressed.
         */
        timescale?: string;
        /**
         * Timescale of the fragment with the larger timestamp.
         */
        timescaleOfMaxTime?: string;
        /**
         * Timescale of the fragment with the smaller timestamp.
         */
        timescaleOfMinTime?: string;
        /**
         * Track index.
         */
        trackId?: number;
        /**
         * Name of the track. 
         */
        trackName?: string;
    }

    /**
     * The live event stream event.
     */
    export interface LiveEventStreamEventResponse {
        /**
         * Event data based on event type.
         */
        data?: LiveEventStreamEventDataResponse;
        /**
         * Event level.
         */
        eventLevel?: string;
        /**
         * The time event raised.
         */
        eventTime?: string;
        /**
         * The type of the stream event. Format: StreamEvent/{eventType}
         */
        eventType?: string;
    }

    /**
     * The live event metadata insertion endpoint.
     */
    export interface LiveEventTimedMetadataEndpointResponse {
        /**
         * The metadata endpoint URL.
         */
        url?: string;
    }

    /**
     * The live event track ingest heart beat event data.
     */
    export interface LiveEventTrackEventDataResponse {
        /**
         * Bitrate of the track.
         */
        bitrate?: number;
        /**
         * Number of discontinuities detected in the last 20 seconds.
         */
        discontinuityCount?: number;
        /**
         * Indicates whether ingest is healthy.
         */
        healthy?: boolean;
        /**
         * Calculated bitrate based on data chunks coming from encoder.
         */
        incomingBitrate?: number;
        /**
         * Indicates the speed of delay, in seconds-per-minute, of the incoming audio or video data during the last minute. The value is greater than zero if data is arriving to the live event slower than expected in the last minute; zero if data arrived with no delay; and "n/a" if no audio or video data was received. For example, if you have a contribution encoder sending in live content, and it is slowing down due to processing issues, or network latency, it may be only able to deliver a total of 58 seconds of audio or video in a one-minute period. This would be reported as two seconds-per-minute of drift. If the encoder is able to catch up and send all 60 seconds or more of data every minute, you will see this value reported as 0. If there was a disconnection or discontinuity from the encoder, this value may still display as 0, as it does not account for breaks in the data - only data that is delayed in timestamps.
         */
        ingestDriftValue?: string;
        /**
         * The last timestamp in UTC that a fragment arrived at the ingest endpoint.
         */
        lastFragmentArrivalTime?: string;
        /**
         * Latest timestamp received for a track in last 20 seconds.
         */
        lastTimestamp?: string;
        /**
         * Number of data chunks with timestamps in the past that were received in last 20 seconds.
         */
        nonincreasingCount?: number;
        /**
         * Number of data chunks that had overlapped timestamps in last 20 seconds.
         */
        overlapCount?: number;
        /**
         * State of the live event.
         */
        state?: string;
        /**
         * Timescale in which timestamps are expressed.
         */
        timescale?: string;
        /**
         * Name of the track.
         */
        trackName?: string;
        /**
         * Type of the track.
         */
        trackType?: string;
        /**
         * The language code (in BCP-47 format) of the transcription language. For example, "de-de" indicates German (Germany). The value is empty for the video track heartbeats, or when live transcription is turned off.
         */
        transcriptionLanguage?: string;
        /**
         * This value is "On" for audio track heartbeats if live transcription is turned on, otherwise you will see an empty string. This state is only applicable to track type of "audio" for Live transcription. All other tracks will have an empty value.
         */
        transcriptionState?: string;
        /**
         * If expected and actual bitrates differ by more than allowed limit in last 20 seconds.
         */
        unexpectedBitrate?: boolean;
    }

    /**
     * The live event track event.
     */
    export interface LiveEventTrackEventResponse {
        /**
         * Event data.
         */
        data?: LiveEventTrackEventDataResponse;
        /**
         * The time event raised.
         */
        eventTime?: string;
        /**
         * The type of the track event.
         */
        eventType?: string;
    }

    /**
     * The live event track status.
     */
    export interface LiveEventTrackStatusResponse {
        /**
         * Expected bitrate for this track.
         */
        expectedBitrate?: number;
        /**
         * Average incoming bitrate for last 20 seconds when live event is running.
         */
        incomingBitrate?: number;
        /**
         * Current ingest drift value in seconds for last 1 minute.
         */
        ingestDrift?: string;
        /**
         * Total number of timed metadata request received.
         */
        requestReceived?: number;
        /**
         * Total number of successful timed metadata request received.
         */
        requestSucceeded?: number;
        /**
         * Track Id.
         */
        trackId?: string;
    }

    /**
     * Describes the transcription tracks in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventTranscriptionResponse {
        /**
         * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
         */
        inputTrackSelection?: LiveEventInputTrackSelectionResponse[];
        /**
         * Specifies the language (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature and the list of supported languages.
         */
        language?: string;
        /**
         * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
         */
        outputTranscriptionTrack?: LiveEventOutputTranscriptionTrackResponse;
    }

    /**
     * Asset sink.
     */
    export interface MediaGraphAssetSinkResponse {
        /**
         * Asset name.
         */
        assetName: string;
        /**
         * Sink inputs.
         */
        inputs: string[];
        /**
         * Sink name.
         */
        name: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
         */
        odataType: "#Microsoft.Media.MediaGraphAssetSink";
    }

    /**
     * An endpoint to connect to with no encryption in transit.
     */
    export interface MediaGraphClearEndpointResponse {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: MediaGraphUsernamePasswordCredentialsResponse;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphClearEndpoint'.
         */
        odataType: "#Microsoft.Media.MediaGraphClearEndpoint";
        /**
         * Url for the endpoint.
         */
        url: string;
    }

    /**
     * A list of PEM formatted certificates.
     */
    export interface MediaGraphPemCertificateListResponse {
        /**
         * PEM formatted public certificates, one per entry.
         */
        certificates: string[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphPemCertificateList'.
         */
        odataType: "#Microsoft.Media.MediaGraphPemCertificateList";
    }

    /**
     * RTSP source.
     */
    export interface MediaGraphRtspSourceResponse {
        /**
         * RTSP endpoint of the stream being connected to.
         */
        endpoint: MediaGraphClearEndpointResponse | MediaGraphTlsEndpointResponse;
        /**
         * Source name.
         */
        name: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
         */
        odataType: "#Microsoft.Media.MediaGraphRtspSource";
        /**
         * Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.
         */
        transport: string;
    }

    /**
     * An endpoint which must be connected over TLS/SSL.
     */
    export interface MediaGraphTlsEndpointResponse {
        /**
         * Polymorphic credentials to present to the endpoint.
         */
        credentials?: MediaGraphUsernamePasswordCredentialsResponse;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphTlsEndpoint'.
         */
        odataType: "#Microsoft.Media.MediaGraphTlsEndpoint";
        /**
         * What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
         */
        trustedCertificates?: MediaGraphPemCertificateListResponse;
        /**
         * Url for the endpoint.
         */
        url: string;
        /**
         * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
         */
        validationOptions?: MediaGraphTlsValidationOptionsResponse;
    }

    /**
     * Options for controlling the authentication of TLS endpoints.
     */
    export interface MediaGraphTlsValidationOptionsResponse {
        /**
         * Ignore the host name (common name) during validation.
         */
        ignoreHostname: boolean;
        /**
         * Ignore the integrity of the certificate chain at the current time.
         */
        ignoreSignature: boolean;
    }

    /**
     * Username/password credential pair.
     */
    export interface MediaGraphUsernamePasswordCredentialsResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'.
         */
        odataType: "#Microsoft.Media.MediaGraphUsernamePasswordCredentials";
        /**
         * Password for a username/password pair.
         */
        password: string;
        /**
         * Username for a username/password pair.
         */
        username: string;
    }

    export interface MediaServiceIdentityResponse {
        /**
         * The Principal ID of the identity.
         */
        principalId: string;
        /**
         * The Tenant ID of the identity.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type: string;
        /**
         * The user assigned managed identities.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
    }

    /**
     * Describes the properties for an output ISO MP4 file.
     */
    export interface Mp4FormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.Mp4Format'.
         */
        odataType: "#Microsoft.Media.Mp4Format";
        /**
         * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
         */
        outputFiles?: OutputFileResponse[];
    }

    /**
     * Describes the properties for producing a collection of GOP aligned multi-bitrate files. The default behavior is to produce one output file for each video layer which is muxed together with all the audios. The exact output files produced can be controlled by specifying the outputFiles collection.
     */
    export interface MultiBitrateFormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.MultiBitrateFormat'.
         */
        odataType: "#Microsoft.Media.MultiBitrateFormat";
        /**
         * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
         */
        outputFiles?: OutputFileResponse[];
    }

    /**
     * Class for NoEncryption scheme
     */
    export interface NoEncryptionResponse {
        /**
         * Representing supported protocols
         */
        enabledProtocols?: EnabledProtocolsResponse;
    }

    /**
     * Represents an output file produced.
     */
    export interface OutputFileResponse {
        /**
         * The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.
         */
        labels: string[];
    }

    /**
     * Describes the settings for producing PNG thumbnails.
     */
    export interface PngFormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.PngFormat'.
         */
        odataType: "#Microsoft.Media.PngFormat";
    }

    /**
     * Describes the properties for producing a series of PNG images from the input video.
     */
    export interface PngImageResponse {
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * A collection of output PNG image layers to be produced by the encoder.
         */
        layers?: PngLayerResponse[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.PngImage'.
         */
        odataType: "#Microsoft.Media.PngImage";
        /**
         * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
         */
        range?: string;
        /**
         * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
         */
        start: string;
        /**
         * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
         */
        step?: string;
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * Describes the settings to produce a PNG image from the input video.
     */
    export interface PngLayerResponse {
        /**
         * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
         */
        height?: string;
        /**
         * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
         */
        label?: string;
        /**
         * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
         */
        width?: string;
    }

    /**
     * The presentation time range, this is asset related and not recommended for Account Filter.
     */
    export interface PresentationTimeRangeResponse {
        /**
         * The absolute end time boundary.
         */
        endTimestamp?: number;
        /**
         * The indicator of forcing existing of end time stamp.
         */
        forceEndTimestamp?: boolean;
        /**
         * The relative to end right edge.
         */
        liveBackoffDuration?: number;
        /**
         * The relative to end sliding window.
         */
        presentationWindowDuration?: number;
        /**
         * The absolute start time boundary.
         */
        startTimestamp?: number;
        /**
         * The time scale of time stamps.
         */
        timescale?: number;
    }

    /**
     * An object of optional configuration settings for encoder.
     */
    export interface PresetConfigurationsResponse {
        /**
         * Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency.
         */
        complexity?: string;
        /**
         * Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files.
         */
        interleaveOutput?: string;
        /**
         * The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players.
         */
        keyFrameIntervalInSeconds?: number;
        /**
         * The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity.
         */
        maxBitrateBps?: number;
        /**
         * The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K.
         */
        maxHeight?: number;
        /**
         * The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job.
         */
        maxLayers?: number;
        /**
         * The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth.
         */
        minBitrateBps?: number;
        /**
         * The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P.
         */
        minHeight?: number;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Describes the properties of a rectangular window applied to the input media before processing it.
     */
    export interface RectangleResponse {
        /**
         * The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
         */
        height?: string;
        /**
         * The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
         */
        left?: string;
        /**
         * The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
         */
        top?: string;
        /**
         * The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
         */
        width?: string;
    }

    export interface ResourceIdentityResponse {
        /**
         * Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.
         */
        useSystemAssignedIdentity: boolean;
        /**
         * The user assigned managed identity's ARM ID to use when accessing a resource.
         */
        userAssignedIdentity?: string;
    }

    /**
     * Select audio tracks from the input by specifying an attribute and an attribute filter.
     */
    export interface SelectAudioTrackByAttributeResponse {
        /**
         * The TrackAttribute to filter the tracks by.
         */
        attribute: string;
        /**
         * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
         */
        channelMapping?: string;
        /**
         * The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
         */
        filter: string;
        /**
         * The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property.
         */
        filterValue?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.SelectAudioTrackByAttribute'.
         */
        odataType: "#Microsoft.Media.SelectAudioTrackByAttribute";
    }

    /**
     * Select audio tracks from the input by specifying a track identifier.
     */
    export interface SelectAudioTrackByIdResponse {
        /**
         * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
         */
        channelMapping?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.SelectAudioTrackById'.
         */
        odataType: "#Microsoft.Media.SelectAudioTrackById";
        /**
         * Track identifier to select
         */
        trackId: number;
    }

    /**
     * Select video tracks from the input by specifying an attribute and an attribute filter.
     */
    export interface SelectVideoTrackByAttributeResponse {
        /**
         * The TrackAttribute to filter the tracks by.
         */
        attribute: string;
        /**
         * The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
         */
        filter: string;
        /**
         * The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. For TrackAttribute.Bitrate, this should be an integer value in bits per second (e.g: '1500000').  The TrackAttribute.Language is not supported for video tracks.
         */
        filterValue?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.SelectVideoTrackByAttribute'.
         */
        odataType: "#Microsoft.Media.SelectVideoTrackByAttribute";
    }

    /**
     * Select video tracks from the input by specifying a track identifier.
     */
    export interface SelectVideoTrackByIdResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.SelectVideoTrackById'.
         */
        odataType: "#Microsoft.Media.SelectVideoTrackById";
        /**
         * Track identifier to select
         */
        trackId: number;
    }

    /**
     * Describes all the settings to be used when encoding the input video with the Standard Encoder.
     */
    export interface StandardEncoderPresetResponse {
        /**
         * The list of codecs to be used when encoding the input video.
         */
        codecs: (AacAudioResponse | AudioResponse | CopyAudioResponse | CopyVideoResponse | DDAudioResponse | H264VideoResponse | H265VideoResponse | ImageResponse | JpgImageResponse | PngImageResponse | VideoResponse)[];
        /**
         * Dictionary containing key value pairs for parameters not exposed in the preset itself
         */
        experimentalOptions?: {[key: string]: string};
        /**
         * One or more filtering operations that are applied to the input media before encoding.
         */
        filters?: FiltersResponse;
        /**
         * The list of outputs to be produced by the encoder.
         */
        formats: (ImageFormatResponse | JpgFormatResponse | Mp4FormatResponse | MultiBitrateFormatResponse | PngFormatResponse | TransportStreamFormatResponse)[];
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.StandardEncoderPreset'.
         */
        odataType: "#Microsoft.Media.StandardEncoderPreset";
    }

    /**
     * The storage account details.
     */
    export interface StorageAccountResponse {
        /**
         * The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
         */
        id?: string;
        /**
         * The storage account identity.
         */
        identity?: ResourceIdentityResponse;
        /**
         * The current status of the storage account mapping.
         */
        status: string;
        /**
         * The type of the storage account.
         */
        type: string;
    }

    /**
     * Streaming endpoint access control definition.
     */
    export interface StreamingEndpointAccessControlResponse {
        /**
         * The access control of Akamai
         */
        akamai?: AkamaiAccessControlResponse;
        /**
         * The IP access control of the streaming endpoint.
         */
        ip?: IPAccessControlResponse;
    }

    /**
     * Class for content key in Streaming Locator
     */
    export interface StreamingLocatorContentKeyResponse {
        /**
         * ID of Content Key
         */
        id: string;
        /**
         * Label of Content Key as specified in the Streaming Policy
         */
        labelReferenceInStreamingPolicy?: string;
        /**
         * ContentKeyPolicy used by Content Key
         */
        policyName: string;
        /**
         * Tracks which use this Content Key
         */
        tracks: TrackSelectionResponse[];
        /**
         * Encryption type of Content Key
         */
        type: string;
        /**
         * Value of Content Key
         */
        value?: string;
    }

    /**
     * Class of paths for streaming
     */
    export interface StreamingPathResponse {
        /**
         * Encryption scheme
         */
        encryptionScheme: string;
        /**
         * Streaming paths for each protocol and encryptionScheme pair
         */
        paths?: string[];
        /**
         * Streaming protocol
         */
        streamingProtocol: string;
    }

    /**
     * Class to specify properties of content key
     */
    export interface StreamingPolicyContentKeyResponse {
        /**
         * Label can be used to specify Content Key when creating a Streaming Locator
         */
        label?: string;
        /**
         * Policy used by Content Key
         */
        policyName?: string;
        /**
         * Tracks which use this content key
         */
        tracks?: TrackSelectionResponse[];
    }

    /**
     * Class to specify properties of all content keys in Streaming Policy
     */
    export interface StreamingPolicyContentKeysResponse {
        /**
         * Default content key for an encryption scheme
         */
        defaultKey?: DefaultKeyResponse;
        /**
         * Representing tracks needs separate content key
         */
        keyToTrackMappings?: StreamingPolicyContentKeyResponse[];
    }

    /**
     * Class to specify configurations of FairPlay in Streaming Policy
     */
    export interface StreamingPolicyFairPlayConfigurationResponse {
        /**
         * All license to be persistent or not
         */
        allowPersistentLicense: boolean;
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: string;
    }

    /**
     * Class to specify configurations of PlayReady in Streaming Policy
     */
    export interface StreamingPolicyPlayReadyConfigurationResponse {
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: string;
        /**
         * Custom attributes for PlayReady
         */
        playReadyCustomAttributes?: string;
    }

    /**
     * Class to specify configurations of Widevine in Streaming Policy
     */
    export interface StreamingPolicyWidevineConfigurationResponse {
        /**
         * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
         */
        customLicenseAcquisitionUrlTemplate?: string;
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
     * Represents a text track in an asset. A text track is usually used for sparse data related to the audio or video tracks.
     */
    export interface TextTrackResponse {
        /**
         * The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
         */
        displayName?: string;
        /**
         * The file name to the source file. This file is located in the storage container of the asset.
         */
        fileName?: string;
        /**
         * The HLS specific setting for the text track.
         */
        hlsSettings?: HlsSettingsResponse;
        /**
         * The RFC5646 language code for the text track.
         */
        languageCode: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.TextTrack'.
         */
        odataType: "#Microsoft.Media.TextTrack";
        /**
         * When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".
         */
        playerVisibility?: string;
    }

    /**
     * Class to specify one track property condition
     */
    export interface TrackPropertyConditionResponse {
        /**
         * Track property condition operation
         */
        operation: string;
        /**
         * Track property type
         */
        property: string;
        /**
         * Track property value
         */
        value?: string;
    }

    /**
     * Class to select a track
     */
    export interface TrackSelectionResponse {
        /**
         * TrackSelections is a track property condition list which can specify track(s)
         */
        trackSelections?: TrackPropertyConditionResponse[];
    }

    /**
     * Describes the properties of a TransformOutput, which are the rules to be applied while generating the desired output.
     */
    export interface TransformOutputResponse {
        /**
         * A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
         */
        onError?: string;
        /**
         * Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output.
         */
        preset: AudioAnalyzerPresetResponse | BuiltInStandardEncoderPresetResponse | FaceDetectorPresetResponse | StandardEncoderPresetResponse | VideoAnalyzerPresetResponse;
        /**
         * Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.
         */
        relativePriority?: string;
    }

    /**
     * Describes the properties for generating an MPEG-2 Transport Stream (ISO/IEC 13818-1) output video file(s).
     */
    export interface TransportStreamFormatResponse {
        /**
         * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
         */
        filenamePattern: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.TransportStreamFormat'.
         */
        odataType: "#Microsoft.Media.TransportStreamFormat";
        /**
         * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
         */
        outputFiles?: OutputFileResponse[];
    }

    export interface UserAssignedManagedIdentityResponse {
        /**
         * The client ID.
         */
        clientId: string;
        /**
         * The principal ID.
         */
        principalId: string;
    }

    /**
     * Specifies the clip time as a Utc time position in the media file.  The Utc time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
     */
    export interface UtcClipTimeResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.UtcClipTime'.
         */
        odataType: "#Microsoft.Media.UtcClipTime";
        /**
         * The time position on the timeline of the input media based on Utc time.
         */
        time: string;
    }

    /**
     * A video analyzer preset that extracts insights (rich metadata) from both audio and video, and outputs a JSON format file.
     */
    export interface VideoAnalyzerPresetResponse {
        /**
         * The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
         */
        audioLanguage?: string;
        /**
         * Dictionary containing key value pairs for parameters not exposed in the preset itself
         */
        experimentalOptions?: {[key: string]: string};
        /**
         * Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.
         */
        insightsToExtract?: string;
        /**
         * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
         */
        mode?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.VideoAnalyzerPreset'.
         */
        odataType: "#Microsoft.Media.VideoAnalyzerPreset";
    }

    /**
     * Describes the properties of a video overlay.
     */
    export interface VideoOverlayResponse {
        /**
         * The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
         */
        audioGainLevel?: number;
        /**
         * An optional rectangular window used to crop the overlay image or video.
         */
        cropRectangle?: RectangleResponse;
        /**
         * The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
         */
        end?: string;
        /**
         * The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
         */
        fadeInDuration?: string;
        /**
         * The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
         */
        fadeOutDuration?: string;
        /**
         * The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
         */
        inputLabel: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.VideoOverlay'.
         */
        odataType: "#Microsoft.Media.VideoOverlay";
        /**
         * The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
         */
        opacity?: number;
        /**
         * The location in the input video where the overlay is applied.
         */
        position?: RectangleResponse;
        /**
         * The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
         */
        start?: string;
    }

    /**
     * Describes the basic properties for encoding the input video.
     */
    export interface VideoResponse {
        /**
         * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
         */
        keyFrameInterval?: string;
        /**
         * An optional label for the codec. The label can be used to control muxing behavior.
         */
        label?: string;
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.Video'.
         */
        odataType: "#Microsoft.Media.Video";
        /**
         * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
         */
        stretchMode?: string;
        /**
         * The Video Sync Mode
         */
        syncMode?: string;
    }

    /**
     * A TrackSelection to select video tracks.
     */
    export interface VideoTrackDescriptorResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.VideoTrackDescriptor'.
         */
        odataType: "#Microsoft.Media.VideoTrackDescriptor";
    }

    /**
     * Represents a video track in the asset.
     */
    export interface VideoTrackResponse {
        /**
         * The discriminator for derived types.
         * Expected value is '#Microsoft.Media.VideoTrack'.
         */
        odataType: "#Microsoft.Media.VideoTrack";
    }

    export namespace v20151001 {
        /**
         * The properties for a Media Services REST API endpoint.
         */
        export interface ApiEndpointResponse {
            /**
             * The Media Services REST endpoint.
             */
            endpoint?: string;
            /**
             * The version of Media Services REST API.
             */
            majorVersion?: string;
        }

        /**
         * The properties of a storage account associated with this resource.
         */
        export interface StorageAccountResponse {
            /**
             * The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
             */
            id: string;
            /**
             * Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.
             */
            isPrimary: boolean;
        }

    }

    export namespace v20180330preview {
        /**
         * Describes the properties of a user-defined content key in the Streaming Locator
         */
        export interface StreamingLocatorUserDefinedContentKeyResponse {
            /**
             * ID of Content Key
             */
            id: string;
            /**
             * The Content Key description
             */
            label?: string;
            /**
             * The Content Key secret
             */
            value?: string;
        }

    }

    export namespace v20180601preview {
        /**
         * Akamai access control
         */
        export interface AkamaiAccessControlResponse {
            /**
             * authentication key list
             */
            akamaiSignatureHeaderAuthenticationKeyList?: v20180601preview.AkamaiSignatureHeaderAuthenticationKeyResponse[];
        }

        /**
         * Akamai Signature Header authentication key.
         */
        export interface AkamaiSignatureHeaderAuthenticationKeyResponse {
            /**
             * authentication key
             */
            base64Key?: string;
            /**
             * The exact time the authentication key.
             */
            expiration?: string;
            /**
             * identifier of the key
             */
            identifier?: string;
        }

        /**
         * The client access policy.
         */
        export interface CrossSiteAccessPoliciesResponse {
            /**
             * The content of clientaccesspolicy.xml used by Silverlight.
             */
            clientAccessPolicy?: string;
            /**
             * The content of crossdomain.xml used by Silverlight.
             */
            crossDomainPolicy?: string;
        }

        /**
         * The IP access control.
         */
        export interface IPAccessControlResponse {
            /**
             * The IP allow list.
             */
            allow?: v20180601preview.IPRangeResponse[];
        }

        /**
         * The IP address range in the CIDR scheme.
         */
        export interface IPRangeResponse {
            /**
             * The IP address.
             */
            address?: string;
            /**
             * The friendly name for the IP address range.
             */
            name?: string;
            /**
             * The subnet mask prefix length (see CIDR notation).
             */
            subnetPrefixLength?: number;
        }

        /**
         * The Live Event encoding.
         */
        export interface LiveEventEncodingResponse {
            /**
             * The encoding type for Live Event.
             */
            encodingType?: string;
            /**
             * The encoding preset name.
             */
            presetName?: string;
        }

        /**
         * The Live Event endpoint.
         */
        export interface LiveEventEndpointResponse {
            /**
             * The endpoint protocol.
             */
            protocol?: string;
            /**
             * The endpoint URL.
             */
            url?: string;
        }

        /**
         * The Live Event input.
         */
        export interface LiveEventInputResponse {
            /**
             * The access token.
             */
            accessToken?: string;
            /**
             * The input endpoints for the Live Event.
             */
            endpoints?: v20180601preview.LiveEventEndpointResponse[];
            /**
             * ISO 8601 timespan duration of the key frame interval duration.
             */
            keyFrameIntervalDuration?: string;
            /**
             * The streaming protocol for the Live Event.
             */
            streamingProtocol: string;
        }

        /**
         * The IP access control for Live Event preview.
         */
        export interface LiveEventPreviewAccessControlResponse {
            /**
             * The IP access control properties.
             */
            ip?: v20180601preview.IPAccessControlResponse;
        }

        /**
         * The Live Event preview.
         */
        export interface LiveEventPreviewResponse {
            /**
             * The access control for LiveEvent preview.
             */
            accessControl?: v20180601preview.LiveEventPreviewAccessControlResponse;
            /**
             * An Alternative Media Identifier associated with the preview url.  This identifier can be used to distinguish the preview of different live events for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
             */
            alternativeMediaId?: string;
            /**
             * The endpoints for preview.
             */
            endpoints?: v20180601preview.LiveEventEndpointResponse[];
            /**
             * The preview locator Guid.
             */
            previewLocator?: string;
            /**
             * The name of streaming policy used for LiveEvent preview
             */
            streamingPolicyName?: string;
        }

        /**
         * StreamingEndpoint access control definition.
         */
        export interface StreamingEndpointAccessControlResponse {
            /**
             * The access control of Akamai
             */
            akamai?: v20180601preview.AkamaiAccessControlResponse;
            /**
             * The IP access control of the StreamingEndpoint.
             */
            ip?: v20180601preview.IPAccessControlResponse;
        }

    }

    export namespace v20190501preview {
        /**
         * The client access policy.
         */
        export interface CrossSiteAccessPoliciesResponse {
            /**
             * The content of clientaccesspolicy.xml used by Silverlight.
             */
            clientAccessPolicy?: string;
            /**
             * The content of crossdomain.xml used by Silverlight.
             */
            crossDomainPolicy?: string;
        }

        /**
         * The IP access control.
         */
        export interface IPAccessControlResponse {
            /**
             * The IP allow list.
             */
            allow?: v20190501preview.IPRangeResponse[];
        }

        /**
         * The IP address range in the CIDR scheme.
         */
        export interface IPRangeResponse {
            /**
             * The IP address.
             */
            address?: string;
            /**
             * The friendly name for the IP address range.
             */
            name?: string;
            /**
             * The subnet mask prefix length (see CIDR notation).
             */
            subnetPrefixLength?: number;
        }

        /**
         * The Live Event encoding.
         */
        export interface LiveEventEncodingResponse {
            /**
             * The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
             */
            encodingType?: string;
            /**
             * The encoding preset name.  This value is specified at creation time and cannot be updated.
             */
            presetName?: string;
        }

        /**
         * The Live Event endpoint.
         */
        export interface LiveEventEndpointResponse {
            /**
             * The endpoint protocol.
             */
            protocol?: string;
            /**
             * The endpoint URL.
             */
            url?: string;
        }

        /**
         * The IP access control for Live Event Input.
         */
        export interface LiveEventInputAccessControlResponse {
            /**
             * The IP access control properties.
             */
            ip?: v20190501preview.IPAccessControlResponse;
        }

        /**
         * The Live Event input.
         */
        export interface LiveEventInputResponse {
            /**
             * The access control for LiveEvent Input.
             */
            accessControl?: v20190501preview.LiveEventInputAccessControlResponse;
            /**
             * A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
             */
            accessToken?: string;
            /**
             * The input endpoints for the Live Event.
             */
            endpoints?: v20190501preview.LiveEventEndpointResponse[];
            /**
             * ISO 8601 timespan duration of the key frame interval duration.
             */
            keyFrameIntervalDuration?: string;
            /**
             * The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.
             */
            streamingProtocol: string;
        }

        /**
         * A track selection condition.
         */
        export interface LiveEventInputTrackSelectionResponse {
            /**
             * Comparing operation.
             */
            operation?: string;
            /**
             * Property name to select.
             */
            property?: string;
            /**
             * Property value to select.
             */
            value?: string;
        }

        /**
         * Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
         */
        export interface LiveEventOutputTranscriptionTrackResponse {
            /**
             * The output track name.
             */
            trackName: string;
        }

        /**
         * The IP access control for Live Event preview.
         */
        export interface LiveEventPreviewAccessControlResponse {
            /**
             * The IP access control properties.
             */
            ip?: v20190501preview.IPAccessControlResponse;
        }

        /**
         * The Live Event preview.
         */
        export interface LiveEventPreviewResponse {
            /**
             * The access control for LiveEvent preview.
             */
            accessControl?: v20190501preview.LiveEventPreviewAccessControlResponse;
            /**
             * An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
             */
            alternativeMediaId?: string;
            /**
             * The endpoints for preview.
             */
            endpoints?: v20190501preview.LiveEventEndpointResponse[];
            /**
             * The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created.
             */
            previewLocator?: string;
            /**
             * The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated.
             */
            streamingPolicyName?: string;
        }

        /**
         * Describes the transcription tracks in the output of a Live Event, generated using speech-to-text transcription.
         */
        export interface LiveEventTranscriptionResponse {
            /**
             * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied.
             */
            inputTrackSelection?: v20190501preview.LiveEventInputTrackSelectionResponse[];
            /**
             * Specifies the language (locale) used for speech-to-text transcription - it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
             */
            language?: string;
            /**
             * Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
             */
            outputTranscriptionTrack?: v20190501preview.LiveEventOutputTranscriptionTrackResponse;
        }

    }

    export namespace v20200201preview {
        /**
         * Asset sink.
         */
        export interface MediaGraphAssetSinkResponse {
            /**
             * Asset name.
             */
            assetName: string;
            /**
             * Sink inputs.
             */
            inputs: string[];
            /**
             * Sink name.
             */
            name: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
             */
            odataType: "#Microsoft.Media.MediaGraphAssetSink";
        }

        /**
         * An endpoint to connect to with no encryption in transit.
         */
        export interface MediaGraphClearEndpointResponse {
            /**
             * Polymorphic credentials to present to the endpoint.
             */
            credentials?: v20200201preview.MediaGraphUsernamePasswordCredentialsResponse;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphClearEndpoint'.
             */
            odataType: "#Microsoft.Media.MediaGraphClearEndpoint";
            /**
             * Url for the endpoint.
             */
            url: string;
        }

        /**
         * A list of PEM formatted certificates.
         */
        export interface MediaGraphPemCertificateListResponse {
            /**
             * PEM formatted public certificates, one per entry.
             */
            certificates: string[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphPemCertificateList'.
             */
            odataType: "#Microsoft.Media.MediaGraphPemCertificateList";
        }

        /**
         * RTSP source.
         */
        export interface MediaGraphRtspSourceResponse {
            /**
             * RTSP endpoint of the stream being connected to.
             */
            endpoint: v20200201preview.MediaGraphClearEndpointResponse | v20200201preview.MediaGraphTlsEndpointResponse;
            /**
             * Source name.
             */
            name: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
             */
            odataType: "#Microsoft.Media.MediaGraphRtspSource";
            /**
             * Underlying RTSP transport. This can be used to enable or disable HTTP tunneling.
             */
            transport: string;
        }

        /**
         * An endpoint which must be connected over TLS/SSL.
         */
        export interface MediaGraphTlsEndpointResponse {
            /**
             * Polymorphic credentials to present to the endpoint.
             */
            credentials?: v20200201preview.MediaGraphUsernamePasswordCredentialsResponse;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphTlsEndpoint'.
             */
            odataType: "#Microsoft.Media.MediaGraphTlsEndpoint";
            /**
             * What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used.
             */
            trustedCertificates?: v20200201preview.MediaGraphPemCertificateListResponse;
            /**
             * Url for the endpoint.
             */
            url: string;
            /**
             * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
             */
            validationOptions?: v20200201preview.MediaGraphTlsValidationOptionsResponse;
        }

        /**
         * Options for controlling the authentication of TLS endpoints.
         */
        export interface MediaGraphTlsValidationOptionsResponse {
            /**
             * Ignore the host name (common name) during validation.
             */
            ignoreHostname: boolean;
            /**
             * Ignore the integrity of the certificate chain at the current time.
             */
            ignoreSignature: boolean;
        }

        /**
         * Username/password credential pair.
         */
        export interface MediaGraphUsernamePasswordCredentialsResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'.
             */
            odataType: "#Microsoft.Media.MediaGraphUsernamePasswordCredentials";
            /**
             * Password for a username/password pair.
             */
            password: string;
            /**
             * Username for a username/password pair.
             */
            username: string;
        }

    }

    export namespace v20220701 {
        /**
         * Describes Advanced Audio Codec (AAC) audio encoding settings.
         */
        export interface AacAudioResponse {
            /**
             * The bitrate, in bits per second, of the output encoded audio.
             */
            bitrate?: number;
            /**
             * The number of channels in the audio.
             */
            channels?: number;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AacAudio'.
             */
            odataType: "#Microsoft.Media.AacAudio";
            /**
             * The encoding profile to be used when encoding audio with AAC.
             */
            profile?: string;
            /**
             * The sampling rate to use for encoding in hertz.
             */
            samplingRate?: number;
        }

        /**
         * Specifies the clip time as an absolute time position in the media file.  The absolute time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
         */
        export interface AbsoluteClipTimeResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AbsoluteClipTime'.
             */
            odataType: "#Microsoft.Media.AbsoluteClipTime";
            /**
             * The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.
             */
            time: string;
        }

        /**
         * The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.
         */
        export interface AudioAnalyzerPresetResponse {
            /**
             * The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
             */
            audioLanguage?: string;
            /**
             * Dictionary containing key value pairs for parameters not exposed in the preset itself
             */
            experimentalOptions?: {[key: string]: string};
            /**
             * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
             */
            mode?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AudioAnalyzerPreset'.
             */
            odataType: "#Microsoft.Media.AudioAnalyzerPreset";
        }

        /**
         * Describes the properties of an audio overlay.
         */
        export interface AudioOverlayResponse {
            /**
             * The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
             */
            audioGainLevel?: number;
            /**
             * The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
             */
            end?: string;
            /**
             * The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
             */
            fadeInDuration?: string;
            /**
             * The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
             */
            fadeOutDuration?: string;
            /**
             * The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
             */
            inputLabel: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AudioOverlay'.
             */
            odataType: "#Microsoft.Media.AudioOverlay";
            /**
             * The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
             */
            start?: string;
        }

        /**
         * Defines the common properties for all audio codecs.
         */
        export interface AudioResponse {
            /**
             * The bitrate, in bits per second, of the output encoded audio.
             */
            bitrate?: number;
            /**
             * The number of channels in the audio.
             */
            channels?: number;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.Audio'.
             */
            odataType: "#Microsoft.Media.Audio";
            /**
             * The sampling rate to use for encoding in hertz.
             */
            samplingRate?: number;
        }

        /**
         * A TrackSelection to select audio tracks.
         */
        export interface AudioTrackDescriptorResponse {
            /**
             * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
             */
            channelMapping?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AudioTrackDescriptor'.
             */
            odataType: "#Microsoft.Media.AudioTrackDescriptor";
        }

        /**
         * Describes a built-in preset for encoding the input video with the Standard Encoder.
         */
        export interface BuiltInStandardEncoderPresetResponse {
            /**
             * Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset.
             */
            configurations?: v20220701.PresetConfigurationsResponse;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.BuiltInStandardEncoderPreset'.
             */
            odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset";
            /**
             * The built-in preset to be used for encoding videos.
             */
            presetName: string;
        }

        /**
         * A codec flag, which tells the encoder to copy the input audio bitstream.
         */
        export interface CopyAudioResponse {
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.CopyAudio'.
             */
            odataType: "#Microsoft.Media.CopyAudio";
        }

        /**
         * A codec flag, which tells the encoder to copy the input video bitstream without re-encoding.
         */
        export interface CopyVideoResponse {
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.CopyVideo'.
             */
            odataType: "#Microsoft.Media.CopyVideo";
        }

        /**
         * Describes Dolby Digital Audio Codec (AC3) audio encoding settings. The current implementation for Dolby Digital Audio support are: Audio channel numbers at 1((mono), 2(stereo), 6(5.1side); Audio sampling frequency rates at: 32K/44.1K/48K Hz; Audio bitrate values as AC3 specification supports: 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000, 384000, 448000, 512000, 576000, 640000 bps.
         */
        export interface DDAudioResponse {
            /**
             * The bitrate, in bits per second, of the output encoded audio.
             */
            bitrate?: number;
            /**
             * The number of channels in the audio.
             */
            channels?: number;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.DDAudio'.
             */
            odataType: "#Microsoft.Media.DDAudio";
            /**
             * The sampling rate to use for encoding in hertz.
             */
            samplingRate?: number;
        }

        /**
         * Describes the de-interlacing settings.
         */
        export interface DeinterlaceResponse {
            /**
             * The deinterlacing mode. Defaults to AutoPixelAdaptive.
             */
            mode?: string;
            /**
             * The field parity for de-interlacing, defaults to Auto.
             */
            parity?: string;
        }

        /**
         * Describes all the settings to be used when analyzing a video in order to detect (and optionally redact) all the faces present.
         */
        export interface FaceDetectorPresetResponse {
            /**
             * Blur type
             */
            blurType?: string;
            /**
             * Dictionary containing key value pairs for parameters not exposed in the preset itself
             */
            experimentalOptions?: {[key: string]: string};
            /**
             * This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
             */
            mode?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.FaceDetectorPreset'.
             */
            odataType: "#Microsoft.Media.FaceDetectorPreset";
            /**
             * Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.
             */
            resolution?: string;
        }

        /**
         * Describes the properties of a Fade effect applied to the input media.
         */
        export interface FadeResponse {
            /**
             * The Duration of the fade effect in the video. The value can be in ISO 8601 format (For example, PT05S to fade In/Out a color during 5 seconds), or a frame count (For example, 10 to fade 10 frames from the start time), or a relative value to stream duration (For example, 10% to fade 10% of stream duration)
             */
            duration: string;
            /**
             * The Color for the fade In/Out. it can be on the CSS Level1 colors https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color_keywords or an RGB/hex value: e.g: rgb(255,0,0), 0xFF0000 or #FF0000
             */
            fadeColor: string;
            /**
             * The position in the input video from where to start fade. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Default is 0
             */
            start?: string;
        }

        /**
         * Describes all the filtering operations, such as de-interlacing, rotation etc. that are to be applied to the input media before encoding.
         */
        export interface FiltersResponse {
            /**
             * The parameters for the rectangular window with which to crop the input video.
             */
            crop?: v20220701.RectangleResponse;
            /**
             * The de-interlacing settings.
             */
            deinterlace?: v20220701.DeinterlaceResponse;
            /**
             * Describes the properties of a Fade effect applied to the input media.
             */
            fadeIn?: v20220701.FadeResponse;
            /**
             * Describes the properties of a Fade effect applied to the input media.
             */
            fadeOut?: v20220701.FadeResponse;
            /**
             * The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
             */
            overlays?: (v20220701.AudioOverlayResponse | v20220701.VideoOverlayResponse)[];
            /**
             * The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto
             */
            rotation?: string;
        }

        /**
         * An InputDefinition that looks across all of the files provided to select tracks specified by the IncludedTracks property. Generally used with the AudioTrackByAttribute and VideoTrackByAttribute to allow selection of a single track across a set of input files.
         */
        export interface FromAllInputFileResponse {
            /**
             * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
             */
            includedTracks?: (v20220701.AudioTrackDescriptorResponse | v20220701.SelectAudioTrackByAttributeResponse | v20220701.SelectAudioTrackByIdResponse | v20220701.SelectVideoTrackByAttributeResponse | v20220701.SelectVideoTrackByIdResponse | v20220701.VideoTrackDescriptorResponse)[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.FromAllInputFile'.
             */
            odataType: "#Microsoft.Media.FromAllInputFile";
        }

        /**
         * An InputDefinition that looks at each input file provided to select tracks specified by the IncludedTracks property. Generally used with the AudioTrackByAttribute and VideoTrackByAttribute to select tracks from each file given.
         */
        export interface FromEachInputFileResponse {
            /**
             * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
             */
            includedTracks?: (v20220701.AudioTrackDescriptorResponse | v20220701.SelectAudioTrackByAttributeResponse | v20220701.SelectAudioTrackByIdResponse | v20220701.SelectVideoTrackByAttributeResponse | v20220701.SelectVideoTrackByIdResponse | v20220701.VideoTrackDescriptorResponse)[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.FromEachInputFile'.
             */
            odataType: "#Microsoft.Media.FromEachInputFile";
        }

        /**
         * Describes the settings to be used when encoding the input video into a desired output bitrate layer with the H.264 video codec.
         */
        export interface H264LayerResponse {
            /**
             * Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
             */
            adaptiveBFrame?: boolean;
            /**
             * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
             */
            bFrames?: number;
            /**
             * The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field.
             */
            bitrate: number;
            /**
             * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
             */
            bufferWindow?: string;
            /**
             * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23.
             */
            crf?: number;
            /**
             * The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
             */
            entropyMode?: string;
            /**
             * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
             */
            frameRate?: string;
            /**
             * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
             */
            height?: string;
            /**
             * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
             */
            label?: string;
            /**
             * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
             */
            level?: string;
            /**
             * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
             */
            maxBitrate?: number;
            /**
             * We currently support Baseline, Main, High, High422, High444. Default is Auto.
             */
            profile?: string;
            /**
             * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
             */
            referenceFrames?: number;
            /**
             * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
             */
            slices?: number;
            /**
             * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
             */
            width?: string;
        }

        /**
         * Describes all the properties for encoding a video with the H.264 codec.
         */
        export interface H264VideoResponse {
            /**
             * Tells the encoder how to choose its encoding settings. The default value is Balanced.
             */
            complexity?: string;
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The collection of output H.264 layers to be produced by the encoder.
             */
            layers?: v20220701.H264LayerResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.H264Video'.
             */
            odataType: "#Microsoft.Media.H264Video";
            /**
             * The video rate control mode
             */
            rateControlMode?: string;
            /**
             * Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
             */
            sceneChangeDetection?: boolean;
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * Describes the settings to be used when encoding the input video into a desired output bitrate layer with the H.265 video codec.
         */
        export interface H265LayerResponse {
            /**
             * Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
             */
            adaptiveBFrame?: boolean;
            /**
             * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
             */
            bFrames?: number;
            /**
             * The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field.
             */
            bitrate: number;
            /**
             * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
             */
            bufferWindow?: string;
            /**
             * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28.
             */
            crf?: number;
            /**
             * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
             */
            frameRate?: string;
            /**
             * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
             */
            height?: string;
            /**
             * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
             */
            label?: string;
            /**
             * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
             */
            level?: string;
            /**
             * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
             */
            maxBitrate?: number;
            /**
             * We currently support Main. Default is Auto.
             */
            profile?: string;
            /**
             * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
             */
            referenceFrames?: number;
            /**
             * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
             */
            slices?: number;
            /**
             * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
             */
            width?: string;
        }

        /**
         * Describes all the properties for encoding a video with the H.265 codec.
         */
        export interface H265VideoResponse {
            /**
             * Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
             */
            complexity?: string;
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The collection of output H.265 layers to be produced by the encoder.
             */
            layers?: v20220701.H265LayerResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.H265Video'.
             */
            odataType: "#Microsoft.Media.H265Video";
            /**
             * Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
             */
            sceneChangeDetection?: boolean;
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * Describes the properties for an output image file.
         */
        export interface ImageFormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ImageFormat'.
             */
            odataType: "#Microsoft.Media.ImageFormat";
        }

        /**
         * Describes the basic properties for generating thumbnails from the input video
         */
        export interface ImageResponse {
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.Image'.
             */
            odataType: "#Microsoft.Media.Image";
            /**
             * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
             */
            range?: string;
            /**
             * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
             */
            start: string;
            /**
             * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
             */
            step?: string;
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * An InputDefinition for a single file.  TrackSelections are scoped to the file specified.
         */
        export interface InputFileResponse {
            /**
             * Name of the file that this input definition applies to.
             */
            filename?: string;
            /**
             * The list of TrackDescriptors which define the metadata and selection of tracks in the input.
             */
            includedTracks?: (v20220701.AudioTrackDescriptorResponse | v20220701.SelectAudioTrackByAttributeResponse | v20220701.SelectAudioTrackByIdResponse | v20220701.SelectVideoTrackByAttributeResponse | v20220701.SelectVideoTrackByIdResponse | v20220701.VideoTrackDescriptorResponse)[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.InputFile'.
             */
            odataType: "#Microsoft.Media.InputFile";
        }

        /**
         * Details of JobOutput errors.
         */
        export interface JobErrorDetailResponse {
            /**
             * Code describing the error detail.
             */
            code: string;
            /**
             * A human-readable representation of the error.
             */
            message: string;
        }

        /**
         * Details of JobOutput errors.
         */
        export interface JobErrorResponse {
            /**
             * Helps with categorization of errors.
             */
            category: string;
            /**
             * Error code describing the error.
             */
            code: string;
            /**
             * An array of details about specific errors that led to this reported error.
             */
            details: v20220701.JobErrorDetailResponse[];
            /**
             * A human-readable language-dependent representation of the error.
             */
            message: string;
            /**
             * Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal.
             */
            retry: string;
        }

        /**
         * Represents an Asset for input into a Job.
         */
        export interface JobInputAssetResponse {
            /**
             * The name of the input Asset.
             */
            assetName: string;
            /**
             * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
             */
            end?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
            /**
             * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
             */
            files?: string[];
            /**
             * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
             */
            inputDefinitions?: (v20220701.FromAllInputFileResponse | v20220701.FromEachInputFileResponse | v20220701.InputFileResponse)[];
            /**
             * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobInputAsset'.
             */
            odataType: "#Microsoft.Media.JobInputAsset";
            /**
             * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
             */
            start?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
        }

        /**
         * Represents input files for a Job.
         */
        export interface JobInputClipResponse {
            /**
             * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
             */
            end?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
            /**
             * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
             */
            files?: string[];
            /**
             * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
             */
            inputDefinitions?: (v20220701.FromAllInputFileResponse | v20220701.FromEachInputFileResponse | v20220701.InputFileResponse)[];
            /**
             * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobInputClip'.
             */
            odataType: "#Microsoft.Media.JobInputClip";
            /**
             * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
             */
            start?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
        }

        /**
         * Represents HTTPS job input.
         */
        export interface JobInputHttpResponse {
            /**
             * Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. The query strings will not be returned in service responses to prevent sensitive data exposure.
             */
            baseUri?: string;
            /**
             * Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
             */
            end?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
            /**
             * List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
             */
            files?: string[];
            /**
             * Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
             */
            inputDefinitions?: (v20220701.FromAllInputFileResponse | v20220701.FromEachInputFileResponse | v20220701.InputFileResponse)[];
            /**
             * A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobInputHttp'.
             */
            odataType: "#Microsoft.Media.JobInputHttp";
            /**
             * Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.
             */
            start?: v20220701.AbsoluteClipTimeResponse | v20220701.UtcClipTimeResponse;
        }

        /**
         * A Sequence contains an ordered list of Clips where each clip is a JobInput.  The Sequence will be treated as a single input.
         */
        export interface JobInputSequenceResponse {
            /**
             * JobInputs that make up the timeline.
             */
            inputs?: v20220701.JobInputClipResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobInputSequence'.
             */
            odataType: "#Microsoft.Media.JobInputSequence";
        }

        /**
         * Describes a list of inputs to a Job.
         */
        export interface JobInputsResponse {
            /**
             * List of inputs to a Job.
             */
            inputs?: (v20220701.JobInputAssetResponse | v20220701.JobInputClipResponse | v20220701.JobInputHttpResponse | v20220701.JobInputSequenceResponse | v20220701.JobInputsResponse)[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobInputs'.
             */
            odataType: "#Microsoft.Media.JobInputs";
        }

        /**
         * Represents an Asset used as a JobOutput.
         */
        export interface JobOutputAssetResponse {
            /**
             * The name of the output Asset.
             */
            assetName: string;
            /**
             * The UTC date and time at which this Job Output finished processing.
             */
            endTime: string;
            /**
             * If the JobOutput is in the Error state, it contains the details of the error.
             */
            error: v20220701.JobErrorResponse;
            /**
             * A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JobOutputAsset'.
             */
            odataType: "#Microsoft.Media.JobOutputAsset";
            /**
             * A preset used to override the preset in the corresponding transform output.
             */
            presetOverride?: v20220701.AudioAnalyzerPresetResponse | v20220701.BuiltInStandardEncoderPresetResponse | v20220701.FaceDetectorPresetResponse | v20220701.StandardEncoderPresetResponse | v20220701.VideoAnalyzerPresetResponse;
            /**
             * If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
             */
            progress: number;
            /**
             * The UTC date and time at which this Job Output began processing.
             */
            startTime: string;
            /**
             * Describes the state of the JobOutput.
             */
            state: string;
        }

        /**
         * Describes the settings for producing JPEG thumbnails.
         */
        export interface JpgFormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JpgFormat'.
             */
            odataType: "#Microsoft.Media.JpgFormat";
        }

        /**
         * Describes the properties for producing a series of JPEG images from the input video.
         */
        export interface JpgImageResponse {
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * A collection of output JPEG image layers to be produced by the encoder.
             */
            layers?: v20220701.JpgLayerResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.JpgImage'.
             */
            odataType: "#Microsoft.Media.JpgImage";
            /**
             * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
             */
            range?: string;
            /**
             * Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535.
             */
            spriteColumn?: number;
            /**
             * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
             */
            start: string;
            /**
             * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
             */
            step?: string;
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * Describes the settings to produce a JPEG image from the input video.
         */
        export interface JpgLayerResponse {
            /**
             * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
             */
            height?: string;
            /**
             * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
             */
            label?: string;
            /**
             * The compression quality of the JPEG output. Range is from 0-100 and the default is 70.
             */
            quality?: number;
            /**
             * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
             */
            width?: string;
        }

        /**
         * Describes the properties for an output ISO MP4 file.
         */
        export interface Mp4FormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.Mp4Format'.
             */
            odataType: "#Microsoft.Media.Mp4Format";
            /**
             * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
             */
            outputFiles?: v20220701.OutputFileResponse[];
        }

        /**
         * Describes the properties for producing a collection of GOP aligned multi-bitrate files. The default behavior is to produce one output file for each video layer which is muxed together with all the audios. The exact output files produced can be controlled by specifying the outputFiles collection.
         */
        export interface MultiBitrateFormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.MultiBitrateFormat'.
             */
            odataType: "#Microsoft.Media.MultiBitrateFormat";
            /**
             * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
             */
            outputFiles?: v20220701.OutputFileResponse[];
        }

        /**
         * Represents an output file produced.
         */
        export interface OutputFileResponse {
            /**
             * The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.
             */
            labels: string[];
        }

        /**
         * Describes the settings for producing PNG thumbnails.
         */
        export interface PngFormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.PngFormat'.
             */
            odataType: "#Microsoft.Media.PngFormat";
        }

        /**
         * Describes the properties for producing a series of PNG images from the input video.
         */
        export interface PngImageResponse {
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * A collection of output PNG image layers to be produced by the encoder.
             */
            layers?: v20220701.PngLayerResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.PngImage'.
             */
            odataType: "#Microsoft.Media.PngImage";
            /**
             * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
             */
            range?: string;
            /**
             * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
             */
            start: string;
            /**
             * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
             */
            step?: string;
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * Describes the settings to produce a PNG image from the input video.
         */
        export interface PngLayerResponse {
            /**
             * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
             */
            height?: string;
            /**
             * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
             */
            label?: string;
            /**
             * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
             */
            width?: string;
        }

        /**
         * An object of optional configuration settings for encoder.
         */
        export interface PresetConfigurationsResponse {
            /**
             * Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency.
             */
            complexity?: string;
            /**
             * Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files.
             */
            interleaveOutput?: string;
            /**
             * The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players.
             */
            keyFrameIntervalInSeconds?: number;
            /**
             * The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity.
             */
            maxBitrateBps?: number;
            /**
             * The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K.
             */
            maxHeight?: number;
            /**
             * The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job.
             */
            maxLayers?: number;
            /**
             * The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth.
             */
            minBitrateBps?: number;
            /**
             * The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P.
             */
            minHeight?: number;
        }

        /**
         * Describes the properties of a rectangular window applied to the input media before processing it.
         */
        export interface RectangleResponse {
            /**
             * The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
             */
            height?: string;
            /**
             * The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
             */
            left?: string;
            /**
             * The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
             */
            top?: string;
            /**
             * The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
             */
            width?: string;
        }

        /**
         * Select audio tracks from the input by specifying an attribute and an attribute filter.
         */
        export interface SelectAudioTrackByAttributeResponse {
            /**
             * The TrackAttribute to filter the tracks by.
             */
            attribute: string;
            /**
             * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
             */
            channelMapping?: string;
            /**
             * The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
             */
            filter: string;
            /**
             * The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property.
             */
            filterValue?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.SelectAudioTrackByAttribute'.
             */
            odataType: "#Microsoft.Media.SelectAudioTrackByAttribute";
        }

        /**
         * Select audio tracks from the input by specifying a track identifier.
         */
        export interface SelectAudioTrackByIdResponse {
            /**
             * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
             */
            channelMapping?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.SelectAudioTrackById'.
             */
            odataType: "#Microsoft.Media.SelectAudioTrackById";
            /**
             * Track identifier to select
             */
            trackId: number;
        }

        /**
         * Select video tracks from the input by specifying an attribute and an attribute filter.
         */
        export interface SelectVideoTrackByAttributeResponse {
            /**
             * The TrackAttribute to filter the tracks by.
             */
            attribute: string;
            /**
             * The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
             */
            filter: string;
            /**
             * The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. For TrackAttribute.Bitrate, this should be an integer value in bits per second (e.g: '1500000').  The TrackAttribute.Language is not supported for video tracks.
             */
            filterValue?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.SelectVideoTrackByAttribute'.
             */
            odataType: "#Microsoft.Media.SelectVideoTrackByAttribute";
        }

        /**
         * Select video tracks from the input by specifying a track identifier.
         */
        export interface SelectVideoTrackByIdResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.SelectVideoTrackById'.
             */
            odataType: "#Microsoft.Media.SelectVideoTrackById";
            /**
             * Track identifier to select
             */
            trackId: number;
        }

        /**
         * Describes all the settings to be used when encoding the input video with the Standard Encoder.
         */
        export interface StandardEncoderPresetResponse {
            /**
             * The list of codecs to be used when encoding the input video.
             */
            codecs: (v20220701.AacAudioResponse | v20220701.AudioResponse | v20220701.CopyAudioResponse | v20220701.CopyVideoResponse | v20220701.DDAudioResponse | v20220701.H264VideoResponse | v20220701.H265VideoResponse | v20220701.ImageResponse | v20220701.JpgImageResponse | v20220701.PngImageResponse | v20220701.VideoResponse)[];
            /**
             * Dictionary containing key value pairs for parameters not exposed in the preset itself
             */
            experimentalOptions?: {[key: string]: string};
            /**
             * One or more filtering operations that are applied to the input media before encoding.
             */
            filters?: v20220701.FiltersResponse;
            /**
             * The list of outputs to be produced by the encoder.
             */
            formats: (v20220701.ImageFormatResponse | v20220701.JpgFormatResponse | v20220701.Mp4FormatResponse | v20220701.MultiBitrateFormatResponse | v20220701.PngFormatResponse | v20220701.TransportStreamFormatResponse)[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.StandardEncoderPreset'.
             */
            odataType: "#Microsoft.Media.StandardEncoderPreset";
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
         * Describes the properties of a TransformOutput, which are the rules to be applied while generating the desired output.
         */
        export interface TransformOutputResponse {
            /**
             * A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
             */
            onError?: string;
            /**
             * Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output.
             */
            preset: v20220701.AudioAnalyzerPresetResponse | v20220701.BuiltInStandardEncoderPresetResponse | v20220701.FaceDetectorPresetResponse | v20220701.StandardEncoderPresetResponse | v20220701.VideoAnalyzerPresetResponse;
            /**
             * Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.
             */
            relativePriority?: string;
        }

        /**
         * Describes the properties for generating an MPEG-2 Transport Stream (ISO/IEC 13818-1) output video file(s).
         */
        export interface TransportStreamFormatResponse {
            /**
             * The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
             */
            filenamePattern: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.TransportStreamFormat'.
             */
            odataType: "#Microsoft.Media.TransportStreamFormat";
            /**
             * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
             */
            outputFiles?: v20220701.OutputFileResponse[];
        }

        /**
         * Specifies the clip time as a Utc time position in the media file.  The Utc time can point to a different position depending on whether the media file starts from a timestamp of zero or not.
         */
        export interface UtcClipTimeResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.UtcClipTime'.
             */
            odataType: "#Microsoft.Media.UtcClipTime";
            /**
             * The time position on the timeline of the input media based on Utc time.
             */
            time: string;
        }

        /**
         * A video analyzer preset that extracts insights (rich metadata) from both audio and video, and outputs a JSON format file.
         */
        export interface VideoAnalyzerPresetResponse {
            /**
             * The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
             */
            audioLanguage?: string;
            /**
             * Dictionary containing key value pairs for parameters not exposed in the preset itself
             */
            experimentalOptions?: {[key: string]: string};
            /**
             * Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.
             */
            insightsToExtract?: string;
            /**
             * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
             */
            mode?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.VideoAnalyzerPreset'.
             */
            odataType: "#Microsoft.Media.VideoAnalyzerPreset";
        }

        /**
         * Describes the properties of a video overlay.
         */
        export interface VideoOverlayResponse {
            /**
             * The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
             */
            audioGainLevel?: number;
            /**
             * An optional rectangular window used to crop the overlay image or video.
             */
            cropRectangle?: v20220701.RectangleResponse;
            /**
             * The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
             */
            end?: string;
            /**
             * The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
             */
            fadeInDuration?: string;
            /**
             * The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
             */
            fadeOutDuration?: string;
            /**
             * The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
             */
            inputLabel: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.VideoOverlay'.
             */
            odataType: "#Microsoft.Media.VideoOverlay";
            /**
             * The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
             */
            opacity?: number;
            /**
             * The location in the input video where the overlay is applied.
             */
            position?: v20220701.RectangleResponse;
            /**
             * The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
             */
            start?: string;
        }

        /**
         * Describes the basic properties for encoding the input video.
         */
        export interface VideoResponse {
            /**
             * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
             */
            keyFrameInterval?: string;
            /**
             * An optional label for the codec. The label can be used to control muxing behavior.
             */
            label?: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.Video'.
             */
            odataType: "#Microsoft.Media.Video";
            /**
             * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
             */
            stretchMode?: string;
            /**
             * The Video Sync Mode
             */
            syncMode?: string;
        }

        /**
         * A TrackSelection to select video tracks.
         */
        export interface VideoTrackDescriptorResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.VideoTrackDescriptor'.
             */
            odataType: "#Microsoft.Media.VideoTrackDescriptor";
        }

    }

    export namespace v20221101 {
        /**
         * Akamai access control
         */
        export interface AkamaiAccessControlResponse {
            /**
             * authentication key list
             */
            akamaiSignatureHeaderAuthenticationKeyList?: v20221101.AkamaiSignatureHeaderAuthenticationKeyResponse[];
        }

        /**
         * Akamai Signature Header authentication key.
         */
        export interface AkamaiSignatureHeaderAuthenticationKeyResponse {
            /**
             * authentication key
             */
            base64Key?: string;
            /**
             * The expiration time of the authentication key.
             */
            expiration?: string;
            /**
             * identifier of the key
             */
            identifier?: string;
        }

        /**
         * The streaming endpoint current sku.
         */
        export interface ArmStreamingEndpointCurrentSkuResponse {
            /**
             * The streaming endpoint sku capacity.
             */
            capacity?: number;
            /**
             * The streaming endpoint sku name.
             */
            name: string;
        }

        /**
         * The client access policy.
         */
        export interface CrossSiteAccessPoliciesResponse {
            /**
             * The content of clientaccesspolicy.xml used by Silverlight.
             */
            clientAccessPolicy?: string;
            /**
             * The content of crossdomain.xml used by Silverlight.
             */
            crossDomainPolicy?: string;
        }

        /**
         * HTTP Live Streaming (HLS) packing setting for the live output.
         */
        export interface HlsResponse {
            /**
             * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.
             */
            fragmentsPerTsSegment?: number;
        }

        /**
         * The IP access control.
         */
        export interface IPAccessControlResponse {
            /**
             * The IP allow list.
             */
            allow?: v20221101.IPRangeResponse[];
        }

        /**
         * The IP address range in the CIDR scheme.
         */
        export interface IPRangeResponse {
            /**
             * The IP address.
             */
            address?: string;
            /**
             * The friendly name for the IP address range.
             */
            name?: string;
            /**
             * The subnet mask prefix length (see CIDR notation).
             */
            subnetPrefixLength?: number;
        }

        /**
         * Specifies the live event type and optional encoding settings for encoding live events.
         */
        export interface LiveEventEncodingResponse {
            /**
             * Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
             */
            encodingType?: string;
            /**
             * Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
             */
            keyFrameInterval?: string;
            /**
             * The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is ‘Default720p’. Else if the encodingType is set to Premium1080p, the default preset is ‘Default1080p’.
             */
            presetName?: string;
            /**
             * Specifies how the input video will be resized to fit the desired output resolution(s). Default is None
             */
            stretchMode?: string;
        }

        /**
         * The live event endpoint.
         */
        export interface LiveEventEndpointResponse {
            /**
             * The endpoint protocol.
             */
            protocol?: string;
            /**
             * The endpoint URL.
             */
            url?: string;
        }

        /**
         * The live event ingest interruption data.
         */
        export interface LiveEventIngestInterruptionResponse {
            /**
             * UTC time of interruption start, encoder disconnected.
             */
            begin?: string;
            /**
             * Duration of interruption in ISO 8601 time. For example, use PT1H30M to indicate 1 hour and 30 minutes.
             */
            duration?: string;
            /**
             * UTC time of interruption end, encoder re-connected.
             */
            end?: string;
            /**
             * Interruption reason.
             */
            reason?: string;
        }

        /**
         * The live event ingestion telemetry data.
         */
        export interface LiveEventIngestionResponse {
            /**
             * Ingestion begin time in UTC.
             */
            begin?: string;
            /**
             * Ingestion end time in UTC. Empty if it's not stopped yet.
             */
            end?: string;
            /**
             * Reason why ingestion stops. Empty if it's not stopped yet. E.g) Service Stopped. No Ingestion.
             */
            endReason?: string;
            /**
             * IngestInterruption entry list.
             */
            ingestInterruptions?: v20221101.LiveEventIngestInterruptionResponse[];
            /**
             * Ingestion stream name.
             */
            streamName?: string;
        }

        /**
         * The IP access control for live event input.
         */
        export interface LiveEventInputAccessControlResponse {
            /**
             * The IP access control properties.
             */
            ip?: v20221101.IPAccessControlResponse;
        }

        /**
         * The live event input.
         */
        export interface LiveEventInputResponse {
            /**
             * Access control for live event input.
             */
            accessControl?: v20221101.LiveEventInputAccessControlResponse;
            /**
             * A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
             */
            accessToken?: string;
            /**
             * The input endpoints for the live event.
             */
            endpoints?: v20221101.LiveEventEndpointResponse[];
            /**
             * ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
             */
            keyFrameIntervalDuration?: string;
            /**
             * The input protocol for the live event. This is specified at creation time and cannot be updated.
             */
            streamingProtocol: string;
            /**
             * The metadata endpoints for the live event.
             */
            timedMetadataEndpoints?: v20221101.LiveEventTimedMetadataEndpointResponse[];
        }

        /**
         * A track selection condition. This property is reserved for future use, any value set on this property will be ignored.
         */
        export interface LiveEventInputTrackSelectionResponse {
            /**
             * Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
             */
            operation?: string;
            /**
             * Property name to select. This property is reserved for future use, any value set on this property will be ignored.
             */
            property?: string;
            /**
             * Property value to select. This property is reserved for future use, any value set on this property will be ignored.
             */
            value?: string;
        }

        /**
         * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
         */
        export interface LiveEventOutputTranscriptionTrackResponse {
            /**
             * The output track name. This property is reserved for future use, any value set on this property will be ignored.
             */
            trackName: string;
        }

        /**
         * The IP access control for the live event preview endpoint.
         */
        export interface LiveEventPreviewAccessControlResponse {
            /**
             * The IP access control properties.
             */
            ip?: v20221101.IPAccessControlResponse;
        }

        /**
         * Live event preview settings.
         */
        export interface LiveEventPreviewResponse {
            /**
             * The access control for live event preview.
             */
            accessControl?: v20221101.LiveEventPreviewAccessControlResponse;
            /**
             * An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
             */
            alternativeMediaId?: string;
            /**
             * The endpoints for preview. Do not share the preview URL with the live event audience.
             */
            endpoints?: v20221101.LiveEventEndpointResponse[];
            /**
             * The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
             */
            previewLocator?: string;
            /**
             * The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.
             */
            streamingPolicyName?: string;
        }

        /**
         * The live event status.
         */
        export interface LiveEventStatusResponse {
            /**
             * List of strings justifying the health status.
             */
            healthDescriptions?: string[];
            /**
             * Health status of last 20 seconds.
             */
            healthStatus?: string;
            /**
             * Live event ingestion entry.
             */
            ingestion?: v20221101.LiveEventIngestionResponse;
            /**
             * Last updated UTC time of this status.
             */
            lastUpdatedTime?: string;
            /**
             * Current state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
             */
            state?: string;
            /**
             * Track entry list.
             */
            trackStatus?: v20221101.LiveEventTrackStatusResponse[];
        }

        /**
         * The live event stream event data.
         */
        export interface LiveEventStreamEventDataResponse {
            /**
             * Bitrate of the track.
             */
            bitrate?: number;
            /**
             * Current fragment timestamp in timescale.
             */
            currentFragmentTimestamp?: string;
            /**
             * Length of the discontinuity gap in timescale.
             */
            discontinuityGap?: number;
            /**
             * Fragment duration.
             */
            duration?: string;
            /**
             * Reason the fragment was dropped.
             */
            fragmentDropReason?: string;
            /**
             * Duration of first fragment used to make a comparison, in timescale.
             */
            fragmentOneDuration?: string;
            /**
             * Timestamp of first fragment used to make a comparison, in timescale.
             */
            fragmentOneTimestamp?: string;
            /**
             * Duration of second fragment used to make a comparison, in timescale.
             */
            fragmentTwoDuration?: string;
            /**
             * Timestamp of second fragment used to make a comparison, in timescale.
             */
            fragmentTwoTimestamp?: string;
            /**
             * The larger timestamp of the two fragments compared.
             */
            maxTime?: string;
            /**
             * The media type of the larger timestamp of two fragments compared.
             */
            maxTimeMediaType?: string;
            /**
             * Fragment timestamp in timescale.
             */
            mediaTimestamp?: string;
            /**
             * Type of the track.
             */
            mediaType?: string;
            /**
             * The smaller timestamp of the two fragments compared.
             */
            minTime?: string;
            /**
             * The media type of the smaller timestamp of two fragments compared.
             */
            minTimeMediaType?: string;
            /**
             * Previous fragment duration in timescale.
             */
            previousFragmentDuration?: string;
            /**
             * Previous fragment timestamp in timescale.
             */
            previousFragmentTimestamp?: string;
            /**
             * Truncated IP of the encoder.
             */
            remoteIp?: string;
            /**
             * Port of the encoder.
             */
            remotePort?: string;
            /**
             * Width x Height for video, null otherwise.
             */
            resolution?: string;
            /**
             * Result code.
             */
            resultCode?: string;
            /**
             * Result message.
             */
            resultMessage?: string;
            /**
             * Stream ID in the format "trackName_bitrate"
             */
            streamId?: string;
            /**
             * Identifier of the stream or connection. Encoder or customer is responsible to add this ID in the ingest URL.
             */
            streamName?: string;
            /**
             * Timescale in which timestamps are expressed.
             */
            timescale?: string;
            /**
             * Timescale of the fragment with the larger timestamp.
             */
            timescaleOfMaxTime?: string;
            /**
             * Timescale of the fragment with the smaller timestamp.
             */
            timescaleOfMinTime?: string;
            /**
             * Track index.
             */
            trackId?: number;
            /**
             * Name of the track. 
             */
            trackName?: string;
        }

        /**
         * The live event stream event.
         */
        export interface LiveEventStreamEventResponse {
            /**
             * Event data based on event type.
             */
            data?: v20221101.LiveEventStreamEventDataResponse;
            /**
             * Event level.
             */
            eventLevel?: string;
            /**
             * The time event raised.
             */
            eventTime?: string;
            /**
             * The type of the stream event. Format: StreamEvent/{eventType}
             */
            eventType?: string;
        }

        /**
         * The live event metadata insertion endpoint.
         */
        export interface LiveEventTimedMetadataEndpointResponse {
            /**
             * The metadata endpoint URL.
             */
            url?: string;
        }

        /**
         * The live event track ingest heart beat event data.
         */
        export interface LiveEventTrackEventDataResponse {
            /**
             * Bitrate of the track.
             */
            bitrate?: number;
            /**
             * Number of discontinuities detected in the last 20 seconds.
             */
            discontinuityCount?: number;
            /**
             * Indicates whether ingest is healthy.
             */
            healthy?: boolean;
            /**
             * Calculated bitrate based on data chunks coming from encoder.
             */
            incomingBitrate?: number;
            /**
             * Indicates the speed of delay, in seconds-per-minute, of the incoming audio or video data during the last minute. The value is greater than zero if data is arriving to the live event slower than expected in the last minute; zero if data arrived with no delay; and "n/a" if no audio or video data was received. For example, if you have a contribution encoder sending in live content, and it is slowing down due to processing issues, or network latency, it may be only able to deliver a total of 58 seconds of audio or video in a one-minute period. This would be reported as two seconds-per-minute of drift. If the encoder is able to catch up and send all 60 seconds or more of data every minute, you will see this value reported as 0. If there was a disconnection or discontinuity from the encoder, this value may still display as 0, as it does not account for breaks in the data - only data that is delayed in timestamps.
             */
            ingestDriftValue?: string;
            /**
             * The last timestamp in UTC that a fragment arrived at the ingest endpoint.
             */
            lastFragmentArrivalTime?: string;
            /**
             * Latest timestamp received for a track in last 20 seconds.
             */
            lastTimestamp?: string;
            /**
             * Number of data chunks with timestamps in the past that were received in last 20 seconds.
             */
            nonincreasingCount?: number;
            /**
             * Number of data chunks that had overlapped timestamps in last 20 seconds.
             */
            overlapCount?: number;
            /**
             * State of the live event.
             */
            state?: string;
            /**
             * Timescale in which timestamps are expressed.
             */
            timescale?: string;
            /**
             * Name of the track.
             */
            trackName?: string;
            /**
             * Type of the track.
             */
            trackType?: string;
            /**
             * The language code (in BCP-47 format) of the transcription language. For example, "de-de" indicates German (Germany). The value is empty for the video track heartbeats, or when live transcription is turned off.
             */
            transcriptionLanguage?: string;
            /**
             * This value is "On" for audio track heartbeats if live transcription is turned on, otherwise you will see an empty string. This state is only applicable to track type of "audio" for Live transcription. All other tracks will have an empty value.
             */
            transcriptionState?: string;
            /**
             * If expected and actual bitrates differ by more than allowed limit in last 20 seconds.
             */
            unexpectedBitrate?: boolean;
        }

        /**
         * The live event track event.
         */
        export interface LiveEventTrackEventResponse {
            /**
             * Event data.
             */
            data?: v20221101.LiveEventTrackEventDataResponse;
            /**
             * The time event raised.
             */
            eventTime?: string;
            /**
             * The type of the track event.
             */
            eventType?: string;
        }

        /**
         * The live event track status.
         */
        export interface LiveEventTrackStatusResponse {
            /**
             * Expected bitrate for this track.
             */
            expectedBitrate?: number;
            /**
             * Average incoming bitrate for last 20 seconds when live event is running.
             */
            incomingBitrate?: number;
            /**
             * Current ingest drift value in seconds for last 1 minute.
             */
            ingestDrift?: string;
            /**
             * Total number of timed metadata request received.
             */
            requestReceived?: number;
            /**
             * Total number of successful timed metadata request received.
             */
            requestSucceeded?: number;
            /**
             * Track Id.
             */
            trackId?: string;
        }

        /**
         * Describes the transcription tracks in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
         */
        export interface LiveEventTranscriptionResponse {
            /**
             * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
             */
            inputTrackSelection?: v20221101.LiveEventInputTrackSelectionResponse[];
            /**
             * Specifies the language (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature and the list of supported languages.
             */
            language?: string;
            /**
             * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
             */
            outputTranscriptionTrack?: v20221101.LiveEventOutputTranscriptionTrackResponse;
        }

        /**
         * Streaming endpoint access control definition.
         */
        export interface StreamingEndpointAccessControlResponse {
            /**
             * The access control of Akamai
             */
            akamai?: v20221101.AkamaiAccessControlResponse;
            /**
             * The IP access control of the streaming endpoint.
             */
            ip?: v20221101.IPAccessControlResponse;
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

    }

    export namespace v20230101 {
        export interface AccessControlResponse {
            /**
             * The behavior for IP access control in Key Delivery.
             */
            defaultAction?: string;
            /**
             * The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.
             */
            ipAllowList?: string[];
        }

        export interface AccountEncryptionResponse {
            /**
             * The Key Vault identity.
             */
            identity?: v20230101.ResourceIdentityResponse;
            /**
             * The properties of the key used to encrypt the account.
             */
            keyVaultProperties?: v20230101.KeyVaultPropertiesResponse;
            /**
             * The current status of the Key Vault mapping.
             */
            status: string;
            /**
             * The type of key used to encrypt the Account Key.
             */
            type: string;
        }

        /**
         * The Asset File Storage encryption metadata.
         */
        export interface AssetFileEncryptionMetadataResponse {
            /**
             * The Asset File Id.
             */
            assetFileId: string;
            /**
             * The Asset File name.
             */
            assetFileName?: string;
            /**
             * The Asset File initialization vector.
             */
            initializationVector?: string;
        }

        /**
         * Properties of the Streaming Locator.
         */
        export interface AssetStreamingLocatorResponse {
            /**
             * Asset Name.
             */
            assetName: string;
            /**
             * The creation time of the Streaming Locator.
             */
            created: string;
            /**
             * Name of the default ContentKeyPolicy used by this Streaming Locator.
             */
            defaultContentKeyPolicyName: string;
            /**
             * The end time of the Streaming Locator.
             */
            endTime: string;
            /**
             * Streaming Locator name.
             */
            name: string;
            /**
             * The start time of the Streaming Locator.
             */
            startTime: string;
            /**
             * StreamingLocatorId of the Streaming Locator.
             */
            streamingLocatorId: string;
            /**
             * Name of the Streaming Policy used by this Streaming Locator.
             */
            streamingPolicyName: string;
        }

        /**
         * Represents an audio track in the asset.
         */
        export interface AudioTrackResponse {
            /**
             * The stream bit rate for the audio track.
             */
            bitRate: number;
            /**
             * The DASH specific setting for the audio track.
             */
            dashSettings?: v20230101.DashSettingsResponse;
            /**
             * The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
             */
            displayName?: string;
            /**
             * The file name to the source file. This file is located in the storage container of the asset.
             */
            fileName?: string;
            /**
             * The HLS specific setting for the audio track.
             */
            hlsSettings?: v20230101.HlsSettingsResponse;
            /**
             * The RFC5646 language code for the audio track.
             */
            languageCode?: string;
            /**
             * The MPEG-4 audio track ID for the audio track.
             */
            mpeg4TrackId?: number;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.AudioTrack'.
             */
            odataType: "#Microsoft.Media.AudioTrack";
        }

        /**
         * Class to specify DRM configurations of CommonEncryptionCbcs scheme in Streaming Policy
         */
        export interface CbcsDrmConfigurationResponse {
            /**
             * FairPlay configurations
             */
            fairPlay?: v20230101.StreamingPolicyFairPlayConfigurationResponse;
            /**
             * PlayReady configurations
             */
            playReady?: v20230101.StreamingPolicyPlayReadyConfigurationResponse;
            /**
             * Widevine configurations
             */
            widevine?: v20230101.StreamingPolicyWidevineConfigurationResponse;
        }

        /**
         * Class to specify DRM configurations of CommonEncryptionCenc scheme in Streaming Policy
         */
        export interface CencDrmConfigurationResponse {
            /**
             * PlayReady configurations
             */
            playReady?: v20230101.StreamingPolicyPlayReadyConfigurationResponse;
            /**
             * Widevine configurations
             */
            widevine?: v20230101.StreamingPolicyWidevineConfigurationResponse;
        }

        /**
         * Class to specify ClearKey configuration of common encryption schemes in Streaming Policy
         */
        export interface ClearKeyEncryptionConfigurationResponse {
            /**
             * Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId.
             */
            customKeysAcquisitionUrlTemplate?: string;
        }

        /**
         * Class for CommonEncryptionCbcs encryption scheme
         */
        export interface CommonEncryptionCbcsResponse {
            /**
             * Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme.
             */
            clearKeyEncryptionConfiguration?: v20230101.ClearKeyEncryptionConfigurationResponse;
            /**
             * Representing which tracks should not be encrypted
             */
            clearTracks?: v20230101.TrackSelectionResponse[];
            /**
             * Representing default content key for each encryption scheme and separate content keys for specific tracks
             */
            contentKeys?: v20230101.StreamingPolicyContentKeysResponse;
            /**
             * Configuration of DRMs for current encryption scheme
             */
            drm?: v20230101.CbcsDrmConfigurationResponse;
            /**
             * Representing supported protocols
             */
            enabledProtocols?: v20230101.EnabledProtocolsResponse;
        }

        /**
         * Class for envelope encryption scheme
         */
        export interface CommonEncryptionCencResponse {
            /**
             * Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme.
             */
            clearKeyEncryptionConfiguration?: v20230101.ClearKeyEncryptionConfigurationResponse;
            /**
             * Representing which tracks should not be encrypted
             */
            clearTracks?: v20230101.TrackSelectionResponse[];
            /**
             * Representing default content key for each encryption scheme and separate content keys for specific tracks
             */
            contentKeys?: v20230101.StreamingPolicyContentKeysResponse;
            /**
             * Configuration of DRMs for CommonEncryptionCenc encryption scheme
             */
            drm?: v20230101.CencDrmConfigurationResponse;
            /**
             * Representing supported protocols
             */
            enabledProtocols?: v20230101.EnabledProtocolsResponse;
        }

        /**
         * Represents a configuration for non-DRM keys.
         */
        export interface ContentKeyPolicyClearKeyConfigurationResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration";
        }

        /**
         * Specifies a configuration for FairPlay licenses.
         */
        export interface ContentKeyPolicyFairPlayConfigurationResponse {
            /**
             * The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded.
             */
            ask: string;
            /**
             * The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
             */
            fairPlayPfx: string;
            /**
             * The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
             */
            fairPlayPfxPassword: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration";
            /**
             * Offline rental policy
             */
            offlineRentalConfiguration?: v20230101.ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse;
            /**
             * The rental and lease key type.
             */
            rentalAndLeaseKeyType: string;
            /**
             * The rental duration. Must be greater than or equal to 0.
             */
            rentalDuration: number;
        }

        export interface ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse {
            /**
             * Playback duration
             */
            playbackDurationSeconds: number;
            /**
             * Storage duration
             */
            storageDurationSeconds: number;
        }

        /**
         * Represents an open restriction. License or key will be delivered on every request.
         */
        export interface ContentKeyPolicyOpenRestrictionResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyOpenRestriction'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyOpenRestriction";
        }

        /**
         * Represents a policy option.
         */
        export interface ContentKeyPolicyOptionResponse {
            /**
             * The key delivery configuration.
             */
            configuration: v20230101.ContentKeyPolicyClearKeyConfigurationResponse | v20230101.ContentKeyPolicyFairPlayConfigurationResponse | v20230101.ContentKeyPolicyPlayReadyConfigurationResponse | v20230101.ContentKeyPolicyUnknownConfigurationResponse | v20230101.ContentKeyPolicyWidevineConfigurationResponse;
            /**
             * The Policy Option description.
             */
            name?: string;
            /**
             * The legacy Policy Option ID.
             */
            policyOptionId: string;
            /**
             * The requirements that must be met to deliver keys with this configuration
             */
            restriction: v20230101.ContentKeyPolicyOpenRestrictionResponse | v20230101.ContentKeyPolicyTokenRestrictionResponse | v20230101.ContentKeyPolicyUnknownRestrictionResponse;
        }

        /**
         * Specifies a configuration for PlayReady licenses.
         */
        export interface ContentKeyPolicyPlayReadyConfigurationResponse {
            /**
             * The PlayReady licenses.
             */
            licenses: v20230101.ContentKeyPolicyPlayReadyLicenseResponse[];
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration";
            /**
             * The custom response data.
             */
            responseCustomData?: string;
        }

        /**
         * Specifies that the content key ID is in the PlayReady header.
         */
        export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader";
        }

        /**
         * Specifies that the content key ID is specified in the PlayReady configuration.
         */
        export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse {
            /**
             * The content key ID.
             */
            keyId: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier";
        }

        /**
         * Configures the Explicit Analog Television Output Restriction control bits. For further details see the PlayReady Compliance Rules.
         */
        export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionResponse {
            /**
             * Indicates whether this restriction is enforced on a Best Effort basis.
             */
            bestEffort: boolean;
            /**
             * Configures the restriction control bits. Must be between 0 and 3 inclusive.
             */
            configurationData: number;
        }

        /**
         * The PlayReady license
         */
        export interface ContentKeyPolicyPlayReadyLicenseResponse {
            /**
             * A flag indicating whether test devices can use the license.
             */
            allowTestDevices: boolean;
            /**
             * The begin date of license
             */
            beginDate?: string;
            /**
             * The content key location.
             */
            contentKeyLocation: v20230101.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeaderResponse | v20230101.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse;
            /**
             * The PlayReady content type.
             */
            contentType: string;
            /**
             * The expiration date of license.
             */
            expirationDate?: string;
            /**
             * The grace period of license.
             */
            gracePeriod?: string;
            /**
             * The license type.
             */
            licenseType: string;
            /**
             * The license PlayRight
             */
            playRight?: v20230101.ContentKeyPolicyPlayReadyPlayRightResponse;
            /**
             * The relative begin date of license.
             */
            relativeBeginDate?: string;
            /**
             * The relative expiration date of license.
             */
            relativeExpirationDate?: string;
            /**
             * The security level.
             */
            securityLevel?: string;
        }

        /**
         * Configures the Play Right in the PlayReady license.
         */
        export interface ContentKeyPolicyPlayReadyPlayRightResponse {
            /**
             * Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive.
             */
            agcAndColorStripeRestriction?: number;
            /**
             * Configures Unknown output handling settings of the license.
             */
            allowPassingVideoContentToUnknownOutput: string;
            /**
             * Specifies the output protection level for compressed digital audio.
             */
            analogVideoOpl?: number;
            /**
             * Specifies the output protection level for compressed digital audio.
             */
            compressedDigitalAudioOpl?: number;
            /**
             * Specifies the output protection level for compressed digital video.
             */
            compressedDigitalVideoOpl?: number;
            /**
             * Enables the Image Constraint For Analog Component Video Restriction in the license.
             */
            digitalVideoOnlyContentRestriction: boolean;
            /**
             * Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive.
             */
            explicitAnalogTelevisionOutputRestriction?: v20230101.ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestrictionResponse;
            /**
             * The amount of time that the license is valid after the license is first used to play content.
             */
            firstPlayExpiration?: string;
            /**
             * Enables the Image Constraint For Analog Component Video Restriction in the license.
             */
            imageConstraintForAnalogComponentVideoRestriction: boolean;
            /**
             * Enables the Image Constraint For Analog Component Video Restriction in the license.
             */
            imageConstraintForAnalogComputerMonitorRestriction: boolean;
            /**
             * Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
             */
            scmsRestriction?: number;
            /**
             * Specifies the output protection level for uncompressed digital audio.
             */
            uncompressedDigitalAudioOpl?: number;
            /**
             * Specifies the output protection level for uncompressed digital video.
             */
            uncompressedDigitalVideoOpl?: number;
        }

        /**
         * Specifies a RSA key for token validation
         */
        export interface ContentKeyPolicyRsaTokenKeyResponse {
            /**
             * The RSA Parameter exponent
             */
            exponent: string;
            /**
             * The RSA Parameter modulus
             */
            modulus: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyRsaTokenKey'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyRsaTokenKey";
        }

        /**
         * Specifies a symmetric key for token validation.
         */
        export interface ContentKeyPolicySymmetricTokenKeyResponse {
            /**
             * The key value of the key
             */
            keyValue: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicySymmetricTokenKey";
        }

        /**
         * Represents a token claim.
         */
        export interface ContentKeyPolicyTokenClaimResponse {
            /**
             * Token claim type.
             */
            claimType?: string;
            /**
             * Token claim value.
             */
            claimValue?: string;
        }

        /**
         * Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
         */
        export interface ContentKeyPolicyTokenRestrictionResponse {
            /**
             * A list of alternative verification keys.
             */
            alternateVerificationKeys?: (v20230101.ContentKeyPolicyRsaTokenKeyResponse | v20230101.ContentKeyPolicySymmetricTokenKeyResponse | v20230101.ContentKeyPolicyX509CertificateTokenKeyResponse)[];
            /**
             * The audience for the token.
             */
            audience: string;
            /**
             * The token issuer.
             */
            issuer: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyTokenRestriction'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyTokenRestriction";
            /**
             * The OpenID connect discovery document.
             */
            openIdConnectDiscoveryDocument?: string;
            /**
             * The primary verification key.
             */
            primaryVerificationKey: v20230101.ContentKeyPolicyRsaTokenKeyResponse | v20230101.ContentKeyPolicySymmetricTokenKeyResponse | v20230101.ContentKeyPolicyX509CertificateTokenKeyResponse;
            /**
             * A list of required token claims.
             */
            requiredClaims?: v20230101.ContentKeyPolicyTokenClaimResponse[];
            /**
             * The type of token.
             */
            restrictionTokenType: string;
        }

        /**
         * Represents a ContentKeyPolicyConfiguration that is unavailable in the current API version.
         */
        export interface ContentKeyPolicyUnknownConfigurationResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyUnknownConfiguration";
        }

        /**
         * Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.
         */
        export interface ContentKeyPolicyUnknownRestrictionResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownRestriction'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyUnknownRestriction";
        }

        /**
         * Specifies a configuration for Widevine licenses.
         */
        export interface ContentKeyPolicyWidevineConfigurationResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyWidevineConfiguration";
            /**
             * The Widevine template.
             */
            widevineTemplate: string;
        }

        /**
         * Specifies a certificate for token validation.
         */
        export interface ContentKeyPolicyX509CertificateTokenKeyResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey'.
             */
            odataType: "#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey";
            /**
             * The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET)
             */
            rawBody: string;
        }

        /**
         * The DASH setting for a track.
         */
        export interface DashSettingsResponse {
            /**
             * The role for the DASH setting.
             */
            role?: string;
        }

        /**
         * Class to specify properties of default content key for each encryption scheme
         */
        export interface DefaultKeyResponse {
            /**
             * Label can be used to specify Content Key when creating a Streaming Locator
             */
            label?: string;
            /**
             * Policy used by Default Key
             */
            policyName?: string;
        }

        export interface EdgeUsageDataCollectionPolicyResponse {
            /**
             * Usage data collection frequency in ISO 8601 duration format e.g. PT10M , PT5H.
             */
            dataCollectionFrequency?: string;
            /**
             * Usage data reporting frequency in ISO 8601 duration format e.g. PT10M , PT5H.
             */
            dataReportingFrequency?: string;
            /**
             * Details of Event Hub where the usage will be reported.
             */
            eventHubDetails?: v20230101.EdgeUsageDataEventHubResponse;
            /**
             * Maximum time for which the functionality of the device will not be hampered for not reporting the usage data.
             */
            maxAllowedUnreportedUsageDuration?: string;
        }

        export interface EdgeUsageDataEventHubResponse {
            /**
             * Name of the Event Hub where usage will be reported.
             */
            name?: string;
            /**
             * Namespace of the Event Hub where usage will be reported.
             */
            namespace?: string;
            /**
             * SAS token needed to interact with Event Hub.
             */
            token?: string;
        }

        /**
         * Class to specify which protocols are enabled
         */
        export interface EnabledProtocolsResponse {
            /**
             * Enable DASH protocol or not
             */
            dash: boolean;
            /**
             * Enable Download protocol or not
             */
            download: boolean;
            /**
             * Enable HLS protocol or not
             */
            hls: boolean;
            /**
             * Enable SmoothStreaming protocol or not
             */
            smoothStreaming: boolean;
        }

        /**
         * Class for EnvelopeEncryption encryption scheme
         */
        export interface EnvelopeEncryptionResponse {
            /**
             * Representing which tracks should not be encrypted
             */
            clearTracks?: v20230101.TrackSelectionResponse[];
            /**
             * Representing default content key for each encryption scheme and separate content keys for specific tracks
             */
            contentKeys?: v20230101.StreamingPolicyContentKeysResponse;
            /**
             * Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
             */
            customKeyAcquisitionUrlTemplate?: string;
            /**
             * Representing supported protocols
             */
            enabledProtocols?: v20230101.EnabledProtocolsResponse;
        }

        /**
         * The class to specify one track property condition.
         */
        export interface FilterTrackPropertyConditionResponse {
            /**
             * The track property condition operation.
             */
            operation: string;
            /**
             * The track property type.
             */
            property: string;
            /**
             * The track property value.
             */
            value: string;
        }

        /**
         * Representing a list of FilterTrackPropertyConditions to select a track.  The filters are combined using a logical AND operation.
         */
        export interface FilterTrackSelectionResponse {
            /**
             * The track selections.
             */
            trackSelections: v20230101.FilterTrackPropertyConditionResponse[];
        }

        /**
         * Filter First Quality
         */
        export interface FirstQualityResponse {
            /**
             * The first quality bitrate.
             */
            bitrate: number;
        }

        /**
         * The HLS setting for a track.
         */
        export interface HlsSettingsResponse {
            /**
             * The characteristics for the HLS setting.
             */
            characteristics?: string;
            /**
             * The default for the HLS setting.
             */
            default?: boolean;
            /**
             * The forced for the HLS setting.
             */
            forced?: boolean;
        }

        export interface KeyDeliveryResponse {
            /**
             * The access control properties for Key Delivery.
             */
            accessControl?: v20230101.AccessControlResponse;
        }

        export interface KeyVaultPropertiesResponse {
            /**
             * The current key used to encrypt the Media Services account, including the key version.
             */
            currentKeyIdentifier: string;
            /**
             * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
             */
            keyIdentifier?: string;
        }

        export interface MediaServiceIdentityResponse {
            /**
             * The Principal ID of the identity.
             */
            principalId: string;
            /**
             * The Tenant ID of the identity.
             */
            tenantId: string;
            /**
             * The identity type.
             */
            type: string;
            /**
             * The user assigned managed identities.
             */
            userAssignedIdentities?: {[key: string]: v20230101.UserAssignedManagedIdentityResponse};
        }

        /**
         * Class for NoEncryption scheme
         */
        export interface NoEncryptionResponse {
            /**
             * Representing supported protocols
             */
            enabledProtocols?: v20230101.EnabledProtocolsResponse;
        }

        /**
         * The presentation time range, this is asset related and not recommended for Account Filter.
         */
        export interface PresentationTimeRangeResponse {
            /**
             * The absolute end time boundary.
             */
            endTimestamp?: number;
            /**
             * The indicator of forcing existing of end time stamp.
             */
            forceEndTimestamp?: boolean;
            /**
             * The relative to end right edge.
             */
            liveBackoffDuration?: number;
            /**
             * The relative to end sliding window.
             */
            presentationWindowDuration?: number;
            /**
             * The absolute start time boundary.
             */
            startTimestamp?: number;
            /**
             * The time scale of time stamps.
             */
            timescale?: number;
        }

        /**
         * The Private Endpoint Connection resource.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20230101.PrivateEndpointResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20230101.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * The Private Endpoint resource.
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint
             */
            id: string;
        }

        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        export interface ResourceIdentityResponse {
            /**
             * Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.
             */
            useSystemAssignedIdentity: boolean;
            /**
             * The user assigned managed identity's ARM ID to use when accessing a resource.
             */
            userAssignedIdentity?: string;
        }

        /**
         * The storage account details.
         */
        export interface StorageAccountResponse {
            /**
             * The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
             */
            id?: string;
            /**
             * The storage account identity.
             */
            identity?: v20230101.ResourceIdentityResponse;
            /**
             * The current status of the storage account mapping.
             */
            status: string;
            /**
             * The type of the storage account.
             */
            type: string;
        }

        /**
         * Class for content key in Streaming Locator
         */
        export interface StreamingLocatorContentKeyResponse {
            /**
             * ID of Content Key
             */
            id: string;
            /**
             * Label of Content Key as specified in the Streaming Policy
             */
            labelReferenceInStreamingPolicy?: string;
            /**
             * ContentKeyPolicy used by Content Key
             */
            policyName: string;
            /**
             * Tracks which use this Content Key
             */
            tracks: v20230101.TrackSelectionResponse[];
            /**
             * Encryption type of Content Key
             */
            type: string;
            /**
             * Value of Content Key
             */
            value?: string;
        }

        /**
         * Class of paths for streaming
         */
        export interface StreamingPathResponse {
            /**
             * Encryption scheme
             */
            encryptionScheme: string;
            /**
             * Streaming paths for each protocol and encryptionScheme pair
             */
            paths?: string[];
            /**
             * Streaming protocol
             */
            streamingProtocol: string;
        }

        /**
         * Class to specify properties of content key
         */
        export interface StreamingPolicyContentKeyResponse {
            /**
             * Label can be used to specify Content Key when creating a Streaming Locator
             */
            label?: string;
            /**
             * Policy used by Content Key
             */
            policyName?: string;
            /**
             * Tracks which use this content key
             */
            tracks?: v20230101.TrackSelectionResponse[];
        }

        /**
         * Class to specify properties of all content keys in Streaming Policy
         */
        export interface StreamingPolicyContentKeysResponse {
            /**
             * Default content key for an encryption scheme
             */
            defaultKey?: v20230101.DefaultKeyResponse;
            /**
             * Representing tracks needs separate content key
             */
            keyToTrackMappings?: v20230101.StreamingPolicyContentKeyResponse[];
        }

        /**
         * Class to specify configurations of FairPlay in Streaming Policy
         */
        export interface StreamingPolicyFairPlayConfigurationResponse {
            /**
             * All license to be persistent or not
             */
            allowPersistentLicense: boolean;
            /**
             * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
             */
            customLicenseAcquisitionUrlTemplate?: string;
        }

        /**
         * Class to specify configurations of PlayReady in Streaming Policy
         */
        export interface StreamingPolicyPlayReadyConfigurationResponse {
            /**
             * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
             */
            customLicenseAcquisitionUrlTemplate?: string;
            /**
             * Custom attributes for PlayReady
             */
            playReadyCustomAttributes?: string;
        }

        /**
         * Class to specify configurations of Widevine in Streaming Policy
         */
        export interface StreamingPolicyWidevineConfigurationResponse {
            /**
             * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
             */
            customLicenseAcquisitionUrlTemplate?: string;
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
         * Represents a text track in an asset. A text track is usually used for sparse data related to the audio or video tracks.
         */
        export interface TextTrackResponse {
            /**
             * The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA.
             */
            displayName?: string;
            /**
             * The file name to the source file. This file is located in the storage container of the asset.
             */
            fileName?: string;
            /**
             * The HLS specific setting for the text track.
             */
            hlsSettings?: v20230101.HlsSettingsResponse;
            /**
             * The RFC5646 language code for the text track.
             */
            languageCode: string;
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.TextTrack'.
             */
            odataType: "#Microsoft.Media.TextTrack";
            /**
             * When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible".
             */
            playerVisibility?: string;
        }

        /**
         * Class to specify one track property condition
         */
        export interface TrackPropertyConditionResponse {
            /**
             * Track property condition operation
             */
            operation: string;
            /**
             * Track property type
             */
            property: string;
            /**
             * Track property value
             */
            value?: string;
        }

        /**
         * Class to select a track
         */
        export interface TrackSelectionResponse {
            /**
             * TrackSelections is a track property condition list which can specify track(s)
             */
            trackSelections?: v20230101.TrackPropertyConditionResponse[];
        }

        export interface UserAssignedManagedIdentityResponse {
            /**
             * The client ID.
             */
            clientId: string;
            /**
             * The principal ID.
             */
            principalId: string;
        }

        /**
         * Represents a video track in the asset.
         */
        export interface VideoTrackResponse {
            /**
             * The discriminator for derived types.
             * Expected value is '#Microsoft.Media.VideoTrack'.
             */
            odataType: "#Microsoft.Media.VideoTrack";
        }

    }
}
