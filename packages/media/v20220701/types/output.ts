import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
