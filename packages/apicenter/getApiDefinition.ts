import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the API definition.
 *
 * Uses Azure REST API version 2024-03-15-preview.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApiDefinition(args: GetApiDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetApiDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter:getApiDefinition", {
        "apiName": args.apiName,
        "definitionName": args.definitionName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "versionName": args.versionName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiDefinitionArgs {
    /**
     * The name of the API.
     */
    apiName: string;
    /**
     * The name of the API definition.
     */
    definitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
    /**
     * The name of the API version.
     */
    versionName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * API definition entity.
 */
export interface GetApiDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * API definition description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * API specification details.
     */
    readonly specification: types.outputs.ApiDefinitionPropertiesSpecificationResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * API definition title.
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the API definition.
 *
 * Uses Azure REST API version 2024-03-15-preview.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApiDefinitionOutput(args: GetApiDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApiDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apicenter:getApiDefinition", {
        "apiName": args.apiName,
        "definitionName": args.definitionName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "versionName": args.versionName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetApiDefinitionOutputArgs {
    /**
     * The name of the API.
     */
    apiName: pulumi.Input<string>;
    /**
     * The name of the API definition.
     */
    definitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the API version.
     */
    versionName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}