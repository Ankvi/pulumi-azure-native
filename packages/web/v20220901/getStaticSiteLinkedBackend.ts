import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Static Site Linked Backend ARM resource.
 */
export function getStaticSiteLinkedBackend(args: GetStaticSiteLinkedBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteLinkedBackendResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getStaticSiteLinkedBackend", {
        "linkedBackendName": args.linkedBackendName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteLinkedBackendArgs {
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
export interface GetStaticSiteLinkedBackendResult {
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
 */
export function getStaticSiteLinkedBackendOutput(args: GetStaticSiteLinkedBackendOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSiteLinkedBackendResult> {
    return pulumi.output(args).apply((a: any) => getStaticSiteLinkedBackend(a, opts))
}

export interface GetStaticSiteLinkedBackendOutputArgs {
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