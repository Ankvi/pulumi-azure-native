import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Maintenance window of a server group.
     */
    export interface MaintenanceWindowResponse {
        /**
         * indicates whether custom window is enabled or disabled
         */
        customWindow?: string;
        /**
         * day of week for maintenance window
         */
        dayOfWeek?: number;
        /**
         * start hour for maintenance window
         */
        startHour?: number;
        /**
         * start minute for maintenance window
         */
        startMinute?: number;
    }

    /**
     * The delegated subnet arguments for a server group.
     */
    export interface ServerGroupPropertiesResponseDelegatedSubnetArguments {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: string;
    }

    /**
     * The private dns zone arguments for a server group.
     */
    export interface ServerGroupPropertiesResponsePrivateDnsZoneArguments {
        /**
         * private dns zone arm resource id.
         */
        privateDnsZoneArmResourceId?: string;
    }

    /**
     * The name object for a server.
     */
    export interface ServerNameItemResponse {
        /**
         * The fully qualified domain name of a server.
         */
        fullyQualifiedDomainName: string;
        /**
         * The name of a server.
         */
        name?: string;
    }

    /**
     * Represents a server role group.
     */
    export interface ServerRoleGroupResponse {
        /**
         * If high availability is enabled or not for the server.
         */
        enableHa?: boolean;
        /**
         * If public IP is requested or not for a server.
         */
        enablePublicIp: boolean;
        /**
         * The name of the server role group.
         */
        name?: string;
        /**
         * The role of servers in the server role group.
         */
        role?: string;
        /**
         * The number of servers in the server role group.
         */
        serverCount?: number;
        /**
         * The edition of a server (default: GeneralPurpose).
         */
        serverEdition?: string;
        /**
         * The list of server names in the server role group.
         */
        serverNames: ServerNameItemResponse[];
        /**
         * The storage of a server in MB (max: 2097152 = 2TiB).
         */
        storageQuotaInMb?: number;
        /**
         * The vCores count of a server (max: 64).
         */
        vCores?: number;
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
