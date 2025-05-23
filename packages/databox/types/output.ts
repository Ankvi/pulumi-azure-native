import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Credential details of the account.
 */
export interface AccountCredentialDetailsResponse {
    /**
     * Connection string of the account endpoint to use the account as a storage endpoint on the device.
     */
    accountConnectionString: string;
    /**
     * Name of the account.
     */
    accountName: string;
    /**
     * Type of the account.
     */
    dataAccountType: string;
    /**
     * Per share level unencrypted access credentials.
     */
    shareCredentialDetails: ShareCredentialDetailsResponse[];
}

/**
 * This class represents additional info which Resource Providers pass when an error occurs.
 */
export interface AdditionalErrorInfoResponse {
    /**
     * Additional information of the type of error.
     */
    info?: any;
    /**
     * Type of error (e.g. CustomerIntervention, PolicyViolation, SecurityViolation).
     */
    type?: string;
}

/**
 * The Network Adapter configuration of a DataBox.
 */
export interface ApplianceNetworkConfigurationResponse {
    /**
     * Mac Address.
     */
    macAddress: string;
    /**
     * Name of the network.
     */
    name: string;
}

/**
 * Filter details to transfer Azure files
 */
export interface AzureFileFilterDetailsResponse {
    /**
     * List of full path of the files to be transferred.
     */
    filePathList?: string[];
    /**
     * Prefix list of the Azure files to be transferred.
     */
    filePrefixList?: string[];
    /**
     * List of file shares to be transferred.
     */
    fileShareList?: string[];
}

/**
 * Filter details to transfer Azure Blobs
 */
export interface BlobFilterDetailsResponse {
    /**
     * List of full path of the blobs to be transferred.
     */
    blobPathList?: string[];
    /**
     * Prefix list of the Azure blobs to be transferred.
     */
    blobPrefixList?: string[];
    /**
     * List of blob containers to be transferred.
     */
    containerList?: string[];
}

/**
 * Provides additional information about an http error response.
 */
export interface CloudErrorResponse {
    /**
     * Gets or sets additional error info.
     */
    additionalInfo: AdditionalErrorInfoResponse[];
    /**
     * Error code.
     */
    code?: string;
    /**
     * Gets or sets details for the error.
     */
    details: CloudErrorResponse[];
    /**
     * The error message parsed from the body of the http error response.
     */
    message?: string;
    /**
     * Gets or sets the target of the error.
     */
    target?: string;
}

/**
 * Contact Details.
 */
export interface ContactDetailsResponse {
    /**
     * Contact name of the person.
     */
    contactName: string;
    /**
     * List of Email-ids to be notified about job progress.
     */
    emailList: string[];
    /**
     * Mobile number of the contact person.
     */
    mobile?: string;
    /**
     * Notification preference for a job stage.
     */
    notificationPreference?: NotificationPreferenceResponse[];
    /**
     * Phone number of the contact person.
     */
    phone: string;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: string;
}

/**
 * Contact Info.
 */
export interface ContactInfoResponse {
    /**
     * Contact name of the person.
     */
    contactName: string;
    /**
     * Mobile number of the contact person.
     */
    mobile?: string;
    /**
     * Phone number of the contact person.
     */
    phone: string;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: string;
}

/**
 * Copy progress.
 */
export interface CopyProgressResponse {
    /**
     * Id of the account where the data needs to be uploaded.
     */
    accountId: string;
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * To indicate bytes transferred.
     */
    bytesProcessed: number;
    /**
     * Data Account Type.
     */
    dataAccountType: string;
    /**
     * To indicate directories errored out in the job.
     */
    directoriesErroredOut: number;
    /**
     * Error, if any, in the stage
     */
    error: CloudErrorResponse;
    /**
     * Number of files which could not be copied
     */
    filesErroredOut: number;
    /**
     * Number of files processed
     */
    filesProcessed: number;
    /**
     * To indicate directories renamed
     */
    invalidDirectoriesProcessed: number;
    /**
     * Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFileBytesUploaded: number;
    /**
     * Number of files not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFilesProcessed: number;
    /**
     * To indicate if enumeration of data is in progress. 
     * Until this is true, the TotalBytesToProcess may not be valid.
     */
    isEnumerationInProgress: boolean;
    /**
     * Number of folders not adhering to azure naming conventions which were processed by automatic renaming
     */
    renamedContainerCount: number;
    /**
     * Name of the storage account. This will be empty for data account types other than storage account.
     */
    storageAccountName: string;
    /**
     * Total amount of data to be processed by the job.
     */
    totalBytesToProcess: number;
    /**
     * Total files to process
     */
    totalFilesToProcess: number;
    /**
     * Transfer type of data
     */
    transferType: string;
}

/**
 * The secrets related to customer disk job.
 */
export interface CustomerDiskJobSecretsResponse {
    /**
     * Carrier Account Number of the customer
     */
    carrierAccountNumber: string;
    /**
     * Dc Access Security Code for Customer Managed Shipping
     */
    dcAccessSecurityCode: DcAccessSecurityCodeResponse;
    /**
     * Contains the list of secrets object for that device.
     */
    diskSecrets: DiskSecretResponse[];
    /**
     * Error while fetching the secrets.
     */
    error: CloudErrorResponse;
    /**
     * Used to indicate what type of job secrets object.
     * Expected value is 'DataBoxCustomerDisk'.
     */
    jobSecretsType: "DataBoxCustomerDisk";
}

/**
 * Copy log details for a storage account of a DataBox job
 */
export interface DataBoxAccountCopyLogDetailsResponse {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBox'.
     */
    copyLogDetailsType: "DataBox";
    /**
     * Link for copy logs.
     */
    copyLogLink: string;
    /**
     * Link for copy verbose logs. This will be set only when LogCollectionLevel is set to Verbose.
     */
    copyVerboseLogLink: string;
}

/**
 * Copy Log Details for customer disk
 */
export interface DataBoxCustomerDiskCopyLogDetailsResponse {
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxCustomerDisk'.
     */
    copyLogDetailsType: "DataBoxCustomerDisk";
    /**
     * Link for copy error logs.
     */
    errorLogLink: string;
    /**
     * Disk Serial Number.
     */
    serialNumber: string;
    /**
     * Link for copy verbose logs.
     */
    verboseLogLink: string;
}

