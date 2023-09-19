import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Maps Creator resource.
 */
export function getCreator(args: GetCreatorArgs, opts?: pulumi.InvokeOptions): Promise<GetCreatorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps/v20230601:getCreator", {
        "accountName": args.accountName,
        "creatorName": args.creatorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCreatorArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The name of the Maps Creator instance.
     */
    creatorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure resource which represents Maps Creator product and provides ability to manage private location data.
 */
export interface GetCreatorResult {
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
     * The Creator resource properties.
     */
    readonly properties: types.outputs.CreatorPropertiesResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a Maps Creator resource.
 */
export function getCreatorOutput(args: GetCreatorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCreatorResult> {
    return pulumi.output(args).apply((a: any) => getCreator(a, opts))
}

export interface GetCreatorOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Maps Creator instance.
     */
    creatorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
