import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified scope map.
 */
export function getScopeMap(args: GetScopeMapArgs, opts?: pulumi.InvokeOptions): Promise<GetScopeMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230601preview:getScopeMap", {
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
    readonly systemData: types.outputs.containerregistry.v20230601preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified scope map.
 */
export function getScopeMapOutput(args: GetScopeMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScopeMapResult> {
    return pulumi.output(args).apply((a: any) => getScopeMap(a, opts))
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