/**
 * DataBox CustomerDisk Copy Progress
 */
export interface DataBoxCustomerDiskCopyProgressResponse {
    /**
     * Id of the account where the data needs to be uploaded.
     */
    accountId: string;
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * To indicate bytes transferred.
     */
    bytesProcessed: number;
    /**
     * The Status of the copy
     */
    copyStatus: string;
    /**
     * Data Account Type.
     */
    dataAccountType: string;
    /**
     * To indicate directories errored out in the job.
     */
    directoriesErroredOut: number;
    /**
     * Error, if any, in the stage
     */
    error: CloudErrorResponse;
    /**
     * Number of files which could not be copied
     */
    filesErroredOut: number;
    /**
     * Number of files processed
     */
    filesProcessed: number;
    /**
     * To indicate directories renamed
     */
    invalidDirectoriesProcessed: number;
    /**
     * Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFileBytesUploaded: number;
    /**
     * Number of files not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFilesProcessed: number;
    /**
     * To indicate if enumeration of data is in progress. 
     * Until this is true, the TotalBytesToProcess may not be valid.
     */
    isEnumerationInProgress: boolean;
    /**
     * Number of folders not adhering to azure naming conventions which were processed by automatic renaming
     */
    renamedContainerCount: number;
    /**
     * Disk Serial Number.
     */
    serialNumber: string;
    /**
     * Name of the storage account. This will be empty for data account types other than storage account.
     */
    storageAccountName: string;
    /**
     * Total amount of data to be processed by the job.
     */
    totalBytesToProcess: number;
    /**
     * Total files to process
     */
    totalFilesToProcess: number;
    /**
     * Transfer type of data
     */
    transferType: string;
}

/**
 * Customer disk job details.
 */
export interface DataBoxCustomerDiskJobDetailsResponse {
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * Shared access key to download the chain of custody logs
     */
    chainOfCustodySasKey: string;
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: ContactDetailsResponse;
    /**
     * List of copy log details.
     */
    copyLogDetails: (DataBoxAccountCopyLogDetailsResponse | DataBoxCustomerDiskCopyLogDetailsResponse | DataBoxDiskCopyLogDetailsResponse | DataBoxHeavyAccountCopyLogDetailsResponse)[];
    /**
     * Copy progress per disk.
     */
    copyProgress: DataBoxCustomerDiskCopyProgressResponse[];
    /**
     * DataCenter code.
     */
    dataCenterCode: string;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: DataExportDetailsResponse[];
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: DataImportDetailsResponse[];
    /**
     * Datacenter address to ship to, for the given sku and storage location.
     */
    datacenterAddress: DatacenterAddressInstructionResponseResponse | DatacenterAddressLocationResponseResponse;
    /**
     * Delivery package shipping details.
     */
    deliverToDcPackageDetails: PackageCarrierInfoResponse;
    /**
     * Delivery package shipping details.
     */
    deliveryPackage: PackageShippingDetailsResponse;
    /**
     * Holds device data erasure details
     */
    deviceErasureDetails: DeviceErasureDetailsResponse;
    /**
     * Flag to indicate if disk manifest should be backed-up in the Storage Account.
     */
    enableManifestBackup?: boolean;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: number;
    /**
     * Contains the map of disk serial number to the disk details for export jobs.
     */
    exportDiskDetailsCollection: {[key: string]: ExportDiskDetailsResponse};
    /**
     * Contains the map of disk serial number to the disk details for import jobs.
     */
    importDiskDetailsCollection?: {[key: string]: ImportDiskDetailsResponse};
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxCustomerDisk'.
     */
    jobDetailsType: "DataBoxCustomerDisk";
    /**
     * List of stages that run in the job.
     */
    jobStages: JobStagesResponse[];
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: KeyEncryptionKeyResponse;
    /**
     * Last mitigation action performed on the job.
     */
    lastMitigationActionOnJob: LastMitigationActionOnJobResponse;
    /**
     * Preferences for the order.
     */
    preferences?: PreferencesResponse;
    /**
     * Return package shipping details.
     */
    returnPackage: PackageShippingDetailsResponse;
    /**
     * Return package shipping details.
     */
    returnToCustomerPackageDetails: PackageCarrierDetailsResponse;
    /**
     * Shared access key to download the return shipment label
     */
    reverseShipmentLabelSasKey: string;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: ReverseShippingDetailsResponse;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: ShippingAddressResponse;
}
/**
 * dataBoxCustomerDiskJobDetailsResponseProvideDefaults sets the appropriate defaults for DataBoxCustomerDiskJobDetailsResponse
 */
export function dataBoxCustomerDiskJobDetailsResponseProvideDefaults(val: DataBoxCustomerDiskJobDetailsResponse): DataBoxCustomerDiskJobDetailsResponse {
    return {
        ...val,
        enableManifestBackup: (val.enableManifestBackup) ?? false,
        keyEncryptionKey: (val.keyEncryptionKey ? keyEncryptionKeyResponseProvideDefaults(val.keyEncryptionKey) : undefined),
        preferences: (val.preferences ? preferencesResponseProvideDefaults(val.preferences) : undefined),
        reverseShippingDetails: (val.reverseShippingDetails ? reverseShippingDetailsResponseProvideDefaults(val.reverseShippingDetails) : undefined),
        shippingAddress: (val.shippingAddress ? shippingAddressResponseProvideDefaults(val.shippingAddress) : undefined),
    };
}

/**
 * Copy Log Details for a disk
 */
export interface DataBoxDiskCopyLogDetailsResponse {
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxDisk'.
     */
    copyLogDetailsType: "DataBoxDisk";
    /**
     * Disk Serial Number.
     */
    diskSerialNumber: string;
    /**
     * Link for copy error logs.
     */
    errorLogLink: string;
    /**
     * Link for copy verbose logs.
     */
    verboseLogLink: string;
}

/**
 * DataBox Disk Copy Progress
 */
