import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists the available consortiums for a subscription.
 */
export function listLocationConsortiums(args: ListLocationConsortiumsArgs, opts?: pulumi.InvokeOptions): Promise<ListLocationConsortiumsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blockchain/v20180601preview:listLocationConsortiums", {
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
    readonly value?: types.outputs.blockchain.v20180601preview.ConsortiumResponse[];
}
/**
 * Lists the available consortiums for a subscription.
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
