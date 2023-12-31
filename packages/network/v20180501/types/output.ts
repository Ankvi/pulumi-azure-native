import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An A record.
     */
    export interface ARecordResponse {
        /**
         * The IPv4 address of this A record.
         */
        ipv4Address?: string;
    }

    /**
     * An AAAA record.
     */
    export interface AaaaRecordResponse {
        /**
         * The IPv6 address of this AAAA record.
         */
        ipv6Address?: string;
    }

    /**
     * A CAA record.
     */
    export interface CaaRecordResponse {
        /**
         * The flags for this CAA record as an integer between 0 and 255.
         */
        flags?: number;
        /**
         * The tag for this CAA record.
         */
        tag?: string;
        /**
         * The value for this CAA record.
         */
        value?: string;
    }

    /**
     * A CNAME record.
     */
    export interface CnameRecordResponse {
        /**
         * The canonical name for this CNAME record.
         */
        cname?: string;
    }

    /**
     * Represents a single Azure resource and its referencing DNS records.
     */
    export interface DnsResourceReferenceResponse {
        /**
         * A list of dns Records 
         */
        dnsResources?: SubResourceResponse[];
        /**
         * A reference to an azure resource from where the dns resource value is taken.
         */
        targetResource?: SubResourceResponse;
    }

    /**
     * An MX record.
     */
    export interface MxRecordResponse {
        /**
         * The domain name of the mail host for this MX record.
         */
        exchange?: string;
        /**
         * The preference value for this MX record.
         */
        preference?: number;
    }

    /**
     * An NS record.
     */
    export interface NsRecordResponse {
        /**
         * The name server name for this NS record.
         */
        nsdname?: string;
    }

    /**
     * A PTR record.
     */
    export interface PtrRecordResponse {
        /**
         * The PTR target domain name for this PTR record.
         */
        ptrdname?: string;
    }

    /**
     * An SOA record.
     */
    export interface SoaRecordResponse {
        /**
         * The email contact for this SOA record.
         */
        email?: string;
        /**
         * The expire time for this SOA record.
         */
        expireTime?: number;
        /**
         * The domain name of the authoritative name server for this SOA record.
         */
        host?: string;
        /**
         * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
         */
        minimumTtl?: number;
        /**
         * The refresh value for this SOA record.
         */
        refreshTime?: number;
        /**
         * The retry time for this SOA record.
         */
        retryTime?: number;
        /**
         * The serial number for this SOA record.
         */
        serialNumber?: number;
    }

    /**
     * An SRV record.
     */
    export interface SrvRecordResponse {
        /**
         * The port value for this SRV record.
         */
        port?: number;
        /**
         * The priority value for this SRV record.
         */
        priority?: number;
        /**
         * The target domain name for this SRV record.
         */
        target?: string;
        /**
         * The weight value for this SRV record.
         */
        weight?: number;
    }

    /**
     * A reference to a another resource
     */
    export interface SubResourceResponse {
        /**
         * Resource Id.
         */
        id?: string;
    }

    /**
     * A TXT record.
     */
    export interface TxtRecordResponse {
        /**
         * The text value of this TXT record.
         */
        value?: string[];
    }
