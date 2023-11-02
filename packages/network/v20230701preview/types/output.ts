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
     * The delegation signer information.
     */
    export interface DelegationSignerInfoResponse {
        /**
         * The digest algorithm type represents the standard digest algorithm number used to construct the digest. See: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
         */
        digestAlgorithmType: number;
        /**
         * The digest value is a cryptographic hash value of the referenced DNSKEY Resource Record.
         */
        digestValue: string;
        /**
         * The record represents a delegation signer (DS) record.
         */
        record: string;
    }

    /**
     * A digest.
     */
    export interface DigestResponse {
        /**
         * The digest algorithm type represents the standard digest algorithm number used to construct the digest. See: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
         */
        algorithmType?: number;
        /**
         * The digest value is a cryptographic hash value of the referenced DNSKEY Resource Record.
         */
        value?: string;
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
     * A DS record. For more information about the DS record format, see RFC 4034: https://www.rfc-editor.org/rfc/rfc4034
     */
    export interface DsRecordResponse {
        /**
         * The security algorithm type represents the standard security algorithm number of the DNSKEY Resource Record. See: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml
         */
        algorithm?: number;
        /**
         * The digest entity.
         */
        digest?: DigestResponse;
        /**
         * The key tag value is used to determine which DNSKEY Resource Record is used for signature verification.
         */
        keyTag?: number;
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
     * A NAPTR record. For more information about the NAPTR record format, see RFC 3403: https://www.rfc-editor.org/rfc/rfc3403
     */
    export interface NaptrRecordResponse {
        /**
         * The flags specific to DDDS applications. Values currently defined in RFC 3404 are uppercase and lowercase letters "A", "P", "S", and "U", and the empty string, "". Enclose Flags in quotation marks.
         */
        flags?: string;
        /**
         * The order in which the NAPTR records MUST be processed in order to accurately represent the ordered list of rules. The ordering is from lowest to highest. Valid values: 0-65535.
         */
        order?: number;
        /**
         * The preference specifies the order in which NAPTR records with equal 'order' values should be processed, low numbers being processed before high numbers. Valid values: 0-65535.
         */
        preference?: number;
        /**
         * The regular expression that the DDDS application uses to convert an input value into an output value. For example: an IP phone system might use a regular expression to convert a phone number that is entered by a user into a SIP URI. Enclose the regular expression in quotation marks. Specify either a value for 'regexp' or a value for 'replacement'.
         */
        regexp?: string;
        /**
         * The replacement is a fully qualified domain name (FQDN) of the next domain name that you want the DDDS application to submit a DNS query for. The DDDS application replaces the input value with the value specified for replacement. Specify either a value for 'regexp' or a value for 'replacement'. If you specify a value for 'regexp', specify a dot (.) for 'replacement'.
         */
        replacement?: string;
        /**
         * The services specific to DDDS applications. Enclose Services in quotation marks.
         */
        services?: string;
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

    export interface PerimeterBasedAccessRuleResponse {
        /**
         * NSP id in the ARM id format.
         */
        id: string;
        /**
         * Location of the NSP supplied.
         */
        location: string;
        /**
         * Resource guid of the NSP supplied.
         */
        perimeterGuid: string;
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
     * Represents the signing key.
     */
    export interface SigningKeyResponse {
        /**
         * The delegation signer information.
         */
        delegationSignerInfo: DelegationSignerInfoResponse[];
        /**
         * The flags specifies how the key is used.
         */
        flags: number;
        /**
         * The key tag value of the DNSKEY Resource Record.
         */
        keyTag: number;
        /**
         * The protocol value. The value is always 3.
         */
        protocol: number;
        /**
         * The public key, represented as a Base64 encoding.
         */
        publicKey: string;
        /**
         * The security algorithm type represents the standard security algorithm number of the DNSKEY Resource Record. See: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml
         */
        securityAlgorithmType: number;
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

    export interface SubscriptionIdResponse {
        /**
         * Subscription id in the ARM id format.
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
     * A TLSA record. For more information about the TLSA record format, see RFC 6698: https://www.rfc-editor.org/rfc/rfc6698
     */
    export interface TlsaRecordResponse {
        /**
         * This specifies the certificate association data to be matched.
         */
        certAssociationData?: string;
        /**
         * The matching type specifies how the certificate association is presented.
         */
        matchingType?: number;
        /**
         * The selector specifies which part of the TLS certificate presented by the server will be matched against the association data.
         */
        selector?: number;
        /**
         * The usage specifies the provided association that will be used to match the certificate presented in the TLS handshake.
         */
        usage?: number;
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
