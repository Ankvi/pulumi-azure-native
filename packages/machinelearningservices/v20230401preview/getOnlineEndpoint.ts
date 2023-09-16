import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export function getOnlineEndpoint(args: GetOnlineEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401preview:getOnlineEndpoint", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineEndpointArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetOnlineEndpointResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.machinelearningservices.v20230401preview.ManagedServiceIdentityResponse;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly onlineEndpointProperties: types.outputs.machinelearningservices.v20230401preview.OnlineEndpointResponse;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    readonly sku?: types.outputs.machinelearningservices.v20230401preview.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.machinelearningservices.v20230401preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
export function getOnlineEndpointOutput(args: GetOnlineEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnlineEndpointResult> {
    return pulumi.output(args).apply((a: any) => getOnlineEndpoint(a, opts))
}

export interface GetOnlineEndpointOutputArgs {
    /**
     * Online Endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
