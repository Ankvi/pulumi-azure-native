import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the application accelerator.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationAccelerator(args: GetApplicationAcceleratorArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationAcceleratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getApplicationAccelerator", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationAcceleratorOutput(args: GetApplicationAcceleratorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationAcceleratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appplatform:getApplicationAccelerator", {
        "applicationAcceleratorName": args.applicationAcceleratorName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
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