import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified Iot Connector FHIR destination.
 * Azure REST API version: 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2024-03-31.
 */
export function getIotConnectorFhirDestination(args: GetIotConnectorFhirDestinationArgs, opts?: pulumi.InvokeOptions): Promise<GetIotConnectorFhirDestinationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getIotConnectorFhirDestination", {
        "fhirDestinationName": args.fhirDestinationName,
        "iotConnectorName": args.iotConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIotConnectorFhirDestinationArgs {
    /**
     * The name of IoT Connector FHIR destination resource.
     */
    fhirDestinationName: string;
    /**
     * The name of IoT Connector resource.
     */
    iotConnectorName: string;
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
 * IoT Connector FHIR destination definition.
 */
export interface GetIotConnectorFhirDestinationResult {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * FHIR Mappings
     */
    readonly fhirMapping: types.outputs.IotMappingPropertiesResponse;
    /**
     * Fully qualified resource id of the FHIR service to connect to.
     */
    readonly fhirServiceResourceId: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Determines how resource identity is resolved on the destination.
     */
    readonly resourceIdentityResolutionType: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified Iot Connector FHIR destination.
 * Azure REST API version: 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2024-03-31.
 */
export function getIotConnectorFhirDestinationOutput(args: GetIotConnectorFhirDestinationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotConnectorFhirDestinationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthcareapis:getIotConnectorFhirDestination", {
        "fhirDestinationName": args.fhirDestinationName,
        "iotConnectorName": args.iotConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIotConnectorFhirDestinationOutputArgs {
    /**
     * The name of IoT Connector FHIR destination resource.
     */
    fhirDestinationName: pulumi.Input<string>;
    /**
     * The name of IoT Connector resource.
     */
    iotConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}