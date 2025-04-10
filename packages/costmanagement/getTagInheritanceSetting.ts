import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the setting from the given scope by name.
 *
 * Uses Azure REST API version 2022-10-05-preview.
 */
export function getTagInheritanceSetting(args: GetTagInheritanceSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetTagInheritanceSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getTagInheritanceSetting", {
        "scope": args.scope,
        "type": args.type,
    }, opts);
}

export interface GetTagInheritanceSettingArgs {
    /**
     * The scope associated with this setting. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billing profile scope.
     */
    scope: string;
    /**
     * Setting type.
     */
    type: string;
}

/**
 * Tag Inheritance Setting definition.
 */
export interface GetTagInheritanceSettingResult {
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Specifies the kind of settings.
     * Expected value is 'taginheritance'.
     */
    readonly kind: "taginheritance";
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The properties of the tag inheritance setting.
     */
    readonly properties: types.outputs.TagInheritancePropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get the setting from the given scope by name.
 *
 * Uses Azure REST API version 2022-10-05-preview.
 */
export function getTagInheritanceSettingOutput(args: GetTagInheritanceSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTagInheritanceSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getTagInheritanceSetting", {
        "scope": args.scope,
        "type": args.type,
    }, opts);
}

export interface GetTagInheritanceSettingOutputArgs {
    /**
     * The scope associated with this setting. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billing profile scope.
     */
    scope: pulumi.Input<string>;
    /**
     * Setting type.
     */
    type: pulumi.Input<string>;
}