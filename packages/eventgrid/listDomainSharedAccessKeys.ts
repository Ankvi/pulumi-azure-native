import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a domain.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview, 2023-12-15-preview.
 */
export function listDomainSharedAccessKeys(args: ListDomainSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDomainSharedAccessKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:listDomainSharedAccessKeys", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDomainSharedAccessKeysArgs {
    /**
     * Name of the domain.
     */
    domainName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Shared access keys of the Domain.
 */
export interface ListDomainSharedAccessKeysResult {
    /**
     * Shared access key1 for the domain.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the domain.
     */
    readonly key2?: string;
}
/**
 * List the two keys used to publish to a domain.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview, 2023-12-15-preview.
 */
export function listDomainSharedAccessKeysOutput(args: ListDomainSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDomainSharedAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => listDomainSharedAccessKeys(a, opts))
}

export interface ListDomainSharedAccessKeysOutputArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}