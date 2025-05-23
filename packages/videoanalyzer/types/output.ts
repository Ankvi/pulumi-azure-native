import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines how the Video Analyzer account is (optionally) encrypted.
 */
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
 * A custom preset for encoding audio with the AAC codec.
 */
export interface AudioEncoderAacResponse {
    /**
     * Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used.
     */
    bitrateKbps?: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.AudioEncoderAac'.
     */
    type: "#Microsoft.VideoAnalyzer.AudioEncoderAac";
}

/**
 * Required validation properties for tokens generated with Elliptical Curve algorithm.
 */
export interface EccTokenKeyResponse {
    /**
     * Elliptical curve algorithm to be used: ES256, ES384 or ES512.
     */
    alg: string;
    /**
     * JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
     */
    kid: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EccTokenKey'.
     */
    type: "#Microsoft.VideoAnalyzer.EccTokenKey";
    /**
     * X coordinate.
     */
    x: string;
    /**
     * Y coordinate.
     */
    y: string;
}

/**
 * Describes a custom preset for encoding the input content using the encoder processor.
 */
export interface EncoderCustomPresetResponse {
    /**
     * Describes a custom preset for encoding audio.
     */
    audioEncoder?: AudioEncoderAacResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderCustomPreset'.
     */
    type: "#Microsoft.VideoAnalyzer.EncoderCustomPreset";
    /**
     * Describes a custom preset for encoding video.
     */
    videoEncoder?: VideoEncoderH264Response;
}

/**
 * Encoder processor allows for encoding of the input content. For example, it can used to change the resolution from 4K to 1280x720.
 */
export interface EncoderProcessorResponse {
    /**
     * An array of upstream node references within the topology to be used as inputs for this node.
     */
    inputs: NodeInputResponse[];
    /**
     * Node name. Must be unique within the topology.
     */
    name: string;
    /**
     * The encoder preset, which defines the recipe or instructions on how the input content should be processed.
     */
    preset: EncoderCustomPresetResponse | EncoderSystemPresetResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderProcessor'.
     */
    type: "#Microsoft.VideoAnalyzer.EncoderProcessor";
}

/**
 * Describes a built-in preset for encoding the input content using the encoder processor.
 */
export interface EncoderSystemPresetResponse {
    /**
     * Name of the built-in encoding preset.
     */
    name: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderSystemPreset'.
     */
    type: "#Microsoft.VideoAnalyzer.EncoderSystemPreset";
}

/**
 * The endpoint details.
 */
export interface EndpointResponse {
    /**
     * The URL of the endpoint.
     */
    endpointUrl?: string;
    /**
     * The type of the endpoint.
     */
    type: string;
}

/**
 * Group level network access control.
 */
export interface GroupLevelAccessControlResponse {
    /**
     * Whether or not public network access is allowed for specified resources under the Video Analyzer account.
     */
    publicNetworkAccess?: string;
}

/**
 * The IoT Hub details.
 */
export interface IotHubResponse {
    /**
     * The IoT Hub resource identifier.
     */
    id: string;
    /**
     * The IoT Hub identity.
     */
    identity: ResourceIdentityResponse;
    /**
     * The current status of the Iot Hub mapping.
     */
    status: string;
}

/**
 * Properties for access validation based on JSON Web Tokens (JWT).
 */
export interface JwtAuthenticationResponse {
    /**
     * List of expected token audiences. Token audience is valid if it matches at least one of the given values.
     */
    audiences?: string[];
    /**
     * List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
     */
    claims?: TokenClaimResponse[];
    /**
     * List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
     */
    issuers?: string[];
    /**
     * List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.
     */
    keys?: (EccTokenKeyResponse | RsaTokenKeyResponse)[];
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.JwtAuthentication'.
     */
    type: "#Microsoft.VideoAnalyzer.JwtAuthentication";
}

/**
 * The details for accessing the encryption keys in Key Vault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * The current key used to encrypt Video Analyzer account, including the key version.
     */
    currentKeyIdentifier: string;
    /**
     * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
     */
    keyIdentifier: string;
}

/**
 * Network access control for video analyzer account.
 */
