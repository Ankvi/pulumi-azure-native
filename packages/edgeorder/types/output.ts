import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Additional Configuration details.
 */
export interface AdditionalConfigurationResponse {
    /**
     * Hierarchy of the product which uniquely identifies the configuration.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * List Provisioning Details for Devices in Additional Config.
     */
    provisioningDetails?: ProvisioningDetailsResponse[];
    /**
     * Quantity of the product.
     */
    quantity: number;
}

/**
 * Address details for an order item.
 */
export interface AddressDetailsResponse {
    /**
     * Customer address and contact details.
     */
    forwardAddress: AddressPropertiesResponse;
    /**
     * Return shipping address.
     */
    returnAddress: AddressPropertiesResponse;
}

/**
 * Address Properties.
 */
export interface AddressPropertiesResponse {
    /**
     * Type of address based on its usage context.
     */
    addressClassification?: string;
    /**
     * Status of address validation.
     */
    addressValidationStatus: string;
    /**
     * Contact details for the address.
     */
    contactDetails?: ContactDetailsResponse;
    /**
     * Provisioning state
     */
    provisioningState: string;
    /**
     * Shipping details for the address.
     */
    shippingAddress?: ShippingAddressResponse;
}

/**
 * Availability information of a product system.
 */
export interface AvailabilityInformationResponse {
    /**
     * Current availability stage of the product.
     */
    availabilityStage: string;
    /**
     * Reason why the product is disabled.
     */
    disabledReason: string;
    /**
     * Message for why the product is disabled.
     */
    disabledReasonMessage: string;
}

/**
 * Holds billing meter details for each type of billing.
 */
export interface BillingMeterDetailsResponse {
    /**
     * Frequency of recurrence.
     */
    frequency: string;
    /**
     * Represents MeterDetails.
     */
    meterDetails: Pav2MeterDetailsResponse | PurchaseMeterDetailsResponse;
    /**
     * Represents Metering type (eg one-time or recurrent).
     */
    meteringType: string;
    /**
     * Represents Billing type name.
     */
    name: string;
    /**
     * Represent Term Type details.
     */
    termTypeDetails: TermTypeDetailsResponse;
}

/**
 * Category related properties of a child configuration.
 */
export interface CategoryInformationResponse {
    /**
     * Category display name of the child configuration.
     */
    categoryDisplayName?: string;
    /**
     * Category name of the child configuration.
     */
    categoryName?: string;
    /**
     * Description text for the category.
     */
    description?: string;
    /**
     * Links for the category.
     */
    links?: LinkResponse[];
}

/**
 * Child configuration object.
 */
export interface ChildConfigurationResponse {
    /**
     * Availability information of the product system.
     */
    availabilityInformation: AvailabilityInformationResponse;
    /**
     * Child configuration type.
     */
    childConfigurationType: string;
    /**
     * Different types of child configurations which exist for this configuration, these can be used to populate the child configuration filter.
     */
    childConfigurationTypes: string[];
    /**
     * Cost information for the product system.
     */
    costInformation: CostInformationResponse;
    /**
     * Description related to the product system.
     */
    description: DescriptionResponse;
    /**
     * Dimensions of the configuration.
     */
    dimensions: DimensionsResponse;
    /**
     * Display Name for the product system.
     */
    displayName: string;
    /**
     * List of filters supported for a product.
     */
    filterableProperties: FilterablePropertyResponse[];
    /**
     * The entity responsible for fulfillment of the item at the given hierarchy level.
     */
    fulfilledBy: string;
    /**
     * Child configurations present for the configuration after applying child configuration filter, grouped by the category name of the child configuration.
     */
    groupedChildConfigurations: GroupedChildConfigurationsResponse[];
    /**
     * Hierarchy information of a product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Image information for the product system.
     */
    imageInformation: ImageInformationResponse[];
    /**
     * Flag to indicate if the child configuration is part of the base configuration, which means the customer need not pass this configuration in OptInAdditionalConfigurations while placing an order, it will be shipped by default.
     */
    isPartOfBaseConfiguration: boolean;
    /**
     * Maximum quantity a customer can order while choosing this configuration.
     */
    maximumQuantity: number;
    /**
     * Minimum quantity a customer can order while choosing this configuration.
     */
    minimumQuantity: number;
    /**
     * Determining nature of provisioning that the configuration supports.
     */
    provisioningSupport: string;
    /**
     * Specifications of the configuration.
     */
    specifications: SpecificationResponse[];
    /**
     * The Term Commitment Durations that are supported for a configuration.
     */
    supportedTermCommitmentDurations: string[];
}

