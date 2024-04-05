import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the integration service environment managed Api.
 */
export function getIntegrationServiceEnvironmentManagedApi(args: GetIntegrationServiceEnvironmentManagedApiArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationServiceEnvironmentManagedApiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:getIntegrationServiceEnvironmentManagedApi", {
        "apiName": args.apiName,
        "integrationServiceEnvironmentName": args.integrationServiceEnvironmentName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetIntegrationServiceEnvironmentManagedApiArgs {
    /**
     * The api name.
     */
    apiName: string;
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName: string;
    /**
     * The resource group name.
     */
    resourceGroup: string;
}

/**
 * The integration service environment managed api.
 */
export interface GetIntegrationServiceEnvironmentManagedApiResult {
    /**
     * The API definition.
     */
    readonly apiDefinitionUrl: string;
    /**
     * The api definitions.
     */
    readonly apiDefinitions: types.outputs.ApiResourceDefinitionsResponse;
    /**
     * The backend service.
     */
    readonly backendService: types.outputs.ApiResourceBackendServiceResponse;
    /**
     * The capabilities.
     */
    readonly capabilities: string[];
    /**
     * The category.
     */
    readonly category: string;
    /**
     * The connection parameters.
     */
    readonly connectionParameters: {[key: string]: any};
    /**
     * The integration service environment managed api deployment parameters.
     */
    readonly deploymentParameters?: types.outputs.IntegrationServiceEnvironmentManagedApiDeploymentParametersResponse;
    /**
     * The api general information.
     */
    readonly generalInformation: types.outputs.ApiResourceGeneralInformationResponse;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The integration service environment reference.
     */
    readonly integrationServiceEnvironment?: types.outputs.ResourceReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata: types.outputs.ApiResourceMetadataResponse;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The policies for the API.
     */
    readonly policies: types.outputs.ApiResourcePoliciesResponse;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The runtime urls.
     */
    readonly runtimeUrls: string[];
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets the integration service environment managed Api.
 */
export function getIntegrationServiceEnvironmentManagedApiOutput(args: GetIntegrationServiceEnvironmentManagedApiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationServiceEnvironmentManagedApiResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationServiceEnvironmentManagedApi(a, opts))
}

export interface GetIntegrationServiceEnvironmentManagedApiOutputArgs {
    /**
     * The api name.
     */
    apiName: pulumi.Input<string>;
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroup: pulumi.Input<string>;
}