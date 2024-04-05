import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified DICOM Service.
 */
export function getDicomService(args: GetDicomServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDicomServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis/v20230228:getDicomService", {
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
     * Dicom Service Cors configuration.
     */
    readonly corsConfiguration?: types.outputs.CorsConfigurationResponse;
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
 */
export function getDicomServiceOutput(args: GetDicomServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDicomServiceResult> {
    return pulumi.output(args).apply((a: any) => getDicomService(a, opts))
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