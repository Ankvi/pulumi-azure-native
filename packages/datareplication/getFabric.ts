import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the fabric.
 *
 * Uses Azure REST API version 2021-02-16-preview.
 *
 * Other available API versions: 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datareplication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFabric(args: GetFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication:getFabric", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.FabricModelPropertiesResponse;
    readonly systemData: types.outputs.FabricModelResponseSystemData;
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
 *
 * Uses Azure REST API version 2021-02-16-preview.
 *
 * Other available API versions: 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datareplication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFabricOutput(args: GetFabricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datareplication:getFabric", {
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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