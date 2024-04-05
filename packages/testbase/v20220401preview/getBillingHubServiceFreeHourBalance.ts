import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getBillingHubServiceFreeHourBalance(args: GetBillingHubServiceFreeHourBalanceArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingHubServiceFreeHourBalanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20220401preview:getBillingHubServiceFreeHourBalance", {
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