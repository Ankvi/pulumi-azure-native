import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of currently active sessions on the Bastion.
 */
export function getActiveSessions(args: GetActiveSessionsArgs, opts?: pulumi.InvokeOptions): Promise<GetActiveSessionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getActiveSessions", {
        "bastionHostName": args.bastionHostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActiveSessionsArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Response for GetActiveSessions.
 */
export interface GetActiveSessionsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink?: string;
    /**
     * List of active sessions on the bastion.
     */
    readonly value?: types.outputs.BastionActiveSessionResponse[];
}
/**
 * Returns the list of currently active sessions on the Bastion.
 */
export function getActiveSessionsOutput(args: GetActiveSessionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActiveSessionsResult> {
    return pulumi.output(args).apply((a: any) => getActiveSessions(a, opts))
}

export interface GetActiveSessionsOutputArgs {
    /**
     * The name of the Bastion Host.
     */
    bastionHostName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}