/**
 * Device details for configuration.
 */
export interface ConfigurationDeviceDetailsResponse {
    /**
     * List of device details.
     */
    deviceDetails: DeviceDetailsResponse[];
    /**
     * Display details of the product.
     */
    displayInfo?: DisplayInfoResponse;
    /**
     * Hierarchy of the product which uniquely identifies the configuration.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Identification type of the configuration.
     */
    identificationType: string;
    /**
     * Quantity of the product.
     */
    quantity: number;
    /**
     * Term Commitment Information of the Device.
     */
    termCommitmentInformation: TermCommitmentInformationResponse;
}
/**
 * configurationDeviceDetailsResponseProvideDefaults sets the appropriate defaults for ConfigurationDeviceDetailsResponse
 */
export function configurationDeviceDetailsResponseProvideDefaults(val: ConfigurationDeviceDetailsResponse): ConfigurationDeviceDetailsResponse {
    return {
        ...val,
        termCommitmentInformation: termCommitmentInformationResponseProvideDefaults(val.termCommitmentInformation),
    };
}

/**
 * Configuration object.
 */
export interface ConfigurationResponse {
    /**
     * Availability information of the product system.
     */
    availabilityInformation: AvailabilityInformationResponse;
    /**
     * Different types of child configurations which exist for this configuration, these can be used to populate the child configuration filter.
     */
    childConfigurationTypes: string[];
    /**
     * Cost information for the product system.
     */
    costInformation: CostInformationResponse;
    /**
     * Description related to the product system.
     */
    description: DescriptionResponse;
    /**
     * Dimensions of the configuration.
     */
    dimensions: DimensionsResponse;
    /**
     * Display Name for the product system.
     */
    displayName: string;
    /**
     * List of filters supported for a product.
     */
    filterableProperties: FilterablePropertyResponse[];
    /**
     * The entity responsible for fulfillment of the item at the given hierarchy level.
     */
    fulfilledBy: string;
    /**
     * Child configurations present for the configuration after applying child configuration filter, grouped by the category name of the child configuration.
     */
    groupedChildConfigurations: GroupedChildConfigurationsResponse[];
    /**
     * Hierarchy information of a product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Image information for the product system.
     */
    imageInformation: ImageInformationResponse[];
    /**
     * Determining nature of provisioning that the configuration supports.
     */
    provisioningSupport: string;
    /**
     * Specifications of the configuration.
     */
    specifications: SpecificationResponse[];
    /**
     * The Term Commitment Durations that are supported for a configuration.
     */
    supportedTermCommitmentDurations: string[];
}

/**
 * Contact Details.
 */
export interface ContactDetailsResponse {
    /**
     * Contact name of the person.
     */
    contactName?: string;
    /**
     * List of Email-ids to be notified about job progress.
     */
    emailList?: string[];
    /**
     * Mobile number of the contact person.
     */
    mobile?: string;
    /**
     * Phone number of the contact person.
     */
    phone?: string;
    /**
     * Phone extension number of the contact person.
     */
    phoneExtension?: string;
}

/**
 * Cost information for the product system.
 */
export interface CostInformationResponse {
    /**
     * Default url to display billing information.
     */
    billingInfoUrl: string;
    /**
     * Details on the various billing aspects for the product system.
     */
    billingMeterDetails: BillingMeterDetailsResponse[];
}

/**
 * Description related properties of a product system.
 */
export interface DescriptionResponse {
    /**
     * Attributes for the product system.
     */
    attributes: string[];
    /**
     * Type of description.
     */
    descriptionType: string;
    /**
     * Keywords for the product system.
     */
    keywords: string[];
    /**
     * Links for the product system.
     */
    links: LinkResponse[];
    /**
     * Long description of the product system.
     */
    longDescription: string;
    /**
     * Short description of the product system.
     */
    shortDescription: string;
}

