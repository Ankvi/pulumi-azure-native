import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the details of the user provided function app registered with a static site
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getStaticSiteUserProvidedFunctionAppForStaticSite(args: GetStaticSiteUserProvidedFunctionAppForStaticSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteUserProvidedFunctionAppForStaticSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getStaticSiteUserProvidedFunctionAppForStaticSite", {
        "functionAppName": args.functionAppName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteArgs {
    /**
     * Name of the function app registered with the static site.
     */
    functionAppName: string;
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
 * Static Site User Provided Function App ARM resource.
 */
export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteResult {
    /**
     * The date and time on which the function app was registered with the static site.
     */
    readonly createdOn: string;
    /**
     * The region of the function app registered with the static site
     */
    readonly functionAppRegion?: string;
    /**
     * The resource id of the function app registered with the static site
     */
    readonly functionAppResourceId?: string;
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the details of the user provided function app registered with a static site
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getStaticSiteUserProvidedFunctionAppForStaticSiteOutput(args: GetStaticSiteUserProvidedFunctionAppForStaticSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStaticSiteUserProvidedFunctionAppForStaticSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getStaticSiteUserProvidedFunctionAppForStaticSite", {
        "functionAppName": args.functionAppName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteOutputArgs {
    /**
     * Name of the function app registered with the static site.
     */
    functionAppName: pulumi.Input<string>;
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}