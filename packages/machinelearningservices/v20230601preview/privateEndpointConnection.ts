import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Private Endpoint Connection resource.
 */
export class PrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnection {
        return new PrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230601preview:PrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnection.__pulumiType;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Same as workspace location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Private Endpoint resource.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.WorkspacePrivateEndpointResourceResponse | undefined>;
    /**
     * The connection state.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * The current provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Optional. This field is required to be implemented by the RP because AML is supporting more than one tier
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200101:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200218preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200301:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200401:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200501preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200515preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200601:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200801:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20200901preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20210101:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20210301preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20210401:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20210701:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20220101preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20220201preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20220501:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20220601preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20221001:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20221001preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20221201preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20230201preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20230401:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20230401preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20230801preview:PrivateEndpointConnection" }, { type: "azure-native:machinelearningservices/v20231001:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Same as workspace location.
     */
    location?: pulumi.Input<string>;
    /**
     * NRP Private Endpoint Connection Name
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * The connection state.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Optional. This field is required to be implemented by the RP because AML is supporting more than one tier
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
