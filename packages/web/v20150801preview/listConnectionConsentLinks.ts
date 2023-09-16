import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists consent links of a connection.
 */
export function listConnectionConsentLinks(args: ListConnectionConsentLinksArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionConsentLinksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20150801preview:listConnectionConsentLinks", {
        "connectionName": args.connectionName,
        "id": args.id,
        "kind": args.kind,
        "location": args.location,
        "name": args.name,
        "parameters": args.parameters,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "type": args.type,
    }, opts);
}

export interface ListConnectionConsentLinksArgs {
    /**
     * The connection name.
     */
    connectionName: string;
    /**
     * Resource Id
     */
    id?: string;
    /**
     * Kind of resource
     */
    kind?: string;
    /**
     * Resource Location
     */
    location?: string;
    /**
     * Resource Name
     */
    name?: string;
    /**
     * Array of links
     */
    parameters?: types.inputs.web.v20150801preview.ConsentLinkInputParameter[];
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * Resource tags
     */
    tags?: {[key: string]: string};
    /**
     * Resource type
     */
    type?: string;
}

/**
 * Collection of consent links
 */
export interface ListConnectionConsentLinksResult {
    /**
     * Collection of resources
     */
    readonly value?: types.outputs.web.v20150801preview.ConsentLinkResponse[];
}
/**
 * Lists consent links of a connection.
 */
export function listConnectionConsentLinksOutput(args: ListConnectionConsentLinksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectionConsentLinksResult> {
    return pulumi.output(args).apply((a: any) => listConnectionConsentLinks(a, opts))
}

export interface ListConnectionConsentLinksOutputArgs {
    /**
     * The connection name.
     */
    connectionName: pulumi.Input<string>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    location?: pulumi.Input<string>;
    /**
     * Resource Name
     */
    name?: pulumi.Input<string>;
    /**
     * Array of links
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.web.v20150801preview.ConsentLinkInputParameterArgs>[]>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource type
     */
    type?: pulumi.Input<string>;
}
