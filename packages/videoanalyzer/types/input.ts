import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines how the Video Analyzer account is (optionally) encrypted.
 */
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
 * A custom preset for encoding audio with the AAC codec.
 */
export interface AudioEncoderAacArgs {
    /**
     * Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used.
     */
    bitrateKbps?: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.AudioEncoderAac'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.AudioEncoderAac">;
}

/**
 * Required validation properties for tokens generated with Elliptical Curve algorithm.
 */
export interface EccTokenKeyArgs {
    /**
     * Elliptical curve algorithm to be used: ES256, ES384 or ES512.
     */
    alg: pulumi.Input<string | enums.AccessPolicyEccAlgo>;
    /**
     * JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
     */
    kid: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EccTokenKey'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.EccTokenKey">;
    /**
     * X coordinate.
     */
    x: pulumi.Input<string>;
    /**
     * Y coordinate.
     */
    y: pulumi.Input<string>;
}

/**
 * Describes a custom preset for encoding the input content using the encoder processor.
 */
export interface EncoderCustomPresetArgs {
    /**
     * Describes a custom preset for encoding audio.
     */
    audioEncoder?: pulumi.Input<AudioEncoderAacArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderCustomPreset'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.EncoderCustomPreset">;
    /**
     * Describes a custom preset for encoding video.
     */
    videoEncoder?: pulumi.Input<VideoEncoderH264Args>;
}

/**
 * Encoder processor allows for encoding of the input content. For example, it can used to change the resolution from 4K to 1280x720.
 */
export interface EncoderProcessorArgs {
    /**
     * An array of upstream node references within the topology to be used as inputs for this node.
     */
    inputs: pulumi.Input<pulumi.Input<NodeInputArgs>[]>;
    /**
     * Node name. Must be unique within the topology.
     */
    name: pulumi.Input<string>;
    /**
     * The encoder preset, which defines the recipe or instructions on how the input content should be processed.
     */
    preset: pulumi.Input<EncoderCustomPresetArgs | EncoderSystemPresetArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderProcessor'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.EncoderProcessor">;
}

/**
 * Describes a built-in preset for encoding the input content using the encoder processor.
 */
export interface EncoderSystemPresetArgs {
    /**
     * Name of the built-in encoding preset.
     */
    name: pulumi.Input<string | enums.EncoderSystemPresetType>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.EncoderSystemPreset'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.EncoderSystemPreset">;
}

/**
 * Group level network access control.
 */
export interface GroupLevelAccessControlArgs {
    /**
     * Whether or not public network access is allowed for specified resources under the Video Analyzer account.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
}

/**
 * The IoT Hub details.
 */
export interface IotHubArgs {
    /**
     * The IoT Hub resource identifier.
     */
    id: pulumi.Input<string>;
    /**
     * The IoT Hub identity.
     */
    identity: pulumi.Input<ResourceIdentityArgs>;
}

/**
 * Properties for access validation based on JSON Web Tokens (JWT).
 */
export interface JwtAuthenticationArgs {
    /**
     * List of expected token audiences. Token audience is valid if it matches at least one of the given values.
     */
    audiences?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid.
     */
    claims?: pulumi.Input<pulumi.Input<TokenClaimArgs>[]>;
    /**
     * List of expected token issuers. Token issuer is valid if it matches at least one of the given values.
     */
    issuers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key.
     */
    keys?: pulumi.Input<pulumi.Input<EccTokenKeyArgs | RsaTokenKeyArgs>[]>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.JwtAuthentication'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.JwtAuthentication">;
}

/**
 * The details for accessing the encryption keys in Key Vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).
     */
    keyIdentifier: pulumi.Input<string>;
}

/**
 * Network access control for video analyzer account.
 */
export interface NetworkAccessControlArgs {
    /**
     * Public network access for consumption group.
     */
    consumption?: pulumi.Input<GroupLevelAccessControlArgs>;
    /**
     * Public network access for ingestion group.
     */
    ingestion?: pulumi.Input<GroupLevelAccessControlArgs>;
    /**
     * Public network access for integration group.
     */
    integration?: pulumi.Input<GroupLevelAccessControlArgs>;
}

/**
 * Describes an input signal to be used on a pipeline node.
 */
export interface NodeInputArgs {
    /**
     * The name of the upstream node in the pipeline which output is used as input of the current node.
     */
    nodeName: pulumi.Input<string>;
}

/**
 * Single topology parameter declaration. Declared parameters can and must be referenced throughout the topology and can optionally have default values to be used when they are not defined in the pipelines.
 */
export interface ParameterDeclarationArgs {
    /**
     * The default value for the parameter to be used if the pipeline does not specify a value.
     */
    default?: pulumi.Input<string>;
    /**
     * Description of the parameter.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the parameter.
     */
    name: pulumi.Input<string>;
    /**
     * Type of the parameter.
     */
    type: pulumi.Input<string | enums.ParameterType>;
}

