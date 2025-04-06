import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01, 2023-12-01, 2024-02-01-preview, 2024-03-01, 2024-04-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dataprotection [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDppResourceGuardProxy(args: GetDppResourceGuardProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetDppResourceGuardProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection:getDppResourceGuardProxy", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardProxyName": args.resourceGuardProxyName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetDppResourceGuardProxyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * name of the resource guard proxy
     */
    resourceGuardProxyName: string;
    /**
     * The name of the backup vault.
     */
    vaultName: string;
}

/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 */
export interface GetDppResourceGuardProxyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    readonly properties: types.outputs.ResourceGuardProxyBaseResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01, 2023-12-01, 2024-02-01-preview, 2024-03-01, 2024-04-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dataprotection [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDppResourceGuardProxyOutput(args: GetDppResourceGuardProxyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDppResourceGuardProxyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dataprotection:getDppResourceGuardProxy", {
        "resourceGroupName": args.resourceGroupName,
        "resourceGuardProxyName": args.resourceGuardProxyName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetDppResourceGuardProxyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the resource guard proxy
     */
    resourceGuardProxyName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}