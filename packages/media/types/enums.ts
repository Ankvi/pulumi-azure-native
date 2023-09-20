export const AacAudioProfile = {
    /**
     * Specifies that the output audio is to be encoded into AAC Low Complexity profile (AAC-LC).
     */
    AacLc: "AacLc",
    /**
     * Specifies that the output audio is to be encoded into HE-AAC v1 profile.
     */
    HeAacV1: "HeAacV1",
    /**
     * Specifies that the output audio is to be encoded into HE-AAC v2 profile.
     */
    HeAacV2: "HeAacV2",
} as const;

export type AacAudioProfile = (typeof AacAudioProfile)[keyof typeof AacAudioProfile];

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

export const AnalysisResolution = {
    SourceResolution: "SourceResolution",
    StandardDefinition: "StandardDefinition",
} as const;

export type AnalysisResolution = (typeof AnalysisResolution)[keyof typeof AnalysisResolution];

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

export const AttributeFilter = {
    /**
     * All tracks will be included.
     */
    All: "All",
    /**
     * The first track will be included when the attribute is sorted in descending order.  Generally used to select the largest bitrate.
     */
    Top: "Top",
    /**
     * The first track will be included when the attribute is sorted in ascending order.  Generally used to select the smallest bitrate.
     */
    Bottom: "Bottom",
    /**
     * Any tracks that have an attribute equal to the value given will be included.
     */
    ValueEquals: "ValueEquals",
} as const;

export type AttributeFilter = (typeof AttributeFilter)[keyof typeof AttributeFilter];

export const AudioAnalysisMode = {
    /**
     * Performs all operations included in the Basic mode, additionally performing language detection and speaker diarization.
     */
    Standard: "Standard",
    /**
     * This mode performs speech-to-text transcription and generation of a VTT subtitle/caption file. The output of this mode includes an Insights JSON file including only the keywords, transcription,and timing information. Automatic language detection and speaker diarization are not included in this mode.
     */
    Basic: "Basic",
} as const;

export type AudioAnalysisMode = (typeof AudioAnalysisMode)[keyof typeof AudioAnalysisMode];

export const BlurType = {
    /**
     * Box: debug filter, bounding box only
     */
    Box: "Box",
    /**
     * Low: box-car blur filter
     */
    Low: "Low",
    /**
     * Med: Gaussian blur filter
     */
    Med: "Med",
    /**
     * High: Confuse blur filter
     */
    High: "High",
    /**
     * Black: Black out filter
     */
    Black: "Black",
} as const;

export type BlurType = (typeof BlurType)[keyof typeof BlurType];

export const ChannelMapping = {
    /**
     * The Front Left Channel.
     */
    FrontLeft: "FrontLeft",
    /**
     * The Front Right Channel.
     */
    FrontRight: "FrontRight",
    /**
     * The Center Channel.
     */
    Center: "Center",
    /**
     * Low Frequency Effects Channel.  Sometimes referred to as the subwoofer.
     */
    LowFrequencyEffects: "LowFrequencyEffects",
    /**
     * The Back Left Channel.  Sometimes referred to as the Left Surround Channel.
     */
    BackLeft: "BackLeft",
    /**
     * The Back Right Channel.  Sometimes referred to as the Right Surround Channel.
     */
    BackRight: "BackRight",
    /**
     * The Left Stereo channel.  Sometimes referred to as Down Mix Left.
     */
    StereoLeft: "StereoLeft",
    /**
     * The Right Stereo channel.  Sometimes referred to as Down Mix Right.
     */
    StereoRight: "StereoRight",
} as const;

export type ChannelMapping = (typeof ChannelMapping)[keyof typeof ChannelMapping];

export const Complexity = {
    /**
     * Configures the encoder to use settings optimized for faster encoding. Quality is sacrificed to decrease encoding time.
     */
    Speed: "Speed",
    /**
     * Configures the encoder to use settings that achieve a balance between speed and quality.
     */
    Balanced: "Balanced",
    /**
     * Configures the encoder to use settings optimized to produce higher quality output at the expense of slower overall encode time.
     */
    Quality: "Quality",
} as const;

export type Complexity = (typeof Complexity)[keyof typeof Complexity];

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

