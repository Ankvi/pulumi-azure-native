import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of a hostname derived from a domain.
     */
    export interface HostNameResponse {
        /**
         * Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
         */
        azureResourceName?: string;
        /**
         * Type of the Azure resource the hostname is assigned to.
         */
        azureResourceType?: string;
        /**
         * Type of the DNS record.
         */
        customHostNameDnsRecordType?: string;
        /**
         * Type of the hostname.
         */
        hostNameType?: string;
        /**
         * Name of the hostname.
         */
        name?: string;
        /**
         * List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.
         */
        siteNames?: string[];
    }

    /**
     * Identifies an object.
     */
    export interface NameIdentifierResponse {
        /**
         * Name of the object.
         */
        name?: string;
    }

    /**
     * Legal agreement for a top level domain.
     */
    export interface TldLegalAgreementResponse {
        /**
         * Unique identifier for the agreement.
         */
        agreementKey: string;
        /**
         * Agreement details.
         */
        content: string;
        /**
         * Agreement title.
         */
        title: string;
        /**
         * URL where a copy of the agreement details is hosted.
         */
        url?: string;
    }
