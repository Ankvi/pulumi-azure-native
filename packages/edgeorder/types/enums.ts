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

export type AddressType = (typeof AddressType)[keyof typeof AddressType];

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
     * Double encryption is disabled
     */
    Disabled: "Disabled",
    /**
     * Double encryption is enabled
     */
    Enabled: "Enabled",
} as const;

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
} as const;

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

export type SupportedFilterTypes = (typeof SupportedFilterTypes)[keyof typeof SupportedFilterTypes];

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

export type TransportShipmentTypes = (typeof TransportShipmentTypes)[keyof typeof TransportShipmentTypes];
