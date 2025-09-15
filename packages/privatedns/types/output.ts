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
 * A CNAME record.
 */
export interface CnameRecordResponse {
    /**
     * The canonical name for this CNAME record.
     */
    cname?: string;
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
 * Reference to another subresource.
 */
export interface SubResourceResponse {
    /**
     * Resource ID.
     */
    id?: string;
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
 * A TXT record.
 */
export interface TxtRecordResponse {
    /**
     * The text value of this TXT record.
     */
    value?: string[];
}
