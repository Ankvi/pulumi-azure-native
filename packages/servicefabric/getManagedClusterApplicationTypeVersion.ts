import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-04-01, 2024-06-01-preview, 2024-09-01-preview.
 */
export function getManagedClusterApplicationTypeVersion(args: GetManagedClusterApplicationTypeVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterApplicationTypeVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedClusterApplicationTypeVersion", {
        "applicationTypeName": args.applicationTypeName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetManagedClusterApplicationTypeVersionArgs {
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
export interface GetManagedClusterApplicationTypeVersionResult {
    /**
     * The URL to the application package
     */
    readonly appPackageUrl: string;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Resource location depends on the parent resource.
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
 * Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-04-01, 2024-06-01-preview, 2024-09-01-preview.
 */
export function getManagedClusterApplicationTypeVersionOutput(args: GetManagedClusterApplicationTypeVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterApplicationTypeVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getManagedClusterApplicationTypeVersion", {
        "applicationTypeName": args.applicationTypeName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
}

export interface GetManagedClusterApplicationTypeVersionOutputArgs {
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