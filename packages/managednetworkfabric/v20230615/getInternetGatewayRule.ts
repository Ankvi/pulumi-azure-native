import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an Internet Gateway Rule resource.
 */
export function getInternetGatewayRule(args: GetInternetGatewayRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetInternetGatewayRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getInternetGatewayRule", {
        "internetGatewayRuleName": args.internetGatewayRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInternetGatewayRuleArgs {
    /**
     * Name of the Internet Gateway rule.
     */
    internetGatewayRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Internet Gateway Rule resource definition.
 */
export interface GetInternetGatewayRuleResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * List of Internet Gateway resource Id.
     */
    readonly internetGatewayIds: string[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Rules for the InternetGateways
     */
    readonly ruleProperties: types.outputs.managednetworkfabric.v20230615.RulePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.managednetworkfabric.v20230615.SystemDataResponse;
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
 * Gets an Internet Gateway Rule resource.
 */
export function getInternetGatewayRuleOutput(args: GetInternetGatewayRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInternetGatewayRuleResult> {
    return pulumi.output(args).apply((a: any) => getInternetGatewayRule(a, opts))
}

export interface GetInternetGatewayRuleOutputArgs {
    /**
     * Name of the Internet Gateway rule.
     */
    internetGatewayRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
