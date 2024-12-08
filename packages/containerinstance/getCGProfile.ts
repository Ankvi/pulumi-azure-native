import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of the specified container group profile.
 * Azure REST API version: 2024-11-01-preview.
 */
export function getCGProfile(args: GetCGProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetCGProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerinstance:getCGProfile", {
        "containerGroupProfileName": args.containerGroupProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCGProfileArgs {
    /**
     * ContainerGroupProfile name.
     */
    containerGroupProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * container group profile object
 */
export interface GetCGProfileResult {
    /**
     * The properties for confidential container group
     */
    readonly confidentialComputeProperties?: types.outputs.ConfidentialComputePropertiesResponse;
    /**
     * The containers within the container group.
     */
    readonly containers?: types.outputs.ContainerResponse[];
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
    readonly osType?: string;
    /**
     * The priority of the container group.
     */
    readonly priority?: string;
    /**
     * Registered revisions are calculated at request time based off the records in the table logs.
     */
    readonly registeredRevisions?: number[];
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy?: string;
    /**
     * Container group profile current revision number
     */
    readonly revision?: number;
    /**
     * The container security properties.
     */
    readonly securityContext?: types.outputs.SecurityContextDefinitionResponse;
    /**
     * Shutdown grace period for containers in a container group.
     */
    readonly shutdownGracePeriod?: string;
    /**
     * The SKU for a container group.
     */
    readonly sku?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Post completion time to live for containers of a CG
     */
    readonly timeToLive?: string;
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * Gets or sets Krypton use property.
     */
    readonly useKrypton?: boolean;
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
 * Get the properties of the specified container group profile.
 * Azure REST API version: 2024-11-01-preview.
 */
export function getCGProfileOutput(args: GetCGProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCGProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerinstance:getCGProfile", {
        "containerGroupProfileName": args.containerGroupProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCGProfileOutputArgs {
    /**
     * ContainerGroupProfile name.
     */
    containerGroupProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}