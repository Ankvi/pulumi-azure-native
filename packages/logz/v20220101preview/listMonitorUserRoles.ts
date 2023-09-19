import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for list of user's role for Logz.io account.
 */
export function listMonitorUserRoles(args: ListMonitorUserRolesArgs, opts?: pulumi.InvokeOptions): Promise<ListMonitorUserRolesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz/v20220101preview:listMonitorUserRoles", {
        "emailAddress": args.emailAddress,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMonitorUserRolesArgs {
    /**
     * Email of the user used by Logz for contacting them if needed
     */
    emailAddress?: string;
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for list of user's role for Logz.io account.
 */
export interface ListMonitorUserRolesResult {
    /**
     * Link to the next set of results, if any.
     */
    readonly nextLink?: string;
    /**
     * List of user roles for Logz.io account.
     */
    readonly value?: types.outputs.UserRoleResponseResponse[];
}
/**
 * Response for list of user's role for Logz.io account.
 */
export function listMonitorUserRolesOutput(args: ListMonitorUserRolesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMonitorUserRolesResult> {
    return pulumi.output(args).apply((a: any) => listMonitorUserRoles(a, opts))
}

export interface ListMonitorUserRolesOutputArgs {
    /**
     * Email of the user used by Logz for contacting them if needed
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
