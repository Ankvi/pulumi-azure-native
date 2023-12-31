import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Contains information about the delivery package being shipped by the customer to the Microsoft data center.
     */
    export interface DeliveryPackageInformationResponse {
        /**
         * The name of the carrier that is used to ship the import or export drives.
         */
        carrierName: string;
        /**
         * The number of drives included in the package.
         */
        driveCount?: number;
        /**
         * The date when the package is shipped.
         */
        shipDate?: string;
        /**
         * The tracking number of the package.
         */
        trackingNumber: string;
    }

    /**
     * BitLocker recovery key or password to the specified drive
     */
    export interface DriveBitLockerKeyResponse {
        /**
         * BitLocker recovery key or password
         */
        bitLockerKey?: string;
        /**
         * Drive ID
         */
        driveId?: string;
    }

    /**
     * Provides information about the drive's status
     */
    export interface DriveStatusResponse {
        /**
         * The BitLocker key used to encrypt the drive.
         */
        bitLockerKey?: string;
        /**
         * Bytes successfully transferred for the drive.
         */
        bytesSucceeded?: number;
        /**
         * Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
         */
        copyStatus?: string;
        /**
         * The drive header hash value.
         */
        driveHeaderHash?: string;
        /**
         * The drive's hardware serial number, without spaces.
         */
        driveId?: string;
        /**
         * A URI that points to the blob containing the error log for the data transfer operation.
         */
        errorLogUri?: string;
        /**
         * The relative path of the manifest file on the drive. 
         */
        manifestFile?: string;
        /**
         * The Base16-encoded MD5 hash of the manifest file on the drive.
         */
        manifestHash?: string;
        /**
         * A URI that points to the blob containing the drive manifest file. 
         */
        manifestUri?: string;
        /**
         * Percentage completed for the drive. 
         */
        percentComplete?: number;
        /**
         * The drive's current state. 
         */
        state?: string;
        /**
         * A URI that points to the blob containing the verbose log for the data transfer operation. 
         */
        verboseLogUri?: string;
    }
    /**
     * driveStatusResponseProvideDefaults sets the appropriate defaults for DriveStatusResponse
     */
    export function driveStatusResponseProvideDefaults(val: DriveStatusResponse): DriveStatusResponse {
        return {
            ...val,
            state: (val.state) ?? "Specified",
        };
    }

    /**
     * Specifies the encryption key properties
     */
    export interface EncryptionKeyDetailsResponse {
        /**
         * The type of kek encryption key
         */
        kekType?: string;
        /**
         * Specifies the url for kek encryption key. 
         */
        kekUrl?: string;
        /**
         * Specifies the keyvault resource id for kek encryption key. 
         */
        kekVaultResourceID?: string;
    }
    /**
     * encryptionKeyDetailsResponseProvideDefaults sets the appropriate defaults for EncryptionKeyDetailsResponse
     */
    export function encryptionKeyDetailsResponseProvideDefaults(val: EncryptionKeyDetailsResponse): EncryptionKeyDetailsResponse {
        return {
            ...val,
            kekType: (val.kekType) ?? "MicrosoftManaged",
        };
    }

    /**
     * A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
     */
    export interface ExportResponse {
        /**
         * The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. 
         */
        blobListBlobPath?: string;
        /**
         * A collection of blob-path strings.
         */
        blobPath?: string[];
        /**
         * A collection of blob-prefix strings.
         */
        blobPathPrefix?: string[];
    }

    /**
     * Specifies the identity properties. 
     */
    export interface IdentityDetailsResponse {
        /**
         * Specifies the principal id for the identity for the job. 
         */
        principalId: string;
        /**
         * Specifies the tenant id for the identity for the job. 
         */
        tenantId: string;
        /**
         * The type of identity
         */
        type?: string;
    }
    /**
     * identityDetailsResponseProvideDefaults sets the appropriate defaults for IdentityDetailsResponse
     */
    export function identityDetailsResponseProvideDefaults(val: IdentityDetailsResponse): IdentityDetailsResponse {
        return {
            ...val,
            type: (val.type) ?? "None",
        };
    }

    /**
     * Specifies the job properties
     */
    export interface JobDetailsResponse {
        /**
         * Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
         */
        backupDriveManifest?: boolean;
        /**
         * Indicates whether a request has been submitted to cancel the job.
         */
        cancelRequested?: boolean;
        /**
         * Contains information about the package being shipped by the customer to the Microsoft data center. 
         */
        deliveryPackage?: DeliveryPackageInformationResponse;
        /**
         * The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
         */
        diagnosticsPath?: string;
        /**
         * List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
         */
        driveList?: DriveStatusResponse[];
        /**
         * Contains information about the encryption key.
         */
        encryptionKey?: EncryptionKeyDetailsResponse;
        /**
         * A property containing information about the blobs to be exported for an export job. This property is included for export jobs only.
         */
        export?: ExportResponse;
        /**
         * A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
         */
        incompleteBlobListUri?: string;
        /**
         * The type of job
         */
        jobType?: string;
        /**
         * Default value is Error. Indicates whether error logging or verbose logging will be enabled.
         */
        logLevel?: string;
        /**
         * Overall percentage completed for the job.
         */
        percentComplete?: number;
        /**
         * Specifies the provisioning state of the job.
         */
        provisioningState?: string;
        /**
         * Specifies the return address information for the job. 
         */
        returnAddress?: ReturnAddressResponse;
        /**
         * Contains information about the package being shipped from the Microsoft data center to the customer to return the drives. The format is the same as the deliveryPackage property above. This property is not included if the drives have not yet been returned. 
         */
        returnPackage?: PackageInformationResponse;
        /**
         * Specifies the return carrier and customer's account with the carrier. 
         */
        returnShipping?: ReturnShippingResponse;
        /**
         * Contains information about the Microsoft datacenter to which the drives should be shipped. 
         */
        shippingInformation?: ShippingInformationResponse;
        /**
         * Current state of the job.
         */
        state?: string;
        /**
         * The resource identifier of the storage account where data will be imported to or exported from.
         */
        storageAccountId?: string;
    }
    /**
     * jobDetailsResponseProvideDefaults sets the appropriate defaults for JobDetailsResponse
     */
    export function jobDetailsResponseProvideDefaults(val: JobDetailsResponse): JobDetailsResponse {
        return {
            ...val,
            backupDriveManifest: (val.backupDriveManifest) ?? false,
            cancelRequested: (val.cancelRequested) ?? false,
            encryptionKey: (val.encryptionKey ? encryptionKeyDetailsResponseProvideDefaults(val.encryptionKey) : undefined),
            state: (val.state) ?? "Creating",
        };
    }

    /**
     * Contains information about the package being shipped by the customer to the Microsoft data center.
     */
    export interface PackageInformationResponse {
        /**
         * The name of the carrier that is used to ship the import or export drives.
         */
        carrierName: string;
        /**
         * The number of drives included in the package.
         */
        driveCount: number;
        /**
         * The date when the package is shipped.
         */
        shipDate: string;
        /**
         * The tracking number of the package.
         */
        trackingNumber: string;
    }

    /**
     * Specifies the return address information for the job.
     */
    export interface ReturnAddressResponse {
        /**
         * The city name to use when returning the drives.
         */
        city: string;
        /**
         * The country or region to use when returning the drives. 
         */
        countryOrRegion: string;
        /**
         * Email address of the recipient of the returned drives.
         */
        email: string;
        /**
         * Phone number of the recipient of the returned drives.
         */
        phone: string;
        /**
         * The postal code to use when returning the drives.
         */
        postalCode: string;
        /**
         * The name of the recipient who will receive the hard drives when they are returned. 
         */
        recipientName: string;
        /**
         * The state or province to use when returning the drives.
         */
        stateOrProvince?: string;
        /**
         * The first line of the street address to use when returning the drives. 
         */
        streetAddress1: string;
        /**
         * The second line of the street address to use when returning the drives. 
         */
        streetAddress2?: string;
    }

    /**
     * Specifies the return carrier and customer's account with the carrier.
     */
    export interface ReturnShippingResponse {
        /**
         * The customer's account number with the carrier.
         */
        carrierAccountNumber: string;
        /**
         * The carrier's name.
         */
        carrierName: string;
    }

    /**
     * Contains information about the Microsoft datacenter to which the drives should be shipped.
     */
    export interface ShippingInformationResponse {
        /**
         * Additional shipping information for customer, specific to datacenter to which customer should send their disks.
         */
        additionalInformation: string;
        /**
         * The city name to use when returning the drives.
         */
        city?: string;
        /**
         * The country or region to use when returning the drives. 
         */
        countryOrRegion?: string;
        /**
         * Phone number of the recipient of the returned drives.
         */
        phone?: string;
        /**
         * The postal code to use when returning the drives.
         */
        postalCode?: string;
        /**
         * The name of the recipient who will receive the hard drives when they are returned. 
         */
        recipientName?: string;
        /**
         * The state or province to use when returning the drives.
         */
        stateOrProvince?: string;
        /**
         * The first line of the street address to use when returning the drives. 
         */
        streetAddress1?: string;
        /**
         * The second line of the street address to use when returning the drives. 
         */
        streetAddress2?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
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
         * The timestamp of resource last modification (UTC)
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
