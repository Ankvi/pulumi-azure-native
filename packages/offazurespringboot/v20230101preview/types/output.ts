import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines the error.
     */
    export interface ErrorResponse {
        /**
         * The error code.
         */
        code?: string;
        /**
         * The error ID.
         */
        id?: number;
        /**
         * The detailed error message.
         */
        message?: string;
        /**
         * The error possible causes.
         */
        possibleCauses?: string;
        /**
         * The error recommended action
         */
        recommendedAction?: string;
        /**
         * The account ID used to login.
         */
        runAsAccountId?: string;
        /**
         * The error severity
         */
        severity?: string;
        /**
         * The summarized error message.
         */
        summaryMessage?: string;
        /**
         * Time when this error was last updated.
         */
        updatedTimeStamp?: string;
    }

    /**
     * The springbootservers resource definition.
     */
    export interface SpringbootserversPropertiesResponse {
        /**
         * The list of errors.
         */
        errors?: ErrorResponse[];
        /**
         * The alternative FQDN or IP addresses to discover for this server
         */
        fqdnAndIpAddressList?: string[];
        /**
         * The machine Id from ARM
         */
        machineArmId?: string;
        /**
         * Target server port for remote login
         */
        port?: number;
        /**
         * The resource provisioning state.
         */
        provisioningState?: string;
        /**
         * Server is the target server name or ip address to discover of SpringBootServer.
         */
        server: string;
        /**
         * The total number of spring boot apps been discovered
         */
        springBootApps?: number;
        /**
         * The total number of apps been discovered
         */
        totalApps?: number;
    }

    /**
     * The extended location definition.
     */
    export interface SpringbootsitesModelResponseExtendedLocation {
        /**
         * The extended location name.
         */
        name?: string;
        /**
         * The extended location type.
         */
        type?: string;
    }

    /**
     * The springbootsites resource definition.
     */
    export interface SpringbootsitesPropertiesResponse {
        /**
         * The master site ID from Azure Migrate.
         */
        masterSiteId?: string;
        /**
         * The migrate project ID from Azure Migrate.
         */
        migrateProjectId?: string;
        /**
         * The resource provisioning state.
         */
        provisioningState?: string;
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
