import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets jobs status details for sql arc resource
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurearcdata [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlServerInstanceJobsStatus(args: GetSqlServerInstanceJobsStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerInstanceJobsStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerInstanceJobsStatus", {
        "featureName": args.featureName,
        "jobType": args.jobType,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerInstanceJobsStatusArgs {
    /**
     * The name of the feature to retrieve the job status for.
     */
    featureName?: string;
    /**
     * The type of the job to retrieve the status for.
     */
    jobType?: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: string;
}

/**
 * The response for the status of the jobs running on the SQL Server instance.
 */
export interface GetSqlServerInstanceJobsStatusResult {
    /**
     * The list of jobs status running on the SQL Server instance.
     */
    readonly jobsStatus?: types.outputs.SqlServerInstanceJobStatusResponse[];
}
/**
 * Gets jobs status details for sql arc resource
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurearcdata [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlServerInstanceJobsStatusOutput(args: GetSqlServerInstanceJobsStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlServerInstanceJobsStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerInstanceJobsStatus", {
        "featureName": args.featureName,
        "jobType": args.jobType,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerInstanceJobsStatusOutputArgs {
    /**
     * The name of the feature to retrieve the job status for.
     */
    featureName?: pulumi.Input<string>;
    /**
     * The type of the job to retrieve the status for.
     */
    jobType?: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: pulumi.Input<string>;
}