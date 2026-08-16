import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An A record.
 */
export interface ARecordArgs {
    /**
     * The IPv4 address of this A record.
     */
    ipv4Address?: pulumi.Input<string | undefined>;
}

/**
 * An AAAA record.
 */
export interface AaaaRecordArgs {
    /**
     * The IPv6 address of this AAAA record.
     */
    ipv6Address?: pulumi.Input<string | undefined>;
}

/**
 * A CNAME record.
 */
export interface CnameRecordArgs {
    /**
     * The canonical name for this CNAME record.
     */
    cname?: pulumi.Input<string | undefined>;
}

/**
 * An MX record.
 */
export interface MxRecordArgs {
    /**
     * The domain name of the mail host for this MX record.
     */
    exchange?: pulumi.Input<string | undefined>;
    /**
     * The preference value for this MX record.
     */
    preference?: pulumi.Input<number | undefined>;
}

/**
 * A PTR record.
 */
export interface PtrRecordArgs {
    /**
     * The PTR target domain name for this PTR record.
     */
    ptrdname?: pulumi.Input<string | undefined>;
}

/**
 * An SOA record.
 */
export interface SoaRecordArgs {
    /**
     * The email contact for this SOA record.
     */
    email?: pulumi.Input<string | undefined>;
    /**
     * The expire time for this SOA record.
     */
    expireTime?: pulumi.Input<number | undefined>;
    /**
     * The domain name of the authoritative name server for this SOA record.
     */
    host?: pulumi.Input<string | undefined>;
    /**
     * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
     */
    minimumTtl?: pulumi.Input<number | undefined>;
    /**
     * The refresh value for this SOA record.
     */
    refreshTime?: pulumi.Input<number | undefined>;
    /**
     * The retry time for this SOA record.
     */
    retryTime?: pulumi.Input<number | undefined>;
    /**
     * The serial number for this SOA record.
     */
    serialNumber?: pulumi.Input<number | undefined>;
}

/**
 * An SRV record.
 */
export interface SrvRecordArgs {
    /**
     * The port value for this SRV record.
     */
    port?: pulumi.Input<number | undefined>;
    /**
     * The priority value for this SRV record.
     */
    priority?: pulumi.Input<number | undefined>;
    /**
     * The target domain name for this SRV record.
     */
    target?: pulumi.Input<string | undefined>;
    /**
     * The weight value for this SRV record.
     */
    weight?: pulumi.Input<number | undefined>;
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
    id?: pulumi.Input<string | undefined>;
}

/**
 * A TXT record.
 */
export interface TxtRecordArgs {
    /**
     * The text value of this TXT record.
     */
    value?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
