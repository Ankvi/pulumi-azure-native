import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a server trust group.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getServerTrustGroup(args: GetServerTrustGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServerTrustGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerTrustGroup", {
        "locationName": args.locationName,
        "resourceGroupName": args.resourceGroupName,
        "serverTrustGroupName": args.serverTrustGroupName,
    }, opts);
}

export interface GetServerTrustGroupArgs {
    /**
     * The name of the region where the resource is located.
     */
    locationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server trust group.
     */
    serverTrustGroupName: string;
}

/**
 * A server trust group.
 */
export interface GetServerTrustGroupResult {
    /**
     * Group members information for the server trust group.
     */
    readonly groupMembers: types.outputs.ServerInfoResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Trust scope of the server trust group.
     */
    readonly trustScopes: string[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a server trust group.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getServerTrustGroupOutput(args: GetServerTrustGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerTrustGroupResult> {
    return pulumi.output(args).apply((a: any) => getServerTrustGroup(a, opts))
}

export interface GetServerTrustGroupOutputArgs {
    /**
     * The name of the region where the resource is located.
     */
    locationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server trust group.
     */
    serverTrustGroupName: pulumi.Input<string>;
}