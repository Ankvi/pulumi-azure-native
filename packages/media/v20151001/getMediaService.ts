import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Media Service.
 */
export function getMediaService(args: GetMediaServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20151001:getMediaService", {
        "mediaServiceName": args.mediaServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMediaServiceArgs {
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
 * The properties of a Media Service resource.
 */
export interface GetMediaServiceResult {
    /**
     * Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
     */
    readonly apiEndpoints: types.outputs.ApiEndpointResponse[];
    /**
     * The id of the resource.
     */
    readonly id: string;
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts?: types.outputs.StorageAccountResponse[];
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource
     */
    readonly type: string;
}
/**
 * Gets a Media Service.
 */
export function getMediaServiceOutput(args: GetMediaServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaServiceResult> {
    return pulumi.output(args).apply((a: any) => getMediaService(a, opts))
}

export interface GetMediaServiceOutputArgs {
    /**
     * Name of the Media Service.
     */
    mediaServiceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}