/**
 * Device details.
 */
export interface DeviceDetailsResponse {
    /**
     * Device serial number to be displayed.
     */
    displaySerialNumber: string;
    /**
     * Management Resource Id.
     */
    managementResourceId: string;
    /**
     * Management Resource Tenant ID.
     */
    managementResourceTenantId: string;
    /**
     * Provisioning Details for the device.
     */
    provisioningDetails: ProvisioningDetailsResponse;
    /**
     * Determining nature of provisioning that the configuration supports.
     */
    provisioningSupport: string;
    /**
     * Device serial number.
     */
    serialNumber: string;
}
/**
 * deviceDetailsResponseProvideDefaults sets the appropriate defaults for DeviceDetailsResponse
 */
export function deviceDetailsResponseProvideDefaults(val: DeviceDetailsResponse): DeviceDetailsResponse {
    return {
        ...val,
        provisioningDetails: provisioningDetailsResponseProvideDefaults(val.provisioningDetails),
    };
}

/**
 * Proof of possession details.
 */
export interface DevicePresenceVerificationDetailsResponse {
    /**
     * Insights on current status.
     */
    message: string;
    /**
     * Proof of possession status.
     */
    status: string;
}

/**
 * Dimensions of a configuration.
 */
export interface DimensionsResponse {
    /**
     * Depth of the device.
     */
    depth: number;
    /**
     * Height of the device.
     */
    height: number;
    /**
     * Length of the device.
     */
    length: number;
    /**
     * Unit for the dimensions of length, height and width.
     */
    lengthHeightUnit: string;
    /**
     * Weight of the device.
     */
    weight: number;
    /**
     * Unit for the dimensions of weight.
     */
    weightUnit: string;
    /**
     * Width of the device.
     */
    width: number;
}

/**
 * Describes product display information.
 */
export interface DisplayInfoResponse {
    /**
     * Configuration display name.
     */
    configurationDisplayName: string;
    /**
     * Product family display name.
     */
    productFamilyDisplayName: string;
}

/**
 * Preferences related to the double encryption.
 */
