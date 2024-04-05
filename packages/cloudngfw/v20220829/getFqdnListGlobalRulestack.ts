import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FqdnListGlobalRulestackResource
 */
export function getFqdnListGlobalRulestack(args: GetFqdnListGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetFqdnListGlobalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829:getFqdnListGlobalRulestack", {
        "globalRulestackName": args.globalRulestackName,
        "name": args.name,
    }, opts);
}

export interface GetFqdnListGlobalRulestackArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * fqdn list name
     */
    name: string;
}

/**
 * GlobalRulestack fqdnList
 */
export interface GetFqdnListGlobalRulestackResult {
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
 * Get a FqdnListGlobalRulestackResource
 */
export function getFqdnListGlobalRulestackOutput(args: GetFqdnListGlobalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFqdnListGlobalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getFqdnListGlobalRulestack(a, opts))
}

export interface GetFqdnListGlobalRulestackOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * fqdn list name
     */
    name: pulumi.Input<string>;
}