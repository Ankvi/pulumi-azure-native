import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LocalRulestackResource
 */
export function getLocalRulestack(args: GetLocalRulestackArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalRulestackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240119preview:getLocalRulestack", {
        "localRulestackName": args.localRulestackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalRulestackArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * PaloAltoNetworks LocalRulestack
 */
export interface GetLocalRulestackResult {
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
     * The geo-location where the resource lives
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a LocalRulestackResource
 */
export function getLocalRulestackOutput(args: GetLocalRulestackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalRulestackResult> {
    return pulumi.output(args).apply((a: any) => getLocalRulestack(a, opts))
}

export interface GetLocalRulestackOutputArgs {
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}