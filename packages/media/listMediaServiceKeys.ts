import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the keys for a Media Service.
 *
 * Uses Azure REST API version 2015-10-01.
 */
export function listMediaServiceKeys(args: ListMediaServiceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListMediaServiceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:listMediaServiceKeys", {
        "mediaServiceName": args.mediaServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMediaServiceKeysArgs {
    /**
     * Name of the Media Service.
     */
    mediaServiceName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The response body for a ListKeys API.
 */
export interface ListMediaServiceKeysResult {
    /**
     * The primary authorization endpoint.
     */
    readonly primaryAuthEndpoint?: string;
    /**
     * The primary key for the Media Service resource.
     */
    readonly primaryKey?: string;
    /**
     * The authorization scope.
     */
    readonly scope?: string;
    /**
     * The secondary authorization endpoint.
     */
    readonly secondaryAuthEndpoint?: string;
    /**
     * The secondary key for the Media Service resource.
     */
    readonly secondaryKey?: string;
}
/**
 * Lists the keys for a Media Service.
 *
 * Uses Azure REST API version 2015-10-01.
 */
export function listMediaServiceKeysOutput(args: ListMediaServiceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListMediaServiceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:listMediaServiceKeys", {
        "mediaServiceName": args.mediaServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMediaServiceKeysOutputArgs {
    /**
     * Name of the Media Service.
     */
    mediaServiceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}