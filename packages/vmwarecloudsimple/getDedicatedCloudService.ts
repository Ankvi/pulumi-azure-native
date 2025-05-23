import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns Dedicate Cloud Service
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getDedicatedCloudService(args: GetDedicatedCloudServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedCloudServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:vmwarecloudsimple:getDedicatedCloudService", {
        "dedicatedCloudServiceName": args.dedicatedCloudServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedCloudServiceArgs {
    /**
     * dedicated cloud Service name
     */
    dedicatedCloudServiceName: string;
    /**
     * The name of the resource group
     */
    resourceGroupName: string;
}

/**
 * Dedicated cloud service model
 */
export interface GetDedicatedCloudServiceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
     */
    readonly gatewaySubnet: string;
    /**
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudServices/{dedicatedCloudServiceName}
     */
    readonly id: string;
    /**
     * indicates whether account onboarded or not in a given region
     */
    readonly isAccountOnboarded: string;
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * {dedicatedCloudServiceName}
     */
    readonly name: string;
    /**
     * total nodes purchased
     */
    readonly nodes: number;
    /**
     * link to a service management web portal
     */
    readonly serviceURL: string;
    /**
     * The list of tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
}
/**
 * Returns Dedicate Cloud Service
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getDedicatedCloudServiceOutput(args: GetDedicatedCloudServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDedicatedCloudServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:vmwarecloudsimple:getDedicatedCloudService", {
        "dedicatedCloudServiceName": args.dedicatedCloudServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedCloudServiceOutputArgs {
    /**
     * dedicated cloud Service name
     */
    dedicatedCloudServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    resourceGroupName: pulumi.Input<string>;
}