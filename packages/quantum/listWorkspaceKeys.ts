import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the keys to use with the Quantum APIs. A key is used to authenticate and authorize access to the Quantum REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
 *
 * Uses Azure REST API version 2023-11-13-preview.
 */
export function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:quantum:listWorkspaceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the quantum workspace resource.
     */
    workspaceName: string;
}

/**
 * Result of list Api keys and connection strings.
 */
export interface ListWorkspaceKeysResult {
    /**
     * Indicator of enablement of the Quantum workspace Api keys.
     */
    readonly apiKeyEnabled?: boolean;
    /**
     * The connection string of the primary api key.
     */
    readonly primaryConnectionString: string;
    /**
     * The quantum workspace primary api key.
     */
    readonly primaryKey?: types.outputs.ApiKeyResponse;
    /**
     * The connection string of the secondary api key.
     */
    readonly secondaryConnectionString: string;
    /**
     * The quantum workspace secondary api key.
     */
    readonly secondaryKey?: types.outputs.ApiKeyResponse;
}
/**
 * Get the keys to use with the Quantum APIs. A key is used to authenticate and authorize access to the Quantum REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
 *
 * Uses Azure REST API version 2023-11-13-preview.
 */
export function listWorkspaceKeysOutput(args: ListWorkspaceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkspaceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:quantum:listWorkspaceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the quantum workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}