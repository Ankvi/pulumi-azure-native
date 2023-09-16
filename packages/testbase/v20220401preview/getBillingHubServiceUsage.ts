import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export function getBillingHubServiceUsage(args: GetBillingHubServiceUsageArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingHubServiceUsageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20220401preview:getBillingHubServiceUsage", {
        "endTimeStamp": args.endTimeStamp,
        "pageIndex": args.pageIndex,
        "pageSize": args.pageSize,
        "resourceGroupName": args.resourceGroupName,
        "startTimeStamp": args.startTimeStamp,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetBillingHubServiceUsageArgs {
    endTimeStamp: string;
    pageIndex?: number;
    pageSize?: number;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    startTimeStamp: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

export interface GetBillingHubServiceUsageResult {
    readonly nextRequest?: types.outputs.testbase.v20220401preview.BillingHubGetUsageRequestResponse;
    readonly packageUsageEntries?: types.outputs.testbase.v20220401preview.BillingHubPackageUsageResponse[];
    readonly totalCharges?: number;
    readonly totalUsedBillableHours?: number;
    readonly totalUsedFreeHours?: number;
}
export function getBillingHubServiceUsageOutput(args: GetBillingHubServiceUsageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBillingHubServiceUsageResult> {
    return pulumi.output(args).apply((a: any) => getBillingHubServiceUsage(a, opts))
}

export interface GetBillingHubServiceUsageOutputArgs {
    endTimeStamp: pulumi.Input<string>;
    pageIndex?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    startTimeStamp: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}
