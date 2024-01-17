import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get installed extension details by extension id.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-09-01-preview.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform:getExtension", {
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "extensionId": args.extensionId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: string;
    /**
     * Id of extension resource.
     */
    extensionId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Extension resource.
 */
export interface GetExtensionResult {
    /**
     * Additional Api Properties.
     */
    readonly additionalApiProperties: {[key: string]: types.outputs.ApiPropertiesResponse};
    /**
     * The ETag value to implement optimistic concurrency.
     */
    readonly eTag: string;
    /**
     * Extension api docs link.
     */
    readonly extensionApiDocsLink: string;
    /**
     * Extension auth link.
     */
    readonly extensionAuthLink: string;
    /**
     * Extension category. e.g. weather/sensor/satellite.
     */
    readonly extensionCategory: string;
    /**
     * Extension Id.
     */
    readonly extensionId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Installed extension version.
     */
    readonly installedExtensionVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Get installed extension details by extension id.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-09-01-preview.
 */
export function getExtensionOutput(args: GetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionResult> {
    return pulumi.output(args).apply((a: any) => getExtension(a, opts))
}

export interface GetExtensionOutputArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: pulumi.Input<string>;
    /**
     * Id of extension resource.
     */
    extensionId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}