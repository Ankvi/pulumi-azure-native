import * as pulumi from "@pulumi/pulumi";
    /**
     * Definition of hybrid runbook worker Legacy.
     */
    export interface HybridRunbookWorkerLegacyResponse {
        /**
         * Gets or sets the assigned machine IP address.
         */
        ip?: string;
        /**
         * Last Heartbeat from the Worker
         */
        lastSeenDateTime?: string;
        /**
         * Gets or sets the worker machine name.
         */
        name?: string;
        /**
         * Gets or sets the registration time of the worker machine.
         */
        registrationTime?: string;
    }

    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyResponse {
        /**
         * Gets or sets the name of the credential.
         */
        name?: string;
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
