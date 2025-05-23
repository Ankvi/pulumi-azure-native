import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Data Lake Store virtual network rule.
 *
 * Uses Azure REST API version 2016-11-01.
 */
export function getVirtualNetworkRule(args: GetVirtualNetworkRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakestore:getVirtualNetworkRule", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetVirtualNetworkRuleArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network rule to retrieve.
     */
    virtualNetworkRuleName: string;
}

/**
 * Data Lake Store virtual network rule information.
 */
export interface GetVirtualNetworkRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The resource identifier for the subnet.
     */
    readonly subnetId: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified Data Lake Store virtual network rule.
 *
 * Uses Azure REST API version 2016-11-01.
 */
export function getVirtualNetworkRuleOutput(args: GetVirtualNetworkRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datalakestore:getVirtualNetworkRule", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetVirtualNetworkRuleOutputArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network rule to retrieve.
     */
    virtualNetworkRuleName: pulumi.Input<string>;
}