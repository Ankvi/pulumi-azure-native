import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Move Resource.
 */
export function getMoveResource(args: GetMoveResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetMoveResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20220801:getMoveResource", {
        "moveCollectionName": args.moveCollectionName,
        "moveResourceName": args.moveResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMoveResourceArgs {
    /**
     * The Move Collection Name.
     */
    moveCollectionName: string;
    /**
     * The Move Resource Name.
     */
    moveResourceName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * Defines the move resource.
 */
export interface GetMoveResourceResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the move resource properties.
     */
    readonly properties: types.outputs.MoveResourcePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the Move Resource.
 */
export function getMoveResourceOutput(args: GetMoveResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMoveResourceResult> {
    return pulumi.output(args).apply((a: any) => getMoveResource(a, opts))
}

export interface GetMoveResourceOutputArgs {
    /**
     * The Move Collection Name.
     */
    moveCollectionName: pulumi.Input<string>;
    /**
     * The Move Resource Name.
     */
    moveResourceName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}
