import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the supported VM skus from the underlying custom location
 */
export function getVMSkus(args: GetVMSkusArgs, opts?: pulumi.InvokeOptions): Promise<GetVMSkusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20231115preview:getVMSkus", {
        "customLocationResourceUri": args.customLocationResourceUri,
    }, opts);
}

export interface GetVMSkusArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the custom location resource.
     */
    customLocationResourceUri: string;
}

/**
 * The list of supported VM SKUs.
 */
export interface GetVMSkusResult {
    /**
     * Extended Location definition
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
    readonly properties: types.outputs.VmSkuProfileResponseProperties;
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
 * Gets the supported VM skus from the underlying custom location
 */
export function getVMSkusOutput(args: GetVMSkusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVMSkusResult> {
    return pulumi.output(args).apply((a: any) => getVMSkus(a, opts))
}

export interface GetVMSkusOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the custom location resource.
     */
    customLocationResourceUri: pulumi.Input<string>;
}