export const DeinterlaceMode = {
    /**
     * Disables de-interlacing of the source video.
     */
    Off: "Off",
    /**
     * Apply automatic pixel adaptive de-interlacing on each frame in the input video.
     */
    AutoPixelAdaptive: "AutoPixelAdaptive",
} as const;

export type DeinterlaceMode = (typeof DeinterlaceMode)[keyof typeof DeinterlaceMode];

export const DeinterlaceParity = {
    /**
     * Automatically detect the order of fields
     */
    Auto: "Auto",
    /**
     * Apply top field first processing of input video.
     */
    TopFieldFirst: "TopFieldFirst",
    /**
     * Apply bottom field first processing of input video.
     */
    BottomFieldFirst: "BottomFieldFirst",
} as const;

export type DeinterlaceParity = (typeof DeinterlaceParity)[keyof typeof DeinterlaceParity];

export const EncoderNamedPreset = {
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at 2200 kbps and a picture height of 480 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H264SingleBitrateSD: "H264SingleBitrateSD",
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at 4500 kbps and a picture height of 720 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H264SingleBitrate720p: "H264SingleBitrate720p",
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at 6750 kbps and a picture height of 1080 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H264SingleBitrate1080p: "H264SingleBitrate1080p",
    /**
     * Produces a set of GOP aligned MP4 files with H.264 video and stereo AAC audio. Auto-generates a bitrate ladder based on the input resolution, bitrate and frame rate. The auto-generated preset will never exceed the input resolution. For example, if the input is 720p, output will remain 720p at best.
     */
    AdaptiveStreaming: "AdaptiveStreaming",
    /**
     * Produces a single MP4 file containing only AAC stereo audio encoded at 192 kbps.
     */
    AACGoodQualityAudio: "AACGoodQualityAudio",
    /**
     * Produces a single MP4 file containing only DD(Digital Dolby) stereo audio encoded at 192 kbps.
     */
    DDGoodQualityAudio: "DDGoodQualityAudio",
    /**
     * Exposes an experimental preset for content-aware encoding. Given any input content, the service attempts to automatically determine the optimal number of layers, appropriate bitrate and resolution settings for delivery by adaptive streaming. The underlying algorithms will continue to evolve over time. The output will contain MP4 files with video and audio interleaved.
     */
    ContentAwareEncodingExperimental: "ContentAwareEncodingExperimental",
    /**
     * Produces a set of GOP-aligned MP4s by using content-aware encoding. Given any input content, the service performs an initial lightweight analysis of the input content, and uses the results to determine the optimal number of layers, appropriate bitrate and resolution settings for delivery by adaptive streaming. This preset is particularly effective for low and medium complexity videos, where the output files will be at lower bitrates but at a quality that still delivers a good experience to viewers. The output will contain MP4 files with video and audio interleaved.
     */
    ContentAwareEncoding: "ContentAwareEncoding",
    /**
     * Copy all video and audio streams from the input asset as non-interleaved video and audio output files. This preset can be used to clip an existing asset or convert a group of key frame (GOP) aligned MP4 files as an asset that can be streamed.
     */
    CopyAllBitrateNonInterleaved: "CopyAllBitrateNonInterleaved",
    /**
     * Produces a set of 8 GOP-aligned MP4 files, ranging from 6000 kbps to 400 kbps, and stereo AAC audio. Resolution starts at 1080p and goes down to 180p.
     */
    H264MultipleBitrate1080p: "H264MultipleBitrate1080p",
    /**
     * Produces a set of 6 GOP-aligned MP4 files, ranging from 3400 kbps to 400 kbps, and stereo AAC audio. Resolution starts at 720p and goes down to 180p.
     */
    H264MultipleBitrate720p: "H264MultipleBitrate720p",
    /**
     * Produces a set of 5 GOP-aligned MP4 files, ranging from 1900kbps to 400 kbps, and stereo AAC audio. Resolution starts at 480p and goes down to 240p.
     */
    H264MultipleBitrateSD: "H264MultipleBitrateSD",
    /**
     * Produces a set of GOP-aligned MP4s by using content-aware encoding. Given any input content, the service performs an initial lightweight analysis of the input content, and uses the results to determine the optimal number of layers, appropriate bitrate and resolution settings for delivery by adaptive streaming. This preset is particularly effective for low and medium complexity videos, where the output files will be at lower bitrates but at a quality that still delivers a good experience to viewers. The output will contain MP4 files with video and audio interleaved.
     */
    H265ContentAwareEncoding: "H265ContentAwareEncoding",
    /**
     * Produces a set of GOP aligned MP4 files with H.265 video and stereo AAC audio. Auto-generates a bitrate ladder based on the input resolution, bitrate and frame rate. The auto-generated preset will never exceed the input resolution. For example, if the input is 720p, output will remain 720p at best.
     */
    H265AdaptiveStreaming: "H265AdaptiveStreaming",
    /**
     * Produces an MP4 file where the video is encoded with H.265 codec at 1800 kbps and a picture height of 720 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H265SingleBitrate720p: "H265SingleBitrate720p",
    /**
     * Produces an MP4 file where the video is encoded with H.265 codec at 3500 kbps and a picture height of 1080 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H265SingleBitrate1080p: "H265SingleBitrate1080p",
    /**
     * Produces an MP4 file where the video is encoded with H.265 codec at 9500 kbps and a picture height of 2160 pixels, and the stereo audio is encoded with AAC-LC codec at 128 kbps.
     */
    H265SingleBitrate4K: "H265SingleBitrate4K",
} as const;

