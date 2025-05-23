import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getHub(args: GetHubArgs, opts?: pulumi.InvokeOptions): Promise<GetHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getHub", {
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHubArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Hub resource.
 */
export interface GetHubResult {
    /**
     * API endpoint URL of the hub.
     */
    readonly apiEndpoint: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Billing settings of the hub.
     */
    readonly hubBillingInfo?: types.outputs.HubBillingInfoFormatResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state of the hub.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
     */
    readonly tenantFeatures?: number;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Web endpoint URL of the hub.
     */
    readonly webEndpoint: string;
}
/**
 * Gets information about the specified hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getHubOutput(args: GetHubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getHub", {
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHubOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}