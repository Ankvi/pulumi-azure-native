import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
 *
 * Uses Azure REST API version 2019-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-11-01-preview.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datalakeanalytics:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The unique identifier associated with this Data Lake Analytics account.
     */
    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The list of compute policies associated with this account.
     */
    public readonly computePolicies!: pulumi.Output<types.outputs.ComputePolicyResponse[]>;
    /**
     * The account creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The commitment tier in use for the current month.
     */
    public /*out*/ readonly currentTier!: pulumi.Output<string>;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    public readonly dataLakeStoreAccounts!: pulumi.Output<types.outputs.DataLakeStoreAccountInformationResponse[]>;
    /**
     * The current state of the DebugDataAccessLevel for this account.
     */
    public /*out*/ readonly debugDataAccessLevel!: pulumi.Output<string>;
    /**
     * The default Data Lake Store account associated with this account.
     */
    public readonly defaultDataLakeStoreAccount!: pulumi.Output<string>;
    /**
     * The type of the default Data Lake Store account associated with this account.
     */
    public /*out*/ readonly defaultDataLakeStoreAccountType!: pulumi.Output<string>;
    /**
     * The full CName endpoint for this account.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    public readonly firewallAllowAzureIps!: pulumi.Output<string | undefined>;
    /**
     * The list of firewall rules associated with this account.
     */
    public readonly firewallRules!: pulumi.Output<types.outputs.FirewallRuleResponse[]>;
    /**
     * The current state of the IP address firewall for this account.
     */
    public readonly firewallState!: pulumi.Output<string | undefined>;
    /**
     * The list of hiveMetastores associated with this account.
     */
    public /*out*/ readonly hiveMetastores!: pulumi.Output<types.outputs.HiveMetastoreResponse[]>;
    /**
     * The account last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The maximum supported active jobs under the account at the same time.
     */
    public /*out*/ readonly maxActiveJobCountPerUser!: pulumi.Output<number>;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    public readonly maxDegreeOfParallelism!: pulumi.Output<number | undefined>;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    public readonly maxDegreeOfParallelismPerJob!: pulumi.Output<number | undefined>;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    public readonly maxJobCount!: pulumi.Output<number | undefined>;
    /**
     * The maximum supported active jobs under the account at the same time.
     */
    public /*out*/ readonly maxJobRunningTimeInMin!: pulumi.Output<number>;
    /**
     * The maximum supported jobs queued under the account at the same time.
     */
    public /*out*/ readonly maxQueuedJobCountPerUser!: pulumi.Output<number>;
    /**
     * The minimum supported priority per job for this account.
     */
    public readonly minPriorityPerJob!: pulumi.Output<number>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The commitment tier for the next month.
     */
    public readonly newTier!: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the Data Lake Analytics account.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    public /*out*/ readonly publicDataLakeStoreAccounts!: pulumi.Output<types.outputs.DataLakeStoreAccountInformationResponse[] | undefined>;
    /**
     * The number of days that job metadata is retained.
     */
    public readonly queryStoreRetention!: pulumi.Output<number | undefined>;
    /**
     * The state of the Data Lake Analytics account.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    public readonly storageAccounts!: pulumi.Output<types.outputs.StorageAccountInformationResponse[]>;
    /**
     * The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
     */
    public /*out*/ readonly systemMaxDegreeOfParallelism!: pulumi.Output<number>;
    /**
     * The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
     */
    public /*out*/ readonly systemMaxJobCount!: pulumi.Output<number>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of virtualNetwork rules associated with this account.
     */
    public /*out*/ readonly virtualNetworkRules!: pulumi.Output<types.outputs.VirtualNetworkRuleResponse[]>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataLakeStoreAccounts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataLakeStoreAccounts'");
            }
            if ((!args || args.defaultDataLakeStoreAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultDataLakeStoreAccount'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["computePolicies"] = args ? args.computePolicies : undefined;
            resourceInputs["dataLakeStoreAccounts"] = args ? args.dataLakeStoreAccounts : undefined;
            resourceInputs["defaultDataLakeStoreAccount"] = args ? args.defaultDataLakeStoreAccount : undefined;
            resourceInputs["firewallAllowAzureIps"] = (args ? args.firewallAllowAzureIps : undefined) ?? "Disabled";
            resourceInputs["firewallRules"] = args ? args.firewallRules : undefined;
            resourceInputs["firewallState"] = (args ? args.firewallState : undefined) ?? "Disabled";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxDegreeOfParallelism"] = (args ? args.maxDegreeOfParallelism : undefined) ?? 30;
            resourceInputs["maxDegreeOfParallelismPerJob"] = (args ? args.maxDegreeOfParallelismPerJob : undefined) ?? 32;
            resourceInputs["maxJobCount"] = (args ? args.maxJobCount : undefined) ?? 3;
            resourceInputs["minPriorityPerJob"] = args ? args.minPriorityPerJob : undefined;
            resourceInputs["newTier"] = (args ? args.newTier : undefined) ?? "Consumption";
            resourceInputs["queryStoreRetention"] = (args ? args.queryStoreRetention : undefined) ?? 30;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentTier"] = undefined /*out*/;
            resourceInputs["debugDataAccessLevel"] = undefined /*out*/;
            resourceInputs["defaultDataLakeStoreAccountType"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["hiveMetastores"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["maxActiveJobCountPerUser"] = undefined /*out*/;
            resourceInputs["maxJobRunningTimeInMin"] = undefined /*out*/;
            resourceInputs["maxQueuedJobCountPerUser"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicDataLakeStoreAccounts"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemMaxDegreeOfParallelism"] = undefined /*out*/;
            resourceInputs["systemMaxJobCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
        } else {
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["computePolicies"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentTier"] = undefined /*out*/;
            resourceInputs["dataLakeStoreAccounts"] = undefined /*out*/;
            resourceInputs["debugDataAccessLevel"] = undefined /*out*/;
            resourceInputs["defaultDataLakeStoreAccount"] = undefined /*out*/;
            resourceInputs["defaultDataLakeStoreAccountType"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["firewallAllowAzureIps"] = undefined /*out*/;
            resourceInputs["firewallRules"] = undefined /*out*/;
            resourceInputs["firewallState"] = undefined /*out*/;
            resourceInputs["hiveMetastores"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxActiveJobCountPerUser"] = undefined /*out*/;
            resourceInputs["maxDegreeOfParallelism"] = undefined /*out*/;
            resourceInputs["maxDegreeOfParallelismPerJob"] = undefined /*out*/;
            resourceInputs["maxJobCount"] = undefined /*out*/;
            resourceInputs["maxJobRunningTimeInMin"] = undefined /*out*/;
            resourceInputs["maxQueuedJobCountPerUser"] = undefined /*out*/;
            resourceInputs["minPriorityPerJob"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["newTier"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicDataLakeStoreAccounts"] = undefined /*out*/;
            resourceInputs["queryStoreRetention"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageAccounts"] = undefined /*out*/;
            resourceInputs["systemMaxDegreeOfParallelism"] = undefined /*out*/;
            resourceInputs["systemMaxJobCount"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datalakeanalytics/v20151001preview:Account" }, { type: "azure-native:datalakeanalytics/v20161101:Account" }, { type: "azure-native:datalakeanalytics/v20191101preview:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The list of compute policies associated with this account.
     */
    computePolicies?: pulumi.Input<pulumi.Input<types.inputs.CreateComputePolicyWithAccountParametersArgs>[]>;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    dataLakeStoreAccounts: pulumi.Input<pulumi.Input<types.inputs.AddDataLakeStoreWithAccountParametersArgs>[]>;
    /**
     * The default Data Lake Store account associated with this account.
     */
    defaultDataLakeStoreAccount: pulumi.Input<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    firewallAllowAzureIps?: pulumi.Input<types.enums.FirewallAllowAzureIpsState>;
    /**
     * The list of firewall rules associated with this account.
     */
    firewallRules?: pulumi.Input<pulumi.Input<types.inputs.CreateFirewallRuleWithAccountParametersArgs>[]>;
    /**
     * The current state of the IP address firewall for this account.
     */
    firewallState?: pulumi.Input<types.enums.FirewallState>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    maxDegreeOfParallelism?: pulumi.Input<number>;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    maxDegreeOfParallelismPerJob?: pulumi.Input<number>;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    maxJobCount?: pulumi.Input<number>;
    /**
     * The minimum supported priority per job for this account.
     */
    minPriorityPerJob?: pulumi.Input<number>;
    /**
     * The commitment tier for the next month.
     */
    newTier?: pulumi.Input<types.enums.TierType>;
    /**
     * The number of days that job metadata is retained.
     */
    queryStoreRetention?: pulumi.Input<number>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<types.inputs.AddStorageAccountWithAccountParametersArgs>[]>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}