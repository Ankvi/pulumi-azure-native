import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a SecretSync instance.
 *
 * Uses Azure REST API version 2024-08-21-preview.
 */
export function getSecretSync(args: GetSecretSyncArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretSyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:secretsynccontroller:getSecretSync", {
        "resourceGroupName": args.resourceGroupName,
        "secretSyncName": args.secretSyncName,
    }, opts);
}

export interface GetSecretSyncArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SecretSync
     */
    secretSyncName: string;
}

/**
 * The SecretSync resource.
 */
export interface GetSecretSyncResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse;
    /**
     * ForceSynchronization can be used to force the secret synchronization. The secret synchronization is triggered by changing the value in this field. This field is not used to resolve synchronization conflicts.
     */
    readonly forceSynchronization?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Type specifies the type of the Kubernetes secret object, e.g. "Opaque" or"kubernetes.io/tls". The controller must have permission to create secrets of the specified type.
     */
    readonly kubernetesSecretType: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * An array of SecretObjectData that maps secret data from the external secret provider to the Kubernetes secret. Each entry specifies the source secret in the external provider and the corresponding key in the Kubernetes secret.
     */
    readonly objectSecretMapping: types.outputs.KubernetesSecretObjectMappingResponse[];
    /**
     * Provisioning state of the SecretSync instance.
     */
    readonly provisioningState: string;
    /**
     * SecretProviderClassName specifies the name of the SecretProviderClass resource, which contains the information needed to access the cloud provider secret store.
     */
    readonly secretProviderClassName: string;
    /**
     * ServiceAccountName specifies the name of the service account used to access the cloud provider secret store. The audience field in the service account token must be passed as parameter in the controller configuration. The audience is used when requesting a token from the API server for the service account; the supported audiences are defined by each provider.
     */
    readonly serviceAccountName: string;
    /**
     * SecretSyncStatus defines the observed state of the secret synchronization process.
     */
    readonly status: types.outputs.SecretSyncStatusResponse;
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
 * Gets the properties of a SecretSync instance.
 *
 * Uses Azure REST API version 2024-08-21-preview.
 */
export function getSecretSyncOutput(args: GetSecretSyncOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretSyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:secretsynccontroller:getSecretSync", {
        "resourceGroupName": args.resourceGroupName,
        "secretSyncName": args.secretSyncName,
    }, opts);
}

export interface GetSecretSyncOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SecretSync
     */
    secretSyncName: pulumi.Input<string>;
}