export interface DataBoxDiskCopyProgressResponse {
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * Bytes copied during the copy of disk.
     */
    bytesCopied: number;
    /**
     * Error, if any, in the stage
     */
    error: CloudErrorResponse;
    /**
     * Indicates the percentage completed for the copy of the disk.
     */
    percentComplete: number;
    /**
     * The serial number of the disk
     */
    serialNumber: string;
    /**
     * The Status of the copy
     */
    status: string;
}

/**
 * Granular Copy Log Details for customer disk
 */
export interface DataBoxDiskGranularCopyLogDetailsResponse {
    /**
     * Account id.
     */
    accountId: string;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxCustomerDisk'.
     */
    copyLogDetailsType: "DataBoxCustomerDisk";
    /**
     * Link for copy error logs.
     */
    errorLogLink: string;
    /**
     * Disk Serial Number.
     */
    serialNumber: string;
    /**
     * Link for copy verbose logs.
     */
    verboseLogLink: string;
}

/**
 * DataBox Disk Granular Copy Progress
 */
export interface DataBoxDiskGranularCopyProgressResponse {
    /**
     * Id of the account where the data needs to be uploaded.
     */
    accountId: string;
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * To indicate bytes transferred.
     */
    bytesProcessed: number;
    /**
     * The Status of the copy
     */
    copyStatus: string;
    /**
     * Data Account Type.
     */
    dataAccountType: string;
    /**
     * To indicate directories errored out in the job.
     */
    directoriesErroredOut: number;
    /**
     * Error, if any, in the stage
     */
    error: CloudErrorResponse;
    /**
     * Number of files which could not be copied
     */
    filesErroredOut: number;
    /**
     * Number of files processed
     */
    filesProcessed: number;
    /**
     * To indicate directories renamed
     */
    invalidDirectoriesProcessed: number;
    /**
     * Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFileBytesUploaded: number;
    /**
     * Number of files not adhering to azure naming conventions which were processed by automatic renaming
     */
    invalidFilesProcessed: number;
    /**
     * To indicate if enumeration of data is in progress. 
     * Until this is true, the TotalBytesToProcess may not be valid.
     */
    isEnumerationInProgress: boolean;
    /**
     * Number of folders not adhering to azure naming conventions which were processed by automatic renaming
     */
    renamedContainerCount: number;
    /**
     * Disk Serial Number.
     */
    serialNumber: string;
    /**
     * Name of the storage account. This will be empty for data account types other than storage account.
     */
    storageAccountName: string;
    /**
     * Total amount of data to be processed by the job.
     */
    totalBytesToProcess: number;
    /**
     * Total files to process
     */
    totalFilesToProcess: number;
    /**
     * Transfer type of data
     */
    transferType: string;
}

/**
 * DataBox Disk Job Details.
 */
export interface DataBoxDiskJobDetailsResponse {
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * Shared access key to download the chain of custody logs
     */
    chainOfCustodySasKey: string;
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: ContactDetailsResponse;
    /**
     * List of copy log details.
     */
    copyLogDetails: (DataBoxAccountCopyLogDetailsResponse | DataBoxCustomerDiskCopyLogDetailsResponse | DataBoxDiskCopyLogDetailsResponse | DataBoxHeavyAccountCopyLogDetailsResponse)[];
    /**
     * Copy progress per disk.
     */
    copyProgress: DataBoxDiskCopyProgressResponse[];
    /**
     * DataCenter code.
     */
    dataCenterCode: string;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: DataExportDetailsResponse[];
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: DataImportDetailsResponse[];
    /**
     * Datacenter address to ship to, for the given sku and storage location.
     */
    datacenterAddress: DatacenterAddressInstructionResponseResponse | DatacenterAddressLocationResponseResponse;
    /**
     * Delivery package shipping details.
     */
    deliveryPackage: PackageShippingDetailsResponse;
    /**
     * Holds device data erasure details
     */
    deviceErasureDetails: DeviceErasureDetailsResponse;
    /**
     * Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer.
     */
    disksAndSizeDetails: {[key: string]: number};
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: number;
    /**
     * Copy progress per disk.
     */
    granularCopyLogDetails: DataBoxDiskGranularCopyLogDetailsResponse[];
    /**
     * Copy progress per disk.
     */
    granularCopyProgress: DataBoxDiskGranularCopyProgressResponse[];
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxDisk'.
     */
    jobDetailsType: "DataBoxDisk";
    /**
     * List of stages that run in the job.
     */
    jobStages: JobStagesResponse[];
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: KeyEncryptionKeyResponse;
    /**
     * Last mitigation action performed on the job.
     */
    lastMitigationActionOnJob: LastMitigationActionOnJobResponse;
    /**
     * User entered passkey for DataBox Disk job.
     */
    passkey?: string;
    /**
     * Preferences for the order.
     */
    preferences?: PreferencesResponse;
    /**
     * User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.
     */
    preferredDisks?: {[key: string]: number};
    /**
     * Return package shipping details.
     */
    returnPackage: PackageShippingDetailsResponse;
    /**
     * Shared access key to download the return shipment label
     */
    reverseShipmentLabelSasKey: string;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: ReverseShippingDetailsResponse;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: ShippingAddressResponse;
}
/**
 * dataBoxDiskJobDetailsResponseProvideDefaults sets the appropriate defaults for DataBoxDiskJobDetailsResponse
 */
export function dataBoxDiskJobDetailsResponseProvideDefaults(val: DataBoxDiskJobDetailsResponse): DataBoxDiskJobDetailsResponse {
    return {
        ...val,
        keyEncryptionKey: (val.keyEncryptionKey ? keyEncryptionKeyResponseProvideDefaults(val.keyEncryptionKey) : undefined),
        preferences: (val.preferences ? preferencesResponseProvideDefaults(val.preferences) : undefined),
        reverseShippingDetails: (val.reverseShippingDetails ? reverseShippingDetailsResponseProvideDefaults(val.reverseShippingDetails) : undefined),
        shippingAddress: (val.shippingAddress ? shippingAddressResponseProvideDefaults(val.shippingAddress) : undefined),
    };
}

/**
 * The secrets related to disk job.
 */
