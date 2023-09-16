import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Represents the response of a service unit resource.
 */
export function getServiceUnit(args: GetServiceUnitArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceUnitResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager/v20191101preview:getServiceUnit", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "serviceTopologyName": args.serviceTopologyName,
        "serviceUnitName": args.serviceUnitName,
    }, opts);
}

export interface GetServiceUnitArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the service resource.
     */
    serviceName: string;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: string;
    /**
     * The name of the service unit resource.
     */
    serviceUnitName: string;
}

/**
 * Represents the response of a service unit resource.
 */
export interface GetServiceUnitResult {
    /**
     * The artifacts for the service unit.
     */
    readonly artifacts?: types.outputs.deploymentmanager.v20191101preview.ServiceUnitArtifactsResponse;
    /**
     * Describes the type of ARM deployment to be performed on the resource.
     */
    readonly deploymentMode: string;
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
     */
    readonly targetResourceGroup: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Represents the response of a service unit resource.
 */
export function getServiceUnitOutput(args: GetServiceUnitOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceUnitResult> {
    return pulumi.output(args).apply((a: any) => getServiceUnit(a, opts))
}

export interface GetServiceUnitOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: pulumi.Input<string>;
    /**
     * The name of the service unit resource.
     */
    serviceUnitName: pulumi.Input<string>;
}
