import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the secret of the named value specified by its identifier.
 */
export function listNamedValue(args: ListNamedValueArgs, opts?: pulumi.InvokeOptions): Promise<ListNamedValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:listNamedValue", {
        "namedValueId": args.namedValueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListNamedValueArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
 */
export interface ListNamedValueResult {
    /**
     * This is secret value of the NamedValue entity.
     */
    readonly value?: string;
}
/**
 * Gets the secret of the named value specified by its identifier.
 */
export function listNamedValueOutput(args: ListNamedValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamedValueResult> {
    return pulumi.output(args).apply((a: any) => listNamedValue(a, opts))
}

export interface ListNamedValueOutputArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
