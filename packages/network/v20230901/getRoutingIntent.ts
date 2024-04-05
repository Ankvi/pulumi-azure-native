import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a RoutingIntent.
 */
export function getRoutingIntent(args: GetRoutingIntentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutingIntentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230901:getRoutingIntent", {
        "resourceGroupName": args.resourceGroupName,
        "routingIntentName": args.routingIntentName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetRoutingIntentArgs {
    /**
     * The resource group name of the RoutingIntent.
     */
    resourceGroupName: string;
    /**
     * The name of the RoutingIntent.
     */
    routingIntentName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * The routing intent child resource of a Virtual hub.
 */
export interface GetRoutingIntentResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the RoutingIntent resource.
     */
    readonly provisioningState: string;
    /**
     * List of routing policies.
     */
    readonly routingPolicies?: types.outputs.RoutingPolicyResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a RoutingIntent.
 */
export function getRoutingIntentOutput(args: GetRoutingIntentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoutingIntentResult> {
    return pulumi.output(args).apply((a: any) => getRoutingIntent(a, opts))
}

export interface GetRoutingIntentOutputArgs {
    /**
     * The resource group name of the RoutingIntent.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RoutingIntent.
     */
    routingIntentName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}