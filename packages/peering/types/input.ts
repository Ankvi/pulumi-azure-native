import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace peering {
    /**
     * The properties that define a BGP session.
     */
    export interface BgpSessionArgs {
        /**
         * The maximum number of prefixes advertised over the IPv4 session.
         */
        maxPrefixesAdvertisedV4?: pulumi.Input<number>;
        /**
         * The maximum number of prefixes advertised over the IPv6 session.
         */
        maxPrefixesAdvertisedV6?: pulumi.Input<number>;
        /**
         * The MD5 authentication key of the session.
         */
        md5AuthenticationKey?: pulumi.Input<string>;
        /**
         * The IPv4 session address on Microsoft's end.
         */
        microsoftSessionIPv4Address?: pulumi.Input<string>;
        /**
         * The IPv6 session address on Microsoft's end.
         */
        microsoftSessionIPv6Address?: pulumi.Input<string>;
        /**
         * The IPv4 session address on peer's end.
         */
        peerSessionIPv4Address?: pulumi.Input<string>;
        /**
         * The IPv6 session address on peer's end.
         */
        peerSessionIPv6Address?: pulumi.Input<string>;
        /**
         * The IPv4 prefix that contains both ends' IPv4 addresses.
         */
        sessionPrefixV4?: pulumi.Input<string>;
        /**
         * The IPv6 prefix that contains both ends' IPv6 addresses.
         */
        sessionPrefixV6?: pulumi.Input<string>;
    }

    /**
     * The contact detail class.
     */
    export interface ContactDetailArgs {
        /**
         * The e-mail address of the contact.
         */
        email?: pulumi.Input<string>;
        /**
         * The phone number of the contact.
         */
        phone?: pulumi.Input<string>;
        /**
         * The role of the contact.
         */
        role?: pulumi.Input<string | enums.Role>;
    }

    /**
     * The properties that define a direct connection.
     */
    export interface DirectConnectionArgs {
        /**
         * The bandwidth of the connection.
         */
        bandwidthInMbps?: pulumi.Input<number>;
        /**
         * The BGP session associated with the connection.
         */
        bgpSession?: pulumi.Input<BgpSessionArgs>;
        /**
         * The unique identifier (GUID) for the connection.
         */
        connectionIdentifier?: pulumi.Input<string>;
        /**
         * The PeeringDB.com ID of the facility at which the connection has to be set up.
         */
        peeringDBFacilityId?: pulumi.Input<number>;
        /**
         * The field indicating if Microsoft provides session ip addresses.
         */
        sessionAddressProvider?: pulumi.Input<string | enums.SessionAddressProvider>;
        /**
         * The flag that indicates whether or not the connection is used for peering service.
         */
        useForPeeringService?: pulumi.Input<boolean>;
    }

    /**
     * The properties that define an exchange connection.
     */
    export interface ExchangeConnectionArgs {
        /**
         * The BGP session associated with the connection.
         */
        bgpSession?: pulumi.Input<BgpSessionArgs>;
        /**
         * The unique identifier (GUID) for the connection.
         */
        connectionIdentifier?: pulumi.Input<string>;
        /**
         * The PeeringDB.com ID of the facility at which the connection has to be set up.
         */
        peeringDBFacilityId?: pulumi.Input<number>;
    }

    /**
     * The properties that define a direct peering.
     */
    export interface PeeringPropertiesDirectArgs {
        /**
         * The set of connections that constitute a direct peering.
         */
        connections?: pulumi.Input<pulumi.Input<DirectConnectionArgs>[]>;
        /**
         * The type of direct peering.
         */
        directPeeringType?: pulumi.Input<string | enums.DirectPeeringType>;
        /**
         * The reference of the peer ASN.
         */
        peerAsn?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * The properties that define an exchange peering.
     */
    export interface PeeringPropertiesExchangeArgs {
        /**
         * The set of connections that constitute an exchange peering.
         */
        connections?: pulumi.Input<pulumi.Input<ExchangeConnectionArgs>[]>;
        /**
         * The reference of the peer ASN.
         */
        peerAsn?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * The SKU that defines the type of the peering service.
     */
    export interface PeeringServiceSkuArgs {
        /**
         * The name of the peering service SKU.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The SKU that defines the tier and kind of the peering.
     */
    export interface PeeringSkuArgs {
        /**
         * The name of the peering SKU.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The sub resource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    export namespace v20210101 {
        /**
         * The contact detail class.
         */
        export interface ContactDetailArgs {
            /**
             * The e-mail address of the contact.
             */
            email?: pulumi.Input<string>;
            /**
             * The phone number of the contact.
             */
            phone?: pulumi.Input<string>;
            /**
             * The role of the contact.
             */
            role?: pulumi.Input<string | enums.v20210101.Role>;
        }

    }

    export namespace v20221001 {
        /**
         * The properties that define a BGP session.
         */
        export interface BgpSessionArgs {
            /**
             * The maximum number of prefixes advertised over the IPv4 session.
             */
            maxPrefixesAdvertisedV4?: pulumi.Input<number>;
            /**
             * The maximum number of prefixes advertised over the IPv6 session.
             */
            maxPrefixesAdvertisedV6?: pulumi.Input<number>;
            /**
             * The MD5 authentication key of the session.
             */
            md5AuthenticationKey?: pulumi.Input<string>;
            /**
             * The IPv4 session address on Microsoft's end.
             */
            microsoftSessionIPv4Address?: pulumi.Input<string>;
            /**
             * The IPv6 session address on Microsoft's end.
             */
            microsoftSessionIPv6Address?: pulumi.Input<string>;
            /**
             * The IPv4 session address on peer's end.
             */
            peerSessionIPv4Address?: pulumi.Input<string>;
            /**
             * The IPv6 session address on peer's end.
             */
            peerSessionIPv6Address?: pulumi.Input<string>;
            /**
             * The IPv4 prefix that contains both ends' IPv4 addresses.
             */
            sessionPrefixV4?: pulumi.Input<string>;
            /**
             * The IPv6 prefix that contains both ends' IPv6 addresses.
             */
            sessionPrefixV6?: pulumi.Input<string>;
        }

        /**
         * The contact detail class.
         */
        export interface ContactDetailArgs {
            /**
             * The e-mail address of the contact.
             */
            email?: pulumi.Input<string>;
            /**
             * The phone number of the contact.
             */
            phone?: pulumi.Input<string>;
            /**
             * The role of the contact.
             */
            role?: pulumi.Input<string | enums.v20221001.Role>;
        }

        /**
         * The properties that define a direct connection.
         */
        export interface DirectConnectionArgs {
            /**
             * The bandwidth of the connection.
             */
            bandwidthInMbps?: pulumi.Input<number>;
            /**
             * The BGP session associated with the connection.
             */
            bgpSession?: pulumi.Input<v20221001.BgpSessionArgs>;
            /**
             * The unique identifier (GUID) for the connection.
             */
            connectionIdentifier?: pulumi.Input<string>;
            /**
             * The PeeringDB.com ID of the facility at which the connection has to be set up.
             */
            peeringDBFacilityId?: pulumi.Input<number>;
            /**
             * The field indicating if Microsoft provides session ip addresses.
             */
            sessionAddressProvider?: pulumi.Input<string | enums.v20221001.SessionAddressProvider>;
            /**
             * The flag that indicates whether or not the connection is used for peering service.
             */
            useForPeeringService?: pulumi.Input<boolean>;
        }

        /**
         * The properties that define an exchange connection.
         */
        export interface ExchangeConnectionArgs {
            /**
             * The BGP session associated with the connection.
             */
            bgpSession?: pulumi.Input<v20221001.BgpSessionArgs>;
            /**
             * The unique identifier (GUID) for the connection.
             */
            connectionIdentifier?: pulumi.Input<string>;
            /**
             * The PeeringDB.com ID of the facility at which the connection has to be set up.
             */
            peeringDBFacilityId?: pulumi.Input<number>;
        }

        /**
         * The properties that define a direct peering.
         */
        export interface PeeringPropertiesDirectArgs {
            /**
             * The set of connections that constitute a direct peering.
             */
            connections?: pulumi.Input<pulumi.Input<v20221001.DirectConnectionArgs>[]>;
            /**
             * The type of direct peering.
             */
            directPeeringType?: pulumi.Input<string | enums.v20221001.DirectPeeringType>;
            /**
             * The reference of the peer ASN.
             */
            peerAsn?: pulumi.Input<v20221001.SubResourceArgs>;
        }

        /**
         * The properties that define an exchange peering.
         */
        export interface PeeringPropertiesExchangeArgs {
            /**
             * The set of connections that constitute an exchange peering.
             */
            connections?: pulumi.Input<pulumi.Input<v20221001.ExchangeConnectionArgs>[]>;
            /**
             * The reference of the peer ASN.
             */
            peerAsn?: pulumi.Input<v20221001.SubResourceArgs>;
        }

        /**
         * The SKU that defines the type of the peering service.
         */
        export interface PeeringServiceSkuArgs {
            /**
             * The name of the peering service SKU.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * The SKU that defines the tier and kind of the peering.
         */
        export interface PeeringSkuArgs {
            /**
             * The name of the peering SKU.
             */
            name?: pulumi.Input<string>;
        }

        /**
         * The sub resource.
         */
        export interface SubResourceArgs {
            /**
             * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
             * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
             * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
             * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
             */
            id?: pulumi.Input<string>;
        }

    }
}
