import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified FHIR Service.
 *
 * Uses Azure REST API version 2024-03-31.
 *
 * Other available API versions: 2022-10-01-preview, 2022-12-01, 2023-02-28, 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthcareapis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFhirService(args: GetFhirServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetFhirServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getFhirService", {
        "fhirServiceName": args.fhirServiceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFhirServiceArgs {
    /**
     * The name of FHIR Service resource.
     */
    fhirServiceName: string;
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
 * The description of Fhir Service
 */
export interface GetFhirServiceResult {
    /**
     * Fhir Service Azure container registry configuration.
     */
    readonly acrConfiguration?: types.outputs.FhirServiceAcrConfigurationResponse;
    /**
     * Fhir Service authentication configuration.
     */
    readonly authenticationConfiguration?: types.outputs.FhirServiceAuthenticationConfigurationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fhir Service Cors configuration.
     */
    readonly corsConfiguration?: types.outputs.FhirServiceCorsConfigurationResponse;
    /**
     * The encryption settings of the FHIR service
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * Fhir Service event support status.
     */
    readonly eventState: string;
    /**
     * Fhir Service export configuration.
     */
    readonly exportConfiguration?: types.outputs.FhirServiceExportConfigurationResponse;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServiceManagedIdentityResponseIdentity;
    /**
     * Implementation Guides configuration.
     */
    readonly implementationGuidesConfiguration?: types.outputs.ImplementationGuidesConfigurationResponse;
    /**
     * Fhir Service import configuration.
     */
    readonly importConfiguration?: types.outputs.FhirServiceImportConfigurationResponse;
    /**
     * The kind of the service.
     */
    readonly kind?: string;
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
     * Determines tracking of history for resources.
     */
    readonly resourceVersionPolicyConfiguration?: types.outputs.ResourceVersionPolicyConfigurationResponse;
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
 * Gets the properties of the specified FHIR Service.
 *
 * Uses Azure REST API version 2024-03-31.
 *
 * Other available API versions: 2022-10-01-preview, 2022-12-01, 2023-02-28, 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthcareapis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFhirServiceOutput(args: GetFhirServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFhirServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthcareapis:getFhirService", {
        "fhirServiceName": args.fhirServiceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetFhirServiceOutputArgs {
    /**
     * The name of FHIR Service resource.
     */
    fhirServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}