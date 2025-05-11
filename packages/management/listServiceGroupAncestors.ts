import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the serviceGroup's ancestors
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function listServiceGroupAncestors(args: ListServiceGroupAncestorsArgs, opts?: pulumi.InvokeOptions): Promise<ListServiceGroupAncestorsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management:listServiceGroupAncestors", {
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface ListServiceGroupAncestorsArgs {
    /**
     * ServiceGroup Name.
     */
    serviceGroupName: string;
}

/**
 * Response holding an array of service groups and a nextLink that supports pagination
 */
export interface ListServiceGroupAncestorsResult {
    /**
     * URL to query the next page of results for this request
     */
    readonly nextLink?: string;
    /**
     * Array of service groups based on the request criteria
     */
    readonly value?: types.outputs.ServiceGroupResponse[];
}
/**
 * Get the details of the serviceGroup's ancestors
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function listServiceGroupAncestorsOutput(args: ListServiceGroupAncestorsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListServiceGroupAncestorsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:management:listServiceGroupAncestors", {
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface ListServiceGroupAncestorsOutputArgs {
    /**
     * ServiceGroup Name.
     */
    serviceGroupName: pulumi.Input<string>;
}