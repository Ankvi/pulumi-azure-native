import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PrefixListResource
 */
export function getPrefixListLocalRulestack(args: GetPrefixListLocalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixListLocalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:getPrefixListLocalRulestack", {
        "localRulestackName": args.localRulestackName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrefixListLocalRulestackArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * Local Rule priority
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LocalRulestack prefixList
 */
export interface GetPrefixListLocalRulestackResult {
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
 * Get a PrefixListResource
 */
export function getPrefixListLocalRulestackOutput(args: GetPrefixListLocalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrefixListLocalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getPrefixListLocalRulestack(a, opts))
}

export interface GetPrefixListLocalRulestackOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * Local Rule priority
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}