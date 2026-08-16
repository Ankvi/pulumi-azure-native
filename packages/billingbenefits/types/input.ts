import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Optional field to record suppression reason for automatic shortfall.
 */
export interface AutomaticShortfallSuppressReasonArgs {
    /**
     * Code for the suppression reason.
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * Message for suppression reason.
     */
    message?: pulumi.Input<string | undefined>;
}

/**
 * Award details for milestone completion
 */
export interface AwardArgs {
    /**
     * Credit amount to be awarded
     */
    credit?: pulumi.Input<CommitmentArgs | undefined>;
    /**
     * Duration for which the benefit is active. Will be in format P{int}M or P{int}Y. Any values representing up to 12 years are valid. Upper limit examples: P144M, P12Y.
     */
    duration?: pulumi.Input<string | undefined>;
    /**
     * End date when the credit expires
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Start date when the credit becomes effective
     */
    startAt?: pulumi.Input<string | undefined>;
}

/**
 * Catalog claim for a discount.
 */
export interface CatalogClaimsItemArgs {
    catalogClaimsItemType?: pulumi.Input<string | undefined>;
    value?: pulumi.Input<string | undefined>;
}

/**
 * Commitment towards the benefit.
 */
export interface CommitmentArgs {
    amount?: pulumi.Input<number | undefined>;
    /**
     * The ISO 4217 3-letter currency code for the currency used by this purchase record.
     */
    currencyCode?: pulumi.Input<string | undefined>;
    /**
     * The grain of the commitment.
     */
    grain?: pulumi.Input<string | enums.CommitmentGrain | undefined>;
}

/**
 * Milestone definition within a conditional credit
 */
export interface ConditionalCreditMilestoneArgs {
    /**
     * Award details for this milestone (only present for primary conditional credits)
     */
    award?: pulumi.Input<AwardArgs | undefined>;
    /**
     * End date for this milestone
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Unique identifier for the milestone
     */
    milestoneId?: pulumi.Input<string | undefined>;
    /**
     * Display name for the milestone
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Spend target for this milestone
     */
    spendTarget?: pulumi.Input<PriceArgs | undefined>;
    /**
     * Current status of the milestone
     */
    status?: pulumi.Input<string | enums.MilestoneStatus | undefined>;
}

/**
 * Condition for a discount.
 */
