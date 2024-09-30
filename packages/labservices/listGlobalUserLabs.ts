import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List labs for the user.
 * Azure REST API version: 2018-10-15.
 */
export function listGlobalUserLabs(args: ListGlobalUserLabsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserLabsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:listGlobalUserLabs", {
        "userName": args.userName,
    }, opts);
}

export interface ListGlobalUserLabsArgs {
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Lists the labs owned by a user
 */
export interface ListGlobalUserLabsResult {
    /**
     * List of all the labs
     */
    readonly labs?: types.outputs.LabDetailsResponse[];
}
/**
 * List labs for the user.
 * Azure REST API version: 2018-10-15.
 */
export function listGlobalUserLabsOutput(args: ListGlobalUserLabsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalUserLabsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:listGlobalUserLabs", {
        "userName": args.userName,
    }, opts);
}

export interface ListGlobalUserLabsOutputArgs {
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}