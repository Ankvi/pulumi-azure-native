import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Defender plans pricing configurations of the selected scope (valid scopes are resource id or a subscription id). At the resource level, supported resource types are 'VirtualMachines, VMSS and ARC Machines'.
 *
 * Uses Azure REST API version 2024-01-01.
 */
export function getPricing(args: GetPricingArgs, opts?: pulumi.InvokeOptions): Promise<GetPricingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getPricing", {
        "pricingName": args.pricingName,
        "scopeId": args.scopeId,
    }, opts);
}

export interface GetPricingArgs {
    /**
     * name of the pricing configuration
     */
    pricingName: string;
    /**
     * The scope id of the pricing. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or a specific resource (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}) - Supported resources are (VirtualMachines)
     */
    scopeId: string;
}

/**
 * Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
 */
export interface GetPricingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Optional. True if the plan is deprecated. If there are replacing plans they will appear in `replacedBy` property
     */
    readonly deprecated: boolean;
    /**
     * Optional. If `pricingTier` is `Standard` then this property holds the date of the last time the `pricingTier` was set to `Standard`, when available (e.g 2023-03-01T12:42:42.1921106Z).
     */
    readonly enablementTime: string;
    /**
     * If set to "False", it allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False"). If set to "True", it prevents overrides and forces this pricing configuration on all the descendants of this scope. This field is only available for subscription-level pricing.
     */
    readonly enforce?: string;
    /**
     * Optional. List of extensions offered under a plan.
     */
    readonly extensions?: types.outputs.ExtensionResponse[];
    /**
     * The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S).
     */
    readonly freeTrialRemainingTime: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * "inherited" = "True" indicates that the current scope inherits its pricing configuration from its parent. The ID of the parent scope that provides the inherited configuration is displayed in the "inheritedFrom" field. On the other hand, "inherited" = "False" indicates that the current scope has its own pricing configuration explicitly set, and does not inherit from its parent. This field is read only and available only for resource-level pricing.
     */
    readonly inherited: string;
    /**
     * The id of the scope inherited from. "Null" if not inherited. This field is only available for resource-level pricing.
     */
    readonly inheritedFrom: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Indicates whether the Defender plan is enabled on the selected scope. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
     */
    readonly pricingTier: string;
    /**
     * Optional. List of plans that replace this plan. This property exists only if this plan is deprecated.
     */
    readonly replacedBy: string[];
    /**
     * This field is available for subscription-level only, and reflects the coverage status of the resources under the subscription. Please note: The "pricingTier" field reflects the plan status of the subscription. However, since the plan status can also be defined at the resource level, there might be misalignment between the subscription's plan status and the resource status. This field helps indicate the coverage status of the resources.
     */
    readonly resourcesCoverageStatus: string;
    /**
     * The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. For VirtualMachines plan, available sub plans are 'P1' & 'P2', where for resource level only 'P1' sub plan is supported.
     */
    readonly subPlan?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get the Defender plans pricing configurations of the selected scope (valid scopes are resource id or a subscription id). At the resource level, supported resource types are 'VirtualMachines, VMSS and ARC Machines'.
 *
 * Uses Azure REST API version 2024-01-01.
 */
export function getPricingOutput(args: GetPricingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPricingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getPricing", {
        "pricingName": args.pricingName,
        "scopeId": args.scopeId,
    }, opts);
}

export interface GetPricingOutputArgs {
    /**
     * name of the pricing configuration
     */
    pricingName: pulumi.Input<string>;
    /**
     * The scope id of the pricing. Valid scopes are: subscription (format: 'subscriptions/{subscriptionId}'), or a specific resource (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}) - Supported resources are (VirtualMachines)
     */
    scopeId: pulumi.Input<string>;
}