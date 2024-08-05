import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DeidService
 * Azure REST API version: 2024-02-28-preview.
 */
export function getDeidService(args: GetDeidServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeidServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthdataaiservices:getDeidService", {
        "deidServiceName": args.deidServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeidServiceArgs {
    /**
     * The name of the deid service
     */
    deidServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A HealthDataAIServicesProviderHub resource
 */
export interface GetDeidServiceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DeidServicePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a DeidService
 * Azure REST API version: 2024-02-28-preview.
 */
export function getDeidServiceOutput(args: GetDeidServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeidServiceResult> {
    return pulumi.output(args).apply((a: any) => getDeidService(a, opts))
}

export interface GetDeidServiceOutputArgs {
    /**
     * The name of the deid service
     */
    deidServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}