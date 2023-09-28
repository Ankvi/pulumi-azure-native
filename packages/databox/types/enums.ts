export const AddressType = {
    /**
     * Address type not known.
     */
    None: "None",
    /**
     * Residential Address.
     */
    Residential: "Residential",
    /**
     * Commercial Address.
     */
    Commercial: "Commercial",
} as const;

/**
 * Type of address.
 */
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

export const ClassDiscriminator = {
    /**
     * Data Box orders.
     */
    DataBox: "DataBox",
    /**
     * Data Box Disk orders.
     */
    DataBoxDisk: "DataBoxDisk",
    /**
     * Data Box Heavy orders.
     */
    DataBoxHeavy: "DataBoxHeavy",
    /**
     * Data Box Customer Disk orders.
     */
    DataBoxCustomerDisk: "DataBoxCustomerDisk",
} as const;

/**
 * Indicates the type of job details.
 */
export type ClassDiscriminator = (typeof ClassDiscriminator)[keyof typeof ClassDiscriminator];

export const DataAccountType = {
    /**
     * Storage Accounts .
     */
    StorageAccount: "StorageAccount",
    /**
     * Azure Managed disk storage.
     */
    ManagedDisk: "ManagedDisk",
} as const;

/**
 * Type of the account of data.
 */
export type DataAccountType = (typeof DataAccountType)[keyof typeof DataAccountType];

export const DoubleEncryption = {
    /**
     * Software-based encryption is enabled.
     */
    Enabled: "Enabled",
    /**
     * Software-based encryption is disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Defines secondary layer of software-based encryption enablement.
 */
export type DoubleEncryption = (typeof DoubleEncryption)[keyof typeof DoubleEncryption];

export const FilterFileType = {
    /**
     * Filter file is of the type AzureBlob.
     */
    AzureBlob: "AzureBlob",
    /**
     * Filter file is of the type AzureFiles.
     */
    AzureFile: "AzureFile",
} as const;

/**
 * Type of the filter file.
 */
export type FilterFileType = (typeof FilterFileType)[keyof typeof FilterFileType];

export const HardwareEncryption = {
    /**
     * Hardware-based encryption is enabled.
     */
    Enabled: "Enabled",
    /**
     * Hardware-based encryption is enabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Defines Hardware level encryption (Only for disk)
 */
export type HardwareEncryption = (typeof HardwareEncryption)[keyof typeof HardwareEncryption];

export const JobDeliveryType = {
    /**
     * Non Scheduled job.
     */
    NonScheduled: "NonScheduled",
    /**
     * Scheduled job.
     */
    Scheduled: "Scheduled",
} as const;

/**
 * Delivery type of Job.
 */
export type JobDeliveryType = (typeof JobDeliveryType)[keyof typeof JobDeliveryType];

export const KekType = {
    /**
     * Key encryption key is managed by Microsoft.
     */
    MicrosoftManaged: "MicrosoftManaged",
    /**
     * Key encryption key is managed by the Customer.
     */
    CustomerManaged: "CustomerManaged",
} as const;

/**
 * Type of encryption key used for key encryption.
 */
export type KekType = (typeof KekType)[keyof typeof KekType];

export const LogCollectionLevel = {
    /**
     * Only Errors will be collected in the logs.
     */
    Error: "Error",
    /**
     * Verbose logging (includes Errors, CRC, size information and others).
     */
    Verbose: "Verbose",
} as const;

/**
 * Level of the logs to be collected.
 */
export type LogCollectionLevel = (typeof LogCollectionLevel)[keyof typeof LogCollectionLevel];

export const NotificationStageName = {
    /**
     * Notification at device prepared stage.
     */
    DevicePrepared: "DevicePrepared",
    /**
     * Notification at device dispatched stage.
     */
    Dispatched: "Dispatched",
    /**
     * Notification at device delivered stage.
     */
    Delivered: "Delivered",
    /**
     * Notification at device picked up from user stage.
     */
    PickedUp: "PickedUp",
    /**
     * Notification at device received at Azure datacenter stage.
     */
    AtAzureDC: "AtAzureDC",
    /**
     * Notification at data copy started stage.
     */
    DataCopy: "DataCopy",
    /**
     * Notification at job created stage.
     */
    Created: "Created",
    /**
     * Notification at shipped devices to customer stage.
     */
    ShippedToCustomer: "ShippedToCustomer",
} as const;

/**
 * Name of the stage.
 */
export type NotificationStageName = (typeof NotificationStageName)[keyof typeof NotificationStageName];

export const SkuName = {
    /**
     * Data Box.
     */
    DataBox: "DataBox",
    /**
     * Data Box Disk.
     */
    DataBoxDisk: "DataBoxDisk",
    /**
     * Data Box Heavy.
     */
    DataBoxHeavy: "DataBoxHeavy",
    /**
     * Data Box Customer Disk.
     */
    DataBoxCustomerDisk: "DataBoxCustomerDisk",
} as const;

/**
 * The sku name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StorageAccountAccessTier = {
    /**
     * Archive Access Tier shares requested by the customer.
     */
    Archive: "Archive",
} as const;

export type StorageAccountAccessTier = (typeof StorageAccountAccessTier)[keyof typeof StorageAccountAccessTier];

export const TransferConfigurationType = {
    /**
     * Transfer all the data.
     */
    TransferAll: "TransferAll",
    /**
     * Transfer using filter.
     */
    TransferUsingFilter: "TransferUsingFilter",
} as const;

/**
 * Type of the configuration for transfer.
 */
export type TransferConfigurationType = (typeof TransferConfigurationType)[keyof typeof TransferConfigurationType];

export const TransferType = {
    /**
     * Import data to azure.
     */
    ImportToAzure: "ImportToAzure",
    /**
     * Export data from azure.
     */
    ExportFromAzure: "ExportFromAzure",
} as const;

/**
 * Type of the data transfer.
 */
export type TransferType = (typeof TransferType)[keyof typeof TransferType];

export const TransportShipmentTypes = {
    /**
     * Shipment Logistics is handled by the customer.
     */
    CustomerManaged: "CustomerManaged",
    /**
     * Shipment Logistics is handled by Microsoft.
     */
    MicrosoftManaged: "MicrosoftManaged",
} as const;

/**
 * Indicates Shipment Logistics type that the customer preferred.
 */
export type TransportShipmentTypes = (typeof TransportShipmentTypes)[keyof typeof TransportShipmentTypes];
