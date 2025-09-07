import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A logic app extension resource
 *
 * Uses Azure REST API version 2025-02-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLogicApp(args: GetLogicAppArgs, opts?: pulumi.InvokeOptions): Promise<GetLogicAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getLogicApp", {
        "containerAppName": args.containerAppName,
        "logicAppName": args.logicAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLogicAppArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * Name of the Logic App, the extension resource.
     */
    logicAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A logic app extension resource
 */
export interface GetLogicAppResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
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
 * A logic app extension resource
 *
 * Uses Azure REST API version 2025-02-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLogicAppOutput(args: GetLogicAppOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLogicAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getLogicApp", {
        "containerAppName": args.containerAppName,
        "logicAppName": args.logicAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLogicAppOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * Name of the Logic App, the extension resource.
     */
    logicAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}