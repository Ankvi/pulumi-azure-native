import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBillingHubServiceUsage(args: GetBillingHubServiceUsageArgs, opts?: pulumi.InvokeOptions): Promise<GetBillingHubServiceUsageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getBillingHubServiceUsage", {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    startTimeStamp: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

export interface GetBillingHubServiceUsageResult {
    readonly nextRequest?: types.outputs.BillingHubGetUsageRequestResponse;
    readonly packageUsageEntries?: types.outputs.BillingHubPackageUsageResponse[];
    readonly totalCharges?: number;
    readonly totalUsedBillableHours?: number;
    readonly totalUsedFreeHours?: number;
}
/**
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBillingHubServiceUsageOutput(args: GetBillingHubServiceUsageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBillingHubServiceUsageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getBillingHubServiceUsage", {
        "endTimeStamp": args.endTimeStamp,
        "pageIndex": args.pageIndex,
        "pageSize": args.pageSize,
        "resourceGroupName": args.resourceGroupName,
        "startTimeStamp": args.startTimeStamp,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetBillingHubServiceUsageOutputArgs {
    endTimeStamp: pulumi.Input<string>;
    pageIndex?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    startTimeStamp: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}