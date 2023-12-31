import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of a static site.
 */
export function getStaticSite(args: GetStaticSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getStaticSite", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteArgs {
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
 * Static Site ARM resource.
 */
export interface GetStaticSiteResult {
    /**
     * The target branch in the repository.
     */
    readonly branch?: string;
    /**
     * Build properties to configure on the repository.
     */
    readonly buildProperties?: types.outputs.StaticSiteBuildPropertiesResponse;
    /**
     * The custom domains associated with this static site.
     */
    readonly customDomains: string[];
    /**
     * The default autogenerated hostname for the static site.
     */
    readonly defaultHostname: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
     */
    readonly repositoryToken?: string;
    /**
     * URL for the repository of the static site.
     */
    readonly repositoryUrl?: string;
    /**
     * Description of a SKU for a scalable resource.
     */
    readonly sku?: types.outputs.SkuDescriptionResponse;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the details of a static site.
 */
export function getStaticSiteOutput(args: GetStaticSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSiteResult> {
    return pulumi.output(args).apply((a: any) => getStaticSite(a, opts))
}

export interface GetStaticSiteOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
