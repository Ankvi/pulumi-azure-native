import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a server communication link.
 *
 * Uses Azure REST API version 2014-04-01.
 */
export function getServerCommunicationLink(args: GetServerCommunicationLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetServerCommunicationLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServerCommunicationLink", {
        "communicationLinkName": args.communicationLinkName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerCommunicationLinkArgs {
    /**
     * The name of the server communication link.
     */
    communicationLinkName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Server communication link.
 */
export interface GetServerCommunicationLinkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Communication link kind.  This property is used for Azure Portal metadata.
     */
    readonly kind: string;
    /**
     * Communication link location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the partner server.
     */
    readonly partnerServer: string;
    /**
     * The state.
     */
    readonly state: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Returns a server communication link.
 *
 * Uses Azure REST API version 2014-04-01.
 */
export function getServerCommunicationLinkOutput(args: GetServerCommunicationLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerCommunicationLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServerCommunicationLink", {
        "communicationLinkName": args.communicationLinkName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerCommunicationLinkOutputArgs {
    /**
     * The name of the server communication link.
     */
    communicationLinkName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}