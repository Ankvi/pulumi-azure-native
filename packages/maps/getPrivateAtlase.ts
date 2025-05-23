import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * [Deprecated] Get a Private Atlas resource.
 *
 * Uses Azure REST API version 2020-02-01-preview.
 */
export function getPrivateAtlase(args: GetPrivateAtlaseArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateAtlaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps:getPrivateAtlase", {
        "accountName": args.accountName,
        "privateAtlasName": args.privateAtlasName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateAtlaseArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The name of the Private Atlas instance.
     */
    privateAtlasName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure resource which represents which will provision the ability to create private location data.
 */
export interface GetPrivateAtlaseResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The Private Atlas resource properties.
     */
    readonly properties: types.outputs.PrivateAtlasPropertiesResponse;
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
 * [Deprecated] Get a Private Atlas resource.
 *
 * Uses Azure REST API version 2020-02-01-preview.
 */
export function getPrivateAtlaseOutput(args: GetPrivateAtlaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateAtlaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maps:getPrivateAtlase", {
        "accountName": args.accountName,
        "privateAtlasName": args.privateAtlasName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateAtlaseOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Private Atlas instance.
     */
    privateAtlasName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}