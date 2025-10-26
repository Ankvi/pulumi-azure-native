import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Catalog claim for a discount.
 */
export interface CatalogClaimsItemResponse {
    catalogClaimsItemType?: string;
    value?: string;
}

/**
 * Condition for a discount.
 */
export interface ConditionsItemResponse {
    conditionName?: string;
    type?: string;
    /**
     * These items are open-ended strings.
     */
    value?: string[];
}

/**
 * Custom price properties for a given discount.
 */
export interface CustomPricePropertiesResponse {
    /**
     * The billing period of the priceable node. Validation: Optional, Maximum length 128 characters. Only allowed if the availability derived by market, product, sku, and claims has terms and at least one of those terms has a billing period. When specified, termUnits must be specified.
     */
    billingPeriod?: string;
    /**
     * The set of BigCat claims. Validation: Required. Must contain AgreementType, NationalCloud, and PricingAudience claims. Additionally requires AccessPass claim when creating custom price with action == consume on the pricing instructions.
     */
    catalogClaims: CatalogClaimsItemResponse[];
    /**
     * The catalog instance where the priceable node lives. Validation: Required. No defined format, will vary per team.
     */
    catalogId: string;
    /**
     * The set of market set prices of the priceable node. Validation: Required. Must contain at least one element.
     */
    marketSetPrices: MarketSetPricesItemsResponse[];
    /**
     * Must be present if the market, product, sku, and claims, and optional term information resolves to multiple availabilities that only differ by meter type. Validation: Maximum length 128 characters.
     */
    meterType?: string;
    /**
     * The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling.
     */
    ruleType: string;
    /**
     * The term units for the priceable node. Validation: Optional, Maximum length 128 characters. Must be present if and only if the availability derived by market, product, sku, and claims has terms.
     */
    termUnits?: string;
}

/**
 * Discount type properties including product family name, product id, sku, and custom price properties. Allows multiple entries in marketSetPrices.
 */
export interface DiscountCustomPriceMultiCurrencyResponse {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: string;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: ConditionsItemResponse[];
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: CustomPricePropertiesResponse;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: string;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: number;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPriceMultiCurrency'.
     */
    discountType: "CustomPriceMultiCurrency";
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: PriceGuaranteePropertiesResponse;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: string;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: string;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: string;
}

/**
 * Discount type properties including product family name, product id, sku, and custom price properties. Allows a single entry in marketSetPrices.
 */
export interface DiscountCustomPriceResponse {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: string;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: ConditionsItemResponse[];
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: CustomPricePropertiesResponse;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: string;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: number;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPrice'.
     */
    discountType: "CustomPrice";
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: PriceGuaranteePropertiesResponse;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: string;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: string;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: string;
}

/**
 * Discount type properties including product family name
 */
export interface DiscountProductFamilyResponse {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: string;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: ConditionsItemResponse[];
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: string;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: number;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'ProductFamily'.
     */
    discountType: "ProductFamily";
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: PriceGuaranteePropertiesResponse;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: string;
}

/**
 * Discount type properties including product family name and product id.
 */
export interface DiscountProductResponse {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: string;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: ConditionsItemResponse[];
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: string;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: number;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Product'.
     */
    discountType: "Product";
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: PriceGuaranteePropertiesResponse;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: string;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: string;
}

/**
 * Discount type properties including product family name, product id, and sku id.
 */
export interface DiscountTypeProductSkuResponse {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: string;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: ConditionsItemResponse[];
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: string;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: number;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Sku'.
     */
    discountType: "Sku";
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: PriceGuaranteePropertiesResponse;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: string;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: string;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: string;
}

/**
 * Entity type for affiliate discounts
 */
export interface EntityTypeAffiliateDiscountResponse {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: string;
    /**
     * Fully-qualified identifier of the benefit under applicable benefit list.
     */
    benefitResourceId: string;
    /**
     * Billing account resource id where the discount metadata is present.
     */
    billingAccountResourceId: string;
    /**
     * Billing profile resource id where the discount is scoped to.
     */
    billingProfileResourceId: string;
    /**
     * Customer resource id where the discount is scoped to.
     */
    customerResourceId: string;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: string;
    /**
     * End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate.
     */
    endAt: string;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     * Expected value is 'Affiliate'.
     */
    entityType: "Affiliate";
    /**
     * This will be present in the response if the primary has a resource ID
     */
    primaryResourceId: string;
    /**
     * This is the catalog UPN for the product.
     */
    productCode: string;
    /**
     * The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled.
     */
    provisioningState: string;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    startAt: string;
    /**
     * Represents the current status of the discount.
     */
    status: string;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    systemId?: string;
}

/**
 * Entity type for primary discounts
 */
export interface EntityTypePrimaryDiscountResponse {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: string;
    /**
     * Fully-qualified identifier of the benefit under applicable benefit list.
     */
    benefitResourceId: string;
    /**
     * Billing account resource id where the discount metadata is present.
     */
    billingAccountResourceId: string;
    /**
     * Billing profile resource id where the discount is scoped to.
     */
    billingProfileResourceId: string;
    /**
     * Customer resource id where the discount is scoped to.
     */
    customerResourceId: string;
    /**
     * This defines the conditions for a given discount type.
     */
    discountTypeProperties?: DiscountCustomPriceResponse | DiscountCustomPriceMultiCurrencyResponse | DiscountProductResponse | DiscountProductFamilyResponse | DiscountTypeProductSkuResponse;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: string;
    /**
     * End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate.
     */
    endAt: string;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     * Expected value is 'Primary'.
     */
    entityType: "Primary";
    /**
     * This is the catalog UPN for the product.
     */
    productCode: string;
    /**
     * The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled.
     */
    provisioningState: string;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    startAt: string;
    /**
     * Represents the current status of the discount.
     */
    status: string;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    systemId?: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Items in the MarketSetPrices array.
 */
export interface MarketSetPricesItemsResponse {
    /**
     * The currency of the locked price value. Validation: Required. Must be a valid ISO 4217 3-letter currency code.
     */
    currency: string;
    markets: string[];
    /**
     * The locked price for the priceable node. Validation: Required. Must be greater than or equal to 0. If the case of billing plans. This represents the price for each cycle charge.
     */
    value: number;
}

/**
 * Plan for the resource.
 */
export interface PlanResponse {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: string;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
     */
    product: string;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: string;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: string;
    /**
     * The version of the desired product/artifact.
     */
    version?: string;
}

/**
 * Set only in price guarantee scenario.
 */
export interface PriceGuaranteePropertiesResponse {
    /**
     * The date on which prices are to be used for guarantee calculation. Validation: expected to be 00 hours, Format: 2024-09-30T00:00:00Z. Must be in UTC.
     */
    priceGuaranteeDate?: string;
    /**
     * Supported values: Protected, Locked
     */
    pricingPolicy?: string;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
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
