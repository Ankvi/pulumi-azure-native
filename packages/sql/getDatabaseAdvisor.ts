import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database advisor.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDatabaseAdvisor(args: GetDatabaseAdvisorArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAdvisorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getDatabaseAdvisor", {
        "advisorName": args.advisorName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseAdvisorArgs {
    /**
     * The name of the Database Advisor.
     */
    advisorName: string;
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Database, Server or Elastic Pool Advisor.
 */
export interface GetDatabaseAdvisorResult {
    /**
     * Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
     */
    readonly advisorStatus: string;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    readonly autoExecuteStatus: string;
    /**
     * Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
     */
    readonly autoExecuteStatusInheritedFrom: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource kind.
     */
    readonly kind: string;
    /**
     * Gets the time when the current resource was analyzed for recommendations by this advisor.
     */
    readonly lastChecked: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
     */
    readonly recommendationsStatus: string;
    /**
     * Gets the recommended actions for this advisor.
     */
    readonly recommendedActions: types.outputs.RecommendedActionResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a database advisor.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getDatabaseAdvisorOutput(args: GetDatabaseAdvisorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseAdvisorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getDatabaseAdvisor", {
        "advisorName": args.advisorName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseAdvisorOutputArgs {
    /**
     * The name of the Database Advisor.
     */
    advisorName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}