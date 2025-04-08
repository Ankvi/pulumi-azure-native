import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Move Resource.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-10-01-preview, 2021-01-01, 2021-08-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMoveResource(args: GetMoveResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetMoveResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMoveResource", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2019-10-01-preview, 2021-01-01, 2021-08-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMoveResourceOutput(args: GetMoveResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMoveResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getMoveResource", {
        "moveCollectionName": args.moveCollectionName,
        "moveResourceName": args.moveResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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