/**
 * Defines the parameter value of an specific pipeline topology parameter. See pipeline topology parameters for more information.
 */
export interface ParameterDefinitionArgs {
    /**
     * Name of the parameter declared in the pipeline topology.
     */
    name: pulumi.Input<string>;
    /**
     * Parameter value to be applied on this specific pipeline.
     */
    value?: pulumi.Input<string>;
}

/**
 * A list of PEM formatted certificates.
 */
export interface PemCertificateListArgs {
    /**
     * PEM formatted public certificates. One certificate per entry.
     */
    certificates: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.PemCertificateList'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.PemCertificateList">;
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

/**
 * The user assigned managed identity to use when accessing a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The user assigned managed identity's resource identifier to use when accessing a resource.
     */
    userAssignedIdentity: pulumi.Input<string>;
}

/**
 * Required validation properties for tokens generated with RSA algorithm.
 */
export interface RsaTokenKeyArgs {
    /**
     * RSA algorithm to be used: RS256, RS384 or RS512.
     */
    alg: pulumi.Input<string | enums.AccessPolicyRsaAlgo>;
    /**
     * RSA public key exponent.
     */
    e: pulumi.Input<string>;
    /**
     * JWT token key id. Validation keys are looked up based on the key id present on the JWT token header.
     */
    kid: pulumi.Input<string>;
    /**
     * RSA public key modulus.
     */
    n: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.RsaTokenKey'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.RsaTokenKey">;
}

/**
 * RTSP source allows for media from an RTSP camera or generic RTSP server to be ingested into a pipeline.
 */
export interface RtspSourceArgs {
    /**
     * RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers.
     */
    endpoint: pulumi.Input<TlsEndpointArgs | UnsecuredEndpointArgs>;
    /**
     * Node name. Must be unique within the topology.
     */
    name: pulumi.Input<string>;
    /**
     * Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages.
     */
    transport?: pulumi.Input<string | enums.RtspTransport>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.RtspSource'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.RtspSource">;
}

/**
 * A remote tunnel securely established using IoT Hub device information.
 */
export interface SecureIotDeviceRemoteTunnelArgs {
    /**
     * The IoT device id to use when establishing the remote tunnel. This string is case-sensitive.
     */
    deviceId: pulumi.Input<string>;
    /**
     * Name of the IoT Hub.
     */
    iotHubName: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel">;
}

/**
 * The SKU details.
 */
