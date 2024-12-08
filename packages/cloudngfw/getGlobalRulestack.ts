import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a GlobalRulestackResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getGlobalRulestack(args: GetGlobalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getGlobalRulestack", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface GetGlobalRulestackArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: string;
}

/**
 * PaloAltoNetworks GlobalRulestack
 */
export interface GetGlobalRulestackResult {
    /**
     * subscription scope of global rulestack
     */
    readonly associatedSubscriptions?: string[];
    /**
     * Mode for default rules creation
     */
    readonly defaultMode?: string;
    /**
     * rulestack description
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.AzureResourceManagerManagedIdentityPropertiesResponse;
    /**
     * Global Location
     */
    readonly location: string;
    /**
     * minimum version
     */
    readonly minAppIdVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * PanEtag info
     */
    readonly panEtag?: string;
    /**
     * Rulestack Location, Required for GlobalRulestacks, Not for LocalRulestacks
     */
    readonly panLocation?: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Rulestack Type
     */
    readonly scope?: string;
    /**
     * Security Profile
     */
    readonly securityServices?: types.outputs.SecurityServicesResponse;
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
 * Get a GlobalRulestackResource
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getGlobalRulestackOutput(args: GetGlobalRulestackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGlobalRulestackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getGlobalRulestack", {
        "globalRulestackName": args.globalRulestackName,
    }, opts);
}

export interface GetGlobalRulestackOutputArgs {
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
}