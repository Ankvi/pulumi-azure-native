import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an integration account session.
 *
 * Uses Azure REST API version 2019-05-01.
 */
export function getIntegrationAccountSession(args: GetIntegrationAccountSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountSessionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountSession", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "sessionName": args.sessionName,
    }, opts);
}

export interface GetIntegrationAccountSessionArgs {
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
export interface GetIntegrationAccountSessionResult {
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
 *
 * Uses Azure REST API version 2019-05-01.
 */
export function getIntegrationAccountSessionOutput(args: GetIntegrationAccountSessionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationAccountSessionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getIntegrationAccountSession", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "sessionName": args.sessionName,
    }, opts);
}

export interface GetIntegrationAccountSessionOutputArgs {
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