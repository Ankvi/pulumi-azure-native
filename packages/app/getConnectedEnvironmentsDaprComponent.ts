import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr Component.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getConnectedEnvironmentsDaprComponent(args: GetConnectedEnvironmentsDaprComponentArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedEnvironmentsDaprComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getConnectedEnvironmentsDaprComponent", {
        "componentName": args.componentName,
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentsDaprComponentArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: string;
    /**
     * Name of the connected environment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr Component.
 */
export interface GetConnectedEnvironmentsDaprComponentResult {
    /**
     * Component type
     */
    readonly componentType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Boolean describing if the component errors are ignores
     */
    readonly ignoreErrors?: boolean;
    /**
     * Initialization timeout
     */
    readonly initTimeout?: string;
    /**
     * Component metadata
     */
    readonly metadata?: types.outputs.DaprMetadataResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Names of container apps that can use this Dapr component
     */
    readonly scopes?: string[];
    /**
     * Name of a Dapr component to retrieve component secrets from
     */
    readonly secretStoreComponent?: string;
    /**
     * Collection of secrets used by a Dapr component
     */
    readonly secrets?: types.outputs.SecretResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Component version
     */
    readonly version?: string;
}
/**
 * Dapr Component.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getConnectedEnvironmentsDaprComponentOutput(args: GetConnectedEnvironmentsDaprComponentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectedEnvironmentsDaprComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getConnectedEnvironmentsDaprComponent", {
        "componentName": args.componentName,
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentsDaprComponentOutputArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of the connected environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}