export interface EncryptionPreferencesResponse {
    /**
     * Double encryption status as entered by the customer. It is compulsory to give this parameter if the 'Deny' or 'Disabled' policy is configured.
     */
    doubleEncryptionStatus?: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Different types of filters supported and its values.
 */
export interface FilterablePropertyResponse {
    /**
     * Values to be filtered.
     */
    supportedValues: string[];
    /**
     * Type of product filter.
     */
    type: string;
}

/**
 * Forward shipment details.
 */
export interface ForwardShippingDetailsResponse {
    /**
     * Carrier Name for display purpose. Not to be used for any processing.
     */
    carrierDisplayName: string;
    /**
     * Name of the carrier.
     */
    carrierName: string;
    /**
     * TrackingId of the package.
     */
    trackingId: string;
    /**
     * TrackingUrl of the package.
     */
    trackingUrl: string;
}

/**
 * Grouped child configuration object.
 */
export interface GroupedChildConfigurationsResponse {
    /**
     * Category information.
     */
    categoryInformation: CategoryInformationResponse;
    /**
     * List of child configurations.
     */
    childConfigurations: ChildConfigurationResponse[];
}

/**
 * Holds details about product hierarchy information.
 */
export interface HierarchyInformationResponse {
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
 * Image for the product.
 */
export interface ImageInformationResponse {
    /**
     * Type of the image.
     */
    imageType: string;
    /**
     * Url of the image.
     */
    imageUrl: string;
}

/**
 * Returns link related to the product.
 */
export interface LinkResponse {
    /**
     * Type of link.
     */
    linkType: string;
    /**
     * Url of the link.
     */
    linkUrl: string;
}

/**
 * Management resource preference to link device.
 */
export interface ManagementResourcePreferencesResponse {
    /**
     * Customer preferred Management resource ARM ID.
     */
    preferredManagementResourceId?: string;
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
 * Order item details.
 */
export interface OrderItemDetailsResponse {
    /**
     * Cancellation reason.
     */
    cancellationReason: string;
    /**
     * Describes whether the order item is cancellable or not.
     */
    cancellationStatus: string;
    /**
     * Current Order item Status.
     */
    currentStage: StageDetailsResponse;
    /**
     * Describes whether the order item is deletable or not.
     */
    deletionStatus: string;
    /**
     * Top level error for the job.
     */
    error: ErrorDetailResponse;
    /**
     * Forward Package Shipping details.
     */
    forwardShippingDetails: ForwardShippingDetailsResponse;
    /**
     * List of parent RP details supported for configuration.
     */
    managementRpDetailsList: ResourceProviderDetailsResponse[];
    /**
     * Additional notification email list.
     */
    notificationEmailList?: string[];
    /**
     * Defines the mode of the Order item.
     */
    orderItemMode?: string;
    /**
     * Order item status history.
     */
    orderItemStageHistory: StageDetailsResponse[];
    /**
     * Order item type.
     */
    orderItemType: string;
    /**
     * Customer notification Preferences.
     */
    preferences?: PreferencesResponse;
    /**
     * Represents product details.
     */
    productDetails: ProductDetailsResponse;
    /**
     * Return reason.
     */
    returnReason: string;
    /**
     * Describes whether the order item is returnable or not.
     */
    returnStatus: string;
    /**
     * Reverse Package Shipping details.
     */
    reverseShippingDetails: ReverseShippingDetailsResponse;
    /**
     * Site Related Details.
     */
    siteDetails?: SiteDetailsResponse;
}
/**
 * orderItemDetailsResponseProvideDefaults sets the appropriate defaults for OrderItemDetailsResponse
 */
export function orderItemDetailsResponseProvideDefaults(val: OrderItemDetailsResponse): OrderItemDetailsResponse {
    return {
        ...val,
        productDetails: productDetailsResponseProvideDefaults(val.productDetails),
    };
}

/**
 * Billing type PAV2 meter details.
 */
export interface Pav2MeterDetailsResponse {
    /**
     * Represents billing type.
     * Expected value is 'Pav2'.
     */
    billingType: "Pav2";
    /**
     * Charging type.
     */
    chargingType: string;
    /**
     * Validation status of requested data center and transport.
     */
    meterGuid: string;
    /**
     * Billing unit applicable for Pav2 billing.
     */
    multiplier: number;
}

/**
 * Preferences related to the order.
 */
export interface PreferencesResponse {
    /**
     * Preferences related to the Encryption.
     */
    encryptionPreferences?: EncryptionPreferencesResponse;
    /**
     * Preferences related to the Management resource.
     */
    managementResourcePreferences?: ManagementResourcePreferencesResponse;
    /**
     * Notification preferences.
     */
    notificationPreferences?: NotificationPreferenceResponse[];
    /**
     * Preferences related to the Term commitment.
     */
    termCommitmentPreferences?: TermCommitmentPreferencesResponse;
    /**
     * Preferences related to the shipment logistics of the order.
     */
    transportPreferences?: TransportPreferencesResponse;
}

/**
 * Represents product details.
 */
export interface ProductDetailsResponse {
    /**
     * Details of all child configurations that are part of the order item.
     */
    childConfigurationDeviceDetails: ConfigurationDeviceDetailsResponse[];
    /**
     * Display details of the product.
     */
    displayInfo?: DisplayInfoResponse;
    /**
     * Hierarchy of the product which uniquely identifies the product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Identification type of the configuration.
     */
    identificationType: string;
    /**
     * List of additional configurations customer wants in the order item apart from the ones included in the base configuration.
     */
    optInAdditionalConfigurations?: AdditionalConfigurationResponse[];
    /**
     * Device details of the parent configuration.
     */
    parentDeviceDetails: DeviceDetailsResponse;
    /**
     * Device Provisioning Details for Parent.
     */
    parentProvisioningDetails?: ProvisioningDetailsResponse;
    /**
     * Double encryption status of the configuration. Read-only field.
     */
    productDoubleEncryptionStatus: string;
    /**
     * Term Commitment Information of the Device.
     */
    termCommitmentInformation: TermCommitmentInformationResponse;
}
/**
 * productDetailsResponseProvideDefaults sets the appropriate defaults for ProductDetailsResponse
 */
export function productDetailsResponseProvideDefaults(val: ProductDetailsResponse): ProductDetailsResponse {
    return {
        ...val,
        parentDeviceDetails: deviceDetailsResponseProvideDefaults(val.parentDeviceDetails),
        parentProvisioningDetails: (val.parentProvisioningDetails ? provisioningDetailsResponseProvideDefaults(val.parentProvisioningDetails) : undefined),
        termCommitmentInformation: termCommitmentInformationResponseProvideDefaults(val.termCommitmentInformation),
    };
}

/**
 * Product Family.
 */
export interface ProductFamilyResponse {
    /**
     * Availability information of the product system.
     */
    availabilityInformation: AvailabilityInformationResponse;
    /**
     * Cost information for the product system.
     */
    costInformation: CostInformationResponse;
    /**
     * Description related to the product system.
     */
    description: DescriptionResponse;
    /**
     * Display Name for the product system.
     */
    displayName: string;
    /**
     * List of filters supported for a product.
     */
    filterableProperties: FilterablePropertyResponse[];
    /**
     * The entity responsible for fulfillment of the item at the given hierarchy level.
     */
    fulfilledBy: string;
    /**
     * Hierarchy information of a product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Image information for the product system.
     */
    imageInformation: ImageInformationResponse[];
    /**
     * List of product lines supported in the product family.
     */
    productLines: ProductLineResponse[];
    /**
     * Contains details related to resource provider.
     */
    resourceProviderDetails?: ResourceProviderDetailsResponse[];
}

/**
 * Product line.
 */
export interface ProductLineResponse {
    /**
     * Availability information of the product system.
     */
    availabilityInformation: AvailabilityInformationResponse;
    /**
     * Cost information for the product system.
     */
    costInformation: CostInformationResponse;
    /**
     * Description related to the product system.
     */
    description: DescriptionResponse;
    /**
     * Display Name for the product system.
     */
    displayName: string;
    /**
     * List of filters supported for a product.
     */
    filterableProperties: FilterablePropertyResponse[];
    /**
     * The entity responsible for fulfillment of the item at the given hierarchy level.
     */
    fulfilledBy: string;
    /**
     * Hierarchy information of a product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Image information for the product system.
     */
    imageInformation: ImageInformationResponse[];
    /**
     * List of products in the product line.
     */
    products: ProductResponse[];
}

/**
 * Represents a product.
 */
export interface ProductResponse {
    /**
     * Availability information of the product system.
     */
    availabilityInformation: AvailabilityInformationResponse;
    /**
     * List of configurations for the product.
     */
    configurations: ConfigurationResponse[];
    /**
     * Cost information for the product system.
     */
    costInformation: CostInformationResponse;
    /**
     * Description related to the product system.
     */
    description: DescriptionResponse;
    /**
     * Display Name for the product system.
     */
    displayName: string;
    /**
     * List of filters supported for a product.
     */
    filterableProperties: FilterablePropertyResponse[];
    /**
     * The entity responsible for fulfillment of the item at the given hierarchy level.
     */
    fulfilledBy: string;
    /**
     * Hierarchy information of a product.
     */
    hierarchyInformation: HierarchyInformationResponse;
    /**
     * Image information for the product system.
     */
    imageInformation: ImageInformationResponse[];
}

/**
 * Details Related To Provision Resource.
 */
export interface ProvisioningDetailsResponse {
    /**
     * Auto Provisioning Details.
     */
    autoProvisioningStatus?: string;
    /**
     * Proof of possession details.
     */
    devicePresenceVerification?: DevicePresenceVerificationDetailsResponse;
    /**
     * Management Resource ArmId.
     */
    managementResourceArmId?: string;
    /**
     * Provisioning Resource Arm ID.
     */
    provisioningArmId?: string;
    /**
     * Provisioning End Point.
     */
    provisioningEndPoint?: string;
    /**
     * Quantity of the devices.
     */
    quantity?: number;
    /**
     * Arc Enabled Resource Arm id.
     */
    readyToConnectArmId?: string;
    /**
     * Serial Number for the Device.
     */
    serialNumber?: string;
    /**
     * Unique Identity for a Device.
     */
    uniqueDeviceIdentifier: string;
    /**
     * Vendor Name for the Device , (for 1P devices - Microsoft).
     */
    vendorName?: string;
}
/**
 * provisioningDetailsResponseProvideDefaults sets the appropriate defaults for ProvisioningDetailsResponse
 */
export function provisioningDetailsResponseProvideDefaults(val: ProvisioningDetailsResponse): ProvisioningDetailsResponse {
    return {
        ...val,
        quantity: (val.quantity) ?? 0,
    };
}

/**
 * Billing type Purchase meter details.
 */
export interface PurchaseMeterDetailsResponse {
    /**
     * Represents billing type.
     * Expected value is 'Purchase'.
     */
    billingType: "Purchase";
    /**
     * Charging type.
     */
    chargingType: string;
    /**
     * Billing unit applicable for Pav2 billing.
     */
    multiplier: number;
    /**
     * Product Id.
     */
    productId: string;
    /**
     * Sku Id.
     */
    skuId: string;
    /**
     * Term Id.
     */
    termId: string;
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
 * Management RP details.
 */
export interface ResourceProviderDetailsResponse {
    /**
     * Resource provider namespace.
     */
    resourceProviderNamespace: string;
}

/**
 * Reverse shipment details.
 */
export interface ReverseShippingDetailsResponse {
    /**
     * Carrier Name for display purpose. Not to be used for any processing.
     */
    carrierDisplayName: string;
    /**
     * Name of the carrier.
     */
    carrierName: string;
    /**
     * SAS key to download the reverse shipment label of the package.
     */
    sasKeyForLabel: string;
    /**
     * TrackingId of the package.
     */
    trackingId: string;
    /**
     * TrackingUrl of the package.
     */
    trackingUrl: string;
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
     * Name of the State or Province.
     */
    stateOrProvince?: string;
    /**
     * Street Address line 1.
     */
    streetAddress1?: string;
    /**
     * Street Address line 2.
     */
    streetAddress2?: string;
    /**
     * Street Address line 3.
     */
    streetAddress3?: string;
    /**
     * Extended Zip Code.
     */
    zipExtendedCode?: string;
}

/**
 * Represents Site Related Details.
 */
export interface SiteDetailsResponse {
    /**
     * Unique Id, Identifying A Site.
     */
    siteId: string;
}

/**
 * Specification of the configurations.
 */
export interface SpecificationResponse {
    /**
     * Name of the specification.
     */
    name: string;
    /**
     * Value of the specification.
     */
    value: string;
}

/**
 * Resource stage details.
 */
export interface StageDetailsResponse {
    /**
     * Display name of the resource stage.
     */
    displayName: string;
    /**
     * Stage name.
     */
    stageName: string;
    /**
     * Stage status.
     */
    stageStatus: string;
    /**
     * Stage start time.
     */
    startTime: string;
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

/**
 * Term Commitment Information.
 */
export interface TermCommitmentInformationResponse {
    /**
     * Number of Days Pending for Term Commitment
     */
    pendingDaysForTerm: number;
    /**
     * Term Commitment Type
     */
    termCommitmentType: string;
    /**
     * Term Commitment Duration. Currently Supporting P365D, P1095D
     */
    termCommitmentTypeDuration: string;
}
/**
 * termCommitmentInformationResponseProvideDefaults sets the appropriate defaults for TermCommitmentInformationResponse
 */
export function termCommitmentInformationResponseProvideDefaults(val: TermCommitmentInformationResponse): TermCommitmentInformationResponse {
    return {
        ...val,
        pendingDaysForTerm: (val.pendingDaysForTerm) ?? 0,
    };
}

/**
 * Term Commitment preference received from customer.
 */
export interface TermCommitmentPreferencesResponse {
    /**
     * Customer preferred Term Duration.
     */
    preferredTermCommitmentDuration?: string;
    /**
     * Term Commitment Type
     */
    preferredTermCommitmentType: string;
}

/**
 * Holds details about term type and duration.
 */
export interface TermTypeDetailsResponse {
    /**
     * Term Commitment Type
     */
    termType: string;
    /**
     * Duration for the term type.
     */
    termTypeDuration: string;
}

/**
 * Preferences related to the shipment logistics of the sku.
 */
export interface TransportPreferencesResponse {
    /**
     * Indicates Shipment Logistics type that the customer preferred.
     */
    preferredShipmentType: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}
