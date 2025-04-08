import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets the details of the user provided function app registered with a static site build
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStaticSiteUserProvidedFunctionAppForStaticSiteBuild(args: GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getStaticSiteUserProvidedFunctionAppForStaticSiteBuild", {
        "environmentName": args.environmentName,
        "functionAppName": args.functionAppName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildArgs {
    /**
     * The stage site identifier.
     */
    environmentName: string;
    /**
     * Name of the function app registered with the static site build.
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
export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Description for Gets the details of the user provided function app registered with a static site build
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutput(args: GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getStaticSiteUserProvidedFunctionAppForStaticSiteBuild", {
        "environmentName": args.environmentName,
        "functionAppName": args.functionAppName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteUserProvidedFunctionAppForStaticSiteBuildOutputArgs {
    /**
     * The stage site identifier.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the function app registered with the static site build.
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