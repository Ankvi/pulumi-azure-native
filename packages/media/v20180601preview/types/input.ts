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
         * The exact time the authentication key.
         */
        expiration?: pulumi.Input<string>;
        /**
         * identifier of the key
         */
        identifier?: pulumi.Input<string>;
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
         * The encoding type for Live Event.
         */
        encodingType?: pulumi.Input<enums.LiveEventEncodingType>;
        /**
         * The encoding preset name.
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
         * The access token.
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
         * The streaming protocol for the Live Event.
         */
        streamingProtocol: pulumi.Input<enums.LiveEventInputProtocol>;
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
         * An Alternative Media Identifier associated with the preview url.  This identifier can be used to distinguish the preview of different live events for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
         */
        alternativeMediaId?: pulumi.Input<string>;
        /**
         * The endpoints for preview.
         */
        endpoints?: pulumi.Input<pulumi.Input<LiveEventEndpointArgs>[]>;
        /**
         * The preview locator Guid.
         */
        previewLocator?: pulumi.Input<string>;
        /**
         * The name of streaming policy used for LiveEvent preview
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
     * StreamingEndpoint access control definition.
     */
    export interface StreamingEndpointAccessControlArgs {
        /**
         * The access control of Akamai
         */
        akamai?: pulumi.Input<AkamaiAccessControlArgs>;
        /**
         * The IP access control of the StreamingEndpoint.
         */
        ip?: pulumi.Input<IPAccessControlArgs>;
    }
