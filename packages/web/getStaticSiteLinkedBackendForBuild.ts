import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Static Site Linked Backend ARM resource.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getStaticSiteLinkedBackendForBuild(args: GetStaticSiteLinkedBackendForBuildArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteLinkedBackendForBuildResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getStaticSiteLinkedBackendForBuild", {
        "environmentName": args.environmentName,
        "linkedBackendName": args.linkedBackendName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteLinkedBackendForBuildArgs {
    /**
     * The stage site identifier
     */
    environmentName: string;
    /**
     * Name of the linked backend that should be retrieved
     */
    linkedBackendName: string;
    /**
     * Name of the static site
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Static Site Linked Backend ARM resource.
 */
export interface GetStaticSiteLinkedBackendForBuildResult {
    /**
     * The resource id of the backend linked to the static site
     */
    readonly backendResourceId?: string;
    /**
     * The date and time on which the backend was linked to the static site.
     */
    readonly createdOn: string;
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
     * The provisioning state of the linking process.
     */
    readonly provisioningState: string;
    /**
     * The region of the backend linked to the static site
     */
    readonly region?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Static Site Linked Backend ARM resource.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getStaticSiteLinkedBackendForBuildOutput(args: GetStaticSiteLinkedBackendForBuildOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStaticSiteLinkedBackendForBuildResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getStaticSiteLinkedBackendForBuild", {
        "environmentName": args.environmentName,
        "linkedBackendName": args.linkedBackendName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteLinkedBackendForBuildOutputArgs {
    /**
     * The stage site identifier
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the linked backend that should be retrieved
     */
    linkedBackendName: pulumi.Input<string>;
    /**
     * Name of the static site
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}