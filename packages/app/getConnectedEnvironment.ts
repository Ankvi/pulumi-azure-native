import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of an connectedEnvironment.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectedEnvironment(args: GetConnectedEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getConnectedEnvironment", {
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentArgs {
    /**
     * Name of the connectedEnvironment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An environment for Kubernetes cluster specialized for web workloads by Azure App Service
 */
export interface GetConnectedEnvironmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Custom domain configuration for the environment
     */
    readonly customDomainConfiguration?: types.outputs.CustomDomainConfigurationResponse;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    readonly daprAIConnectionString?: string;
    /**
     * Default Domain Name for the cluster
     */
    readonly defaultDomain: string;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    readonly deploymentErrors: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
     * Provisioning state of the Kubernetes Environment.
     */
    readonly provisioningState: string;
    /**
     * Static IP of the connectedEnvironment
     */
    readonly staticIp?: string;
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
 * Get the properties of an connectedEnvironment.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectedEnvironmentOutput(args: GetConnectedEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectedEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getConnectedEnvironment", {
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentOutputArgs {
    /**
     * Name of the connectedEnvironment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}