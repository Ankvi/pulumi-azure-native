import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Lists the secrets for an existing static site.
 */
export function listStaticSiteSecrets(args: ListStaticSiteSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:listStaticSiteSecrets", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteSecretsArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * String dictionary resource.
 */
export interface ListStaticSiteSecretsResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Settings.
     */
    readonly properties: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Lists the secrets for an existing static site.
 */
export function listStaticSiteSecretsOutput(args: ListStaticSiteSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStaticSiteSecretsResult> {
    return pulumi.output(args).apply((a: any) => listStaticSiteSecrets(a, opts))
}

export interface ListStaticSiteSecretsOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}