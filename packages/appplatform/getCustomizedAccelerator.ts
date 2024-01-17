import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the customized accelerator.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function getCustomizedAccelerator(args: GetCustomizedAcceleratorArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomizedAcceleratorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getCustomizedAccelerator", {
        "applicationAcceleratorName": args.applicationAcceleratorName,
        "customizedAcceleratorName": args.customizedAcceleratorName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetCustomizedAcceleratorArgs {
    /**
     * The name of the application accelerator.
     */
    applicationAcceleratorName: string;
    /**
     * The name of the customized accelerator.
     */
    customizedAcceleratorName: string;
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
 * Customized accelerator resource
 */
export interface GetCustomizedAcceleratorResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Customized accelerator properties payload
     */
    readonly properties: types.outputs.CustomizedAcceleratorPropertiesResponse;
    /**
     * Sku of the customized accelerator resource
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
 * Get the customized accelerator.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function getCustomizedAcceleratorOutput(args: GetCustomizedAcceleratorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomizedAcceleratorResult> {
    return pulumi.output(args).apply((a: any) => getCustomizedAccelerator(a, opts))
}

export interface GetCustomizedAcceleratorOutputArgs {
    /**
     * The name of the application accelerator.
     */
    applicationAcceleratorName: pulumi.Input<string>;
    /**
     * The name of the customized accelerator.
     */
    customizedAcceleratorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
