import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the available consortiums for a subscription.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listLocationConsortiums(args: ListLocationConsortiumsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocationConsortiumsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain:listLocationConsortiums", {
        "locationName": args.locationName,
    }, opts);
}

export interface ListLocationConsortiumsArgs {
    /**
     * Location Name.
     */
    locationName: string;
}

/**
 * Collection of the consortium payload.
 */
export interface ListLocationConsortiumsResult {
    /**
     * Gets or sets the collection of consortiums.
     */
    readonly value?: types.outputs.ConsortiumResponse[];
}
/**
 * Lists the available consortiums for a subscription.
 * Azure REST API version: 2018-06-01-preview.
 */
export function listLocationConsortiumsOutput(args: ListLocationConsortiumsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListLocationConsortiumsResult> {
    return pulumi.output(args).apply((a: any) => listLocationConsortiums(a, opts))
}

export interface ListLocationConsortiumsOutputArgs {
    /**
     * Location Name.
     */
    locationName: pulumi.Input<string>;
}