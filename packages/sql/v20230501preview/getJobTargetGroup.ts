import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a target group.
 */
export function getJobTargetGroup(args: GetJobTargetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetJobTargetGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getJobTargetGroup", {
        "jobAgentName": args.jobAgentName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "targetGroupName": args.targetGroupName,
    }, opts);
}

export interface GetJobTargetGroupArgs {
    /**
     * The name of the job agent.
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
    /**
     * The name of the target group.
     */
    targetGroupName: string;
}

/**
 * A group of job targets.
 */
export interface GetJobTargetGroupResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Members of the target group.
     */
    readonly members: types.outputs.JobTargetResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a target group.
 */
export function getJobTargetGroupOutput(args: GetJobTargetGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobTargetGroupResult> {
    return pulumi.output(args).apply((a: any) => getJobTargetGroup(a, opts))
}

export interface GetJobTargetGroupOutputArgs {
    /**
     * The name of the job agent.
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
    /**
     * The name of the target group.
     */
    targetGroupName: pulumi.Input<string>;
}
