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
         * The exact time the authentication key.
         */
        expiration?: string;
        /**
         * identifier of the key
         */
        identifier?: string;
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
         * The encoding type for Live Event.
         */
        encodingType?: string;
        /**
         * The encoding preset name.
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
     * The Live Event input.
     */
    export interface LiveEventInputResponse {
        /**
         * The access token.
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
         * The streaming protocol for the Live Event.
         */
        streamingProtocol: string;
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
         * An Alternative Media Identifier associated with the preview url.  This identifier can be used to distinguish the preview of different live events for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: string;
        /**
         * The endpoints for preview.
         */
        endpoints?: LiveEventEndpointResponse[];
        /**
         * The preview locator Guid.
         */
        previewLocator?: string;
        /**
         * The name of streaming policy used for LiveEvent preview
         */
        streamingPolicyName?: string;
    }

    /**
     * StreamingEndpoint access control definition.
     */
    export interface StreamingEndpointAccessControlResponse {
        /**
         * The access control of Akamai
         */
        akamai?: AkamaiAccessControlResponse;
        /**
         * The IP access control of the StreamingEndpoint.
         */
        ip?: IPAccessControlResponse;
    }
