import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified DICOM Service.
 *
 * Uses Azure REST API version 2024-03-31.
 *
 * Other available API versions: 2022-10-01-preview, 2022-12-01, 2023-02-28, 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthcareapis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDicomService(args: GetDicomServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDicomServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getDicomService", {
        "dicomServiceName": args.dicomServiceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDicomServiceArgs {
    /**
     * The name of DICOM Service resource.
     */
    dicomServiceName: string;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of workspace resource.
     */
    workspaceName: string;
}

/**
 * The description of Dicom Service
 */
export interface GetDicomServiceResult {
    /**
     * Dicom Service authentication configuration.
     */
    readonly authenticationConfiguration?: types.outputs.DicomServiceAuthenticationConfigurationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Dicom Service Cors configuration.
     */
    readonly corsConfiguration?: types.outputs.CorsConfigurationResponse;
    /**
     * If data partitions is enabled or not.
     */
    readonly enableDataPartitions?: boolean;
    /**
     * The encryption settings of the DICOM service
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * DICOM Service event support status.
     */
    readonly eventState: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServiceManagedIdentityResponseIdentity;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    readonly publicNetworkAccess: string;
    /**
     * The url of the Dicom Services.
     */
    readonly serviceUrl: string;
    /**
     * The configuration of external storage account
     */
    readonly storageConfiguration?: types.outputs.StorageConfigurationResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified DICOM Service.
 *
 * Uses Azure REST API version 2024-03-31.
 *
 * Other available API versions: 2022-10-01-preview, 2022-12-01, 2023-02-28, 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthcareapis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDicomServiceOutput(args: GetDicomServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDicomServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthcareapis:getDicomService", {
        "dicomServiceName": args.dicomServiceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDicomServiceOutputArgs {
    /**
     * The name of DICOM Service resource.
     */
    dicomServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}