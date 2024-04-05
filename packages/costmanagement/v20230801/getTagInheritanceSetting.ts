import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the setting from the given scope by name.
 */
export function getTagInheritanceSetting(args: GetTagInheritanceSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetTagInheritanceSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20230801:getTagInheritanceSetting", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Specifies the kind of settings.
     * Expected value is 'taginheritance'.
     */
    readonly kind: "taginheritance";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the tag inheritance setting.
     */
    readonly properties: types.outputs.TagInheritancePropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the setting from the given scope by name.
 */
export function getTagInheritanceSettingOutput(args: GetTagInheritanceSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagInheritanceSettingResult> {
    return pulumi.output(args).apply((a: any) => getTagInheritanceSetting(a, opts))
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