import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BuilderResource
 * Azure REST API version: 2023-08-01-preview.
 */
export function getBuilder(args: GetBuilderArgs, opts?: pulumi.InvokeOptions): Promise<GetBuilderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getBuilder", {
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBuilderArgs {
    /**
     * The name of the builder.
     */
    builderName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about the SourceToCloud builder resource.
 */
export interface GetBuilderResult {
    /**
     * List of mappings of container registries and the managed identity used to connect to it.
     */
    readonly containerRegistries?: types.outputs.ContainerRegistryResponse[];
    /**
     * Resource ID of the container apps environment that the builder is associated with.
     */
    readonly environmentId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of a builder resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a BuilderResource
 * Azure REST API version: 2023-08-01-preview.
 */
export function getBuilderOutput(args: GetBuilderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuilderResult> {
    return pulumi.output(args).apply((a: any) => getBuilder(a, opts))
}

export interface GetBuilderOutputArgs {
    /**
     * The name of the builder.
     */
    builderName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}