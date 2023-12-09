import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getBillingHubServiceFreeHourBalance(args: GetBillingHubServiceFreeHourBalanceArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingHubServiceFreeHourBalanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getBillingHubServiceFreeHourBalance", {
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetBillingHubServiceFreeHourBalanceArgs {
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

export interface GetBillingHubServiceFreeHourBalanceResult {
    readonly incrementEntries?: types.outputs.BillingHubFreeHourIncrementEntryResponse[];
    readonly totalRemainingFreeHours?: number;
}
/**
 * Azure REST API version: 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getBillingHubServiceFreeHourBalanceOutput(args: GetBillingHubServiceFreeHourBalanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBillingHubServiceFreeHourBalanceResult> {
    return pulumi.output(args).apply((a: any) => getBillingHubServiceFreeHourBalance(a, opts))
}

export interface GetBillingHubServiceFreeHourBalanceOutputArgs {
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}
