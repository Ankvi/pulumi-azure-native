import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LocalRulesResource
 *
 * Uses Azure REST API version 2025-05-23.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview, 2025-07-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLocalRule(args: GetLocalRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getLocalRule", {
        "localRulestackName": args.localRulestackName,
        "priority": args.priority,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRuleArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * Local Rule priority
     */
    priority: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LocalRulestack rule list
 */
export interface GetLocalRuleResult {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Get a LocalRulesResource
 *
 * Uses Azure REST API version 2025-05-23.
 *
 * Other available API versions: 2023-09-01, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview, 2025-07-07-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudngfw [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLocalRuleOutput(args: GetLocalRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLocalRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getLocalRule", {
        "localRulestackName": args.localRulestackName,
        "priority": args.priority,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRuleOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * Local Rule priority
     */
    priority: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}