import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FqdnListLocalRulestackResource
 */
export function getFqdnListLocalRulestack(args: GetFqdnListLocalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetFqdnListLocalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20231010preview:getFqdnListLocalRulestack", {
        "localRulestackName": args.localRulestackName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFqdnListLocalRulestackArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * fqdn list name
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LocalRulestack fqdnList
 */
export interface GetFqdnListLocalRulestackResult {
    /**
     * comment for this object
     */
    readonly auditComment?: string;
    /**
     * fqdn object description
     */
    readonly description?: string;
    /**
     * etag info
     */
    readonly etag?: string;
    /**
     * fqdn list
     */
    readonly fqdnList: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Get a FqdnListLocalRulestackResource
 */
export function getFqdnListLocalRulestackOutput(args: GetFqdnListLocalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFqdnListLocalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getFqdnListLocalRulestack(a, opts))
}

export interface GetFqdnListLocalRulestackOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * fqdn list name
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}