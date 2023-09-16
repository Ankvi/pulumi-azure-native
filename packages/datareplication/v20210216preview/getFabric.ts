import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the details of the fabric.
 */
export function getFabric(args: GetFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication/v20210216preview:getFabric", {
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFabricArgs {
    /**
     * The fabric name.
     */
    fabricName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Fabric model.
 */
export interface GetFabricResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the location of the fabric.
     */
    readonly location: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Fabric model properties.
     */
    readonly properties: types.outputs.datareplication.v20210216preview.FabricModelPropertiesResponse;
    readonly systemData: types.outputs.datareplication.v20210216preview.FabricModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the fabric.
 */
export function getFabricOutput(args: GetFabricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricResult> {
    return pulumi.output(args).apply((a: any) => getFabric(a, opts))
}

export interface GetFabricOutputArgs {
    /**
     * The fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
