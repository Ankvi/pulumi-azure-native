import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Akamai access control
     */
    export interface AkamaiAccessControlArgs {
        /**
         * authentication key list
         */
        akamaiSignatureHeaderAuthenticationKeyList?: pulumi.Input<pulumi.Input<AkamaiSignatureHeaderAuthenticationKeyArgs>[]>;
    }

    /**
     * Akamai Signature Header authentication key.
     */
    export interface AkamaiSignatureHeaderAuthenticationKeyArgs {
        /**
         * authentication key
         */
        base64Key?: pulumi.Input<string>;
        /**
         * The expiration time of the authentication key.
         */
        expiration?: pulumi.Input<string>;
        /**
         * identifier of the key
         */
        identifier?: pulumi.Input<string>;
    }

    /**
     * The streaming endpoint current sku.
     */
    export interface ArmStreamingEndpointCurrentSkuArgs {
        /**
         * The streaming endpoint sku capacity.
         */
        capacity?: pulumi.Input<number>;
    }

    /**
     * The client access policy.
     */
    export interface CrossSiteAccessPoliciesArgs {
        /**
         * The content of clientaccesspolicy.xml used by Silverlight.
         */
        clientAccessPolicy?: pulumi.Input<string>;
        /**
         * The content of crossdomain.xml used by Silverlight.
         */
        crossDomainPolicy?: pulumi.Input<string>;
    }

    /**
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    export interface HlsArgs {
        /**
         * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.
         */
        fragmentsPerTsSegment?: pulumi.Input<number>;
    }

    /**
     * The IP access control.
     */
    export interface IPAccessControlArgs {
        /**
         * The IP allow list.
         */
        allow?: pulumi.Input<pulumi.Input<IPRangeArgs>[]>;
    }

    /**
     * The IP address range in the CIDR scheme.
     */
    export interface IPRangeArgs {
        /**
         * The IP address.
         */
        address?: pulumi.Input<string>;
        /**
         * The friendly name for the IP address range.
         */
        name?: pulumi.Input<string>;
        /**
         * The subnet mask prefix length (see CIDR notation).
         */
        subnetPrefixLength?: pulumi.Input<number>;
    }

    /**
     * Specifies the live event type and optional encoding settings for encoding live events.
     */
    export interface LiveEventEncodingArgs {
        /**
         * Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
         */
        encodingType?: pulumi.Input<string | enums.LiveEventEncodingType>;
        /**
         * Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
         */
        keyFrameInterval?: pulumi.Input<string>;
        /**
         * The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is ‘Default720p’. Else if the encodingType is set to Premium1080p, the default preset is ‘Default1080p’.
         */
        presetName?: pulumi.Input<string>;
        /**
         * Specifies how the input video will be resized to fit the desired output resolution(s). Default is None
         */
        stretchMode?: pulumi.Input<string | enums.StretchMode>;
    }

    /**
     * The live event endpoint.
     */
    export interface LiveEventEndpointArgs {
        /**
         * The endpoint protocol.
         */
        protocol?: pulumi.Input<string>;
        /**
         * The endpoint URL.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * The live event input.
     */
    export interface LiveEventInputArgs {
        /**
         * Access control for live event input.
         */
        accessControl?: pulumi.Input<LiveEventInputAccessControlArgs>;
        /**
         * A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
         */
        accessToken?: pulumi.Input<string>;
        /**
         * The input endpoints for the live event.
         */
        endpoints?: pulumi.Input<pulumi.Input<LiveEventEndpointArgs>[]>;
        /**
         * ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
         */
        keyFrameIntervalDuration?: pulumi.Input<string>;
        /**
         * The input protocol for the live event. This is specified at creation time and cannot be updated.
         */
        streamingProtocol: pulumi.Input<string | enums.LiveEventInputProtocol>;
        /**
         * The metadata endpoints for the live event.
         */
        timedMetadataEndpoints?: pulumi.Input<pulumi.Input<LiveEventTimedMetadataEndpointArgs>[]>;
    }

    /**
     * The IP access control for live event input.
     */
    export interface LiveEventInputAccessControlArgs {
        /**
         * The IP access control properties.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }

    /**
     * A track selection condition. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventInputTrackSelectionArgs {
        /**
         * Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
         */
        operation?: pulumi.Input<string>;
        /**
         * Property name to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        property?: pulumi.Input<string>;
        /**
         * Property value to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventOutputTranscriptionTrackArgs {
        /**
         * The output track name. This property is reserved for future use, any value set on this property will be ignored.
         */
        trackName: pulumi.Input<string>;
    }

    /**
     * Live event preview settings.
     */
    export interface LiveEventPreviewArgs {
        /**
         * The access control for live event preview.
         */
        accessControl?: pulumi.Input<LiveEventPreviewAccessControlArgs>;
        /**
         * An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: pulumi.Input<string>;
        /**
         * The endpoints for preview. Do not share the preview URL with the live event audience.
         */
        endpoints?: pulumi.Input<pulumi.Input<LiveEventEndpointArgs>[]>;
        /**
         * The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
         */
        previewLocator?: pulumi.Input<string>;
        /**
         * The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.
         */
        streamingPolicyName?: pulumi.Input<string>;
    }

    /**
     * The IP access control for the live event preview endpoint.
     */
    export interface LiveEventPreviewAccessControlArgs {
        /**
         * The IP access control properties.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }

    /**
     * The live event metadata insertion endpoint.
     */
    export interface LiveEventTimedMetadataEndpointArgs {
        /**
         * The metadata endpoint URL.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Describes the transcription tracks in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventTranscriptionArgs {
        /**
         * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
         */
        inputTrackSelection?: pulumi.Input<pulumi.Input<LiveEventInputTrackSelectionArgs>[]>;
        /**
         * Specifies the language (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature and the list of supported languages.
         */
        language?: pulumi.Input<string>;
        /**
         * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
         */
        outputTranscriptionTrack?: pulumi.Input<LiveEventOutputTranscriptionTrackArgs>;
    }

    /**
     * Streaming endpoint access control definition.
     */
    export interface StreamingEndpointAccessControlArgs {
        /**
         * The access control of Akamai
         */
        akamai?: pulumi.Input<AkamaiAccessControlArgs>;
        /**
         * The IP access control of the streaming endpoint.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }
