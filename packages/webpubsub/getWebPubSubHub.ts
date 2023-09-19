import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a hub setting.
 * Azure REST API version: 2023-02-01.
 */
export function getWebPubSubHub(args: GetWebPubSubHubArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub:getWebPubSubHub", {
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubHubArgs {
    /**
     * The hub name.
     */
    hubName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A hub setting
 */
export interface GetWebPubSubHubResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of a hub.
     */
    readonly properties: types.outputs.WebPubSubHubPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
}
/**
 * Get a hub setting.
 * Azure REST API version: 2023-02-01.
 */
export function getWebPubSubHubOutput(args: GetWebPubSubHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebPubSubHubResult> {
    return pulumi.output(args).apply((a: any) => getWebPubSubHub(a, opts))
}

export interface GetWebPubSubHubOutputArgs {
    /**
     * The hub name.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