export interface NetworkAccessControlResponse {
    /**
     * Public network access for consumption group.
     */
    consumption?: GroupLevelAccessControlResponse;
    /**
     * Public network access for ingestion group.
     */
    ingestion?: GroupLevelAccessControlResponse;
    /**
     * Public network access for integration group.
     */
    integration?: GroupLevelAccessControlResponse;
}

/**
 * Describes an input signal to be used on a pipeline node.
 */
export interface NodeInputResponse {
    /**
     * The name of the upstream node in the pipeline which output is used as input of the current node.
     */
    nodeName: string;
}

/**
 * Single topology parameter declaration. Declared parameters can and must be referenced throughout the topology and can optionally have default values to be used when they are not defined in the pipelines.
 */
export interface ParameterDeclarationResponse {
    /**
     * The default value for the parameter to be used if the pipeline does not specify a value.
     */
    default?: string;
    /**
     * Description of the parameter.
     */
    description?: string;
    /**
     * Name of the parameter.
     */
    name: string;
    /**
     * Type of the parameter.
     */
    type: string;
}

/**
 * Defines the parameter value of an specific pipeline topology parameter. See pipeline topology parameters for more information.
 */
export interface ParameterDefinitionResponse {
    /**
     * Name of the parameter declared in the pipeline topology.
     */
    name: string;
    /**
     * Parameter value to be applied on this specific pipeline.
     */
    value?: string;
}

/**
 * A list of PEM formatted certificates.
 */
export interface PemCertificateListResponse {
    /**
     * PEM formatted public certificates. One certificate per entry.
     */
    certificates: string[];
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.PemCertificateList'.
     */
    type: "#Microsoft.VideoAnalyzer.PemCertificateList";
}

/**
 * Details about the error for a failed pipeline job.
 */
export interface PipelineJobErrorResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error message.
     */
    message?: string;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
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
 * The user assigned managed identity to use when accessing a resource.
 */
export interface ResourceIdentityResponse {
    /**
     * The user assigned managed identity's resource identifier to use when accessing a resource.
     */
    userAssignedIdentity: string;
}

/**
 * Required validation properties for tokens generated with RSA algorithm.
 */
export interface RsaTokenKeyResponse {
    /**
     * RSA algorithm to be used: RS256, RS384 or RS512.
     */
    alg: string;
    /**
     * RSA public key exponent.
     */
    e: string;
    /**
     * JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
     */
    kid: string;
    /**
     * RSA public key modulus.
     */
    n: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.RsaTokenKey'.
     */
    type: "#Microsoft.VideoAnalyzer.RsaTokenKey";
}

/**
 * RTSP source allows for media from an RTSP camera or generic RTSP server to be ingested into a pipeline.
 */
export interface RtspSourceResponse {
    /**
     * RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers.
     */
    endpoint: TlsEndpointResponse | UnsecuredEndpointResponse;
    /**
     * Node name. Must be unique within the topology.
     */
    name: string;
    /**
     * Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages.
     */
    transport?: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.RtspSource'.
     */
    type: "#Microsoft.VideoAnalyzer.RtspSource";
}

/**
 * A remote tunnel securely established using IoT Hub device information.
 */
export interface SecureIotDeviceRemoteTunnelResponse {
    /**
     * The IoT device id to use when establishing the remote tunnel. This string is case-sensitive.
     */
    deviceId: string;
    /**
     * Name of the IoT Hub.
     */
    iotHubName: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel'.
     */
    type: "#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel";
}

/**
 * The SKU details.
 */
export interface SkuResponse {
    /**
     * The SKU name.
     */
    name: string;
    /**
     * The SKU tier.
     */
    tier: string;
}

/**
 * The details about the associated storage account.
 */
