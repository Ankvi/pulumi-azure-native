import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the fabric agent.
 * Azure REST API version: 2021-02-16-preview.
 */
export function getDra(args: GetDraArgs, opts?: pulumi.InvokeOptions): Promise<GetDraResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication:getDra", {
        "fabricAgentName": args.fabricAgentName,
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDraArgs {
    /**
     * The fabric agent (Dra) name.
     */
    fabricAgentName: string;
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
 * Dra model.
 */
export interface GetDraResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Dra model properties.
     */
    readonly properties: types.outputs.DraModelPropertiesResponse;
    readonly systemData: types.outputs.DraModelResponseSystemData;
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the fabric agent.
 * Azure REST API version: 2021-02-16-preview.
 */
export function getDraOutput(args: GetDraOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDraResult> {
    return pulumi.output(args).apply((a: any) => getDra(a, opts))
}

export interface GetDraOutputArgs {
    /**
     * The fabric agent (Dra) name.
     */
    fabricAgentName: pulumi.Input<string>;
    /**
     * The fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
