import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Contains information about the delivery package being shipped by the customer to the Microsoft data center.
 */
export interface DeliveryPackageInformationArgs {
    /**
     * The name of the carrier that is used to ship the import or export drives.
     */
    carrierName: pulumi.Input<string>;
    /**
     * The number of drives included in the package.
     */
    driveCount?: pulumi.Input<number>;
    /**
     * The date when the package is shipped.
     */
    shipDate?: pulumi.Input<string>;
    /**
     * The tracking number of the package.
     */
    trackingNumber: pulumi.Input<string>;
}

/**
 * Provides information about the drive's status
 */
export interface DriveStatusArgs {
    /**
     * The BitLocker key used to encrypt the drive.
     */
    bitLockerKey?: pulumi.Input<string>;
    /**
     * Bytes successfully transferred for the drive.
     */
    bytesSucceeded?: pulumi.Input<number>;
    /**
     * Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
     */
    copyStatus?: pulumi.Input<string>;
    /**
     * The drive header hash value.
     */
    driveHeaderHash?: pulumi.Input<string>;
    /**
     * The drive's hardware serial number, without spaces.
     */
    driveId?: pulumi.Input<string>;
    /**
     * A URI that points to the blob containing the error log for the data transfer operation.
     */
    errorLogUri?: pulumi.Input<string>;
    /**
     * The relative path of the manifest file on the drive. 
     */
    manifestFile?: pulumi.Input<string>;
    /**
     * The Base16-encoded MD5 hash of the manifest file on the drive.
     */
    manifestHash?: pulumi.Input<string>;
    /**
     * A URI that points to the blob containing the drive manifest file. 
     */
    manifestUri?: pulumi.Input<string>;
    /**
     * Percentage completed for the drive. 
     */
    percentComplete?: pulumi.Input<number>;
    /**
     * The drive's current state. 
     */
    state?: pulumi.Input<string | enums.DriveState>;
    /**
     * A URI that points to the blob containing the verbose log for the data transfer operation. 
     */
    verboseLogUri?: pulumi.Input<string>;
}
/**
 * driveStatusArgsProvideDefaults sets the appropriate defaults for DriveStatusArgs
 */
export function driveStatusArgsProvideDefaults(val: DriveStatusArgs): DriveStatusArgs {
    return {
        ...val,
        state: (val.state) ?? "Specified",
    };
}

/**
 * Specifies the encryption key properties
 */
export interface EncryptionKeyDetailsArgs {
    /**
     * The type of kek encryption key
     */
    kekType?: pulumi.Input<string | enums.EncryptionKekType>;
    /**
     * Specifies the url for kek encryption key. 
     */
    kekUrl?: pulumi.Input<string>;
    /**
     * Specifies the keyvault resource id for kek encryption key. 
     */
    kekVaultResourceID?: pulumi.Input<string>;
}
/**
 * encryptionKeyDetailsArgsProvideDefaults sets the appropriate defaults for EncryptionKeyDetailsArgs
 */
export function encryptionKeyDetailsArgsProvideDefaults(val: EncryptionKeyDetailsArgs): EncryptionKeyDetailsArgs {
    return {
        ...val,
        kekType: (val.kekType) ?? "MicrosoftManaged",
    };
}

/**
 * A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
 */
