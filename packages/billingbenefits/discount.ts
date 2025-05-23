import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource definition for Discounts.
 *
 * Uses Azure REST API version 2024-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-11-01-preview.
 */
export class Discount extends pulumi.CustomResource {
    /**
     * Get an existing Discount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Discount {
        return new Discount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:billingbenefits:Discount';

    /**
     * Returns true if the given object is an instance of Discount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Discount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Discount.__pulumiType;
    }

    /**
     * List of applied scopes supported for discounts.
     */
    public readonly appliedScopeType!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Fully-qualified identifier of the benefit under applicable benefit list.
     */
    public /*out*/ readonly benefitResourceId!: pulumi.Output<string>;
    /**
     * Billing account resource id where the discount metadata is present.
     */
    public /*out*/ readonly billingAccountResourceId!: pulumi.Output<string>;
    /**
     * Billing profile resource id where the discount is scoped to.
     */
    public /*out*/ readonly billingProfileResourceId!: pulumi.Output<string>;
    /**
     * Customer resource id where the discount is scoped to.
     */
    public /*out*/ readonly customerResourceId!: pulumi.Output<string>;
    /**
     * This defines a user friendly display name for the discount.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     */
    public readonly entityType!: pulumi.Output<string>;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Plan for the resource.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * This is the catalog UPN for the product.
     */
    public readonly productCode!: pulumi.Output<string>;
    /**
     * The state of the resource. Supported values are Pending, Failed, Succeeded, Canceled.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource model definition representing SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    public readonly startAt!: pulumi.Output<string>;
    /**
     * Represents the current status of the discount.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    public readonly systemId!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Discount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiscountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.entityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityType'");
            }
            if ((!args || args.productCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productCode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startAt === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startAt'");
            }
            resourceInputs["appliedScopeType"] = args ? args.appliedScopeType : undefined;
            resourceInputs["discountName"] = args ? args.discountName : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["entityType"] = args ? args.entityType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["productCode"] = args ? args.productCode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["startAt"] = args ? args.startAt : undefined;
            resourceInputs["systemId"] = args ? args.systemId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["benefitResourceId"] = undefined /*out*/;
            resourceInputs["billingAccountResourceId"] = undefined /*out*/;
            resourceInputs["billingProfileResourceId"] = undefined /*out*/;
            resourceInputs["customerResourceId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appliedScopeType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["benefitResourceId"] = undefined /*out*/;
            resourceInputs["billingAccountResourceId"] = undefined /*out*/;
            resourceInputs["billingProfileResourceId"] = undefined /*out*/;
            resourceInputs["customerResourceId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["entityType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["productCode"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["startAt"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["systemId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:billingbenefits/v20241101preview:Discount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Discount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Discount resource.
 */
export interface DiscountArgs {
    /**
     * List of applied scopes supported for discounts.
     */
    appliedScopeType?: pulumi.Input<string | types.enums.DiscountAppliedScopeType>;
    /**
     * Name of the discount
     */
    discountName?: pulumi.Input<string>;
    /**
     * This defines a user friendly display name for the discount.
     */
    displayName?: pulumi.Input<string>;
    /**
     * This defines whether the entity being created is primary or affiliate. Supported values: primary, affiliate. Validation: Required, must match one of the 2 values.
     */
    entityType: pulumi.Input<string | types.enums.DiscountEntityType>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * Plan for the resource.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * This is the catalog UPN for the product.
     */
    productCode: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource model definition representing SKU
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Start date of the discount. Value is the date the discount started or will start in the future.
     */
    startAt: pulumi.Input<string>;
    /**
     * This is the globally unique identifier of the Discount which will not change for the lifetime of the Discount.
     */
    systemId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}