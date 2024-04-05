import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a disk.
 */
export function getDisk(args: GetDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20220702:getDisk", {
        "diskName": args.diskName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskArgs {
    /**
     * The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Disk resource.
 */
export interface GetDiskResult {
    /**
     * Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
     */
    readonly burstingEnabled?: boolean;
    /**
     * Latest time when bursting was last enabled on a disk.
     */
    readonly burstingEnabledTime: string;
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    readonly completionPercent?: number;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    readonly creationData: types.outputs.CreationDataResponse;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    readonly dataAccessAuthMode?: string;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    readonly diskAccessId?: string;
    /**
     * The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIOPSReadOnly?: number;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIOPSReadWrite?: number;
    /**
     * The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    readonly diskMBpsReadOnly?: number;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    readonly diskMBpsReadWrite?: number;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    readonly diskSizeBytes: number;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    readonly diskSizeGB?: number;
    /**
     * The state of the disk.
     */
    readonly diskState: string;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    readonly encryptionSettingsCollection?: types.outputs.EncryptionSettingsCollectionResponse;
    /**
     * The extended location where the disk will be created. Extended location cannot be changed.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    readonly hyperVGeneration?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     */
    readonly managedBy: string;
    /**
     * List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly managedByExtended: string[];
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    readonly maxShares?: number;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Policy for accessing the disk via network.
     */
    readonly networkAccessPolicy?: string;
    /**
     * Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine.
     */
    readonly optimizedForFrequentAttach?: boolean;
    /**
     * The Operating System type.
     */
    readonly osType?: string;
    /**
     * Properties of the disk for which update is pending.
     */
    readonly propertyUpdatesInProgress: types.outputs.PropertyUpdatesInProgressResponse;
    /**
     * The disk provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Policy for controlling export on the disk.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
     */
    readonly purchasePlan?: types.outputs.PurchasePlanResponse;
    /**
     * Contains the security related information for the resource.
     */
    readonly securityProfile?: types.outputs.DiskSecurityProfileResponse;
    /**
     * Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly shareInfo: types.outputs.ShareInfoElementResponse[];
    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
     */
    readonly sku?: types.outputs.DiskSkuResponse;
    /**
     * List of supported capabilities for the image from which the OS disk was created.
     */
    readonly supportedCapabilities?: types.outputs.SupportedCapabilitiesResponse;
    /**
     * Indicates the OS on a disk supports hibernation.
     */
    readonly supportsHibernation?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks.
     */
    readonly tier?: string;
    /**
     * The time when the disk was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unique Guid identifying the resource.
     */
    readonly uniqueId: string;
    /**
     * The Logical zone list for Disk.
     */
    readonly zones?: string[];
}
/**
 * Gets information about a disk.
 */
export function getDiskOutput(args: GetDiskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskResult> {
    return pulumi.output(args).apply((a: any) => getDisk(a, opts))
}

export interface GetDiskOutputArgs {
    /**
     * The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}