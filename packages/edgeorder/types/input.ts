import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Additional Configuration details.
 */
export interface AdditionalConfigurationArgs {
    /**
     * Hierarchy of the product which uniquely identifies the configuration.
     */
    hierarchyInformation: pulumi.Input<HierarchyInformationArgs>;
    /**
     * List Provisioning Details for Devices in Additional Config.
     */
    provisioningDetails?: pulumi.Input<pulumi.Input<ProvisioningDetailsArgs>[] | undefined>;
    /**
     * Quantity of the product.
     */
    quantity: pulumi.Input<number>;
}

/**
 * Address details for an order item.
 */
export interface AddressDetailsArgs {
    /**
     * Customer address and contact details.
     */
    forwardAddress: pulumi.Input<AddressPropertiesArgs>;
}

/**
 * Address Properties.
 */
export interface AddressPropertiesArgs {
    /**
     * Type of address based on its usage context.
     */
    addressClassification?: pulumi.Input<string | enums.AddressClassification | undefined>;
    /**
     * Contact details for the address.
     */
    contactDetails?: pulumi.Input<ContactDetailsArgs | undefined>;
    /**
     * Shipping details for the address.
     */
    shippingAddress?: pulumi.Input<ShippingAddressArgs | undefined>;
}

/**
 * Child configuration filter.
 */
export interface ChildConfigurationFilter {
    /**
     * Filter to fetch all child configurations belonging to the given list of configuration types.
     */
    childConfigurationTypes?: (string | enums.ChildConfigurationType)[];
    /**
     * The list of child configuration hierarchy customer wants to filter for the given configuration.
     */
    hierarchyInformations?: HierarchyInformation[];
}

/**
 * Child configuration filter.
 */
export interface ChildConfigurationFilterArgs {
    /**
     * Filter to fetch all child configurations belonging to the given list of configuration types.
     */
    childConfigurationTypes?: pulumi.Input<pulumi.Input<string | enums.ChildConfigurationType>[] | undefined>;
    /**
     * The list of child configuration hierarchy customer wants to filter for the given configuration.
     */
    hierarchyInformations?: pulumi.Input<pulumi.Input<HierarchyInformationArgs>[] | undefined>;
}

/**
 * Configuration filters.
 */
export interface ConfigurationFilter {
    /**
     * Filter to fetch specific child configurations that exist in the configuration. This must be passed to either fetch a list of specific child configurations, or all child configurations of specific types of child configurations.
     */
    childConfigurationFilter?: ChildConfigurationFilter;
    /**
     * Filters specific to product.
     */
    filterableProperty?: FilterableProperty[];
    /**
     * Product hierarchy information.
     */
    hierarchyInformation: HierarchyInformation;
}

/**
 * Configuration filters.
 */
export interface ConfigurationFilterArgs {
    /**
     * Filter to fetch specific child configurations that exist in the configuration. This must be passed to either fetch a list of specific child configurations, or all child configurations of specific types of child configurations.
     */
    childConfigurationFilter?: pulumi.Input<ChildConfigurationFilterArgs | undefined>;
    /**
     * Filters specific to product.
     */
    filterableProperty?: pulumi.Input<pulumi.Input<FilterablePropertyArgs>[] | undefined>;
    /**
     * Product hierarchy information.
     */
    hierarchyInformation: pulumi.Input<HierarchyInformationArgs>;
}

/**
 * Contact Details.
 */
export interface ContactDetailsArgs {
    /**
     * Contact name of the person.
     */
    contactName?: pulumi.Input<string | undefined>;
    /**
     * List of Email-ids to be notified about job progress.
     */
    emailList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Mobile number of the contact person.
     */
    mobile?: pulumi.Input<string | undefined>;
    /**
     * Phone number of the contact person.
     */
    phone?: pulumi.Input<string | undefined>;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: pulumi.Input<string | undefined>;
}

/**
 * Holds Customer subscription details. Clients can display available products to unregistered customers by explicitly passing subscription details.
 */
export interface CustomerSubscriptionDetails {
    /**
     * Location placement Id of a subscription.
     */
    locationPlacementId?: string;
    /**
     * Quota ID of a subscription.
     */
    quotaId: string;
    /**
     * List of registered feature flags for subscription.
     */
    registeredFeatures?: CustomerSubscriptionRegisteredFeatures[];
}

/**
 * Holds Customer subscription details. Clients can display available products to unregistered customers by explicitly passing subscription details.
 */
