import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response of a list VM Host Update Operation.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listSubAccountVMHosts(args: ListSubAccountVMHostsArgs, opts?: pulumi.InvokeOptions): Promise<ListSubAccountVMHostsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:listSubAccountVMHosts", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface ListSubAccountVMHostsArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Sub Account resource name
     */
    subAccountName: string;
}

/**
 * Response of a list VM Host Update Operation.
 */
export interface ListSubAccountVMHostsResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * Response of a list vm host update operation.
     */
    readonly value?: types.outputs.logz.VMResourcesResponse[];
}
/**
 * Response of a list VM Host Update Operation.
 * Azure REST API version: 2022-01-01-preview.
 */
export function listSubAccountVMHostsOutput(args: ListSubAccountVMHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSubAccountVMHostsResult> {
    return pulumi.output(args).apply((a: any) => listSubAccountVMHosts(a, opts))
}

export interface ListSubAccountVMHostsOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sub Account resource name
     */
    subAccountName: pulumi.Input<string>;
}
