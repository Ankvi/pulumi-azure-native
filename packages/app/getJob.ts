import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App Job
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getJob", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobArgs {
    /**
     * Job Name
     */
    jobName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Container App Job
 */
export interface GetJobResult {
    /**
     * Container Apps Job configuration properties.
     */
    readonly configuration?: types.outputs.JobConfigurationResponse;
    /**
     * Resource ID of environment.
     */
    readonly environmentId?: string;
    /**
     * The endpoint of the eventstream of the container apps job.
     */
    readonly eventStreamEndpoint: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Outbound IP Addresses of a container apps job.
     */
    readonly outboundIpAddresses: string[];
    /**
     * Provisioning state of the Container Apps Job.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Container Apps job definition.
     */
    readonly template?: types.outputs.JobTemplateResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Workload profile name to pin for container apps job execution.
     */
    readonly workloadProfileName?: string;
}
/**
 * Container App Job
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getJobOutput(args: GetJobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getJob", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobOutputArgs {
    /**
     * Job Name
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}