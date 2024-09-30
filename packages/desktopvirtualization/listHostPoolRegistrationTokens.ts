import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Operation to list the RegistrationTokens associated with the HostPool.
 * Azure REST API version: 2024-04-08-preview.
 *
 * Other available API versions: 2024-04-03.
 */
export function listHostPoolRegistrationTokens(args: ListHostPoolRegistrationTokensArgs, opts?: pulumi.InvokeOptions): Promise<ListHostPoolRegistrationTokensResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:listHostPoolRegistrationTokens", {
        "hostPoolName": args.hostPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListHostPoolRegistrationTokensArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * List of RegistrationToken definitions.
 */
export interface ListHostPoolRegistrationTokensResult {
    /**
     * Link to the next page of results.
     */
    readonly nextLink: string;
    /**
     * List of RegistrationToken definitions.
     */
    readonly value?: types.outputs.RegistrationTokenMinimalResponse[];
}
/**
 * Operation to list the RegistrationTokens associated with the HostPool.
 * Azure REST API version: 2024-04-08-preview.
 *
 * Other available API versions: 2024-04-03.
 */
export function listHostPoolRegistrationTokensOutput(args: ListHostPoolRegistrationTokensOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListHostPoolRegistrationTokensResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:listHostPoolRegistrationTokens", {
        "hostPoolName": args.hostPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListHostPoolRegistrationTokensOutputArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}