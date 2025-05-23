import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
