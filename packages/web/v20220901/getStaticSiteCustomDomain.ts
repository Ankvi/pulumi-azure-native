import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets an existing custom domain for a particular static site.
 */
export function getStaticSiteCustomDomain(args: GetStaticSiteCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getStaticSiteCustomDomain", {
        "domainName": args.domainName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteCustomDomainArgs {
    /**
     * The custom domain name.
     */
    domainName: string;
    /**
     * Name of the static site resource to search in.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Static Site Custom Domain Overview ARM resource.
 */
export interface GetStaticSiteCustomDomainResult {
    /**
     * The date and time on which the custom domain was created for the static site.
     */
    readonly createdOn: string;
    /**
     * The domain name for the static site custom domain.
     */
    readonly domainName: string;
    readonly errorMessage: string;
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
     * The status of the custom domain
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The TXT record validation token
     */
    readonly validationToken: string;
}
/**
 * Description for Gets an existing custom domain for a particular static site.
 */
export function getStaticSiteCustomDomainOutput(args: GetStaticSiteCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSiteCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getStaticSiteCustomDomain(a, opts))
}

export interface GetStaticSiteCustomDomainOutputArgs {
    /**
     * The custom domain name.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of the static site resource to search in.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}