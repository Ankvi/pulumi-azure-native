import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the detailed information for a given agent pool.
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20190601preview:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The agentpool that has the ARM resource and properties. 
 * The agentpool will have all information to create an agent pool.
 */
export interface GetAgentPoolResult {
    /**
     * The count of agent machine
     */
    readonly count?: number;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The OS of agent machine
     */
    readonly os?: string;
    /**
     * The provisioning state of this agent pool
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.v20190601preview.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Tier of agent machine
     */
    readonly tier?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The Virtual Network Subnet Resource Id of the agent machine
     */
    readonly virtualNetworkSubnetResourceId?: string;
}
/**
 * Gets the detailed information for a given agent pool.
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getAgentPool(a, opts))
}

export interface GetAgentPoolOutputArgs {
    /**
     * The name of the agent pool.
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
