import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.
 */
export function getApplicationType(args: GetApplicationTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20210601:getApplicationType", {
        "applicationTypeName": args.applicationTypeName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationTypeArgs {
    /**
     * The name of the application type name resource.
     */
    applicationTypeName: string;
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The application type name resource
 */
export interface GetApplicationTypeResult {
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.
 */
export function getApplicationTypeOutput(args: GetApplicationTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationTypeResult> {
    return pulumi.output(args).apply((a: any) => getApplicationType(a, opts))
}

export interface GetApplicationTypeOutputArgs {
    /**
     * The name of the application type name resource.
     */
    applicationTypeName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
