import * as pulumi from "@pulumi/pulumi";
    /**
     * Volume details using the backup policy
     */
    export interface VolumeBackupsArgs {
        /**
         * Total count of backups for volume
         */
        backupsCount?: pulumi.Input<number>;
        /**
         * Policy enabled
         */
        policyEnabled?: pulumi.Input<boolean>;
        /**
         * Volume name
         */
        volumeName?: pulumi.Input<string>;
    }
