import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Private Endpoint Connection resource.
 *
 * Uses Azure REST API version 2024-04-03. In version 2.x of the Azure Native provider, it used API version 2022-10-14-preview.
 *
 * Other available API versions: 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateEndpointConnectionByWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnectionByWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnectionByWorkspace {
        return new PrivateEndpointConnectionByWorkspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization:PrivateEndpointConnectionByWorkspace';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnectionByWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnectionByWorkspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnectionByWorkspace.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The group ids for the private endpoint resource.
     */
    public /*out*/ readonly groupIds!: pulumi.Output<string[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The private endpoint resource.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse | undefined>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse>;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnectionByWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionByWorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateLinkServiceConnectionState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkServiceConnectionState'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization/v20210401preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20210903preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20220210preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20220401preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20221014preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20230707preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20230905:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20231004preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20231101preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20240116preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20240306preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20240403:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20240408preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20240808preview:PrivateEndpointConnectionByWorkspace" }, { type: "azure-native:desktopvirtualization/v20241101preview:PrivateEndpointConnectionByWorkspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnectionByWorkspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnectionByWorkspace resource.
 */
export interface PrivateEndpointConnectionByWorkspaceArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace
     */
    workspaceName: pulumi.Input<string>;
}