export const AccessPolicyEccAlgo = {
    /**
     * ES265
     */
    ES256: "ES256",
    /**
     * ES384
     */
    ES384: "ES384",
    /**
     * ES512
     */
    ES512: "ES512",
} as const;

/**
 * Elliptical curve algorithm to be used: ES256, ES384 or ES512.
 */
export type AccessPolicyEccAlgo = (typeof AccessPolicyEccAlgo)[keyof typeof AccessPolicyEccAlgo];

export const AccessPolicyRole = {
    /**
     * Reader role allows for read-only operations to be performed through the client APIs.
     */
    Reader: "Reader",
} as const;

/**
 * Defines the access level granted by this policy.
 */
export type AccessPolicyRole = (typeof AccessPolicyRole)[keyof typeof AccessPolicyRole];

export const AccessPolicyRsaAlgo = {
    /**
     * RS256
     */
    RS256: "RS256",
    /**
     * RS384
     */
    RS384: "RS384",
    /**
     * RS512
     */
    RS512: "RS512",
} as const;

/**
 * RSA algorithm to be used: RS256, RS384 or RS512.
 */
export type AccessPolicyRsaAlgo = (typeof AccessPolicyRsaAlgo)[keyof typeof AccessPolicyRsaAlgo];

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

export const EncoderSystemPresetType = {
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at a picture height of 540 pixels, and at a maximum bitrate of 2000 Kbps. Encoded video has the same average frame rate as the input. The aspect ratio of the input is preserved. If the input content has audio, then it is encoded with AAC-LC codec at 96 Kbps
     */
    SingleLayer_540p_H264_AAC: "SingleLayer_540p_H264_AAC",
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at a picture height of 720 pixels, and at a maximum bitrate of 3500 Kbps. Encoded video has the same average frame rate as the input. The aspect ratio of the input is preserved. If the input content has audio, then it is encoded with AAC-LC codec at 96 Kbps
     */
    SingleLayer_720p_H264_AAC: "SingleLayer_720p_H264_AAC",
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at a picture height of 1080 pixels, and at a maximum bitrate of 6000 Kbps. Encoded video has the same average frame rate as the input. The aspect ratio of the input is preserved. If the input content has audio, then it is encoded with AAC-LC codec at 128 Kbps
     */
    SingleLayer_1080p_H264_AAC: "SingleLayer_1080p_H264_AAC",
    /**
     * Produces an MP4 file where the video is encoded with H.264 codec at a picture height of 2160 pixels, and at a maximum bitrate of 16000 Kbps. Encoded video has the same average frame rate as the input. The aspect ratio of the input is preserved. If the input content has audio, then it is encoded with AAC-LC codec at 128 Kbps
     */
    SingleLayer_2160p_H264_AAC: "SingleLayer_2160p_H264_AAC",
} as const;

/**
 * Name of the built-in encoding preset.
 */
export type EncoderSystemPresetType = (typeof EncoderSystemPresetType)[keyof typeof EncoderSystemPresetType];

export const Kind = {
    /**
     * Live pipeline topology resource.
     */
    Live: "Live",
    /**
     * Batch pipeline topology resource.
     */
    Batch: "Batch",
} as const;

/**
 * Topology kind.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ParameterType = {
    /**
     * The parameter's value is a string.
     */
    String: "String",
    /**
     * The parameter's value is a string that holds sensitive information.
     */
    SecretString: "SecretString",
    /**
     * The parameter's value is a 32-bit signed integer.
     */
    Int: "Int",
    /**
     * The parameter's value is a 64-bit double-precision floating point.
     */
    Double: "Double",
    /**
     * The parameter's value is a boolean value that is either true or false.
     */
    Bool: "Bool",
} as const;

/**
 * Type of the parameter.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

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
 * Whether or not public network access is allowed for resources under the Video Analyzer account.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RtspTransport = {
    /**
     * HTTP transport. RTSP messages are exchanged over long running HTTP requests and RTP packets are interleaved within the HTTP channel.
     */
    Http: "Http",
    /**
     * TCP transport. RTSP is used directly over TCP and RTP packets are interleaved within the TCP channel.
     */
    Tcp: "Tcp",
} as const;

/**
 * Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages.
 */
export type RtspTransport = (typeof RtspTransport)[keyof typeof RtspTransport];

export const SkuName = {
    /**
     * Represents the Live S1 SKU name. Using this SKU you can create live pipelines to capture, record, and stream live video from RTSP-capable cameras at bitrate settings from 0.5 Kbps to 3000 Kbps.
     */
    Live_S1: "Live_S1",
    /**
     * Represents the Batch S1 SKU name. Using this SKU you can create pipeline jobs to process recorded content.
     */
    Batch_S1: "Batch_S1",
} as const;

/**
 * The SKU name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const VideoScaleMode = {
    /**
     * Pads the video with black horizontal stripes (letterbox) or black vertical stripes (pillar-box) so the video is resized to the specified dimensions while not altering the content aspect ratio.
     */
    Pad: "Pad",
    /**
     * Preserves the same aspect ratio as the input video. If only one video dimension is provided, the second dimension is calculated based on the input video aspect ratio. When 2 dimensions are provided, the video is resized to fit the most constraining dimension, considering the input video size and aspect ratio.
     */
    PreserveAspectRatio: "PreserveAspectRatio",
    /**
     * Stretches the original video so it resized to the specified dimensions.
     */
    Stretch: "Stretch",
} as const;

/**
 * Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided.
 */
export type VideoScaleMode = (typeof VideoScaleMode)[keyof typeof VideoScaleMode];