export interface CustomerSubscriptionDetailsArgs {
    /**
     * Location placement Id of a subscription.
     */
    locationPlacementId?: pulumi.Input<string | undefined>;
    /**
     * Quota ID of a subscription.
     */
    quotaId: pulumi.Input<string>;
    /**
     * List of registered feature flags for subscription.
     */
    registeredFeatures?: pulumi.Input<pulumi.Input<CustomerSubscriptionRegisteredFeaturesArgs>[] | undefined>;
}

/**
 * Represents subscription registered features.
 */
export interface CustomerSubscriptionRegisteredFeatures {
    /**
     * Name of subscription registered feature.
     */
    name?: string;
    /**
     * State of subscription registered feature.
     */
    state?: string;
}

/**
 * Represents subscription registered features.
 */
export interface CustomerSubscriptionRegisteredFeaturesArgs {
    /**
     * Name of subscription registered feature.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * State of subscription registered feature.
     */
    state?: pulumi.Input<string | undefined>;
}

/**
 * Preferences related to the double encryption.
 */
export interface EncryptionPreferencesArgs {
    /**
     * Double encryption status as entered by the customer. It is compulsory to give this parameter if the 'Deny' or 'Disabled' policy is configured.
     */
    doubleEncryptionStatus?: pulumi.Input<string | enums.DoubleEncryptionStatus | undefined>;
}

/**
 * Different types of filters supported and its values.
 */
export interface FilterableProperty {
    /**
     * Values to be filtered.
     */
    supportedValues: string[];
    /**
     * Type of product filter.
     */
    type: string | enums.SupportedFilterTypes;
}

/**
 * Different types of filters supported and its values.
 */
export interface FilterablePropertyArgs {
    /**
     * Values to be filtered.
     */
    supportedValues: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of product filter.
     */
    type: pulumi.Input<string | enums.SupportedFilterTypes>;
}

/**
 * Holds details about product hierarchy information.
 */
export interface HierarchyInformation {
    /**
     * Represents Model Display Name.
     */
    configurationIdDisplayName?: string;
    /**
     * Represents configuration name that uniquely identifies configuration.
     */
    configurationName?: string;
    /**
     * Represents product family name that uniquely identifies product family.
     */
    productFamilyName?: string;
    /**
     * Represents product line name that uniquely identifies product line.
     */
    productLineName?: string;
    /**
     * Represents product name that uniquely identifies product.
     */
    productName?: string;
}

/**
 * Holds details about product hierarchy information.
 */
export interface HierarchyInformationArgs {
    /**
     * Represents Model Display Name.
     */
    configurationIdDisplayName?: pulumi.Input<string | undefined>;
    /**
     * Represents configuration name that uniquely identifies configuration.
     */
    configurationName?: pulumi.Input<string | undefined>;
    /**
     * Represents product family name that uniquely identifies product family.
     */
    productFamilyName?: pulumi.Input<string | undefined>;
    /**
     * Represents product line name that uniquely identifies product line.
     */
    productLineName?: pulumi.Input<string | undefined>;
    /**
     * Represents product name that uniquely identifies product.
     */
    productName?: pulumi.Input<string | undefined>;
}

/**
 * Management resource preference to link device.
 */
