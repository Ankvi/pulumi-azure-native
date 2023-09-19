import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the virtual machine details
 * Azure REST API version: 2018-10-15.
 */
export function getGlobalUserEnvironment(args: GetGlobalUserEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalUserEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getGlobalUserEnvironment", {
        "environmentId": args.environmentId,
        "expand": args.expand,
        "userName": args.userName,
    }, opts);
}

export interface GetGlobalUserEnvironmentArgs {
    /**
     * The resourceId of the environment
     */
    environmentId: string;
    /**
     * Specify the $expand query. Example: 'properties($expand=environment)'
     */
    expand?: string;
    /**
     * The name of the user.
     */
    userName: string;
}

/**
 * Represents the environments details
 */
export interface GetGlobalUserEnvironmentResult {
    /**
     * Details of the environment
     */
    readonly environment: types.outputs.EnvironmentDetailsResponse;
}
/**
 * Gets the virtual machine details
 * Azure REST API version: 2018-10-15.
 */
export function getGlobalUserEnvironmentOutput(args: GetGlobalUserEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalUserEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getGlobalUserEnvironment(a, opts))
}

export interface GetGlobalUserEnvironmentOutputArgs {
    /**
     * The resourceId of the environment
     */
    environmentId: pulumi.Input<string>;
    /**
     * Specify the $expand query. Example: 'properties($expand=environment)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the user.
     */
    userName: pulumi.Input<string>;
}
