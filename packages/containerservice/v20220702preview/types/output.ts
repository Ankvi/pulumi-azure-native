import * as pulumi from "@pulumi/pulumi";
    /**
     * The credential result response.
     */
    export interface FleetCredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * The FleetHubProfile configures the fleet hub.
     */
    export interface FleetHubProfileResponse {
        /**
         * DNS prefix used to create the FQDN for the Fleet hub.
         */
        dnsPrefix?: string;
        /**
         * The FQDN of the Fleet hub.
         */
        fqdn: string;
        /**
         * The Kubernetes version of the Fleet hub.
         */
        kubernetesVersion: string;
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