export interface DataBoxDiskJobSecretsResponse {
    /**
     * Dc Access Security Code for Customer Managed Shipping
     */
    dcAccessSecurityCode: DcAccessSecurityCodeResponse;
    /**
     * Contains the list of secrets object for that device.
     */
    diskSecrets: DiskSecretResponse[];
    /**
     * Error while fetching the secrets.
     */
    error: CloudErrorResponse;
    /**
     * Whether passkey was provided by user.
     */
    isPasskeyUserDefined: boolean;
    /**
     * Used to indicate what type of job secrets object.
     * Expected value is 'DataBoxDisk'.
     */
    jobSecretsType: "DataBoxDisk";
    /**
     * PassKey for the disk Job.
     */
    passKey: string;
}

/**
 * Copy log details for a storage account for Databox heavy
 */
export interface DataBoxHeavyAccountCopyLogDetailsResponse {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxHeavy'.
     */
    copyLogDetailsType: "DataBoxHeavy";
    /**
     * Link for copy logs.
     */
    copyLogLink: string[];
    /**
     * Link for copy verbose logs. This will be set only when the LogCollectionLevel is set to verbose.
     */
    copyVerboseLogLink: string[];
}

/**
 * Databox Heavy Device Job Details
 */
export interface DataBoxHeavyJobDetailsResponse {
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * Shared access key to download the chain of custody logs
     */
    chainOfCustodySasKey: string;
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: ContactDetailsResponse;
    /**
     * List of copy log details.
     */
    copyLogDetails: (DataBoxAccountCopyLogDetailsResponse | DataBoxCustomerDiskCopyLogDetailsResponse | DataBoxDiskCopyLogDetailsResponse | DataBoxHeavyAccountCopyLogDetailsResponse)[];
    /**
     * Copy progress per account.
     */
    copyProgress: CopyProgressResponse[];
    /**
     * DataCenter code.
     */
    dataCenterCode: string;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: DataExportDetailsResponse[];
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: DataImportDetailsResponse[];
    /**
     * Datacenter address to ship to, for the given sku and storage location.
     */
    datacenterAddress: DatacenterAddressInstructionResponseResponse | DatacenterAddressLocationResponseResponse;
    /**
     * Delivery package shipping details.
     */
    deliveryPackage: PackageShippingDetailsResponse;
    /**
     * Holds device data erasure details
     */
    deviceErasureDetails: DeviceErasureDetailsResponse;
    /**
     * Set Device password for unlocking Databox Heavy. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    devicePassword?: string;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: number;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxHeavy'.
     */
    jobDetailsType: "DataBoxHeavy";
    /**
     * List of stages that run in the job.
     */
    jobStages: JobStagesResponse[];
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: KeyEncryptionKeyResponse;
    /**
     * Last mitigation action performed on the job.
     */
    lastMitigationActionOnJob: LastMitigationActionOnJobResponse;
    /**
     * Preferences for the order.
     */
    preferences?: PreferencesResponse;
    /**
     * Return package shipping details.
     */
    returnPackage: PackageShippingDetailsResponse;
    /**
     * Shared access key to download the return shipment label
     */
    reverseShipmentLabelSasKey: string;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: ReverseShippingDetailsResponse;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: ShippingAddressResponse;
}
/**
 * dataBoxHeavyJobDetailsResponseProvideDefaults sets the appropriate defaults for DataBoxHeavyJobDetailsResponse
 */
export function dataBoxHeavyJobDetailsResponseProvideDefaults(val: DataBoxHeavyJobDetailsResponse): DataBoxHeavyJobDetailsResponse {
    return {
        ...val,
        keyEncryptionKey: (val.keyEncryptionKey ? keyEncryptionKeyResponseProvideDefaults(val.keyEncryptionKey) : undefined),
        preferences: (val.preferences ? preferencesResponseProvideDefaults(val.preferences) : undefined),
        reverseShippingDetails: (val.reverseShippingDetails ? reverseShippingDetailsResponseProvideDefaults(val.reverseShippingDetails) : undefined),
        shippingAddress: (val.shippingAddress ? shippingAddressResponseProvideDefaults(val.shippingAddress) : undefined),
    };
}

/**
 * The secrets related to a databox heavy job.
 */
export interface DataBoxHeavyJobSecretsResponse {
    /**
     * Contains the list of secret objects for a databox heavy job.
     */
    cabinetPodSecrets: DataBoxHeavySecretResponse[];
    /**
     * Dc Access Security Code for Customer Managed Shipping
     */
    dcAccessSecurityCode: DcAccessSecurityCodeResponse;
    /**
     * Error while fetching the secrets.
     */
    error: CloudErrorResponse;
    /**
     * Used to indicate what type of job secrets object.
     * Expected value is 'DataBoxHeavy'.
     */
    jobSecretsType: "DataBoxHeavy";
}

/**
 * The secrets related to a databox heavy.
 */
export interface DataBoxHeavySecretResponse {
    /**
     * Per account level access credentials.
     */
    accountCredentialDetails: AccountCredentialDetailsResponse[];
    /**
     * Password for out of the box experience on device.
     */
    devicePassword: string;
    /**
     * Serial number of the assigned device.
     */
    deviceSerialNumber: string;
    /**
     * The base 64 encoded public key to authenticate with the device
     */
    encodedValidationCertPubKey: string;
    /**
     * Network configuration of the appliance.
     */
    networkConfigurations: ApplianceNetworkConfigurationResponse[];
}

/**
 * Databox Job Details
 */
