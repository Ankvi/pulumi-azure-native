import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list operation.
 */
export function listVMHost(args: ListVMHostArgs, opts?: pulumi.InvokeOptions): Promise<ListVMHostResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20230601:listVMHost", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListVMHostArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Response of a list operation.
 */
export interface ListVMHostResult {
    /**
     * Link to the next Vm resource Id, if any.
     */
    readonly nextLink?: string;
    /**
     * Results of a list operation.
     */
    readonly value?: types.outputs.VMResourcesResponse[];
}
/**
 * Response of a list operation.
 */
export function listVMHostOutput(args: ListVMHostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListVMHostResult> {
    return pulumi.output(args).apply((a: any) => listVMHost(a, opts))
}

export interface ListVMHostOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the Elastic resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}