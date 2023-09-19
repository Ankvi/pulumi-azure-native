import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access Control List (ACL) for an iSCSI target portal group
     */
    export interface AclArgs {
        /**
         * iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
         */
        initiatorIqn: pulumi.Input<string>;
        /**
         * List of LUN names mapped to the ACL.
         */
        mappedLuns: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Password for Challenge Handshake Authentication Protocol (CHAP) authentication.
         */
        password: pulumi.Input<string>;
        /**
         * Username for Challenge Handshake Authentication Protocol (CHAP) authentication.
         */
        username: pulumi.Input<string>;
    }

    /**
     * Attributes of a iSCSI target portal group.
     */
    export interface AttributesArgs {
        /**
         * Indicates whether or not authentication is enabled on the ACL.
         */
        authentication: pulumi.Input<boolean>;
        /**
         * Indicates whether or not write protect is enabled on the LUNs.
         */
        prodModeWriteProtect: pulumi.Input<boolean>;
    }

    /**
     * Azure Managed Disk to attach to the Disk pool.
     */
    export interface DiskArgs {
        /**
         * Unique Azure Resource ID of the Managed Disk.
         */
        id: pulumi.Input<string>;
    }

    /**
     * LUN to expose the Azure Managed Disk.
     */
    export interface IscsiLunArgs {
        /**
         * Azure Resource ID of the Managed Disk.
         */
        managedDiskAzureResourceId: pulumi.Input<string>;
        /**
         * User defined name for iSCSI LUN; example: "lun0"
         */
        name: pulumi.Input<string>;
    }

    /**
     * Target portal group properties for create or update iSCSI target request.
     */
    export interface TargetPortalGroupCreateArgs {
        /**
         * Access Control List (ACL) for an iSCSI target portal group.
         */
        acls: pulumi.Input<pulumi.Input<AclArgs>[]>;
        /**
         * Attributes of an iSCSI target portal group.
         */
        attributes: pulumi.Input<AttributesArgs>;
        /**
         * List of LUNs to be exposed through the iSCSI target portal group.
         */
        luns: pulumi.Input<pulumi.Input<IscsiLunArgs>[]>;
    }
