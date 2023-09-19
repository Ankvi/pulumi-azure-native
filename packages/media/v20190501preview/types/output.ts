import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        ip?: IPAccessControlResponse;
    }

    /**
     * The Live Event input.
     */
    export interface LiveEventInputResponse {
        /**
         * The access control for LiveEvent Input.
         */
        accessControl?: LiveEventInputAccessControlResponse;
        /**
         * A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
         */
        accessToken?: string;
        /**
         * The input endpoints for the Live Event.
         */
        endpoints?: LiveEventEndpointResponse[];
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
        ip?: IPAccessControlResponse;
    }

    /**
     * The Live Event preview.
     */
    export interface LiveEventPreviewResponse {
        /**
         * The access control for LiveEvent preview.
         */
        accessControl?: LiveEventPreviewAccessControlResponse;
        /**
         * An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: string;
        /**
         * The endpoints for preview.
         */
        endpoints?: LiveEventEndpointResponse[];
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
        inputTrackSelection?: LiveEventInputTrackSelectionResponse[];
        /**
         * Specifies the language (locale) used for speech-to-text transcription - it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
         */
        language?: string;
        /**
         * Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
         */
        outputTranscriptionTrack?: LiveEventOutputTranscriptionTrackResponse;
    }
