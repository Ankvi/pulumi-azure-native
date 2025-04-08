import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An A record.
 */
export interface ARecordArgs {
    /**
     * The IPv4 address of this A record.
     */
    ipv4Address?: pulumi.Input<string>;
}

/**
 * An AAAA record.
 */
export interface AaaaRecordArgs {
    /**
     * The IPv6 address of this AAAA record.
     */
    ipv6Address?: pulumi.Input<string>;
}

/**
 * A CNAME record.
 */
export interface CnameRecordArgs {
    /**
     * The canonical name for this CNAME record.
     */
    cname?: pulumi.Input<string>;
}

/**
 * An MX record.
 */
export interface MxRecordArgs {
    /**
     * The domain name of the mail host for this MX record.
     */
    exchange?: pulumi.Input<string>;
    /**
     * The preference value for this MX record.
     */
    preference?: pulumi.Input<number>;
}

/**
 * A PTR record.
 */
export interface PtrRecordArgs {
    /**
     * The PTR target domain name for this PTR record.
     */
    ptrdname?: pulumi.Input<string>;
}

/**
 * An SOA record.
 */
export interface SoaRecordArgs {
    /**
     * The email contact for this SOA record.
     */
    email?: pulumi.Input<string>;
    /**
     * The expire time for this SOA record.
     */
    expireTime?: pulumi.Input<number>;
    /**
     * The domain name of the authoritative name server for this SOA record.
     */
    host?: pulumi.Input<string>;
    /**
     * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
     */
    minimumTtl?: pulumi.Input<number>;
    /**
     * The refresh value for this SOA record.
     */
    refreshTime?: pulumi.Input<number>;
    /**
     * The retry time for this SOA record.
     */
    retryTime?: pulumi.Input<number>;
    /**
     * The serial number for this SOA record.
     */
    serialNumber?: pulumi.Input<number>;
}

/**
 * An SRV record.
 */
export interface SrvRecordArgs {
    /**
     * The port value for this SRV record.
     */
    port?: pulumi.Input<number>;
    /**
     * The priority value for this SRV record.
     */
    priority?: pulumi.Input<number>;
    /**
     * The target domain name for this SRV record.
     */
    target?: pulumi.Input<string>;
    /**
     * The weight value for this SRV record.
     */
    weight?: pulumi.Input<number>;
}

/**
 * Reference to another subresource.
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

/**
 * A TXT record.
 */
export interface TxtRecordArgs {
    /**
     * The text value of this TXT record.
     */
    value?: pulumi.Input<pulumi.Input<string>[]>;
}
