import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a private endpoint.
 */
export function getJobPrivateEndpoint(args: GetJobPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetJobPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getJobPrivateEndpoint", {
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
 */
export function getJobPrivateEndpointOutput(args: GetJobPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getJobPrivateEndpoint(a, opts))
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
