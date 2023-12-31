import * as pulumi from "@pulumi/pulumi";
    /**
     * Specifies the disk information for the HANA instance
     */
    export interface DiskArgs {
        /**
         * Specifies the size of an empty data disk in gigabytes.
         */
        diskSizeGB?: pulumi.Input<number>;
        /**
         * The disk name.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Specifies the IP address of the network interface.
     */
    export interface IpAddressArgs {
        /**
         * Specifies the IP address of the network interface.
         */
        ipAddress?: pulumi.Input<string>;
    }

    /**
     * Specifies the network settings for the HANA instance disks.
     */
    export interface NetworkProfileArgs {
        /**
         * Specifies the network interfaces for the HANA instance.
         */
        networkInterfaces?: pulumi.Input<pulumi.Input<IpAddressArgs>[]>;
    }

    /**
     * Specifies the operating system settings for the HANA instance.
     */
    export interface OSProfileArgs {
        /**
         * Specifies the host OS name of the HANA instance.
         */
        computerName?: pulumi.Input<string>;
        /**
         * Specifies the SSH public key used to access the operating system.
         */
        sshPublicKey?: pulumi.Input<string>;
    }

    /**
     * Specifies information related to a SAP system ID
     */
    export interface SAPSystemIDArgs {
        /**
         * Group ID of the HANA database user.
         */
        gid?: pulumi.Input<string>;
        /**
         * SAP system ID as database identifier.
         */
        sid?: pulumi.Input<string>;
        /**
         * User ID of the HANA database user.
         */
        uid?: pulumi.Input<string>;
        /**
         * Name of the HANA database user.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Specifies the storage settings for the HANA instance disks.
     */
    export interface StorageProfileArgs {
        /**
         * Specifies information related to SAP system IDs for the hana instance.
         */
        hanaSids?: pulumi.Input<pulumi.Input<SAPSystemIDArgs>[]>;
        /**
         * Specifies information about the operating system disk used by the hana instance.
         */
        osDisks?: pulumi.Input<pulumi.Input<DiskArgs>[]>;
    }
