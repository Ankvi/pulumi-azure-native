import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Primary and Secondary ConnectionStrings to the namespace
 */
export function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:listNamespaceKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceKeysArgs {
    /**
     * The connection string of the namespace for the specified authorizationRule.
     */
    authorizationRuleName: string;
    /**
     * The namespace name.
     */
    namespaceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Namespace/NotificationHub Connection String
 */
export interface ListNamespaceKeysResult {
    /**
     * KeyName of the created AuthorizationRule
     */
    readonly keyName?: string;
    /**
     * PrimaryConnectionString of the AuthorizationRule.
     */
    readonly primaryConnectionString?: string;
    /**
     * PrimaryKey of the created AuthorizationRule.
     */
    readonly primaryKey?: string;
    /**
     * SecondaryConnectionString of the created AuthorizationRule
     */
    readonly secondaryConnectionString?: string;
    /**
     * SecondaryKey of the created AuthorizationRule
     */
    readonly secondaryKey?: string;
}
/**
 * Gets the Primary and Secondary ConnectionStrings to the namespace
 */
export function listNamespaceKeysOutput(args: ListNamespaceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamespaceKeysResult> {
    return pulumi.output(args).apply((a: any) => listNamespaceKeys(a, opts))
}

export interface ListNamespaceKeysOutputArgs {
    /**
     * The connection string of the namespace for the specified authorizationRule.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}