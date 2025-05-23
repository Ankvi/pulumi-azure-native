export const AddressClassification = {
    /**
     * Shipping address for the order.
     */
    Shipping: "Shipping",
    /**
     * Site Address.
     */
    Site: "Site",
} as const;

/**
 * Type of address based on its usage context.
 */
export type AddressClassification = (typeof AddressClassification)[keyof typeof AddressClassification];

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

export const AutoProvisioningStatus = {
    /**
     * Provisioning Enabled. Will act as pre-approved, and arc extension will be enabled as soon as the device is verified to be at the right edge location.
     */
    Enabled: "Enabled",
    /**
     * Provisioning Disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Auto Provisioning Details.
 */
export type AutoProvisioningStatus = (typeof AutoProvisioningStatus)[keyof typeof AutoProvisioningStatus];

export const ChildConfigurationType = {
    /**
     * Child configuration is a device configuration.
     */
    DeviceConfiguration: "DeviceConfiguration",
    /**
     * Child configuration is an additional configuration.
     */
    AdditionalConfiguration: "AdditionalConfiguration",
} as const;

export type ChildConfigurationType = (typeof ChildConfigurationType)[keyof typeof ChildConfigurationType];

export const DoubleEncryptionStatus = {
    /**
     * Double encryption is disabled.
     */
    Disabled: "Disabled",
    /**
     * Double encryption is enabled.
     */
    Enabled: "Enabled",
} as const;

/**
 * Double encryption status as entered by the customer. It is compulsory to give this parameter if the 'Deny' or 'Disabled' policy is configured.
 */
export type DoubleEncryptionStatus = (typeof DoubleEncryptionStatus)[keyof typeof DoubleEncryptionStatus];

export const NotificationStageName = {
    /**
     * Notification at order item shipped from microsoft datacenter.
     */
    Shipped: "Shipped",
    /**
     * Notification at order item delivered to customer.
     */
    Delivered: "Delivered",
} as const;

/**
 * Name of the stage.
 */
export type NotificationStageName = (typeof NotificationStageName)[keyof typeof NotificationStageName];

export const OrderItemType = {
    /**
     * Purchase OrderItem.
     */
    Purchase: "Purchase",
    /**
     * Rental OrderItem.
     */
    Rental: "Rental",
    /**
     * Orders placed outside of azure.
     */
    External: "External",
} as const;

/**
 * Order item type.
 */
export type OrderItemType = (typeof OrderItemType)[keyof typeof OrderItemType];

export const OrderMode = {
    /**
     * Default Order mode.
     */
    Default: "Default",
    /**
     * Mode in which the Order will not be fulfilled.
     */
    DoNotFulfill: "DoNotFulfill",
} as const;

/**
 * Defines the mode of the Order item.
 */
export type OrderMode = (typeof OrderMode)[keyof typeof OrderMode];

export const SupportedFilterTypes = {
    /**
     * Ship to country.
     */
    ShipToCountries: "ShipToCountries",
    /**
     * Double encryption status.
     */
    DoubleEncryptionStatus: "DoubleEncryptionStatus",
} as const;

/**
 * Type of product filter.
 */
export type SupportedFilterTypes = (typeof SupportedFilterTypes)[keyof typeof SupportedFilterTypes];

export const TermCommitmentType = {
    /**
     * Pay as you go Term Commitment Model.
     */
    None: "None",
    /**
     * Trial Term Commitment Model.
     */
    Trial: "Trial",
    /**
     * Time based Term Commitment Model.
     */
    Timed: "Timed",
} as const;

/**
 * Term Commitment Type
 */
export type TermCommitmentType = (typeof TermCommitmentType)[keyof typeof TermCommitmentType];

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
