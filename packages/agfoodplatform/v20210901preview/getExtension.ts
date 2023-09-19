import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get installed extension details by extension id.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform/v20210901preview:getExtension", {
        "extensionId": args.extensionId,
        "farmBeatsResourceName": args.farmBeatsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * Id of extension resource.
     */
    extensionId: string;
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: string;
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
     * Additional api properties.
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
 */
export function getExtensionOutput(args: GetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionResult> {
    return pulumi.output(args).apply((a: any) => getExtension(a, opts))
}

export interface GetExtensionOutputArgs {
    /**
     * Id of extension resource.
     */
    extensionId: pulumi.Input<string>;
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
