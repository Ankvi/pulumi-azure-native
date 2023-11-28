import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-01-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01, 2023-08-01-preview.
 */
export function getResourceGuard(args: GetResourceGuardArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGuardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection:getResourceGuard", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardsName": args.resourceGuardsName,
    }, opts);
}

export interface GetResourceGuardArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of ResourceGuard
     */
    resourceGuardsName: string;
}

export interface GetResourceGuardResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ResourceGuardResource properties
     */
    readonly properties: types.outputs.ResourceGuardResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Azure REST API version: 2023-01-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01, 2023-08-01-preview.
 */
export function getResourceGuardOutput(args: GetResourceGuardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceGuardResult> {
    return pulumi.output(args).apply((a: any) => getResourceGuard(a, opts))
}

export interface GetResourceGuardOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of ResourceGuard
     */
    resourceGuardsName: pulumi.Input<string>;
}