export interface SkuArgs {
    /**
     * The SKU name.
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * The details about the associated storage account.
 */
export interface StorageAccountArgs {
    /**
     * The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage).
     */
    id: pulumi.Input<string>;
    /**
     * A managed identity that Video Analyzer will use to access the storage account.
     */
    identity?: pulumi.Input<ResourceIdentityArgs>;
}

/**
 * TLS endpoint describes an endpoint that the pipeline can connect to over TLS transport (data is encrypted in transit).
 */
export interface TlsEndpointArgs {
    /**
     * Credentials to be presented to the endpoint.
     */
    credentials: pulumi.Input<UsernamePasswordCredentialsArgs>;
    /**
     * List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used.
     */
    trustedCertificates?: pulumi.Input<PemCertificateListArgs>;
    /**
     * Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
     */
    tunnel?: pulumi.Input<SecureIotDeviceRemoteTunnelArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.TlsEndpoint'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.TlsEndpoint">;
    /**
     * The endpoint URL for Video Analyzer to connect to.
     */
    url: pulumi.Input<string>;
    /**
     * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
     */
    validationOptions?: pulumi.Input<TlsValidationOptionsArgs>;
}

/**
 * Options for controlling the validation of TLS endpoints.
 */
export interface TlsValidationOptionsArgs {
    /**
     * When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'.
     */
    ignoreHostname?: pulumi.Input<string>;
    /**
     * When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'.
     */
    ignoreSignature?: pulumi.Input<string>;
}

/**
 * Properties for expected token claims.
 */
export interface TokenClaimArgs {
    /**
     * Name of the claim which must be present on the token.
     */
    name: pulumi.Input<string>;
    /**
     * Expected value of the claim to be present on the token.
     */
    value: pulumi.Input<string>;
}

/**
 * Unsecured endpoint describes an endpoint that the pipeline can connect to over clear transport (no encryption in transit).
 */
export interface UnsecuredEndpointArgs {
    /**
     * Credentials to be presented to the endpoint.
     */
    credentials: pulumi.Input<UsernamePasswordCredentialsArgs>;
    /**
     * Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
     */
    tunnel?: pulumi.Input<SecureIotDeviceRemoteTunnelArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.UnsecuredEndpoint'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.UnsecuredEndpoint">;
    /**
     * The endpoint URL for Video Analyzer to connect to.
     */
    url: pulumi.Input<string>;
}

/**
 * Username and password credentials.
 */
export interface UsernamePasswordCredentialsArgs {
    /**
     * Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests.
     */
    password: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.UsernamePasswordCredentials">;
    /**
     * Username to be presented as part of the credentials.
     */
    username: pulumi.Input<string>;
}

/**
 * The managed identity for the Video Analyzer resource.
 */
export interface VideoAnalyzerIdentityArgs {
    /**
     * The identity type.
     */
    type: pulumi.Input<string>;
    /**
     * The User Assigned Managed Identities.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Video archival properties.
 */
export interface VideoArchivalArgs {
    /**
     * Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours.
     */
    retentionPeriod?: pulumi.Input<string>;
}

/**
 * Optional properties to be used in case a new video resource needs to be created on the service. These will not take effect if the video already exists.
 */
export interface VideoCreationPropertiesArgs {
    /**
     * Optional description provided by the user. Value can be up to 2048 characters long.
     */
    description?: pulumi.Input<string>;
    /**
     * Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live".
     */
    retentionPeriod?: pulumi.Input<string>;
    /**
     * Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live".
     */
    segmentLength?: pulumi.Input<string>;
    /**
     * Optional title provided by the user. Value can be up to 256 characters long.
     */
    title?: pulumi.Input<string>;
}

/**
 * A custom preset for encoding video with the H.264 (AVC) codec.
 */
export interface VideoEncoderH264Args {
    /**
     * The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video.
     */
    bitrateKbps?: pulumi.Input<string>;
    /**
     * The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video.
     */
    frameRate?: pulumi.Input<string>;
    /**
     * Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video.
     */
    scale?: pulumi.Input<VideoScaleArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoEncoderH264'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.VideoEncoderH264">;
}

/**
 * Contains information about the video and audio content.
 */
export interface VideoMediaInfoArgs {
    /**
     * Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.
     */
    segmentLength?: pulumi.Input<string>;
}

/**
 * Optional flags used to change how video is published. These are only allowed for topologies where "kind" is set to "live".
 */
export interface VideoPublishingOptionsArgs {
    /**
     * When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'.
     */
    disableArchive?: pulumi.Input<string>;
    /**
     * When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'.
     */
    disableRtspPublishing?: pulumi.Input<string>;
}

/**
 * The video scaling information.
 */
export interface VideoScaleArgs {
    /**
     * The desired output video height.
     */
    height?: pulumi.Input<string>;
    /**
     * Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided.
     */
    mode?: pulumi.Input<string | enums.VideoScaleMode>;
    /**
     * The desired output video width.
     */
    width?: pulumi.Input<string>;
}

/**
 * A sequence of absolute datetime ranges as a string. The datetime values should follow IS08601, and the sum of the ranges should add up to 24 hours or less. Currently, there can be only one range specified in the sequence.
 */
export interface VideoSequenceAbsoluteTimeMarkersArgs {
    /**
     * The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'.
     */
    ranges: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers">;
}

/**
 * Video sink in a live topology allows for video and audio to be captured, optionally archived, and published via a video resource. If archiving is enabled, this results in a video of type 'archive'. If used in a batch topology, this allows for video and audio to be stored as a file, and published via a video resource of type 'file'
 */
export interface VideoSinkArgs {
    /**
     * An array of upstream node references within the topology to be used as inputs for this node.
     */
    inputs: pulumi.Input<pulumi.Input<NodeInputArgs>[]>;
    /**
     * Node name. Must be unique within the topology.
     */
    name: pulumi.Input<string>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSink'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.VideoSink">;
    /**
     * Optional video properties to be used in case a new video resource needs to be created on the service.
     */
    videoCreationProperties?: pulumi.Input<VideoCreationPropertiesArgs>;
    /**
     * Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived.
     */
    videoName: pulumi.Input<string>;
    /**
     * Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live".
     */
    videoPublishingOptions?: pulumi.Input<VideoPublishingOptionsArgs>;
}

/**
 * Video source allows for content from a Video Analyzer video resource to be ingested into a pipeline. Currently supported only with batch pipelines.
 */
export interface VideoSourceArgs {
    /**
     * Node name. Must be unique within the topology.
     */
    name: pulumi.Input<string>;
    /**
     * Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges.
     */
    timeSequences: pulumi.Input<VideoSequenceAbsoluteTimeMarkersArgs>;
    /**
     * The discriminator for derived types.
     * Expected value is '#Microsoft.VideoAnalyzer.VideoSource'.
     */
    type: pulumi.Input<"#Microsoft.VideoAnalyzer.VideoSource">;
    /**
     * Name of the Video Analyzer video resource to be used as the source.
     */
    videoName: pulumi.Input<string>;
}
