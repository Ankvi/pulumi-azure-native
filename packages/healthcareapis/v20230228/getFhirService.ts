import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified FHIR Service.
 */
export function getFhirService(args: GetFhirServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetFhirServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis/v20230228:getFhirService", {
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
     * Fhir Service access policies.
     */
    readonly accessPolicies?: types.outputs.healthcareapis.v20230228.FhirServiceAccessPolicyEntryResponse[];
    /**
     * Fhir Service Azure container registry configuration.
     */
    readonly acrConfiguration?: types.outputs.healthcareapis.v20230228.FhirServiceAcrConfigurationResponse;
    /**
     * Fhir Service authentication configuration.
     */
    readonly authenticationConfiguration?: types.outputs.healthcareapis.v20230228.FhirServiceAuthenticationConfigurationResponse;
    /**
     * Fhir Service Cors configuration.
     */
    readonly corsConfiguration?: types.outputs.healthcareapis.v20230228.FhirServiceCorsConfigurationResponse;
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
    readonly exportConfiguration?: types.outputs.healthcareapis.v20230228.FhirServiceExportConfigurationResponse;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.healthcareapis.v20230228.ServiceManagedIdentityResponseIdentity;
    /**
     * Implementation Guides configuration.
     */
    readonly implementationGuidesConfiguration?: types.outputs.healthcareapis.v20230228.ImplementationGuidesConfigurationResponse;
    /**
     * Fhir Service import configuration.
     */
    readonly importConfiguration?: types.outputs.healthcareapis.v20230228.FhirServiceImportConfigurationResponse;
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
    readonly privateEndpointConnections: types.outputs.healthcareapis.v20230228.PrivateEndpointConnectionResponse[];
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
    readonly resourceVersionPolicyConfiguration?: types.outputs.healthcareapis.v20230228.ResourceVersionPolicyConfigurationResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.healthcareapis.v20230228.SystemDataResponse;
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
 */
export function getFhirServiceOutput(args: GetFhirServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFhirServiceResult> {
    return pulumi.output(args).apply((a: any) => getFhirService(a, opts))
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
