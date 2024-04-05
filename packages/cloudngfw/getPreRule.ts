import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PreRulesResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getPreRule(args: GetPreRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetPreRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getPreRule", {
        "globalRulestackName": args.globalRulestackName,
        "priority": args.priority,
    }, opts);
}

export interface GetPreRuleArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
    /**
     * Pre Rule priority
     */
    priority: string;
}

/**
 * PreRulestack rule list
 */
export interface GetPreRuleResult {
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
 * Get a PreRulesResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getPreRuleOutput(args: GetPreRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPreRuleResult> {
    return pulumi.output(args).apply((a: any) => getPreRule(a, opts))
}

export interface GetPreRuleOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * Pre Rule priority
     */
    priority: pulumi.Input<string>;
}