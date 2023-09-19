import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Akamai access control
     */
    export interface AkamaiAccessControlResponse {
        /**
         * authentication key list
         */
        akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKeyResponse[];
    }

    /**
     * Akamai Signature Header authentication key.
     */
    export interface AkamaiSignatureHeaderAuthenticationKeyResponse {
        /**
         * authentication key
         */
        base64Key?: string;
        /**
         * The expiration time of the authentication key.
         */
        expiration?: string;
        /**
         * identifier of the key
         */
        identifier?: string;
    }

    /**
     * The streaming endpoint current sku.
     */
    export interface ArmStreamingEndpointCurrentSkuResponse {
        /**
         * The streaming endpoint sku capacity.
         */
        capacity?: number;
        /**
         * The streaming endpoint sku name.
         */
        name: string;
    }

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
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    export interface HlsResponse {
        /**
         * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.
         */
        fragmentsPerTsSegment?: number;
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
     * Specifies the live event type and optional encoding settings for encoding live events.
     */
    export interface LiveEventEncodingResponse {
        /**
         * Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. See https://go.microsoft.com/fwlink/?linkid=2095101 for more information. This property cannot be modified after the live event is created.
         */
        encodingType?: string;
        /**
         * Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
         */
        keyFrameInterval?: string;
        /**
         * The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is ‘Default720p’. Else if the encodingType is set to Premium1080p, the default preset is ‘Default1080p’.
         */
        presetName?: string;
        /**
         * Specifies how the input video will be resized to fit the desired output resolution(s). Default is None
         */
        stretchMode?: string;
    }

    /**
     * The live event endpoint.
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
     * The live event ingest interruption data.
     */
    export interface LiveEventIngestInterruptionResponse {
        /**
         * UTC time of interruption start, encoder disconnected.
         */
        begin?: string;
        /**
         * Duration of interruption in ISO 8601 time. For example, use PT1H30M to indicate 1 hour and 30 minutes.
         */
        duration?: string;
        /**
         * UTC time of interruption end, encoder re-connected.
         */
        end?: string;
        /**
         * Interruption reason.
         */
        reason?: string;
    }

    /**
     * The live event ingestion telemetry data.
     */
    export interface LiveEventIngestionResponse {
        /**
         * Ingestion begin time in UTC.
         */
        begin?: string;
        /**
         * Ingestion end time in UTC. Empty if it's not stopped yet.
         */
        end?: string;
        /**
         * Reason why ingestion stops. Empty if it's not stopped yet. E.g) Service Stopped. No Ingestion.
         */
        endReason?: string;
        /**
         * IngestInterruption entry list.
         */
        ingestInterruptions?: LiveEventIngestInterruptionResponse[];
        /**
         * Ingestion stream name.
         */
        streamName?: string;
    }

    /**
     * The IP access control for live event input.
     */
    export interface LiveEventInputAccessControlResponse {
        /**
         * The IP access control properties.
         */
        ip?: IPAccessControlResponse;
    }

    /**
     * The live event input.
     */
    export interface LiveEventInputResponse {
        /**
         * Access control for live event input.
         */
        accessControl?: LiveEventInputAccessControlResponse;
        /**
         * A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
         */
        accessToken?: string;
        /**
         * The input endpoints for the live event.
         */
        endpoints?: LiveEventEndpointResponse[];
        /**
         * ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
         */
        keyFrameIntervalDuration?: string;
        /**
         * The input protocol for the live event. This is specified at creation time and cannot be updated.
         */
        streamingProtocol: string;
        /**
         * The metadata endpoints for the live event.
         */
        timedMetadataEndpoints?: LiveEventTimedMetadataEndpointResponse[];
    }

    /**
     * A track selection condition. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventInputTrackSelectionResponse {
        /**
         * Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
         */
        operation?: string;
        /**
         * Property name to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        property?: string;
        /**
         * Property value to select. This property is reserved for future use, any value set on this property will be ignored.
         */
        value?: string;
    }

    /**
     * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventOutputTranscriptionTrackResponse {
        /**
         * The output track name. This property is reserved for future use, any value set on this property will be ignored.
         */
        trackName: string;
    }

    /**
     * The IP access control for the live event preview endpoint.
     */
    export interface LiveEventPreviewAccessControlResponse {
        /**
         * The IP access control properties.
         */
        ip?: IPAccessControlResponse;
    }

    /**
     * Live event preview settings.
     */
    export interface LiveEventPreviewResponse {
        /**
         * The access control for live event preview.
         */
        accessControl?: LiveEventPreviewAccessControlResponse;
        /**
         * An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: string;
        /**
         * The endpoints for preview. Do not share the preview URL with the live event audience.
         */
        endpoints?: LiveEventEndpointResponse[];
        /**
         * The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
         */
        previewLocator?: string;
        /**
         * The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.
         */
        streamingPolicyName?: string;
    }

    /**
     * The live event status.
     */
    export interface LiveEventStatusResponse {
        /**
         * List of strings justifying the health status.
         */
        healthDescriptions?: string[];
        /**
         * Health status of last 20 seconds.
         */
        healthStatus?: string;
        /**
         * Live event ingestion entry.
         */
        ingestion?: LiveEventIngestionResponse;
        /**
         * Last updated UTC time of this status.
         */
        lastUpdatedTime?: string;
        /**
         * Current state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
         */
        state?: string;
        /**
         * Track entry list.
         */
        trackStatus?: LiveEventTrackStatusResponse[];
    }

    /**
     * The live event stream event data.
     */
    export interface LiveEventStreamEventDataResponse {
        /**
         * Bitrate of the track.
         */
        bitrate?: number;
        /**
         * Current fragment timestamp in timescale.
         */
        currentFragmentTimestamp?: string;
        /**
         * Length of the discontinuity gap in timescale.
         */
        discontinuityGap?: number;
        /**
         * Fragment duration.
         */
        duration?: string;
        /**
         * Reason the fragment was dropped.
         */
        fragmentDropReason?: string;
        /**
         * Duration of first fragment used to make a comparison, in timescale.
         */
        fragmentOneDuration?: string;
        /**
         * Timestamp of first fragment used to make a comparison, in timescale.
         */
        fragmentOneTimestamp?: string;
        /**
         * Duration of second fragment used to make a comparison, in timescale.
         */
        fragmentTwoDuration?: string;
        /**
         * Timestamp of second fragment used to make a comparison, in timescale.
         */
        fragmentTwoTimestamp?: string;
        /**
         * The larger timestamp of the two fragments compared.
         */
        maxTime?: string;
        /**
         * The media type of the larger timestamp of two fragments compared.
         */
        maxTimeMediaType?: string;
        /**
         * Fragment timestamp in timescale.
         */
        mediaTimestamp?: string;
        /**
         * Type of the track.
         */
        mediaType?: string;
        /**
         * The smaller timestamp of the two fragments compared.
         */
        minTime?: string;
        /**
         * The media type of the smaller timestamp of two fragments compared.
         */
        minTimeMediaType?: string;
        /**
         * Previous fragment duration in timescale.
         */
        previousFragmentDuration?: string;
        /**
         * Previous fragment timestamp in timescale.
         */
        previousFragmentTimestamp?: string;
        /**
         * Truncated IP of the encoder.
         */
        remoteIp?: string;
        /**
         * Port of the encoder.
         */
        remotePort?: string;
        /**
         * Width x Height for video, null otherwise.
         */
        resolution?: string;
        /**
         * Result code.
         */
        resultCode?: string;
        /**
         * Result message.
         */
        resultMessage?: string;
        /**
         * Stream ID in the format "trackName_bitrate"
         */
        streamId?: string;
        /**
         * Identifier of the stream or connection. Encoder or customer is responsible to add this ID in the ingest URL.
         */
        streamName?: string;
        /**
         * Timescale in which timestamps are expressed.
         */
        timescale?: string;
        /**
         * Timescale of the fragment with the larger timestamp.
         */
        timescaleOfMaxTime?: string;
        /**
         * Timescale of the fragment with the smaller timestamp.
         */
        timescaleOfMinTime?: string;
        /**
         * Track index.
         */
        trackId?: number;
        /**
         * Name of the track. 
         */
        trackName?: string;
    }

    /**
     * The live event stream event.
     */
    export interface LiveEventStreamEventResponse {
        /**
         * Event data based on event type.
         */
        data?: LiveEventStreamEventDataResponse;
        /**
         * Event level.
         */
        eventLevel?: string;
        /**
         * The time event raised.
         */
        eventTime?: string;
        /**
         * The type of the stream event. Format: StreamEvent/{eventType}
         */
        eventType?: string;
    }

    /**
     * The live event metadata insertion endpoint.
     */
    export interface LiveEventTimedMetadataEndpointResponse {
        /**
         * The metadata endpoint URL.
         */
        url?: string;
    }

    /**
     * The live event track ingest heart beat event data.
     */
    export interface LiveEventTrackEventDataResponse {
        /**
         * Bitrate of the track.
         */
        bitrate?: number;
        /**
         * Number of discontinuities detected in the last 20 seconds.
         */
        discontinuityCount?: number;
        /**
         * Indicates whether ingest is healthy.
         */
        healthy?: boolean;
        /**
         * Calculated bitrate based on data chunks coming from encoder.
         */
        incomingBitrate?: number;
        /**
         * Indicates the speed of delay, in seconds-per-minute, of the incoming audio or video data during the last minute. The value is greater than zero if data is arriving to the live event slower than expected in the last minute; zero if data arrived with no delay; and "n/a" if no audio or video data was received. For example, if you have a contribution encoder sending in live content, and it is slowing down due to processing issues, or network latency, it may be only able to deliver a total of 58 seconds of audio or video in a one-minute period. This would be reported as two seconds-per-minute of drift. If the encoder is able to catch up and send all 60 seconds or more of data every minute, you will see this value reported as 0. If there was a disconnection or discontinuity from the encoder, this value may still display as 0, as it does not account for breaks in the data - only data that is delayed in timestamps.
         */
        ingestDriftValue?: string;
        /**
         * The last timestamp in UTC that a fragment arrived at the ingest endpoint.
         */
        lastFragmentArrivalTime?: string;
        /**
         * Latest timestamp received for a track in last 20 seconds.
         */
        lastTimestamp?: string;
        /**
         * Number of data chunks with timestamps in the past that were received in last 20 seconds.
         */
        nonincreasingCount?: number;
        /**
         * Number of data chunks that had overlapped timestamps in last 20 seconds.
         */
        overlapCount?: number;
        /**
         * State of the live event.
         */
        state?: string;
        /**
         * Timescale in which timestamps are expressed.
         */
        timescale?: string;
        /**
         * Name of the track.
         */
        trackName?: string;
        /**
         * Type of the track.
         */
        trackType?: string;
        /**
         * The language code (in BCP-47 format) of the transcription language. For example, "de-de" indicates German (Germany). The value is empty for the video track heartbeats, or when live transcription is turned off.
         */
        transcriptionLanguage?: string;
        /**
         * This value is "On" for audio track heartbeats if live transcription is turned on, otherwise you will see an empty string. This state is only applicable to track type of "audio" for Live transcription. All other tracks will have an empty value.
         */
        transcriptionState?: string;
        /**
         * If expected and actual bitrates differ by more than allowed limit in last 20 seconds.
         */
        unexpectedBitrate?: boolean;
    }

    /**
     * The live event track event.
     */
    export interface LiveEventTrackEventResponse {
        /**
         * Event data.
         */
        data?: LiveEventTrackEventDataResponse;
        /**
         * The time event raised.
         */
        eventTime?: string;
        /**
         * The type of the track event.
         */
        eventType?: string;
    }

    /**
     * The live event track status.
     */
    export interface LiveEventTrackStatusResponse {
        /**
         * Expected bitrate for this track.
         */
        expectedBitrate?: number;
        /**
         * Average incoming bitrate for last 20 seconds when live event is running.
         */
        incomingBitrate?: number;
        /**
         * Current ingest drift value in seconds for last 1 minute.
         */
        ingestDrift?: string;
        /**
         * Total number of timed metadata request received.
         */
        requestReceived?: number;
        /**
         * Total number of successful timed metadata request received.
         */
        requestSucceeded?: number;
        /**
         * Track Id.
         */
        trackId?: string;
    }

    /**
     * Describes the transcription tracks in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
     */
    export interface LiveEventTranscriptionResponse {
        /**
         * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
         */
        inputTrackSelection?: LiveEventInputTrackSelectionResponse[];
        /**
         * Specifies the language (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature and the list of supported languages.
         */
        language?: string;
        /**
         * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
         */
        outputTranscriptionTrack?: LiveEventOutputTranscriptionTrackResponse;
    }

    /**
     * Streaming endpoint access control definition.
     */
    export interface StreamingEndpointAccessControlResponse {
        /**
         * The access control of Akamai
         */
        akamai?: AkamaiAccessControlResponse;
        /**
         * The IP access control of the streaming endpoint.
         */
        ip?: IPAccessControlResponse;
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