export type EncoderNamedPreset = (typeof EncoderNamedPreset)[keyof typeof EncoderNamedPreset];

export const EntropyMode = {
    /**
     * Context Adaptive Binary Arithmetic Coder (CABAC) entropy encoding.
     */
    Cabac: "Cabac",
    /**
     * Context Adaptive Variable Length Coder (CAVLC) entropy encoding.
     */
    Cavlc: "Cavlc",
} as const;

export type EntropyMode = (typeof EntropyMode)[keyof typeof EntropyMode];

export const FaceRedactorMode = {
    /**
     * Analyze mode detects faces and outputs a metadata file with the results. Allows editing of the metadata file before faces are blurred with Redact mode.
     */
    Analyze: "Analyze",
    /**
     * Redact mode consumes the metadata file from Analyze mode and redacts the faces found.
     */
    Redact: "Redact",
    /**
     * Combined mode does the Analyze and Redact steps in one pass when editing the analyzed faces is not desired.
     */
    Combined: "Combined",
} as const;

export type FaceRedactorMode = (typeof FaceRedactorMode)[keyof typeof FaceRedactorMode];

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

export const H264Complexity = {
    /**
     * Tells the encoder to use settings that are optimized for faster encoding. Quality is sacrificed to decrease encoding time.
     */
    Speed: "Speed",
    /**
     * Tells the encoder to use settings that achieve a balance between speed and quality.
     */
    Balanced: "Balanced",
    /**
     * Tells the encoder to use settings that are optimized to produce higher quality output at the expense of slower overall encode time.
     */
    Quality: "Quality",
} as const;

export type H264Complexity = (typeof H264Complexity)[keyof typeof H264Complexity];

export const H264RateControlMode = {
    /**
     * Average Bitrate (ABR) mode that hits the target bitrate: Default mode.
     */
    ABR: "ABR",
    /**
     * Constant Bitrate (CBR) mode that tightens bitrate variations around target bitrate.
     */
    CBR: "CBR",
    /**
     * Constant Rate Factor (CRF) mode that targets at constant subjective quality.
     */
    CRF: "CRF",
} as const;

export type H264RateControlMode = (typeof H264RateControlMode)[keyof typeof H264RateControlMode];

export const H264VideoProfile = {
    /**
     * Tells the encoder to automatically determine the appropriate H.264 profile.
     */
    Auto: "Auto",
    /**
     * Baseline profile
     */
    Baseline: "Baseline",
    /**
     * Main profile
     */
    Main: "Main",
    /**
     * High profile.
     */
    High: "High",
    /**
     * High 4:2:2 profile.
     */
    High422: "High422",
    /**
     * High 4:4:4 predictive profile.
     */
    High444: "High444",
} as const;

export type H264VideoProfile = (typeof H264VideoProfile)[keyof typeof H264VideoProfile];

export const H265Complexity = {
    /**
     * Tells the encoder to use settings that are optimized for faster encoding. Quality is sacrificed to decrease encoding time.
     */
    Speed: "Speed",
    /**
     * Tells the encoder to use settings that achieve a balance between speed and quality.
     */
    Balanced: "Balanced",
    /**
     * Tells the encoder to use settings that are optimized to produce higher quality output at the expense of slower overall encode time.
     */
    Quality: "Quality",
} as const;

