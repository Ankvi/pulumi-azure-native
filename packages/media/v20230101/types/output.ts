import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Class for NoEncryption scheme
     */
    export interface NoEncryptionResponse {
        /**
         * Representing supported protocols
         */
        enabledProtocols?: EnabledProtocolsResponse;
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
