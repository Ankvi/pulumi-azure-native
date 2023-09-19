import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A class that represents a VerificationStatus record.
     */
    export interface DnsRecordResponse {
        /**
         * Name of the DNS record.
         */
        name: string;
        /**
         * Represents an expiry time in seconds to represent how long this entry can be cached by the resolver, default = 3600sec.
         */
        ttl: number;
        /**
         * Type of the DNS record. Example: TXT
         */
        type: string;
        /**
         * Value of the DNS record.
         */
        value: string;
    }

    /**
     * List of DnsRecord
     */
    export interface DomainPropertiesResponseVerificationRecords {
        /**
         * A class that represents a VerificationStatus record.
         */
        dKIM?: DnsRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        dKIM2?: DnsRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        dMARC?: DnsRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        domain?: DnsRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        sPF?: DnsRecordResponse;
    }

    /**
     * List of VerificationStatusRecord
     */
    export interface DomainPropertiesResponseVerificationStates {
        /**
         * A class that represents a VerificationStatus record.
         */
        dKIM?: VerificationStatusRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        dKIM2?: VerificationStatusRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        dMARC?: VerificationStatusRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        domain?: VerificationStatusRecordResponse;
        /**
         * A class that represents a VerificationStatus record.
         */
        sPF?: VerificationStatusRecordResponse;
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
     * A class that represents a VerificationStatus record.
     */
    export interface VerificationStatusRecordResponse {
        /**
         * Error code. This property will only be present if the status is UnableToVerify.
         */
        errorCode: string;
        /**
         * Status of the verification operation.
         */
        status: string;
    }