export interface DataBoxJobDetailsResponse {
    /**
     * Available actions on the job.
     */
    actions: string[];
    /**
     * Shared access key to download the chain of custody logs
     */
    chainOfCustodySasKey: string;
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: ContactDetailsResponse;
    /**
     * List of copy log details.
     */
    copyLogDetails: (DataBoxAccountCopyLogDetailsResponse | DataBoxCustomerDiskCopyLogDetailsResponse | DataBoxDiskCopyLogDetailsResponse | DataBoxHeavyAccountCopyLogDetailsResponse)[];
    /**
     * Copy progress per storage account.
     */
    copyProgress: CopyProgressResponse[];
    /**
     * DataCenter code.
     */
    dataCenterCode: string;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: DataExportDetailsResponse[];
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: DataImportDetailsResponse[];
    /**
     * Datacenter address to ship to, for the given sku and storage location.
     */
    datacenterAddress: DatacenterAddressInstructionResponseResponse | DatacenterAddressLocationResponseResponse;
    /**
     * Delivery package shipping details.
     */
    deliveryPackage: PackageShippingDetailsResponse;
    /**
     * Holds device data erasure details
     */
    deviceErasureDetails: DeviceErasureDetailsResponse;
    /**
     * Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    devicePassword?: string;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: number;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBox'.
     */
    jobDetailsType: "DataBox";
    /**
     * List of stages that run in the job.
     */
    jobStages: JobStagesResponse[];
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: KeyEncryptionKeyResponse;
    /**
     * Last mitigation action performed on the job.
     */
    lastMitigationActionOnJob: LastMitigationActionOnJobResponse;
    /**
     * Preferences for the order.
     */
    preferences?: PreferencesResponse;
    /**
     * Return package shipping details.
     */
    returnPackage: PackageShippingDetailsResponse;
    /**
     * Shared access key to download the return shipment label
     */
    reverseShipmentLabelSasKey: string;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: ReverseShippingDetailsResponse;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: ShippingAddressResponse;
}
/**
 * dataBoxJobDetailsResponseProvideDefaults sets the appropriate defaults for DataBoxJobDetailsResponse
 */
export function dataBoxJobDetailsResponseProvideDefaults(val: DataBoxJobDetailsResponse): DataBoxJobDetailsResponse {
    return {
        ...val,
        keyEncryptionKey: (val.keyEncryptionKey ? keyEncryptionKeyResponseProvideDefaults(val.keyEncryptionKey) : undefined),
        preferences: (val.preferences ? preferencesResponseProvideDefaults(val.preferences) : undefined),
        reverseShippingDetails: (val.reverseShippingDetails ? reverseShippingDetailsResponseProvideDefaults(val.reverseShippingDetails) : undefined),
        shippingAddress: (val.shippingAddress ? shippingAddressResponseProvideDefaults(val.shippingAddress) : undefined),
    };
}

/**
 * The secrets related to a DataBox.
 */
export interface DataBoxSecretResponse {
    /**
     * Per account level access credentials.
     */
    accountCredentialDetails: AccountCredentialDetailsResponse[];
    /**
     * Password for out of the box experience on device.
     */
    devicePassword: string;
    /**
     * Serial number of the assigned device.
     */
    deviceSerialNumber: string;
    /**
     * The base 64 encoded public key to authenticate with the device
     */
    encodedValidationCertPubKey: string;
    /**
     * Network configuration of the appliance.
     */
    networkConfigurations: ApplianceNetworkConfigurationResponse[];
}

/**
 * Details of the data to be used for exporting data from azure.
 */
export interface DataExportDetailsResponse {
    /**
     * Account details of the data to be transferred
     */
    accountDetails: ManagedDiskDetailsResponse | StorageAccountDetailsResponse;
    /**
     * Level of the logs to be collected.
     */
    logCollectionLevel?: string;
    /**
     * Configuration for the data transfer.
     */
    transferConfiguration: TransferConfigurationResponse;
}
/**
 * dataExportDetailsResponseProvideDefaults sets the appropriate defaults for DataExportDetailsResponse
 */
export function dataExportDetailsResponseProvideDefaults(val: DataExportDetailsResponse): DataExportDetailsResponse {
    return {
        ...val,
        logCollectionLevel: (val.logCollectionLevel) ?? "Error",
        transferConfiguration: transferConfigurationResponseProvideDefaults(val.transferConfiguration),
    };
}

/**
 * Details of the data to be used for importing data to azure.
 */
export interface DataImportDetailsResponse {
    /**
     * Account details of the data to be transferred
     */
    accountDetails: ManagedDiskDetailsResponse | StorageAccountDetailsResponse;
    /**
     * Level of the logs to be collected.
     */
    logCollectionLevel?: string;
}
/**
 * dataImportDetailsResponseProvideDefaults sets the appropriate defaults for DataImportDetailsResponse
 */
export function dataImportDetailsResponseProvideDefaults(val: DataImportDetailsResponse): DataImportDetailsResponse {
    return {
        ...val,
        logCollectionLevel: (val.logCollectionLevel) ?? "Error",
    };
}

/**
 * The secrets related to a databox job.
 */
export interface DataboxJobSecretsResponse {
    /**
     * Dc Access Security Code for Customer Managed Shipping
     */
    dcAccessSecurityCode: DcAccessSecurityCodeResponse;
    /**
     * Error while fetching the secrets.
     */
    error: CloudErrorResponse;
    /**
     * Used to indicate what type of job secrets object.
     * Expected value is 'DataBox'.
     */
    jobSecretsType: "DataBox";
    /**
     * Contains the list of secret objects for a job.
     */
    podSecrets?: DataBoxSecretResponse[];
}

/**
 * Datacenter instruction for given storage location.
 */
export interface DatacenterAddressInstructionResponseResponse {
    /**
     * Data center communication instruction
     */
    communicationInstruction: string;
    /**
     * Azure Location where the Data Center serves primarily.
     */
    dataCenterAzureLocation: string;
    /**
     * Data center address type
     * Expected value is 'DatacenterAddressInstruction'.
     */
    datacenterAddressType: "DatacenterAddressInstruction";
    /**
     * List of supported carriers for return shipment.
     */
    supportedCarriersForReturnShipment: string[];
}

/**
 * Datacenter address for given storage location.
 */
export interface DatacenterAddressLocationResponseResponse {
    /**
     * Special instruction for shipping
     */
    additionalShippingInformation: string;
    /**
     * Address type
     */
    addressType: string;
    /**
     * City name
     */
    city: string;
    /**
     * Company name
     */
    company: string;
    /**
     * Contact person name
     */
    contactPersonName: string;
    /**
     * name of the country
     */
    country: string;
    /**
     * Azure Location where the Data Center serves primarily.
     */
    dataCenterAzureLocation: string;
    /**
     * Data center address type
     * Expected value is 'DatacenterAddressLocation'.
     */
    datacenterAddressType: "DatacenterAddressLocation";
    /**
     * Phone number
     */
    phone: string;
    /**
     * Phone extension
     */
    phoneExtension: string;
    /**
     * name of the state
     */
    state: string;
    /**
     * Street address line 1
     */
    street1: string;
    /**
     * Street address line 2
     */
    street2: string;
    /**
     * Street address line 3
     */
    street3: string;
    /**
     * List of supported carriers for return shipment.
     */
    supportedCarriersForReturnShipment: string[];
    /**
     * Zip code
     */
    zip: string;
}

