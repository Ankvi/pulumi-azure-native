import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Maintenance window of a server group.
     */
    export interface MaintenanceWindowArgs {
        /**
         * indicates whether custom window is enabled or disabled
         */
        customWindow?: pulumi.Input<string>;
        /**
         * day of week for maintenance window
         */
        dayOfWeek?: pulumi.Input<number>;
        /**
         * start hour for maintenance window
         */
        startHour?: pulumi.Input<number>;
        /**
         * start minute for maintenance window
         */
        startMinute?: pulumi.Input<number>;
    }

    /**
     * The delegated subnet arguments for a server group.
     */
    export interface ServerGroupPropertiesDelegatedSubnetArgumentsArgs {
        /**
         * delegated subnet arm resource id.
         */
        subnetArmResourceId?: pulumi.Input<string>;
    }

    /**
     * The private dns zone arguments for a server group.
     */
    export interface ServerGroupPropertiesPrivateDnsZoneArgumentsArgs {
        /**
         * private dns zone arm resource id.
         */
        privateDnsZoneArmResourceId?: pulumi.Input<string>;
    }

    /**
     * Represents a server role group.
     */
    export interface ServerRoleGroupArgs {
        /**
         * If high availability is enabled or not for the server.
         */
        enableHa?: pulumi.Input<boolean>;
        /**
         * The name of the server role group.
         */
        name?: pulumi.Input<string>;
        /**
         * The role of servers in the server role group.
         */
        role?: pulumi.Input<string | enums.ServerRole>;
        /**
         * The number of servers in the server role group.
         */
        serverCount?: pulumi.Input<number>;
        /**
         * The edition of a server (default: GeneralPurpose).
         */
        serverEdition?: pulumi.Input<string | enums.ServerEdition>;
        /**
         * The storage of a server in MB (max: 2097152 = 2TiB).
         */
        storageQuotaInMb?: pulumi.Input<number>;
        /**
         * The vCores count of a server (max: 64).
         */
        vCores?: pulumi.Input<number>;
    }
