import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 */
export function getContainerGroup(args: GetContainerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerinstance/v20230201preview:getContainerGroup", {
        "containerGroupName": args.containerGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerGroupArgs {
    /**
     * The name of the container group.
     */
    containerGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A container group.
 */
export interface GetContainerGroupResult {
    /**
     * The containers within the container group.
     */
    readonly containers: types.outputs.containerinstance.v20230201preview.ContainerResponse[];
    /**
     * The diagnostic information for a container group.
     */
    readonly diagnostics?: types.outputs.containerinstance.v20230201preview.ContainerGroupDiagnosticsResponse;
    /**
     * The DNS config information for a container group.
     */
    readonly dnsConfig?: types.outputs.containerinstance.v20230201preview.DnsConfigurationResponse;
    /**
     * The encryption properties for a container group.
     */
    readonly encryptionProperties?: types.outputs.containerinstance.v20230201preview.EncryptionPropertiesResponse;
    /**
     * extensions used by virtual kubelet
     */
    readonly extensions?: types.outputs.containerinstance.v20230201preview.DeploymentExtensionSpecResponse[];
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The identity of the container group, if configured.
     */
    readonly identity?: types.outputs.containerinstance.v20230201preview.ContainerGroupIdentityResponse;
    /**
     * The image registry credentials by which the container group is created from.
     */
    readonly imageRegistryCredentials?: types.outputs.containerinstance.v20230201preview.ImageRegistryCredentialResponse[];
    /**
     * The init containers for a container group.
     */
    readonly initContainers?: types.outputs.containerinstance.v20230201preview.InitContainerDefinitionResponse[];
    /**
     * The instance view of the container group. Only valid in response.
     */
    readonly instanceView: types.outputs.containerinstance.v20230201preview.ContainerGroupPropertiesResponseInstanceView;
    /**
     * The IP address type of the container group.
     */
    readonly ipAddress?: types.outputs.containerinstance.v20230201preview.IpAddressResponse;
    /**
     * Flag indicating whether a custom value was provided for the provisioningTimeoutInSeconds property
     */
    readonly isCustomProvisioningTimeout: string;
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
     * The provisioning state of the container group. This only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Time in seconds in which a container group deployment would timeout and fail. The allowed maximum value is 1800 seconds. If value is not provided, property is given maximum value by default.
     */
    readonly provisioningTimeoutInSeconds?: number;
    /**
     * Restart policy for all containers within the container group. 
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy?: string;
    /**
     * The SKU for a container group.
     */
    readonly sku?: string;
    /**
     * The subnet resource IDs for a container group.
     */
    readonly subnetIds?: types.outputs.containerinstance.v20230201preview.ContainerGroupSubnetIdResponse[];
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
    readonly volumes?: types.outputs.containerinstance.v20230201preview.VolumeResponse[];
    /**
     * The zones for the container group.
     */
    readonly zones?: string[];
}
/**
 * Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
 */
export function getContainerGroupOutput(args: GetContainerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerGroupResult> {
    return pulumi.output(args).apply((a: any) => getContainerGroup(a, opts))
}

export interface GetContainerGroupOutputArgs {
    /**
     * The name of the container group.
     */
    containerGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
