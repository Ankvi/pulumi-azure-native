import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Display information about a cloud service.
 * Azure REST API version: 2022-09-04.
 */
export function getCloudService(args: GetCloudServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getCloudService", {
        "cloudServiceName": args.cloudServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudServiceArgs {
    /**
     * Name of the cloud service.
     */
    cloudServiceName: string;
    /**
     * Name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes the cloud service.
 */
export interface GetCloudServiceResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Cloud service properties
     */
    readonly properties: types.outputs.CloudServicePropertiesResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData?: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional.
     */
    readonly zones?: string[];
}
/**
 * Display information about a cloud service.
 * Azure REST API version: 2022-09-04.
 */
export function getCloudServiceOutput(args: GetCloudServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudServiceResult> {
    return pulumi.output(args).apply((a: any) => getCloudService(a, opts))
}

export interface GetCloudServiceOutputArgs {
    /**
     * Name of the cloud service.
     */
    cloudServiceName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}