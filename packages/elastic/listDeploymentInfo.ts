import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of deployment in Elastic cloud corresponding to the Elastic monitor resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-01, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDeploymentInfo(args: ListDeploymentInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListDeploymentInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:listDeploymentInfo", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeploymentInfoArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The properties of deployment in Elastic cloud corresponding to the Elastic monitor resource.
 */
export interface ListDeploymentInfoResult {
    /**
     * Deployment URL of the elasticsearch in Elastic cloud deployment.
     */
    readonly deploymentUrl: string;
    /**
     * Disk capacity of the elasticsearch in Elastic cloud deployment.
     */
    readonly diskCapacity: string;
    /**
     * Elasticsearch endpoint in Elastic cloud deployment. This is either the aliased_endpoint if available, or the service_url otherwise.
     */
    readonly elasticsearchEndPoint: string;
    /**
     * Marketplace SaaS Info of the resource.
     */
    readonly marketplaceSaasInfo: types.outputs.MarketplaceSaaSInfoResponse;
    /**
     * RAM capacity of the elasticsearch in Elastic cloud deployment.
     */
    readonly memoryCapacity: string;
    /**
     * The Elastic deployment status.
     */
    readonly status: string;
    /**
     * Version of the elasticsearch in Elastic cloud deployment.
     */
    readonly version: string;
}
/**
 * The properties of deployment in Elastic cloud corresponding to the Elastic monitor resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-06-01, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listDeploymentInfoOutput(args: ListDeploymentInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListDeploymentInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:listDeploymentInfo", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeploymentInfoOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}