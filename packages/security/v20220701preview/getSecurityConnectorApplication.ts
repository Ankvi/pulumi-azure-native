import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a specific application for the requested scope by applicationId
 */
export function getSecurityConnectorApplication(args: GetSecurityConnectorApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityConnectorApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20220701preview:getSecurityConnectorApplication", {
        "applicationId": args.applicationId,
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetSecurityConnectorApplicationArgs {
    /**
     * The security Application key - unique key for the standard application
     */
    applicationId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * Security Application over a given scope
 */
export interface GetSecurityConnectorApplicationResult {
    /**
     * description of the application
     */
    readonly description?: string;
    /**
     * display name of the application
     */
    readonly displayName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The application source, what it affects, e.g. Assessments
     */
    readonly sourceResourceType: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific application for the requested scope by applicationId
 */
export function getSecurityConnectorApplicationOutput(args: GetSecurityConnectorApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityConnectorApplicationResult> {
    return pulumi.output(args).apply((a: any) => getSecurityConnectorApplication(a, opts))
}

export interface GetSecurityConnectorApplicationOutputArgs {
    /**
     * The security Application key - unique key for the standard application
     */
    applicationId: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}
