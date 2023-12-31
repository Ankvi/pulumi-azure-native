import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The parameters used to add a new Data Lake Store account while creating a new Data Lake Analytics account.
     */
    export interface AddDataLakeStoreWithAccountParametersArgs {
        /**
         * The unique name of the Data Lake Store account to add.
         */
        name: pulumi.Input<string>;
        /**
         * The optional suffix for the Data Lake Store account.
         */
        suffix?: pulumi.Input<string>;
    }

    /**
     * The parameters used to add a new Azure Storage account while creating a new Data Lake Analytics account.
     */
    export interface AddStorageAccountWithAccountParametersArgs {
        /**
         * The access key associated with this Azure Storage account that will be used to connect to it.
         */
        accessKey: pulumi.Input<string>;
        /**
         * The unique name of the Azure Storage account to add.
         */
        name: pulumi.Input<string>;
        /**
         * The optional suffix for the storage account.
         */
        suffix?: pulumi.Input<string>;
    }
    /**
     * addStorageAccountWithAccountParametersArgsProvideDefaults sets the appropriate defaults for AddStorageAccountWithAccountParametersArgs
     */
    export function addStorageAccountWithAccountParametersArgsProvideDefaults(val: AddStorageAccountWithAccountParametersArgs): AddStorageAccountWithAccountParametersArgs {
        return {
            ...val,
            suffix: (val.suffix) ?? "azuredatalakestore.net",
        };
    }

    /**
     * The parameters used to create a new compute policy while creating a new Data Lake Analytics account.
     */
    export interface CreateComputePolicyWithAccountParametersArgs {
        /**
         * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
         */
        maxDegreeOfParallelismPerJob?: pulumi.Input<number>;
        /**
         * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
         */
        minPriorityPerJob?: pulumi.Input<number>;
        /**
         * The unique name of the compute policy to create.
         */
        name: pulumi.Input<string>;
        /**
         * The AAD object identifier for the entity to create a policy for.
         */
        objectId: pulumi.Input<string>;
        /**
         * The type of AAD object the object identifier refers to.
         */
        objectType: pulumi.Input<string | enums.AADObjectType>;
    }

    /**
     * The parameters used to create a new firewall rule while creating a new Data Lake Analytics account.
     */
    export interface CreateFirewallRuleWithAccountParametersArgs {
        /**
         * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        endIpAddress: pulumi.Input<string>;
        /**
         * The unique name of the firewall rule to create.
         */
        name: pulumi.Input<string>;
        /**
         * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
         */
        startIpAddress: pulumi.Input<string>;
    }
