import * as pulumi from "@pulumi/pulumi";
    /**
     * Volume details using the backup policy
     */
    export interface VolumeBackupsResponse {
        /**
         * Total count of backups for volume
         */
        backupsCount?: number;
        /**
         * Policy enabled
         */
        policyEnabled?: boolean;
        /**
         * Volume name
         */
        volumeName?: string;
    }
