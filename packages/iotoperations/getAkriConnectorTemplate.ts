import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AkriConnectorTemplateResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iotoperations [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAkriConnectorTemplate(args: GetAkriConnectorTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetAkriConnectorTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getAkriConnectorTemplate", {
        "akriConnectorTemplateName": args.akriConnectorTemplateName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAkriConnectorTemplateArgs {
    /**
     * Name of AkriConnectorTemplate resource.
     */
    akriConnectorTemplateName: string;
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AkriConnectorTemplate resource.
 */
export interface GetAkriConnectorTemplateResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Edge location of the resource.
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
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.AkriConnectorTemplatePropertiesResponse;
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
 * Get a AkriConnectorTemplateResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 *
 * Other available API versions: 2025-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iotoperations [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAkriConnectorTemplateOutput(args: GetAkriConnectorTemplateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAkriConnectorTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getAkriConnectorTemplate", {
        "akriConnectorTemplateName": args.akriConnectorTemplateName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAkriConnectorTemplateOutputArgs {
    /**
     * Name of AkriConnectorTemplate resource.
     */
    akriConnectorTemplateName: pulumi.Input<string>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}