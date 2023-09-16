import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists the access key for the specified configuration store.
 */
export function listConfigurationStoreKeys(args: ListConfigurationStoreKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListConfigurationStoreKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration/v20230301:listConfigurationStoreKeys", {
        "configStoreName": args.configStoreName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListConfigurationStoreKeysArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
    /**
     * A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
     */
    skipToken?: string;
}

/**
 * The result of a request to list API keys.
 */
export interface ListConfigurationStoreKeysResult {
    /**
     * The URI that can be used to request the next set of paged results.
     */
    readonly nextLink?: string;
    /**
     * The collection value.
     */
    readonly value?: types.outputs.appconfiguration.v20230301.ApiKeyResponse[];
}
/**
 * Lists the access key for the specified configuration store.
 */
export function listConfigurationStoreKeysOutput(args: ListConfigurationStoreKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConfigurationStoreKeysResult> {
    return pulumi.output(args).apply((a: any) => listConfigurationStoreKeys(a, opts))
}

export interface ListConfigurationStoreKeysOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
     */
    skipToken?: pulumi.Input<string>;
}
