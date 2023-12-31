import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a job agent.
 */
export function getJobAgent(args: GetJobAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetJobAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20211101:getJobAgent", {
        "jobAgentName": args.jobAgentName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetJobAgentArgs {
    /**
     * The name of the job agent to be retrieved.
     */
    jobAgentName: string;
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
 * An Azure SQL job agent.
 */
export interface GetJobAgentResult {
    /**
     * Resource ID of the database to store job metadata in.
     */
    readonly databaseId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name and tier of the SKU.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The state of the job agent.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a job agent.
 */
export function getJobAgentOutput(args: GetJobAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobAgentResult> {
    return pulumi.output(args).apply((a: any) => getJobAgent(a, opts))
}

export interface GetJobAgentOutputArgs {
    /**
     * The name of the job agent to be retrieved.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
