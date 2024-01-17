import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the move collection.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2023-08-01.
 */
export function getMoveCollection(args: GetMoveCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetMoveCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMoveCollection", {
        "moveCollectionName": args.moveCollectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMoveCollectionArgs {
    /**
     * The Move Collection Name.
     */
    moveCollectionName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * Define the move collection.
 */
export interface GetMoveCollectionResult {
    /**
     * The etag of the resource.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * Defines the MSI properties of the Move Collection.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the move collection properties.
     */
    readonly properties: types.outputs.MoveCollectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the move collection.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2023-08-01.
 */
export function getMoveCollectionOutput(args: GetMoveCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMoveCollectionResult> {
    return pulumi.output(args).apply((a: any) => getMoveCollection(a, opts))
}

export interface GetMoveCollectionOutputArgs {
    /**
     * The Move Collection Name.
     */
    moveCollectionName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}