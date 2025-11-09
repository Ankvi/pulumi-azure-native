import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Catalog claim for a discount.
 */
export interface CatalogClaimsItemArgs {
    catalogClaimsItemType?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * Condition for a discount.
 */
export interface ConditionsItemArgs {
    conditionName?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    /**
     * These items are open-ended strings.
     */
    value?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Custom price properties for a given discount.
 */
export interface CustomPricePropertiesArgs {
    /**
     * The billing period of the priceable node. Validation: Optional, Maximum length 128 characters. Only allowed if the availability derived by market, product, sku, and claims has terms and at least one of those terms has a billing period. When specified, termUnits must be specified.
     */
    billingPeriod?: pulumi.Input<string>;
    /**
     * The set of BigCat claims. Validation: Required. Must contain AgreementType, NationalCloud, and PricingAudience claims. Additionally requires AccessPass claim when creating custom price with action == consume on the pricing instructions.
     */
    catalogClaims: pulumi.Input<pulumi.Input<CatalogClaimsItemArgs>[]>;
    /**
     * The catalog instance where the priceable node lives. Validation: Required. No defined format, will vary per team.
     */
    catalogId: pulumi.Input<string>;
    /**
     * The set of market set prices of the priceable node. Validation: Required. Must contain at least one element.
     */
    marketSetPrices: pulumi.Input<pulumi.Input<MarketSetPricesItemsArgs>[]>;
    /**
     * Must be present if the market, product, sku, and claims, and optional term information resolves to multiple availabilities that only differ by meter type. Validation: Maximum length 128 characters.
     */
    meterType?: pulumi.Input<string>;
    /**
     * The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling.
     */
    ruleType: pulumi.Input<string | enums.DiscountRuleType>;
    /**
     * The term units for the priceable node. Validation: Optional, Maximum length 128 characters. Must be present if and only if the availability derived by market, product, sku, and claims has terms.
     */
    termUnits?: pulumi.Input<string>;
}

/**
 * Discount type properties including product family name, product id, sku, and custom price properties. Allows a single entry in marketSetPrices.
 */
export interface DiscountCustomPriceArgs {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: pulumi.Input<string | enums.ApplyDiscountOn>;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[]>;
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: pulumi.Input<CustomPricePropertiesArgs>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPrice'.
     */
    discountType: pulumi.Input<"CustomPrice">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string>;
}

/**
 * Discount type properties including product family name, product id, sku, and custom price properties. Allows multiple entries in marketSetPrices.
 */
export interface DiscountCustomPriceMultiCurrencyArgs {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: pulumi.Input<string | enums.ApplyDiscountOn>;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[]>;
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: pulumi.Input<CustomPricePropertiesArgs>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPriceMultiCurrency'.
     */
    discountType: pulumi.Input<"CustomPriceMultiCurrency">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string>;
}

/**
 * Discount type properties including product family name and product id.
 */
export interface DiscountProductArgs {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: pulumi.Input<string | enums.ApplyDiscountOn>;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[]>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Product'.
     */
    discountType: pulumi.Input<"Product">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string>;
}

/**
 * Discount type properties including product family name
 */
export interface DiscountProductFamilyArgs {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: pulumi.Input<string | enums.ApplyDiscountOn>;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[]>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'ProductFamily'.
     */
    discountType: pulumi.Input<"ProductFamily">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string>;
}

/**
 * Discount type properties including product family name, product id, and sku id.
 */
export interface DiscountTypeProductSkuArgs {
    /**
     * The customer action on which the discount is applied. Supported values are Purchase, Consume, and Renew. Validation: Required, one of supported values.
     */
    applyDiscountOn: pulumi.Input<string | enums.ApplyDiscountOn>;
    /**
     * Array of conditions for the discount. Validation: Optional. Maximum length is 1000.
     */
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[]>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Sku'.
     */
    discountType: pulumi.Input<"Sku">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string>;
}

/**
 * Entity type for affiliate discounts
 */
export interface EntityTypeAffiliateDiscountArgs {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: pulumi.Input<string | enums.DiscountAppliedScopeType>;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: pulumi.Input<string>;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     * Expected value is 'Affiliate'.
     */
    entityType: pulumi.Input<"Affiliate">;
    /**
     * This is the catalog UPN for the product.
     */
    productCode: pulumi.Input<string>;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    startAt: pulumi.Input<string>;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    systemId?: pulumi.Input<string>;
}

/**
 * Entity type for primary discounts
 */
export interface EntityTypePrimaryDiscountArgs {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: pulumi.Input<string | enums.DiscountAppliedScopeType>;
    /**
     * This defines the conditions for a given discount type.
     */
    discountTypeProperties?: pulumi.Input<DiscountCustomPriceArgs | DiscountCustomPriceMultiCurrencyArgs | DiscountProductArgs | DiscountProductFamilyArgs | DiscountTypeProductSkuArgs>;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: pulumi.Input<string>;
    /**
     * End date of the discount. No duration will be supported. Allowed value is any date greater than or equal to startDate.
     */
    endAt: pulumi.Input<string>;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     * Expected value is 'Primary'.
     */
    entityType: pulumi.Input<"Primary">;
    /**
     * This is the catalog UPN for the product.
     */
    productCode: pulumi.Input<string>;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    startAt: pulumi.Input<string>;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    systemId?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Items in the MarketSetPrices array.
 */
export interface MarketSetPricesItemsArgs {
    /**
     * The currency of the locked price value. Validation: Required. Must be a valid ISO 4217 3-letter currency code.
     */
    currency: pulumi.Input<string>;
    markets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The locked price for the priceable node. Validation: Required. Must be greater than or equal to 0. If the case of billing plans. This represents the price for each cycle charge.
     */
    value: pulumi.Input<number>;
}

/**
 * Plan for the resource.
 */
export interface PlanArgs {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: pulumi.Input<string>;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
     */
    product: pulumi.Input<string>;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string>;
}

/**
 * Set only in price guarantee scenario.
 */
export interface PriceGuaranteePropertiesArgs {
    /**
     * The date on which prices are to be used for guarantee calculation. Validation: expected to be 00 hours, Format: 2024-09-30T00:00:00Z. Must be in UTC.
     */
    priceGuaranteeDate?: pulumi.Input<string>;
    /**
     * Supported values: Protected, Locked
     */
    pricingPolicy?: pulumi.Input<string | enums.PricingPolicy>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}
