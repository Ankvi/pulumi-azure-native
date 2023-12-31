import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * The Live Event encoding.
     */
    export interface LiveEventEncodingArgs {
        /**
         * The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
         */
        encodingType?: pulumi.Input<string | enums.LiveEventEncodingType>;
        /**
         * The encoding preset name.  This value is specified at creation time and cannot be updated.
         */
        presetName?: pulumi.Input<string>;
    }

    /**
     * The Live Event endpoint.
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
     * The Live Event input.
     */
    export interface LiveEventInputArgs {
        /**
         * The access control for LiveEvent Input.
         */
        accessControl?: pulumi.Input<LiveEventInputAccessControlArgs>;
        /**
         * A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
         */
        accessToken?: pulumi.Input<string>;
        /**
         * The input endpoints for the Live Event.
         */
        endpoints?: pulumi.Input<pulumi.Input<LiveEventEndpointArgs>[]>;
        /**
         * ISO 8601 timespan duration of the key frame interval duration.
         */
        keyFrameIntervalDuration?: pulumi.Input<string>;
        /**
         * The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.
         */
        streamingProtocol: pulumi.Input<string | enums.LiveEventInputProtocol>;
    }

    /**
     * The IP access control for Live Event Input.
     */
    export interface LiveEventInputAccessControlArgs {
        /**
         * The IP access control properties.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }

    /**
     * A track selection condition.
     */
    export interface LiveEventInputTrackSelectionArgs {
        /**
         * Comparing operation.
         */
        operation?: pulumi.Input<string>;
        /**
         * Property name to select.
         */
        property?: pulumi.Input<string>;
        /**
         * Property value to select.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
     */
    export interface LiveEventOutputTranscriptionTrackArgs {
        /**
         * The output track name.
         */
        trackName: pulumi.Input<string>;
    }

    /**
     * The Live Event preview.
     */
    export interface LiveEventPreviewArgs {
        /**
         * The access control for LiveEvent preview.
         */
        accessControl?: pulumi.Input<LiveEventPreviewAccessControlArgs>;
        /**
         * An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: pulumi.Input<string>;
        /**
         * The endpoints for preview.
         */
        endpoints?: pulumi.Input<pulumi.Input<LiveEventEndpointArgs>[]>;
        /**
         * The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created.
         */
        previewLocator?: pulumi.Input<string>;
        /**
         * The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated.
         */
        streamingPolicyName?: pulumi.Input<string>;
    }

    /**
     * The IP access control for Live Event preview.
     */
    export interface LiveEventPreviewAccessControlArgs {
        /**
         * The IP access control properties.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }

    /**
     * Describes the transcription tracks in the output of a Live Event, generated using speech-to-text transcription.
     */
    export interface LiveEventTranscriptionArgs {
        /**
         * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied.
         */
        inputTrackSelection?: pulumi.Input<pulumi.Input<LiveEventInputTrackSelectionArgs>[]>;
        /**
         * Specifies the language (locale) used for speech-to-text transcription - it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
         */
        language?: pulumi.Input<string>;
        /**
         * Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
         */
        outputTranscriptionTrack?: pulumi.Input<LiveEventOutputTranscriptionTrackArgs>;
    }
