import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified interconnect group.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getInterconnectGroup(args: GetInterconnectGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetInterconnectGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getInterconnectGroup", {
        "interconnectGroupName": args.interconnectGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInterconnectGroupArgs {
    /**
     * The name of the interconnect group.
     */
    interconnectGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An interconnect group resource.
 */
export interface GetInterconnectGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the interconnect group resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the interconnect group resource.
     */
    readonly resourceGuid: string;
    /**
     * Scope of interconnect group resource.
     */
    readonly scope?: string;
    /**
     * The subgroup profile of the interconnect group resource.
     */
    readonly subgroupProfile: types.outputs.SubgroupProfileResponse;
    /**
     * A list of subgroups of the interconnect group.
     */
    readonly subgroups: types.outputs.SubgroupResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified interconnect group.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getInterconnectGroupOutput(args: GetInterconnectGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInterconnectGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getInterconnectGroup", {
        "interconnectGroupName": args.interconnectGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInterconnectGroupOutputArgs {
    /**
     * The name of the interconnect group.
     */
    interconnectGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}