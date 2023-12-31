import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.
 */
export function getApplicationTypeVersion(args: GetApplicationTypeVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationTypeVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20210601:getApplicationTypeVersion", {
        "applicationTypeName": args.applicationTypeName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetApplicationTypeVersionArgs {
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
    /**
     * The application type version.
     */
    version: string;
}

/**
 * An application type version resource for the specified application type name resource.
 */
export interface GetApplicationTypeVersionResult {
    /**
     * The URL to the application package
     */
    readonly appPackageUrl: string;
    /**
     * List of application type parameters that can be overridden when creating or updating the application.
     */
    readonly defaultParameterList: {[key: string]: string};
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
     * The current deployment or provisioning state, which only appears in the response
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
 * Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.
 */
export function getApplicationTypeVersionOutput(args: GetApplicationTypeVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationTypeVersionResult> {
    return pulumi.output(args).apply((a: any) => getApplicationTypeVersion(a, opts))
}

export interface GetApplicationTypeVersionOutputArgs {
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
    /**
     * The application type version.
     */
    version: pulumi.Input<string>;
}
