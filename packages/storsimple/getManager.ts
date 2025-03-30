import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties of the specified manager name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManager(args: GetManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getManager", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The StorSimple Manager.
 */
export interface GetManagerResult {
    /**
     * Represents the type of StorSimple Manager.
     */
    readonly cisIntrinsicSettings?: types.outputs.ManagerIntrinsicSettingsResponse;
    /**
     * The etag of the manager.
     */
    readonly etag?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The geo location of the resource.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    readonly provisioningState?: string;
    /**
     * Specifies the Sku.
     */
    readonly sku?: types.outputs.ManagerSkuResponse;
    /**
     * The tags attached to the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Returns the properties of the specified manager name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManagerOutput(args: GetManagerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getManager", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}