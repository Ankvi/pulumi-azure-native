import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a private endpoint.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getJobPrivateEndpoint(args: GetJobPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetJobPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getJobPrivateEndpoint", {
        "jobAgentName": args.jobAgentName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetJobPrivateEndpointArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: string;
    /**
     * The name of the private endpoint to get.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A job agent private endpoint.
 */
export interface GetJobPrivateEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private endpoint id of the private endpoint.
     */
    readonly privateEndpointId: string;
    /**
     * ARM resource id of the server the private endpoint will target.
     */
    readonly targetServerAzureResourceId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a private endpoint.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getJobPrivateEndpointOutput(args: GetJobPrivateEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJobPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getJobPrivateEndpoint", {
        "jobAgentName": args.jobAgentName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetJobPrivateEndpointOutputArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the private endpoint to get.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}