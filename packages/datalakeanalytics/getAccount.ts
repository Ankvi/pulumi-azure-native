import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of the specified Data Lake Analytics account.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakeanalytics:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
 */
export interface GetAccountResult {
    /**
     * The unique identifier associated with this Data Lake Analytics account.
     */
    readonly accountId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The list of compute policies associated with this account.
     */
    readonly computePolicies: types.outputs.ComputePolicyResponse[];
    /**
     * The account creation time.
     */
    readonly creationTime: string;
    /**
     * The commitment tier in use for the current month.
     */
    readonly currentTier: string;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    readonly dataLakeStoreAccounts: types.outputs.DataLakeStoreAccountInformationResponse[];
    /**
     * The current state of the DebugDataAccessLevel for this account.
     */
    readonly debugDataAccessLevel: string;
    /**
     * The default Data Lake Store account associated with this account.
     */
    readonly defaultDataLakeStoreAccount: string;
    /**
     * The type of the default Data Lake Store account associated with this account.
     */
    readonly defaultDataLakeStoreAccountType: string;
    /**
     * The full CName endpoint for this account.
     */
    readonly endpoint: string;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps?: string;
    /**
     * The list of firewall rules associated with this account.
     */
    readonly firewallRules: types.outputs.FirewallRuleResponse[];
    /**
     * The current state of the IP address firewall for this account.
     */
    readonly firewallState?: string;
    /**
     * The list of hiveMetastores associated with this account.
     */
    readonly hiveMetastores: types.outputs.HiveMetastoreResponse[];
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The account last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The maximum supported active jobs under the account at the same time.
     */
    readonly maxActiveJobCountPerUser: number;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    readonly maxDegreeOfParallelism?: number;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    readonly maxDegreeOfParallelismPerJob?: number;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    readonly maxJobCount?: number;
    /**
     * The maximum supported active jobs under the account at the same time.
     */
    readonly maxJobRunningTimeInMin: number;
    /**
     * The maximum supported jobs queued under the account at the same time.
     */
    readonly maxQueuedJobCountPerUser: number;
    /**
     * The minimum supported priority per job for this account.
     */
    readonly minPriorityPerJob: number;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The commitment tier for the next month.
     */
    readonly newTier?: string;
    /**
     * The provisioning status of the Data Lake Analytics account.
     */
    readonly provisioningState: string;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    readonly publicDataLakeStoreAccounts?: types.outputs.DataLakeStoreAccountInformationResponse[];
    /**
     * The number of days that job metadata is retained.
     */
    readonly queryStoreRetention?: number;
    /**
     * The state of the Data Lake Analytics account.
     */
    readonly state: string;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    readonly storageAccounts: types.outputs.StorageAccountInformationResponse[];
    /**
     * The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
     */
    readonly systemMaxDegreeOfParallelism: number;
    /**
     * The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
     */
    readonly systemMaxJobCount: number;
    /**
     * The resource tags.
     */
    readonly tags: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The list of virtualNetwork rules associated with this account.
     */
    readonly virtualNetworkRules: types.outputs.VirtualNetworkRuleResponse[];
}
/**
 * Gets details of the specified Data Lake Analytics account.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datalakeanalytics:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}