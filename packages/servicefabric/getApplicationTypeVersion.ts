import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationTypeVersion(args: GetApplicationTypeVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationTypeVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getApplicationTypeVersion", {
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
     * The name of the resource group. The name is case insensitive.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: string;
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
 * Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationTypeVersionOutput(args: GetApplicationTypeVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationTypeVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabric:getApplicationTypeVersion", {
        "applicationTypeName": args.applicationTypeName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The application type version.
     */
    version: pulumi.Input<string>;
}