import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Filter details to transfer Azure files
 */
export interface AzureFileFilterDetailsArgs {
    /**
     * List of full path of the files to be transferred.
     */
    filePathList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Prefix list of the Azure files to be transferred.
     */
    filePrefixList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of file shares to be transferred.
     */
    fileShareList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Filter details to transfer Azure Blobs
 */
export interface BlobFilterDetailsArgs {
    /**
     * List of full path of the blobs to be transferred.
     */
    blobPathList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Prefix list of the Azure blobs to be transferred.
     */
    blobPrefixList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of blob containers to be transferred.
     */
    containerList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Contact Details.
 */
export interface ContactDetailsArgs {
    /**
     * Contact name of the person.
     */
    contactName: pulumi.Input<string>;
    /**
     * List of Email-ids to be notified about job progress.
     */
    emailList: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Mobile number of the contact person.
     */
    mobile?: pulumi.Input<string | undefined>;
    /**
     * Notification preference for a job stage.
     */
    notificationPreference?: pulumi.Input<pulumi.Input<NotificationPreferenceArgs>[] | undefined>;
    /**
     * Phone number of the contact person.
     */
    phone: pulumi.Input<string>;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: pulumi.Input<string | undefined>;
}

/**
 * Contact Info.
 */
export interface ContactInfoArgs {
    /**
     * Contact name of the person.
     */
    contactName: pulumi.Input<string>;
    /**
     * Mobile number of the contact person.
     */
    mobile?: pulumi.Input<string | undefined>;
    /**
     * Phone number of the contact person.
     */
    phone: pulumi.Input<string>;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: pulumi.Input<string | undefined>;
}

/**
 * Customer disk job details.
 */
export interface DataBoxCustomerDiskJobDetailsArgs {
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: pulumi.Input<ContactDetailsArgs>;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: pulumi.Input<pulumi.Input<DataExportDetailsArgs>[] | undefined>;
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: pulumi.Input<pulumi.Input<DataImportDetailsArgs>[] | undefined>;
    /**
     * Flag to indicate if disk manifest should be backed-up in the Storage Account.
     */
    enableManifestBackup?: pulumi.Input<boolean | undefined>;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: pulumi.Input<number | undefined>;
    /**
     * Contains the map of disk serial number to the disk details for import jobs.
     */
    importDiskDetailsCollection?: pulumi.Input<{[key: string]: pulumi.Input<ImportDiskDetailsArgs>} | undefined>;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxCustomerDisk'.
     */
    jobDetailsType: pulumi.Input<"DataBoxCustomerDisk">;
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: pulumi.Input<KeyEncryptionKeyArgs | undefined>;
    /**
     * Preferences for the order.
     */
    preferences?: pulumi.Input<PreferencesArgs | undefined>;
    /**
     * Return package shipping details.
     */
    returnToCustomerPackageDetails: pulumi.Input<PackageCarrierDetailsArgs>;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: pulumi.Input<ReverseShippingDetailsArgs | undefined>;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}
/**
 * dataBoxCustomerDiskJobDetailsArgsProvideDefaults sets the appropriate defaults for DataBoxCustomerDiskJobDetailsArgs
 */
export function dataBoxCustomerDiskJobDetailsArgsProvideDefaults(val: DataBoxCustomerDiskJobDetailsArgs): DataBoxCustomerDiskJobDetailsArgs {
    return {
        ...val,
        enableManifestBackup: (val.enableManifestBackup) ?? false,
        keyEncryptionKey: pulumi.output(val.keyEncryptionKey).apply(v => v === undefined ? undefined : keyEncryptionKeyArgsProvideDefaults(v)),
        preferences: pulumi.output(val.preferences).apply(v => v === undefined ? undefined : preferencesArgsProvideDefaults(v)),
        reverseShippingDetails: pulumi.output(val.reverseShippingDetails).apply(v => v === undefined ? undefined : reverseShippingDetailsArgsProvideDefaults(v)),
        shippingAddress: pulumi.output(val.shippingAddress).apply(v => v === undefined ? undefined : shippingAddressArgsProvideDefaults(v)),
    };
}

/**
 * DataBox Disk Job Details.
 */
export interface DataBoxDiskJobDetailsArgs {
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: pulumi.Input<ContactDetailsArgs>;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: pulumi.Input<pulumi.Input<DataExportDetailsArgs>[] | undefined>;
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: pulumi.Input<pulumi.Input<DataImportDetailsArgs>[] | undefined>;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: pulumi.Input<number | undefined>;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxDisk'.
     */
    jobDetailsType: pulumi.Input<"DataBoxDisk">;
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: pulumi.Input<KeyEncryptionKeyArgs | undefined>;
    /**
     * User entered passkey for DataBox Disk job.
     */
    passkey?: pulumi.Input<string | undefined>;
    /**
     * Preferences for the order.
     */
    preferences?: pulumi.Input<PreferencesArgs | undefined>;
    /**
     * User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.
     */
    preferredDisks?: pulumi.Input<{[key: string]: pulumi.Input<number>} | undefined>;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: pulumi.Input<ReverseShippingDetailsArgs | undefined>;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}
/**
 * dataBoxDiskJobDetailsArgsProvideDefaults sets the appropriate defaults for DataBoxDiskJobDetailsArgs
 */
export function dataBoxDiskJobDetailsArgsProvideDefaults(val: DataBoxDiskJobDetailsArgs): DataBoxDiskJobDetailsArgs {
    return {
        ...val,
        keyEncryptionKey: pulumi.output(val.keyEncryptionKey).apply(v => v === undefined ? undefined : keyEncryptionKeyArgsProvideDefaults(v)),
        preferences: pulumi.output(val.preferences).apply(v => v === undefined ? undefined : preferencesArgsProvideDefaults(v)),
        reverseShippingDetails: pulumi.output(val.reverseShippingDetails).apply(v => v === undefined ? undefined : reverseShippingDetailsArgsProvideDefaults(v)),
        shippingAddress: pulumi.output(val.shippingAddress).apply(v => v === undefined ? undefined : shippingAddressArgsProvideDefaults(v)),
    };
}

/**
 * Databox Heavy Device Job Details
 */
export interface DataBoxHeavyJobDetailsArgs {
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: pulumi.Input<ContactDetailsArgs>;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: pulumi.Input<pulumi.Input<DataExportDetailsArgs>[] | undefined>;
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: pulumi.Input<pulumi.Input<DataImportDetailsArgs>[] | undefined>;
    /**
     * Set Device password for unlocking Databox Heavy. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    devicePassword?: pulumi.Input<string | undefined>;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: pulumi.Input<number | undefined>;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBoxHeavy'.
     */
    jobDetailsType: pulumi.Input<"DataBoxHeavy">;
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: pulumi.Input<KeyEncryptionKeyArgs | undefined>;
    /**
     * Preferences for the order.
     */
    preferences?: pulumi.Input<PreferencesArgs | undefined>;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: pulumi.Input<ReverseShippingDetailsArgs | undefined>;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}
/**
 * dataBoxHeavyJobDetailsArgsProvideDefaults sets the appropriate defaults for DataBoxHeavyJobDetailsArgs
 */
export function dataBoxHeavyJobDetailsArgsProvideDefaults(val: DataBoxHeavyJobDetailsArgs): DataBoxHeavyJobDetailsArgs {
    return {
        ...val,
        keyEncryptionKey: pulumi.output(val.keyEncryptionKey).apply(v => v === undefined ? undefined : keyEncryptionKeyArgsProvideDefaults(v)),
        preferences: pulumi.output(val.preferences).apply(v => v === undefined ? undefined : preferencesArgsProvideDefaults(v)),
        reverseShippingDetails: pulumi.output(val.reverseShippingDetails).apply(v => v === undefined ? undefined : reverseShippingDetailsArgsProvideDefaults(v)),
        shippingAddress: pulumi.output(val.shippingAddress).apply(v => v === undefined ? undefined : shippingAddressArgsProvideDefaults(v)),
    };
}

/**
 * Databox Job Details
 */
export interface DataBoxJobDetailsArgs {
    /**
     * Contact details for notification and shipping.
     */
    contactDetails: pulumi.Input<ContactDetailsArgs>;
    /**
     * Details of the data to be exported from azure.
     */
    dataExportDetails?: pulumi.Input<pulumi.Input<DataExportDetailsArgs>[] | undefined>;
    /**
     * Details of the data to be imported into azure.
     */
    dataImportDetails?: pulumi.Input<pulumi.Input<DataImportDetailsArgs>[] | undefined>;
    /**
     * Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    devicePassword?: pulumi.Input<string | undefined>;
    /**
     * The expected size of the data, which needs to be transferred in this job, in terabytes.
     */
    expectedDataSizeInTeraBytes?: pulumi.Input<number | undefined>;
    /**
     * Indicates the type of job details.
     * Expected value is 'DataBox'.
     */
    jobDetailsType: pulumi.Input<"DataBox">;
    /**
     * Details about which key encryption type is being used.
     */
    keyEncryptionKey?: pulumi.Input<KeyEncryptionKeyArgs | undefined>;
    /**
     * Preferences for the order.
     */
    preferences?: pulumi.Input<PreferencesArgs | undefined>;
    /**
     * Optional Reverse Shipping details for order.
     */
    reverseShippingDetails?: pulumi.Input<ReverseShippingDetailsArgs | undefined>;
    /**
     * Shipping address of the customer.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}
/**
 * dataBoxJobDetailsArgsProvideDefaults sets the appropriate defaults for DataBoxJobDetailsArgs
 */
export function dataBoxJobDetailsArgsProvideDefaults(val: DataBoxJobDetailsArgs): DataBoxJobDetailsArgs {
    return {
        ...val,
        keyEncryptionKey: pulumi.output(val.keyEncryptionKey).apply(v => v === undefined ? undefined : keyEncryptionKeyArgsProvideDefaults(v)),
        preferences: pulumi.output(val.preferences).apply(v => v === undefined ? undefined : preferencesArgsProvideDefaults(v)),
        reverseShippingDetails: pulumi.output(val.reverseShippingDetails).apply(v => v === undefined ? undefined : reverseShippingDetailsArgsProvideDefaults(v)),
        shippingAddress: pulumi.output(val.shippingAddress).apply(v => v === undefined ? undefined : shippingAddressArgsProvideDefaults(v)),
    };
}

/**
 * Details of the data to be used for exporting data from azure.
 */
export interface DataExportDetailsArgs {
    /**
     * Account details of the data to be transferred
     */
    accountDetails: pulumi.Input<ManagedDiskDetailsArgs | StorageAccountDetailsArgs>;
    /**
     * Level of the logs to be collected.
     */
    logCollectionLevel?: pulumi.Input<string | enums.LogCollectionLevel | undefined>;
    /**
     * Configuration for the data transfer.
     */
    transferConfiguration: pulumi.Input<TransferConfigurationArgs>;
}
/**
 * dataExportDetailsArgsProvideDefaults sets the appropriate defaults for DataExportDetailsArgs
 */
export function dataExportDetailsArgsProvideDefaults(val: DataExportDetailsArgs): DataExportDetailsArgs {
    return {
        ...val,
        logCollectionLevel: (val.logCollectionLevel) ?? "Error",
        transferConfiguration: pulumi.output(val.transferConfiguration).apply(transferConfigurationArgsProvideDefaults),
    };
}

/**
 * Details of the data to be used for importing data to azure.
 */
export interface DataImportDetailsArgs {
    /**
     * Account details of the data to be transferred
     */
    accountDetails: pulumi.Input<ManagedDiskDetailsArgs | StorageAccountDetailsArgs>;
    /**
     * Level of the logs to be collected.
     */
    logCollectionLevel?: pulumi.Input<string | enums.LogCollectionLevel | undefined>;
}
/**
 * dataImportDetailsArgsProvideDefaults sets the appropriate defaults for DataImportDetailsArgs
 */
export function dataImportDetailsArgsProvideDefaults(val: DataImportDetailsArgs): DataImportDetailsArgs {
    return {
        ...val,
        logCollectionLevel: (val.logCollectionLevel) ?? "Error",
    };
}

/**
 * Preferences related to the Encryption.
 */
export interface EncryptionPreferencesArgs {
    /**
     * Defines secondary layer of software-based encryption enablement.
     */
    doubleEncryption?: pulumi.Input<string | enums.DoubleEncryption | undefined>;
    /**
     * Defines Hardware level encryption (Only for disk)
     */
    hardwareEncryption?: pulumi.Input<string | enums.HardwareEncryption | undefined>;
}
/**
 * encryptionPreferencesArgsProvideDefaults sets the appropriate defaults for EncryptionPreferencesArgs
 */
export function encryptionPreferencesArgsProvideDefaults(val: EncryptionPreferencesArgs): EncryptionPreferencesArgs {
    return {
        ...val,
        doubleEncryption: (val.doubleEncryption) ?? "Disabled",
    };
}

/**
 * Details of the filter files to be used for data transfer.
 */
export interface FilterFileDetailsArgs {
    /**
     * Path of the file that contains the details of all items to transfer.
     */
    filterFilePath: pulumi.Input<string>;
    /**
     * Type of the filter file.
     */
    filterFileType: pulumi.Input<string | enums.FilterFileType>;
}

/**
 * Managed identity properties.
 */
export interface IdentityPropertiesArgs {
    /**
     * Managed service identity type.
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * User assigned identity properties.
     */
    userAssigned?: pulumi.Input<UserAssignedPropertiesArgs | undefined>;
}

/**
 * Import disk details
 */
export interface ImportDiskDetailsArgs {
    /**
     * BitLocker key used to encrypt the disk.
     */
    bitLockerKey: pulumi.Input<string>;
    /**
     * The relative path of the manifest file on the disk.
     */
    manifestFile: pulumi.Input<string>;
    /**
     * The Base16-encoded MD5 hash of the manifest file on the disk.
     */
    manifestHash: pulumi.Input<string>;
}

/**
 * Additional delivery info.
 */
export interface JobDeliveryInfoArgs {
    /**
     * Scheduled date time.
     */
    scheduledDateTime?: pulumi.Input<string | undefined>;
}

/**
 * Encryption key containing details about key to encrypt different keys.
 */
export interface KeyEncryptionKeyArgs {
    /**
     * Managed identity properties used for key encryption.
     */
    identityProperties?: pulumi.Input<IdentityPropertiesArgs | undefined>;
    /**
     * Type of encryption key used for key encryption.
     */
    kekType: pulumi.Input<string | enums.KekType>;
    /**
     * Key encryption key. It is required in case of Customer managed KekType.
     */
    kekUrl?: pulumi.Input<string | undefined>;
    /**
     * Kek vault resource id. It is required in case of Customer managed KekType.
     */
    kekVaultResourceID?: pulumi.Input<string | undefined>;
}
/**
 * keyEncryptionKeyArgsProvideDefaults sets the appropriate defaults for KeyEncryptionKeyArgs
 */
export function keyEncryptionKeyArgsProvideDefaults(val: KeyEncryptionKeyArgs): KeyEncryptionKeyArgs {
    return {
        ...val,
        kekType: (val.kekType) ?? "MicrosoftManaged",
    };
}

/**
 * Details of the managed disks.
 */
export interface ManagedDiskDetailsArgs {
    /**
     * Account Type of the data to be transferred.
     * Expected value is 'ManagedDisk'.
     */
    dataAccountType: pulumi.Input<"ManagedDisk">;
    /**
     * Resource Group Id of the compute disks.
     */
    resourceGroupId: pulumi.Input<string>;
    /**
     * Password for all the shares to be created on the device. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    sharePassword?: pulumi.Input<string | undefined>;
    /**
     * Resource Id of the storage account that can be used to copy the vhd for staging.
     */
    stagingStorageAccountId: pulumi.Input<string>;
}
/**
 * managedDiskDetailsArgsProvideDefaults sets the appropriate defaults for ManagedDiskDetailsArgs
 */
export function managedDiskDetailsArgsProvideDefaults(val: ManagedDiskDetailsArgs): ManagedDiskDetailsArgs {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Notification preference for a job stage.
 */
export interface NotificationPreferenceArgs {
    /**
     * Notification is required or not.
     */
    sendNotification: pulumi.Input<boolean>;
    /**
     * Name of the stage.
     */
    stageName: pulumi.Input<string | enums.NotificationStageName>;
}
/**
 * notificationPreferenceArgsProvideDefaults sets the appropriate defaults for NotificationPreferenceArgs
 */
export function notificationPreferenceArgsProvideDefaults(val: NotificationPreferenceArgs): NotificationPreferenceArgs {
    return {
        ...val,
        sendNotification: (val.sendNotification) ?? true,
    };
}

/**
 * Package carrier details.
 */
export interface PackageCarrierDetailsArgs {
    /**
     * Carrier Account Number of customer for customer disk.
     */
    carrierAccountNumber?: pulumi.Input<string | undefined>;
    /**
     * Name of the carrier.
     */
    carrierName?: pulumi.Input<string | undefined>;
    /**
     * Tracking Id of shipment.
     */
    trackingId?: pulumi.Input<string | undefined>;
}

/**
 * Preferences related to the order
 */
export interface PreferencesArgs {
    /**
     * Preferences related to the Encryption.
     */
    encryptionPreferences?: pulumi.Input<EncryptionPreferencesArgs | undefined>;
    /**
     * Preferred data center region.
     */
    preferredDataCenterRegion?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Optional Preferences related to the reverse shipment logistics of the sku.
     */
    reverseTransportPreferences?: pulumi.Input<TransportPreferencesArgs | undefined>;
    /**
     * Preferences related to the Access Tier of storage accounts.
     */
    storageAccountAccessTierPreferences?: pulumi.Input<pulumi.Input<string | enums.StorageAccountAccessTier>[] | undefined>;
    /**
     * Preferences related to the shipment logistics of the sku.
     */
    transportPreferences?: pulumi.Input<TransportPreferencesArgs | undefined>;
}
/**
 * preferencesArgsProvideDefaults sets the appropriate defaults for PreferencesArgs
 */
export function preferencesArgsProvideDefaults(val: PreferencesArgs): PreferencesArgs {
    return {
        ...val,
        encryptionPreferences: pulumi.output(val.encryptionPreferences).apply(v => v === undefined ? undefined : encryptionPreferencesArgsProvideDefaults(v)),
    };
}

/**
 * Msi identity details of the resource
 */
export interface ResourceIdentityArgs {
    /**
     * Identity type
     */
    type?: pulumi.Input<string | undefined>;
    /**
     * User Assigned Identities
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
/**
 * resourceIdentityArgsProvideDefaults sets the appropriate defaults for ResourceIdentityArgs
 */
export function resourceIdentityArgsProvideDefaults(val: ResourceIdentityArgs): ResourceIdentityArgs {
    return {
        ...val,
        type: (val.type) ?? "None",
    };
}

/**
 * Reverse Shipping Address and contact details for a job.
 */
export interface ReverseShippingDetailsArgs {
    /**
     * Contact Info.
     */
    contactDetails?: pulumi.Input<ContactInfoArgs | undefined>;
    /**
     * Shipping address where customer wishes to receive the device.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}
/**
 * reverseShippingDetailsArgsProvideDefaults sets the appropriate defaults for ReverseShippingDetailsArgs
 */
export function reverseShippingDetailsArgsProvideDefaults(val: ReverseShippingDetailsArgs): ReverseShippingDetailsArgs {
    return {
        ...val,
        shippingAddress: pulumi.output(val.shippingAddress).apply(v => v === undefined ? undefined : shippingAddressArgsProvideDefaults(v)),
    };
}

/**
 * Shipping address where customer wishes to receive the device.
 */
export interface ShippingAddressArgs {
    /**
     * Type of address.
     */
    addressType?: pulumi.Input<string | enums.AddressType | undefined>;
    /**
     * Name of the City.
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * Name of the company.
     */
    companyName?: pulumi.Input<string | undefined>;
    /**
     * Name of the Country.
     */
    country: pulumi.Input<string>;
    /**
     * Postal code.
     */
    postalCode?: pulumi.Input<string | undefined>;
    /**
     * Flag to indicate if customer has chosen to skip default address validation
     */
    skipAddressValidation?: pulumi.Input<boolean | undefined>;
    /**
     * Name of the State or Province.
     */
    stateOrProvince?: pulumi.Input<string | undefined>;
    /**
     * Street Address line 1.
     */
    streetAddress1: pulumi.Input<string>;
    /**
     * Street Address line 2.
     */
    streetAddress2?: pulumi.Input<string | undefined>;
    /**
     * Street Address line 3.
     */
    streetAddress3?: pulumi.Input<string | undefined>;
    /**
     * Tax Identification Number
     */
    taxIdentificationNumber?: pulumi.Input<string | undefined>;
    /**
     * Extended Zip Code.
     */
    zipExtendedCode?: pulumi.Input<string | undefined>;
}
/**
 * shippingAddressArgsProvideDefaults sets the appropriate defaults for ShippingAddressArgs
 */
export function shippingAddressArgsProvideDefaults(val: ShippingAddressArgs): ShippingAddressArgs {
    return {
        ...val,
        addressType: (val.addressType) ?? "None",
    };
}

/**
 * The Sku.
 */
export interface SkuArgs {
    /**
     * The display name of the sku.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The sku family.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The sku name.
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * Details for the storage account.
 */
export interface StorageAccountDetailsArgs {
    /**
     * Account Type of the data to be transferred.
     * Expected value is 'StorageAccount'.
     */
    dataAccountType: pulumi.Input<"StorageAccount">;
    /**
     * Password for all the shares to be created on the device. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
     */
    sharePassword?: pulumi.Input<string | undefined>;
    /**
     * Storage Account Resource Id.
     */
    storageAccountId: pulumi.Input<string>;
}
/**
 * storageAccountDetailsArgsProvideDefaults sets the appropriate defaults for StorageAccountDetailsArgs
 */
export function storageAccountDetailsArgsProvideDefaults(val: StorageAccountDetailsArgs): StorageAccountDetailsArgs {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Details to transfer all data.
 */
export interface TransferAllDetailsArgs {
    /**
     * Type of the account of data
     */
    dataAccountType: pulumi.Input<string | enums.DataAccountType>;
    /**
     * To indicate if all Azure blobs have to be transferred
     */
    transferAllBlobs?: pulumi.Input<boolean | undefined>;
    /**
     * To indicate if all Azure Files have to be transferred
     */
    transferAllFiles?: pulumi.Input<boolean | undefined>;
}
/**
 * transferAllDetailsArgsProvideDefaults sets the appropriate defaults for TransferAllDetailsArgs
 */
export function transferAllDetailsArgsProvideDefaults(val: TransferAllDetailsArgs): TransferAllDetailsArgs {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Configuration for defining the transfer of data.
 */
export interface TransferConfigurationArgs {
    /**
     * Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
     */
    transferAllDetails?: pulumi.Input<TransferConfigurationTransferAllDetailsArgs | undefined>;
    /**
     * Type of the configuration for transfer.
     */
    transferConfigurationType: pulumi.Input<string | enums.TransferConfigurationType>;
    /**
     * Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.
     */
    transferFilterDetails?: pulumi.Input<TransferConfigurationTransferFilterDetailsArgs | undefined>;
}
/**
 * transferConfigurationArgsProvideDefaults sets the appropriate defaults for TransferConfigurationArgs
 */
export function transferConfigurationArgsProvideDefaults(val: TransferConfigurationArgs): TransferConfigurationArgs {
    return {
        ...val,
        transferAllDetails: pulumi.output(val.transferAllDetails).apply(v => v === undefined ? undefined : transferConfigurationTransferAllDetailsArgsProvideDefaults(v)),
        transferFilterDetails: pulumi.output(val.transferFilterDetails).apply(v => v === undefined ? undefined : transferConfigurationTransferFilterDetailsArgsProvideDefaults(v)),
    };
}

/**
 * Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
 */
export interface TransferConfigurationTransferAllDetailsArgs {
    /**
     * Details to transfer all data.
     */
    include?: pulumi.Input<TransferAllDetailsArgs | undefined>;
}
/**
 * transferConfigurationTransferAllDetailsArgsProvideDefaults sets the appropriate defaults for TransferConfigurationTransferAllDetailsArgs
 */
export function transferConfigurationTransferAllDetailsArgsProvideDefaults(val: TransferConfigurationTransferAllDetailsArgs): TransferConfigurationTransferAllDetailsArgs {
    return {
        ...val,
        include: pulumi.output(val.include).apply(v => v === undefined ? undefined : transferAllDetailsArgsProvideDefaults(v)),
    };
}

/**
 * Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.
 */
export interface TransferConfigurationTransferFilterDetailsArgs {
    /**
     * Details of the filtering the transfer of data.
     */
    include?: pulumi.Input<TransferFilterDetailsArgs | undefined>;
}
/**
 * transferConfigurationTransferFilterDetailsArgsProvideDefaults sets the appropriate defaults for TransferConfigurationTransferFilterDetailsArgs
 */
export function transferConfigurationTransferFilterDetailsArgsProvideDefaults(val: TransferConfigurationTransferFilterDetailsArgs): TransferConfigurationTransferFilterDetailsArgs {
    return {
        ...val,
        include: pulumi.output(val.include).apply(v => v === undefined ? undefined : transferFilterDetailsArgsProvideDefaults(v)),
    };
}

/**
 * Details of the filtering the transfer of data.
 */
export interface TransferFilterDetailsArgs {
    /**
     * Filter details to transfer Azure files.
     */
    azureFileFilterDetails?: pulumi.Input<AzureFileFilterDetailsArgs | undefined>;
    /**
     * Filter details to transfer blobs.
     */
    blobFilterDetails?: pulumi.Input<BlobFilterDetailsArgs | undefined>;
    /**
     * Type of the account of data.
     */
    dataAccountType: pulumi.Input<string | enums.DataAccountType>;
    /**
     * Details of the filter files to be used for data transfer.
     */
    filterFileDetails?: pulumi.Input<pulumi.Input<FilterFileDetailsArgs>[] | undefined>;
}
/**
 * transferFilterDetailsArgsProvideDefaults sets the appropriate defaults for TransferFilterDetailsArgs
 */
export function transferFilterDetailsArgsProvideDefaults(val: TransferFilterDetailsArgs): TransferFilterDetailsArgs {
    return {
        ...val,
        dataAccountType: (val.dataAccountType) ?? "StorageAccount",
    };
}

/**
 * Preferences related to the shipment logistics of the sku
 */
export interface TransportPreferencesArgs {
    /**
     * Indicates Shipment Logistics type that the customer preferred.
     */
    preferredShipmentType: pulumi.Input<string | enums.TransportShipmentTypes>;
}

/**
 * User assigned identity properties.
 */
export interface UserAssignedPropertiesArgs {
    /**
     * Arm resource id for user assigned identity to be used to fetch MSI token.
     */
    resourceId?: pulumi.Input<string | undefined>;
}