export interface ConditionsItemArgs {
    conditionName?: pulumi.Input<string | undefined>;
    type?: pulumi.Input<string | undefined>;
    /**
     * These items are open-ended strings.
     */
    value?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Properties for contributor conditional credit.
 */
export interface ContributorConditionalCreditPropertiesArgs {
    /**
     * The billing account resource ID
     */
    billingAccountResourceId?: pulumi.Input<string | undefined>;
    /**
     * Display name for the conditional credit
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * End date of the conditional credit (derived from last milestone)
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Type of conditional credit entity
     * Expected value is 'Contributor'.
     */
    entityType: pulumi.Input<"Contributor">;
    /**
     * Fully-qualified billing account resource identifier of the primary CACO. Format must be Azure Resource ID: /providers/Microsoft.Billing/billingAccounts/{acctId:orgId}.
     */
    primaryBillingAccountResourceId?: pulumi.Input<string | undefined>;
    /**
     * Resource ID of the primary conditional credit (required for contributors)
     */
    primaryResourceId?: pulumi.Input<string | undefined>;
    /**
     * Product code for the conditional credit
     */
    productCode?: pulumi.Input<string | undefined>;
    /**
     * Fully-qualified resource identifier of the resource. Format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BillingBenefits/{benefitType}/{benefitName}.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Start date of the conditional credit
     */
    startAt?: pulumi.Input<string | undefined>;
    /**
     * The status of the conditional credit
     */
    status?: pulumi.Input<string | enums.ConditionalCreditStatus | undefined>;
    /**
     * System identifier shared between primary and contributor conditional credits representing the same conditional credit program
     */
    systemId?: pulumi.Input<string | undefined>;
}

/**
 * Credit breakdown item representing a milestone, line-item, or no-charge service
 */
export interface CreditBreakdownItemArgs {
    /**
     * Allocation details including currency and amount for this breakdown item
     */
    allocation?: pulumi.Input<CommitmentArgs | undefined>;
    /**
     * Key-value pairs for additional parameters and metadata
     */
    dimensions?: pulumi.Input<pulumi.Input<CreditDimensionArgs>[] | undefined>;
    /**
     * End DateTime in UTC.
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Start DateTime.
     */
    startAt?: pulumi.Input<string | undefined>;
}

/**
 * Key-value pair for additional credit parameters and metadata
 */
export interface CreditDimensionArgs {
    /**
     * The dimension key (e.g., productFamily, description, creditType)
     */
    key: pulumi.Input<string>;
    /**
     * The dimension value
     */
    value: pulumi.Input<string>;
}

/**
 * Credit breakdown item representing a milestone, line-item, or no-charge service
 */
export interface CreditPoliciesArgs {
    /**
     * Expiration policy of the Credit
     */
    expiration?: pulumi.Input<string | enums.CreditExpirationPolicy | undefined>;
    /**
     * Redemption policy of the Credit
     */
    redemption?: pulumi.Input<string | enums.CreditRedemptionPolicy | undefined>;
}

/**
 * The reason for the credit. Not required if not applicable.
 */
export interface CreditReasonArgs {
    /**
     * The reason code for credit.
     */
    code?: pulumi.Input<string | undefined>;
    /**
     * The free string description of the credit.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * Custom price properties for a given discount.
 */
export interface CustomPricePropertiesArgs {
    /**
     * The billing period of the priceable node. Validation: Optional, Maximum length 128 characters. Only allowed if the availability derived by market, product, sku, and claims has terms and at least one of those terms has a billing period. When specified, termUnits must be specified.
     */
    billingPeriod?: pulumi.Input<string | undefined>;
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
    meterType?: pulumi.Input<string | undefined>;
    /**
     * The type of the priceable node pricing rule. Validation: Required. Supported values are fixedPriceLock, fixedListPrice, and priceCeiling.
     */
    ruleType: pulumi.Input<string | enums.DiscountRuleType>;
    /**
     * The term units for the priceable node. Validation: Optional, Maximum length 128 characters. Must be present if and only if the availability derived by market, product, sku, and claims has terms.
     */
    termUnits?: pulumi.Input<string | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[] | undefined>;
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: pulumi.Input<CustomPricePropertiesArgs | undefined>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule | undefined>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPrice'.
     */
    discountType: pulumi.Input<"CustomPrice">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs | undefined>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string | undefined>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string | undefined>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[] | undefined>;
    /**
     * Custom price properties for a given discount.
     */
    customPriceProperties?: pulumi.Input<CustomPricePropertiesArgs | undefined>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule | undefined>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'CustomPriceMultiCurrency'.
     */
    discountType: pulumi.Input<"CustomPriceMultiCurrency">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs | undefined>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string | undefined>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string | undefined>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[] | undefined>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule | undefined>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Product'.
     */
    discountType: pulumi.Input<"Product">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs | undefined>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string | undefined>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[] | undefined>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule | undefined>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'ProductFamily'.
     */
    discountType: pulumi.Input<"ProductFamily">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs | undefined>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string | undefined>;
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
    conditions?: pulumi.Input<pulumi.Input<ConditionsItemArgs>[] | undefined>;
    /**
     * The discount combination rule when there are multiple applicable custom prices. Validation: Required. Supported values are Stackable and BestOf.
     */
    discountCombinationRule?: pulumi.Input<string | enums.DiscountCombinationRule | undefined>;
    /**
     * Discount percentage provided for the customer. Validation: Required unless this is a price rule.
     */
    discountPercentage?: pulumi.Input<number | undefined>;
    /**
     * Defines the type of discount. Supported values are ProductFamily, Product, Sku, CustomPrice, and CustomPriceMultiCurrency.
     * Expected value is 'Sku'.
     */
    discountType: pulumi.Input<"Sku">;
    /**
     * Set only in price guarantee scenario.
     */
    priceGuaranteeProperties?: pulumi.Input<PriceGuaranteePropertiesArgs | undefined>;
    /**
     * Product family for which the discount is given. Validation: Optional
     */
    productFamilyName?: pulumi.Input<string | undefined>;
    /**
     * Product ID for which the discount is given. Validation: Optional. No specific format, example: DZH318Z09V6F
     */
    productId?: pulumi.Input<string | undefined>;
    /**
     * ResourceSku for the given discount. Validation: Optional.
     */
    skuId?: pulumi.Input<string | undefined>;
}

/**
 * Entity type for affiliate discounts
 */
export interface EntityTypeAffiliateDiscountArgs {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: pulumi.Input<string | enums.DiscountAppliedScopeType | undefined>;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: pulumi.Input<string | undefined>;
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
    systemId?: pulumi.Input<string | undefined>;
}

/**
 * Entity type for primary discounts
 */
export interface EntityTypePrimaryDiscountArgs {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: pulumi.Input<string | enums.DiscountAppliedScopeType | undefined>;
    /**
     * This defines the conditions for a given discount type.
     */
    discountTypeProperties?: pulumi.Input<DiscountCustomPriceArgs | DiscountCustomPriceMultiCurrencyArgs | DiscountProductArgs | DiscountProductFamilyArgs | DiscountTypeProductSkuArgs | undefined>;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: pulumi.Input<string | undefined>;
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
    systemId?: pulumi.Input<string | undefined>;
}

/**
 * MACC milestone represents interim targets within the period of MACC.
 */
export interface MaccMilestoneArgs {
    /**
     * Setting this to 'Enable' enables automatic shortfall invoicing when milestone commitment is not met.
     */
    automaticShortfall?: pulumi.Input<string | enums.EnablementMode | undefined>;
    /**
     * Optional field to record suppression reason for automatic shortfall.
     */
    automaticShortfallSuppressReason?: pulumi.Input<AutomaticShortfallSuppressReasonArgs | undefined>;
    /**
     * Commitment associated with this milestone.
     */
    commitment?: pulumi.Input<PriceArgs | undefined>;
    /**
     * End date time for the milestone. Timestamp must be in the ISO date format YYYY-MM-DDT23:59:59Z.
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Globally unique identifier for the milestone. Format: {guid}
     */
    milestoneId?: pulumi.Input<string | undefined>;
    /**
     * Details of the shortfall associated with this milestone.
     */
    shortfall?: pulumi.Input<ShortfallArgs | undefined>;
    /**
     * Represents the current status of the Milestone.
     */
    status?: pulumi.Input<string | enums.MaccMilestoneStatus | undefined>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
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
    promotionCode?: pulumi.Input<string | undefined>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string | undefined>;
}

export interface PriceArgs {
    amount?: pulumi.Input<number | undefined>;
    /**
     * The ISO 4217 3-letter currency code for the currency used by this purchase record.
     */
    currencyCode?: pulumi.Input<string | undefined>;
}

/**
 * Set only in price guarantee scenario.
 */
export interface PriceGuaranteePropertiesArgs {
    /**
     * The date on which prices are to be used for guarantee calculation. Validation: expected to be 00 hours, Format: 2024-09-30T00:00:00Z. Must be in UTC.
     */
    priceGuaranteeDate?: pulumi.Input<string | undefined>;
    /**
     * Supported values: Protected, Locked
     */
    pricingPolicy?: pulumi.Input<string | enums.PricingPolicy | undefined>;
}

/**
 * Properties for primary conditional credit.
 */
export interface PrimaryConditionalCreditPropertiesArgs {
    /**
     * Whether this conditional credit allows contributor billing accounts
     */
    allowContributors?: pulumi.Input<string | enums.EnablementMode | undefined>;
    /**
     * The billing account resource ID
     */
    billingAccountResourceId?: pulumi.Input<string | undefined>;
    /**
     * Display name for the conditional credit
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * End date of the conditional credit (derived from last milestone)
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Type of conditional credit entity
     * Expected value is 'Primary'.
     */
    entityType: pulumi.Input<"Primary">;
    /**
     * List of milestones for this conditional credit (must include awards)
     */
    milestones?: pulumi.Input<pulumi.Input<ConditionalCreditMilestoneArgs>[] | undefined>;
    /**
     * Product code for the conditional credit
     */
    productCode?: pulumi.Input<string | undefined>;
    /**
     * Fully-qualified resource identifier of the resource. Format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BillingBenefits/{benefitType}/{benefitName}.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Start date of the conditional credit
     */
    startAt?: pulumi.Input<string | undefined>;
    /**
     * The status of the conditional credit
     */
    status?: pulumi.Input<string | enums.ConditionalCreditStatus | undefined>;
    /**
     * System identifier shared between primary and contributor conditional credits representing the same conditional credit program
     */
    systemId?: pulumi.Input<string | undefined>;
}

/**
 * MACC shortfall
 */
export interface ShortfallArgs {
    /**
     * Points to BalanceVersion document that indicates the remaining commitment balance when the credit was created.
     */
    balanceVersion?: pulumi.Input<number | undefined>;
    /**
     * Shortfall amount with grain.
     */
    charge?: pulumi.Input<CommitmentArgs | undefined>;
    /**
     * End DateTime in UTC.
     */
    endAt?: pulumi.Input<string | undefined>;
    /**
     * Represents catalog UPN.
     */
    productCode?: pulumi.Input<string | undefined>;
    /**
     * Fully-qualified resource identifier of the credits associated with the shortfall.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Start DateTime.
     */
    startAt?: pulumi.Input<string | undefined>;
    /**
     * This is an identifier of the shortfall which will not change for its lifetime.
     */
    systemId?: pulumi.Input<string | undefined>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier | undefined>;
}
