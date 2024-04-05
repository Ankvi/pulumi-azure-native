import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a hub setting.
 */
export function getWebPubSubHub(args: GetWebPubSubHubArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub/v20230301preview:getWebPubSubHub", {
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
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of a hub.
     */
    readonly properties: types.outputs.WebPubSubHubPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a hub setting.
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}