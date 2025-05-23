import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get service fabric.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getServiceFabric(args: GetServiceFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getServiceFabric", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetServiceFabricArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the service fabric.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the user profile.
     */
    userName: string;
}

/**
 * A Service Fabric.
 */
export interface GetServiceFabricResult {
    /**
     * The applicable schedule for the virtual machine.
     */
    readonly applicableSchedule: types.outputs.ApplicableScheduleResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource id of the environment under which the service fabric resource is present
     */
    readonly environmentId?: string;
    /**
     * The backing service fabric resource's id
     */
    readonly externalServiceFabricId?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
/**
 * Get service fabric.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getServiceFabricOutput(args: GetServiceFabricOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceFabricResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devtestlab:getServiceFabric", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetServiceFabricOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the service fabric.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    userName: pulumi.Input<string>;
}