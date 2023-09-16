import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an integration account session.
 */
export function getSession(args: GetSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetSessionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getSession", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "sessionName": args.sessionName,
    }, opts);
}

export interface GetSessionArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The integration account session name.
     */
    sessionName: string;
}

/**
 * The integration account session.
 */
export interface GetSessionResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The session content.
     */
    readonly content?: any;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account session.
 */
export function getSessionOutput(args: GetSessionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSessionResult> {
    return pulumi.output(args).apply((a: any) => getSession(a, opts))
}

export interface GetSessionOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account session name.
     */
    sessionName: pulumi.Input<string>;
}
