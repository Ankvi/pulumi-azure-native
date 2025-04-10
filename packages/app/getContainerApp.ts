import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App.
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function getContainerApp(args: GetContainerAppArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getContainerApp", {
        "containerAppName": args.containerAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Container App.
 */
export interface GetContainerAppResult {
    /**
     * Non versioned Container App configuration properties.
     */
    readonly configuration?: types.outputs.ConfigurationResponse;
    /**
     * Id used to verify domain name ownership
     */
    readonly customDomainVerificationId: string;
    /**
     * Resource ID of environment.
     */
    readonly environmentId?: string;
    /**
     * The endpoint of the eventstream of the container app.
     */
    readonly eventStreamEndpoint: string;
    /**
     * The complex type of the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Name of the latest ready revision of the Container App.
     */
    readonly latestReadyRevisionName: string;
    /**
     * Fully Qualified Domain Name of the latest revision of the Container App.
     */
    readonly latestRevisionFqdn: string;
    /**
     * Name of the latest revision of the Container App.
     */
    readonly latestRevisionName: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Deprecated. Resource ID of the Container App's environment.
     */
    readonly managedEnvironmentId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Outbound IP Addresses for container app.
     */
    readonly outboundIpAddresses: string[];
    /**
     * Provisioning state of the Container App.
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
     * Container App versioned application definition.
     */
    readonly template?: types.outputs.TemplateResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Workload profile type to pin for container app execution.
     */
    readonly workloadProfileType?: string;
}
/**
 * Container App.
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-03-01, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function getContainerAppOutput(args: GetContainerAppOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContainerAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getContainerApp", {
        "containerAppName": args.containerAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}