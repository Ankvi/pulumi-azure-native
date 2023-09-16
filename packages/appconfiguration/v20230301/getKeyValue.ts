import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the properties of the specified key-value. NOTE: This operation is intended for use in ARM Template deployments. For all other scenarios involving App Configuration key-values the data plane API should be used instead.
 */
export function getKeyValue(args: GetKeyValueArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration/v20230301:getKeyValue", {
        "configStoreName": args.configStoreName,
        "keyValueName": args.keyValueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKeyValueArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * Identifier of key and label combination. Key and label are joined by $ character. Label is optional.
     */
    keyValueName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The key-value resource along with all resource properties.
 */
export interface GetKeyValueResult {
    /**
     * The content type of the key-value's value.
     * Providing a proper content-type can enable transformations of values when they are retrieved by applications.
     */
    readonly contentType?: string;
    /**
     * An ETag indicating the state of a key-value within a configuration store.
     */
    readonly eTag: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The primary identifier of a key-value.
     * The key is used in unison with the label to uniquely identify a key-value.
     */
    readonly key: string;
    /**
     * A value used to group key-values.
     * The label is used in unison with the key to uniquely identify a key-value.
     */
    readonly label: string;
    /**
     * The last time a modifying operation was performed on the given key-value.
     */
    readonly lastModified: string;
    /**
     * A value indicating whether the key-value is locked.
     * A locked key-value may not be modified until it is unlocked.
     */
    readonly locked: boolean;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * A dictionary of tags that can help identify what a key-value may be applicable for.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The value of the key-value.
     */
    readonly value?: string;
}
/**
 * Gets the properties of the specified key-value. NOTE: This operation is intended for use in ARM Template deployments. For all other scenarios involving App Configuration key-values the data plane API should be used instead.
 */
export function getKeyValueOutput(args: GetKeyValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyValueResult> {
    return pulumi.output(args).apply((a: any) => getKeyValue(a, opts))
}

export interface GetKeyValueOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * Identifier of key and label combination. Key and label are joined by $ character. Label is optional.
     */
    keyValueName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
