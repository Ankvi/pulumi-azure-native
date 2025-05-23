import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the primary and secondary keys for a provisioning service.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2017-08-21-preview, 2017-11-15, 2018-01-22, 2020-01-01, 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotDpsResourceKeys(args: ListIotDpsResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotDpsResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceprovisioningservices:listIotDpsResourceKeys", {
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIotDpsResourceKeysArgs {
    /**
     * The provisioning service name to get the shared access keys for.
     */
    provisioningServiceName: string;
    /**
     * resource group name
     */
    resourceGroupName: string;
}

/**
 * List of shared access keys.
 */
export interface ListIotDpsResourceKeysResult {
    /**
     * The next link.
     */
    readonly nextLink: string;
    /**
     * The list of shared access policies.
     */
    readonly value?: types.outputs.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
}
/**
 * List the primary and secondary keys for a provisioning service.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2017-08-21-preview, 2017-11-15, 2018-01-22, 2020-01-01, 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotDpsResourceKeysOutput(args: ListIotDpsResourceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIotDpsResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceprovisioningservices:listIotDpsResourceKeys", {
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIotDpsResourceKeysOutputArgs {
    /**
     * The provisioning service name to get the shared access keys for.
     */
    provisioningServiceName: pulumi.Input<string>;
    /**
     * resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}