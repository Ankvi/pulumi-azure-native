import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the applicable start/stop schedules, if any.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function listVirtualMachineApplicableSchedules(args: ListVirtualMachineApplicableSchedulesArgs, opts?: pulumi.InvokeOptions): Promise<ListVirtualMachineApplicableSchedulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:listVirtualMachineApplicableSchedules", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListVirtualMachineApplicableSchedulesArgs {
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the virtual machine.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
 */
export interface ListVirtualMachineApplicableSchedulesResult {
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The auto-shutdown schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsShutdown?: types.outputs.ScheduleResponse;
    /**
     * The auto-startup schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsStartup?: types.outputs.ScheduleResponse;
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
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function listVirtualMachineApplicableSchedulesOutput(args: ListVirtualMachineApplicableSchedulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListVirtualMachineApplicableSchedulesResult> {
    return pulumi.output(args).apply((a: any) => listVirtualMachineApplicableSchedules(a, opts))
}

export interface ListVirtualMachineApplicableSchedulesOutputArgs {
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
