import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List Environments for the user
 * Azure REST API version: 2018-10-15.
 */
export function listGlobalUserEnvironments(args: ListGlobalUserEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserEnvironmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:listGlobalUserEnvironments", {
        "labId": args.labId,
        "userName": args.userName,
    }, opts);
}

export interface ListGlobalUserEnvironmentsArgs {
    /**
     * The resource Id of the lab
     */
    labId?: string;
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Represents the list of environments owned by a user
 */
export interface ListGlobalUserEnvironmentsResult {
    /**
     * List of all the environments
     */
    readonly environments?: types.outputs.EnvironmentDetailsResponse[];
}
/**
 * List Environments for the user
 * Azure REST API version: 2018-10-15.
 */
export function listGlobalUserEnvironmentsOutput(args: ListGlobalUserEnvironmentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGlobalUserEnvironmentsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:listGlobalUserEnvironments", {
        "labId": args.labId,
        "userName": args.userName,
    }, opts);
}

export interface ListGlobalUserEnvironmentsOutputArgs {
    /**
     * The resource Id of the lab
     */
    labId?: pulumi.Input<string>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}