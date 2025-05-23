import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
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
}

/**
 * Azure Managed Disk to attach to the Disk Pool.
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
 * Sku for ARM resource
 */
export interface SkuArgs {
    /**
     * Sku name
     */
    name: pulumi.Input<string>;
    /**
     * Sku tier
     */
    tier?: pulumi.Input<string>;
}
