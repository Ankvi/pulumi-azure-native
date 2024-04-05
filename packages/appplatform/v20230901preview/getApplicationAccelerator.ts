import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the application accelerator.
 */
export function getApplicationAccelerator(args: GetApplicationAcceleratorArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationAcceleratorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getApplicationAccelerator", {
        "applicationAcceleratorName": args.applicationAcceleratorName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApplicationAcceleratorArgs {
    /**
     * The name of the application accelerator.
     */
    applicationAcceleratorName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Application accelerator resource
 */
export interface GetApplicationAcceleratorResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Application accelerator properties payload
     */
    readonly properties: types.outputs.ApplicationAcceleratorPropertiesResponse;
    /**
     * Sku of the application accelerator resource
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the application accelerator.
 */
export function getApplicationAcceleratorOutput(args: GetApplicationAcceleratorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationAcceleratorResult> {
    return pulumi.output(args).apply((a: any) => getApplicationAccelerator(a, opts))
}

export interface GetApplicationAcceleratorOutputArgs {
    /**
     * The name of the application accelerator.
     */
    applicationAcceleratorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}