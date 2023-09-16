import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified container registry.
 */
export function getRegistry(args: GetRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230101preview:getRegistry", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a container registry.
 */
export interface GetRegistryResult {
    /**
     * The value that indicates whether the admin user is enabled.
     */
    readonly adminUserEnabled?: boolean;
    /**
     * Enables registry-wide pull from unauthenticated clients.
     */
    readonly anonymousPullEnabled?: boolean;
    /**
     * The creation date of the container registry in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * Enable a single data endpoint per region for serving data.
     */
    readonly dataEndpointEnabled?: boolean;
    /**
     * List of host names that will serve data when dataEndpointEnabled is true.
     */
    readonly dataEndpointHostNames: string[];
    /**
     * The encryption settings of container registry.
     */
    readonly encryption?: types.outputs.containerregistry.v20230101preview.EncryptionPropertyResponse;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The identity of the container registry.
     */
    readonly identity?: types.outputs.containerregistry.v20230101preview.IdentityPropertiesResponse;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The URL that can be used to log into the container registry.
     */
    readonly loginServer: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Whether to allow trusted Azure services to access a network restricted registry.
     */
    readonly networkRuleBypassOptions?: string;
    /**
     * The network rule set for a container registry.
     */
    readonly networkRuleSet?: types.outputs.containerregistry.v20230101preview.NetworkRuleSetResponse;
    /**
     * The policies for a container registry.
     */
    readonly policies?: types.outputs.containerregistry.v20230101preview.PoliciesResponse;
    /**
     * List of private endpoint connections for a container registry.
     */
    readonly privateEndpointConnections: types.outputs.containerregistry.v20230101preview.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the container registry at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public network access is allowed for the container registry.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The SKU of the container registry.
     */
    readonly sku: types.outputs.containerregistry.v20230101preview.SkuResponse;
    /**
     * The status of the container registry at the time the operation was called.
     */
    readonly status: types.outputs.containerregistry.v20230101preview.StatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.v20230101preview.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Whether or not zone redundancy is enabled for this container registry
     */
    readonly zoneRedundancy?: string;
}
/**
 * Gets the properties of the specified container registry.
 */
export function getRegistryOutput(args: GetRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryResult> {
    return pulumi.output(args).apply((a: any) => getRegistry(a, opts))
}

export interface GetRegistryOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
