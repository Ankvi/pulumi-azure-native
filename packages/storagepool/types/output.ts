import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace storagepool {
    /**
     * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
     */
    export interface AclResponse {
        /**
         * iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
         */
        initiatorIqn: string;
        /**
         * List of LUN names mapped to the ACL.
         */
        mappedLuns: string[];
    }

    /**
     * Azure Managed Disk to attach to the Disk Pool.
     */
    export interface DiskResponse {
        /**
         * Unique Azure Resource ID of the Managed Disk.
         */
        id: string;
    }

    /**
     * LUN to expose the Azure Managed Disk.
     */
    export interface IscsiLunResponse {
        /**
         * Specifies the Logical Unit Number of the iSCSI LUN.
         */
        lun: number;
        /**
         * Azure Resource ID of the Managed Disk.
         */
        managedDiskAzureResourceId: string;
        /**
         * User defined name for iSCSI LUN; example: "lun0"
         */
        name: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemMetadataResponse {
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
         * The type of identity that last modified the resource.
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

    export namespace v20200315preview {
        /**
         * Access Control List (ACL) for an iSCSI target portal group
         */
        export interface AclResponse {
            /**
             * iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
             */
            initiatorIqn: string;
            /**
             * List of LUN names mapped to the ACL.
             */
            mappedLuns: string[];
            /**
             * Password for Challenge Handshake Authentication Protocol (CHAP) authentication.
             */
            password: string;
            /**
             * Username for Challenge Handshake Authentication Protocol (CHAP) authentication.
             */
            username: string;
        }

        /**
         * Attributes of a iSCSI target portal group.
         */
        export interface AttributesResponse {
            /**
             * Indicates whether or not authentication is enabled on the ACL.
             */
            authentication: boolean;
            /**
             * Indicates whether or not write protect is enabled on the LUNs.
             */
            prodModeWriteProtect: boolean;
        }

        /**
         * Azure Managed Disk to attach to the Disk pool.
         */
        export interface DiskResponse {
            /**
             * Unique Azure Resource ID of the Managed Disk.
             */
            id: string;
        }

        /**
         * LUN to expose the Azure Managed Disk.
         */
        export interface IscsiLunResponse {
            /**
             * Azure Resource ID of the Managed Disk.
             */
            managedDiskAzureResourceId: string;
            /**
             * User defined name for iSCSI LUN; example: "lun0"
             */
            name: string;
        }

        /**
         * Resource metadata required by ARM RPC.
         */
        export interface SystemMetadataResponse {
            /**
             * The timestamp of resource creation (UTC).
             */
            createdAt?: string;
            /**
             * A string identifier for the identity that created the resource.
             */
            createdBy?: string;
            /**
             * The type of identity that created the resource: user, application, managedIdentity.
             */
            createdByType?: string;
            /**
             * The timestamp of resource last modification (UTC).
             */
            lastModifiedAt?: string;
            /**
             * A string identifier for the identity that last modified the resource.
             */
            lastModifiedBy?: string;
            /**
             * The type of identity that last modified the resource: user, application, managedIdentity.
             */
            lastModifiedByType?: string;
        }

        /**
         * Response properties for iSCSI target portal group.
         */
        export interface TargetPortalGroupResponse {
            /**
             * Access Control List (ACL) for an iSCSI target portal group.
             */
            acls: v20200315preview.AclResponse[];
            /**
             * Attributes of an iSCSI target portal group.
             */
            attributes: v20200315preview.AttributesResponse;
            /**
             * List of private IPv4 addresses to connect to the iSCSI target.
             */
            endpoints: string[];
            /**
             * List of LUNs to be exposed through iSCSI target portal group.
             */
            luns: v20200315preview.IscsiLunResponse[];
            /**
             * The port used by iSCSI target portal group.
             */
            port: number;
            /**
             * The tag associated with the iSCSI target portal group.
             */
            tag: number;
        }

    }

    export namespace v20210801 {
        /**
         * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
         */
        export interface AclResponse {
            /**
             * iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
             */
            initiatorIqn: string;
            /**
             * List of LUN names mapped to the ACL.
             */
            mappedLuns: string[];
        }

        /**
         * Azure Managed Disk to attach to the Disk Pool.
         */
        export interface DiskResponse {
            /**
             * Unique Azure Resource ID of the Managed Disk.
             */
            id: string;
        }

        /**
         * LUN to expose the Azure Managed Disk.
         */
        export interface IscsiLunResponse {
            /**
             * Specifies the Logical Unit Number of the iSCSI LUN.
             */
            lun: number;
            /**
             * Azure Resource ID of the Managed Disk.
             */
            managedDiskAzureResourceId: string;
            /**
             * User defined name for iSCSI LUN; example: "lun0"
             */
            name: string;
        }

        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        export interface SystemMetadataResponse {
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
             * The type of identity that last modified the resource.
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

    }
}
