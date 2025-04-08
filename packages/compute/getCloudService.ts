import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Display information about a cloud service.
 *
 * Uses Azure REST API version 2022-09-04.
 *
 * Other available API versions: 2022-04-04, 2024-11-04. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2022-09-04.
 *
 * Other available API versions: 2022-04-04, 2024-11-04. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCloudServiceOutput(args: GetCloudServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getCloudService", {
        "cloudServiceName": args.cloudServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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