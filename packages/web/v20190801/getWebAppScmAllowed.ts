import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns whether Scm basic auth is allowed on the site or not.
 */
export function getWebAppScmAllowed(args: GetWebAppScmAllowedArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppScmAllowedResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20190801:getWebAppScmAllowed", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppScmAllowedArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Publishing Credentials Policies parameters.
 */
export interface GetWebAppScmAllowedResult {
    /**
     * <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.
     */
    readonly allow: boolean;
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
 * Returns whether Scm basic auth is allowed on the site or not.
 */
export function getWebAppScmAllowedOutput(args: GetWebAppScmAllowedOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppScmAllowedResult> {
    return pulumi.output(args).apply((a: any) => getWebAppScmAllowed(a, opts))
}

export interface GetWebAppScmAllowedOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}