export interface StorageAccountResponse {
    /**
     * The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
     */
    id: string;
    /**
     * A managed identity that Video Analyzer will use to access the storage account.
     */
    identity?: ResourceIdentityResponse;
    /**
     * The current status of the storage account mapping.
     */
    status: string;
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
 * TLS endpoint describes an endpoint that the pipeline can connect to over TLS transport (data is encrypted in transit).
 */
export interface TlsEndpointResponse {
    /**
     * Credentials to be presented to the endpoint.
     */
    credentials: UsernamePasswordCredentialsResponse;
    /**
     * List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used.
     */
    trustedCertificates?: PemCertificateListResponse;
    /**
     * Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
     */
    tunnel?: SecureIotDeviceRemoteTunnelResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.TlsEndpoint'.
     */
    type: "#Microsoft.VideoAnalyzer.TlsEndpoint";
    /**
     * The endpoint URL for Video Analyzer to connect to.
     */
    url: string;
    /**
     * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
     */
    validationOptions?: TlsValidationOptionsResponse;
}

/**
 * Options for controlling the validation of TLS endpoints.
 */
export interface TlsValidationOptionsResponse {
    /**
     * When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'.
     */
    ignoreHostname?: string;
    /**
     * When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'.
     */
    ignoreSignature?: string;
}

/**
 * Properties for expected token claims.
 */
export interface TokenClaimResponse {
    /**
     * Name of the claim which must be present on the token.
     */
    name: string;
    /**
     * Expected value of the claim to be present on the token.
     */
    value: string;
}

/**
 * Unsecured endpoint describes an endpoint that the pipeline can connect to over clear transport (no encryption in transit).
 */
export interface UnsecuredEndpointResponse {
    /**
     * Credentials to be presented to the endpoint.
     */
    credentials: UsernamePasswordCredentialsResponse;
    /**
     * Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
     */
    tunnel?: SecureIotDeviceRemoteTunnelResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.UnsecuredEndpoint'.
     */
    type: "#Microsoft.VideoAnalyzer.UnsecuredEndpoint";
    /**
     * The endpoint URL for Video Analyzer to connect to.
     */
    url: string;
}

/**
 * The details of the user assigned managed identity used by the Video Analyzer resource.
 */
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
 * Username and password credentials.
 */
export interface UsernamePasswordCredentialsResponse {
    /**
     * Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests.
     */
    password: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials'.
     */
    type: "#Microsoft.VideoAnalyzer.UsernamePasswordCredentials";
    /**
     * Username to be presented as part of the credentials.
     */
    username: string;
}

/**
 * The managed identity for the Video Analyzer resource.
 */
export interface VideoAnalyzerIdentityResponse {
    /**
     * The identity type.
     */
    type: string;
    /**
     * The User Assigned Managed Identities.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedManagedIdentityResponse};
}

/**
 * Video archival properties.
 */
export interface VideoArchivalResponse {
    /**
     * Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours.
     */
    retentionPeriod?: string;
}

/**
 * Set of URLs to the video content.
 */
export interface VideoContentUrlsResponse {
    /**
     * Video archive streaming base URL. The archived content can be automatically played by the Azure Video Analyzer player widget. Alternatively, this URL can be used in conjunction with the video content authorization token on any compatible DASH or HLS players by appending the following to the base URL:
     * 
     *     - HLSv4:     /manifest(format=m3u8-aapl).m3u8
     *     - HLS CMAF:  /manifest(format=m3u8-cmaf)
     *     - DASH CMAF: /manifest(format=mpd-time-cmaf)
     * 
     *     Moreover, an ongoing video recording can be played in "live mode" with latencies which are approximately double of the chosen video segment length. It is available when the video type is 'archive' and video archiving is enabled.
     */
    archiveBaseUrl?: string;
    /**
     * Video file download URL. This URL can be used in conjunction with the video content authorization token to download the video MP4 file. The resulting MP4 file can be played on any standard media player. It is available when the video type is 'file' and video file is available for consumption.
     */
    downloadUrl?: string;
    /**
     * Video preview image URLs. These URLs can be used in conjunction with the video content authorization token to download the most recent still image from the video archive in different resolutions. They are available when the video type is 'archive' and preview images are enabled.
     */
    previewImageUrls?: VideoPreviewImageUrlsResponse;
    /**
     * Video low-latency streaming URL. The live content can be automatically played by the Azure Video Analyzer player widget. Alternatively, this URL can be used in conjunction with the video content authorization token to expose a WebSocket tunneled RTSP stream. It is available when the video type is 'archive' and a live, low-latency feed is available from the source.
     */
    rtspTunnelUrl?: string;
}

/**
 * Optional properties to be used in case a new video resource needs to be created on the service. These will not take effect if the video already exists.
 */
export interface VideoCreationPropertiesResponse {
    /**
     * Optional description provided by the user. Value can be up to 2048 characters long.
     */
    description?: string;
    /**
     * Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live".
     */
    retentionPeriod?: string;
    /**
     * Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live".
     */
    segmentLength?: string;
    /**
     * Optional title provided by the user. Value can be up to 256 characters long.
     */
    title?: string;
}

/**
 * A custom preset for encoding video with the H.264 (AVC) codec.
 */
export interface VideoEncoderH264Response {
    /**
     * The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video.
     */
    bitrateKbps?: string;
    /**
     * The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video.
     */
    frameRate?: string;
    /**
     * Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video.
     */
    scale?: VideoScaleResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoEncoderH264'.
     */
    type: "#Microsoft.VideoAnalyzer.VideoEncoderH264";
}

/**
 * Video flags contain information about the available video actions and its dynamic properties based on the current video state.
 */
export interface VideoFlagsResponse {
    /**
     * Value indicating whether or not the video can be streamed. Only "archive" type videos can be streamed.
     */
    canStream: boolean;
    /**
     * Value indicating whether or not there has ever been data recorded or uploaded into the video. Newly created videos have this value set to false.
     */
    hasData: boolean;
    /**
     * Value indicating whether or not the video is currently being referenced be an active pipeline. The fact that is being referenced, doesn't necessarily indicate that data is being received. For example, video recording may be gated on events or camera may not be accessible at the time.
     */
    isInUse: boolean;
}

/**
 * Contains information about the video and audio content.
 */
export interface VideoMediaInfoResponse {
    /**
     * Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.
     */
    segmentLength?: string;
}

/**
 * Video preview image URLs. These URLs can be used in conjunction with the video content authorization token to download the most recent still image from the video archive in different resolutions. They are available when the video type is 'archive' and preview images are enabled.
 */
export interface VideoPreviewImageUrlsResponse {
    /**
     * High resolution preview image URL.
     */
    large?: string;
    /**
     * Medium resolution preview image URL.
     */
    medium?: string;
    /**
     * Low resolution preview image URL.
     */
    small?: string;
}

/**
 * Optional flags used to change how video is published. These are only allowed for topologies where "kind" is set to "live".
 */
export interface VideoPublishingOptionsResponse {
    /**
     * When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'.
     */
    disableArchive?: string;
    /**
     * When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'.
     */
    disableRtspPublishing?: string;
}

/**
 * The video scaling information.
 */
export interface VideoScaleResponse {
    /**
     * The desired output video height.
     */
    height?: string;
    /**
     * Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided.
     */
    mode?: string;
    /**
     * The desired output video width.
     */
    width?: string;
}

/**
 * A sequence of absolute datetime ranges as a string. The datetime values should follow IS08601, and the sum of the ranges should add up to 24 hours or less. Currently, there can be only one range specified in the sequence.
 */
export interface VideoSequenceAbsoluteTimeMarkersResponse {
    /**
     * The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'.
     */
    ranges: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers'.
     */
    type: "#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers";
}

/**
 * Video sink in a live topology allows for video and audio to be captured, optionally archived, and published via a video resource. If archiving is enabled, this results in a video of type 'archive'. If used in a batch topology, this allows for video and audio to be stored as a file, and published via a video resource of type 'file'
 */
export interface VideoSinkResponse {
    /**
     * An array of upstream node references within the topology to be used as inputs for this node.
     */
    inputs: NodeInputResponse[];
    /**
     * Node name. Must be unique within the topology.
     */
    name: string;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSink'.
     */
    type: "#Microsoft.VideoAnalyzer.VideoSink";
    /**
     * Optional video properties to be used in case a new video resource needs to be created on the service.
     */
    videoCreationProperties?: VideoCreationPropertiesResponse;
    /**
     * Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived.
     */
    videoName: string;
    /**
     * Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live".
     */
    videoPublishingOptions?: VideoPublishingOptionsResponse;
}

/**
 * Video source allows for content from a Video Analyzer video resource to be ingested into a pipeline. Currently supported only with batch pipelines.
 */
export interface VideoSourceResponse {
    /**
     * Node name. Must be unique within the topology.
     */
    name: string;
    /**
     * Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges.
     */
    timeSequences: VideoSequenceAbsoluteTimeMarkersResponse;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSource'.
     */
    type: "#Microsoft.VideoAnalyzer.VideoSource";
    /**
     * Name of the Video Analyzer video resource to be used as the source.
     */
    videoName: string;
}
