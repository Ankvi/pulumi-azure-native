import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified scope map.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-12-01-preview, 2022-02-01-preview, 2022-12-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScopeMap(args: GetScopeMapArgs, opts?: pulumi.InvokeOptions): Promise<GetScopeMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getScopeMap", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "scopeMapName": args.scopeMapName,
    }, opts);
}

export interface GetScopeMapArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the scope map.
     */
    scopeMapName: string;
}

/**
 * An object that represents a scope map for a container registry.
 */
export interface GetScopeMapResult {
    /**
     * The list of scoped permissions for registry artifacts.
     * E.g. repositories/repository-name/content/read,
     * repositories/repository-name/metadata/write
     */
    readonly actions: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date of scope map.
     */
    readonly creationDate: string;
    /**
     * The user friendly description of the scope map.
     */
    readonly description?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Gets the properties of the specified scope map.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-12-01-preview, 2022-02-01-preview, 2022-12-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScopeMapOutput(args: GetScopeMapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScopeMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getScopeMap", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "scopeMapName": args.scopeMapName,
    }, opts);
}

export interface GetScopeMapOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the scope map.
     */
    scopeMapName: pulumi.Input<string>;
}