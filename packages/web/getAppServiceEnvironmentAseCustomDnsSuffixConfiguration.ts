import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Full view of the custom domain suffix configuration for ASEv3.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppServiceEnvironmentAseCustomDnsSuffixConfiguration(args: GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getAppServiceEnvironmentAseCustomDnsSuffixConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationArgs {
    /**
     * Name of the App Service Environment.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Full view of the custom domain suffix configuration for ASEv3.
 */
export interface GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
     */
    readonly certificateUrl?: string;
    /**
     * The default custom domain suffix to use for all sites deployed on the ASE.
     */
    readonly dnsSuffix?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
     */
    readonly keyVaultReferenceIdentity?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    readonly provisioningDetails: string;
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Full view of the custom domain suffix configuration for ASEv3.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutput(args: GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getAppServiceEnvironmentAseCustomDnsSuffixConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentAseCustomDnsSuffixConfigurationOutputArgs {
    /**
     * Name of the App Service Environment.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}