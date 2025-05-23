import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get discount at resource group level
 *
 * Uses Azure REST API version 2024-11-01-preview.
 */
export function getDiscount(args: GetDiscountArgs, opts?: pulumi.InvokeOptions): Promise<GetDiscountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billingbenefits:getDiscount", {
        "discountName": args.discountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscountArgs {
    /**
     * Name of the discount
     */
    discountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource definition for Discounts.
 */
export interface GetDiscountResult {
    /**
     * List of applied scopes supported for discounts.
     */
    readonly appliedScopeType?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully-qualified identifier of the benefit under applicable benefit list.
     */
    readonly benefitResourceId: string;
    /**
     * Billing account resource id where the discount metadata is present.
     */
    readonly billingAccountResourceId: string;
    /**
     * Billing profile resource id where the discount is scoped to.
     */
    readonly billingProfileResourceId: string;
    /**
     * Customer resource id where the discount is scoped to.
     */
    readonly customerResourceId: string;
    /**
     * This defines a user friendly display name for the discount.
     */
    readonly displayName?: string;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     */
    readonly entityType: string;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    readonly managedBy?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Plan for the resource.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * This is the catalog UPN for the product.
     */
    readonly productCode: string;
    /**
     * The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled.
     */
    readonly provisioningState: string;
    /**
     * The resource model definition representing SKU
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    readonly startAt: string;
    /**
     * Represents the current status of the discount.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    readonly systemId?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get discount at resource group level
 *
 * Uses Azure REST API version 2024-11-01-preview.
 */
export function getDiscountOutput(args: GetDiscountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiscountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billingbenefits:getDiscount", {
        "discountName": args.discountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiscountOutputArgs {
    /**
     * Name of the discount
     */
    discountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}