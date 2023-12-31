import * as pulumi from "@pulumi/pulumi";
    /**
     * Specifies the disk information for the HANA instance
     */
    export interface DiskResponse {
        /**
         * Specifies the size of an empty data disk in gigabytes.
         */
        diskSizeGB?: number;
        /**
         * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
         */
        lun: number;
        /**
         * The disk name.
         */
        name?: string;
    }

    /**
     * Specifies the hardware settings for the HANA instance.
     */
    export interface HardwareProfileResponse {
        /**
         * Specifies the HANA instance SKU.
         */
        hanaInstanceSize: string;
        /**
         * Name of the hardware type (vendor and/or their product name)
         */
        hardwareType: string;
    }

    /**
     * Specifies the IP address of the network interface.
     */
    export interface IpAddressResponse {
        /**
         * Specifies the IP address of the network interface.
         */
        ipAddress?: string;
    }

    /**
     * Specifies the network settings for the HANA instance disks.
     */
    export interface NetworkProfileResponse {
        /**
         * Specifies the circuit id for connecting to express route.
         */
        circuitId: string;
        /**
         * Specifies the network interfaces for the HANA instance.
         */
        networkInterfaces?: IpAddressResponse[];
    }

    /**
     * Specifies the operating system settings for the HANA instance.
     */
    export interface OSProfileResponse {
        /**
         * Specifies the host OS name of the HANA instance.
         */
        computerName?: string;
        /**
         * This property allows you to specify the type of the OS.
         */
        osType: string;
        /**
         * Specifies the SSH public key used to access the operating system.
         */
        sshPublicKey?: string;
        /**
         * Specifies version of operating system.
         */
        version: string;
    }

    /**
     * Specifies information related to a SAP system ID
     */
    export interface SAPSystemIDResponse {
        /**
         * Group ID of the HANA database user.
         */
        gid?: string;
        /**
         * Percent of memory to allocate to this SID.
         */
        memoryAllocation: string;
        /**
         * SAP system ID as database identifier.
         */
        sid?: string;
        /**
         * User ID of the HANA database user.
         */
        uid?: string;
        /**
         * Name of the HANA database user.
         */
        username?: string;
    }

    /**
     * Specifies the storage settings for the HANA instance disks.
     */
    export interface StorageProfileResponse {
        /**
         * Specifies information related to SAP system IDs for the hana instance.
         */
        hanaSids?: SAPSystemIDResponse[];
        /**
         * IP Address to connect to storage.
         */
        nfsIpAddress: string;
        /**
         * Specifies information about the operating system disk used by the hana instance.
         */
        osDisks?: DiskResponse[];
    }
