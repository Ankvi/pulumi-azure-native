import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of deployment in Elastic cloud corresponding to the Elastic monitor resource.
 */
export function listDeploymentInfo(args: ListDeploymentInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListDeploymentInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic/v20231101preview:listDeploymentInfo", {
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
 */
export function listDeploymentInfoOutput(args: ListDeploymentInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDeploymentInfoResult> {
    return pulumi.output(args).apply((a: any) => listDeploymentInfo(a, opts))
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
