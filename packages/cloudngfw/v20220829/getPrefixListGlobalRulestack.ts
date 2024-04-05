import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PrefixListGlobalRulestackResource
 */
export function getPrefixListGlobalRulestack(args: GetPrefixListGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixListGlobalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829:getPrefixListGlobalRulestack", {
        "globalRulestackName": args.globalRulestackName,
        "name": args.name,
    }, opts);
}

export interface GetPrefixListGlobalRulestackArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * Local Rule priority
     */
    name: string;
}

/**
 * GlobalRulestack prefixList
 */
export interface GetPrefixListGlobalRulestackResult {
    /**
     * comment for this object
     */
    readonly auditComment?: string;
    /**
     * prefix description
     */
    readonly description?: string;
    /**
     * etag info
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * prefix list
     */
    readonly prefixList: string[];
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a PrefixListGlobalRulestackResource
 */
export function getPrefixListGlobalRulestackOutput(args: GetPrefixListGlobalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrefixListGlobalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getPrefixListGlobalRulestack(a, opts))
}

export interface GetPrefixListGlobalRulestackOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * Local Rule priority
     */
    name: pulumi.Input<string>;
}