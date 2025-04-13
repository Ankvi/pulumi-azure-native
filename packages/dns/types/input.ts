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
 * A CAA record.
 */
export interface CaaRecordArgs {
    /**
     * The flags for this CAA record as an integer between 0 and 255.
     */
    flags?: pulumi.Input<number>;
    /**
     * The tag for this CAA record.
     */
    tag?: pulumi.Input<string>;
    /**
     * The value for this CAA record.
     */
    value?: pulumi.Input<string>;
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
 * A digest.
 */
export interface DigestArgs {
    /**
     * The digest algorithm type represents the standard digest algorithm number used to construct the digest. See: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
     */
    algorithmType?: pulumi.Input<number>;
    /**
     * The digest value is a cryptographic hash value of the referenced DNSKEY Resource Record.
     */
    value?: pulumi.Input<string>;
}

/**
 * A DS record. For more information about the DS record format, see RFC 4034: https://www.rfc-editor.org/rfc/rfc4034
 */
export interface DsRecordArgs {
    /**
     * The security algorithm type represents the standard security algorithm number of the DNSKEY Resource Record. See: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml
     */
    algorithm?: pulumi.Input<number>;
    /**
     * The digest entity.
     */
    digest?: pulumi.Input<DigestArgs>;
    /**
     * The key tag value is used to determine which DNSKEY Resource Record is used for signature verification.
     */
    keyTag?: pulumi.Input<number>;
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
 * A NAPTR record. For more information about the NAPTR record format, see RFC 3403: https://www.rfc-editor.org/rfc/rfc3403
 */
export interface NaptrRecordArgs {
    /**
     * The flags specific to DDDS applications. Values currently defined in RFC 3404 are uppercase and lowercase letters "A", "P", "S", and "U", and the empty string, "". Enclose Flags in quotation marks.
     */
    flags?: pulumi.Input<string>;
    /**
     * The order in which the NAPTR records MUST be processed in order to accurately represent the ordered list of rules. The ordering is from lowest to highest. Valid values: 0-65535.
     */
    order?: pulumi.Input<number>;
    /**
     * The preference specifies the order in which NAPTR records with equal 'order' values should be processed, low numbers being processed before high numbers. Valid values: 0-65535.
     */
    preference?: pulumi.Input<number>;
    /**
     * The regular expression that the DDDS application uses to convert an input value into an output value. For example: an IP phone system might use a regular expression to convert a phone number that is entered by a user into a SIP URI. Enclose the regular expression in quotation marks. Specify either a value for 'regexp' or a value for 'replacement'.
     */
    regexp?: pulumi.Input<string>;
    /**
     * The replacement is a fully qualified domain name (FQDN) of the next domain name that you want the DDDS application to submit a DNS query for. The DDDS application replaces the input value with the value specified for replacement. Specify either a value for 'regexp' or a value for 'replacement'. If you specify a value for 'regexp', specify a dot (.) for 'replacement'.
     */
    replacement?: pulumi.Input<string>;
    /**
     * The services specific to DDDS applications. Enclose Services in quotation marks.
     */
    services?: pulumi.Input<string>;
}

/**
 * An NS record.
 */
export interface NsRecordArgs {
    /**
     * The name server name for this NS record.
     */
    nsdname?: pulumi.Input<string>;
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
 * A reference to a another resource
 */
export interface SubResource {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id?: string;
}

/**
 * A reference to a another resource
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
 * A TLSA record. For more information about the TLSA record format, see RFC 6698: https://www.rfc-editor.org/rfc/rfc6698
 */
export interface TlsaRecordArgs {
    /**
     * This specifies the certificate association data to be matched.
     */
    certAssociationData?: pulumi.Input<string>;
    /**
     * The matching type specifies how the certificate association is presented.
     */
    matchingType?: pulumi.Input<number>;
    /**
     * The selector specifies which part of the TLS certificate presented by the server will be matched against the association data.
     */
    selector?: pulumi.Input<number>;
    /**
     * The usage specifies the provided association that will be used to match the certificate presented in the TLS handshake.
     */
    usage?: pulumi.Input<number>;
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
