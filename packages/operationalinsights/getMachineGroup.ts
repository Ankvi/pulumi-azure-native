import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the specified machine group as it existed during the specified time interval.
 * Azure REST API version: 2015-11-01-preview.
 */
export function getMachineGroup(args: GetMachineGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getMachineGroup", {
        "endTime": args.endTime,
        "machineGroupName": args.machineGroupName,
        "resourceGroupName": args.resourceGroupName,
        "startTime": args.startTime,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMachineGroupArgs {
    /**
     * UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
     */
    endTime?: string;
    /**
     * Machine Group resource name.
     */
    machineGroupName: string;
    /**
     * Resource group name within the specified subscriptionId.
     */
    resourceGroupName: string;
    /**
     * UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
     */
    startTime?: string;
    /**
     * OMS workspace containing the resources of interest.
     */
    workspaceName: string;
}

/**
 * A user-defined logical grouping of machines.
 */
export interface GetMachineGroupResult {
    /**
     * Count of machines in this group. The value of count may be bigger than the number of machines in case of the group has been truncated due to exceeding the max number of machines a group can handle.
     */
    readonly count?: number;
    /**
     * User defined name for the group
     */
    readonly displayName: string;
    /**
     * Resource ETAG.
     */
    readonly etag?: string;
    /**
     * Type of the machine group
     */
    readonly groupType?: string;
    /**
     * Resource identifier.
     */
    readonly id: string;
    /**
     * Additional resource type qualifier.
     * Expected value is 'machineGroup'.
     */
    readonly kind: "machineGroup";
    /**
     * References of the machines in this group. The hints within each reference do not represent the current value of the corresponding fields. They are a snapshot created during the last time the machine group was updated.
     */
    readonly machines?: types.outputs.MachineReferenceWithHintsResponse[];
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
 * Returns the specified machine group as it existed during the specified time interval.
 * Azure REST API version: 2015-11-01-preview.
 */
export function getMachineGroupOutput(args: GetMachineGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineGroupResult> {
    return pulumi.output(args).apply((a: any) => getMachineGroup(a, opts))
}

export interface GetMachineGroupOutputArgs {
    /**
     * UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
     */
    endTime?: pulumi.Input<string>;
    /**
     * Machine Group resource name.
     */
    machineGroupName: pulumi.Input<string>;
    /**
     * Resource group name within the specified subscriptionId.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
     */
    startTime?: pulumi.Input<string>;
    /**
     * OMS workspace containing the resources of interest.
     */
    workspaceName: pulumi.Input<string>;
}
