import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the agent pool in the Hybrid AKS provisioned cluster instance
 */
export function getAgentPool(args: GetAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20231115preview:getAgentPool", {
        "agentPoolName": args.agentPoolName,
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetAgentPoolArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The agentPool resource definition
 */
export interface GetAgentPoolResult {
    /**
     * AvailabilityZones - The list of Availability zones to use for nodes. Datacenter racks modelled as zones
     */
    readonly availabilityZones?: string[];
    /**
     * Count - Number of agents to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    readonly count?: number;
    /**
     * Extended Location definition
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The resource location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The version of node image
     */
    readonly nodeImageVersion?: string;
    /**
     * Specifies the OS SKU used by the agent pool. The default is CBLMariner if OSType is Linux. The default is Windows2019 when OSType is Windows.
     */
    readonly osSKU?: string;
    /**
     * OsType - OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. Possible values include: 'Linux', 'Windows'
     */
    readonly osType?: string;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState: string;
    /**
     * Defines the observed state of the agent pool
     */
    readonly status?: types.outputs.AgentPoolProvisioningStatusResponseStatus;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * VmSize - The size of the agent pool VMs.
     */
    readonly vmSize?: string;
}
/**
 * Gets the agent pool in the Hybrid AKS provisioned cluster instance
 */
export function getAgentPoolOutput(args: GetAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getAgentPool(a, opts))
}

export interface GetAgentPoolOutputArgs {
    /**
     * Parameter for the name of the agent pool in the provisioned cluster
     */
    agentPoolName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}