/**
 * Dc access security code
 */
export interface DcAccessSecurityCodeResponse {
    /**
     * Forward Dc access security code.
     */
    forwardDCAccessCode?: string;
    /**
     * Reverse Dc access security code.
     */
    reverseDCAccessCode?: string;
}

/**
 * Device erasure details with erasure completion status and erasureordestructionlog sas key
 */
export interface DeviceErasureDetailsResponse {
    /**
     * Holds the device erasure completion status
     */
    deviceErasureStatus: string;
    /**
     * Shared access key to download cleanup or destruction certificate for device
     */
    erasureOrDestructionCertificateSasKey: string;
}

/**
 * Contains all the secrets of a Disk.
 */
export interface DiskSecretResponse {
    /**
     * Bit Locker key of the disk which can be used to unlock the disk to copy data.
     */
    bitLockerKey: string;
    /**
     * Serial number of the assigned disk.
     */
    diskSerialNumber: string;
}

/**
 * Preferences related to the Encryption.
 */
export interface EncryptionPreferencesResponse {
    /**
     * Defines secondary layer of software-based encryption enablement.
     */
    doubleEncryption?: string;
    /**
     * Defines Hardware level encryption (Only for disk)
     */
    hardwareEncryption?: string;
}
/**
 * encryptionPreferencesResponseProvideDefaults sets the appropriate defaults for EncryptionPreferencesResponse
 */
export function encryptionPreferencesResponseProvideDefaults(val: EncryptionPreferencesResponse): EncryptionPreferencesResponse {
    return {
        ...val,
        doubleEncryption: (val.doubleEncryption) ?? "Disabled",
    };
}

/**
 * Export disk details
 */
export interface ExportDiskDetailsResponse {
    /**
     * Path to backed up manifest, only returned if enableManifestBackup is true.
     */
    backupManifestCloudPath: string;
    /**
     * The relative path of the manifest file on the disk.
     */
    manifestFile: string;
    /**
     * The Base16-encoded MD5 hash of the manifest file on the disk.
     */
    manifestHash: string;
}

/**
 * Details of the filter files to be used for data transfer.
 */
export interface FilterFileDetailsResponse {
    /**
     * Path of the file that contains the details of all items to transfer.
     */
    filterFilePath: string;
    /**
     * Type of the filter file.
     */
    filterFileType: string;
}

/**
 * Managed identity properties.
 */
export interface IdentityPropertiesResponse {
    /**
     * Managed service identity type.
     */
    type?: string;
    /**
     * User assigned identity properties.
     */
    userAssigned?: UserAssignedPropertiesResponse;
}

/**
 * Import disk details
 */
export interface ImportDiskDetailsResponse {
    /**
     * Path to backed up manifest, only returned if enableManifestBackup is true.
     */
    backupManifestCloudPath: string;
    /**
     * BitLocker key used to encrypt the disk.
     */
    bitLockerKey: string;
    /**
     * The relative path of the manifest file on the disk.
     */
    manifestFile: string;
    /**
     * The Base16-encoded MD5 hash of the manifest file on the disk.
     */
    manifestHash: string;
}

/**
 * Job Delay Notification details
 */
export interface JobDelayDetailsResponse {
    /**
     * Description of the delay.
     */
    description: string;
    /**
     * Delay Error code
     */
    errorCode: string;
    /**
     * Timestamp when the delay notification was resolved.
     */
    resolutionTime: string;
    /**
     * Timestamp when the delay notification was created.
     */
    startTime: string;
    /**
     * Status of notification
     */
    status: string;
}

/**
 * Additional delivery info.
 */
export interface JobDeliveryInfoResponse {
    /**
     * Scheduled date time.
     */
    scheduledDateTime?: string;
}

/**
 * Job stages.
 */
export interface JobStagesResponse {
    /**
     * Delay information for the job stages.
     */
    delayInformation: JobDelayDetailsResponse[];
    /**
     * Display name of the job stage.
     */
    displayName: string;
    /**
     * Job Stage Details
     */
    jobStageDetails: any;
    /**
     * Name of the job stage.
     */
    stageName: string;
    /**
     * Status of the job stage.
     */
    stageStatus: string;
    /**
     * Time for the job stage in UTC ISO 8601 format.
     */
    stageTime: string;
}

/**
 * Encryption key containing details about key to encrypt different keys.
 */
export interface KeyEncryptionKeyResponse {
    /**
     * Managed identity properties used for key encryption.
     */
    identityProperties?: IdentityPropertiesResponse;
    /**
     * Type of encryption key used for key encryption.
     */
    kekType: string;
    /**
     * Key encryption key. It is required in case of Customer managed KekType.
     */
    kekUrl?: string;
    /**
     * Kek vault resource id. It is required in case of Customer managed KekType.
     */
    kekVaultResourceID?: string;
}
/**
 * keyEncryptionKeyResponseProvideDefaults sets the appropriate defaults for KeyEncryptionKeyResponse
 */
export function keyEncryptionKeyResponseProvideDefaults(val: KeyEncryptionKeyResponse): KeyEncryptionKeyResponse {
    return {
        ...val,
        kekType: (val.kekType) ?? "MicrosoftManaged",
    };
}

/**
 * Last Mitigation Action Performed On Job
 */
export interface LastMitigationActionOnJobResponse {
    /**
     * Action performed date time
     */
    actionDateTimeInUtc?: string;
    /**
     * Resolution code provided by customer
     */
    customerResolution?: string;
    /**
     * Action performed by customer,
     * possibility is that mitigation might happen by customer or service or by ops
     */
    isPerformedByCustomer?: boolean;
}

/**
 * Details of the managed disks.
 */
