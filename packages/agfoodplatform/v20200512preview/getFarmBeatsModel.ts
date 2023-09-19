import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get FarmBeats resource.
 */
export function getFarmBeatsModel(args: GetFarmBeatsModelArgs, opts?: pulumi.InvokeOptions): Promise<GetFarmBeatsModelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform/v20200512preview:getFarmBeatsModel", {
        "farmBeatsResourceName": args.farmBeatsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFarmBeatsModelArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * FarmBeats ARM Resource.
 */
export interface GetFarmBeatsModelResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Uri of the FarmBeats instance.
     */
    readonly instanceUri: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * FarmBeats instance provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource model definition representing SKU
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Get FarmBeats resource.
 */
export function getFarmBeatsModelOutput(args: GetFarmBeatsModelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFarmBeatsModelResult> {
    return pulumi.output(args).apply((a: any) => getFarmBeatsModel(a, opts))
}

export interface GetFarmBeatsModelOutputArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
