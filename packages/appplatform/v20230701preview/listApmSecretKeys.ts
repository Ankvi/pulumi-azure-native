import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List keys of APM sensitive properties.
 */
export function listApmSecretKeys(args: ListApmSecretKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListApmSecretKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:listApmSecretKeys", {
        "apmName": args.apmName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListApmSecretKeysArgs {
    /**
     * The name of the APM
     */
    apmName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Keys of APM sensitive properties
 */
export interface ListApmSecretKeysResult {
    /**
     * Collection of the keys for the APM sensitive properties
     */
    readonly value?: string[];
}
/**
 * List keys of APM sensitive properties.
 */
export function listApmSecretKeysOutput(args: ListApmSecretKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApmSecretKeysResult> {
    return pulumi.output(args).apply((a: any) => listApmSecretKeys(a, opts))
}

export interface ListApmSecretKeysOutputArgs {
    /**
     * The name of the APM
     */
    apmName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}