import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Global parameter
 */
export function getGlobalParameter(args: GetGlobalParameterArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalParameterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getGlobalParameter", {
        "factoryName": args.factoryName,
        "globalParameterName": args.globalParameterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGlobalParameterArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The global parameter name.
     */
    globalParameterName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Global parameters resource type.
 */
export interface GetGlobalParameterResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Properties of the global parameter.
     */
    readonly properties: {[key: string]: types.outputs.GlobalParameterSpecificationResponse};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets a Global parameter
 */
export function getGlobalParameterOutput(args: GetGlobalParameterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalParameterResult> {
    return pulumi.output(args).apply((a: any) => getGlobalParameter(a, opts))
}

export interface GetGlobalParameterOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The global parameter name.
     */
    globalParameterName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
