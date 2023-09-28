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

/**
 * The encoding profile to be used when encoding audio with AAC.
 */
export type AacAudioProfile = (typeof AacAudioProfile)[keyof typeof AacAudioProfile];

export const AnalysisResolution = {
    SourceResolution: "SourceResolution",
    StandardDefinition: "StandardDefinition",
} as const;

/**
 * Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.
 */
export type AnalysisResolution = (typeof AnalysisResolution)[keyof typeof AnalysisResolution];

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

/**
 * The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
 */
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

/**
 * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
 */
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

/**
 * Blur type
 */
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

/**
 * Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
 */
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

/**
 * Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency.
 */
export type Complexity = (typeof Complexity)[keyof typeof Complexity];

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

/**
 * The deinterlacing mode. Defaults to AutoPixelAdaptive.
 */
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

/**
 * The field parity for de-interlacing, defaults to Auto.
 */
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

/**
 * The built-in preset to be used for encoding videos.
 */
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

/**
 * The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
 */
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

/**
 * This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
 */
export type FaceRedactorMode = (typeof FaceRedactorMode)[keyof typeof FaceRedactorMode];

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

/**
 * Tells the encoder how to choose its encoding settings. The default value is Balanced.
 */
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

/**
 * The video rate control mode
 */
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

/**
 * We currently support Baseline, Main, High, High422, High444. Default is Auto.
 */
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

/**
 * Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
 */
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

/**
 * We currently support Main. Default is Auto.
 */
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

/**
 * Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.
 */
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

/**
 * Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files.
 */
export type InterleaveOutput = (typeof InterleaveOutput)[keyof typeof InterleaveOutput];

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

/**
 * A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
 */
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

/**
 * Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.
 */
export type Priority = (typeof Priority)[keyof typeof Priority];

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

/**
 * The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto
 */
export type Rotation = (typeof Rotation)[keyof typeof Rotation];

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

/**
 * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
 */
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

/**
 * The TrackAttribute to filter the tracks by.
 */
export type TrackAttribute = (typeof TrackAttribute)[keyof typeof TrackAttribute];

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

/**
 * The Video Sync Mode
 */
export type VideoSyncMode = (typeof VideoSyncMode)[keyof typeof VideoSyncMode];