export type H265Complexity = (typeof H265Complexity)[keyof typeof H265Complexity];

export const H265VideoProfile = {
    /**
     * Tells the encoder to automatically determine the appropriate H.265 profile.
     */
    Auto: "Auto",
    /**
     * Main profile (https://x265.readthedocs.io/en/default/cli.html?highlight=profile#profile-level-tier)
     */
    Main: "Main",
    /**
     * Main 10 profile (https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding#Main_10)
     */
    Main10: "Main10",
} as const;

export type H265VideoProfile = (typeof H265VideoProfile)[keyof typeof H265VideoProfile];

export const InsightsType = {
    /**
     * Generate audio only insights. Ignore video even if present. Fails if no audio is present.
     */
    AudioInsightsOnly: "AudioInsightsOnly",
    /**
     * Generate video only insights. Ignore audio if present. Fails if no video is present.
     */
    VideoInsightsOnly: "VideoInsightsOnly",
    /**
     * Generate both audio and video insights. Fails if either audio or video Insights fail.
     */
    AllInsights: "AllInsights",
} as const;

export type InsightsType = (typeof InsightsType)[keyof typeof InsightsType];

export const InterleaveOutput = {
    /**
     * The output is video-only or audio-only.
     */
    NonInterleavedOutput: "NonInterleavedOutput",
    /**
     * The output includes both audio and video.
     */
    InterleavedOutput: "InterleavedOutput",
} as const;

export type InterleaveOutput = (typeof InterleaveOutput)[keyof typeof InterleaveOutput];

export const LiveEventEncodingType = {
    /**
     * This is the same as PassthroughStandard, please see description below. This enumeration value is being deprecated.
     */
    None: "None",
    /**
     * A contribution live encoder sends a single bitrate stream to the live event and Media Services creates multiple bitrate streams. The output cannot exceed 720p in resolution.
     */
    Standard: "Standard",
    /**
     * A contribution live encoder sends a single bitrate stream to the live event and Media Services creates multiple bitrate streams. The output cannot exceed 1080p in resolution.
     */
    Premium1080p: "Premium1080p",
    /**
     * The ingested stream passes through the live event from the contribution encoder without any further processing. In the PassthroughBasic mode, ingestion is limited to up to 5Mbps and only 1 concurrent live output is allowed. Live transcription is not available.
     */
    PassthroughBasic: "PassthroughBasic",
    /**
     * The ingested stream passes through the live event from the contribution encoder without any further processing. Live transcription is available. Ingestion bitrate limits are much higher and up to 3 concurrent live outputs are allowed.
     */
    PassthroughStandard: "PassthroughStandard",
} as const;

export type LiveEventEncodingType = (typeof LiveEventEncodingType)[keyof typeof LiveEventEncodingType];

export const LiveEventInputProtocol = {
    /**
     * Smooth Streaming input will be sent by the contribution encoder to the live event.
     */
    FragmentedMP4: "FragmentedMP4",
    /**
     * RTMP input will be sent by the contribution encoder to the live event.
     */
    RTMP: "RTMP",
} as const;

export type LiveEventInputProtocol = (typeof LiveEventInputProtocol)[keyof typeof LiveEventInputProtocol];

export const MediaGraphRtspTransport = {
    /**
     * HTTP/HTTPS transport. This should be used when HTTP tunneling is desired.
     */
    Http: "Http",
    /**
     * TCP transport. This should be used when HTTP tunneling is not desired.
     */
    Tcp: "Tcp",
} as const;

export type MediaGraphRtspTransport = (typeof MediaGraphRtspTransport)[keyof typeof MediaGraphRtspTransport];

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

export const OnErrorType = {
    /**
     * Tells the service that if this TransformOutput fails, then any other incomplete TransformOutputs can be stopped.
     */
    StopProcessingJob: "StopProcessingJob",
    /**
     * Tells the service that if this TransformOutput fails, then allow any other TransformOutput to continue.
     */
    ContinueJob: "ContinueJob",
} as const;

export type OnErrorType = (typeof OnErrorType)[keyof typeof OnErrorType];

