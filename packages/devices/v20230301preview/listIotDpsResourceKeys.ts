import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * List the primary and secondary keys for a provisioning service.
 */
export function listIotDpsResourceKeys(args: ListIotDpsResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotDpsResourceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices/v20230301preview:listIotDpsResourceKeys", {
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
    readonly value?: types.outputs.devices.v20230301preview.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
}
/**
 * List the primary and secondary keys for a provisioning service.
 */
export function listIotDpsResourceKeysOutput(args: ListIotDpsResourceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIotDpsResourceKeysResult> {
    return pulumi.output(args).apply((a: any) => listIotDpsResourceKeys(a, opts))
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
