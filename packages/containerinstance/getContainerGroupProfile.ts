import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified container group profile in the specified subscription and resource group. The operation returns the properties of container group profile including containers, image registry credentials, restart policy, IP address type, OS type, volumes, current revision number, etc.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 */
export function getContainerGroupProfile(args: GetContainerGroupProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerGroupProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerinstance:getContainerGroupProfile", {
        "containerGroupProfileName": args.containerGroupProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerGroupProfileArgs {
    /**
     * The name of the container group profile.
     */
    containerGroupProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A container group profile.
 */
export interface GetContainerGroupProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The properties for confidential container group
     */
    readonly confidentialComputeProperties?: types.outputs.ConfidentialComputePropertiesResponse;
    /**
     * The containers within the container group.
     */
    readonly containers: types.outputs.ContainerResponse[];
    /**
     * The diagnostic information for a container group.
     */
    readonly diagnostics?: types.outputs.ContainerGroupDiagnosticsResponse;
    /**
     * The encryption properties for a container group.
     */
    readonly encryptionProperties?: types.outputs.EncryptionPropertiesResponse;
    /**
     * extensions used by virtual kubelet
     */
    readonly extensions?: types.outputs.DeploymentExtensionSpecResponse[];
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The image registry credentials by which the container group is created from.
     */
    readonly imageRegistryCredentials?: types.outputs.ImageRegistryCredentialResponse[];
    /**
     * The init containers for a container group.
     */
    readonly initContainers?: types.outputs.InitContainerDefinitionResponse[];
    /**
     * The IP address type of the container group.
     */
    readonly ipAddress?: types.outputs.IpAddressResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The operating system type required by the containers in the container group.
     */
    readonly osType: string;
    /**
     * The priority of the container group.
     */
    readonly priority?: string;
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy?: string;
    /**
     * The container group profile current revision number. This only appears in the response.
     */
    readonly revision: number;
    /**
     * The SKU for a container group.
     */
    readonly sku?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    readonly volumes?: types.outputs.VolumeResponse[];
    /**
     * The zones for the container group.
     */
    readonly zones?: string[];
}
/**
 * Gets the properties of the specified container group profile in the specified subscription and resource group. The operation returns the properties of container group profile including containers, image registry credentials, restart policy, IP address type, OS type, volumes, current revision number, etc.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 */
export function getContainerGroupProfileOutput(args: GetContainerGroupProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContainerGroupProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerinstance:getContainerGroupProfile", {
        "containerGroupProfileName": args.containerGroupProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerGroupProfileOutputArgs {
    /**
     * The name of the container group profile.
     */
    containerGroupProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}