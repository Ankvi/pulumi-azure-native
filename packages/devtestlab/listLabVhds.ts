import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List disk images available for custom image creation.
 * Azure REST API version: 2018-09-15.
 */
export function listLabVhds(args: ListLabVhdsArgs, opts?: pulumi.InvokeOptions): Promise<ListLabVhdsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:listLabVhds", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListLabVhdsArgs {
    /**
     * The name of the lab.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The response of a list operation.
 */
export interface ListLabVhdsResult {
    /**
     * Link for next set of results.
     */
    readonly nextLink?: string;
    /**
     * Results of the list operation.
     */
    readonly value?: types.outputs.devtestlab.LabVhdResponse[];
}
/**
 * List disk images available for custom image creation.
 * Azure REST API version: 2018-09-15.
 */
export function listLabVhdsOutput(args: ListLabVhdsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLabVhdsResult> {
    return pulumi.output(args).apply((a: any) => listLabVhds(a, opts))
}

export interface ListLabVhdsOutputArgs {
    /**
     * The name of the lab.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
