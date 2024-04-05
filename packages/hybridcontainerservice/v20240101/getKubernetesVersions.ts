import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the supported kubernetes versions for the specified custom location
 */
export function getKubernetesVersions(args: GetKubernetesVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20240101:getKubernetesVersions", {
        "customLocationResourceUri": args.customLocationResourceUri,
    }, opts);
}

export interface GetKubernetesVersionsArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the custom location resource.
     */
    customLocationResourceUri: string;
}

/**
 * The supported kubernetes versions.
 */
export interface GetKubernetesVersionsResult {
    /**
     * Extended location pointing to the underlying infrastructure
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.KubernetesVersionProfileResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Lists the supported kubernetes versions for the specified custom location
 */
export function getKubernetesVersionsOutput(args: GetKubernetesVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesVersionsResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesVersions(a, opts))
}

export interface GetKubernetesVersionsOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the custom location resource.
     */
    customLocationResourceUri: pulumi.Input<string>;
}