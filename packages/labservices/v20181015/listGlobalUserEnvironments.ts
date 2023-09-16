import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * List Environments for the user
 */
export function listGlobalUserEnvironments(args: ListGlobalUserEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserEnvironmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20181015:listGlobalUserEnvironments", {
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
    readonly environments?: types.outputs.labservices.v20181015.EnvironmentDetailsResponse[];
}
/**
 * List Environments for the user
 */
export function listGlobalUserEnvironmentsOutput(args: ListGlobalUserEnvironmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGlobalUserEnvironmentsResult> {
    return pulumi.output(args).apply((a: any) => listGlobalUserEnvironments(a, opts))
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