export interface ExportArgs {
    /**
     * The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. 
     */
    blobListBlobPath?: pulumi.Input<string>;
    /**
     * A collection of blob-path strings.
     */
    blobPath?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A collection of blob-prefix strings.
     */
    blobPathPrefix?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Specifies the job properties
 */
export interface JobDetailsArgs {
    /**
     * Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
     */
    backupDriveManifest?: pulumi.Input<boolean>;
    /**
     * Indicates whether a request has been submitted to cancel the job.
     */
    cancelRequested?: pulumi.Input<boolean>;
    /**
     * Contains information about the package being shipped by the customer to the Microsoft data center. 
     */
    deliveryPackage?: pulumi.Input<DeliveryPackageInformationArgs>;
    /**
     * The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
     */
    diagnosticsPath?: pulumi.Input<string>;
    /**
     * List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
     */
    driveList?: pulumi.Input<pulumi.Input<DriveStatusArgs>[]>;
    /**
     * Contains information about the encryption key.
     */
    encryptionKey?: pulumi.Input<EncryptionKeyDetailsArgs>;
    /**
     * A property containing information about the blobs to be exported for an export job. This property is included for export jobs only.
     */
    export?: pulumi.Input<ExportArgs>;
    /**
     * A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
     */
    incompleteBlobListUri?: pulumi.Input<string>;
    /**
     * The type of job
     */
    jobType?: pulumi.Input<string>;
    /**
     * Default value is Error. Indicates whether error logging or verbose logging will be enabled.
     */
    logLevel?: pulumi.Input<string>;
    /**
     * Overall percentage completed for the job.
     */
    percentComplete?: pulumi.Input<number>;
    /**
     * Specifies the provisioning state of the job.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Specifies the return address information for the job. 
     */
    returnAddress?: pulumi.Input<ReturnAddressArgs>;
    /**
     * Contains information about the package being shipped from the Microsoft data center to the customer to return the drives. The format is the same as the deliveryPackage property above. This property is not included if the drives have not yet been returned. 
     */
    returnPackage?: pulumi.Input<PackageInformationArgs>;
    /**
     * Specifies the return carrier and customer's account with the carrier. 
     */
    returnShipping?: pulumi.Input<ReturnShippingArgs>;
    /**
     * Contains information about the Microsoft datacenter to which the drives should be shipped. 
     */
    shippingInformation?: pulumi.Input<ShippingInformationArgs>;
    /**
     * Current state of the job.
     */
    state?: pulumi.Input<string>;
    /**
     * The resource identifier of the storage account where data will be imported to or exported from.
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * jobDetailsArgsProvideDefaults sets the appropriate defaults for JobDetailsArgs
 */
export function jobDetailsArgsProvideDefaults(val: JobDetailsArgs): JobDetailsArgs {
    return {
        ...val,
        backupDriveManifest: (val.backupDriveManifest) ?? false,
        cancelRequested: (val.cancelRequested) ?? false,
        encryptionKey: (val.encryptionKey ? pulumi.output(val.encryptionKey).apply(encryptionKeyDetailsArgsProvideDefaults) : undefined),
        state: (val.state) ?? "Creating",
    };
}

/**
 * Contains information about the package being shipped by the customer to the Microsoft data center.
 */
export interface PackageInformationArgs {
    /**
     * The name of the carrier that is used to ship the import or export drives.
     */
    carrierName: pulumi.Input<string>;
    /**
     * The number of drives included in the package.
     */
    driveCount: pulumi.Input<number>;
    /**
     * The date when the package is shipped.
     */
    shipDate: pulumi.Input<string>;
    /**
     * The tracking number of the package.
     */
    trackingNumber: pulumi.Input<string>;
}

/**
 * Specifies the return address information for the job.
 */
export interface ReturnAddressArgs {
    /**
     * The city name to use when returning the drives.
     */
    city: pulumi.Input<string>;
    /**
     * The country or region to use when returning the drives. 
     */
    countryOrRegion: pulumi.Input<string>;
    /**
     * Email address of the recipient of the returned drives.
     */
    email: pulumi.Input<string>;
    /**
     * Phone number of the recipient of the returned drives.
     */
    phone: pulumi.Input<string>;
    /**
     * The postal code to use when returning the drives.
     */
    postalCode: pulumi.Input<string>;
    /**
     * The name of the recipient who will receive the hard drives when they are returned. 
     */
    recipientName: pulumi.Input<string>;
    /**
     * The state or province to use when returning the drives.
     */
    stateOrProvince?: pulumi.Input<string>;
    /**
     * The first line of the street address to use when returning the drives. 
     */
    streetAddress1: pulumi.Input<string>;
    /**
     * The second line of the street address to use when returning the drives. 
     */
    streetAddress2?: pulumi.Input<string>;
}

/**
 * Specifies the return carrier and customer's account with the carrier.
 */
export interface ReturnShippingArgs {
    /**
     * The customer's account number with the carrier.
     */
    carrierAccountNumber: pulumi.Input<string>;
    /**
     * The carrier's name.
     */
    carrierName: pulumi.Input<string>;
}

/**
 * Contains information about the Microsoft datacenter to which the drives should be shipped.
 */
export interface ShippingInformationArgs {
    /**
     * The city name to use when returning the drives.
     */
    city?: pulumi.Input<string>;
    /**
     * The country or region to use when returning the drives. 
     */
    countryOrRegion?: pulumi.Input<string>;
    /**
     * Phone number of the recipient of the returned drives.
     */
    phone?: pulumi.Input<string>;
    /**
     * The postal code to use when returning the drives.
     */
    postalCode?: pulumi.Input<string>;
    /**
     * The name of the recipient who will receive the hard drives when they are returned. 
     */
    recipientName?: pulumi.Input<string>;
    /**
     * The state or province to use when returning the drives.
     */
    stateOrProvince?: pulumi.Input<string>;
    /**
     * The first line of the street address to use when returning the drives. 
     */
    streetAddress1?: pulumi.Input<string>;
    /**
     * The second line of the street address to use when returning the drives. 
     */
    streetAddress2?: pulumi.Input<string>;
}
