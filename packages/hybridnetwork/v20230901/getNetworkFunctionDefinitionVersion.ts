import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a network function definition version.
 */
export function getNetworkFunctionDefinitionVersion(args: GetNetworkFunctionDefinitionVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionDefinitionVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getNetworkFunctionDefinitionVersion", {
        "networkFunctionDefinitionGroupName": args.networkFunctionDefinitionGroupName,
        "networkFunctionDefinitionVersionName": args.networkFunctionDefinitionVersionName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionDefinitionVersionArgs {
    /**
     * The name of the network function definition group.
     */
    networkFunctionDefinitionGroupName: string;
    /**
     * The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
     */
    networkFunctionDefinitionVersionName: string;
    /**
     * The name of the publisher.
     */
    publisherName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Network function definition version.
 */
export interface GetNetworkFunctionDefinitionVersionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network function definition version properties.
     */
    readonly properties: types.outputs.ContainerizedNetworkFunctionDefinitionVersionResponse | types.outputs.VirtualNetworkFunctionNetworkFunctionDefinitionVersionResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a network function definition version.
 */
export function getNetworkFunctionDefinitionVersionOutput(args: GetNetworkFunctionDefinitionVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFunctionDefinitionVersionResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFunctionDefinitionVersion(a, opts))
}

export interface GetNetworkFunctionDefinitionVersionOutputArgs {
    /**
     * The name of the network function definition group.
     */
    networkFunctionDefinitionGroupName: pulumi.Input<string>;
    /**
     * The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
     */
    networkFunctionDefinitionVersionName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}