export interface ManagedDiskDetailsResponse {
    /**
     * Account Type of the data to be transferred.
     * Expected value is 'ManagedDisk'.
     */
    dataAccountType: "ManagedDisk";
    /**
     * Resource Group Id of the compute disks.
     */
    resourceGroupId: string;
    /**
     * Resource Id of the storage account that can be used to copy the vhd for staging.
     */
    stagingStorageAccountId: string;
}
/**
 * managedDiskDetailsResponseProvideDefaults sets the appropriate defaults for ManagedDiskDetailsResponse
 */
export function managedDiskDetailsResponseProvideDefaults(val: ManagedDiskDetailsResponse): ManagedDiskDetailsResponse {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Notification preference for a job stage.
 */
export interface NotificationPreferenceResponse {
    /**
     * Notification is required or not.
     */
    sendNotification: boolean;
    /**
     * Name of the stage.
     */
    stageName: string;
}
/**
 * notificationPreferenceResponseProvideDefaults sets the appropriate defaults for NotificationPreferenceResponse
 */
export function notificationPreferenceResponseProvideDefaults(val: NotificationPreferenceResponse): NotificationPreferenceResponse {
    return {
        ...val,
        sendNotification: (val.sendNotification) ?? true,
    };
}

/**
 * Package carrier details.
 */
export interface PackageCarrierDetailsResponse {
    /**
     * Carrier Account Number of customer for customer disk.
     */
    carrierAccountNumber?: string;
    /**
     * Name of the carrier.
     */
    carrierName?: string;
    /**
     * Tracking Id of shipment.
     */
    trackingId?: string;
}

/**
 * package carrier info
 */
export interface PackageCarrierInfoResponse {
    /**
     * Name of the carrier.
     */
    carrierName?: string;
    /**
     * Tracking Id of shipment.
     */
    trackingId?: string;
}

/**
 * package shipping details
 */
export interface PackageShippingDetailsResponse {
    /**
     * Name of the carrier.
     */
    carrierName: string;
    /**
     * Tracking Id of shipment.
     */
    trackingId: string;
    /**
     * Url where shipment can be tracked.
     */
    trackingUrl: string;
}

/**
 * Preferences related to the order
 */
export interface PreferencesResponse {
    /**
     * Preferences related to the Encryption.
     */
    encryptionPreferences?: EncryptionPreferencesResponse;
    /**
     * Preferred data center region.
     */
    preferredDataCenterRegion?: string[];
    /**
     * Optional Preferences related to the reverse shipment logistics of the sku.
     */
    reverseTransportPreferences?: TransportPreferencesResponse;
    /**
     * Preferences related to the Access Tier of storage accounts.
     */
    storageAccountAccessTierPreferences?: string[];
    /**
     * Preferences related to the shipment logistics of the sku.
     */
    transportPreferences?: TransportPreferencesResponse;
}
/**
 * preferencesResponseProvideDefaults sets the appropriate defaults for PreferencesResponse
 */
export function preferencesResponseProvideDefaults(val: PreferencesResponse): PreferencesResponse {
    return {
        ...val,
        encryptionPreferences: (val.encryptionPreferences ? encryptionPreferencesResponseProvideDefaults(val.encryptionPreferences) : undefined),
    };
}

/**
 * Msi identity details of the resource
 */
export interface ResourceIdentityResponse {
    /**
     * Service Principal Id backing the Msi
     */
    principalId: string;
    /**
     * Home Tenant Id
     */
    tenantId: string;
    /**
     * Identity type
     */
    type?: string;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}
/**
 * resourceIdentityResponseProvideDefaults sets the appropriate defaults for ResourceIdentityResponse
 */
export function resourceIdentityResponseProvideDefaults(val: ResourceIdentityResponse): ResourceIdentityResponse {
    return {
        ...val,
        type: (val.type) ?? "None",
    };
}

/**
 * Reverse Shipping Address and contact details for a job.
 */
export interface ReverseShippingDetailsResponse {
    /**
     * Contact Info.
     */
    contactDetails?: ContactInfoResponse;
    /**
     * A flag to indicate whether Reverse Shipping details are updated or not after device has been prepared.
     * Read only field
     */
    isUpdated: boolean;
    /**
     * Shipping address where customer wishes to receive the device.
     */
    shippingAddress?: ShippingAddressResponse;
}
/**
 * reverseShippingDetailsResponseProvideDefaults sets the appropriate defaults for ReverseShippingDetailsResponse
 */
export function reverseShippingDetailsResponseProvideDefaults(val: ReverseShippingDetailsResponse): ReverseShippingDetailsResponse {
    return {
        ...val,
        shippingAddress: (val.shippingAddress ? shippingAddressResponseProvideDefaults(val.shippingAddress) : undefined),
    };
}

/**
 * Credential details of the shares in account.
 */
export interface ShareCredentialDetailsResponse {
    /**
     * Password for the share.
     */
    password: string;
    /**
     * Name of the share.
     */
    shareName: string;
    /**
     * Type of the share.
     */
    shareType: string;
    /**
     * Access protocols supported on the device.
     */
    supportedAccessProtocols: string[];
    /**
     * User name for the share.
     */
    userName: string;
}

/**
 * Shipping address where customer wishes to receive the device.
 */
export interface ShippingAddressResponse {
    /**
     * Type of address.
     */
    addressType?: string;
    /**
     * Name of the City.
     */
    city?: string;
    /**
     * Name of the company.
     */
    companyName?: string;
    /**
     * Name of the Country.
     */
    country: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * Flag to indicate if customer has chosen to skip default address validation
     */
    skipAddressValidation?: boolean;
    /**
     * Name of the State or Province.
     */
    stateOrProvince?: string;
    /**
     * Street Address line 1.
     */
    streetAddress1: string;
    /**
     * Street Address line 2.
     */
    streetAddress2?: string;
    /**
     * Street Address line 3.
     */
    streetAddress3?: string;
    /**
     * Tax Identification Number
     */
    taxIdentificationNumber?: string;
    /**
     * Extended Zip Code.
     */
    zipExtendedCode?: string;
}
/**
 * shippingAddressResponseProvideDefaults sets the appropriate defaults for ShippingAddressResponse
 */
export function shippingAddressResponseProvideDefaults(val: ShippingAddressResponse): ShippingAddressResponse {
    return {
        ...val,
        addressType: (val.addressType) ?? "None",
    };
}

/**
 * The Sku.
 */
export interface SkuResponse {
    /**
     * The display name of the sku.
     */
    displayName?: string;
    /**
     * The sku family.
     */
    family?: string;
    /**
     * The model name.
     */
    model: string;
    /**
     * The sku name.
     */
    name: string;
}

/**
 * Details for the storage account.
 */
export interface StorageAccountDetailsResponse {
    /**
     * Account Type of the data to be transferred.
     * Expected value is 'StorageAccount'.
     */
    dataAccountType: "StorageAccount";
    /**
     * Storage Account Resource Id.
     */
    storageAccountId: string;
}
/**
 * storageAccountDetailsResponseProvideDefaults sets the appropriate defaults for StorageAccountDetailsResponse
 */
export function storageAccountDetailsResponseProvideDefaults(val: StorageAccountDetailsResponse): StorageAccountDetailsResponse {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Provides details about resource creation and update time
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC)
     */
    createdAt: string;
    /**
     * A string identifier for the identity that created the resource
     */
    createdBy: string;
    /**
     * The type of identity that created the resource: user, application, managedIdentity
     */
    createdByType: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt: string;
    /**
     * A string identifier for the identity that last modified the resource
     */
    lastModifiedBy: string;
    /**
     * The type of identity that last modified the resource: user, application, managedIdentity
     */
    lastModifiedByType: string;
}

