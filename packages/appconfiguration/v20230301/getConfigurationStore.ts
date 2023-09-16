import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified configuration store.
 */
export function getConfigurationStore(args: GetConfigurationStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationStoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration/v20230301:getConfigurationStore", {
        "configStoreName": args.configStoreName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationStoreArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
 */
export interface GetConfigurationStoreResult {
    /**
     * The creation date of configuration store.
     */
    readonly creationDate: string;
    /**
     * Disables all authentication methods other than AAD authentication.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Property specifying whether protection against purge is enabled for this configuration store.
     */
    readonly enablePurgeProtection?: boolean;
    /**
     * The encryption settings of the configuration store.
     */
    readonly encryption?: types.outputs.appconfiguration.v20230301.EncryptionPropertiesResponse;
    /**
     * The DNS endpoint where the configuration store API will be available.
     */
    readonly endpoint: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed identity information, if configured.
     */
    readonly identity?: types.outputs.appconfiguration.v20230301.ResourceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    readonly privateEndpointConnections: types.outputs.appconfiguration.v20230301.PrivateEndpointConnectionReferenceResponse[];
    /**
     * The provisioning state of the configuration store.
     */
    readonly provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The sku of the configuration store.
     */
    readonly sku: types.outputs.appconfiguration.v20230301.SkuResponse;
    /**
     * The amount of time in days that the configuration store will be retained when it is soft deleted.
     */
    readonly softDeleteRetentionInDays?: number;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.appconfiguration.v20230301.SystemDataResponse;
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
 * Gets the properties of the specified configuration store.
 */
export function getConfigurationStoreOutput(args: GetConfigurationStoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationStoreResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationStore(a, opts))
}

export interface GetConfigurationStoreOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
