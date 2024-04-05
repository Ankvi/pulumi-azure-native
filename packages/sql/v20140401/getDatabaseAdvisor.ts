import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns details of a Database Advisor.
 */
export function getDatabaseAdvisor(args: GetDatabaseAdvisorArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAdvisorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20140401:getDatabaseAdvisor", {
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
 * Database Advisor.
 */
export interface GetDatabaseAdvisorResult {
    /**
     * Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
     */
    readonly advisorStatus: string;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    readonly autoExecuteValue: string;
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
     * Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available), LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
     */
    readonly recommendationsStatus: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Returns details of a Database Advisor.
 */
export function getDatabaseAdvisorOutput(args: GetDatabaseAdvisorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseAdvisorResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseAdvisor(a, opts))
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