export const Priority = {
    /**
     * Used for TransformOutputs that can be generated after Normal and High priority TransformOutputs.
     */
    Low: "Low",
    /**
     * Used for TransformOutputs that can be generated at Normal priority.
     */
    Normal: "Normal",
    /**
     * Used for TransformOutputs that should take precedence over others.
     */
    High: "High",
} as const;

export type Priority = (typeof Priority)[keyof typeof Priority];

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

export const Rotation = {
    /**
     * Automatically detect and rotate as needed.
     */
    Auto: "Auto",
    /**
     * Do not rotate the video.  If the output format supports it, any metadata about rotation is kept intact.
     */
    None: "None",
    /**
     * Do not rotate the video but remove any metadata about the rotation.
     */
    Rotate0: "Rotate0",
    /**
     * Rotate 90 degrees clockwise.
     */
    Rotate90: "Rotate90",
    /**
     * Rotate 180 degrees clockwise.
     */
    Rotate180: "Rotate180",
    /**
     * Rotate 270 degrees clockwise.
     */
    Rotate270: "Rotate270",
} as const;

export type Rotation = (typeof Rotation)[keyof typeof Rotation];

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

export const StreamOptionsFlag = {
    /**
     * Live streaming with no special latency optimizations.
     */
    Default: "Default",
    /**
     * The live event provides lower end to end latency by reducing its internal buffers.
     */
    LowLatency: "LowLatency",
    /**
     * The live event is optimized for end to end latency. This option is only available for encoding live events with RTMP input. The outputs can be streamed using HLS or DASH formats. The outputs' archive or DVR rewind length is limited to 6 hours. Use "LowLatency" stream option for all other scenarios.
     */
    LowLatencyV2: "LowLatencyV2",
} as const;

export type StreamOptionsFlag = (typeof StreamOptionsFlag)[keyof typeof StreamOptionsFlag];

export const StretchMode = {
    /**
     * Strictly respect the output resolution without considering the pixel aspect ratio or display aspect ratio of the input video.
     */
    None: "None",
    /**
     * Override the output resolution, and change it to match the display aspect ratio of the input, without padding. For example, if the input is 1920x1080 and the encoding preset asks for 1280x1280, then the value in the preset is overridden, and the output will be at 1280x720, which maintains the input aspect ratio of 16:9.
     */
    AutoSize: "AutoSize",
    /**
     * Pad the output (with either letterbox or pillar box) to honor the output resolution, while ensuring that the active video region in the output has the same aspect ratio as the input. For example, if the input is 1920x1080 and the encoding preset asks for 1280x1280, then the output will be at 1280x1280, which contains an inner rectangle of 1280x720 at aspect ratio of 16:9, and pillar box regions 280 pixels wide at the left and right.
     */
    AutoFit: "AutoFit",
} as const;

export type StretchMode = (typeof StretchMode)[keyof typeof StretchMode];

export const TrackAttribute = {
    /**
     * The bitrate of the track.
     */
    Bitrate: "Bitrate",
    /**
     * The language of the track.
     */
    Language: "Language",
} as const;

export type TrackAttribute = (typeof TrackAttribute)[keyof typeof TrackAttribute];

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

export const VideoSyncMode = {
    /**
     * This is the default method. Chooses between Cfr and Vfr depending on muxer capabilities. For output format MP4, the default mode is Cfr.
     */
    Auto: "Auto",
    /**
     * The presentation timestamps on frames are passed through from the input file to the output file writer. Recommended when the input source has variable frame rate, and are attempting to produce multiple layers for adaptive streaming in the output which have aligned GOP boundaries. Note: if two or more frames in the input have duplicate timestamps, then the output will also have the same behavior
     */
    Passthrough: "Passthrough",
    /**
     * Input frames will be repeated and/or dropped as needed to achieve exactly the requested constant frame rate. Recommended when the output frame rate is explicitly set at a specified value
     */
    Cfr: "Cfr",
    /**
     * Similar to the Passthrough mode, but if the input has frames that have duplicate timestamps, then only one frame is passed through to the output, and others are dropped. Recommended when the number of output frames is expected to be equal to the number of input frames. For example, the output is used to calculate a quality metric like PSNR against the input
     */
    Vfr: "Vfr",
} as const;

export type VideoSyncMode = (typeof VideoSyncMode)[keyof typeof VideoSyncMode];

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