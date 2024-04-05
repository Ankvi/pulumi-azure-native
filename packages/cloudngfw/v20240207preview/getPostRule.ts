import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PostRulesResource
 */
export function getPostRule(args: GetPostRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetPostRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:getPostRule", {
        "globalRulestackName": args.globalRulestackName,
        "priority": args.priority,
    }, opts);
}

export interface GetPostRuleArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * Post Rule priority
     */
    priority: string;
}

/**
 * PostRulestack rule list
 */
export interface GetPostRuleResult {
    /**
     * rule action
     */
    readonly actionType?: string;
    /**
     * array of rule applications
     */
    readonly applications?: string[];
    /**
     * rule comment
     */
    readonly auditComment?: string;
    /**
     * rule category
     */
    readonly category?: types.outputs.CategoryResponse;
    /**
     * enable or disable decryption
     */
    readonly decryptionRuleType?: string;
    /**
     * rule description
     */
    readonly description?: string;
    /**
     * destination address
     */
    readonly destination?: types.outputs.DestinationAddrResponse;
    /**
     * enable or disable logging
     */
    readonly enableLogging?: string;
    /**
     * etag info
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * inbound Inspection Certificate
     */
    readonly inboundInspectionCertificate?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * cidr should not be 'any'
     */
    readonly negateDestination?: string;
    /**
     * cidr should not be 'any'
     */
    readonly negateSource?: string;
    readonly priority: number;
    /**
     * any, application-default, TCP:number, UDP:number
     */
    readonly protocol?: string;
    /**
     * prot port list
     */
    readonly protocolPortList?: string[];
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * rule name
     */
    readonly ruleName: string;
    /**
     * state of this rule
     */
    readonly ruleState?: string;
    /**
     * source address
     */
    readonly source?: types.outputs.SourceAddrResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * tag for rule
     */
    readonly tags?: types.outputs.TagInfoResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a PostRulesResource
 */
export function getPostRuleOutput(args: GetPostRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostRuleResult> {
    return pulumi.output(args).apply((a: any) => getPostRule(a, opts))
}

export interface GetPostRuleOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * Post Rule priority
     */
    priority: pulumi.Input<string>;
}