import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns whether FTP is allowed on the site or not.
 */
export function getWebAppFtpAllowed(args: GetWebAppFtpAllowedArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppFtpAllowedResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201201:getWebAppFtpAllowed", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppFtpAllowedArgs {
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
export interface GetWebAppFtpAllowedResult {
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
 * Returns whether FTP is allowed on the site or not.
 */
export function getWebAppFtpAllowedOutput(args: GetWebAppFtpAllowedOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppFtpAllowedResult> {
    return pulumi.output(args).apply((a: any) => getWebAppFtpAllowed(a, opts))
}

export interface GetWebAppFtpAllowedOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}