export interface ManagementResourcePreferencesArgs {
    /**
     * Customer preferred Management resource ARM ID.
     */
    preferredManagementResourceId?: pulumi.Input<string | undefined>;
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
 * Order item details.
 */
export interface OrderItemDetailsArgs {
    /**
     * Additional notification email list.
     */
    notificationEmailList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Defines the mode of the Order item.
     */
    orderItemMode?: pulumi.Input<string | enums.OrderMode | undefined>;
    /**
     * Order item type.
     */
    orderItemType: pulumi.Input<string | enums.OrderItemType>;
    /**
     * Customer notification Preferences.
     */
    preferences?: pulumi.Input<PreferencesArgs | undefined>;
    /**
     * Represents product details.
     */
    productDetails: pulumi.Input<ProductDetailsArgs>;
    /**
     * Site Related Details.
     */
    siteDetails?: pulumi.Input<SiteDetailsArgs | undefined>;
}
/**
 * orderItemDetailsArgsProvideDefaults sets the appropriate defaults for OrderItemDetailsArgs
 */
export function orderItemDetailsArgsProvideDefaults(val: OrderItemDetailsArgs): OrderItemDetailsArgs {
    return {
        ...val,
        productDetails: pulumi.output(val.productDetails).apply(productDetailsArgsProvideDefaults),
    };
}

/**
 * Preferences related to the order.
 */
export interface PreferencesArgs {
    /**
     * Preferences related to the Encryption.
     */
    encryptionPreferences?: pulumi.Input<EncryptionPreferencesArgs | undefined>;
    /**
     * Preferences related to the Management resource.
     */
    managementResourcePreferences?: pulumi.Input<ManagementResourcePreferencesArgs | undefined>;
    /**
     * Notification preferences.
     */
    notificationPreferences?: pulumi.Input<pulumi.Input<NotificationPreferenceArgs>[] | undefined>;
    /**
     * Preferences related to the Term commitment.
     */
    termCommitmentPreferences?: pulumi.Input<TermCommitmentPreferencesArgs | undefined>;
    /**
     * Preferences related to the shipment logistics of the order.
     */
    transportPreferences?: pulumi.Input<TransportPreferencesArgs | undefined>;
}

/**
 * Represents product details.
 */
export interface ProductDetailsArgs {
    /**
     * Hierarchy of the product which uniquely identifies the product.
     */
    hierarchyInformation: pulumi.Input<HierarchyInformationArgs>;
    /**
     * List of additional configurations customer wants in the order item apart from the ones included in the base configuration.
     */
    optInAdditionalConfigurations?: pulumi.Input<pulumi.Input<AdditionalConfigurationArgs>[] | undefined>;
    /**
     * Device Provisioning Details for Parent.
     */
    parentProvisioningDetails?: pulumi.Input<ProvisioningDetailsArgs | undefined>;
}
/**
 * productDetailsArgsProvideDefaults sets the appropriate defaults for ProductDetailsArgs
 */
export function productDetailsArgsProvideDefaults(val: ProductDetailsArgs): ProductDetailsArgs {
    return {
        ...val,
        parentProvisioningDetails: pulumi.output(val.parentProvisioningDetails).apply(v => v === undefined ? undefined : provisioningDetailsArgsProvideDefaults(v)),
    };
}

/**
 * Details Related To Provision Resource.
 */
export interface ProvisioningDetailsArgs {
    /**
     * Auto Provisioning Details.
     */
    autoProvisioningStatus?: pulumi.Input<string | enums.AutoProvisioningStatus | undefined>;
    /**
     * Management Resource ArmId.
     */
    managementResourceArmId?: pulumi.Input<string | undefined>;
    /**
     * Provisioning Resource Arm ID.
     */
    provisioningArmId?: pulumi.Input<string | undefined>;
    /**
     * Provisioning End Point.
     */
    provisioningEndPoint?: pulumi.Input<string | undefined>;
    /**
     * Quantity of the devices.
     */
    quantity?: pulumi.Input<number | undefined>;
    /**
     * Arc Enabled Resource Arm id.
     */
    readyToConnectArmId?: pulumi.Input<string | undefined>;
    /**
     * Serial Number for the Device.
     */
    serialNumber?: pulumi.Input<string | undefined>;
    /**
     * Vendor Name for the Device , (for 1P devices - Microsoft).
     */
    vendorName?: pulumi.Input<string | undefined>;
}
/**
 * provisioningDetailsArgsProvideDefaults sets the appropriate defaults for ProvisioningDetailsArgs
 */
export function provisioningDetailsArgsProvideDefaults(val: ProvisioningDetailsArgs): ProvisioningDetailsArgs {
    return {
        ...val,
        quantity: (val.quantity) ?? 0,
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
     * Name of the State or Province.
     */
    stateOrProvince?: pulumi.Input<string | undefined>;
    /**
     * Street Address line 1.
     */
    streetAddress1?: pulumi.Input<string | undefined>;
    /**
     * Street Address line 2.
     */
    streetAddress2?: pulumi.Input<string | undefined>;
    /**
     * Street Address line 3.
     */
    streetAddress3?: pulumi.Input<string | undefined>;
    /**
     * Extended Zip Code.
     */
    zipExtendedCode?: pulumi.Input<string | undefined>;
}

/**
 * Represents Site Related Details.
 */
export interface SiteDetailsArgs {
    /**
     * Unique Id, Identifying A Site.
     */
    siteId: pulumi.Input<string>;
}

/**
 * Term Commitment preference received from customer.
 */
export interface TermCommitmentPreferencesArgs {
    /**
     * Customer preferred Term Duration.
     */
    preferredTermCommitmentDuration?: pulumi.Input<string | undefined>;
    /**
     * Term Commitment Type
     */
    preferredTermCommitmentType: pulumi.Input<string | enums.TermCommitmentType>;
}

/**
 * Preferences related to the shipment logistics of the sku.
 */
export interface TransportPreferencesArgs {
    /**
     * Indicates Shipment Logistics type that the customer preferred.
     */
    preferredShipmentType: pulumi.Input<string | enums.TransportShipmentTypes>;
}
