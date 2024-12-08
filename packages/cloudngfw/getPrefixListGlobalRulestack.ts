import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PrefixListGlobalRulestackResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getPrefixListGlobalRulestack(args: GetPrefixListGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixListGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getPrefixListGlobalRulestack", {
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
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getPrefixListGlobalRulestackOutput(args: GetPrefixListGlobalRulestackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrefixListGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getPrefixListGlobalRulestack", {
        "globalRulestackName": args.globalRulestackName,
        "name": args.name,
    }, opts);
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