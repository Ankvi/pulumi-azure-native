import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export function getResourceGuard(args: GetResourceGuardArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGuardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection/v20221101preview:getResourceGuard", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardsName": args.resourceGuardsName,
    }, opts);
}

export interface GetResourceGuardArgs {
    /**
     * The name of the resource group where the backup vault is present.
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
     * Input Managed Identity Details
     */
    readonly identity?: types.outputs.dataprotection.v20221101preview.DppIdentityDetailsResponse;
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
    readonly properties: types.outputs.dataprotection.v20221101preview.ResourceGuardResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.dataprotection.v20221101preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
export function getResourceGuardOutput(args: GetResourceGuardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceGuardResult> {
    return pulumi.output(args).apply((a: any) => getResourceGuard(a, opts))
}

export interface GetResourceGuardOutputArgs {
    /**
     * The name of the resource group where the backup vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of ResourceGuard
     */
    resourceGuardsName: pulumi.Input<string>;
}
