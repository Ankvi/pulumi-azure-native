import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the management group.
 */
export function getManagementGroup(args: GetManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management/v20230401:getManagementGroup", {
        "expand": args.expand,
        "filter": args.filter,
        "groupId": args.groupId,
        "recurse": args.recurse,
    }, opts);
}

export interface GetManagementGroupArgs {
    /**
     * The $expand=children query string parameter allows clients to request inclusion of children in the response payload.  $expand=path includes the path from the root group to the current group.  $expand=ancestors includes the ancestor Ids of the current group.
     */
    expand?: string;
    /**
     * A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
     */
    filter?: string;
    /**
     * Management Group ID.
     */
    groupId: string;
    /**
     * The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
     */
    recurse?: boolean;
}

/**
 * The management group details.
 */
export interface GetManagementGroupResult {
    /**
     * The list of children.
     */
    readonly children?: types.outputs.ManagementGroupChildInfoResponse[];
    /**
     * The details of a management group.
     */
    readonly details?: types.outputs.ManagementGroupDetailsResponse;
    /**
     * The friendly name of the management group.
     */
    readonly displayName?: string;
    /**
     * The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
     */
    readonly id: string;
    /**
     * The name of the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly name: string;
    /**
     * The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenantId?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups
     */
    readonly type: string;
}
/**
 * Get the details of the management group.
 */
export function getManagementGroupOutput(args: GetManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementGroupResult> {
    return pulumi.output(args).apply((a: any) => getManagementGroup(a, opts))
}

export interface GetManagementGroupOutputArgs {
    /**
     * The $expand=children query string parameter allows clients to request inclusion of children in the response payload.  $expand=path includes the path from the root group to the current group.  $expand=ancestors includes the ancestor Ids of the current group.
     */
    expand?: pulumi.Input<string>;
    /**
     * A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
     */
    filter?: pulumi.Input<string>;
    /**
     * Management Group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
     */
    recurse?: pulumi.Input<boolean>;
}