/**
 * Details to transfer all data.
 */
export interface TransferAllDetailsResponse {
    /**
     * Type of the account of data
     */
    dataAccountType: string;
    /**
     * To indicate if all Azure blobs have to be transferred
     */
    transferAllBlobs?: boolean;
    /**
     * To indicate if all Azure Files have to be transferred
     */
    transferAllFiles?: boolean;
}
/**
 * transferAllDetailsResponseProvideDefaults sets the appropriate defaults for TransferAllDetailsResponse
 */
export function transferAllDetailsResponseProvideDefaults(val: TransferAllDetailsResponse): TransferAllDetailsResponse {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Configuration for defining the transfer of data.
 */
export interface TransferConfigurationResponse {
    /**
     * Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
     */
    transferAllDetails?: TransferConfigurationResponseTransferAllDetails;
    /**
     * Type of the configuration for transfer.
     */
    transferConfigurationType: string;
    /**
     * Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.
     */
    transferFilterDetails?: TransferConfigurationResponseTransferFilterDetails;
}
/**
 * transferConfigurationResponseProvideDefaults sets the appropriate defaults for TransferConfigurationResponse
 */
export function transferConfigurationResponseProvideDefaults(val: TransferConfigurationResponse): TransferConfigurationResponse {
    return {
        ...val,
        transferAllDetails: (val.transferAllDetails ? transferConfigurationResponseTransferAllDetailsProvideDefaults(val.transferAllDetails) : undefined),
        transferFilterDetails: (val.transferFilterDetails ? transferConfigurationResponseTransferFilterDetailsProvideDefaults(val.transferFilterDetails) : undefined),
    };
}

/**
 * Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
 */
export interface TransferConfigurationResponseTransferAllDetails {
    /**
     * Details to transfer all data.
     */
    include?: TransferAllDetailsResponse;
}
/**
 * transferConfigurationResponseTransferAllDetailsProvideDefaults sets the appropriate defaults for TransferConfigurationResponseTransferAllDetails
 */
export function transferConfigurationResponseTransferAllDetailsProvideDefaults(val: TransferConfigurationResponseTransferAllDetails): TransferConfigurationResponseTransferAllDetails {
    return {
        ...val,
        include: (val.include ? transferAllDetailsResponseProvideDefaults(val.include) : undefined),
    };
}

/**
 * Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.
 */
export interface TransferConfigurationResponseTransferFilterDetails {
    /**
     * Details of the filtering the transfer of data.
     */
    include?: TransferFilterDetailsResponse;
}
/**
 * transferConfigurationResponseTransferFilterDetailsProvideDefaults sets the appropriate defaults for TransferConfigurationResponseTransferFilterDetails
 */
export function transferConfigurationResponseTransferFilterDetailsProvideDefaults(val: TransferConfigurationResponseTransferFilterDetails): TransferConfigurationResponseTransferFilterDetails {
    return {
        ...val,
        include: (val.include ? transferFilterDetailsResponseProvideDefaults(val.include) : undefined),
    };
}

/**
 * Details of the filtering the transfer of data.
 */
export interface TransferFilterDetailsResponse {
    /**
     * Filter details to transfer Azure files.
     */
    azureFileFilterDetails?: AzureFileFilterDetailsResponse;
    /**
     * Filter details to transfer blobs.
     */
    blobFilterDetails?: BlobFilterDetailsResponse;
    /**
     * Type of the account of data.
     */
    dataAccountType: string;
    /**
     * Details of the filter files to be used for data transfer.
     */
    filterFileDetails?: FilterFileDetailsResponse[];
}
/**
 * transferFilterDetailsResponseProvideDefaults sets the appropriate defaults for TransferFilterDetailsResponse
 */
export function transferFilterDetailsResponseProvideDefaults(val: TransferFilterDetailsResponse): TransferFilterDetailsResponse {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Preferences related to the shipment logistics of the sku
 */
export interface TransportPreferencesResponse {
    /**
     * Read only property which indicates whether transport preferences has been updated or not after device is prepared.
     */
    isUpdated: boolean;
    /**
     * Indicates Shipment Logistics type that the customer preferred.
     */
    preferredShipmentType: string;
}

/**
 * Unencrypted credentials for accessing device.
 */
export interface UnencryptedCredentialsResponse {
    /**
     * Name of the job.
     */
    jobName: string;
    /**
     * Secrets related to this job.
     */
    jobSecrets: CustomerDiskJobSecretsResponse | DataBoxDiskJobSecretsResponse | DataBoxHeavyJobSecretsResponse | DataboxJobSecretsResponse;
}

/**
 * Class defining User assigned identity details.
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * User assigned identity properties.
 */
export interface UserAssignedPropertiesResponse {
    /**
     * Arm resource id for user assigned identity to be used to fetch MSI token.
     */
    resourceId?: string;
}
