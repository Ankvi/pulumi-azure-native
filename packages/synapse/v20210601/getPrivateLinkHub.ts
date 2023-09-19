import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a privateLinkHub
 */
export function getPrivateLinkHub(args: GetPrivateLinkHubArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601:getPrivateLinkHub", {
        "privateLinkHubName": args.privateLinkHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateLinkHubArgs {
    /**
     * Name of the privateLinkHub
     */
    privateLinkHubName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A privateLinkHub
 */
export interface GetPrivateLinkHubResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionForPrivateLinkHubBasicResponse[];
    /**
     * PrivateLinkHub provisioning state
     */
    readonly provisioningState?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a privateLinkHub
 */
export function getPrivateLinkHubOutput(args: GetPrivateLinkHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkHubResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkHub(a, opts))
}

export interface GetPrivateLinkHubOutputArgs {
    /**
     * Name of the privateLinkHub
     */
    privateLinkHubName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
