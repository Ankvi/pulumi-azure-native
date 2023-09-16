import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace communication {
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

    export namespace v20220701preview {
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
            dKIM?: v20220701preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20220701preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20220701preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20220701preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20220701preview.DnsRecordResponse;
        }

        /**
         * List of VerificationStatusRecord
         */
        export interface DomainPropertiesResponseVerificationStates {
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM?: v20220701preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20220701preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20220701preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20220701preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20220701preview.VerificationStatusRecordResponse;
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

    }

    export namespace v20230331 {
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
            dKIM?: v20230331.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20230331.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20230331.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20230331.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20230331.DnsRecordResponse;
        }

        /**
         * List of VerificationStatusRecord
         */
        export interface DomainPropertiesResponseVerificationStates {
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM?: v20230331.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20230331.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20230331.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20230331.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20230331.VerificationStatusRecordResponse;
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

    }

    export namespace v20230401preview {
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
            dKIM?: v20230401preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20230401preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20230401preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20230401preview.DnsRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20230401preview.DnsRecordResponse;
        }

        /**
         * List of VerificationStatusRecord
         */
        export interface DomainPropertiesResponseVerificationStates {
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM?: v20230401preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dKIM2?: v20230401preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            dMARC?: v20230401preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            domain?: v20230401preview.VerificationStatusRecordResponse;
            /**
             * A class that represents a VerificationStatus record.
             */
            sPF?: v20230401preview.VerificationStatusRecordResponse;
        }

        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            principalId: string;
            /**
             * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: string;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: {[key: string]: v20230401preview.UserAssignedIdentityResponse};
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
         * User assigned identity properties
         */
        export interface UserAssignedIdentityResponse {
            /**
             * The client ID of the assigned identity.
             */
            clientId: string;
            /**
             * The principal ID of the assigned identity.
             */
            principalId: string;
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

    }
}
