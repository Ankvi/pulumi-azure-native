import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the destination of connection monitor.
     */
    export interface ConnectionMonitorDestinationResponse {
        /**
         * Address of the connection monitor destination (IP or domain name).
         */
        address?: string;
        /**
         * The destination port used by connection monitor.
         */
        port?: number;
        /**
         * The ID of the resource used as the destination by connection monitor.
         */
        resourceId?: string;
    }

    /**
     * Describes the source of connection monitor.
     */
    export interface ConnectionMonitorSourceResponse {
        /**
         * The source port used by connection monitor.
         */
        port?: number;
        /**
         * The ID of the resource used as the source by connection monitor.
         */
        resourceId: string;
    }
