import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists the applicable start/stop schedules, if any.
 */
export function listServiceFabricApplicableSchedules(args: ListServiceFabricApplicableSchedulesArgs, opts?: pulumi.InvokeOptions): Promise<ListServiceFabricApplicableSchedulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab/v20180915:listServiceFabricApplicableSchedules", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface ListServiceFabricApplicableSchedulesArgs {
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the service fabric.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the user profile.
     */
    userName: string;
}

/**
 * Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
 */
export interface ListServiceFabricApplicableSchedulesResult {
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The auto-shutdown schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsShutdown?: types.outputs.devtestlab.v20180915.ScheduleResponse;
    /**
     * The auto-startup schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsStartup?: types.outputs.devtestlab.v20180915.ScheduleResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Lists the applicable start/stop schedules, if any.
 */
export function listServiceFabricApplicableSchedulesOutput(args: ListServiceFabricApplicableSchedulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServiceFabricApplicableSchedulesResult> {
    return pulumi.output(args).apply((a: any) => listServiceFabricApplicableSchedules(a, opts))
}

export interface ListServiceFabricApplicableSchedulesOutputArgs {
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the service fabric.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    userName: pulumi.Input<string>;
}
